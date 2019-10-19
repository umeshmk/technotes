# Js - DOM

- _Document Object Model_
- All html elements are objects of **DOM tree**
- **Access**
  - All Html elements
  - Create/handle events
  - Style elements
  - Attributes
- **Get**

  - _id_ - `document.getElementById("foo");`
  - _class_ - `document.getElementsByClassName("foo");`
  - _tag_ - `document.getElementsByTagName("span");`
  - _query_ - `document.querySelectorAll("div.foo");`
  - NOTE - _Collection object_:

  ```js
  var allFooElements = document.getElementsByClassName("foo");
  allFooElements[5]; // A COLLECTION Object NOT ARRAY
  allFooElements.length;
  allFooElements.pop; // NOT Allowed
  ```

- **Set (elements)**
  - _html_ - `el.innerHTML("....")`
  - _attribute_ - `el.attribute("href") = "http://google.com"`
  - _attribute_ - `el.setAttribute("href" , "http://google.com")`
  - _style_ - `el.style.property = "value"`
  - _Event_ - `el.onclick = foo()`
- **Set (DOM)**
  - _create_ - `document.createElement(el)`
  - _remove_ - `document.removeChild(el)`
  - _append_ - `document.appendChild(el)`
  - _replace_ - `document.replaceChild(el)`
  - _write_ - `document.write(el)`
- **Document**
  - _baseUri_ - `document.baseUri`
  - _url_ - `document.url`
  - _readyState_ - `document.readyState`
  - _cookie_ - `document.cookie`
  - _domain_ - `document.domain`
  - _body_ - `document.body`
  - _title_ - `document.title`

### # DOM - Events

- _Load_ - `<body onload = "foo();">`
- _click_ - `<p onclick = "foo();"></p>`
- _change_ - `<input onchange = "foo();">`
- _onmousein/out_

### # DOM - Event Listener

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

### # DOM - Navigation

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

### # BOM - Browser Object Model

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
