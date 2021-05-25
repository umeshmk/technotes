# Sass/Scss

:::tip Most useful

- React [recommends](https://create-react-app.dev/docs/adding-a-sass-stylesheet) to avoid sharing same class in different components. Instead share components directly.
- Parial Imports
- Nesting
- Avoid Variables. Instead use custom properties.
- Special Functions (Use Css standards - `calc(), env(), var(), min(), or max()`)
- Mixins (mostly for prefixes) (use autoprefixer)

_React/Vue Components - we can simply use css modules with **scoped css classes**._

:::

> Syntactically Awesome Stylesheets
>
> - [Reference](http://sass-lang.com/documentation/file.SASS_REFERENCE.html>)
> - [Playground](https://www.sassmeister.com/)

- Use `.scss` not `.sass`
- Any valid css is valid scss.

**Install**

1. `sass-loader` (7m) (**BEST**) - For webpack - Needs either `node-sass` or `sass`(_recommended_)
2. `sass` (2m) - Pure js created using `dart sass`
3. `node-sass` (4m) - wrapper around `libsass` (Both are _maintained but deprecated_)

## Comments

```scss
// Single line comment are NOT passed to css files

/* Multi-line comment is
passed to css files (not in minified) */

/*! added in minified css */
```

## Property shortcut

```scss
padding: {
  bottom: 0; // padding-bottom: 0
  left: 0; // padding-left: 0
}
```

## Special Functions

- Css standards - `calc(), env(), var(), min(), or max()`
- We can use Interpolation in it.

```scss
// url()
$foo: "path/to" ;
url("#{$foo}/image.jpg");   // url("path/to/image.jpg")
url($foo + "/image.jpg");   // url("path/to/image.jpg")

// calc()
$width : 500px;
calc(50% - #{$width / 2});  // calc(50% - 900px);

// max()/min()
$padding: 12px;
max(#{$padding});           // max(12px)
max($padding, 20px);        // 20px

```

## Variables

- In Css - **Custom Properties** - JavaScript has access
- In Sass - **Variables** - JavaScript has no access since it's compiled to normal css values

```scss
// --foo - Css Custom property
// $foo - sass variable
$r: red;
:root {
  --foo: $r; // --foo: $r (sass has no effect)
  --foo: #{$r}; // --foo: red
}
body {
  color: var(--foo);
}

// underscore == hyphen
$primary-color === $primary_color;

// Private Members - (variable, mixins, funtions) - can be used in same module only
// start with underscore/hyphen (both are same too)
$-color === $_color
```

### Css vs Sass variables

```scss
// Scope - Local/Global
// -- css var - Hoisting (limited to same/inner scopes only. Never outer scope.)
// -- sass var - No Hoisting
// ------ use `!global` flag to make it global scope from local scope

// sass ex
$a: red;
.foo {
  background-color: $a; // red
  $a: green;
  color: $a; // green
}
.bar {
  color: $a; // red
}

// css ex
:root {
  --a: red;
}
.foo {
  background-color: var(--a); /*green*/
  --a: green;
  color: var(--a); /*green*/
}
.bar {
  color: var(--a); /*red*/
}
```

### Interpolation

```scss
// INTERPOLATION - Mostly useful in strings (not much needed)
$name: "alert-success";
$bor: "border";
// .alert-success
.#{$name} {
  #{$bor}-color: red;
}
```

## Nesting

```scss
// Too much nesting is bad practice
nav {
  ul {
    margin: 0;
  }
  li {
    color: blue;
  }
}

// & - parent selector
.foo {
  &:hover {
    // .foo:hover{ }
  }
  :hover {
    // .foo :hover{ } - space is added before :
  }

  // BEM can be used but only if & = class,id,tag
  &__bar {
    // .foo__bar
  }
  &--bar {
    // .foo--bar
  }
}
```

## @use - Modules

- Use `@use` - since `@import` is _deprecated_
- Module is a `.scss` file
- **Loading Members** - **Variables, Functions, Mixins** from other modules.
  - Added only once irrespective of how many times its called.

```scss
@use "mymodule"; // loads mymodule.(scss|sass|css)

//  partials/_variables.scss
@use 'partials/variables'; // namespace=variables - eg: mixin is used as "@include variables.mymixin"
@use 'partials/variables' as foo; //  namespace=foo - eg: mixin is used as "@include foo.mymixin"
@use 'partials/variables' as *; //  no namespace - eg: mixin is used directly "@include mymixin"

// Namespace EX
// --> _mymodule.scss
@mixin rounded {
  border-radius: $radius;
}
// --> index.scss
@use "mymodule";
.box {
  @include mymodule.rounded;
}

// Add all modules in a folder
// collection/_index.scss
@use "foo"; // collection/_foo.scss
@use "bar"; // collection/_bar.scss
// main.scss
@use "collection"; // _index.scss added automatically
```

**Configuration (Default variable)** - _Not recommended_

```scss
// Default (Not recommended)
// --------------------------
// _mymodule.scss
$color: red !default; // default keyword is a must
$margin: 10px !default;

// index,scss
@use 'mymodule' with (
  $color: green;  // $color is replaced but $margin is still default
);

// Mixins Maps (Better)
// --------------------------
// _mymodule.scss
$-color: red ; // no default but private variables
$-margin: 10px;
@mixin config($color:null, $margin:null){
  @if $color{
    $-color: $color !global;
  }
  @if $margin{
    $-margin: $margin !global;
  }
}
@mixin style {
  body{
    color: $-color;
  }
}
// index.scss
@use "mymodule";
@include mymodule.config(
  $color: blue;                 // $-color is changed but $-margin is still default
)
@include mymodule.style;

```

## @forward

```scss
// _bottom.scss
@mixin mymix {
  .foo{...}
}

// _middle.scss
@forward "bottom";
@forward "bottom" as myprefix-* ;  // we can use prefix (optional)
@include bottom.mymix; // error - no namespace
@include mymix;        // error - no mixin found

// index.scss
@use "middle";
@include middle.mymix; // works - middle.myprefix-mymix (if prefix is used)
```

## Mixins

- Use **Autoprefixer** instead for vendor prefixes.

```scss
// EX - with any number of parameters
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  border-radius: $radius;
}
.box {
  @include border-radius(10px);
}

// EX - without parameters (it's better to use @extend)
@mixin vars {
  .foo{...}     // can add selectors too
}
@include vars;  // can add outside {} too based on content

```

## @extend (BEM) & %placeholder

- Useful for **BEM Methodology**

```scss
// Gives 2 classes
.myblock {
  padding: 10px;

  &__myelement {
    @extend .myblock;
    // @extend .myblock, .error, .msg; // for multiple classes
    color: red;
  }
}

// Compiled
.myblock,
.myblock__myelement {
  padding: 10px;
}
.myblock__myelement {
  color: red;
}

// But Why ?
// <div class="myblock ">               // apply - padding
// <div class="myblock__myelement ">    // apply - padding, color
```

### %placeholder (snippets)

- It's a class but starts with `%foo` instead of `.foo`

```scss
// %snip will not be added to final css if it's not extended.
%snip {
  color: red;
  .foo {...}
}
.abc {
  @extend %snip; // add at top for ease
  padding: 5px;
}
.xyz {
  @extend %snip;
  border: 2px solid red;
}
```

## Operators

```scss
// operators allowed ->   + - * / %
div p {
  width: 600px / 960px * 100%;
}
```

## @ in Css Standards (TODO)

```scss
@namespace;
@font-face;
@counter-style;
@supports;
@media;
@keyframes;
```

## @if / else / each / for / while - (Avoid)

```scss
$dark-theme: true !default;
$color: #f8bbd0;

@if $dark-theme {
  $color: darken($color, 60%);
  // new vars are not allowed
}
.button {
  background-color: $color; // #750c30
}
```
