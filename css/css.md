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

/***** width/height *****/
/* For content excluding padding, border, margin */
{ auto|px|em|rem|% } 

max-{ width|height } : 200px;
min-{ width|height } : 200px;
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

#### # MARGIN

```CSS
margin  : top right bottom left;
        : 5px -10px;                                        /* -ve is allowed*/
        : 5px;
        : auto;                                             /*center it horizontally */ 
margin-{ left|right|top|bottom } : 10px;

/*****Top+bottom margin of 2 block elements can COLLAPSE*****/
<div>
    <h1> ... </h1>          /* margin : 0 0 10px 0 ; */
    <h2> ... </h2>          /* margin : 40px 0 0 0 ; */
</div>

/* Result : 40px and not (40+10)px (SOMETIMES)*/

```

#### # PADDING

```css

padding : top right bottom left;
        : 5px -10px;                                        /* -ve is NOT allowed*/
        : 5px;
padding-{ left|right|top|bottom } : 10px;

/*****Width = contentWidth + padding *****/
div { width: 20px;
      padding: 10px; }                                      /*width = 30px*/

div { width: 20px;
      padding: 10px 
      box-sizing: border-box; }                             /*width = 20px    as padding increase contentWidth is reduced*/

```

#### # BOX-SIZING

- Height & width is for content

![](../images/css1.png?raw=1)