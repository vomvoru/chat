const merge = require('babel-merge');

const typescript = require('./tools/babel/config/babel.config.typescript');

module.exports = merge.all([
  typescript,
  {
    inputSourceMap: true,
    sourceMaps: true,
  },
]);
