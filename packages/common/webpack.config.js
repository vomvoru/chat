/* eslint-disable max-lines */

const merge = require('webpack-merge');

const path = require('path');

const babelConfig = require('./babelrc');

const common = require('./tools/webpack/config/webpack.config.common');

module.exports = merge(
  {
    entry: path.resolve(__dirname, 'src/index.ts'),
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'umd',
      globalObject: 'this',
      // libraryExport: 'default',
      library: 'common',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)?$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: babelConfig,
          },
        },
      ],
    },
  },
  common
);
