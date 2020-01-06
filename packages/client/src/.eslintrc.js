const path = require('path')

module.exports = {
  extends: [
    '../tools/eslint/eslintrc.common.js',
    '../tools/eslint/eslintrc.react.js',
    '../tools/eslint/eslintrc.typescript'
  ],
  env: {
    browser: true,
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        packageDir: path.resolve(__dirname, '..'),
        devDependencies: false, 
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
  },
};
