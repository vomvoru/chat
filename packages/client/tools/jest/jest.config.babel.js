const babelJest = require('babel-jest');

const babelConfig = require('../../babelrc');

module.exports = babelJest.createTransformer({
  ...babelConfig,
});

// TODO 아래 PR의 수정사항에 따라 설정 코드 개선필요.
// https://github.com/facebook/jest/pull/7288
