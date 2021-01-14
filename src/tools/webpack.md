# Webpack

> version 5.11.1

- Precedence
  - CLI overrides `webpack.config.js`
  - eg: `webpack --mode="development"` will override `mode:"..."`
- `webpack.config.js` config file is optional
  - CommonJS modules are used - `require` & `module.exports`
- [Bundle analysis](https://webpack.js.org/guides/code-splitting/#bundle-analysis)
- [BundlePhobia](https://bundlephobia.com/)

```js
const path = require("path");

module.exports = {
  target: "node", // target environment "web" is default
  mode: "", // default is production
  entry: {},
  output: {},
  module: {}, // Loaders
  plugins: [],
  optimization: {},
};
```

## Entry

```js
// single entry
entry: {main:"./src/index.js"}
entry: "./src/index.js"; // gives main.js (short for main:"")

// multiple entry (single output)
entry:{
    "./src/index.js",
    "./src/index2.js"
}

// Object syntax
entry:{
  app: "app.js",
  vendor: "vendor.js",
}

// Multiple imports - Recommended over multiple entry points
entry: { index: ['./vendor.js', './app.js'] }

// more (entry order matters if we also use HtmlWebpackPlugin)
entry:{
  shared:"lodash",
  index: {
    import: './src/index.js',
    dependOn: 'shared',
  },
}
```

## Output

```js
output:{
    filename:"bundle.js",    // single output file
    filename:"[name].[contenthash].js", // multiple output files for multiple entry
    path: __dirname + '/dist',
    path: path.resolve(__dirname, 'dist')
}

```

## Loaders

- **Install** - use npm `npm i -D xxx-loader`
- **Usage**
  - import css in js
  - typescript to js
  - images to dataurl

```js
module: {
  rules: [
    { test: /\.css$/, use: "css-loader" },
    { test: /\.ts$/, use: "ts-loader" },
  ];
}
```

```js
// Multiple loaders
// -- Runs (right --> left) & (bottom --> top)

// ex 1
{ test: /\.css$/, use: ["style-loader", "css-loader"] },

// ex 2
{
    test: /\.css$/,
    use: [
      {loader: "style-loader", options:{}},
      {loader: "css-loader", options:{}},
      {loader: "sass-loader"}
    ]
},

```

## Plugins

```js
// const HtmlWebpackPlugin = require("html-webpack-plugin");

plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })];
```
