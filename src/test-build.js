console.log('Build test file is being executed');
console.log('Current working directory:', process.cwd());
console.log('__dirname:', __dirname);
console.log('__filename:', __filename);

// Try to require the Home component
try {
  const Home = require('./pages/Home');
  console.log('✅ Successfully imported Home component:', !!Home);
} catch (error) {
  console.error('❌ Error importing Home component:', error.message);
  console.error('Error details:', error);
}

// List files in the pages directory
try {
  const fs = require('fs');
  const path = require('path');
  const pagesDir = path.join(__dirname, 'pages');
  const files = fs.readdirSync(pagesDir);
  console.log('📂 Files in pages directory:', files);
} catch (error) {
  console.error('❌ Error reading pages directory:', error.message);
}
