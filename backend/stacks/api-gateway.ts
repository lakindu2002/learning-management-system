import { StackContext } from "sst/constructs/FunctionalStack";
import { Api, use } from "sst/constructs";
import { dynamodb } from "./dynamodb";
import { cognito } from "./cognito";

export function lmsApiGateway({ stack }: StackContext) {
  const { usersTable, instituteTable, instituteUserTable } = use(dynamodb);
  const { clientId, userPoolId } = use(cognito);
  const apiGateway = new Api(stack, "lms-api-gateway", {
    routes: {
      "GET /me": "packages/functions/src/lambda.getLoggedInUserInformation",
    },
    defaults: {
      function: {
        environment: {
          USER_TABLE_NAME: usersTable.tableName,
          INSTITUTE_TABLE_NAME: instituteTable.tableName,
          INSTITUTE_USER_TABLE_NAME: instituteUserTable.tableName
        },
      },
      authorizer: "Authorizer",
    },
    authorizers: {
      Authorizer: {
        type: "user_pool",
        userPool: {
          id: userPoolId,
          clientIds: [clientId],
        },
      },
    },
  });


  apiGateway.attachPermissionsToRoute("GET /me", [usersTable, instituteTable, instituteUserTable])

  const stackOutputs = {
    apiUrl: apiGateway.url,
  }

  stack.addOutputs({
    ...stackOutputs
  })
  return {
    ...stackOutputs
  };
}
