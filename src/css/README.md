# CSS

> Cascading style sheet

:::tip Modern Css - How we can use ?

1. **Inline** `<div style={} >`
2. **Basic** `.css`
3. **Sass** `.scss`
4. **Css-in-js** `.js` _(Styled components, Glamorous, Radium, Emotion )_
5. [**Css Modules**](https://github.com/css-modules/css-modules) `App.module.css` _(Webpack's css-loader)_
6. **Css Modules + Sass** `App.module.scss`

:::

## INTRODUCTION

- File ext is `.css`
- Syntax:

```css
// This single line comment is not allowed
/* This comment is allowed */

/**** HOW TO ADD CSS ****/
<link rel="stylesheet" type="text/css" href="/path/file.css">   /* EXTERNAL */
<style> ... </style>                                            /* INTERNAL */
<p style=" .... ">                                              /* INLINE */

/**** COLORS ****/
red, purple, tomato                     /* NAMED */

rgba( red, blue, green, alpha )         /* RGBA */
    black is (0,0,0,1)
    white is (255,255,255,1)

#RRBBGG                                 /* HEX */
    Black is #000000
    White is #ffffff
    #ab34cd == #AB34CD
    #12345678 - where last 78 stands for opacity
```

## UNITS

```css
/*****ABSOLUTE*****/
mm | cm | in

pixel       px      1/96 inch           /*Is relative since devices has DPI-Density Pixels per inch*/
point       pt      1/72 inch
picas       pc      1/6 inch = 12pt

/*****RELATIVE*****/
%           /* percent */
em          /* relative to parent value */  /*RECOMMENDED*/
rem         /* relative to root value */  /*RECOMMENDED*/
vh | vw     /* viewport height/width */

```

## SELECTORS

```css
selector {property : value;}

/**** Selectors ****/
div, p, span {...}                      /* element */
#myid {...}                             /* id */
.myclass {...}                          /* class */
[name="surname"] {...}                  /* attribute */
a:hover, a:active {...}                 /* event */

/*****COMBINATOR*****/
div p {..}                              /*Descendent*/
div>p {..}                              /*Direct child*/
div+p {..}                              /*Immediate following sibling*/
div~p {..}                              /*All siblings*/

/*****PSEUDO SELECTORS*****/
a:{link|visited|hover|active} {..}
div:hover {..}
   :empty {..}
   :not(p) {,,}                         /*all except <p>*/

div:{ first-child|last-child|nth-child } {..}
   :{ first-of-type|last-of-type|nth-of-type } {..} /*only { first|last|nth } <div> in each parent elements*/
   :only-child {..}

input:{ valid|invalid } {..}            /*<input> only*/
     :{ read-only|read-write } {..}
     :{ focus|checked } {..}
     :{ enabled|disabled } {..}
     :{ optional|required } {..}
     :{ in-range|out-of-range }


/*****PSEUDO ELEMENTS (::)*****/
div::{ before|after } {..}
   ::{ first-letter|first-line } {..}
   ::selection {..}                     /*selected by user*/


/*****ATTRIBUTES*****/
[name="test"]
[name~="test"]                          /*{ test a, test-a, a test }*/
[name|="test"]                          /*{ test a, test-b, test c }*/ /*starts with exact word*/
[name^="test"]                          /*{ test a, testb, test-c }*/
[name$="test"]                          /*ends with*/
[name*="te"]                            /*any match*/


/*****SPECIFICITY*****/
                   [name="abc"]
inline  >  #id  >    .class      >  tag
                     :hover
```

## BACKGROUNDS

```CSS
background-color : red;
background-image : url("/pics/a.jpg");
background-repeat : no-repeat | repeat-x | repeat-y ;
background-position : right top ;                           /* 5px 10px */
background-size : auto | width height | cover | contain ;
background-attachment : fixed;                              /*scrolling is disabled*/
```

## BORDER

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

## MARGIN

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

## PADDING

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

## BOX-SIZING

- Height & width is for content

<vc-img url="/images/css1.png" size="md"/>

## OUTLINE

- May overlap other content elements without changing its width/height.

```js
// Avoid - Border is good enough
outline-style: solid | dashed | dotted | double;
             :groove|ridge|inset| outset ;
             :none|hidden ;
outline-width: 20px;
outline-color: red;
outline-offset: 10px; /*between border and outline.*/
```

## TEXT / FONT FORMATTING

- **Text**

```css
text-indent: 40px;
text-transform: capitalize | uppercase | lowercase;
text-align: left | right | center | justify;
text-decoration: none | overline | underline | line-through;
text-shadow: 2px 3px red;

color: red;
direction: rtl; /*right-to-left*/
line-height: 5px;

letter-spacing: 2px;
word-spacing: 2px;
white-space: normal | nowrap | pre | pre-line | pre-wrap;
```

- **Font**

```css
/*
Generic font family are :
    SERIF           => For printing     [Garamond, Times, Times new roman, Georgia, New York]
    SANS-SERIF      => For online       [Arial, Geneva, Helvetica, Verdana]
    MONOSPACE       => For coding       [Courier, Lucida console, Monaco]
    FANTASY         => For accenting    [Copperplate, Impact, Keno, Desdemona]
    SCRIPT          => For accenting    [Comic sans ms, Lucida handwriting]
*/

font-family : Arial;
            : "Times new roman";
font-size : 20px;
font-weight : 500;
font-style : normal | italic | oblique;
font-variant : normal | small-caps;

```

## ICONS

- Use [Font-awesome](https://fontawesome.com/)

## LINK / LIST

```CSS
/*****LINK (must be in correct order)*****/
a:link {...}
a:visited {...}
a:hover {...}
a:active {...}

/*****LIST*****/
list-style-tyoe : circle;
list-style-image : url("/pic.jpg");
list-style-position : inside | outside;

```
