import { chromium } from 'playwright';

async function runTests() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 }
  });
  
  await page.goto('http://localhost:5175', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // Test 1: Anchor targets exist
  const anchorTargets = await page.evaluate(() => {
    return ["work", "about", "contact"].map(id => [id, !!document.getElementById(id)]);
  });
  console.log('1. Anchor targets:', anchorTargets);

  // Test 2: Header height
  const headerHeight = await page.evaluate(() => {
    const header = document.querySelector('.header');
    return header ? header.offsetHeight : 0;
  });
  console.log('2. Header height:', headerHeight);

  // Test 3: Gap between sections
  const gaps = await page.evaluate(() => {
    const ids = ["work", "about", "contact"].map(id => document.getElementById(id));
    return ids.map((el, i) => {
      if (i === 0) return null;
      const prev = ids[i - 1].getBoundingClientRect().bottom;
      const cur = el.getBoundingClientRect().top;
      return Math.round(cur - prev) + "px";
    }).slice(1);
  });
  console.log('3. Gaps between sections:', gaps);

  // Test 4: Pin spacers
  const pinSpacers = await page.evaluate(() => {
    return document.querySelectorAll('.pin-spacer').length;
  });
  console.log('4. Pin spacers:', pinSpacers);

  // Test 5: Scroll behavior
  const scrollBehavior = await page.evaluate(() => {
    return getComputedStyle(document.documentElement).scrollBehavior;
  });
  console.log('5. Scroll behavior:', scrollBehavior);

  // Test 6: Click nav link and measure
  console.log('6. Testing nav click...');
  await page.click('a[href="#work"]');
  await page.waitForTimeout(1500);
  
  const workPosition = await page.evaluate(() => {
    const work = document.getElementById('work');
    const header = document.querySelector('.header');
    const headerH = header ? header.offsetHeight : 0;
    const workTop = work.getBoundingClientRect().top;
    return { workTop, headerH, visible: workTop >= headerH };
  });
  console.log('6. Work section position after click:', workPosition);

  // Test 7: Click about link
  await page.click('a[href="#about"]');
  await page.waitForTimeout(1500);
  
  const aboutPosition = await page.evaluate(() => {
    const about = document.getElementById('about');
    const header = document.querySelector('.header');
    const headerH = header ? header.offsetHeight : 0;
    const aboutTop = about.getBoundingClientRect().top;
    return { aboutTop, headerH, visible: aboutTop >= headerH };
  });
  console.log('7. About section position after click:', aboutPosition);

  // Test 8: Click contact link
  await page.click('a[href="#contact"]');
  await page.waitForTimeout(1500);
  
  const contactPosition = await page.evaluate(() => {
    const contact = document.getElementById('contact');
    const header = document.querySelector('.header');
    const headerH = header ? header.offsetHeight : 0;
    const contactTop = contact.getBoundingClientRect().top;
    return { contactTop, headerH, visible: contactTop >= headerH };
  });
  console.log('8. Contact section position after click:', contactPosition);

  // Test 9: CSS variable --header-h
  const cssVar = await page.evaluate(() => {
    return getComputedStyle(document.documentElement).getPropertyValue('--header-h').trim();
  });
  console.log('9. --header-h CSS variable:', cssVar);

  await browser.close();
}

runTests().catch(console.error);