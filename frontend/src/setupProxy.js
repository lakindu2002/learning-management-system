const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://a9tf5wkei0.execute-api.ap-southeast-1.amazonaws.coms',
      pathRewrite: {
        '^/api': ''
      },
      changeOrigin: true
    })
  );

  app.use(
    '/uploads',
    createProxyMiddleware({
      target: 'https://lakinduhewawasam-lms-bac-staticcontentbucket63763-etcnmyio47n4.s3.ap-southeast-1.amazonaws.com',
      pathRewrite: {
        '^/uploads': ''
      },
      changeOrigin: true
    })
  );
};
