<vc-img url="https://i.imgur.com/xLi27XF.png" size="xl" />

# Javascript

- JavaScript/Ecmasript is a standard.
- Ecmasript 2015 (ES6) is currently implemented in all browsers.
- Implementation of standards
  - Google's v8 engine (written in C++)
- Node uses v8 & adds extra stuffs like filesystem, http, etc
- Npm, Yarn are package managers to fetch 3rd party js library.
- JavaScript Core is related to v8 engine.
- But JavaScript DOM is related to browsers.
- This is why we have JavaScript Core in Node but not Javascript DOM.

:::tip

**"use strict"**

- Always "use strict". Helps understand, optimize & avoid old JavaScript pitfalls.
- Modules always use strict automatically.

**Object.getOwnPropertyNames(obj)**

- One of the most useful property. Lists both enumerable & non-enumerable properties for obj.
- This will help know if something is own property or inherited.
- Try - `Object.getOwnPropertyNames(this)` this is window object gave me 963 properties of browser.

:::

## `<script>`

#### In `<body>`

```html
<!-- at the end of <body> -->
<script src="path/to/foo.js"></script>
```

#### In `<head>`

```html
<!-- defer/async - Download & Run -->
<!-- defer - Run after html is loaded - order is maintained -->
<script defer src="..."></script>
<!-- async - Runs immediately - order is not maintained -->
<script async src="..."></script>
```

#### Examples

```html
<!-- crossorigin - if using cdn  -->
<script crossorigin src="..."></script>

<script
  crossorigin
  src="https://unpkg.com/react@17/umd/react.production.min.js"
></script>
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
  crossorigin="anonymous"
></script>
```

#### `<link>`

```html
<!-- prefetch/preload - Download & Cache -->
<!-- Both js/css -->
<!-- Advantage  -  No DOM blocking -->
<!-- prefetch -  downloads in idle time by browser (maybe needed in future) -->
<!-- preload  -  downloads asap (needed on same page in future) -->
<link rel="prefetch" href="..." />
<link rel="preload" href="..." />
```

## Basics

#### Console

```js
console.clear(); // clear history
let c = (...s) => console.log(...s); // shortcut

c("hello", "world"); // hello world
c(3, 2); // 3 2
```

#### Syntax

```js
"hello", 23; // Literals
"foo" + "bar"; // Expression

let foo, _foo, $foo; // Identifiers
let foo, Foo; // case-sensitive
let fooBar; // camelCase
let foo; // declaration
foo = 23; // assignment
let foo = 23; // declare & assignment

c(2 == "2"); // true - Loose comparison - NEVER USE
a(2 === "2"); // false - Strict comparison
```

## Data-Type

1. **Primitive** - Immutable value.
2. **Non-primitive** - Mutable value.

```js
// Primitive
typeof undefined; // undefined
typeof null; // object (historical bug in js)
typeof true; // boolean
typeof "hello"; // string
typeof 23; // number
typeof BigInt(4566); // bigint
typeof Symbol("id"); // symbol

// Non Primitives
typeof {}; // object
typeof []; // object (array is object)
typeof (() => {}); // function (all functions are objects. But all objects are not functions.)
```

:::tip Everthing is Object in JSEngine (runtime)

**Primitive** - JavaScript takes primitive syntax and creates wrapper object over it's value.

It's like "6/9" depends on your perspective.

But yes syntax is not objects. It's a way of creating object description & behaviour. `{ }, [ ], for, if, etc`

Ex:

- We can use `"hello".toUpperCase()`
- JavaScript wraps `"hello"` temporarily as `new String("hello")` object. Work on it. Destroy on completion.
- It will be - `{ 0: "h", 1: "e", 2: "l", 3: "l", 4: "o", length: 5, __proto__: String }`
- Primitive is Immutable - `"hello"` & `"HELLO"` are different values.

:::

Ex:

