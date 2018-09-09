// next.config.js
const withSass = require('@zeit/next-sass');
const config = require('config');

const API_KEY = config.get('alphaVantage.apiKey');

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[name]__[local]___[hash:base64:5]',
  },
  publicRuntimeConfig: {
    API_KEY,
  },
});
