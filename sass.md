
# Sass Short Notes

### VARIABLES

```scss
$primary-color: #333;
body {
  color: $primary-color;
}
```

### NESTING

```scss
nav {
  ul {
    margin: 0;
  }
  a {
    display: block;
  }
}
```

### PARTIALS

  *_variables.scss*

  *_any.scss*


### IMPORT

 *_reset.scss*
  
```scss
    ul,ol {
      margin: 0;
      padding: 0;
    }
```

*base.scss*
 
```scss
    @import 'reset';
    body {
      background-color: blue;
    }
```

### MIXIN

```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box { @include border-radius(10px); }
```

### INHERITANCE

```scss
.mesg {
  border: 1px solid #ccc;
  padding: 10px; 
}

.alert-success {
  @extend .mesg;
  color: green;
}
.alert-error {
  @extend .mesg;
  color: red;
}
.alert-none {
  @extend .message;
}
```


### OPERATORS

```scss
.container { width: 100%; }


article {
  float: left;
  width: 600px / 960px * 100%;
}
aside {
  float: right;
  width: 300px / 960px * 100%;
}
```


### CLASS-NAMES AS $var

```scss
$n: "alert-success";

.#{$n} {
  color: #333;
}
```



