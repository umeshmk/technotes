# JQUERY

- Used for - DOM, CSS, event, animations, ajax, utilities
- Has various plugins
- 2 versions - production (jquery.min.js) & development (jquery.js)
- Via - CDN or Download

#### # SYNTAX

```js
$(selector).action();
$("p"); $("#demo"); $(".myclass"); $("[href]");         //use css selectors

$(document).ready(function (){ ... });
$(function () { ... });

// EVENTS
$("p").click(function () { ... });
// dblclick() , mouseenter() , mouseleave() , mouseup() , mousedown()
$("p").hover(function () { /*mouseenter*/ } ,
             function () { /*mouseleave*/ }
            );

$("p").on({                                 // Many events
    mouseenter: function() { ... },
    mouseleave: function() { ... },
    click: function() { ... }
});
$("p").on("click" , function () { ... });   // Single event

```

#### # SHOW/HIDE 

```js
$("p").show(speed, callback);      // show() , hide() , toggle()

$("p").fadeIn(speed, callback);    // fadeIn() , fadeOut() , fadeToggle()

$("p").slideDown(speed, callback); // slideDown() , slideUp() , slideToggle()

```

#### # ANIMATE

```js
$("p").animate({
    left: '100px',
    opacity: '0.2'
});
$("p").stop();
```

#### # CHAINING

```js
$("p").css("color" : "red")
      .slideUp(2000)
      .slideDown(3000);
```

#### # GET/SET

```js
$("p").html();                              // get html()
      .html( "<h1>Hello</h1>" );            // set

$("p").text();                              // get text()
      .text( "Hello" );                     // set

$("input").val();                           // get val() of input field
          .val("umesh");                    // set

$("a").attr("href");                        // get
      .attr("href" , "www.google.com")      // set

```

#### # ADD/REMOVE ELEMENTS

```js
// add
$("p").append( "<p> Hello </p>" );          // Add at end
      .prepend( "<p> Hello </p>" );         // Add at start
      .before( "<p> Hi </p> " );
      .after( "<p> Hi </p> " );

// remove
$("p").remove();                            // removes <p>
      .remove(".myclass");                  // removes  p.myclass
      .empty();                             // removes all childrens of <p>

```

#### # CSS

```js
$("p").addClass("classA classB");
      .removeClass("classA");
      .toggle("myclass");

$("p").css("width");
      .css("width" , "200px");
      .css({
            "width" : "200px" ,
            "color" : "red" 
        );
```

#### # DIMENSIONS

```js
$("p").width();                 // content
      .height();
      .innerWidth();            // content + padding
      .innerHeight();
      .outerWidth();            // content + padding + border
      .outerHeight();

// note : .css() method is better
```

#### # TRAVERSING

```js
// PARENT
$("p").parent();                // direct parent
      .parents();               // all parents till root <html>
      .parents("p");            // all <p> parents
      .parentsUntil("div");     // all parents till <div>

// CHILDREN
$("p").children();              // all direct childrens
      .children("div");         // direct <div>
      .find("span");            // all <span> children
      .find("*");               // all childrens

// SIBLING
$("p").siblings();              // all siblings
      .siblings("div");         // all div siblings

      .next();                  // 1 sibling after <p>
      .nextAll();               // n siblings after <p>
      .nextUntill("span");      // 

      .prev();
      .prevAll();
      .prevUntill("span");
```

#### # FILTER

```js
$("p").first();                     // 1st <p>
      .last();                      // last <p>
      .eq(2);                       // 3rd <p> (ie 0,1,2....n)
      .filter(".myclass");          // all <p> with ".myclass"
      .not(".myclass");             // all <p> without ".myclass"
```

#### # AJAX

```js
$("p").load( url, data, function(response, status, xhrObj) {...} );

$.get(url, function(response, status) {...} );
$.post(url, data, function(response, status) {...} );
```

#### # NO CONFLICT

```js
// use "jq" instead of "$" 
var jq = $.noConflict();
// eg : jq("p").hide();
```







