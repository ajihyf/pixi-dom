const path = require('path');
module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.ts$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader')
      }
    ]
  });
  config.resolve.extensions.push('.ts');
  return config;
};
