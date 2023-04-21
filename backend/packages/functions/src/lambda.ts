import { DynamoDB } from "aws-sdk";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { chunk } from "lodash";
import { User, InstituteUser, InstituteUserRole, } from "@backend/core/types/user";
import { createDefinedUUID } from "@backend/core/nano-id";
import { Course, CourseLesson, StudentCourse, CourseUser, LessonVisbility } from "@backend/core/types/course";
import { isAuthorized } from "@backend/core/is-authorized";
import { Institute } from "@backend/core/types/institute";
import { Parse } from "@backend/core/parse-event";
import { getDefaultInstituteUser, getDefaultUser, } from "@backend/core/get-defaults";
import { BadRequest, Forbidden, SuccessWithData, isEmailInSystem, createCognitoUser } from "./utils";
import { Status } from "@backend/core/types/common";
import { DocumentClient } from "aws-sdk/clients/dynamodb";

const MAX_INSTITUTES = 50;
const USERS_TABLE_NAME = process.env.USER_TABLE_NAME as string;
const INSTITUTE_TABLE_NAME = process.env.INSTITUTE_TABLE_NAME as string;
const INSTITUTE_USER_TABLE_NAME = process.env.INSTITUTE_USER_TABLE_NAME as string;
const COURSES_TABLE = process.env.COURSES_TABLE as string;
const STUDENT_COURSE_TABLE = process.env.STUDENT_COURSE_TABLE as string;
const COURSE_LESSON_TABLE = process.env.COURSE_LESSON_TABLE as string;

export const getLoggedInUserInformation: APIGatewayProxyHandlerV2 = async (
  event
) => {
  const { userId } = Parse(event);

  const documentClient = new DynamoDB.DocumentClient();

  const { Items: userResp = [] } = await documentClient
    .query({
      TableName: USERS_TABLE_NAME,
      KeyConditionExpression: "#id = :id",
      ExpressionAttributeNames: {
        "#id": "id",
      },
      ExpressionAttributeValues: {
        ":id": userId,
      },
      Limit: 1,
    })
    .promise();

  const user = userResp[0] as User;

  const { Items: allInstitutesForUser = [] } = await documentClient
    .query({
      TableName: INSTITUTE_USER_TABLE_NAME,
      KeyConditionExpression: "#id = :id",
      ExpressionAttributeNames: {
        "#id": "id",
      },
      ExpressionAttributeValues: {
        ":id": userId,
      },
      Limit: MAX_INSTITUTES,
    })
    .promise();

  const { Responses = {} } = await documentClient
    .batchGet({
      RequestItems: {
        [INSTITUTE_TABLE_NAME]: {
          Keys: (allInstitutesForUser as InstituteUser[]).map(
            (instituteUser) => ({ id: instituteUser.instituteId })
          ),
        },
      },
    })
    .promise();

  const allInstituteInformation = Responses[
    INSTITUTE_TABLE_NAME
  ] as Institute[];

  const activeInstitutes = allInstituteInformation.filter((institute) => {
    const instituteUser = (allInstitutesForUser as InstituteUser[]).find(
      (instituteUser) => instituteUser.instituteId === institute.id
    );
    return instituteUser?.status === Status.ACTIVE;
  });

  const userDTO = {
    id: user.id,
    name: user.name,
    institutes: activeInstitutes.map((institute) => ({
      id: institute.id,
      name: institute.name,
      role: (allInstitutesForUser as InstituteUser[]).find(
        (instituteUser) => instituteUser.instituteId === institute.id
      )?.role,
    })),
  };

  return SuccessWithData({ user: userDTO });
};

export const createCourse: APIGatewayProxyHandlerV2 = async (event) => {
  const { institutes, pathParams, body } = Parse(event);
  const { instituteId } = pathParams;
  if (
    !isAuthorized(instituteId as string, institutes, [InstituteUserRole.OWNER])
  ) {
    return {
      statusCode: 403,
      body: JSON.stringify({ message: "Forbidden" }),
    };
  }

  const { name, lecturer } = body;

  if (!name || !lecturer) {
    return BadRequest("Invalid Inputs Passed");
  }

  const course: Course = {
    id: createDefinedUUID(12),
    lecturer: {
      id: lecturer.id,
      name: lecturer.name,
    },
    instituteId: instituteId as string,
    name: name.trim(),
    lecturerId: lecturer.id,
  };

  const documentClient = new DynamoDB.DocumentClient();

  await documentClient
    .put({
      TableName: COURSES_TABLE,
      Item: course,
      ConditionExpression: "attribute_not_exists(#id)",
      ExpressionAttributeNames: {
        "#id": "id",
      },
    })
    .promise();

  return SuccessWithData({ course });
};

