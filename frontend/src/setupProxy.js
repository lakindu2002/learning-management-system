const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://it8o9zuhca.execute-api.ap-southeast-1.amazonaws.com',
      pathRewrite: {
        '^/api': ''
      },
      changeOrigin: true
    })
  );

  app.use(
    '/uploads',
    createProxyMiddleware({
      target: 'https://dev-lms-backend-s3-staticcontentbucket637636bf-1qywfpadyubc1.s3.ap-southeast-1.amazonaws.com',
      pathRewrite: {
        '^/uploads': ''
      },
      changeOrigin: true
    })
  );
};
