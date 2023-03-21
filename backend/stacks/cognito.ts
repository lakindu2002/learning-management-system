import { StackContext } from "sst/constructs/FunctionalStack";
import { Cognito } from "sst/constructs";
import { StringAttribute } from "aws-cdk-lib/aws-cognito";

export function cognito({ stack }: StackContext) {
  const auth = new Cognito(stack, "lms-auth", {
    login: ["email"],
    triggers: {
      postConfirmation: "packages/triggers/src/lambda.handlePostConfirmationOnCognito",
      preTokenGeneration: "packages/triggers/src/lambda.handlePreTokenGenerationOnCognito",
    },
    cdk: {
      userPool: {
        customAttributes: {
          institute_name: new StringAttribute({ minLen: 1, maxLen: 255 }),
        },
      },
    },
  });

  return {
    userPoolId: auth.userPoolId,
    clientId: auth.userPoolClientId,
    userPoolArn: auth.userPoolArn,
  };
}
