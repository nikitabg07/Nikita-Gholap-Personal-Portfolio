const fs = require('fs');
const path = require('path');

console.log('Running postbuild script...');

// Function to ensure directory exists
const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Function to copy files from source to destination
const copyFiles = (source, destination) => {
  try {
    if (!fs.existsSync(source)) {
      console.log(`Source directory does not exist: ${source}`);
      return;
    }

    ensureDir(destination);
    const files = fs.readdirSync(source);
    
    for (const file of files) {
      const srcPath = path.join(source, file);
      const destPath = path.join(destination, file);
      
      const stat = fs.lstatSync(srcPath);
      if (stat.isDirectory()) {
        copyFiles(srcPath, destPath);
      } else {
        ensureDir(path.dirname(destPath));
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied: ${srcPath} -> ${destPath}`);
      }
    }
  } catch (error) {
    console.error(`Error copying files from ${source} to ${destination}:`, error);
    throw error;
  }
};

// Function to fix paths in files
const fixPathsInFile = (filePath, find, replace) => {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    console.log(`Fixing paths in: ${filePath}`);
    let content = fs.readFileSync(filePath, 'utf8');
    const newContent = content.replace(new RegExp(find, 'g'), replace);
    
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated paths in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing paths in ${filePath}:`, error);
    throw error;
  }
};

// Main execution
const run = async () => {
  try {
    const buildDir = path.resolve(__dirname, 'build');
    const publicDir = path.resolve(__dirname, 'public');
    
    console.log(`Build directory: ${buildDir}`);
    console.log(`Public directory: ${publicDir}`);
    
    // Ensure build directory exists
    ensureDir(buildDir);
    
    // Copy public assets
    console.log('\n📂 Copying public assets...');
    copyFiles(publicDir, buildDir);
    
    // Fix paths in index.html
    const indexPath = path.join(buildDir, 'index.html');
    if (fs.existsSync(indexPath)) {
      console.log('\n🔧 Fixing paths in index.html...');
      fixPathsInFile(indexPath, 'href="/', 'href="/');
      fixPathsInFile(indexPath, 'src="/', 'src="/');
    } else {
      console.warn('⚠️  index.html not found in build directory');
    }
    
    // Fix paths in asset-manifest.json
    const manifestPath = path.join(buildDir, 'asset-manifest.json');
    if (fs.existsSync(manifestPath)) {
      console.log('\n🔧 Fixing paths in asset-manifest.json...');
      fixPathsInFile(manifestPath, '"/static/', '"/static/');
    }
    
    console.log('\n✅ Postbuild script completed successfully!');
  } catch (error) {
    console.error('\n❌ Error in postbuild script:', error);
    process.exit(1);
  }
};

// Run the script
run();
