// Serve static files with correct MIME types
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

module.exports = (req, res) => {
  const filePath = req.query.path;
  if (!filePath) {
    return res.status(400).send('File path is required');
  }

  const fullPath = path.join(process.cwd(), 'public', filePath);
  
  // Security: Prevent directory traversal
  if (!fullPath.startsWith(path.join(process.cwd(), 'public'))) {
    return res.status(403).send('Access denied');
  }

  // Set content type based on file extension
  const contentType = mime.lookup(path.extname(fullPath)) || 'application/octet-stream';
  
  fs.readFile(fullPath, (err, data) => {
    if (err) {
      console.error(`Error reading file ${filePath}:`, err);
      return res.status(404).send('File not found');
    }
    
    res.setHeader('Content-Type', contentType);
    
    // Set caching headers
    if (filePath.includes('service-worker.js')) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    } else if (filePath.includes('manifest.json')) {
      res.setHeader('Cache-Control', 'public, max-age=3600');
    }
    
    res.send(data);
  });
};
