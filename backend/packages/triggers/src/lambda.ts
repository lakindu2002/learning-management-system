
import { DynamoDB } from "aws-sdk";
import { PostConfirmationTriggerEvent, PostConfirmationTriggerHandler, PreTokenGenerationTriggerEvent, PreTokenGenerationTriggerHandler } from "aws-lambda";
import { Institute } from '@backend/core/types/institute';
import { InstituteUser } from '@backend/core/types/user';
import { getDefaultInstitute, getDefaultInstituteUser, getDefaultUser } from '@backend/core/get-defaults';

const documentClient = new DynamoDB.DocumentClient();
const MAX_INSTITUTES_PER_USER = 50;

export const handlePostConfirmationOnCognito: PostConfirmationTriggerHandler = async (event: PostConfirmationTriggerEvent) => {
  const {
    triggerSource,
    request: { userAttributes },
  } = event;

  // ignore any forgot password events
  if (triggerSource === "PostConfirmation_ConfirmForgotPassword") {
    return;
  }

  const { name, sub, email } = userAttributes;
  const instituteName = userAttributes['custom:institute_name'];

  const institute = getDefaultInstitute({ name: instituteName });
  const instituteUser = getDefaultInstituteUser({ name, id: sub, email, instituteId: institute.id });
  const user = getDefaultUser({ email, id: sub, name });

  await documentClient.transactWrite({
    TransactItems: [
      {
        Put: {
          TableName: process.env.INSTITUTE_TABLE_NAME as string,
          Item: institute,
        }
      },
      {
        Put: {
          TableName: process.env.INSTITUTE_USER_TABLE_NAME as string,
          Item: instituteUser,
        }
      },
      {
        Put: {
          TableName: process.env.USER_TABLE_NAME as string,
          Item: user,
        }
      }
    ]
  }).promise();
};

export const handlePreTokenGenerationOnCognito: PreTokenGenerationTriggerHandler = async (event: PreTokenGenerationTriggerEvent) => {
  const { request: { userAttributes: { sid } }, response } = event;
  const customClaims: any = {};

  const { Items: instituteUserResponse = [] } = await documentClient.query({
    TableName: process.env.INSTITUTE_USER_TABLE_NAME as string,
    Limit: MAX_INSTITUTES_PER_USER,
    KeyConditionExpression: '#id = :id',
    ExpressionAttributeNames: {
      '#id': 'userId'
    },
    ExpressionAttributeValues: {
      ':id': sid
    }
  }).promise();

  const instituteIds = (instituteUserResponse as InstituteUser[]).map((instituteUser) => instituteUser.instituteId);

  const { Responses = {} } = await documentClient.batchGet({
    RequestItems: {
      [process.env.INSTITUTE_TABLE_NAME as string]: {
        Keys: instituteIds.map((id) => ({ id })),
        ProjectionExpression: '#id',
        ExpressionAttributeNames: {
          '#id': 'id',
        }
      }
    }
  }).promise()

  const institutes = (Responses[process.env.INSTITUTE_TABLE_NAME as string] || []) as Partial<Institute>[]

  institutes.forEach((institute) => {
    const { id = '' } = institute;
    const { role } = (instituteUserResponse as InstituteUser[]).find((user) => user.instituteId === id) as InstituteUser;
    customClaims.id = JSON.stringify({ role })
  });

  response.claimsOverrideDetails = {
    claimsToAddOrOverride: {
      ...customClaims,
    }
  };

  return event;
}