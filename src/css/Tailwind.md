# TailwindCss

> [Tailwind](https://tailwindcss.com/docs/installation)
>
> Cheatsheet - [https://umeshmk.github.io/Tailwindcss-cheatsheet](https://umeshmk.github.io/Tailwindcss-cheatsheet)

## GETTING STARTED

- A PostCSS Plugin

- Add in Laravel Mix [installation](https://tailwindcss.com/docs/installation#laravel-mix)

### New project

```bash
# install tailwind
npm init -y
npm install tailwindcss
```

### Import in css/scss

```css
/* src/style.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Create **tailwind.config.js** [Fullversion](https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js)

```bash
npx tailwind init
```

### Edit **package.json**

```json
script{
    "build" : "tailwind build src/style.css -o dist/style.css"
}
```

### Note

- _Reduce file size_ :- Use `PurgeCss` package [link](https://tailwindcss.com/docs/controlling-file-size)
- _Css prefixer_ :- Use `Autoprefixer` package

## Sass + Tailwind

- Convert `scss` --> `css` --> `PostCss tailwind`
- Cannot feed directly `scss` -/-> `Postcss`

```scss
// file.css
.alert {
  @apply bg-red-500 !important;
}
// file.scss
.alert {
  @apply bg-red-500 #{!important}; // Always use interpolation #{ } for !important in sass
}
```
