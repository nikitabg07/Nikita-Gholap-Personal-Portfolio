// Test endpoint for manifest
const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const manifestPath = path.join(process.cwd(), 'public', 'manifest.json');
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    
    res.setHeader('Content-Type', 'application/manifest+json; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    
    return res.status(200).json(manifest);
  } catch (error) {
    console.error('Error serving manifest:', error);
    return res.status(500).json({ error: 'Failed to load manifest' });
  }
};
