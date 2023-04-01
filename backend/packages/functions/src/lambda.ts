import { DynamoDB } from "aws-sdk";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { chunk } from 'lodash';
import { User, InstituteUser, InstituteUserRole } from "@backend/core/types/user";
import { createDefinedUUID } from "@backend/core/nano-id";
import { Course } from "@backend/core/types/course";
import { isAuthorized } from "@backend/core/is-authorized";
import { Institute } from "@backend/core/types/institute";
import { Parse } from "@backend/core/parse-event";
import { getDefaultInstituteUser, getDefaultUser } from "@backend/core/get-defaults";
import { BadRequest, Forbidden, SuccessWithData, isEmailInSystem, createCognitoUser } from './utils';
import { Status } from "@backend/core/types/common";

const MAX_INSTITUTES = 50;
const USERS_TABLE_NAME = process.env.USER_TABLE_NAME as string;
const INSTITUTE_TABLE_NAME = process.env.INSTITUTE_TABLE_NAME as string;
const INSTITUTE_USER_TABLE_NAME = process.env.INSTITUTE_USER_TABLE_NAME as string;
const COURSES_TABLE = process.env.COURSES_TABLE as string;

export const getLoggedInUserInformation: APIGatewayProxyHandlerV2 = async (event) => {
  const { userId } = Parse(event);

  const documentClient = new DynamoDB.DocumentClient();

  const { Items: userResp = [] } = await documentClient.query({
    TableName: USERS_TABLE_NAME,
    KeyConditionExpression: '#id = :id',
    ExpressionAttributeNames: {
      '#id': 'id',
    },
    ExpressionAttributeValues: {
      ':id': userId
    },
    Limit: 1
  }).promise();

  const user = userResp[0] as User;

  const { Items: allInstitutesForUser = [] } = await documentClient.query({
    TableName: INSTITUTE_USER_TABLE_NAME,
    KeyConditionExpression: '#id = :id',
    ExpressionAttributeNames: {
      '#id': 'id',
    },
    ExpressionAttributeValues: {
      ':id': userId
    },
    Limit: MAX_INSTITUTES,
  }).promise();

  const { Responses = {} } = await documentClient.batchGet({
    RequestItems: {
      [INSTITUTE_TABLE_NAME]: {
        Keys: (allInstitutesForUser as InstituteUser[]).map((instituteUser) => ({ id: instituteUser.instituteId }))
      }
    }
  }).promise();

  const allInstituteInformation = Responses[INSTITUTE_TABLE_NAME] as Institute[];


  const userDTO = {
    id: user.id,
    name: user.name,
    institutes: allInstituteInformation.map((institute) => ({
      id: institute.id,
      name: institute.name,
      role: (allInstitutesForUser as InstituteUser[]).find((instituteUser) => instituteUser.instituteId === institute.id)?.role
    }))
  }

  return SuccessWithData({ user: userDTO });
};

export const createCourse: APIGatewayProxyHandlerV2 = async (event) => {
  const { institutes, pathParams, body } = Parse(event);
  const { instituteId } = pathParams;
  if (!isAuthorized(instituteId as string, institutes, [InstituteUserRole.OWNER])) {
    return {
      statusCode: 403,
      body: JSON.stringify({ message: 'Forbidden' })
    }
  }

  const { name, lecturer } = body;

  if (!name || !lecturer) {
    return BadRequest('Invalid Inputs Passed');
  }

  const course: Course = {
    id: createDefinedUUID(12),
    lecturer: {
      id: lecturer.id,
      name: lecturer.name
    },
    instituteId: instituteId as string,
    name: name.trim(),
    lecturerId: lecturer.id
  }

  const documentClient = new DynamoDB.DocumentClient();

  await documentClient.put({
    TableName: COURSES_TABLE,
    Item: course,
    ConditionExpression: 'attribute_not_exists(#id)',
    ExpressionAttributeNames: {
      '#id': 'id'
    }
  }).promise()

  return SuccessWithData({ course })
};

