// Renders poster.html (a static, print-only variant of index.html — no
// buttons, hover interactivity, or resize behavior) to a single-page
// portrait PDF sized exactly to its content, suitable for large-format
// poster printing.
//
// Requires: npm install playwright && npx playwright install chromium
// Usage:    node generate-pdf.js

const path = require('path');
const { chromium } = require('playwright');

const POSTER_HTML = path.join(__dirname, 'poster.html');
const OUTPUT_PDF = path.join(__dirname, '..', 'ai-tech-tree-poster.pdf');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + POSTER_HTML);
  await page.waitForTimeout(400);

  const dims = await page.evaluate(() => ({
    w: document.documentElement.scrollWidth,
    h: document.documentElement.scrollHeight,
  }));
  // 96 CSS px per inch — matches the paper size exactly to the rendered
  // content so the PDF is a single page with no cropping or extra margin.
  const widthIn = (dims.w / 96).toFixed(3) + 'in';
  const heightIn = (dims.h / 96).toFixed(3) + 'in';
  console.log('paper size:', widthIn, heightIn, 'px:', dims);

  await page.pdf({
    path: OUTPUT_PDF,
    width: widthIn,
    height: heightIn,
    printBackground: true,
    margin: { top: '0in', bottom: '0in', left: '0in', right: '0in' },
    preferCSSPageSize: false,
  });

  await browser.close();
  console.log('Wrote', OUTPUT_PDF);
})();
