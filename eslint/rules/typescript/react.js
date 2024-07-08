/**
 * These are enabled by `@typescript-eslint`, but we've made the decision to
 * disable them.
 */
const disabledRules = {
  // Infer the return type of functions. It's not always necessary to explicitly define the return type and somtimes can be hard to do so.
  '@typescript-eslint/explicit-function-return-type': 'off',
  // Allow the use of `() => void` for DOM event handlers.
  '@typescript-eslint/no-confusing-void-expression': [
    'error',
    { ignoreArrowShorthand: true, ignoreVoidOperator: false },
  ],
  // Allow the use of a floating promise. Errors are handled by the caller.
  '@typescript-eslint/no-floating-promises': 'off',
  // Allow the use of `!` for non-null assertions.
  '@typescript-eslint/no-non-null-assertion': 'off',
  // Allow reuse of variable names.
  '@typescript-eslint/no-shadow': 'off',
};

module.exports = {
  rules: {
    ...disabledRules,
  },
};
