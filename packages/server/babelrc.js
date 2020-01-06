const merge = require('babel-merge');

const node = require('./tools/babel/babel.config.node');
const typescript = require('./tools/babel/babel.config.typescript');

module.exports = merge.all([
  node,
  typescript,
  {
    inputSourceMap: true,
    sourceMaps: true,
  },
]);
