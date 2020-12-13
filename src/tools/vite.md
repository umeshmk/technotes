# Vite (official tool)

> [vitejs/vite](https://github.com/vitejs/vite)
>
> Vue 3.x only (works with react too.)
>
> Dev : ES Modules powered. No bundler.
>
> Prod : Rollup bundler.

:::tip Beta
Its still in beta.
:::

## Getting started

```sh
yarn create vite-app <project-name>
```

`esbuildTarget` default is es2020. Minimum is es2015

```js
// Native ES imports don't support bare module imports like
import { createApp } from "vue";
// vite will create a special path for native es to work
@modules/vue
```

## HMR

`create-vue-app` templates supports HMR by default
or use manual api via `import.meta.hot`.

## Typescript

In built support for `.ts` and `<script lang="ts">` in vue files.

Only transpilation(using esbuld). No type check. Vscode will fo that.

## Css/Json importing

Can import css/json in any js or vue files.

## Asset URL handling

**Static assets** - image, media, fonts. (Included automatically in asssets.)

**Referenced assets** - copied to dists assets. (even absolute path urls)(hashed file name)

**Unreferenced assets** - not copied

**public** folder - Everything copied as it is. File names are not changed.

:::tip Images < 4kb
Image (<4kb) will be converted to base64
:::

## PostCSS

`postcss.config.js` is automatically applied to `.vue & .css` files

## Css modules

PostCSS is not needed.
Support is built in vite.

**ways to use :**

1. `.vue` - use `<style module>`
2. `.css` - rename as `*.module.css`

## Css Preprocessors

**Options :**

1. Native css variables + postcss plugins (recommended)
2. Sass preprocessor - `yarn add -D sass` & `<style type="scss">`

## Jsc/Tsx

Supported.
Transpiled using `esbuild`.

## Config file

`vite.config.js` - options are mapped from vue-cli

## https/2

Start server using `--https` to generate certs automatically.

## Dev server proxy

Avoid

## Production Build

`yarn run vite build`
Rollup config is preconfigured. But can be edited too.

## Modes & Environment variables

`import.meta.env.MODE`

**2 modes**

1. development - `vite` & `vite serve`
2. prodcution - `vite build`

**ENV variables**

```sh
.env                # loaded in all cases
.env.local          # loaded in all cases, ignored by git
.env.[mode]         # only loaded in specified env mode
.env.[mode].local   # only loaded in specified env mode, ignored by git
```

:::warning VITE*
Only VITE* prefixed variables will be loaded in vite. (`import.meta.env.VITE_FOO)
Other sensitive env variables are ignored.

## Using Vite with traditional backends

Laravel, Rails, etc can be used.
Needs some [config](https://github.com/vitejs/vite#using-vite-with-traditional-backend)
