import { APIGatewayProxyEventV2 } from "aws-lambda";

export const Parse = (event: APIGatewayProxyEventV2) => ({
  userId: (event.requestContext as any).authorizer.jwt.claims.sub as string,
  institutes: JSON.parse((event.requestContext as any).authorizer.jwt.claims.institutes as string),
  pathParams: event.queryStringParameters || {},
  body: JSON.parse(event.body || '{}')
});
