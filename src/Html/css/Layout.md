# LAYOUT

## WIDTH / HEIGHT

```css
/* For content excluding padding, border, margin */
width : 10px;
height : 20px;
max-{ width|height } : 200px;
min-{ width|height } : 200px;

```

## DISPLAY / VISIBILITY

```css
display: none | block | inline | inline-block | flex;
visibility: hidden | visible;

/*only display changes not behaviour*/
span {
  display: block;
} /*Cannot add block element in this span even though its block element*/
```

## POSITION

```css
position : static;                      /*default*/
         : relative;                    /*Related -> normal position.*/     /* Other elements NOT affected.*/
         : fixed;                       /*Related -> viewport.*/
         : absolute;                    /*Related -> parent position*/      /* parent must be positioned other than static.*/
         : sticky;                      /*Related -> scroll position*/      /*toggles between (fixed<-->relative) */    /*offset = between viewport and element*/
{ top|bottom|right|left } : 20px;

z-index : 10;                           /*front*/
        : -5;                           /*back*/

clip : rect(0, 100px, 70px, 200px);     /*position must be absolute & <img>*/
```

## OVERFLOW

```css
overflow : auto | scroll | hidden | visible ;
overflow-{x|y} : auto | scroll | hidden | visible ;
```

## FLOAT / CLEAR

```css
float: none | left | right | inherit;

clear: none; /*float allowed*/
:left|right ; /*NOT allowed on left|right*/
:both ; /*float NOT allowed*/
```