export const getCourses: APIGatewayProxyHandlerV2 = async (event) => {
  const { userId, institutes, pathParams, body } = Parse(event);
  const { instituteId } = pathParams;
  const { limit = 10, nextKey } = body;

  const MAX_LIMIT = limit > 10 ? 10 : limit;

  const documentClient = new DynamoDB.DocumentClient();

  if (isAuthorized(instituteId as string, institutes, [InstituteUserRole.OWNER, InstituteUserRole.ADMINISTRATOR])) {
    // view all course of institute
    const { Items = [] } = await documentClient.query({
      TableName: COURSES_TABLE,
      IndexName: 'by-institute-index',
      KeyConditionExpression: '#instituteId = :instituteId',
      ExpressionAttributeNames: {
        '#instituteId': 'instituteId'
      },
      ExpressionAttributeValues: {
        ':instituteId': instituteId
      },
      ExclusiveStartKey: nextKey,
      Limit: MAX_LIMIT
    }).promise();

    return SuccessWithData({ courses: Items })
  }

  if (isAuthorized(instituteId as string, institutes, [InstituteUserRole.LECTURER])) {
    // view courses that they have been assigned to
    const { Items = [] } = await documentClient.query({
      TableName: COURSES_TABLE,
      IndexName: 'by-institute-lecturer-index',
      KeyConditionExpression: '#instituteId = :instituteId and #lecturerId = :lecturerId',
      ExclusiveStartKey: nextKey,
      Limit: MAX_LIMIT,
      ExpressionAttributeNames: {
        '#instituteId': 'instituteId',
        '#lecturerId': 'lecturerId'
      },
      ExpressionAttributeValues: {
        ':lecturerId': userId,
        ':instituteId': instituteId
      }
    }).promise()

    return SuccessWithData({ courses: Items })
  }

  if (isAuthorized(instituteId as string, institutes, [InstituteUserRole.STUDENT])) {
    /**
     * TODO: Will students need another table? Student_Courses - Student ID,Student Name, Course ID
     * Concern: Course table -> 1 item can have upto 1MB data. Will we exceed 1mb per item? 
     * Are we setting max students per course? If not, we might need a seperate table.
     * What do you think @Semini? 
     */
    return SuccessWithData({ courses: [] })
  }

  return Forbidden();
};

export const addUsersToInstitute: APIGatewayProxyHandlerV2 = async (event) => {
  const USER_POOL_ID = process.env.USER_POOL_ID as string;
  const documentClient = new DynamoDB.DocumentClient();

  const { institutes, body, pathParams } = Parse(event);
  const { instituteId } = pathParams;

  if (!isAuthorized(instituteId as string, institutes, [InstituteUserRole.ADMINISTRATOR, InstituteUserRole.OWNER])) {
    return Forbidden();
  }

  const { emails = [], role } = body as { emails: string[], role: InstituteUserRole }

  if (emails.length === 0) {
    return BadRequest('Atleast one user must be added');
  }

  const registerPromises = emails.map(async (email) => {
    const { status, data } = await isEmailInSystem(USERS_TABLE_NAME, email);
    let instituteUser: InstituteUser;
    let appUser!: User;

    if (status === 'no') {
      const name = email.split('@')[0];
      const cognitoUser = await createCognitoUser(email, USER_POOL_ID);
      appUser = getDefaultUser({ email, id: cognitoUser.Username, name, status: Status.IN_ACTIVE });
      instituteUser = getDefaultInstituteUser({ email, id: cognitoUser.Username, instituteId, name, role, status: Status.IN_ACTIVE });
    } else {
      instituteUser = getDefaultInstituteUser({ email: data.email, id: data.id, instituteId, role, status: Status.ACTIVE, name: data.name })
    }

    await documentClient.transactWrite({
      TransactItems: [
        {
          Put: {
            TableName: INSTITUTE_USER_TABLE_NAME,
            Item: instituteUser,
            ConditionExpression: 'attribute_not_exists(#id) AND attribute_not_exists(#instituteId)',
            ExpressionAttributeNames: {
              '#id': 'id',
              '#instituteId': 'instituteId'
            }
          }
        },
        ...appUser ? [
          {
            Put: {
              TableName: USERS_TABLE_NAME,
              Item: appUser,
            }
          }
        ] : []
      ]
    }).promise();

    return instituteUser;
  })

  const users = await Promise.all(registerPromises);
  return SuccessWithData({ users });
}

