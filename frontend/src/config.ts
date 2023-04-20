export const amplifyConfig = {
  Auth: {
    identityPoolId: process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID,
    region: process.env.REACT_APP_AWS_COGNITO_REGION,
    userPoolId: process.env.REACT_APP_AWS_USER_POOLS_ID,
    userPoolWebClientId: process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID
  },
  Storage: {
    AWSS3: {
      bucket: process.env.REACT_APP_S3_BUCKET_NAME,
      region: process.env.REACT_APP_S3_REGION,
    }
  }
};