export const getCourseById: APIGatewayProxyHandlerV2 = async (event) => {
  const { pathParams } = Parse(event);
  const { courseId, instituteId } = pathParams;
  const documentClient = new DynamoDB.DocumentClient();

  const { Item } = await documentClient
    .get({
      TableName: COURSES_TABLE,
      Key: {
        id: courseId,
      },
    })
    .promise();

  return SuccessWithData({ course: Item });
};

export const getCourses: APIGatewayProxyHandlerV2 = async (event) => {
  const { userId, institutes, pathParams, body } = Parse(event);
  const { instituteId } = pathParams;
  const { limit = 10, nextKey } = body;

  const MAX_LIMIT = limit > 10 ? 10 : limit;

  const documentClient = new DynamoDB.DocumentClient();

  if (
    isAuthorized(instituteId as string, institutes, [
      InstituteUserRole.OWNER,
      InstituteUserRole.ADMINISTRATOR,
    ])
  ) {
    // view all course of institute
    const { Items = [], LastEvaluatedKey } = await documentClient
      .query({
        TableName: COURSES_TABLE,
        IndexName: "by-institute-index",
        KeyConditionExpression: "#instituteId = :instituteId",
        ExpressionAttributeNames: {
          "#instituteId": "instituteId",
        },
        ExpressionAttributeValues: {
          ":instituteId": instituteId,
        },
        ExclusiveStartKey: nextKey,
        Limit: MAX_LIMIT,
      })
      .promise();

    return SuccessWithData({ courses: Items, nextKey: LastEvaluatedKey });
  }

  if (
    isAuthorized(instituteId as string, institutes, [
      InstituteUserRole.LECTURER,
    ])
  ) {
    // view courses that they have been assigned to
    const { Items = [], LastEvaluatedKey } = await documentClient
      .query({
        TableName: COURSES_TABLE,
        IndexName: "by-institute-lecturer-index",
        KeyConditionExpression:
          "#instituteId = :instituteId and #lecturerId = :lecturerId",
        ExclusiveStartKey: nextKey,
        Limit: MAX_LIMIT,
        ExpressionAttributeNames: {
          "#instituteId": "instituteId",
          "#lecturerId": "lecturerId",
        },
        ExpressionAttributeValues: {
          ":lecturerId": userId,
          ":instituteId": instituteId,
        },
      })
      .promise();

    return SuccessWithData({ courses: Items, nextKey: LastEvaluatedKey });
  }

  if (
    isAuthorized(instituteId as string, institutes, [InstituteUserRole.STUDENT])
  ) {
    const { Items = [], LastEvaluatedKey } = await documentClient
      .query({
        TableName: STUDENT_COURSE_TABLE,
        IndexName: "by-student-institute-index",
        KeyConditionExpression:
          "studentId = :studentId and instituteId = :instituteId",
        ExpressionAttributeValues: {
          ":studentId": userId,
          ":instituteId": instituteId,
        },
        Limit: MAX_LIMIT,
      })
      .promise();

    const courseIds = (Items as StudentCourse[]).map((item) => ({
      id: item.courseId,
    }));

    if (courseIds.length === 0) {
      return SuccessWithData({ courses: [], nextKey: undefined });
    }

    const { Responses = {} } = await documentClient
      .batchGet({
        RequestItems: {
          [COURSES_TABLE]: {
            Keys: courseIds,
          },
        },
      })
      .promise();
    return SuccessWithData({
      courses: Responses[COURSES_TABLE] || [],
      nextKey: LastEvaluatedKey,
    });
  }

  return Forbidden();
};

