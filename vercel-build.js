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
    execSync(command, { 
      stdio: 'inherit',
      ...options,
      env: { 
        ...process.env,
        ...options.env,
        PUBLIC_URL: '/',
        NODE_ENV: 'production'
      }
    });
    return true;
  } catch (error) {
    console.error(`Command failed: ${command}`);
    console.error(error.message);
    throw error;
  }
};

// Main build process
(async () => {
  try {
    // Install dependencies
    console.log('\n🔧 Installing dependencies...');
    await exec('npm install --prefer-offline --no-audit --progress=false');

    // Install required Tailwind CSS plugins
    console.log('\n🔧 Installing Tailwind CSS plugins...');
    await exec('npm install --save-dev @tailwindcss/typography @tailwindcss/forms');

    // Install cross-env as a local dependency if needed
    console.log('\n🔧 Ensuring cross-env is available...');
    await exec('npm install --save-dev cross-env');

    // Ensure public directory exists and has necessary files
    console.log('\n🔍 Verifying public directory...');
    const publicDir = path.join(process.cwd(), 'public');
    const requiredFiles = ['manifest.json', 'service-worker.js'];
    
    for (const file of requiredFiles) {
      const filePath = path.join(publicDir, file);
      if (!fs.existsSync(filePath)) {
        throw new Error(`Required file ${file} is missing from the public directory`);
      }
      console.log(`✓ Found ${file}`);
    }

    // Run the build
    console.log('\n🏗️  Running build...');
    try {
      await exec('npm run build');
      
      // Verify build output
      console.log('\n🔍 Verifying build output...');
      const buildDir = path.join(process.cwd(), 'build');
      const buildFiles = ['index.html', 'manifest.json', 'service-worker.js'];
      
      for (const file of buildFiles) {
        const filePath = path.join(buildDir, file);
        if (!fs.existsSync(filePath)) {
          console.warn(`⚠️  Warning: ${file} not found in build output`);
        } else {
          console.log(`✓ Found ${file} in build output`);
        }
      }
    } catch (error) {
      console.error('\n❌ Build failed. Additional information:');
      
      // Check if build directory exists
      const buildDir = path.join(__dirname, 'build');
      if (fs.existsSync(buildDir)) {
        console.log('\n📁 Build directory contents:');
        const files = fs.readdirSync(buildDir);
        console.log(files);
      } else {
        console.log('\n❌ Build directory not found!');
      }
      
      throw error; // Re-throw the error to mark build as failed
    }

    // Run postbuild script
    console.log('\n🔧 Running postbuild steps...');
    await exec('node postbuild.js');

    console.log('\n✅ Build completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Build failed with error:');
    console.error(error);
    process.exit(1);
  }
})();
