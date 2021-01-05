# DOM

**Document Object Model**

<vc-img url="https://i.ibb.co/WHTy3Ww/HTML-DOM-Tree.jpg" size="xl" />

- **Nodes**

  - Element
  - Root
  - Child
  - Descendant
  - Parent
  - Sibling
  - Text

## Document

```js
// Use this for html elements details
console.dir(document.body);

document.documentElement; // root document
document.write(el);
document.baseUri;
document.URL;
document.readyState;
document.cookie;
document.domain;
document.body;
document.title;
```

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
el.attributes; // all attrs;
el.hasAttribute("id");
el.getAttribute("id");
el.setAttribute("class", "myClass");
el.removeAttribute("id");
el.dataset.foo; //  data-attribute => <div data-foo="dodododo"></div>
el.className = "myClass";
el.classList.add("myClass"); // add/remove/toggle/contains
el.id = "myId";
el.href = "https://google.com";

// Styles
el.style.csstext = `color:red; background-color:blue;`; // AVOID - it replaces all styles
el.setAttribute("style", `color:red; background-color:blue;`); // BETTER
el.style.color = "red";
el.style.backgroundColor = "gray"; // camelCase

// Events
el.onclick = () => {};
el.addEventListener("click", callback);

// append/prepend
parent.appendChild(el); // AVOID
parent.prependChild(el);
parent.append(el); // BETTER
parent.prepend(el);

// Remove
parent.removeChild(el); // AVOID - Remove child
parent.remove(); // BETTER - Remove self

// insert siblings
parent.insertBefore(el, someElementInParent); // AVOID
parent.insertBefore(el, someElementInParent.nextSibling); // by selecting nextSibling it will insert after someElementInParent and not before
siblingEl.before(el); // BETTER
siblingEl.after(el);
```

## Loop collection

- Collection is not an array. It's an iterable.
- Use `For..of`
- avoid `For..in`

```js
let elements = document.querySelectorAll(".myclass");

for (const el of elements) {
  // loop thorugh all elements
}
```

## Navigation

```js
let el = document.querySelector("#foo");

// AVOID - returns all nodes like spaces, comments, texts, elements
el.parentNode;
el.childNodes;
el.firstChild;
el.lastChild;
el.previousSibling;
el.nextSibling;

// BETTER - returns only html element/collection
el.parentElement;
el.children;
el.firstElementChild;
el.lastElementChild;
el.nextElementSibling;
el.previousElementSibling;
```

## BOM - Browser Object Model

```js
window.innerWidth(); // scrollbar is added
window.innerHeight();
window.resizeTo();

window.open();
window.close();

// width/height
el.getBoundingClientRect(); // coordinates - relative to window
document.documentElement.clientWidth; // scrollbar is not added
document.documentElement.clientHeight;

// current scroll position
window.pageXOffset;
window.pageYOffset;
window.scrollBy(0, 10); // 10px down (relative to current position)
window.scrollTo(pageX, pageY); // 10px down from top of browser (abolute position in browser)
el.scrollIntoView(top); // top = true/false (true is default) - el is scrolled to top of window (like href="#id")

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

## Event Listener

```js
let options = {
  once: true/false, // true - run only once then remove listener.
  capture: true/false, // capture is rarely used
  passive: true/false, // true - will not call preventDefault()
}
el.addEventListener(event, callback, [options]);
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
el.removeEventListener("click", callback);

// event object
function myCallback(e) {
  e.preventDefault(); // eg: stops default browser actions like form submit, visit to url after click on <a>
  e.defaultPrevented; // true/false - true if preventDefault() is used.
  e.stopPropagation(); // stops bubbling/capturing // Avoid using it. Mostly not needed.
  e.stopImmediatePropagation(); // stops multiple handlers if any for same event

  console.log(e);
  console.log(e.type); // event type
  console.log(e.target); // element which fired event
  console.log(e.target.closest("selector")); // closest element which fired event
  console.log(e.currentTarget); // this = current element (due to bubbling/capture)

  console.log(e.ctrlKey); // eg: if ctrl key was held & clicked
  console.log(e.shiftKey);
}
```

### Custom Events

```js
// Using - new Event()
// ---- Avoid (use uievents or CustomEvent)
options = {
  bubbles:  // default= false,
 cancelable:  // default= false
};
let event = new Event(type, options);
let event = new Event("click", options); // inbuilt event
let event = new Event("myCustomClick", options); // custom event

// Using - new CustomEvent() - (BETTER)
options = {
  bubbles:  ,
  cancelable:  ,
  detail: {...} // can pass any extra info
};
let event = new CustomEvent("myCustomClick", options);

// Dispatch - Fire event
el.dispatchEvent(event); // fire event - eg: as if user clicked el
```

### UIEvents

- [MDN UIEvents](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent)
- Use this instead of `new Event()`
- Use `Pointer` events instead of `mouse/touch`
- Use `e.key` & `e.code` instead of old `keypress, keyCode, charCode, which`
  - key - `A`
  - code - `KeyA` (always same irrespective of languages)

```js
let event = new Event(type, options); // Avoid
let event = new MouseEvent(type, options); // Better since it provides more options related to mouse
let event = new FocusEvent(type, options);

// Ex - Automate a mouse click event
let event = new MouseEvent("click", {
  bubbles: true,
  cancelable: true,
  clientX: 300,
  clientY: 200,
});
```

## DOMContentLoaded

- `DOMContentLoaded` - only DOM tree is ready not pics, styles, etc
- `load` - Everything including pics
- `beforeunload/unload` - leave page

* `el.onload/onerror` - For external resources like pics, styles, iframes etc

### readyState

- `document.readyState` - property not event
  - `loading`
  - `interactive` - DOM is read
  - `complete` - DOM, styles, pics, etc loaded

* `document.readyStateChange` - An event (Avoid - use `DOMContentLoaded`)

## Mutation Observer

- An Object - To Observe an element for changes

```js
let observer = new MutationObserver(callback);
observer.observe(el, options);
options = {
  childList:,
  subTree:,
  attributes:,
  attributeFilter:,
  characterData:
}
```