export const addUsersToInstitute: APIGatewayProxyHandlerV2 = async (event) => {
  const USER_POOL_ID = process.env.USER_POOL_ID as string;
  const documentClient = new DynamoDB.DocumentClient();

  const { institutes, body, pathParams } = Parse(event);
  const { instituteId } = pathParams;

  if (
    !isAuthorized(instituteId as string, institutes, [
      InstituteUserRole.ADMINISTRATOR,
      InstituteUserRole.OWNER,
    ])
  ) {
    return Forbidden();
  }

  const { emails = [], role } = body as {
    emails: string[];
    role: InstituteUserRole;
  };

  if (emails.length === 0) {
    return BadRequest("Atleast one user must be added");
  }

  const registerPromises = emails.map(async (email) => {
    const { status, data } = await isEmailInSystem(USERS_TABLE_NAME, email);
    let instituteUser: InstituteUser;
    let appUser!: User;

    if (status === "no") {
      const name = email.split("@")[0];
      const cognitoUser = await createCognitoUser(email, USER_POOL_ID);
      appUser = getDefaultUser({
        email,
        id: cognitoUser.Username,
        name,
        status: Status.IN_ACTIVE,
      });
      instituteUser = getDefaultInstituteUser({
        email,
        id: cognitoUser.Username,
        instituteId,
        name,
        role,
        status: Status.IN_ACTIVE,
      });
    } else {
      instituteUser = getDefaultInstituteUser({
        email: data.email,
        id: data.id,
        instituteId,
        role,
        status: Status.ACTIVE,
        name: data.name,
      });
    }

    await documentClient
      .transactWrite({
        TransactItems: [
          {
            Put: {
              TableName: INSTITUTE_USER_TABLE_NAME,
              Item: instituteUser,
              ConditionExpression:
                "attribute_not_exists(#id) AND attribute_not_exists(#instituteId)",
              ExpressionAttributeNames: {
                "#id": "id",
                "#instituteId": "instituteId",
              },
            },
          },
          ...(appUser
            ? [
              {
                Put: {
                  TableName: USERS_TABLE_NAME,
                  Item: appUser,
                },
              },
            ]
            : []),
        ],
      })
      .promise();

    return instituteUser;
  });

  const users = await Promise.all(registerPromises);
  return SuccessWithData({ users });
};

export const getAllUsersInAnInstitute: APIGatewayProxyHandlerV2 = async (
  event
) => {
  const { body, institutes, pathParams } = Parse(event);
  const { instituteId } = pathParams;
  const {
    nextKey,
    limit = 10,
    role: roleToQuery = undefined,
  } = body as { nextKey: any; limit: number; role?: InstituteUserRole };

  if (
    !isAuthorized(instituteId as string, institutes, [
      InstituteUserRole.OWNER,
      InstituteUserRole.ADMINISTRATOR,
    ])
  ) {
    return Forbidden();
  }

  const MAX_LIMIT = limit > 10 ? 10 : limit;

  const documentClient = new DynamoDB.DocumentClient();

  const queryKeys = {
    ...(!!roleToQuery && { role: roleToQuery }),
    instituteId,
  };

  let keyConditionExpression = "";
  let expressionAttributeNames = {};
  let expressionAttributeValues = {};

  Object.entries(queryKeys).forEach(([pk, value]) => {
    keyConditionExpression += keyConditionExpression
      ? ` AND #${pk} = :${pk}`
      : `#${pk} = :${pk}`;
    expressionAttributeNames = {
      ...expressionAttributeNames,
      [`#${pk}`]: pk,
    };
    expressionAttributeValues = {
      ...expressionAttributeValues,
      [`:${pk}`]: value,
    };
  });

  const { Items = [], LastEvaluatedKey } = await documentClient
    .query({
      TableName: INSTITUTE_USER_TABLE_NAME,
      KeyConditionExpression: keyConditionExpression,
      IndexName: "by-intitute-id-role-index",
      ExclusiveStartKey: nextKey,
      ExpressionAttributeNames: expressionAttributeNames,
      ExpressionAttributeValues: expressionAttributeValues,
      Limit: MAX_LIMIT,
    })
    .promise();

  return SuccessWithData({ users: Items, nextKey: LastEvaluatedKey });
};

