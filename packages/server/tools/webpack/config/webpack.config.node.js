const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  node: false,
  externals: [nodeExternals()],
};
