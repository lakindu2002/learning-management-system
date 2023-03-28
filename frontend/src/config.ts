export const amplifyConfig = {
  Auth: {
    identityPoolId: process.env.REACT_AWS_COGNITO_IDENTITY_POOL_ID,
    region: process.env.REACT_AWS_COGNITO_REGION,
    userPoolId: process.env.REACT_AWS_USER_POOLS_ID,
    userPoolWebClientId: process.env.REACT_AWS_USER_POOLS_WEB_CLIENT_ID
  },
};
