# Css Modules

[css-modules/css-modules](https://github.com/css-modules/css-modules)

:::tip Naming Convention

- `App.module.css` file the `.module` is just a naming convention.
- `App.css` will also work.
- Class naming
  - Use camelCase.
  - `.myClass` can be used in js as `Styles.myClass` instead of `Styles['my-class']`

:::

- Filename - `App.module.css`
- Sass works too - `App.module.scss`
- Webpack's `css-loader` is used to build modules
- **BEM** is not needed anymore but can be used.

```scss
// INPUT
// ------
// src/Button.module.scss
:global(.foo) {
  color: rebeccapurple;
}
.myclass {
  color: red;
}

// src/Button2.module.scss
.myclass {
  color: green;
}

// OUTPUT
// ------
// main.css - After build (naming depends on css-loader's options.modules)
// localIdentName: "[path][name]__[local]--[hash:base64:5]",
.foo {
  color: rebeccapurple;
}
.src-Button-module__myclass--wcVYh {
  color: red;
}
.src-Button2-module__myclass--2N4Cd {
  color: green;
}
```

## Import in Js

```js
// index.js
import Styles from "./Button.module.scss";
import Styles2 from "./Button2.module.scss";

// usage
el.classList.add(Styles.myclass);
el2.classList.add(Styles.myclass);
```

## Global Selectors

- Selectors name is not scoped.

```scss
// option 1 - only with nesting preprocessors
:global {
  .foo {
    color: green;
  }
}

// option 2 - preprocessor is not needed
:global(.foo) {
  color: rebeccapurple;
}
```

## Separate normal & modules

- Use both `module.scss` & `.css` . Using same for module & normal conflicts.

```js
// webpack.config.js
module: {
  rules: [
    {
      test: /\.module\.scss/,  // Use sass for modules
      use: [
        'loader-1',
        {
          loader: 'css-loader',
          options:{
            modules:{
              localIdentName: "[path][name]__[local]--[hash:base64:5]",
            }
          }
        }
        'loader-3',
      ]
    },
    {
      test: /\.css/,          // use css for normal
      use: [
        'loader-1',
        {
          loader: 'css-loader',
          options:{
            modules:{
              localIdentName: "[name]__[local]", // or simply comment it
            }
          }
        }
        'loader-3',
      ]
    }
  ]
}
```
