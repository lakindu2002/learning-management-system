import { DynamoDB } from "aws-sdk";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { User, InstituteUser } from "@backend/core/types/user";
import { Institute } from "@backend/core/types/institute";
import { Parse } from "@backend/core/parse-event";

const MAX_INSTITUTES = 50;
const USERS_TABLE_NAME = process.env.USER_TABLE_NAME as string;
const INSTITUTE_TABLE_NAME = process.env.INSTITUTE_TABLE_NAME as string;
const INSTITUTE_USER_TABLE_NAME = process.env.INSTITUTE_USER_TABLE_NAME as string;

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
