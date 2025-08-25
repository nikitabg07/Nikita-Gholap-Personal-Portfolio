const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Helper function to run commands
function exec(command) {
  try {
    console.log(`$ ${command}`);
    const output = execSync(command, { stdio: 'inherit' });
    return { success: true, output };
  } catch (error) {
    console.error('❌ Command failed:', command);
    console.error(error.stderr?.toString() || error.message);
    return { success: false, error };
  }
}

console.log('Starting Vercel build process...\n');

// Step 1: Clean up any previous builds
console.log('🧹 Cleaning up previous builds...');
if (fs.existsSync(path.join(process.cwd(), 'build'))) {
  fs.rmSync(path.join(process.cwd(), 'build'), { recursive: true, force: true });
}

// Step 2: Install all dependencies (including devDependencies for build)
console.log('🔧 Installing dependencies...');
let result = exec('npm install --prefer-offline --no-audit --progress=false');
if (!result.success) {
  console.error('❌ Failed to install dependencies');
  process.exit(1);
}

// Step 3: Run the build directly using react-scripts
console.log('\n🏗️  Running build...');
result = exec('npx react-scripts build');
if (!result.success) {
  console.error('❌ Build failed. Additional information:');
  
  // Check if build directory exists
  const buildDir = path.join(process.cwd(), 'build');
  if (!fs.existsSync(buildDir)) {
    console.error('\n❌ Build directory not found!');
  }
  
  // Check for common build errors
  const buildLogPath = path.join(process.cwd(), 'npm-debug.log');
  if (fs.existsSync(buildLogPath)) {
    console.log('\n📋 Build log:');
    console.log(fs.readFileSync(buildLogPath, 'utf8'));
  }
  
  process.exit(1);
}

console.log('\n✅ Build completed successfully!');
console.log('   You can deploy the contents of the "build" directory to your hosting provider.');
