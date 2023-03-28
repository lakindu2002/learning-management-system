import { StackContext } from "sst/constructs/FunctionalStack";
import { Api, use } from "sst/constructs";
import { dynamodb } from "./dynamodb";

export function lmsApiGateway({ stack }: StackContext) {
  const { usersTable, instituteTable, instituteUserTable } = use(dynamodb);
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
      }
    }
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
