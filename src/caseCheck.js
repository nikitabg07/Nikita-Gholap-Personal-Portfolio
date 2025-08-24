const fs = require('fs');
const path = require('path');

function checkFileCase(filePath) {
    try {
        const dir = path.dirname(filePath);
        const fileName = path.basename(filePath);
        const files = fs.readdirSync(dir);
        
        const exists = files.some(file => file === fileName);
        console.log(`File ${fileName} exists with exact case: ${exists}`);
        console.log('Files in directory:', files);
        return exists;
    } catch (err) {
        console.error('Error checking file case:', err);
        return false;
    }
}

// Check Home.js
checkFileCase(path.join(__dirname, 'src', 'pages', 'Home.js'));

// Check home.js
checkFileCase(path.join(__dirname, 'src', 'pages', 'home.js'));
