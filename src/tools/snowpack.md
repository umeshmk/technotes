# Snowpack

<vc-img url="https://www.snowpack.dev/img/JSAwardWinner.png" size="lg"/>

> [snowpack.dev/](https://www.snowpack.dev/)
>
> [snowpack.dev/guides](https://www.snowpack.dev/guides)
>
> [create-snowpack-app](https://github.com/snowpackjs/snowpack/tree/main/create-snowpack-app)
>
> Uses Javascript native module system (ESM (es modules) - import/export) in browser.

:::tip Javascript Bundler
A very fast js bundler - [esbuild.github.io](https://esbuild.github.io/)
:::

## Features

1. 50ms startup time
2. Never builds same file again (unlike webpack, parcel)
3. HMR + Fast refresh
4. Inbuilt support - jsx, react, preact, css modules, etc
5. Production optimized
6. [Plugins](https://www.snowpack.dev/plugins) - Babel, sass, mdx

## How it works ?

**In development:**
webpack bundles everything even if 1 file is changed.
what snowpack does is not to bundle them at all.
Instead it only rebuilds the file which is changed.

**In production:**
Use official snowpack plugin for webpack.

**NPM dependencies:**
Builds once only (in Dev) & import in browsers.

```sh
node_modules/react/**/*     -> http://localhost:3000/web_modules/react.js
```

## Build pipeline

**In production:**
[Build & Optimize](https://www.snowpack.dev/guides/optimize-and-bundle)
`snowpack build` - create css, html, js files. But unbundled & not optimized.

Way to optimize:

1. In-built Optimization using **ESBuild** (experimental)
2. [@snowpack/plugin-webpack](https://www.npmjs.com/package/@snowpack/plugin-webpack) (recommended)

The snowpack will send all already build files to webpack for bundling into single file.
**NO CONFIG needed** - just one line

```json
{
  "plugins": [["@snowpack/plugin-webpack"]]
}
```

## HMR + Fast refresh

**HMR:**
Hot module replacement is supported by default - css, json, js

**Fast refresh:**
Better integration with js frameworks. Preserves component states for updates.

- Add plugin
  - react - [@snowpack/plugin-react-refresh](https://www.npmjs.com/package/@snowpack/plugin-react-refresh)
  - Vue - [A few lines of code](https://github.com/snowpackjs/snowpack/blob/main/create-snowpack-app/app-template-vue/src/index.js#L7-L14)

## Quick start

```json
yarn add --dev snowpack

"scripts": {
"start": "snowpack dev",
"build": "snowpack build"
}
```

## Scss

https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-sass

```json
npm install @snowpack/plugin-sass

// snowpack.config.js
"plugins": [
"@snowpack/plugin-sass",
['@snowpack/plugin-sass', { style: 'compressed'}]

]
```

## Tailwindcss

```scss
// index.css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

```js
// postcss.config.js
// Taken from: https://tailwindcss.com/docs/installation#using-tailwind-with-postcss
module.exports = {
  plugins: [
    // ...
    require("tailwindcss"),
    require("autoprefixer"),
    // ...
  ],
};
```

## Vue

```json
// snowpack.config.json
"plugins": ["@snowpack/plugin-vue"]
```

## Getting started

### From scratch

https://www.snowpack.dev/tutorials/getting-started

### Create snowpack app command

https://github.com/snowpackjs/snowpack/tree/main/create-snowpack-app/

## snowpack.config.js

**Main settings**

```js
module.exports = {
  plugins: [],
  installOptions: {},
  devOptions: {},
  buildOptions: {},
  proxy: {},
  mount: {},
  alias: {},
};
```

### config.installOptions

```
dest
sourceMap
env
treeshake
installTypes
namedExports
externalPackage
packageLookupFields
rollup
polyfillNode
```

### config.devOptions

```
port
fallback
open
output
hostname
hmr
hmrErrorOverlay
secure
out
```

### config.buildOptions

```
out
baseUrl
clean
metaDir
sourceMaps
webModulesUrl
jsxFactory
jscFragment
```

### config.testOptions

files

### config.proxy

### config.mount

### config.alias
