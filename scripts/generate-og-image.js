const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generateOGImage() {
  // Launch a headless browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to match the desired image size
  await page.setViewport({
    width: 1200,
    height: 630,
  });
  
  // Get the absolute path to the HTML file
  const htmlPath = path.resolve(__dirname, '../public/og-image.html');
  const fileUrl = `file://${htmlPath}`;
  
  // Navigate to the HTML file
  await page.goto(fileUrl, { waitUntil: 'networkidle0' });
  
  // Take a screenshot
  const screenshotPath = path.resolve(__dirname, '../public/og-image.png');
  await page.screenshot({
    path: screenshotPath,
    type: 'png',
  });
  
  console.log(`OG image generated successfully at ${screenshotPath}`);
  
  // Close the browser
  await browser.close();
}

generateOGImage().catch(err => {
  console.error('Error generating OG image:', err);
}); 