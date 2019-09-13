# Tailwind css

[Tailwind](https://tailwindcss.com/docs/installation)

```bash
npm init -y
npm install tailwindcss
```

```css
<!-- src/style.css -->
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```bash
<!-- create - tailwind.config.js -->
npx tailwind init
```
```json
<!-- package.json -->
script{
    "build:css" : "tailwind build src/style.css -o dist/style.css"
}
```

Using with Laravel Mix see [installation](https://tailwindcss.com/docs/installation#laravel-mix)

Reducing file size - use `PurgeCss` package
Adding prefix - use `Autoprefixer` package



#### # GETTING STARTED

#### # CORE CONCEPT

> Responsive Design

|sm|md|lg|xl|
|-|-|-|-|
|640px|768px|1024px|1280px|

- It works on **all utility classes.** like `sm:text-red` , `lg:flex` etc
- Mobile First approach :
    - `sm != mobile` instead use classes without any prefix.
    - Ex: `<img class="w-16 md:w-32 lg:w-48" src="...">`

> PSEUDO CLASSES

```css
/* Classes */
{ focus|hover|disabled|active|visited }
{ first-child|last-child|odd-child|even-child }
{ group-hover|focus-within }
/* Usage */
hover:bg-color-blue-600 
focus:text-white
```

> ADD BASE STYLE

```html
<!-- Normalize.css is included in tailwind aka preflight.css with some extras -->
<!-- In html -->
<body class="min-h-screen">
```

```css
<!-- In css -->
@tailwind base; 

h1 { @apply text-white bg-red-400; }
@font-face {....}

@tailwind components;
```



> EXTRACTING COMPONENTS

- Avoid duplication of code for repeatative elements.
- Add components after `@tailwind components;`
- *Small components* : Use `@apply`
    ```css
    @tailwind components;
    .btn-green { 
        @apply bg-green-400 text-white ;            /*cannot use hover: , focus: , {screen}. So use normal css not utility as below.*/
        } 
    .btn-green:hover {
        @apply bg-green-200;
    }
    @tailwind utilities;
    ```
- *Big Components* : Use Vue, React

> ADDING NEW UTILITIES

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

> FUNCTIONS / DIRECTIVES

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

