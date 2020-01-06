const merge = require('babel-merge');

const typescript = require('./tools/babel/babel.config.typescript');

module.exports = merge.all([
  typescript,
  {
    inputSourceMap: true,
    sourceMaps: true,
  },
]);