export const getAllUsersInAnInstitute: APIGatewayProxyHandlerV2 = async (event) => {
  const { body, institutes, pathParams } = Parse(event);
  const { instituteId } = pathParams;
  const { nextKey, limit = 10, role: roleToQuery = undefined } = body as { nextKey: any, limit: number, role?: InstituteUserRole };

  if (!isAuthorized(instituteId as string, institutes, [InstituteUserRole.OWNER, InstituteUserRole.ADMINISTRATOR])) {
    return Forbidden();
  }

  const MAX_LIMIT = limit > 10 ? 10 : limit;

  const documentClient = new DynamoDB.DocumentClient();

  const queryKeys = {
    ...!!roleToQuery && { role: roleToQuery },
    instituteId
  }

  let keyConditionExpression = '';
  let expressionAttributeNames = {};
  let expressionAttributeValues = {};

  Object.entries(queryKeys).forEach(([pk, value]) => {
    keyConditionExpression += keyConditionExpression ? ` AND #${pk} = :${pk}` : `#${pk} = :${pk}`;
    expressionAttributeNames = {
      ...expressionAttributeNames,
      [`#${pk}`]: pk
    }
    expressionAttributeValues = {
      ...expressionAttributeValues,
      [`:${pk}`]: value
    }
  });

  console.log({ keyConditionExpression, expressionAttributeNames, expressionAttributeValues })

  const { Items = [], LastEvaluatedKey } = await documentClient.query({
    TableName: INSTITUTE_USER_TABLE_NAME,
    KeyConditionExpression: keyConditionExpression,
    IndexName: 'by-intitute-id-role-index',
    ExclusiveStartKey: nextKey,
    ExpressionAttributeNames: expressionAttributeNames,
    ExpressionAttributeValues: expressionAttributeValues,
    Limit: MAX_LIMIT
  }).promise();

  return SuccessWithData({ users: Items, nextKey: LastEvaluatedKey })

}

export const activateUser: APIGatewayProxyHandlerV2 = async (event) => {
  const pe = Parse(event);
  const { userId, body } = pe;

  const { fullName = '' } = body;

  const documentClient = new DynamoDB.DocumentClient();

  // get all institutes for user and activate them
  const { Items: instituteUsers = [] } = await documentClient.query({
    TableName: INSTITUTE_USER_TABLE_NAME,
    Limit: 100,
    KeyConditionExpression: '#id = :id',
    ProjectionExpression: '#id, #instituteId',
    ExpressionAttributeNames: {
      '#id': 'id',
      '#instituteId': 'instituteId'
    },
    ExpressionAttributeValues: {
      ':id': userId
    }
  }).promise();

  const mappedUpdates = instituteUsers.map((instituteUser) => {
    const { id, instituteId } = instituteUser as InstituteUser;
    return {
      Update: {
        Key: { id, instituteId },
        TableName: INSTITUTE_USER_TABLE_NAME,
        UpdateExpression: 'SET #status = :status, #name = :name',
        ExpressionAttributeNames: {
          '#status': 'status',
          '#name': 'name'
        },
        ExpressionAttributeValues: {
          ':status': Status.ACTIVE,
          ':name': fullName.trim().toLowerCase()
        }
      }
    }
  });

  const transactions = [];

  if (mappedUpdates.length > 0) {
    transactions.push(...mappedUpdates);
  }
  transactions.push({
    Update: {
      Key: { id: userId },
      TableName: USERS_TABLE_NAME,
      UpdateExpression: 'SET #status = :status, #name = :name',
      ExpressionAttributeNames: {
        '#status': 'status',
        '#name': 'name'
      },
      ExpressionAttributeValues: {
        ':status': Status.ACTIVE,
        ':name': fullName.trim().toLowerCase()
      }
    }
  })

  const MAX_CHUNK = 25;
  const chunkedItems = chunk(transactions, MAX_CHUNK);

  const promises = chunkedItems.map(async (eachChunk) => {
    await documentClient.transactWrite({
      TransactItems: eachChunk
    }).promise();
  })

  await Promise.all(promises);

  return SuccessWithData({ status: 'ok' });

};