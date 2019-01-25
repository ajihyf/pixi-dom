const config = require('../jest.config');

module.exports = {
  ...config,
  preset: 'jest-puppeteer',
  setupTestFrameworkScriptFile: '<rootDir>/e2e/setupTests.ts',
  testMatch: ['<rootDir>/e2e/pixi-dom.e2e.ts']
};
