# Tailwind css

#### # GETTING STARTED

[Tailwind](https://tailwindcss.com/docs/installation)

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

```json
// package.json
script{
    "build" : "tailwind build src/style.css -o dist/style.css"
}
```

- For Laravel Mix visit [installation](https://tailwindcss.com/docs/installation#laravel-mix)
- *file size* :- use `PurgeCss` package
- *prefix* :- use `Autoprefixer` package




#### # CORE CONCEPT

> Responsive Design

|sm|md|lg|xl|
|-|-|-|-|
|640px|768px|1024px|1280px|

- It works on **all utility classes.** like `sm:text-red` , `lg:flex` etc
- Mobile First approach :
    - `sm != mobile` instead use classes without any prefix.
    - Ex: `<img class="w-16 md:w-32 lg:w-48" src="...">`

> PSseudo classes

```css
/* Classes */
{ focus|hover|disabled|active|visited }
{ first-child|last-child|odd-child|even-child }
{ group-hover|focus-within }
/* Usage */
hover:bg-color-blue-600 
focus:text-white
```

> Add base styles

```html
<!-- In html -->
<!-- Normalize.css is included in tailwind aka preflight.css with some extras -->
<body class="min-h-screen">
```

```css
/* In css */
@tailwind base; 

h1 { @apply text-white bg-red-400; }
@font-face {....}

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

@responsive {                                       /*gives sm:rotate-0, md:rotate-0, etc*/
    @variants hover, focus {                        /*focus takes precedence over hover.*/
        .rotate-0{ transform: rotate(0deg;) }
        .rotate-90{ transform: rotate(90deg;) }
        .rotate-180{ transform: rotate(180deg;) }
    }
}
```

> Functions / Directives

- `@apply`, `@responsive`, `@variants`, `@screen`

#### # CUSTOMIZATION

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

