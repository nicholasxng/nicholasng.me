const { test, expect } = require('@playwright/test');

test.describe('Portfolio Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have the correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Nicholas Ng/i);
  });

  test('should display the main headline', async ({ page }) => {
    const headline = page.locator('h1');
    await expect(headline).toBeVisible();
    await expect(headline).toContainText(/Nicholas/i);
  });

  test('should have exactly 4 experience cards in the bento grid', async ({ page }) => {
    const experienceCards = page.locator('.bento-card');
    await expect(experienceCards).toHaveCount(4);
  });

  test('mobile menu should toggle correctly', async ({ page, isMobile }) => {
    if (!isMobile) return;

    const menuToggle = page.locator('#menu-toggle');
    const mobileMenu = page.locator('#mobile-menu');

    await expect(mobileMenu).toHaveClass(/translate-x-full/);
    await menuToggle.click();
    await expect(mobileMenu).not.toHaveClass(/translate-x-full/);
  });
});

test.describe('Experience Detail Pages', () => {
  test('should load Apple experience page', async ({ page }) => {
    await page.goto('/experience/apple');
    await expect(page.locator('h3:first-of-type')).toContainText(/Revolutionizing Data Management/i);
    await expect(page.locator('aside')).toBeVisible();
  });

  test('should show capitalized company name in sidebar', async ({ page }) => {
    await page.goto('/experience/apple');
    const companyName = page.locator('aside h3').first();
    await expect(companyName).toHaveText('Apple');
  });
});
