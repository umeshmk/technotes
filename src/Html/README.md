# HTML

> Hyper Text Markup Language

## BASICS

[Jsfiddle](https://jsfiddle.net/nycdh9xm/2/)

```html
<!-- File extension - .htm & .html -->

<!DOCTYPE html>
<!-- Html5 version  -->
<html>
  <head>
    <title>...</title>
    <meta charset="UTF-8" />
  </head>
  <body>
    ....
  </body>
</html>

<!-- This is 
a Comments -->

<!-- case-INsensitive But 
1] <TAG> is always converted to  <tag> 
2] class="FOO foo" are different classes
-->

<h1></h1>
.....
<h6></h6>
<!-- Headings -->
<br />
<!-- Breakline -->
<hr />
<!-- Horizontal line -->

<!-- ATTRIBUTES -->
<p
  class="foo"
  id="bar"
  style="color:red"
  title="Lorem"
  user-data="user created attribute"
>
  <!-- BLOCK / INLINE ELEMENTS -->
  div, table, ul, li, form, blockquote, pre, p
  <!-- BLOCK ELEMENTS -->
  span, a, hr, input, label, textarea, b
  <!-- INLINE ELEMENTS -->

  <!-- JAVASCRIPT -->
  <script>
    ....
  </script>
  <!-- can be added anywhere head/body-->

  <!-- ENTITIES -->
  &nbsp;
  <!-- Non-breaking space -->
  &lt;
  <!-- < less than  -->
  &gt;
  <!-- > greater than -->
</p>
```

## TEXT FORMATTING

[Jsfiddle](https://jsfiddle.net/nycdh9xm/3/)

```html
<pre>
	This paragraph 
will preserve 			white spaces
</pre>

<b>
  <!-- bold -->
  <i>
    <!-- italics -->
    <em>
      <!-- emphasis -->
      <small>
        <!-- small -->
        <del>
          <!-- delete -->
          <ins>
            <!-- insert -->
            <sub>
              <!-- sub-script -->
              <sup> <!-- super-script --> </sup></sub
            ></ins
          ></del
        ></small
      ></em
    ></i
  ></b
>
```

## QUOTATIONS & CITATIONS

[Jsfiddle](https://jsfiddle.net/nycdh9xm/4/)

```html
<q>
  <!-- Quotations "" -->
  <blockquote>
    <!-- quote in a block -->
    <abbr>
      <!-- abbreviations -->
      <address>
        <!-- address -->
        <cite> <!-- Citations in italics --></cite>
      </address></abbr
    >
  </blockquote></q
>
```

## COLOR VALUES

[Jsfiddle](https://jsfiddle.net/nycdh9xm/5/)

```html
#000 = black , #FFF = white
<!-- HEX values -->
#F25 = #FF2255 rgb(255, 99, 77)
<!-- RED GREEN BLUE -->
rgba(255, 99, 74, 0.5)
<!-- RGB + Opacity -->
hsl(9, 90%, 50%)
```

## STYLE CSS

[Jsfiddle](https://jsfiddle.net/nycdh9xm/6/)

```html
<!-- INLINE -->
<p style="...">
  <!-- INTERNAL -->
  <style>
    div,
    p {
      ....;
    }
  </style>

  <!-- EXTERNAL -->
  <link rel="stylesheet" href="foo.css" />
</p>
```

## LINK

[Jsfiddle](https://jsfiddle.net/nycdh9xm/7/)

```html
<a href="url" target="TARGET"> Google </a>

<!-- TARGETS: -->
#id
<!-- Any #id on current page-->
_blank
<!-- New blank tab is opened -->
_self
<!-- Link opens in same window tab. (Default) -->
_parent
<!-- IGNORE THIS - Parent frame -->
_top
<!-- Top of same page -->

<!-- css -->
a:link a:visited a:hover a:active
<!-- when link is clicked. Always after :hover -->
```

## IMAGES

[Jsfiddle](https://jsfiddle.net/nycdh9xm/8/)

```html
<img src="url" alt="Discription" />

<picture>
  <source media="(min-width:900px)" srcset="/pic/600/100" />
  <source media="(min-width:700px)" srcset="/pic/400/100" />
  <source media="(min-width:400px)" srcset="/pic/200/100" />
  <img src="/pic/100/100" alt="Default if media is not matches" />
</picture>
```

## TABLES

[Jsfiddle](https://jsfiddle.net/nycdh9xm/9/)

```html
<table>
  <caption>
    ....
  </caption>
  <tr>
    <th>Heading1</th>
    <th>Heading2</th>
  </tr>
  <tr>
    <td>datacell</td>
    <td>datacell</td>
  </tr>
</table>

<!-- Spanning always on data-cell <td> -->
<td rowspan="2"></td>
<td colspan="2"></td>
```

## LIST

[Jsfiddle](https://jsfiddle.net/nycdh9xm/10/)

```html
<ul>
  <!-- unordered  -->
  <ol>
    <!-- Ordered -->
    <li>
      <!-- List Item -->

      <!-- unordered css { circle, disc, square, none }-->
      ul{ list-style-type: "circle" }

      <!-- Ordered { A, a, I, i, 1 }-->
      <ol type="i" start="5">
        <!-- Data Defination list -->
        <dl>
          <dt><!-- data tag --></dt>
          <dd><!-- data defination --></dd>
        </dl>
      </ol>
    </li>
  </ol>
</ul>
```

## HEAD & LAYOUT

[Jsfiddle](https://jsfiddle.net/nycdh9xm/12/)

```html
<!-- HEAD -->
<head>
<style>
<script>
<title>
<meta>
<link>

/* LAYOUT */
<nav>
<header>
<section>
	<article>
	<aside>
</section>
<footer>
```

## CODE

[Jsfiddle](https://jsfiddle.net/nycdh9xm/13/)

```html
<kbd>
  <samp>
    <var> <code></code></var></samp
></kbd>
```

##
