# DOM - Document Object Model

<vc-img url="https://i.ibb.co/WHTy3Ww/HTML-DOM-Tree.jpg" size="xl" />

- **Nodes**

  - Element
  - Root
  - Child
  - Descendant
  - Parent
  - Sibling
  - Text

## Element Basics

```js
// Create
let books = document.querySelectorAll(".books"); // return array of elements
let parent = document.querySelector("#parent");

// create element
let el = document.createElement("a");

// Text/html
el.textContent = "Go to Google.";
el.innerHTML = `<span>a new element<span> and text too`;
el.createTextNode("A new Text.");

// Attributes
el.getAttribute("id");
el.dataset.foo; //  data-attribute => <div data-foo="dodododo"></div>
el.setAttribute("class", "myClass");
el.className = "myClass";
el.id = "myId";
el.href = "https://google.com";

// Styles
el.style.color = "red";
el.style.backgroundColor = "gray"; // camelCase

// Events
el.onclick = () => {};
el.addEventListener("click", callback);

// append/prepend
parent.appendChild(el);
parent.prependChild(el);
parent.append(el);
parent.prepend(el);

// Remove
parent.removeChild(el); // Remove child
parent.remove(); // Remove self

// insert
parent.insertBefore(el, someElementInParent);
parent.insertBefore(el, someElementInParent.nextSibling); // by selecting nextSibling it will insert after someElementInParent and not before
```

## Document

```js
document.write(el);
document.baseUri;
document.URL;
document.readyState;
document.cookie;
document.domain;
document.body;
document.title;
```

## Event Listener

```js
el.addEventListener(event, callback, useCapture);
// useCapture :
// --- false = Bubbling (is default) [ el -> parent -> grandparent ]
// --- true = Capture [ body -> grandparent -> parent -> el ]

// multiple handlers :
// --- Same element
// --- same event
el.addEventListener("click" callback1);
el.addEventListener("click" callback2);

// remove :
// --- callback is always an external function not anonymous
// --- combination of event & callback must match
// --- Can be removed only if added manually
el.addEventListener("click" callback);
el.removeEventListener("click", callback)

// event object
function myCallback(e) {
  e.preventDefault(); // eg: stops form submit, stop visit to url after click on <a>
  e.stopPropagation(); // stops bubbling/capturing

  console.log(e);
  console.log(e.type); // event type
  console.log(e.target); // element which fired event

  console.log(e.ctrlKey); // eg: if ctrl key was held & clicked
  console.log(e.shiftKey);
}
```

## Navigation

```js
// parent
el.parentNode;
el.parentNode.parentNode;
el.parentNode.style.color = "red";

// child
el.childNodes; // avoid - counts whitespace as text nodes which are irrelevant
el.children; // better - returns html collection

// first/last child
el.firstChild; // avoid
el.firstElementChild; // better
el.lastElementChild;

// siblings
el.nextSibling; // avoid
el.nextElementSibling; // better
el.previousElementSibling; // better
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
