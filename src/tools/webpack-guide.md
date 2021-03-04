# Webpack Guide

## Getting started

- Make `package.json` private `private:true` & remove `main:"..."`
- Make `src` & `dist` folders
- Default name for config `webpack.config.js` but we can use anyname like `webpack.dev.js`, `webpack.prod.js`

```bash
npm i -D webpack webpack-cli

# Run
npx webpack
./node_modules/.bin/webpack
./node_modules/.bin/webpack --config webpack.dev.js
npm run build # using npm script
```

## Asset Management

- Very useful for portable vue/react components

### css

- Good for vue/react
- import css in js - `npm i -D style-loader css-loader`
- Automatically gets added dynamically to `index.html` in `<style>....</style>` from js file

```js
// webpack.config.js
{ test : /\.css$/i, use : ['style-loader', 'css-loader']}

// index.js
import './style.css'
```

### Images/Fonts

- Copying `public` folder to `dist` is better than this overcomplicated configs

```js
{
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: 'asset/resource',
},
```

### Data files

- Data files - `json, xml, csv, etc`
- Use `xxx-loader` to add in js

```js
{ test: /\.xml$/i, use: ["xml-loader"] }

// index.js
import data from './data.xml'; // {data} is a warning (imported as a json)
```

## Output Management

- Use `HtmlWebpackPlugin` - To manage `index.html` file dynamically use this plugin which adds assets like js file with correct filename on every build (if we use hash `index.ca00080f833aa8117650.bundle.js` )
  - Order of js files is same as order in `entry:`
- Use `CleanWebpackPlugin`- To clean old files which are not used due to name change.

```js
// use { } or else error.
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// config
 plugins: [
  new CleanWebpackPlugin(), // use in prod build not useful in dev
   new HtmlWebpackPlugin({
     title: 'Title of page', // <title>
     template: "./src/index.html" // our html from src is copied to dist
   }),
 ],
```

## Development

