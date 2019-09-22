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
