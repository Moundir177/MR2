const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Building full Next.js site for static export...');

try {
  // Remove the output directory first if it exists
  if (fs.existsSync('out')) {
    console.log('Removing existing out directory...');
    fs.rmSync('out', { recursive: true, force: true });
  }

  // Run Next.js build with proper output configuration
  console.log('Running Next.js build...');
  execSync('npx next build', { stdio: 'inherit' });
  
  console.log('Build completed successfully!');
  
  // Verify the output directory exists and list files
  const outDir = path.join(__dirname, 'out');
  if (fs.existsSync(outDir)) {
    console.log('Output directory created at:', outDir);
    // List top-level directories and files
    const topLevelItems = fs.readdirSync(outDir);
    console.log('Top-level items in output directory:', topLevelItems);
    
    // Ensure 404 and index.html exist
    const hasIndex = fs.existsSync(path.join(outDir, 'index.html'));
    const has404 = fs.existsSync(path.join(outDir, '404.html'));
    console.log('Has index.html:', hasIndex);
    console.log('Has 404.html:', has404);
  } else {
    console.error('Output directory was not created at:', outDir);
    process.exit(1);
  }
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
} 