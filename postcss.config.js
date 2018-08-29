module.exports = {
  plugins: [
    /* eslint-disable global-require */
    require('autoprefixer'),
    require('cssnano')({
      preset: ['default'],
    }),
    /* eslint-enable */
  ],
};
