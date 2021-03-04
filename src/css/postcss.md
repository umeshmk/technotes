# PostCss

:::tip Postcss-Preset-Env
_PostCss preset env has a number of plugins. But the most useful IMO are :_

- **Stage 3**
  - custom properties
  - font variant
  - gap properties
  - media query ranges
- **Stage 2**
  - double position gradients (conic gradients)
  - :focus-within pseudo-class
  - alpha hex colors
  - :not pseudo-class
- **Stage 1**
  - :blank empty-value pseudo-class
  - custom media queries
  - custom selectors
  - nesting rules
- **Stage 0**
  - custom environment variables

:::

[postcss/postcss](https://github.com/postcss/postcss)

- **Install**
  - `npm i -D postcss`
  - `npm i -D postcss-cli` - only if not using webpack's `postcss-loader`
- **Both Sass & PostCss can be used together.**
  1. Compile `.scss` using sass
  2. Pass the compiled output to postcss
- **Biggest advantage**
  - `autoprefixer`
  - `postcss-preset-env`
    - [preset-env.cssdb.org/features](https://preset-env.cssdb.org/features)
    - [STAGES.md](https://github.com/csstools/cssdb/blob/master/STAGES.md) - `postcssPresetEnv({ stage: 0 })` (default is 2)
  - `purgecss` - remove unused css (better than `uncss`)

```js
// postcss.config.js
module.exports = {
  plugins: [require("postcss-preset-env")],
};
```

## Best Plugins

- [postcss.parts](https://www.postcss.parts/) - Total 200+ plugins
- Check NpmTrends in [Surveys](/surveys)
- [docs/plugins.md](https://github.com/postcss/postcss/blob/main/docs/plugins.md)

```txt
# FutureCss/Fallbacks

postcss-preset-env(includes autoprefixer)(use .browserslistrc) - 3m
  - autoprefixer - 10m
  - postcss-font-variant - 3.3m
  - postcss-custom-properties - 3.3m
  - postcss-custom-media - 3.3m
  - postcss-custom-selectors - 3.2m
  - postcss-initial ({ all: intial }) - 3m
  - postcss-nesting - 3.3m
css-next (deprecated)

# optimizations
cssnano - 6m
postcss-import - 2.5m
postcss-normalize - 1.8m

# Others
postcss-nested - 0.8m
postcss-modules - 0.7m
postcss-sorting - 0.6m
Precss - 95k
postcss-extend - 20m
postcss-assets - 16k

# syntax
postcss-safe-parser - 4.7m
postcss-scss - 2m
sugarss - 1.8m
postcss-sass - 1.8m
postcss-less - 1.7m
postcss-html - 1.6m
postcss-syntax - 1.5m

# Analysis/Debug
Stylelint - 2m
flexbugs-fixes - 4m
doiuse - 150k

# color
cologuard - 75k
```

### Plugins in Create-react-app

```json
 "postcss-flexbugs-fixes": "4.2.1",
 "postcss-loader": "3.0.0", // webpack
 "postcss-normalize": "8.0.1",
 "postcss-preset-env": "6.7.0",
 "postcss-safe-parser": "5.0.2",

 // sass
 "resolve-url-loader": "^3.1.2",
 "sass-loader": "8.0.2",

```
