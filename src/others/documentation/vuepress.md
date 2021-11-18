---
title: VuePress
---

<vc-img url="https://v1.vuepress.vuejs.org/hero.png" size="sm" />
<!-- <img src="https://v1.vuepress.vuejs.org/hero.png" style=" height:200px;"/> -->

# VuePress

::: tip Note
[Vitepress](https://vitepress.vuejs.org/) may be the better alternative in near future. It's better for build up & Hot module reloading. Vuepress has its issues with Webpack.
:::

[VuePress](https://v1.vuepress.vuejs.org) is a Single Page Application (SPA) composed of two parts:

1. A [minimalistic static site generator](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/core) with a Vue [theming system](https://v1.vuepress.vuejs.org/theme/) and [Plugin API](https://v1.vuepress.vuejs.org/plugin/)
2. A [default theme](https://v1.vuepress.vuejs.org/theme/default-theme-config.html)

> It uses `markdown-it` to convert markdown to html.

## Install

```sh
yarn create vuepress-site [optionalDirectoryName]
```

## Folder structure

Only `components` & `styles` folder is installed by default. Rest we can create if needed.

```sh

├── docs/src
    ├── .vuepress
        ├── components          (preinstalled)
        ├── theme
        │   └── Layout.vue
        ├── public
        ├── styles              (preinstalled)
        │   ├── index.styl
        │   └── palette.styl
        ├── templates
        │   ├── dev.html
        │   └── ssr.html
        ├── config.js           (preinstalled)
        └── enhanceApp.js       (preinstalled)

```

## Configuration

Ref - [vuepress.vuejs.org/config](https://vuepress.vuejs.org/config)

- Config file - `.vuepress/config,js`
- `#`, `##` & `###` markdown tags are converted into `h1`, `h2` & `h3` respectively.
- Store assets in same folder as markdown file which calls - `![An image](./i.png)`
  - Better to store on cloud/free image hosting sites

## Markdown Extensions

- `README.md` is converted to `index.html`
- Url for `docs/src/foo/README.md` can be`localhost/foo/`
- Url for `docs/src/foo/bar.md` can be`localhost/foo/bar.html`
- Emoji `:tada:` - :tada:
- Table Of Content - `[[toc]]`

* Custom containers **`warning, danger, tip, details`** with title

```md
::: warning Mytitle
This is a warning.
:::
```

- Syntax highlighting is achieved by **Prism**
- Code snippets - Import code from files - `<<< @/foo.css` where `@ is process.cwd()` current working directory.
  - `process.cwd` is nothing but the directory where the process `npm run dev` starts.
  - `docs/package.json` is imported as `<<< @/package.json` from anywhere.

## Using Vue in Markdown

- access Browser / DOM APIs in `beforeMount()` or `mounted()` hooks.
- Conversion flow - `Markdown -> html(by markdownit) -> Vue component -> Webpack -> Html`
- Can use this in markdown

```md
{{ 2 + 2 }}
<span v-for="i in 3">{{ i }} </span>
{{ $page }}
```

- Escape vue code using

````md
::: v-pre
{{ $page }}
:::

OR

```md
{{ $page }}
```
````

- Component in `.vuepress/components` are registered automatically
  - `.vuepress/components/Foo.vue` -> `<Foo/>`
  - `.vuepress/components/Foo/Bar.vue` -> `<Foo-Bar/>`
- Preprocessor in components
  - Sass - add `yarn add -D sass-loader node-sass`
  - Stylus - already added and used by Vuepress

## Frontmatter

- Always at top with predefined (or custom) variables
- Predefined variables - **`title, lang, description, layout, permalink, meta. metaTitle, canonicalUrl`**
- Predefined variables (theme) - **`navbar, sidebar, prev, next, search, tags`**

```md
---
title: hello
description: This is hello world
---

Title is {{ $frontmatter.title }}
```

## Permalinks

- A permanent link is good for blogs

```md
---
title: Hello World
permalink: /hello-world
---
```

## Global Computed

- **`$site, $page, $lang, $frontmatter, $localePath, $title, $description, $themeConfig`**
- Can use this in theme files or in markdown
