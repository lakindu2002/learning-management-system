import { StackContext } from "sst/constructs/FunctionalStack";
import { Api } from "sst/constructs";

export function lmsApiGateway({ stack }: StackContext) {
  const apiGateway = new Api(stack, "lms-api-gateway", {
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
    },
  });

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
