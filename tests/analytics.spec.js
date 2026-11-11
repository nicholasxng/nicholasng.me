const { test, expect } = require('@playwright/test');

test.describe('Analytics', () => {
  test('should load the GA4 tag with a real measurement ID', async ({ page }) => {
    await page.goto('/');

    const gtagScript = page.locator('script[src*="googletagmanager.com/gtag/js"]');
    await expect(gtagScript).toHaveCount(1);

    const src = await gtagScript.getAttribute('src');
    expect(src).toMatch(/[?&]id=G-[A-Z0-9]+$/);

    const measurementId = new URL(src, 'http://localhost').searchParams.get('id');
    const hasInlineConfig = await page.evaluate(
      (id) =>
        Array.from(document.scripts).some((script) =>
          script.textContent.includes(`gtag('config', '${id}')`)
        ),
      measurementId
    );
    expect(hasInlineConfig).toBe(true);
  });
});