```js
// Js internally creates a wrapper object around primitives datatypes
// This wrapper obj is temp and discarded later.
"use strict";
let s = "hi"; // wrapper obj will be created by javascript just before runtime (obj is read-only for user)
let so = new String("hi"); // obj created by user (obj is read/write for user)

// compare
c(s, so); // hi --- String {"hi"}
c(s == so); // true - value is same
c(s === so); // false - string & object
c(s[1] == so[1]); // true - "i"

// mutation (create new property)
s[5] = "abc"; // Error - Cannot create property '5' on string 'hi'
so[5] = "abc"; // works (user has read/write access.)

// mutation (existing property)
s[1] = "abc"; // Error - Cannot assign to read only property '1' of string 'hi'
so[1] = "abc"; // Error - Cannot assign to read only property '1' of object '[object String]'

// Conclusion
// ---- Javascript is owner of wrapper obj for "s" & user can only read. This is as expected.
// ---- But, User is the owner of object "so" with read/write access.
// ---- Then why one prop is writable and other not writable ?
so[1] = "abc"; // error. why? - Because this prop is created by Javascript using String() constructor.
so[5] = "abc"; // works. Why? - Because this prop is created by User directly.

// Hidden Property Flags - Reason for above Conclusion
// ---- User created property always has all 3 flags = true
c(Object.getOwnPropertyDescriptor(so, "1")); // {value: "i", writable: false, enumerable: true, configurable: false}
c(Object.getOwnPropertyDescriptor(so, "5")); // {value: "abc", writable: true, enumerable: true, configurable: true}

// What about functions ?
// ---- They are objects too. They have property access using dot notation.
c(String.prototype); // works
c(Symbol.prototype); // works
c(Object.prototype); // works
c(Function.prototype); // works

// Weird.....but correct
c(myObject instanceof MyConstructor); // meaning - MyConstructor.prototype must be somewhere in the __proto__ chain of myObject
c(Function instanceof Object); // true - // Object.prototype is present in the __proto__ chain of Function - (Object.prototype === Function.__proto__.__proto__)
c(Object instanceof Function); // true - // Function.prototype is present in the __proto__ chain of Object - (Function.prototype === Object.__proto__)

// Root Object in Javascript
c(Object.prototype); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
c(Object.prototype.__proto__); // null
```

:::danger Deep Rabbit Hole - It never ends.
**Focus on using JavaScript Engine.** Not much on how it works underhood. Just basics is enough.

It's like driving a car. Not creating a one.

:::

## Data-Values

```js
// Value is same
c(undefined === undefined); // true
c(null === null); // true
c(true === true); // true
c(2 === 2); // true
c("hi" === "hi"); // true
c(BigInt(2) === BigInt(2)); // true

// Value is not same.
c(Symbol("id") === Symbol("id")); // false
c((() => {}) === (() => {})); // false
c({} === {}); // false

// weird numbers
c(NaN === NaN); // false (anything comapred to NaN is always false)
c(0 === -0); // true
```

## Operator & Precedence

### Operators

