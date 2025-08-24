const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // Disable WebSocket connections in development
  app.use((req, res, next) => {
    if (req.headers.upgrade && req.headers.upgrade.toLowerCase() === 'websocket') {
      res.status(426).send('WebSocket connections are disabled');
      return;
    }
    next();
  });
};
