const { test, expect } = require('@playwright/test');
test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Verify login
  await expect(page).toHaveURL(/inventory/);
});

// ----- TEST 1: LOGIN -----
test('User logs in successfully', async ({ page }) => {
  await expect(page).toHaveURL(/inventory/);
});
