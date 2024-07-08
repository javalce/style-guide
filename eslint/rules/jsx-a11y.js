/**
 * These are enabled by `jsx-a11y/recommended`, but we've made the decision to
 * disable them.
 */
const disabledRules = {
  'jsx-a11y/click-events-have-key-events': 'off',
  // This rule has been deprecated, but not yet removed.
  'jsx-a11y/no-onchange': 'off',
  'jsx-a11y/no-static-element-interactions': 'off',
};

module.exports = {
  rules: {
    ...disabledRules,
  },
};
