import { DynamoDB, CognitoIdentityServiceProvider } from "aws-sdk";
import { User } from "@backend/core/types/user";

const documentClient = new DynamoDB.DocumentClient();
const cognito = new CognitoIdentityServiceProvider();

export const Forbidden = () => ({
  statusCode: 403,
  body: JSON.stringify({ message: "Forbidden" }),
});
export const SuccessWithData = (data: any) => ({
  statusCode: 200,
  body: JSON.stringify(data),
});
export const BadRequest = (message = "Bad Request") => ({
  statusCode: 400,
  body: JSON.stringify({ message }),
});

export const isEmailInSystem = async (
  userTableName: string,
  email: string
): Promise<{ status: "yes" | "no"; data: User }> => {
  const { Items = [] } = await documentClient.query({
    TableName: userTableName,
    IndexName: "by-email-index",
    KeyConditionExpression: "#email = :email",
    ExpressionAttributeNames: {
      "#email": "email",
    },
    ExpressionAttributeValues: {
      ":email": email,
    },
  }).promise();

  return { status: Items[0] ? "yes" : "no", data: Items[0] as User };
};

export const createCognitoUser = async (email: string, userPoolId: string): Promise<CognitoIdentityServiceProvider.UserType> => {
  const name = email.split("@")[0];
  const { User } = await cognito.adminCreateUser({
    Username: email,
    UserPoolId: userPoolId,
    UserAttributes: [
      {
        Name: "name",
        Value: name,
      },
      {
        Name: "email",
        Value: email,
      },
      {
        Name: 'email_verified',
        Value: 'true'
      },
    ],
    DesiredDeliveryMediums: ['EMAIL'],
  }).promise();
  return User as CognitoIdentityServiceProvider.UserType;
};
