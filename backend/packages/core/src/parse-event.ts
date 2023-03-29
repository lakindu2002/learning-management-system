import { APIGatewayProxyEventV2 } from "aws-lambda";

export const Parse = (event: APIGatewayProxyEventV2) => ({
  userId: (event.requestContext as any).authorizer.jwt.claims.sub as string,
});
