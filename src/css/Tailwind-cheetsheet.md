# Tailwind - Cheatsheet

https://umeshmk.github.io/Tailwindcss-cheatsheet/

#### # Responsive Design

- It works on **all utility classes.**

  | Mobile    | sm                  | md                   | lg       | xl       |
  | --------- | ------------------- | -------------------- | -------- | -------- |
  | _< 640px_ | _640px_             | _768px_              | _1024px_ | _1280px_ |
  | `w-4`     | `sm:w-4`            | `md:w-4`             | `lg:w-4` | `xl:w-4` |
  | Mobile    | Tablet (_Portrait_) | Tablet (_Landscape_) | Laptop   | Desktop  |

#### # tailwind.config.js

| Spacing | Colors   | Pseudo class Variants | 3rd Party Plugins |
| ------- | -------- | --------------------- | ----------------- |
| `0`     | `black`  | _responsive_          | _transform_       |
| `px`    | `White`  | _group-hover_         | _transition_      |
| `1, 2`  | `gray`   | _focus-within_        | _gradients_       |
| `3, 4`  | `red`    | _first_               |                   |
| `5, 6`  | `orange` | _last_                |                   |
| `8`     | `yellow` | _odd_                 |                   |
| `10`    | `green`  | _even_                |                   |
| `12`    | `teal`   | _focus_               |                   |
| `16`    | `blue`   | _active_              |                   |
| `20`    | `indigo` | _visited_             |                   |
| `24`    | `purple` | _disabled_            |                   |
| `32`    | `pink`   |                       |                   |
| `40`    |          |                       |                   |
| `48`    |          |                       |                   |
| `56`    |          |                       |                   |
| `64`    |          |                       |                   |
|         |          |                       |                   |

