/**
 * These are enabled by `import/recommended`, but are better handled by
 * TypeScript and @typescript-eslint.
 */
const disabledRules = {
  'import/default': 'off',
  'import/export': 'off',
  'import/namespace': 'off',
  'import/no-unresolved': 'off',
};

module.exports = {
  rules: {
    ...disabledRules,
    'import/order': [
      'warn',
      {
        groups: [
          'type', // TypeScript types
          'builtin', // Node.js built-in modules
          'object', // Object imports
          'external', // Packages
          'internal', // Aliased modules
          'parent', // Relative parent
          'sibling', // Relative sibling
          'index', // Relative index
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'external',
            pattern: '~/**',
            position: 'after',
          },
        ],
      },
    ],
  },
};