export const activateUser: APIGatewayProxyHandlerV2 = async (event) => {
  const pe = Parse(event);
  const { userId, body } = pe;

  const { fullName = "" } = body;

  const documentClient = new DynamoDB.DocumentClient();

  // get all institutes for user and activate them
  const { Items: instituteUsers = [] } = await documentClient
    .query({
      TableName: INSTITUTE_USER_TABLE_NAME,
      Limit: 100,
      KeyConditionExpression: "#id = :id",
      ProjectionExpression: "#id, #instituteId",
      ExpressionAttributeNames: {
        "#id": "id",
        "#instituteId": "instituteId",
      },
      ExpressionAttributeValues: {
        ":id": userId,
      },
    })
    .promise();

  const mappedUpdates = instituteUsers.map((instituteUser) => {
    const { id, instituteId } = instituteUser as InstituteUser;
    return {
      Update: {
        Key: { id, instituteId },
        TableName: INSTITUTE_USER_TABLE_NAME,
        UpdateExpression: "SET #status = :status, #name = :name",
        ExpressionAttributeNames: {
          "#status": "status",
          "#name": "name",
        },
        ExpressionAttributeValues: {
          ":status": Status.ACTIVE,
          ":name": fullName.trim().toLowerCase(),
        },
      },
    };
  });

  const transactions = [];

  if (mappedUpdates.length > 0) {
    transactions.push(...mappedUpdates);
  }
  transactions.push({
    Update: {
      Key: { id: userId },
      TableName: USERS_TABLE_NAME,
      UpdateExpression: "SET #status = :status, #name = :name",
      ExpressionAttributeNames: {
        "#status": "status",
        "#name": "name",
      },
      ExpressionAttributeValues: {
        ":status": Status.ACTIVE,
        ":name": fullName.trim().toLowerCase(),
      },
    },
  });

  const MAX_CHUNK = 25;
  const chunkedItems = chunk(transactions, MAX_CHUNK);

  const promises = chunkedItems.map(async (eachChunk) => {
    await documentClient
      .transactWrite({
        TransactItems: eachChunk,
      })
      .promise();
  });

  await Promise.all(promises);

  return SuccessWithData({ status: "ok" });
};

export const assignStudentsToCourse: APIGatewayProxyHandlerV2 = async (
  event
) => {
  const { institutes, pathParams, body } = Parse(event);
  const { instituteId } = pathParams;
  if (
    !isAuthorized(instituteId as string, institutes, [
      InstituteUserRole.OWNER,
      InstituteUserRole.ADMINISTRATOR,
    ])
  ) {
    return {
      statusCode: 403,
      body: JSON.stringify({ message: "Forbidden" }),
    };
  }

  const { courseId, students = [] } = body as {
    courseId: string;
    students: CourseUser[];
  };

  if (!courseId || students.length === 0) {
    return BadRequest("Invalid Inputs Passed");
  }

  const studentCourses = students.map((student) => {
    const timestamp = Date.now();
    const studentCourse: StudentCourse = {
      studentId: student.id,
      courseId,
      instituteId: instituteId as string,
      student: student,
      id: createDefinedUUID(12),
      createdAt: timestamp,
      updatedAt: timestamp,
    };
    return studentCourse;
  });

  const transactions = studentCourses.map((studentCourse) => ({
    Put: {
      TableName: STUDENT_COURSE_TABLE,
      Item: studentCourse,
    },
  }));

  const MAX_TRANSACTIONS = 25;
  const chunkedTransactions = chunk(transactions, MAX_TRANSACTIONS);

  const documentClient = new DocumentClient();

  await Promise.all(
    chunkedTransactions.map(async (transaction) => {
      await documentClient
        .transactWrite({
          TransactItems: transaction,
        })
        .promise();
    })
  );
  return SuccessWithData({ items: studentCourses });
};

export const createLessonCourse: APIGatewayProxyHandlerV2 = async (event) => {
  const { institutes, pathParams, body } = Parse(event);
  const { instituteId } = pathParams;
  if (
    !isAuthorized(instituteId as string, institutes, [InstituteUserRole.OWNER, InstituteUserRole.ADMINISTRATOR, InstituteUserRole.LECTURER])
  ) {
    return {
      statusCode: 403,
      body: JSON.stringify({ message: "Forbidden" }),
    };
  }
  const timestamp = Date.now();
  const { courseId, title, description, files } = body as CourseLesson;

  if (!courseId || !title || !description) {
    return BadRequest("Invalid Inputs Passed");
  }

  const lesson: CourseLesson = {
    id: createDefinedUUID(12),
    courseId: courseId,
    instituteId: instituteId as string,
    createdAt: timestamp,
    title,
    description,
    files,
    updatedAt: timestamp,
    visibility: LessonVisbility.HIDDEN,
    courseIdInstituteId: `${courseId}#${instituteId}`
  };
  const documentClient = new DynamoDB.DocumentClient();

  await documentClient
    .put({
      TableName: COURSE_LESSON_TABLE,
      Item: lesson,
    })
    .promise();

  return SuccessWithData({ lesson });
};

