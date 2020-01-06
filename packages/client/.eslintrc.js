const path = require('path')

module.exports = {
  extends: [
    './tools/eslint/config/eslintrc.common.js',
  ],
  env: {
    node: true,
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        packageDir: path.resolve(__dirname, '.'),
        devDependencies: true, 
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
  },
};
