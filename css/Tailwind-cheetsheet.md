# Tailwind - Cheatsheet

#### # Responsive Design

- It works on **all utility classes.**

  | Mobile    | sm                  | md                   | lg       | xl       |
  | --------- | ------------------- | -------------------- | -------- | -------- |
  | _< 640px_ | _640px_             | _768px_              | _1024px_ | _1280px_ |
  | `w-4`     | `sm:w-4`            | `md:w-4`             | `lg:w-4` | `xl:w-4` |
  | Mobile    | Tablet (_Portrait_) | Tablet (_Landscape_) | Laptop   | Desktop  |

#### # tailwind.config.js

| Spacing | Colors | Pseudo class Variants | 3rd Party Plugins |
| ------- | ------ | --------------------- | ----------------- |
| 0       | Black  | responsive            | transform         |
| px      | White  | group-hover           | transition        |
| 1, 2    | gray   | focus-within          | gradients         |
| 3, 4    | red    | first                 |                   |
| 5, 6    | orange | last                  |                   |
| 8       | yellow | odd                   |                   |
| 10      | green  | even                  |                   |
| 12      | teal   | focus                 |                   |
| 16      | blue   | active                |                   |
| 20      | indigo | visited               |                   |
| 24      | purple | disabled              |                   |
| 32      | pink   |                       |                   |
| 40      |        |                       |                   |
| 48      |        |                       |                   |
| 56      |        |                       |                   |
| 64      |        |                       |                   |
|         |        |                       |                   |
|         |        |                       |                   |
|         |        |                       |                   |
|         |        |                       |                   |
|         |        |                       |                   |
|         |        |                       |                   |
|         |        |                       |                   |

---

| Utility                                        | Variant (Default                     |
| ---------------------------------------------- | ------------------------------------ |
| **All classes**                                | `responsive`                         |
| backgroundColor                                | `hover, focus`                       |
| borderColor                                    | `hover, focus`                       |
| boxShadow                                      | `hover, focus`                       |
| font-weight                                    | `hover, focus`                       |
| opacity                                        | `hover, focus`                       |
| outline                                        | `focus` `                            |
| textColor                                      | `hover, focus`                       |
| textDecoration                                 | `hover, focus`                       |
| **Remaining dont use hover/focus by default.** | Add manually in `tailwind.config.js` |

#### # style.css

Functions : `@tailwind`, `@apply`, `@responsive`, `@variants`, `@screen`

#### # LAYOUT

.container

| Container  | Display       | Float        | Object-Fit         | Object-Positions     | Overflow                  |
| ---------- | ------------- | ------------ | ------------------ | -------------------- | ------------------------- |
| .container | .block        | .float-right | .object-contain    | .object-bottom       | .overflow-auto            |
|            | .inline-block | .float-left  | .object-cover      | .object-center       | .overflow-hidden          |
|            | .inline       | .float-none  | .object-fill       | .object-left         | .overflow-visible         |
|            | .flex         | .clearfix    | .object-none       | .object-left-bottom  | .overflow-scroll          |
|            | .inline-flex  |              | .object-scale-down | .object-left-top     | .overflow-x-auto          |
|            | .table        |              |                    | .object-right        | .overflow-y-auto          |
|            | .table-row    |              |                    | .object-right-bottom | .overflow-x-hidden        |
|            | .table-cell   |              |                    | .object-right-top    | .overflow-y-hidden        |
|            | .hidden       |              |                    | .object-top          | .overflow-x-visible       |
|            |               |              |                    |                      | .overflow-y-visible       |
|            |               |              |                    |                      | .overflow-x-scroll        |
|            |               |              |                    |                      | .overflow-y-scroll        |
|            |               |              |                    |                      | .scrolling-touch (webkit) |
|            |               |              |                    |                      | .scrolling-auto (webkit)  |
|            |               |              |                    |                      |                           |
|            |               |              |                    |                      |                           |
|            |               |              |                    |                      |                           |

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
