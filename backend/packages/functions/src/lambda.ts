import { DynamoDB } from "aws-sdk";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { User, InstituteUser, InstituteUserRole } from "@backend/core/types/user";
import { createDefinedUUID } from "@backend/core/nano-id";
import { Course } from "@backend/core/types/course";
import { isAuthorized } from "@backend/core/is-authorized";
import { Institute } from "@backend/core/types/institute";
import { Parse } from "@backend/core/parse-event";

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

  return {
    statusCode: 200,
    body: JSON.stringify({ user: userDTO })
  };
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
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid inputs passed' })
    }
  }

  const course: Course = {
    id: createDefinedUUID(12),
    lecturer: {
      id: lecturer.id,
      name: lecturer.name
    },
    instituteId: instituteId as string,
    name: name.trim().toLowerCase(),
    lecturerId: lecturer.id
  }

  const documentClient = new DynamoDB.DocumentClient();

  await documentClient.put({
    TableName: COURSES_TABLE,
    Item: course,
    ConditionExpression: 'if_not_exists(#id)',
    ExpressionAttributeNames: {
      '#id': 'id'
    }
  }).promise()

  return {
    statusCode: 200,
    body: JSON.stringify({ course })
  }
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

    return {
      statusCode: 200,
      body: JSON.stringify({ courses: Items })
    }

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

    return {
      statusCode: 200,
      body: JSON.stringify({ courses: Items })
    }
  }

  if (isAuthorized(instituteId as string, institutes, [InstituteUserRole.STUDENT])) {
    /**
     * TODO: Will students need another table? Student_Courses - Student ID,Student Name, Course ID
     * Concern: Course table -> 1 item can have upto 1MB data. Will we exceed 1mb per item? 
     * Are we setting max students per course? If not, we might need a seperate table.
     * What do you think @Semini? 
     */
    return {
      statusCode: 200,
      body: JSON.stringify({ courses: [] })
    }
  }

  return {
    statusCode: 403,
    body: JSON.stringify({ message: 'Forbidden' })
  }
};



