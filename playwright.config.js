// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    baseURL: 'https://www.saucedemo.com/',
    headless: true,

    // Capture screenshots for every test (pass or fail)
    screenshot: 'on',  // 'on' captures for both success and failure

    // Retain videos only on failure (optional)
    video: 'retain-on-failure',
  },

  // HTML report configuration
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'always' }]
  ],

  // Optional: set test timeout (default 30s)
  timeout: 60000,
});
