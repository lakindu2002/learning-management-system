import { StackContext } from "sst/constructs/FunctionalStack";
import { Cognito, use, Function } from "sst/constructs";
import { StringAttribute } from "aws-cdk-lib/aws-cognito";
import { dynamodb } from "./dynamodb";
import { Duration } from "aws-cdk-lib";

export function cognito({ stack }: StackContext) {
  const { instituteTableName, instituteUserTableName, userTableName } = use(dynamodb);

  const postConfirmationTrigger = new Function(stack, "post-confirmation-trigger", {
    handler: "packages/triggers/src/lambda.handlePostConfirmationOnCognito",
    environment: {
      INSTITUTE_TABLE_NAME: instituteTableName,
      USER_TABLE_NAME: userTableName,
      INSTITUTE_USER_TABLE_NAME: instituteUserTableName,
    },
  })

  const preTokenTrigger = new Function(stack, "pre-token-trigger", {
    handler: "packages/triggers/src/lambda.handlePreTokenGenerationOnCognito",
    environment: {
      INSTITUTE_TABLE_NAME: instituteTableName,
      USER_TABLE_NAME: userTableName,
      INSTITUTE_USER_TABLE_NAME: instituteUserTableName,
    },
  })

  postConfirmationTrigger.attachPermissions(["dynamodb:TransactWriteItem", "dynamodb:PutItem"])
  preTokenTrigger.attachPermissions(["dynamodb:Query", "dynamodb:BatchGetItem"])

  const auth = new Cognito(stack, "lms-auth", {
    login: ["email"],
    triggers: {
      postConfirmation: postConfirmationTrigger,
      preTokenGeneration: preTokenTrigger
    },
    cdk: {
      userPool: {
        customAttributes: {
          institute_name: new StringAttribute({ minLen: 1, maxLen: 255 }),
        },
        passwordPolicy: {
          minLength: 6,
          requireDigits: false,
          requireLowercase: true,
          requireSymbols: false,
          requireUppercase: false,
          tempPasswordValidity: Duration.days(30)
        }
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
