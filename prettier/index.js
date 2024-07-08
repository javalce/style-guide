/**
 * Some of Prettier's defaults can be overridden by an EditorConfig file. We
 * define those here to ensure that doesn't happen.
 *
 * See: https://github.com/prettier/prettier/blob/main/docs/configuration.md#editorconfig
 */
const overridableDefaults = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'lf',
};

/** @type {import('prettier').Config} */
module.exports = {
  ...overridableDefaults,
  trailingComma: 'all',
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  bracketSpacing: true,
  arrowParens: 'always',
  plugins: ['prettier-plugin-packagejson'],
};
