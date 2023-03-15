import { StackContext } from "sst/constructs/FunctionalStack";
import { Api } from "sst/constructs";

export function APIGateway({ stack }: StackContext) {
  const apiGateway = new Api(stack, "lms-api-gateway", {
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
    },
  });
  return {
    apiUrl: apiGateway.url,
  };
}
