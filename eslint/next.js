const { JAVASCRIPT_FILES } = require('./constants');
const requirePackage = require('./utils/require-package');

requirePackage('next', '@next/eslint-plugin-next');

const babelOptions = {
  presets: (() => {
    try {
      require.resolve('next/babel');

      return ['next/babel'];
    } catch (e) {
      return [];
    }
  })(),
};

module.exports = {
  extends: ['plugin:@next/next/recommended'],
  overrides: [
    {
      files: JAVASCRIPT_FILES,
      parserOptions: { babelOptions },
    },
  ],
  rules: {
    // Disable the default export rule as it's not applicable to Next.js pages
    'import/no-default-export': 'off',
  },
};
