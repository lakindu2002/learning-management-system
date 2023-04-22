const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://ihiq7jfp5e.execute-api.ap-southeast-1.amazonaws.com',
      pathRewrite: {
        '^/api': ''
      },
      changeOrigin: true
    })
  );

  app.use(
    '/uploads',
    createProxyMiddleware({
      target: 'https://lakinduhewawasam-lms-bac-staticcontentbucket63763-f7m75quakfin.s3.ap-southeast-1.amazonaws.com',
      pathRewrite: {
        '^/uploads': ''
      },
      changeOrigin: true
    })
  );
};