| Utility           | Variant (Default |
| ----------------- | ---------------- |
| **All classes**   | `responsive`     |
| _backgroundColor_ | `hover, focus`   |
| _borderColor_     | `hover, focus`   |
| _boxShadow_       | `hover, focus`   |
| _font-weight_     | `hover, focus`   |
| _opacity_         | `hover, focus`   |
| _outline_         | `focus`          |
| _textColor_       | `hover, focus`   |
| _textDecoration_  | `hover, focus`   |

**Note: **

- **Remaining dont use hover/focus by default.** [Add manually]

#### # style.css

Functions : `@tailwind`, `@apply`, `@responsive`, `@variants`, `@screen`

#### # LAYOUT

| Container    | Display         | Float          | Object-Fit           | Object-Positions       | Overflow                    |
| ------------ | --------------- | -------------- | -------------------- | ---------------------- | --------------------------- |
| `.container` | `.block`        | `.float-right` | `.object-contain`    | `.object-bottom`       | `.overflow-auto`            |
|              | `.inline-block` | `.float-left`  | `.object-cover`      | `.object-center`       | `.overflow-hidden`          |
|              | `.inline`       | `.float-none`  | `.object-fill`       | `.object-left`         | `.overflow-visible`         |
|              | `.flex`         | `.clearfix`    | `.object-none`       | `.object-left-bottom`  | `.overflow-scroll`          |
|              | `.inline-flex`  |                | `.object-scale-down` | `.object-left-top`     | `.overflow-x-auto`          |
|              | `.table`        |                |                      | `.object-right`        | `.overflow-y-auto`          |
|              | `.table-row`    |                |                      | `.object-right-bottom` | `.overflow-x-hidden`        |
|              | `.table-cell`   |                |                      | `.object-right-top`    | `.overflow-y-hidden`        |
|              | `.hidden`       |                |                      | `.object-top`          | `.overflow-x-visible`       |
|              |                 |                |                      |                        | `.overflow-y-visible`       |
|              |                 |                |                      |                        | `.overflow-x-scroll`        |
|              |                 |                |                      |                        | `.overflow-y-scroll`        |
|              |                 |                |                      |                        | `.scrolling-touch (webkit)` |
|              |                 |                |                      |                        | `.scrolling-auto (webkit)`  |

| Positions   | Positions-TRBL                    | Visible      | z-index   |
| ----------- | --------------------------------- | ------------ | --------- |
| `.static`   | `.{ top/right/bottom/left }-0`    | `.visible`   | `.z-0`    |
| `.relative` | `.{ top/right/bottom/left }-auto` | `.invisible` | `.z-10`   |
| `.absolute` | `.inset-0`                        |              | `.z-20`   |
| `.fixed`    | `.inset-auto`                     |              | `.z-30`   |
| `.sticky`   | `.inset-{x/y}-0`                  |              | `.z-40`   |
|             | `.inset-{x/y}-auto`               |              | `.z-50`   |
|             |                                   |              | `.z-auto` |
|             |                                   |              |           |
|             |                                   |              |           |
|             |                                   |              |           |

#### # TYPOGRAPHY

| Family        | size         | smoothing               | style         | weight            | letter-spacing      | line-height        |
| ------------- | ------------ | ----------------------- | ------------- | ----------------- | ------------------- | ------------------ |
| `.font-sans`  | `.font-xs`   | `.antialiased`          | `.italic`     | `.font-hairline`  | `.tracking-tighter` | `.leading-none`    |
| `.font-serif` | `.font-sm`   | `.subpixel-antialiased` | `.not-italic` | `.font-thin`      | `.tracking-tight`   | `.leading-tight`   |
| `.font-mono`  | `.font-base` |                         |               | `.font-light`     | `.tracking-normal`  | `.leading-snug`    |
|               | `.font-lg`   |                         |               | `.font-normal`    | `.tracking-wide`    | `.leading-normal`  |
|               | `.font-xl`   |                         |               | `.font-medium`    | `.tracking-wider`   | `.leading-relaxed` |
|               | `.font-2xl`  |                         |               | `.font-semibold`  | `.tracking-widest`  | `.leading-loose`   |
|               | `.font-3xl`  |                         |               | `.font-bold`      |                     |                    |
|               | `.font-4xl`  |                         |               | `.font-extrabold` |                     |                    |
|               | `.font-5xl`  |                         |               | `.font-black`     |                     |                    |
|               | `.font-6xl`  |                         |               |                   |                     |                    |

| list-style-type | list-style-positions | {placeholder/text}-color                | text-align      | text-decoration |
| --------------- | -------------------- | --------------------------------------- | --------------- | --------------- |
| `.list-none`    | `.list-inside`       | `.{placeholder/text}-transparent`       | `.text-left`    | .underline      |
| `.list-disc`    | `.list-outside`      | `.{placeholder/text}-white`             | `.text-right`   | `.no-underline` |
| `.list-decimal` |                      | `.{placeholder/text}-black`             | `.text-center`  | `.line-through` |
|                 |                      | `.{placeholder/text}-{color}-{100-900}` | `.text-justify` |                 |

| transform      | vertical-align       | white-spacing            | word-break      |
| -------------- | -------------------- | ------------------------ | --------------- |
| `.uppercase`   | `.align-baseline`    | `.whitespacing-normal`   | `.break-normal` |
| `.lowercase`   | `.align-top`         | `.whitespacing-no-wrap`  | `.break-words`  |
| `.capitalize`  | `.align-middle`      | `.whitespacing-pre`      | `.break-all`    |
| `.normal-case` | `.align-bottom`      | `.whitespacing-pre-line` | `.truncate`     |
|                | `.align-text-top`    | `.whitespacing-pre-wrap` |                 |
|                | `.align-text-bottom` |                          |                 |

#### # BACKGROUNDS

| bg-attachment | bg-color                | bg-position                         | bg-repeat                    | bg-size       |
| ------------- | ----------------------- | ----------------------------------- | ---------------------------- | ------------- |
| `.bg-fixed`   | `.bg-transparent`       | `.bg-{left / right / top / bottom}` | `.bg-repeat`                 | `.bg-auto`    |
| `.bg-local`   | `.bg-white`             | `.bg-center`                        | `.bg-norepeat`               | `.bg-cover`   |
| `.bg-scroll`  | `.bg-black`             | `.bg-{left / right}`                | `.bg-repeat-{x / y}`         | `.bg-contain` |
|               | `.bg-{color}-{100-900}` | `.bg-{left / right}-{top / bottom}` | `.bg-repeat-{round / space}` |               |
|               |                         |                                     |                              |               |

#### # BORDERS

| border-color                | border-style     | border-width                | border-radius                      |
| --------------------------- | ---------------- | --------------------------- | ---------------------------------- |
| `.border-transparent`       | `.border-solid`  | `.border-0`                 | `.rounded-{none/sm}`               |
| `.border-white`             | `.border-dotted` | `.border`                   | `.rounded`                         |
| `.border-black`             | `.border-dashed` | `.border-{2/4/8}`           | `.rounded-{lg/full}`               |
| `.border-{color}-{100-900}` | `.border-double` | `.border-{t/r/b/l}`         | `.rounded-{t/r/b/l}-{none/sm}`     |
|                             | `.border-none`   | `.border-{t/r/b/l}-0`       | `.rounded-{t/r/b/l}`               |
|                             |                  | `.border-{t/r/b/l}-{2/4/8}` | `.rounded-{t/r/b/l}-{lg/full}`     |
|                             |                  |                             | `.rounded-{tr/tl/br/bl}-{none/sm}` |
|                             |                  |                             | `.rounded-{tr/tl/br/bl}`           |
|                             |                  |                             | `.rounded-{tr/tl/br/bl}-{lg/full}` |

#### # FLEXBOX

> **Container** > **.flex**

| direction           | wrap                 | align-items       | align-content      | justify-content    |
| ------------------- | -------------------- | ----------------- | ------------------ | ------------------ |
| `.flex-row`         | `.flex-wrap`         | `.items-stretch`  | `.content-start`   | `.justify-start`   |
| `.flex-col`         | `.flex-no-wrap`      | `.items-start`    | `.content-center`  | `.justify-center`  |
| `.flex-row-reverse` | `.flex-wrap-reverse` | `.items-center`   | `.content-end`     | `.justify-end`     |
| `.flex-col-reverse` |                      | `.items-end`      | `.content-between` | `.justify-between` |
|                     |                      | `.items-baseline` | `.content-around`  | `.justify-around`  |

> **Childrens**

| align-self      | flex            | flex-grow      | flex-shrink      | flex-order      |
| --------------- | --------------- | -------------- | ---------------- | --------------- |
| `.self-auto`    | `.flex-initial` | `.flex-grow`   | `.flex-shrink`   | `.order-first`  |
| `.self-start`   | `.flex-1`       | `.flex-grow-0` | `.flex-shrink-0` | `.order-last`   |
| `.self-center`  | `.flex-auto`    |                |                  | `.order-none`   |
| `.self-end`     | `.flex-none`    |                |                  | `.order-{1-12}` |
| `.self-stretch` |                 |                |                  |                 |

#### # SPACING

| padding              | margin                  |
| -------------------- | ----------------------- |
| `.p-px`              | `.{-}m-px`              |
| `.p-{0-64}`          | `.m-auto`               |
| `.p{x/y}-px`         | `.{-}m-{0-64}`          |
| `.p{x/y}-{0-64}`     | `.{-}m{x/y}-px`         |
| `.p{t/r/b/l}-{0-64}` | `.{-}m{x/y}-{0-64}`     |
|                      | `.{-}m{t/r/b/l}-px`     |
|                      | `.{-}m{t/r/b/l}-{0-64}` |

#### # SIZING

| width          | min-width     | max-width        |     | height      | min-height      | max-height      |
| -------------- | ------------- | ---------------- | --- | ----------- | --------------- | --------------- |
| `.w-0`         | `.min-w-0`    | `.max-w-xs`      |     | `.h-{0-64}` | `.min-h-0`      | `.max-h-full`   |
| `.w-px`        | `.min-w-full` | `.max-w-sm`      |     | `.h-px`     | `.min-h-full`   | `.max-h-screen` |
| `.w-auto`      |               | `.max-w-md`      |     | `.h-auto`   | `.min-h-screen` |                 |
| `.w-{0-64}`    |               | `.max-w-lg`      |     | `.h-full`   |                 |                 |
| `.w-1/2`       |               | `.max-w-xl`      |     | `.h-screen` |                 |                 |
| `.w-{1-2}/3`   |               | `.max-w-{2-6}xl` |     |             |                 |                 |
| `.w-{1-3}/4`   |               | `.max-w-full`    |     |             |                 |                 |
| `.w-{1-4}/5`   |               |                  |     |             |                 |                 |
| `.w-{1-5}/6`   |               |                  |     |             |                 |                 |
| `.w-{1-11}/12` |               |                  |     |             |                 |                 |
| `.w-full`      |               |                  |     |             |                 |                 |
| `.w-screen`    |               |                  |     |             |                 |                 |

#### # TABLES

| collapse           | Layout         |
| ------------------ | -------------- |
| `.border-collapse` | `.table-auto`  |
| `.border-separate` | `.table-fixed` |

#### # EFFECTS

| opacity        | box-shadow        |
| -------------- | ----------------- |
| `.opacity-0`   | `.shadow`         |
| `.opacity-25`  | `.shadow-md`      |
| `.opacity-50`  | `.shadow-lg`      |
| `.opacity-75`  | `.shadow-xl`      |
| `.opacity-100` | `.shadow-2xl`     |
|                | `.shadow-inner`   |
|                | `.shadow-outline` |
|                | `.shadow-none`    |

#### # INTERACTIVITY

| cursor                | user-select    | resize          | pointer-events         | outline         | appearance         |
| --------------------- | -------------- | --------------- | ---------------------- | --------------- | ------------------ |
| `.cursor-auto`        | `.select-none` | `.resize`       | `.pointer-events-auto` | `.outline-none` | `.appearance-none` |
| `.cursor-default`     | `.select-text` | `.resize-{x/y}` | `.pointer-events-none` |                 |                    |
| `.cursor-pointer`     | `.select-all`  | `.resize-none`  |                        |                 |                    |
| `.cursor-wait`        | `.select-auto` |                 |                        |                 |                    |  |
| `.cursor-text`        |                |                 |                        |                 |                    |
| `.cursor-move`        |                |                 |                        |                 |                    |
| `.cursor-not-allowed` |                |                 |                        |                 |                    |

#### # SVG

| fill            | stroke            |
| --------------- | ----------------- |
| `.fill-current` | `.stroke-current` |
