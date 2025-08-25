const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // Only apply in development
  if (process.env.NODE_ENV === 'development') {
    // Handle WebSocket connections for HMR
    app.use(
      '/sockjs-node',
      createProxyMiddleware({
        target: 'ws://localhost:3006',
        ws: true,
        changeOrigin: true,
      })
    );
  } else {
    // In production, block WebSocket connections
    app.use((req, res, next) => {
      if (req.headers.upgrade && req.headers.upgrade.toLowerCase() === 'websocket') {
        res.status(426).send('WebSocket connections are not supported in production');
        return;
      }
      next();
    });
  }
};
