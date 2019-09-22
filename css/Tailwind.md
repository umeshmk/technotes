# Tailwind css

#### # GETTING STARTED

[Tailwind](https://tailwindcss.com/docs/installation)

- A PostCSS Plugin

- Add in Laravel Mix [installation](https://tailwindcss.com/docs/installation#laravel-mix)

```bash
# install tailwind
npm init -y
npm install tailwindcss
```

```css
/* src/style.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- [Optional] create config - **tailwind.config.js** using cmd `npx tailwind init`

- Add to **package.json**

```json
script{
    "build" : "tailwind build src/style.css -o dist/style.css"
}
```

- _Reduce file size_ :- Use `PurgeCss` package [link](https://tailwindcss.com/docs/controlling-file-size)
- _Css prefixer_ :- Use `Autoprefixer` package

#### Sass + Tailwind

- Convert `scss` --> `css` --> `PostCss tailwind`
- Cannot feed directly `scss` -/-> `Postcss`

```scss
.alert {
  @apply bg-red-500 #{!important}; // Always use interpolation #{ } for !important
}
```
