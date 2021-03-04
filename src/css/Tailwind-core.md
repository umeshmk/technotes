# TailwindCss (core)

:::danger Creator's Twitter Confession
[Twitter](https://twitter.com/adamwathan/status/1226511611592085504?lang=en)
Don't ever use `@apply bg-red-100;` in `.css` files. use only in `class="bg-red-100"`
:::

## Utility First

> **pros**

- No css. Use pre existing classes
- No time waste on creating classnames
- css stops growing
- More productivity
- saves time
  - Type `flex` instead of `.foo{ display:flex; }`
  - Type `pt-0` instead of `.foo{ padding-top: 0; }`
- Responsive
- Pseudo classes `[Hover, focus, etc]`
- Components - Using repeated classes combination

  ```scss
  .btn {
    @apply bg-red-300 w-full p-4 rounded;
  }

  /*Use custom prefix to identify easily in html*/
  .cc-btn{ ... };

  // OR

  $prefix: "cc-";              // cc = custom css
  .#{$prefix}btn { ... };       //o/p:  .cc-btn {...}
  ```

## Pseudo class variant

- All utility classes dont have all Pseudo classes due to file size.

  ```css
  /* Pseudo Classes */
  { focus|hover|disabled|active|visited }             /*Use this*/
  { group-hover|focus-within }                        /*Use this*/
  { first-child|last-child|odd-child|even-child }     /*Avoid it. Better use core css with @apply */
  ```

- Usage : `hover:bg-color-blue-600` , `focus:text-white`
- Usage (responsive) : `md:hover:w-3`
- Default config - [Reference](https://tailwindcss.com/docs/pseudo-class-variants#default-variants-reference)

## Add base styles

- Base = Global = Beginning of stylesheet
- Uses `Normalize.css` and some more initial setup.
- Named as **Preflight** - [link to base.css](https://unpkg.com/tailwindcss@1.1.2/dist/base.css)
- Add Custom styles

  ```scss
  @tailwind base;

  @font-face {
    font-family: Proxima Nova;
    font-weight: 400;
    src: url(/fonts/proxima-nova/400-regular.woff) format("woff");
  }
  h1 {
    @apply text-2xl;
  }
  h2 {
    @apply text-xl;
  }
  ```

## Extracting components

- Reuse code as components - [ Css OR Vuejs/Reactjs ]
- Css Components

  - Use `@apply`
  - Cannot use `hover: , focus: , {screen}` in `@apply`. So use normal `.fclass:hover`.
  - Responsive classes are not created.
  - Use `@responsive` if it's required.

    ```scss
    @tailwind components;

    /* Css components */
    .btn-green {
      @apply bg-green-400 text-white;
    }
    .btn-green:hover {
      @apply bg-green-200;
    }

    @screen md {
      .btn-green {
        @apply inline-block;
      }
    }

    @tailwind utilities;
    ```

## Adding new utilities

```css
@tailwind utilities;

@responsive {
  /*gives sm:rotate-0, md:rotate-0, etc*/
  @variants hover, focus {
    /*focus takes precedence over hover.*/
    .rotate-0 {
      transform: rotate(0deg;);
    }
    .rotate-90 {
      transform: rotate(90deg;);
    }
    .rotate-180 {
      transform: rotate(180deg;);
    }
  }
}
```

## Config

> Configuration - [Tailwind.config.js](https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js)

## Colors

```css
/*tailwind.config.js*/
theme: {
  colors: {
    primary: "var(--color-primary)"; /* :root {  --color-primary: #121547;  } */
    secondary: "#5c6ac4";
  }
}
```

## Variants

```js
variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
}
```
