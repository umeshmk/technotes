# Style Guide

::: tip Reference

- [javascript.info/coding-style](https://javascript.info/coding-style)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Prettier config](https://prettier.io/docs/en/options.html)

:::

- **Popular Style Guides :**

  1. [Airbnb](https://github.com/airbnb/javascript)
  2. Standard
  3. Google

- **Eslint Rules :**

  1. Style based _(eg singleQuote)_
  2. Code based _(eg no-unused-vars)_

* **Auto-Fix**

```json
// Fix Style
"editor.defaultFormatter": "esbenp.prettier-vscode",
// Fix Code
"editor.codeActionsOnSave": {
  "source.fixAll": true
},

```

- **Approach - Use only one way:**
  1. Eslint & Prettier separately _[recommended]_
  2. Eslint with Prettier as plugin

## Install Airbnb

- Npm package - [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)

```bash
# Option - 1 [Recommended]
npm i -g eslint                   # Glabally
eslint --init                     # intialize .eslintrc.json

# Option - 2 [Manual]
npm info "eslint-config-airbnb@latest" peerDependencies

# Option - 3 [Alias]
alias airbnb="(
  export PKG=eslint-config-airbnb;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)";

```

## Approach 1 - Eslint & Prettier separately [recommended]

**Use Prettier (for formatting) & Linters (for Linting) vscode extensions**

- Install `airbnb`
- Use both `.eslintrc.json` & `.prettierrc` as needed.

:::warning On Save Conflict ?

- **Who runs first on save?** - _could be an issue_
  - prettier (formatOnSave)
  - eslint fixall (codeActionsOnSave)

Tip - Might help [prettier/prettier-eslint](https://github.com/prettier/prettier-eslint)

:::

## Approach 2 - Eslint with Prettier as plugin

:::danger Drawbacks

If we use prettier as plugin with its config `eslint-config-prettier` the styling rules of `airbnb` gets disabled.
Why should we use airbnb without it's styling rules ? Prettier will override Airbnb

Other airbnb rules not related to style still works.
:::

### Install prettier plugin

```bash
# install prettier (node is optional)
npm i -D eslint prettier
         eslint-plugin-prettier eslint-config-prettier
         eslint-plugin-node eslint-config-node
```

### create `.eslintrc.json` with Prettier config

```json
// create manually
{
  // "extends": ["airbnb", "airbnb/hooks"]
  // "extends": ["airbnb", "prettier", "plugin:node/recommended"],
  "extends": ["airbnb", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    // "prettier/prettier": "error",
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto",
        "singleQuote": true
      }
    ],
    "no-unused-vars": "warn",
    "no-console": "off",
    "func-names": "off",
    "no-process-exit": "off",
    "object-shorthand": "off",
    "class-methods-use-this": "off"
  }
}
```

### Vscode extension

```json
// Reload vscode

"editor.formatOnSave": true,
"[javascript]": {
  "editor.formatOnSave": false
},
"[javascriptreact]": {
  "editor.formatOnSave": false
},

"eslint.alwaysShowStatus": true,
"editor.codeActionsOnSave": {
  "source.fixAll": true
},

"prettier.disableLanguages": ["javascript", "javascriptreact"],
```

## .eslintignore (optional)

> ignores the folders from linting when we run `npm run lint` using script `"lint": "eslint ./"` in `package.json`

```json
node_modules
```
