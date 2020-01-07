/* eslint-disable max-lines */

const merge = require('webpack-merge');
const path = require('path');

const babelConfig = require('./babelrc');

const common = require('./tools/webpack/webpack.config.common');
const browser = require('./tools/webpack/webpack.config.browser');
const font = require('./tools/webpack/webpack.config.font');
const htmlTemplate = require('./tools/webpack/webpack.config.htmlTemplate');
const img = require('./tools/webpack/webpack.config.img');
const scss = require('./tools/webpack/webpack.config.scss');

// TODO env 값을 이용하여 빌드 방식 변경

module.exports = merge(
  {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
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
  common,
  browser,
  font,
  htmlTemplate,
  img,
  scss
);
