import { chromium } from 'playwright';

async function runMobileTests() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true
  });
  
  await page.goto('http://localhost:5175', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // Test mobile menu
  console.log('Testing mobile menu...');
  await page.click('.header__menu-btn');
  await page.waitForTimeout(500);
  
  const menuOpen = await page.evaluate(() => {
    const nav = document.querySelector('.header__nav');
    return nav?.classList.contains('is-open');
  });
  console.log('Menu open:', menuOpen);

  // Click work link in mobile menu
  await page.click('a[href="#work"]');
  await page.waitForTimeout(1000);
  
  const workPosition = await page.evaluate(() => {
    const work = document.getElementById('work');
    const header = document.querySelector('.header');
    const headerH = header ? header.offsetHeight : 0;
    const workTop = work.getBoundingClientRect().top;
    return { workTop, headerH, visible: workTop >= headerH };
  });
  console.log('Work section position after mobile click:', workPosition);

  // Click about link
  await page.click('.header__menu-btn');
  await page.waitForTimeout(500);
  await page.click('a[href="#about"]');
  await page.waitForTimeout(1000);
  
  const aboutPosition = await page.evaluate(() => {
    const about = document.getElementById('about');
    const header = document.querySelector('.header');
    const headerH = header ? header.offsetHeight : 0;
    const aboutTop = about.getBoundingClientRect().top;
    return { aboutTop, headerH, visible: aboutTop >= headerH };
  });
  console.log('About section position after mobile click:', aboutPosition);

  // Check gaps on mobile
  const gaps = await page.evaluate(() => {
    const ids = ["work", "about", "contact"].map(id => document.getElementById(id));
    return ids.map((el, i) => {
      if (i === 0) return null;
      const prev = ids[i - 1].getBoundingClientRect().bottom;
      const cur = el.getBoundingClientRect().top;
      return Math.round(cur - prev) + "px";
    }).slice(1);
  });
  console.log('Mobile gaps between sections:', gaps);

  await browser.close();
}

runMobileTests().catch(console.error);