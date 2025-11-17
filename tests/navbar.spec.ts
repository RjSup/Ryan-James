import { test, expect } from '@playwright/test';

test.describe('Navbar E2E tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders logo and nav links', async ({ page }) => {
    // Logo
    const logo = page.locator('a', { hasText: 'RJ' });
    await expect(logo).toBeVisible();

    // Nav links
    await expect(page.getByRole('button', { name: /home/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /projects/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /contact/i })).toBeVisible();
  });
});
