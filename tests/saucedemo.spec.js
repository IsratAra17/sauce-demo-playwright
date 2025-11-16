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



test('Add a product to cart and verify it', async ({ page }) => {
  
  // Get the first product name
  const productName = await page.textContent('.inventory_item_name');

  // Add to cart
  await page.click('button[id*="add-to-cart"]');

  // Open cart
  await page.click('.shopping_cart_link');

  // Verify product in cart
  const cartProduct = await page.textContent('.inventory_item_name');

  expect(cartProduct.trim()).toBe(productName.trim());
});
test('User logs out successfully', async ({ page }) => {
  await page.click('#react-burger-menu-btn');

  // Wait for logout button to appear
  await page.waitForSelector('#logout_sidebar_link', { state: 'visible' });

  // Click logout
  await page.click('#logout_sidebar_link');

  // Verify redirect
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});