- [webpack.js.org/configuration/dev-server/](https://webpack.js.org/configuration/dev-server/)
- install - `npm i webpack-dev-server`
- NpmScript - `watch: "webpack serve --open "`

```js
mode: "development",
devtool: "inline-source-map", // this will increase bundle size
devServer:{
  contentBase: "./dist",
  // publicPath:""
}
```

## Code Splitting

> Single entry point is Recommended. Do code splitting only if very much needed.

- Split bundle
- Load - ondemand or parallel

**3 possible approach**

1. Manual adding in `entry:`
2. Remove duplication
3. Dynamic import (avoid)

### Remove duplication (option 1)

```js
// prevent duplication
entry:{
  index: {
    import: './src/index.js',
    dependOn: 'shared',
  },
  index2: {
    import: './src/index2.js',
    dependOn: 'shared',
  },
  shared:"lodash"
},
```

### Remove duplication (option 2) (Better)

- `splitChunksPlugin` Separates common modules into chunks (separate `vendor-node_modules_...js` file)
- Extract 3rd party - Read _Extract Boilerplate_ in _## Caching_ below.

```js
entry: {
   index: './src/index.js',
   index2: './src/index2.js',
},
optimization: {
  splitChunks: {
    chunks: 'all', // gives vendor-node_modules_lodash.....js
  },
},
```

### Common `runtime.js`

- Issue - [https://bundlers.tooling.report/code-splitting/multi-entry/](https://bundlers.tooling.report/code-splitting/multi-entry/)

```js
// needed if - multiple entry points on single html
// Gives separate "runtime.js" file
optimization: {
  runtimeChunk: 'single',
},
```

## Caching

```js
// code bursting
output: {
  filename: '[name].[contenthash].js',
}
```

**Extract Boilerplate**

- Just like code-splitting above we can use `splitChunksPlugin` for both single/multiple entry points.
- **Extract 3rd party libraries like Lodash, React** to `vendor.js`

```js
optimization: {
  // gives vendor.js
  splitChunks: {
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name:"vendors",
        chunks:"all"
      }
    }
  }
  // avoid changing [contenthash] for vendor.js on every builds
  moduleIds: "deterministic", // maynot be needed in webpack 5 still use it to be safe.
}
```

## Environment variables `env`

- Use `--env` to separate dev/prod
- Used only in webpack
- Webpack & OS env variables are separate things

```bash
# --env production -----> env.production = true
webpack --env NODE_ENV=local --env production --progress
```

**Also change webpack**

```js
module.exports = (env) => {
  console.log(env.NODE_ENV);    // local
  console.log(env.production);  // true

  return{
    mode: (env.production)? 'production':'development'
    entry:"./src/index.js"
  };
};
```

## Build performance

- For Both dev/prod
  - Update - webpack, npm, node, yarn
- In Prod - avoid sourceMaps
- Babel - use min number of presets/plugins
- Typescript - refer webpack docs

```js
// Loaders
module: {
  rules: [
    {
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'), // apply only to src if possible
      loader: 'babel-loader',
    },
  ],
},
```

### Dev only

- Avoid this in dev
  - TerserPlugin
  - `[fullhash]/[chunkhash]/[contenthash]`

```js
// devtool
devtool: "eval-cheap-module-source-map"; // best option in most cases

// avoid some optimization if big codebase
optimization: {
  removeAvailableModules: false,
  removeEmptyChunks: false,
  splitChunks: false,
}
```

## Hot Module Replacement (HMR)

- Use single `entry: "index.js"` since other modules are imported in `index.js`
- Use libraries - `react-hot-loader, vue-loader, etc`
- `react-hot-loader` - Deprecated: use Fast Refresh instead (need min React 16.9.0 )

```js
devServer: {
  hot: true;
}

// For css (styleloader add HMR support) [just use - "import './style.css'"]
 module: {
   rules: [
     {
       test: /\.css$/,
       use: ['style-loader', 'css-loader'],
     },
   ],
 },
```

## Tree Shaking

> Very complicated. Be careful

- Depends on ESM `import/export`
- In `package.json` property `sideEffects` we can add the files which can be tree shaked.
  - _Polyfills_ have sideEffects & mostly has no exports but global functions.
  - _Lodash_ don't have sideEffects (safe to be pruned)
  - `"sideEffects": false` - Webpack can prune unused exports
  - We can also add this property in `module.rules` in `webpack.config.js`
- `sideEffects` - very effective & easy
- `usedExports` - very complex & need `TerserPlugin` (loaded Automatically in prod)

```js
// package.json
"sideEffects": [
  "./src/some-side-effectful-file.js",
  "**/*.css", // if we import css it should not be pruned
  "**/*.scss",
]
```

```js
 optimization: {
   usedExports: true,
 },
```

## Production

- Add tree Shaking
- Use 3 config files and merge using `npm i -D webpack-merge`

```js
// webpack.common.js (add things which are common)
const path = require("path");
module.exports = {
  entry: {},
  plugins: [],
  output: {},
};

// webpack.dev.js
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
});

// webpack.prod.js
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map", // optional (never use eval, inline for prod)
});
```

## Typescript

- TODO

## Advanced Entry (Extract js/css)

- **Useful** - Even all _scoped css_ can be extracted in 1 single main.css file.
- To minify add [css-minimizer-webpack-plugin](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/)
  - It uses cssnano internally.

```js
// plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// config
entry: {
  home: ['./home.js', './home.scss'],
  account: ['./account.js', './account.scss'],
},
output: {
  filename: '[name].js',
},
module: {
  rules: [
    {
      test: /\.scss$/,
      use: [
        process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
      ],
    },
  ],
},
plugins: [
  new MiniCssExtractPlugin({
    filename: '[name].css',
  }),
],
```

## Css Modules (css-loader)

```js
module: {
  rules: [
    {
      test: /\.css$/i,
      use: [
        {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: "[path][name]__[local]--[hash:base64:5]",  //classname --> .src-component-App-module__app--wcVYh {color:red}
            },
          },
        }
      ],
    },
  ],
},

```
