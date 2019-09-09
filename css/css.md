# CSS [Cascading style sheet]

#### # INTRODUCTION

- File ext is `.css`
- Syntax: 

```css
selector {property : value;}

/**** Selectors ****/
div, p, span {...}                  /* element */
#myid {...}                         /* id */
.myclass {...}                      /* class */
[name="surname"] {...}              /* attribute */
a:hover, a:active {...}             /* event */

/* This is a 
comment */

/**** HOW TO ADD CSS ****/
<link rel="stylesheet" type="text/css" href="/path/file.css">   /* EXTERNAL */
<style> ... </style>                                            /* INTERNAL */
<p style=" .... ">                                              /* INLINE */

/**** COLORS ****/
red, purple, tomato                 /* NAMED */

rgba( red, blue, green, alpha )     /* RGBA */
    black is (0,0,0,1)
    white is (255,255,255,1)

#RRBBGG                             /* HEX */
    Black is #000000
    White is #ffffff
    #ab34cd == #AB34CD

```

#### # BACKGROUNDS

```CSS
background-color : red;
background-image : url("/pics/a.jpg"); 
background-repeat : no-repeat | repeat-x | repeat-y ;
background-position : right top ;                           /* 5px 10px */
background-size : auto | width height | cover | contain ;
background-attachment : fixed;                              /*scrolling is disabled*/ 
```

#### # BORDER

```css
border : 1px solid red;
border-{ left|right|top|bottom } : 1px solid red;
border-width : 5px;
border-style : solid | dotted | dashed | double;
             : groove | ridge | inset | outset;
             : none | hidden;
             : solid dashed solid dotted;                   /*top right bottom left*/
border-color : red;
border-image : url("pic.jpg") 20% round;
border-radius : 5px ;
```
