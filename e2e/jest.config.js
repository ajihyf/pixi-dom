module.exports = {
  rootDir: __dirname,
  transform: {
    '.(ts|tsx)': 'ts-jest'
  },
  // preset: 'jest-puppeteer',
  // setupTestFrameworkScriptFile: '<rootDir>/setupTests.ts',
  setupFiles: ['<rootDir>/register-context.ts'],
  testMatch: ['<rootDir>/pixi-dom.e2e.ts'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  globals: {
    'ts-jest': {
      babelConfig: { plugins: ['require-context-hook'] }
    }
  }
};