export const getCourseLessons: APIGatewayProxyHandlerV2 = async (event) => {
  const { institutes, pathParams, body } = Parse(event);

  const { instituteId, courseId } = pathParams;
  const { nextKey } = body;
  const documentClient = new DocumentClient();

  if (isAuthorized(instituteId as string, institutes, [InstituteUserRole.ADMINISTRATOR, InstituteUserRole.LECTURER, InstituteUserRole.OWNER])) {
    // show all hidden, visible content for a course.
    const resp = await documentClient.query({
      TableName: COURSE_LESSON_TABLE,
      IndexName: 'by-courseIdInstituteId-visibility',
      KeyConditionExpression: '#courseIdInstituteId = :courseIdInstituteId',
      ExpressionAttributeNames: {
        '#courseIdInstituteId': 'courseIdInstituteId'
      },
      ExpressionAttributeValues: {
        ':courseIdInstituteId': `${courseId}#${instituteId}`
      },
      ExclusiveStartKey: nextKey,
      ScanIndexForward: false,
    }).promise();
    return SuccessWithData({ lessons: resp.Items || [], nextKey: resp.LastEvaluatedKey })
  }


  if (isAuthorized(instituteId as string, institutes, [InstituteUserRole.STUDENT])) {
    // show all hidden, visible content for a course.
    const resp = await documentClient.query({
      TableName: COURSE_LESSON_TABLE,
      IndexName: 'by-courseIdInstituteId-visibility',
      KeyConditionExpression: '#courseIdInstituteId = :courseIdInstituteId and #visibility = :visibility',
      ExpressionAttributeNames: {
        '#courseIdInstituteId': 'courseIdInstituteId',
        '#visibility': 'visibility'
      },
      ExpressionAttributeValues: {
        ':courseIdInstituteId': `${courseId}#${instituteId}`,
        ':visibility': LessonVisbility.VISIBLE
      },
      ExclusiveStartKey: nextKey,
      ScanIndexForward: false,
    }).promise();
    return SuccessWithData({ lessons: resp.Items || [], nextKey: resp.LastEvaluatedKey })
  }

  return Forbidden();
};

export const updateCourseLesson: APIGatewayProxyHandlerV2 = async (event) => {
  const pe = Parse(event);
  const { body, institutes, pathParams } = pe;
  const { instituteId, lessonId } = pathParams;

  if (!isAuthorized(instituteId as string, institutes, [InstituteUserRole.LECTURER, InstituteUserRole.ADMINISTRATOR, InstituteUserRole.OWNER])) {
    return Forbidden();
  }

  const { lastUpdatedAt, patchAttr } = body as { patchAttr: Partial<CourseLesson>, lastUpdatedAt: number };
  const { description, files = [], title, visibility } = patchAttr;

  const newUpdatedAt = Date.now();

  const parsedPatchObject = {
    ...description && { description },
    ...files.length > 0 && { files },
    ...title && { title },
    ...visibility && { visibility },
    updatedAt: newUpdatedAt
  }

  let updateExpression = '';
  let updateExpressionNames = {};
  let updateExpressionValues = {};

  Object.entries(parsedPatchObject).forEach(([key, value]) => {
    updateExpression += updateExpression ? `, #${key} = :${key}` : `SET #${key} = :${key}`;
    updateExpressionNames = { ...updateExpressionNames, [`#${key}`]: key, }
    updateExpressionValues = { ...updateExpressionValues, [`:${key}`]: value, }
  });

  const client = new DocumentClient();
  await client.update({
    TableName: COURSE_LESSON_TABLE,
    Key: { id: lessonId },
    ConditionExpression: '#cupdatedAt = :cupdatedAt',
    ExpressionAttributeNames: { ...updateExpressionNames, '#cupdatedAt': 'updatedAt' },
    ExpressionAttributeValues: { ...updateExpressionValues, ':cupdatedAt': lastUpdatedAt },
    UpdateExpression: updateExpression
  }).promise();

  return SuccessWithData({ ...parsedPatchObject, updatedAt: newUpdatedAt })
}