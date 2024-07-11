# My Style Guide

<a aria-label="NPM version" href="https://www.npmjs.com/package/@javalce/style-guide">
  <img alt="" src="https://img.shields.io/npm/v/@javalce/style-guide.svg?style=flat-square&labelColor=000000">
</a>
<a aria-label="License" href="https://github.com/javalce/style-guide/blob/main/LICENSE">
  <img alt="" src="https://img.shields.io/npm/l/@javalce/style-guide.svg?style=flat-square&labelColor=000000">
</a>

## Introduction

This repository contains the style guide that I like and use in my projects. It is based on the [Vercel Style Guide](https://github.com/vercel/style-guide).

The following configs are available:

- [My Style Guide](#my-style-guide)
  - [Introduction](#introduction)
  - [Installation](#installation)
  - [Prettier](#prettier)
  - [ESLint](#eslint)
    - [Configuring ESLint for TypeScript](#configuring-eslint-for-typescript)
    - [Scoped configuration with `overrides`](#scoped-configuration-with-overrides)
      - [A note on file extensions](#a-note-on-file-extensions)

## Installation

All of my configs are contained in one package, `@javalce/style-guide`. To install:

```sh
# If you use npm
npm i --save-dev @javalce/style-guide

# If you use pnpm
pnpm i --save-dev @javalce/style-guide

# If you use Yarn
yarn add --dev @javalce/style-guide
```

## Prettier

> [!IMPORTANT]
> Prettier is a peer-dependency of this package, and should be installed at the root of your project.
>
> See: https://prettier.io/docs/en/install.html

To use the shared Prettier config, set the following in `package.json`.

```json
{
  "prettier": "@javalce/style-guide/prettier"
}
```

or create a `.prettierrc.cjs` file with the following content:

```js
const options = require('@javalce/style-guide/prettier');

module.exports = options;
```

If you want to extend the shared config, you can do so by creating a `.prettierrc.cjs` file with the following content:

```js
const options = require('@javalce/style-guide/prettier');

module.exports = {
  ...options,
  // ...yourOptions
  plugins: [
    ...options.plugins,
    // ...yourPlugins
  ],
};
```

or by using ESM:

```js
import options from '@javalce/style-guide/prettier';

export default {
  ...options,
  // ...yourOptions
  plugins: [
    ...options.plugins,
    // ...yourPlugins
  ],
};
```

## ESLint

> [!IMPORTANT]
> ESLint is a peer-dependency of this package, and should be installed at the root of your project.
>
> See: https://eslint.org/docs/user-guide/getting-started#installation-and-usage

This ESLint config is designed to be composable.

The following base configs are available. You can use one or both of these
configs, but they should always be first in `extends`:

- `@javalce/style-guide/eslint/browser`
- `@javalce/style-guide/eslint/node`

Note that you can scope configs, so that configs only target specific files.
For more information, see: [Scoped configuration with `overrides`](#scoped-configuration-with-overrides).

The following additional configs are available:

- `@javalce/style-guide/eslint/typescript` (requires `typescript` to be installed and [additional configuration](#configuring-eslint-for-typescript))
- `@javalce/style-guide/eslint/react`
- `@javalce/style-guide/eslint/react-typescript` (use this instead of `@javalce/style-guide/eslint/react` if you are using react with TypeScript)
- `@javalce/style-guide/eslint/next` (requires `@next/eslint-plugin-next` to be installed at the same version as `next`)
- `@javalce/style-guide/eslint/jest`
- `@javalce/style-guide/eslint/vitest`
- `@javalce/style-guide/eslint/testing/react` (includes rules for `@testing-library/react`)

> [!IMPORTANT]
> You'll need to use `require.resolve` to provide ESLint with absolute paths,
> due to an issue around ESLint config resolution (see
> [eslint/eslint#9188](https://github.com/eslint/eslint/issues/9188)).

For example, use the shared ESLint config(s) in a Next.js project, set the
following in `.eslintrc.js`.

```js
module.exports = {
  extends: [
    require.resolve('@javalce/style-guide/eslint/browser'),
    require.resolve('@javalce/style-guide/eslint/node'),
    require.resolve('@javalce/style-guide/eslint/react'),
    require.resolve('@javalce/style-guide/eslint/next'),
  ],
};
```

### Configuring ESLint for TypeScript

Some of the rules enabled in the TypeScript config require additional type
information, you'll need to provide the path to your `tsconfig.json`.

For more information, see: https://typescript-eslint.io/docs/linting/type-linting

```js
const { resolve } = require('node:path');

const project = resolve(__dirname, 'tsconfig.json');

module.exports = {
  root: true,
  extends: [
    require.resolve('@javalce/style-guide/eslint/node'),
    require.resolve('@javalce/style-guide/eslint/typescript'),
  ],
  parserOptions: {
    project,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
};
```

If you want to use multiple tsconfigs:

```js
const { resolve } = require('node:path');

const projects = [
  resolve(__dirname, 'tsconfig.node.json'),
  resolve(__dirname, 'tsconfig.app.json'),
];

module.exports = {
  root: true,
  extends: [
    require.resolve('@javalce/style-guide/eslint/node'),
    require.resolve('@javalce/style-guide/eslint/typescript'),
  ],
  parserOptions: {
    project: projects,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: projects,
      },
    },
  },
};
```

### Scoped configuration with `overrides`

ESLint configs can be scoped to include/exclude specific paths. This ensures
that rules don't "leak" into places where those rules don't apply.

In this example, Jest rules are only being applied to files matching Jest's
default test match pattern.

```js
module.exports = {
  extends: [require.resolve('@javalce/style-guide/eslint/node')],
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: [require.resolve('@javalce/style-guide/eslint/jest')],
    },
  ],
};
```

With react:

```js
module.exports = {
  extends: [require.resolve('@javalce/style-guide/eslint/node')],
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: [
        require.resolve('@javalce/style-guide/eslint/jest'),
        require.resolve('@javalce/style-guide/eslint/testing/react'),
      ],
    },
  ],
};
```

#### A note on file extensions

By default, all TypeScript rules are scoped to files ending with `.ts` and
`.tsx`.

However, when using overrides, file extensions must be included or ESLint will
only include `.js` files.

```js
module.exports = {
  overrides: [
    {
      files: [`directory/**/*.[jt]s?(x)`],
      rules: { 'my-rule': 'off' },
    },
  ],
};
```
