# Sass 
Syntactically Awesome Stylesheets

[Referenxe](http://sass-lang.com/documentation/file.SASS_REFERENCE.html>)

```bash
sass input.scss output.css                  # 1 times
sass --watch input.scss output.css          # watch 1 file
sass --watch resourses/sass:public/css      # All files in folder
```

#### VARIABLES / INTERPOLATION

```scss
// VARIABLE
$primary-color: #333;                 // define var
div {  color: $primary-color; }       // as prop-value
// usage ---> $primary-color = $primary_color

// INTERPOLATION
$classname: "alert-success";
.#{$classname} { color: #333; }       // as class-name (dot used since class)
$bor: "border";
p { #{$bor}-color: red; }             // as prop-name
```

#### NESTING

```scss
nav {
  ul { margin: 0; }           // Too much nesting is bad practice
  li { color: blue; }
}
```

#### PARTIALS / IMPORTS

- Starts with *under_score* like `_variables.scss`
- No `.css` file generated
- Can be imported in any `.scss` files
- `**@Import**`
  - In *CSS* : Method used is `@import` which makes `http` requests [eg. Google Fonts]
  - In *SASS* : No `http` request. Preprocessor is used.

```scss
# _reset.scss is imported in project.scss
@import 'reset';
```

#### MIXIN / INCLUDE

```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}
.box { @include border-radius(10px); }
```

#### EXTEND / INHERITANCE

- `@import 'partials'` are files. 
- `@extend %snip`are small css snippets for reuse.
- Helps avoid multiple classnames

```scss
%snip { color:red; display:block; }           // Only props not selectors
.abc { @extend %snip ; padding:5px; }
.xyz { @extend %snip ; border: 2px solid red; }
```

#### OPERATORS [ `+` `-` `*` `/` `%` ]

```scss
div p { width: 600px / 960px * 100%; }
```

#### COMMENTS

```scss
// Single line comment are NOT passed to css files
/* Multi-line comment is
passed to css files */
```
