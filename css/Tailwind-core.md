# Tailwind - core

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

  /*Use custom prefix to identify easily in html*/
  .cc-btn{ ... };

  // OR

  $prefix: "cc-";              // cc = custom css
  .#{$prefix}btn { ... };       //o/p:  .cc-btn {...}
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
  - **Remaining dont have it.** - Add manually in `tailwind.config.js`

#### # Add base styles

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

#### # Extracting components

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
            @apply inline-block
        }
    }

    @tailwind utilities;
    ```

#### # Adding new utilities

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

#### # Functions / Directives

- `@tailwind`, `@apply`, `@responsive`, `@variants`, `@screen`

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
