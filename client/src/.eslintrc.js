const path = require('path')

module.exports = {
  extends: [
    '../tools/eslint/config/eslintrc.common.js',
    '../tools/eslint/config/eslintrc.react.js',
    '../tools/eslint/config/eslintrc.typescript'
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
