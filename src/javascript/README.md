# Javascript

```html
<!-- In <body> end -->

<script src="path/to/foo.js"></script>

<script>
  // code
</script>

<!-- In <head> -->

<!-- defer - Runs after html is loaded - order is maintained -->
<script defer src="foo.js"></script>
<!-- async - Runs immediately - order is not maintained -->
<script async src="foo.js"></script>

<!-- prefetch/preload - Only to download  &  cache js/css not to run/apply -->
<!-- Advantage  -  No DOM blocking -->
<!-- prefetch -  downloads in idle time by browser (maybe needed in future) -->
<!-- preload  -  downloads asap (needed on same page in future) -->
<link rel="prefetch" href="foo.js" />
<link rel="preload" href="foo.js" />
```

## Console

- [MDN - Console](https://developer.mozilla.org/en-US/docs/Web/API/console)

```js
console.log("hello");
```

## Syntax

```js
"hello", 23 // Literals

// variable
var foo, bar=undefined; // Undefined
var foo=23, foo="undefined" //Defined


foo / _foo / $foo  // Identifiers
Var, VAR is wrong // case-sensitive
+ - / * % // Operators

'foo' + 'bar'  // Expression
myVariable, myFirstFunction() // camelCase
"hello" + name; // Concatenate
```

## Operators

```js
// Arithmatic
// -----------
+  -  *  /  %
--  ++ // Increament/Decrement

// Assignment
// -----------
=  -=  +=
a += b
a = a + b

// Tyoeof
// -----------
typeof foo // typeof
b instanceof Bar // instanceof of Class Bar

// Comparison
// -----------
==  != // (value)
===  !== // (value & type)
<   >   <=   >=
(cond) ? true : false // Ternary

// Logical
// -----------
&& // And
|| // Or
! // Not

// Bitwise
// -----------
& // And
| // Or
~ // Not
^ // Xor
<<   >> // Shift left/right
```

## Arithmatics Precedence

[MDN - Operator_Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table)

| Precedence | Operator                                | Info                                   |
| ---------- | --------------------------------------- | -------------------------------------- |
| 20         | `( )`                                   | `(a + b)`                              |
| 19         | `.`</br>`[ ]`</br>`( )`                 | `a.foo` </br> `a['foo']` </br> `Foo()` |
| 18         | `new`                                   | `new Foo()`                            |
| 17         | `++` / `--`                             | `++foo` ( PostFix )                    |
| 16         | `++` / `--`                             | `foo++` ( PreFix )                     |
| 15         | `**`                                    | `10**2 = 100` ( **ES7** )              |
| 14         | `* / %`                                 |                                        |
| 13         | `+ -`                                   |                                        |
| 12         | `<< >>`                                 |                                        |
| 11         | `<= >= < >` </br>`in` </br>`instanceof` |                                        |
| 10         | `== === != !==`                         |                                        |
| 9 - 4      | `& ^ |` </br> `&& || ?:`                | Bitwise </br> Logical                  |
| 3          | `= += -=`                               | Assignment                             |

## Datatypes

1. **Primitive** : `string / boolean / number / undefined`
2. **Complex** : `Object / Function`

```js
// -------- Use typeof ---------

// String
""
"foo"

// Number
23  2.3  2e3=2000
foo = 100/"one" // NaN
Infinity

// BigInt
100n
548884565654n

// Boolean
true  false  1  0

// Object
{ x:5 }
[2, 4] // Array
null //  Null

// Undefined
var foo;
var foo = undefined

// Function
function name(params) {}
() => {};
```

## Events

- Events are fired by **Browser** or **User**
- Ex:
  - `onclick onchange onmouseover onmouseout onkeydown onload`
  - `<button onclick="foo()"></button>`

## String

- _Define_ - `var foo = "hello";`
- _Length_ - `foo.length`
- _Escape_ - `"I'm \"foo\". I teach 'bar'."`
  - `\' \" \\`
  - newline - `\n`
  - tab - `\t`
  - backspace - `\b`

### Template

```js
// old way
var = "<div>Hello " + name + "</div>";

// new way
var = `
 <div>
  Hello ${name}
 </div>
 `;
```

### Methods

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
```

### String Api

- **startsWith() / endsWith() / includes() / repeat()**

```js
(foo.indexOf("Blue") == -1 ) // old way
(!foo.include("Blue") // new way
//similarly
s.startsWith("R");
s.endsWith("R");
```

## Numbers

- No `int, float, short, long`
- only 64-bit floating point.
- Good precision over 15-digits

```js
// automatic type conversion
var x = "100",
  y = 10;
x / y; // 10
x * y; // 1000
x - y; // 90
x + y; // "10010"

// **NaN**
var a = 100 / "one";
isNaN(a); // true
```

**Methods**

```js
var n = 9.656;
n.toString(); // To String
n.toFixed(2); // 9.66
n.toFixed(4); // 9.6600
n.toPrecision(2); // 9.7

// **Methods - Variables to Numbers**
Number("10.33"); // 10.33
parseFloat("10.33"); // 10.33
parseInt("10.33"); // 10
```

## Arrays

:::tip Lodash
Use Lodash because it's mostly optimized for fast run time than inbuilt
:::

- Object with keys as numbers - `0, 1, 2 .... n`

```js
var foo = ["foo", "bar"]; // Define
typeof foo; // Object
foo[1]; // get
foo[1] = "bazzz"; // set
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
```

**Sorting :**

```js
a.sort();
a.reverse();

// sort numbers
a.sort(function(x, y) {
  return x - y;
});
```

**Iterations :**

```js
a.forEach(function(value, index, array){...});
// MAP - to modify each value
newArr = a.map(function(value, index, array){...});
// FILTER - to accept/reject values
newArr = a.filter(function(value, index, array){...});
```

## Date Object

- Use backend php **Carbon** library
- Define: `vat d = new Date();`

## Math Object

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

## Boolean

- **FALSE** - `false` , `undefined` , `0` , `-0` , `""` , `null` , `NaN`

### Automatic Type conversion

```js
if("")   // 0
if("foo")  // NaN
if(2 < 12)   //  true
if(2 < "12")   // true
if("2" < "12")   // false "2" is greater "1"
```

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
- `for of` - Iterable properties

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

## Try-Catch-Finally-Throw

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

## Hoisting(only var)

- Move variable to top of script scope
- Only `var` NOT `let/const`
- First _Intialize_ & then _use_. Can _Declare_ anytime
- Only **declarations** are hoisted (not initialization values)

```js
var x; // declaration
x = 23; // intialization (global)
var x = 23; // declaration & initialization (local)

// Example
x = 23;
alert(x);
var x; // x is local now
```

## Strict

- It allows modern js features to be used instead of legacy code
- Modules always use strict automatically. No manual edit needed.

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
  console.log("Inside :", x); // 10
}
console.log("Outside :", x); // 10

// Ex 2
let x = 10;
{
  console.log("Inside :", x); // Error - cannot use before initializing
  let x = 5;
}
```

**Const cannot be reassign as `let` but is mutable.**

```js
let x = 2;
const y = 2;
x = 22; // Allowed
y = 22; // NOT Allowed

// But Mutable
const a = ["hello"];
a = ["world"]; // gives error. Is not assignable.
a.push("world"); // works correctly. Is mutable.
```

### Reference vs Value

```js
// primitives
const PI = 3.145;
PI = 3.15; // Not allowed

// objects
const obj = { foo: 23, bar: 44 };
obj = { foo: 2113, bar: 144 }; // redefine - NOT allowed
obj.foo = 11; // alter
obj.newFoo = 6767; // add

// array
const arr = [23, 44];
arr = [2113, 144]; // redefine - NOT allowed
arr[0] = 11; // alter
arr.push(6767); // add
```

## Comman Mistakes

- Loose comparison

  ```js
  let x = 10;
  let y = "10";
  if(x == y) // true
  if(x === y) // false
  ```

- Float precision

  ```js
  let x = 0.1,
    y = 0.2;
  let z = x + y; // NOT = 0.3
  let z = (x * 10 + y * 10) / 10; // = 0.3
  ```

- Performance - avoid calculating again and again

  ```js
  let l = arr.length;
  for(let i =0 ; i < arr.length; i++){...}    // slow
  for(let i =0 ; i < l; i++){...}   // faster

  // DOM reuse (performance)
  let x = document.getElementById("foo");
  x.innerHTML("...."); // X IS REUSED avoiding repeated DOM access.
  ```

## Prototype

:::tip Use Classes
Better to use Classes. But remember class is just a syntactic sugar for inherent prototype(with some minor differences for better). Class gets converted to prototype. Check babel repl for es2015.
:::

- All objects has hidden prototype property.
- Value = `someObj` or `null`
- `Object` has it's prototype `Object.prototype`. But `Object.prototype` has no prototype ie `null`.

**Access using**

```js
// old get/set method with no issues
obj.__proto__;

// modern way get/set method
Object.getPrototypeOf;
Object.setPrototypeOf;
```

**Ex:**

```js
function Parent() {
  this.add = function() {
    return this.a + this.b;
  };
}
function Child(a, b) {
  this.a = a;
  this.b = b;
}
Child.prototype = new Parent(); // Child constructor is used not object of Child

let co = new Child(2, 5);
alert(co.add()); // 7
```

### for...in

```js
let person = {
  name: "umesh",
};

let teacher = {
  subject: "javascript",
  __proto__: person,
};

console.log(Object.keys(teacher)); // ["subject"]

// shows both own & inherited
for (let prop in teacher) {
  console.log(prop); // subject, name

  if (Object.hasOwnProperty(teacher)) {
    console.log(prop); // subject
  }
}
```

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

```js
//  ES6 functions
const x = (a.b) => {...};
const x = a => {...};

const x = a => "This is single line return.";
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
