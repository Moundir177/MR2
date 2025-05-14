const fs = require('fs');
const path = require('path');

console.log('Creating static export for Cloudflare Pages...');

// Create a simple HTML file for the landing page
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mira Academy</title>
  <link rel="stylesheet" href="/static/css/styles.css">
  <link rel="icon" href="/favicon.ico">
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f8f9fa;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
    .hero {
      padding: 4rem 0;
    }
    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      color: #2c5282;
    }
    .tagline {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      color: #4a5568;
    }
    .description {
      font-size: 1.1rem;
      margin-bottom: 2rem;
      color: #718096;
    }
    .cta-button {
      display: inline-block;
      background: #3182ce;
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 0.375rem;
      text-decoration: none;
      font-weight: bold;
      transition: background-color 0.3s;
    }
    .cta-button:hover {
      background: #2b6cb0;
    }
    .footer {
      margin-top: 3rem;
      padding-top: 1.5rem;
      border-top: 1px solid #e2e8f0;
      font-size: 0.9rem;
      color: #718096;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="hero">
      <h1>Welcome to Mira Academy</h1>
      <p class="tagline">Your educational journey starts here.</p>
      <p class="description">We are currently working on our new website. Our team is dedicated to providing high-quality educational experiences in various fields including technology, languages, and professional development.</p>
      
      <div>
        <a href="mailto:contact@mira-academy.com" class="cta-button">
          Contact Us
        </a>
      </div>
    </div>
    
    <div class="footer">
      <p>© 2023 Mira Academy. All rights reserved.</p>
      <p>Coming soon: Courses, Programs, Blog, and more...</p>
    </div>
  </div>
</body>
</html>
`;

// Create necessary directories
console.log('Creating output directories...');
if (!fs.existsSync('out')) {
  fs.mkdirSync('out', { recursive: true });
}

if (!fs.existsSync(path.join('out', 'static'))) {
  fs.mkdirSync(path.join('out', 'static'), { recursive: true });
}

if (!fs.existsSync(path.join('out', 'static', 'css'))) {
  fs.mkdirSync(path.join('out', 'static', 'css'), { recursive: true });
}

// Write the HTML file
console.log('Writing index.html...');
fs.writeFileSync(path.join('out', 'index.html'), htmlContent);

// Create a simple CSS file
const cssContent = `
/* Basic styling for the landing page */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
`;

fs.writeFileSync(path.join('out', 'static', 'css', 'styles.css'), cssContent);

// Copy favicon if it exists
if (fs.existsSync(path.join('public', 'favicon.ico'))) {
  fs.copyFileSync(
    path.join('public', 'favicon.ico'),
    path.join('out', 'favicon.ico')
  );
}

console.log('Static export created successfully!');
console.log('Files in output directory:', fs.readdirSync('out')); 