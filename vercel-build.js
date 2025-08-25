const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('Starting Vercel build process...');

// Set environment variables
process.env.PUBLIC_URL = '/';
process.env.NODE_ENV = 'production';
process.env.GENERATE_SOURCEMAP = 'false';

// Cross-platform exec function with better error handling
const exec = (command, options = {}) => {
  console.log(`$ ${command}`);
  try {
    const result = execSync(command, { 
      stdio: 'inherit',
      ...options,
      env: { 
        ...process.env,
        ...options.env,
        PUBLIC_URL: '/',
        NODE_ENV: 'production'
      }
    });
    return result ? result.toString() : '';
  } catch (error) {
    console.error(`Command failed: ${command}`);
    console.error(error.message);
    throw error;
  }
};

// Main build process
(async () => {
  try {
    // Clean up any existing build
    const buildDir = path.join(process.cwd(), 'build');
    if (fs.existsSync(buildDir)) {
      console.log('\n🧹 Cleaning up existing build directory...');
      await exec('npx rimraf build');
    }

    // Install only production dependencies
    console.log('\n🔧 Installing production dependencies...');
    await exec('npm ci --prefer-offline --no-audit --progress=false');

    // Run the build directly without any hooks
    console.log('\n🏗️  Running production build...');
    await exec('npx react-scripts build --no-pre-build');
    
    // Verify build output
    console.log('\n🔍 Verifying build output...');
    if (!fs.existsSync(buildDir)) {
      throw new Error('Build directory not found after build!');
    }
    
    // List build directory contents for debugging
    console.log('\n📁 Build directory contents:');
    const files = fs.readdirSync(buildDir);
    console.log(files);
    
    // Check for essential files
    const essentialFiles = ['index.html', 'static'];
    for (const file of essentialFiles) {
      const filePath = path.join(buildDir, file);
      if (!fs.existsSync(filePath)) {
        console.warn(`⚠️  Warning: ${file} not found in build output`);
      } else {
        console.log(`✓ Found ${file} in build output`);
      }
    }

    console.log('\n✅ Build completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Build failed with error:');
    console.error(error);
    process.exit(1);
  }
})();
