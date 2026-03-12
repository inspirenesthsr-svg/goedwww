const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const BASE_URL = 'http://localhost:3000';

const pages = [
  { name: '01-Home', url: '/', waitFor: 8000 }, // Wait for hero animations
  { name: '02-Help-TravelAssistant', url: '/help', waitFor: 3000 },
  { name: '03-Terms', url: '/terms', waitFor: 2000 },
  { name: '04-Privacy', url: '/privacy', waitFor: 2000 },
  { name: '05-Refund', url: '/refund', waitFor: 2000 },
];

async function generatePDFs() {
  console.log('🚀 Starting PDF generation...\n');
  
  // Create output directory
  const outputDir = path.join(__dirname, '../pdf-output');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const pdfPaths = [];

  for (const page of pages) {
    console.log(`📄 Generating PDF for: ${page.name}...`);
    
    const browserPage = await browser.newPage();
    
    // Set viewport for desktop view
    await browserPage.setViewport({
      width: 1440,
      height: 900,
      deviceScaleFactor: 2
    });

    try {
      await browserPage.goto(`${BASE_URL}${page.url}`, {
        waitUntil: 'networkidle2',
        timeout: 60000
      });

      // Wait for animations and content to load
      await new Promise(resolve => setTimeout(resolve, page.waitFor));

      // Scroll to load all lazy-loaded content
      await autoScroll(browserPage);
      
      // Wait a bit more after scrolling
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Generate PDF
      const pdfPath = path.join(outputDir, `${page.name}.pdf`);
      await browserPage.pdf({
        path: pdfPath,
        format: 'A4',
        printBackground: true,
        margin: {
          top: '20px',
          right: '20px',
          bottom: '20px',
          left: '20px'
        }
      });

      pdfPaths.push(pdfPath);
      console.log(`   ✅ Created: ${pdfPath}\n`);
    } catch (error) {
      console.error(`   ❌ Error generating PDF for ${page.name}:`, error.message);
    }

    await browserPage.close();
  }

  await browser.close();

  console.log('\n✨ PDF generation complete!');
  console.log(`📁 Output directory: ${outputDir}`);
  console.log('\nGenerated files:');
  pdfPaths.forEach(p => console.log(`   - ${path.basename(p)}`));
}

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 500;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          // Scroll back to top
          window.scrollTo(0, 0);
          resolve();
        }
      }, 100);
    });
  });
}

// Run the script
generatePDFs().catch(console.error);

