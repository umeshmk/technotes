# CSS-3

#### # BORDER RADIUS

```css
border-radius : 2px 3px 4px 5px;
              : 5px;
border-top-right-radius : 3px;
```

#### # GRADIENT

```css
/*****LINEAR*****/
background-image : linear-gradient(red, green);
                                  (to right, red, green);
                                  (to bottom left, red, green);
                                  (50deg, red, green);
                                  (red, green, blue, black);
                 : repeating-linear-gradient(red, green 10%, yellow 50%);

/*****RADIAL*****/
background-image : radial-gradient(red, yellow, green);
                                  (red 5%, green 35%);
                                  (circle, red, green);         /*default is ecllipse*/
```

#### # SHADOW EFFECTS

```css

{text|box}-shadow : 5px 3px;                /*horizontal vertical*/
                  : 5px 3px red;            /*color*/
                  : 5px 3px 5px red;        /*blur*/
                  : 0 0 3px red;            /*red colored glow effect*/

```

#### # TEXT-EFFECTS

```css
text-overflow : clip|ecllipse;              /*3 dots ... is ecllipse*/
word-wrap : break-word;
word-break : keep-all | break-all;
```

#### # WEB FONTS

```css
TTF - True type font
OTF - Open type font
WOFF - Web open font format

@font-family {
    font-family : "anyname";
    src : url("/font/doo.woff");
}
```

#### # TRANSFORM

```css
/*****2D*****/
transform : translate(20px,50px);           /*horizontal vertical*/
          : rotate(30deg);                  /*degrees*/
          : scale(2,4);                     /*width height*/
          : skew(20deg, 30deg);
          : matrix( scaleX(2), skewX(30deg), scaleY(4), translateX(50px));

/*****3D*****/
transform : translate3d(x,y,z);
          : rotate3d(x,y,z,angle);
          : scale3d(x,y,z);
          : perspective(n);

```

#### # TRANSITION

```css
transition : width 2s;
           : width 2s, height 3s;
transition-timing-function : linear|ease|ease-in|ease-out|ease-in-out;
transition-delay : 4s;

```

#### # ANIMATIONS
- USE animate.css library.

#### # OBJECT-FIT

```css
/* Used for `<img> <video>` */
object-fit: none|fill|contain|cover|scale-down;
```

#### # VARIABLE

```css
:root { --mycolor : red; }
#foo { color: var(--mycolor); }
```

#### # BOX-SIZING

```css
*{ box-sizing : content-box|border-box };       /* border-box for all is recommended*/
```

#### # FLEXBOX

```css
.container { display:flex; }

/*****CONTAINER*****/
flex-direction: { row|column|row-reverse|column-reverse };
flex-wrap : { wrap|nowrap|wrap-reverse };
flex-flow: row wrap;                            /*shorthand*/

align-items : { flex-start|flex-end|center|stretch|baseline };
align-content : { flex-start|flex-end|center|stretch|space-around|space-between };
justify-content : { flex-start|flex-end|center|space-around|space-between };

/*****ITEMS*****/
order : 3;

flex-grow : 2;                                  /*2 times other elements*/
flex-shrink : 4;
flex-basis : 200px ;                            /*initial width*/
flex : 2 4 200px;                               /*shorthand*/

align-self : { flex-start|flex-end|center|stretch|baseline};        /*overrides align-items*/

```

#### # MEDIA QUERIES

```css
/* TYPES */
- all       - screen
- print     - speech

/* PROPERTIES */
- width/height          /*viewport | device*/
- Orientation           /*portrait|landscape*/
- Resolution

/*OPTIONS*/
- only      - not

/*queries*/
@media all and (min-width:1200px) { .... }
@media only screen and (orientation:portriat) { .... }
@media screen and (min-width:700px) and (max-width:1200px) { ... }
```