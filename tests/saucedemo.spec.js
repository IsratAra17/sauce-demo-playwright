const { test, expect } = require('@playwright/test');


  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  const firstProductName = await page.locator('.inventory_item_name').first().innerText();
  await page.locator('button[data-test="add-to-cart-sauce-labs-backpack"]').click();

  await page.click('.shopping_cart_link');

  const cartProductName = await page.locator('.inventory_item_name').innerText();
  await expect(cartProductName).toBe(firstProductName);

  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');

