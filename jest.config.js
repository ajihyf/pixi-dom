module.exports = {
  rootDir: __dirname,
  transform: {
    '.(ts|tsx)': 'ts-jest'
  },
  testMatch: ['<rootDir>/test/**/?(*.)+(spec|test).ts'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  coveragePathIgnorePatterns: ['/node_modules/', '/test/']
};
