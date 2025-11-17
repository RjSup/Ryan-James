// tests/landing.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Landing page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // ------------------- Header -------------------
  test('renders main heading, subtitle, and description', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1, name: /Ryan James/i })).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: /Aspiring Software Developer./i })).toBeVisible();
    await expect(page.getByText('Building intelligent, interactive, and impactful software.')).toBeVisible();
  });

  test('social media links have correct hrefs', async ({ page }) => {
    const githubLink = page.locator('a[href="https://github.com/RjSup"]');
    const linkedinLink = page.locator('a[href="https://www.linkedin.com/in/rjsup"]');

    await expect(githubLink).toBeVisible();
    await expect(linkedinLink).toBeVisible();

    await expect(githubLink.locator('svg')).toBeVisible();
    await expect(linkedinLink.locator('svg')).toBeVisible();
  });

  // ------------------- Profile image -------------------
  test('profile image is visible', async ({ page }) => {
    const profileImg = page.locator('img[class*="profile-image"]');
    await expect(profileImg).toBeVisible();

    const naturalWidth = await profileImg.evaluate((el: HTMLImageElement) => el.naturalWidth);
    expect(naturalWidth).toBeGreaterThan(0);
  });
});