[MDN Ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

```js
// Chaining operator
o.prop   // dot
o["my-prop"]
o.prop?.name  // optional chain property
o.method?.() // optional chain method

// assignment
=  -=  +=
[a, b] = [1, 2]  // array destructuring
{a, b} = {a:1, b:2} // object destructuring

// Arithmatic
+  -  *  /  %  **  --  ++

typeof foo // typeof
obj instanceof Foo // instanceof Class
delete obj.prop //// delete property of object

// Comparison
==  != // Loose (value) [never use]
===  !== // Strict (value & type)
<  >  <=  >=
(cond) ? true : false // Ternary operator
??  // nullish coalescing (nullish means null or undefined)

// Logical
&&  ||  !  // And Or Not

// Bitwise (rarely used)
&  |  ~  ^  // And Or Not Xor
<<   >> // Shift left/right
```

### Precedence

[MDN - Operator_Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table)

| Precedence | Operator                                | Info                                   |
| ---------- | --------------------------------------- | -------------------------------------- |
| 20         | `( )`                                   | `(a + b)`                              |
| 19         | `.`</br>`[ ]`</br>`( )`                 | `a.foo` </br> `a['foo']` </br> `Foo()` |
| 18         | `new`                                   | `new Foo()`                            |
| 17         | `++` / `--`                             | `++foo`                                |
| 16         | `++` / `--`                             | `foo++`                                |
| 15         | `**`                                    | `10**2 = 100` ( **ES7** )              |
| 14         | `* / %`                                 |                                        |
| 13         | `+ -`                                   |                                        |
| 12         | `<< >>`                                 |                                        |
| 11         | `<= >= < >` </br>`in` </br>`instanceof` |                                        |
| 10         | `== === != !==`                         |                                        |
| 9 - 4      | `& ^ |` </br> `&& || ?:`                | Bitwise </br> Logical                  |
| 3          | `= += -=`                               | Assignment                             |

## Events

- Events are fired by **Browser** or **User**
- Ex:
  - `onclick onchange onmouseover onmouseout onkeydown onload`
  - `<button onclick="foo()"></button>`

```js
// Maynot need this in frameworks
document.addEventListener("click", callback);
```

## Automatic Type conversion

- Sometimes, JavaScript will automatically convert the data-type.

```js
false , undefined , 0 , -0 , "" , null , NaN // always false

// To number
if("foo")  // NaN
if(2 < "12")   // true
c(3 - '2') // 1

// to string
c(3 + '2') // 32 (concat not add)

// This is not automatic type conversion. Both are strings.
if("2" < "12")   // false -- "2" is greater than "1"
```

## Let/Const & Scope

- **`let` and `const` are block level only ie inside curly braces `{ .... }`**

### Scope

```js
// Local
// ----------
function foo() {
  let x;
  // use x
}

// Global
// ----------
let x;
function foo() {
  // use x
  let y;
}
// use x
// NO y
```

**Global vs Local**

```js
// Ex 1
let x = 10;
{
  c("Inside :", x); // Inside : 10
}
c("Outside :", x); // Outside : 10

// Ex 2
let x = 10;
{
  c("Inside :", x); // Error - cannot use before initializing
  let x = 5;
}
```

**`Const` vs `let`**

```js
// declaration
let x;
const y; // error

// declare & assignment
let x = 3;
const y = 3;

// reassignment
x = 33;
y = 33; // error

// objects are mutable even though they are const
const obj = { x: 3 };
obj = { x: 33 }; // error
obj.x = 33; // mutable
```

**Performance Tip**

```js
// store in variable - Avoid repeat access/calculations
let x = document.getElementById("foo");
x.innerHTML("....");
```

## Hoisting

- Move variable to top of it's scope
- Only `var` NOT `let/const`
- First _Intialize_ & then _use_. Can _Declare_ anytime
- Only **declarations** are hoisted (not initialization values)

```js
// 'var' is hoisted
x = 23;
c(x);
var x; // x is local now

// functions are hoisted
c(Foo()); // 3
function Foo() {
  return 3;
}

// let/const are not hoisted
c(Foo()); // error
let f = function Foo() {
  return 3;
};
```

## String

```js
let s = "Hello";

// Template string
let s = `
 <div>
  Hello ${anyVariable}
 </div>
 `;
```

#### Methods

[MDN Ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

```js
// returns index "number" or "-1" if not found
s.indexOf("foo", startPosition);
s.lastIndexOf("foo");

// same as indexOf() but no startPosition
s.search("foo");
s.search(regularExpression);

// returns new string
s.slice(start, end); // -ve is allowed
s.slice(start); // rest of the string

// similar to slice()
s.substring(start, end); // -ve is not allowed
s.substring(start);

// similar to slice()
s.substr(start, length); // -ve is allowed

// return new string
s.replace("foo", "newFoo"); // only 1st match is replaced NOT ALL
s.replace(regularExpression, "newFoo");

// returns new string
s.toUpperCase();
s.toLowerCase();

// removes whitespaces on both sides
s.trim();

// returns character
s.charAt(index);

// returns Array
var s = "a,b,c";
s.split(","); // ["a", "b", "c"]

// New ones
s.include("R");
s.startsWith("R");
s.endsWith("R");
```

## Numbers

- No `int, float, short, long`
- only 64-bit floating point.

```js
// automatic type conversion
var x = "100",
  y = 10;
x / y; // 10
x * y; // 1000
x - y; // 90
x + y; // "10010" - concat string

// **NaN**
var a = 100 / "one";
isNaN(a); // true
```

**Methods**

[MDN Ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

```js
var n = 9.656;
n.toString(); // To String
n.toFixed(2); // 9.66
n.toFixed(4); // 9.6600
n.toPrecision(2); // 9.7

parseFloat("10.33"); // 10.33 (string to float)
parseInt(10.33); // 10 (float to int)
```

:::danger Precision Error
Good precision over 15-digits

```js
c(0.1 + 0.2); // 0.30000000000000004 (17th digit)
```

:::

### Math Object

```js
Math.PI();
Math.random(); // between 0 - 1

Math.round(4.7); // 5
Math.round(4.3); // 4
Math.round(4.5); // 5

Math.pow(8, 2); // 64
Math.sqrt(64); // 8

Math.abs(-4); // 4
Math.ceil(4.4); // 5
Math.floor(4.7); // 4

Math.min(5, 4, 8, 12, 35, 45); // 4
Math.max(5, 4, 8, 12, 35, 45); // 45
```

## Arrays

:::tip Lodash

- Use Lodash because it's mostly optimized for fast run time than inbuilt.
- Can use `Set()` too.
  :::

```js
typeof []; // Object
foo[1]; // get
foo[1] = "baz"; // set
```

**Props & Methods :**

- [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

```js
// To String
// a = ["a", "b"];
a.toString(); // a, b
a.join("*"); // a*b

// length
a.length;

// add/remove
a.pop(); // remove last
a.push("c"); // add at last
a.shift(); // remove first
a.unshift("c"); // add at first
a[a.length] = "c"; // add at last

// Alter
a.splice(start, itemsToRemove, "add-1", "add-2");
a.splice(0, 1); // removes 1st
a.splice(3, 0, "newfoo", "newBar"); // adds without removing at position 3

// get index of first matched
a.indexOf("foo");
a.lastIndexOf("foo");

// sort
c([2, 3, 1].sort()); // [1,2,3] (can use callback too)
c([2, 3, 1].reverse()); //[1,3,2]

// Iterations :
a.forEach(function(value, index, array){...});
a.map(function(value, index, array){...}); // MAP - to modify each value
a.filter(function(value, index, array){...}); // FILTER - to accept/reject values
```

## Date Object

- Use 3rd party library.

## Condition / Loop

### If / Switch

```js
if(cond) {......}

switch(n){
  case a:
    // code
    break;

  case b:
    // code
    break;

  case x:
  case y:
    // code
    break;

  default:
    // code
}

```

### For-in vs For-of

- `for in` - Enumerable properties
  - Use `Object.hasOwnProperty()` to avoid inherited props/methods
- `for of` - Iterable properties
  - Built-in iterables - `String, Array, TypedArray, Map, Set, arguments`

```js
// Normal loop
for (var i = 0; i < 5; i++) {}

// For Object
// -------------
let foo = {
  x: 3,
  y: 6,
};

for (v in foo) {
  console.log(v); // x / y
}
for (v of foo) {
  console.log(v); // error not iterable
}

// For Array
// -------------
let foo = [3, 5];

for (v in foo) {
  console.log(v); // 0 / 1
}
for (v of foo) {
  console.log(v); // 3 / 5
}
```

### while / do while

```js
while (cond) {}
do {} while (cond);

break; // stops loop
continue; // stops 1 iteration in loop
```

## Try / Catch / Finally / Throw

```js
try {
  if( x=="" ) { throw "x is empty"; }
  if( x < 5 ) { throw "Too low value"; }
  if( isNaN(x) ) { throw "Not a number"; }
} catch (err) {
  // err.name
  // err.message
  console.log(err);
}finally{...}


Example :
// Range  error
// Reference error
// Syntax error
// Type error

```

## Prototype

- Everything is object. Check [#data-type](#data-type).
  - This includes `constructors, instances`
- All objects has a prototype.
- What is prototype ? Just another object.

```js
let anotherObj = {};
let obj = {
  __proto__: anotherObj,
};
```

- `[[Prototype]]` is internal property & the real **prototype chain**.
- `__proto__` - Get/Set `[[Prototype]]` (_WE WILL REFER AS `__proto__` ONLY_)
- `prototype` has nothing to do with prototype chain it's just normal object.

* Both `constructor` & `instance` are objects too. (constructor & function are synonymns)
* Only difference is object who's prototype is `f () { [native code] }` is a constructor.

:::tip From creator of React (Dan Abramov)

- He don't use classes a lot.
- And rarely use prototype directly.

:::

- **Constructor** has
  - `__proto__`
  - `prototype`
- **Instances** has

  - `__proto__` - refs to it's Parent Constructor's `prototype`

- **Internal Property**
  - `[[Prototype]]` [inherited props]
    - Value can be `someObj` or `null`
- **External Property**
  - `__proto__`
    - Get/Set for `[[Prototype]]`
    - Created by browsers. Not js Standard.
    - _Who has this ?_ - `Constructors` & `instances`
  - `prototype` [it's own props]
    - _Who has this ?_ - `Constructors`

* Since Everthing is object, a CHILD & PARENT are also objects internally.

Let's ca

**Object's properties**

- `Object.create()` - only to set modern (2012)

  - `Object.getPrototypeOf` & `Object.setPrototypeOf` is modern way to get/set.

1. `prototype` - Property of Constructor only.(A **.template** can be a better word.)
   - All instances can access this data (unless overriding)
   - - `{constructor: Foo(), __proto__: Object}`

**Access using**

```js
// old get/set method for foo.prototype (with no issues)
obj.__proto__;

// Modern way (best way) refer MDN
Object.create();

// modern way get/set method
Object.getPrototypeOf;
Object.setPrototypeOf;

// -----------------------------------

c(String.prototype); // String {"", constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}
c(Symbol.prototype); // Symbol {Symbol(Symbol.toStringTag): "Symbol", constructor: ƒ, toString: ƒ, valueOf: ƒ, …}
c(Number.prototype); // Number {0, constructor: ƒ, toExponential: ƒ, toFixed: ƒ, toPrecision: ƒ, …}
c(BigInt.prototype); // BigInt {Symbol(Symbol.toStringTag): "BigInt", constructor: ƒ, toLocaleString: ƒ, toString: ƒ, valueOf: ƒ}
```

**Create obj with prototype is nothing but [/oop/#inheritance](/oop/#inheritance)**

## Functions

### Basics

- Hoisting is allowed.
- Num of args - `arguments[i]` - Not in arrow functions - _(Use rest/spread operator)_
- **Types of invoking (calling)**
  1. _Normal invoke_
  2. _Event invoke_
  3. _Self invoke_

```js
function foo(a, b) {
  console.log(arguments.length); // 2
  for (a of arguments) {
    console.log(a); // 4 / 5
  }
}
foo(4, 5);
```

**Create**

```js
// way 1 - named
function foo(){...};

// way 2 - anonymous
let foo = function(){...};

// way 3 - self-invoking
(function(){...})();
```

### Arrow Functions

- No access to `this, arguments, super, new.target`

```js
//  ES6 functions
const x = (a.b) => {...};
const x = a => {...};

const x = a => "This is single line return.";
```

### Default value

```js
// b has a default value
function foo(a, b = 23) {
  //code
}
```

## Closures

- A function which returns a function.
- Solves counter dilemma.

**Example 1 :**

```js
let add = (function() {
  let c = 0; // c is private member
  return () => {
    return (c += 1);
  };
})();

console.log(add()); // 1
console.log(add()); // 2
```

**Example 2 :**

```js
function multiplier(m) {
  return (n) => {
    return n * m;
  };
}
let twice = multiplier(2);
let thrice = multiplier(3);
console.log(twice(5)); // 10
console.log(thrice(5)); // 15
```

## Recursion

- Function code calls itself.
- Recusion is **SLOWER** than **For loop**

```js
function power(n, pow) {
  if (pow == 0) return 1;
  return n * power(n, pow - 1);
}
power(2, 3); // 8
```

## Modules - Import/Export

- Modules always `use-strict` automatically
- Always use bundler like Webpack & not directly in browser.

### In Browser

- Can run in browser but the convention is to use Webpack to bundle all modules into one(or few) js files.
- **Defer** - Module Scripts are always deferred.

```html
<!-- use localhost -->
<script type="module">
  // console.log(this); // this is always undefined
</script>

<script type="module" src="foo.js"></script>
```

### Multiple Imports

- If same file is imported in different files then it's imported & evaluated only once. Then same copy is given to other files.
- It helps in initial configuration

```js
// common.js
export let common = { name: "umesh" };

// import1.js
import { common } from "./common.js";
console.log("From import-1:", common.name);
common.name = "newName";

// import2.js
import { common } from "./common.js";
console.log("From import-2:", common.name); // newName

// index.js
import "./import1";
import "./import2";
```

### Official Standard

```js
// Foo.js
export let bar = () => {};
export { bar as barrr };

// Main.js
import { bar } from "./Foo.js"; // only bar - name must be same  // helps in tree-shaking
import { bar as barrr } from "./Foo.js"; // just rename
import * as Foo from "./Foo.js"; // all
Foo.bar();

// default (only one per file)
export default class Foo {....}; // classname Foo is optional
import Bar from "./Foo"; // directly without {..}
```

### CommonJs

- Used for Nodejs but now it's old.

```js
// FooJs.js
function A(){......};
function B(){......};
module.exports = {
  A,
  B
}

// main.js
const foo = require("./FooJs");
foo.A();
foo.B();
```

## Rest and Spread operators

- Both rest & spread uses same syntax - three dots `...`

```js
// Rest : args -> array
// -----------------------
function foo(p1, ...params) {
  console.log(params); // an array - [3, 5, 8]
}
foo(2, 3, 5, 8);

// Spread : array -> args
// -----------------------
let params = [2, 3, 5, 8];
console.log(1, ...params); // list of args - 1 2 3 5 8

//NOTE - must be last argument
function foo(...numbers, x); // wrong
function foo(x, y, ...numbers); // right
```

**ES2018 - For Objects**

```js
let foo = { x: 2 };
let bar = { ...foo, y: 3 }; // { x:2, y: 3 }
```

## Map/Set

### Map

- `Map` is iterable while `Object` is not.
- `hasOwnProperty` is not needed since native & prototype properties don't showup on iteration
- A Hashtable.
- Keys in
  - `Object` - strings or symbols
  - `Map` - can be anything
- Use `Map` if
  - key/value pairs are of same type.
  - keys are unknown but added in runtime

```js
let m = new Map();
m.set(key, value);
m.get(key);
m.has(key);
m.delete(key);
m.clear();
m.size;

for ([key, value] of m) {
  // Insertion order is maintained
}
```

:::tip Map vs Object

**Maps are usually faster than Object**

**Use Object if --> Keys are strings only + Write is less + Read is more. Else Use `Map`.** - [stackoverflow](https://stackoverflow.com/a/49164774)

:::

### Set

- Values in
  - `Array` - not unique
  - `Set` - unique(no duplicate) with not index
- Use `Set` if
  - Search/add/delete are faster than array [stackoverflow](https://stackoverflow.com/a/46190569)
  - no duplicates

```js
let s = new Set();
s.add(value);
s.has(value);
s.delete(value);
s.clear();
s.size;

for (value of s) {
  // Insertion order is maintained
}

// array --> set
new Set([2, 3, 3, 4]); // [2,3,4] - unique values
```
