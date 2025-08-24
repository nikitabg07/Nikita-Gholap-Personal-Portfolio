// Test endpoint for service worker
const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const swPath = path.join(process.cwd(), 'public', 'service-worker.js');
    const swContent = fs.readFileSync(swPath, 'utf8');
    
    res.setHeader('Content-Type', 'application/javascript');
    res.setHeader('Service-Worker-Allowed', '/');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    
    return res.status(200).send(swContent);
  } catch (error) {
    console.error('Error serving service worker:', error);
    return res.status(500).json({ error: 'Failed to load service worker' });
  }
};
