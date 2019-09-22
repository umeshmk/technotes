#### # Utility First

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
  ```

#### # Responsive Design

- It works on **all utility classes.** like `sm:text-red` , `lg:flex` etc

  | Mobile    | sm                  | md                   | lg       | xl       |
  | --------- | ------------------- | -------------------- | -------- | -------- |
  | _< 640px_ | _640px_             | _768px_              | _1024px_ | _1280px_ |
  | `w-4`     | `sm:w-4`            | `md:w-4`             | `lg:w-4` | `xl:w-4` |
  | Mobile    | Tablet (_Portrait_) | Tablet (_Landscape_) | Laptop   | Desktop  |

#### # Pseudo class variant

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

  - `backgroundColor` - `hover, focus`
  - `borderColor` - `hover, focus`
  - `boxShadow` - `hover, focus`
  - `font-weight` - `hover, focus`
  - `opacity` - `hover, focus`
  - `outline` - `focus`
  - `textColor` - `hover, focus`
  - `textDecoration` - `hover, focus`
  - **Remaining dont have it.** Can add manually in `tailwind.config.js`

> Add base styles

```html
<!-- In html -->
<!-- Normalize.css is included in tailwind aka preflight.css with some extras -->
<body class="min-h-screen"></body>
```

```css
/* In css */
@tailwind base;

h1 {
  @apply text-white bg-red-400;
}
@font-face {
  ....;
}

@tailwind components;
```

> Extracting components

- Reuse code as components

```css
/* Small components*  */
@tailwind components;
.btn-green {
    @apply bg-green-400 text-white ;            /*cannot use hover: , focus: , {screen}. So use normal css not utility as below.*/
    }
.btn-green:hover {
    @apply bg-green-200;
}
@tailwind utilities;

/* Big Components */
Use Vue, React components
```

> Adding new utilities

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

> Functions / Directives

- `@apply`, `@responsive`, `@variants`, `@screen`

#### # CUSTOMIZATION

> Configuration [Tailwind.config.js](https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js)

```js
module.exports = {
  prefix: "tw-",
  important: true,
  separator: "-" /*default is (:) [md:flex --> md-flex]*/
};
```

> Theme
> Breakpoints
> Colors
> Spacing
> Variants
> Plugins

#### # BASE STYLES

#### # LAYOUT

#### # TYPOGRAPHY

#### # BACKGROUNDS

#### # BORDERS

#### # FLEXBOX

#### # SPACING

#### # SIZING

#### # TABLES

#### # EFFECTS

#### INTERACTIVITY

#### SVG
