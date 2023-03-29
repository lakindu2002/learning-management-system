const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://axdcc2rf11.execute-api.ap-southeast-1.amazonaws.com',
      pathRewrite: {
        '^/api': ''
      },
      changeOrigin: true
    })
  );
};