# DOM

- _Document Object Model_
- All html elements are objects of **DOM tree**

- **Access**

  - All Html elements
  - Create/handle events
  - Style elements
  - Attributes

## Get/Set

- **Get**

  - <del>_id_ - `document.getElementById("foo");`</del>
  - <del>_class_ - `document.getElementsByClassName("foo");`</del>
  - <del>_tag_ - `document.getElementsByTagName("span");`</del>
  - _query_ - `document.querySelector("div#foo");`
  - _query all_ - `document.querySelectorAll("div.foo");`
  - _Attributes_ - `el.getAttribute('id');`
  - _data-attribute_

  ```js
  // <div data-doo="dodododo"></div>
  el.dataset.doo;
  ```

- NOTE - _Collection object_:

  ```js
  var e = document.getElementsByClassName("foo");
  e[5]; // A COLLECTION Object NOT ARRAY
  e.length;
  e.pop; // NOT Allowed
  ```

- **Set (elements)**
  - _html_ - `el.innerHTML = "...."`
  - _text_ - `el.textContent = "..."`
  - <del> _attribute_ - `el.attribute("href") = "http://google.com"`</del>
  - _attribute_ - `el.setAttribute("href" , "http://google.com")`
  - _style_ - `el.style.property = "value"`
  - _Event_ - `el.onclick = foo()`
- **Set (DOM)**
  - _write_ - `document.write(el)`
  - _create_ - `let e = document.createElement(div)`
    - _append_ - `el.append(e)`
    - _prepend_ - `el.prepend(e)`
  - _replace_ - `el.replaceChild(eNew, eOld)`
  - _remove_ - `el.removeChild(childOfEl)`
- **Document**
  - _baseUri_ - `document.baseUri`
  - _url_ - `document.URL`
  - _readyState_ - `document.readyState`
  - _cookie_ - `document.cookie`
  - _domain_ - `document.domain`
  - _body_ - `document.body`
  - _title_ - `document.title`

## Events

- _Load_ - `<body onload = "foo();">`
- _click_ - `<p onclick = "foo();"></p>`
- _change_ - `<input onchange = "foo();">`
- _onmousein/out_

## Event Listener

- _Syntax_ - `el.addEventListener(event, function, useCapture);`
- _Same element - same event - multiple handlers_

```js
  el.addEventListener("click" function(){...});
  el.addEventListener("click" foo2());
  el.addEventListener("click" foo3());
```

- _window_ - `window.addEventListener("resize", foo())`
- _remove_ - `el.removeEventListener(event, foo)`
- **Propagation**

  - eg: `<div><p>click</p></div>`
  - Which elements `onclick` should trigger ?
  - _Bubbling_ (default) - `<p>`
  - _Capture_ - `<div>`

## Navigation

- **Node - Type**
  - Document
  - Element
  - Text
  - Comment
- **Node - Name**
  - For elements = **Tagname**
  - For text = **Text**
- **Node - Value**
  - For elements = **Undefined**
  - For text = **TextValue**
- **Node Relationships**
  - _Hierarchical_
  - _Root_
  - _Parent_
  - _Child_
  - _Sibling_
- **Alter**
  - _Ex_ - `<p>A text node</p>`
  - _FirstChild_ - `el.firstChild.nodeValue = "foo" ;`
  - _n-child_ - `el.childNodes[0].nodeValue = "foo" ;`
- **Create**

```js
var p = document.createElement("p");
var t = document.createTextNode("A new Text.");
p.appendChild(t);
el.appendChild(p);
```

## BOM - Browser Object Model

```js
window.innerHeight();
window.innerWidth();
window.resizeTo();

window.open();
window.close();

// window.screen
screen.width;
screen.height;
screen.availWidth;
screen.availHeight;

// window.location
location.href;
location.hostname;
location.port;
location.protocol;
location.pathname;
location.assign;

// window.history
history.back();
history.forward();

// pop ups
alert();
confirm("confirm data ?");
prompt("Name", "Umesh");
```
