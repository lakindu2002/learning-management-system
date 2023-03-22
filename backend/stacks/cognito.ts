import { StackContext } from "sst/constructs/FunctionalStack";
import { Cognito, use } from "sst/constructs";
import { StringAttribute } from "aws-cdk-lib/aws-cognito";
import { dynamodb } from "./dynamodb";

export function cognito({ stack }: StackContext) {
  const { instituteTableName, instituteUserTableName, userTableName } = use(dynamodb);
  const auth = new Cognito(stack, "lms-auth", {
    login: ["email"],
    triggers: {
      postConfirmation: {
        handler: "packages/triggers/src/lambda.handlePostConfirmationOnCognito",
        environment: {
          INSTITUTE_TABLE_NAME: instituteTableName,
          USER_TABLE_NAME: userTableName,
          INSTITUTE_USER_TABLE_NAME: instituteUserTableName,
        }
      },
      preTokenGeneration: {
        handler: "packages/triggers/src/lambda.handlePreTokenGenerationOnCognito",
        environment: {
          INSTITUTE_TABLE_NAME: instituteTableName,
          USER_TABLE_NAME: userTableName,
          INSTITUTE_USER_TABLE_NAME: instituteUserTableName,
        }
      }
    },
    cdk: {
      userPool: {
        customAttributes: {
          institute_name: new StringAttribute({ minLen: 1, maxLen: 255 }),
        },
      },
    },
  });

  const stackOutputs = {
    userPoolId: auth.userPoolId,
    clientId: auth.userPoolClientId,
    userPoolArn: auth.userPoolArn,
  }

  stack.addOutputs({
    ...stackOutputs
  })

  return {
    ...stackOutputs
  };
}
