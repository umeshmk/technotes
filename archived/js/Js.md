# Javascript

- Ecmascript 2015 = ES6
- Practice on `JsFiddle`
- Resource - https://javascript.info/
- Detailed Book - http://eloquentjavascript.net/index.html
- Detailed Book - https://exploringjs.com/es6/index.html

```html
<script src="path/to/foo.js"></script>
```

### # Output

```js
// alert
window.alert("hello");

// innerhtml
el.innerHTML("<p>hello</p>");

// console
console.log("hello");

//document
document.write("hello");
```

### # Statement

- Starts with **keywords** like - `var, return, function, for, if....etc`

```js
var x, y, z;
var foo = "hello";
z = x + y;
```

### # Syntax

| Syntax             |                                                                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| **Literals**       | `"hello", 23`                                                                                                                  |
| **Variable**       | Undefined : `var foo;` &nbsp; / &nbsp; `var bar=undefined;` </br> Defined: `var foo=23;` &nbsp; / &nbsp; `var foo="undefined"` |
| **Identifiers**    | `foo / _foo / $foo (3foo is wrong)`                                                                                            |
| **case-sensitive** | `Var, VAR is wrong` ( only `var` )                                                                                             |
| **Operators**      | `+ - / * %`                                                                                                                    |
| **Comments**       | `// hello`                                                                                                                     |
| **Expression**     | `'foo' + 'bar'`                                                                                                                |
| **cameCase**       | `myVariable` </br> `myFirstFunction()`                                                                                         |
| **Concatenate**    | `"hello" + name`                                                                                                               |

### # Operators

| Arithmatic                                       | Assignment                                        | Tyoeof                                            |
| ------------------------------------------------ | ------------------------------------------------- | ------------------------------------------------- |
| `+ - * / %` </br> Increament/Decrement : `-- ++` | `= -= +=` </br> Equals : `a += n` --> `a = a + b` | typeof : `typeof` </br> instanceof : `instanceof` |

> Comparison

- Equals/Not To (value): `==` / `!=`
- Equals/Not To (value & type) : `===` / `!==`
- Greater/Lesser than : `<`/`>`
- Greater/Lesser Or Equal To than : `<=` / `>=`
- Ternary : `(cond) ? true : false`

> Logical

- And : `&&`
- Or : `||`
- Not : `!`

> Bitwise

- And : `&`
- Or : `|`
- Not : `~`
- Xor : `^`
- Shift left/right : `<<` / `>>`

### # Arithmatics Precedence

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
| 9 - 4      | `& ^ | ....` </br> `&& || ?:....`       | Bitwise </br> Logical                  |
| 3          | `= += -= ....`                          | Assignment                             |

### # Datatypes

1. **Primitive** : `string / boolean / number / undefined`
2. **Complex** : `Object / Function`

| Datatypes                   |                                             |
| --------------------------- | ------------------------------------------- |
| String                      | `"foo" / "I'm bar"`                         |
| Number                      | `23 / 2.3 / 2e3=2000`                       |
| Boolean                     | `true/false` </br> `1/0` </br> `foo == bar` |
| Object                      | `{ name:"bar", age:23 }`                    |
| Array ( _Object_ )          | `[2,3,4]` / `["foo", "bar"]`                |
| Undefined ( _Undefined_ )   | `var foo;` </br> `var foo = undefined`      |
| Empty ( _String_ )          | `""`                                        |
| Null ( _Object_ ) [ Bug ? ] |                                             |
| NaN ( Number )              | `foo = 100/"one"`                           |

| Compare                                        | Result               |
| ---------------------------------------------- | -------------------- |
| `null == undefined` </br> `null === undefined` | `true` </br> `false` |
|                                                |                      |

### # Functions

- **Invoke** means calling a function.
- _Types of invoking_
  1. Normal invoke
  2. Event invoke
  3. Self invoke
- Syntax :
  - Define : `function foo (parameters...) {...}`
  - Invoke : `foo (arguments...);`

### # Objects

- **Define**

  ```js
  var foo = {
    a: 2,
    b: 3,
    add: function() {
      return this.a + this.b;
    }
  };
  ```

- **Access**;

  ```js
  foo.a;
  foo[a];
  foo.add();

  // Never do this
  var a = new String();
  var a = new Number();
  var a = new Boolean();
  ```

### # Events

- Events are fired by **Browser** or **User**
- Ex:
  - `onclick onchange onmouseover onmouseout onkeydown onload`
  - `<button onclick="foo()"></button>`

### # String

- _Define_ - `var foo = "hello";`
- _Length_ - `foo.length`
- _Escape_ - `"I'm \"foo\". I teach 'bar'."`
  - `\' \" \\`
  - newline - `\n`
  - tab - `\t`
  - backspace - `\b`
- _Multiline_

  ```json
  var foo = 'I\'m "foo".' + " I teach 'bar'.";
  var foo =
    "I'm \
    foo.\
    I teach bar.";
  //backticks
  var foo = `
  "I'm "foo".
  This is a variable ${foo}
  I teach 'bar'."
  `;
  ```

- **Methods**

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

# Numbers

- No _int, float, short, long_
- only 64-bit floating point.
- Good precision over 15-digits
- Ex:
  ```js
  var x = "100",
    y = 10;
  x / y; // 10
  x * y; // 1000
  x - y; // 90
  x + y; // "10010"
  ```
- **NaN**
  ```js
  var a = 100 / "one";
  isNaN(a); // true
  ```
- **Methods**

  ```js
  // To String
  n.toString();

  var n = 9.656;

  n.toFixed(2); // 9.66
  n.toFixed(4); // 9.6600
  n.toPrecision(2); // 9.7
  ```

- **Methods - Variables to Numbers**

  ```js
  Number("10.33"); // 10.33
  parseFloat("10.33"); // 10.33
  parseInt("10.33"); // 10
  ```

# Arrays

- Object with keys as numbers - `0, 1, 2 .... n`
- Define : `var foo = ["foo", "bar"];`
- Access : `foo[1]`
- Alter : `foo[1] = "bazzz"`
- Props & Methods :

  ```js
  a.length;

  // To String
  // a = ["a", "b"];
  a.toString(); // a, b
  a.join("*"); // a*b

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

- Sorting :

  ```js
  a.sort();
  a.reverse();

  // sort numbers
  a.sort(function(x, y) {
    return x - y;
  });
  ```

- Iterations
  ```js
  a.forEach(function(value, index, array){...});
  // MAP - to modify each value
  newArr = a.map(function(value, index, array){...});
  // FILTER - to accept/reject values
  newArr = a.filter(function(value, index, array){...});
  ```

### # Date Object

- Use backend php **Carbon** library
- Define: `vat d = new Date();`

### # Math Object

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

### Boolean

- **FALSE** - `false` , `undefined` , `0` , `-0` , `""` , `null` , `NaN`

### # Comparison & Logical Operators

- String to Numbers

```js
if("")   // 0
if("foo")  // NaN
if(2 < 12)   //  true
if(2 < "12")   // true
if("2" < "12")   // false "2" is greater "1"
```

### # Condition / Loop

- _If / Switch_

  ```js
  if(cond) {......}

  switch(n){
    case a:
      // code
      break;

    case b:
      // code
      break;

    case c:
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

- _For / For in / while / do while_

  ```js
  for(var i = 0; i <5 ; i++>) { ......}

  for(value in arr){......}     // Never ever use  this

  while(cond) {......}
  do{......}while(cond) {......}

  break;          // stops loop
  continue;       // stops 1 iteration in loop
  ```

### # Try-Catch

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

### # Scope

- Local

  ```js
  function foo() {
    var x;
    // use x
  }
  ```

- Global

  ```js
  var x;
  function foo() {
    // use x
    var y;
  }
  // use x
  // NO y
  ```

- Automatically Global - without `var` keyword

  ```js
  function foo() {
    x = 32;
    // use x
    // var x;     // x is local if redeclared
  }
  // use x
  ```

### # Hoisting

- Move variable to top o script scope
- First _Intialize_ & then _use_. Can _Declare_ anytime
- Only `var` NOT `let` or `const`
- Only **declarations** are hoisted

  ```js
  var x; // declaration
  x = 23; // intialization (global)
  var x = 23; // initialization (local)
  ```

- Example

  ```js
  x = 23;
  alert(x);
  var x; // x is local now
  ```

### # Strict

- AVOID it. Not much useful.

### # This

- Based on location where it is used

- **Alone**

  ```js
  var foo = this; // this = window object
  ```

- **In Function**

  ```js
  function foo() {
    return this; // owner of function ie 'Window'
  }
  ```

- **In method**

  ```js
  var p = {
    foo: 23,
    bar: function() {
      return this; // this = owner of function = p object
    },
    barArrow: () => {
      return this; // this = window object
    }
  };
  ```

- **In Event handlers**

  ```html
  // this = [object HTMLButtonElement]
  <button onclick="alert(this);">
    click
  </button>
  ```

### # Let

- **Block scope**
  ```js
  var x = 10;
  {
    let x = 5;
  }
  alert(x); // 10
  ```

### # Const

- Block scope as `let`
- Cannot reassign as `let`
  ```js
  let x = 2;
  x = 22; // Allowed
  const y = 2;
  y = 22; // NOT Allowed
  ```
- **Reference** and NOT **value**

  ```js
  // primitives
  const PI = 3.145;
  PI = 3.15; // Not allowed

  // objects
  const obj = { foo: 23, bar: 44 };
  obj.foo = 11; // alter
  obj.newFoo = 6767; // add
  obj = { foo: 2113, bar: 144 }; // redefine - NOT allowed

  // array
  const arr = [23, 44];
  arr[0] = 11; // alter
  arr.push(6767); // add
  arr = [2113, 144]; // redefine - NOT allowed
  ```

### # Comman Mistakes

- Loose comparison

  ```js
  var x = 10;
  var y = "10";
  if(x == y) // true
  if(x === y) // false
  ```

- Float precision

  ```js
  var x = 0.1,
    y = 0.2;
  var z = x + y; // NOT = 0.3
  var z = (x * 10 + y * 10) / 10; // = 0.3
  ```

- Performance - avoid calculating again and again

  ```js
  var l = arr.length;
  for(var i =0 ; i < arr.length; i++){...}    // slow
  for(var i =0 ; i < l; i++){...}   // faster

  // DOM reuse (performance)
  var x = document.getElementById("foo");
  x.innerHTML("...."); // X IS REUSED avoiding repeated DOM access.
  ```

### # ES6 Arrow

- ES6 functions

  ```js
  const x = (a.b) => {...};
  ```

### # Objects

- **Mutable** - Addressed by reference
- **Create**

  - `var obj = {...} ;`
  - `var obj = new Object();`

  ```js
  // way 1
  var obj = {
    prop1: 23,
    method1: function(){...}
  };

  // way 2
  // using constructor
  function Person (name, age){
    this.name = name
    this.age = age
  }
  var p = new Person("umesh", 23);
  ```

- **Properties**
  - _changed, added, deleted, read-only_
  - Access - `obj.foo` or `obj['obj']`
  - Add - `obj.newfoo = 'foooo';`
  - Prototype properties can be used.
- **Get/Set** - Brackets `()` are not used like methods.

  ```js
  var obj = {
    name: "umesh",
    age: 23,
    get show() {
      return this.name.toUpperCase();
    },
    set change(n) {
      this.name = n;
    }
  };
  obj.show;
  obj.change = "Foo";
  ```

### # Prototype

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
Child.prototype = new Parent();

let co = new Child(2, 5);
alert(co.add()); // 7
```

### # Functions

- Create

  ```js
  // way 1 - named
  function foo(){...};

  // way 2 - anonymous
  var foo = function(){...};

  // way 3 - self-invoking
  (function(){...})();
  ```

- Hoisting is allowed.
- Num of args - `arguments[i]`
- **this** in (Function vs Arrow)

  ```js
  // Function
  // owner of foo() = window
  var foo = function() {
    return this;
  };
  foo(); // this = window object
  `<button onclick="foo();"> </button>`; // this = button object

  // Arrow
  // owner of foo() = window
  var foo = () => {
    return this;
  };
  foo(); // this = window object
  `<button onclick="foo();"> </button>`; // this = window object
  ```

### # Closures

- Solves counter dilemma.
- Example 1 :

  ```js
  var add = (function {
    var c =0;   // c is private
    return () => {
      return c += 1;
    }
  })();

  add();  // 1
  add();  // 2
  ```

- Example 2 :

  ```js
  function multiplier(m) {
    return n => {
      return n * m;
    };
  }
  let twice = multiplier(2);
  let thrice = multiplier(3);
  console.log(twice(5)); // 10
  console.log(thrice(5)); // 15
  ```

### # Recursion

- Function code calls itself.
- Recusion is **SLOWER** than **For loop**

  ```js
  function power(n, pow) {
    if (pow == 0) return 1;
    return n * power(n, pow - 1);
  }
  power(2, 3); // 8
  ```

### # Timing

- **Timeout**

  ```js
  var t = setTimeout(foo(), milliseconds);
  clearTimeout(t);
  ```

- **Interval**

  ```js
  var t = setInterval(foo(), milliseconds);
  clearInterval(t);
  ```

### # Cookies

- Small text file
- Ex:

  ```js
  // Create - new one is created. Old one is not replaced.
  document.cookie = 'name="foo"; expire="....."';
  // Read
  var c = document.cookie;
  ```

### # AJAX

- Asynchronous javascript and XML
- create - `var xhttp = new XMLHttpRequest();`
- AVOID THIS. - USE AXIOS.

### # Classes

- A type of function.
- If `constructor()` is absent. Then javascript adds invisible & empty `constructor(){ //empty }` automatically.
- **Class syntax**

  ```js
  class Foo {
    constructor(a) {
      this.a = a;
    }
    add(n) {
      return this.a + n;
    }
    static bar() {
      return "This is bar()";
    }
    static barWithObj(obj) {
      return "This is bar(obj)" + obj.a;
    }
  }
  let obj = new Foo(3);
  // methods
  obj.add(5); // 8
  // methods (static)
  Foo.bar(); // 'This is bar()'
  Foo.barWithObj(obj); // 'This is bar(obj)' + 3
  ```

- **Inheritance**

  ```js
  class ParentName {
    constructor(p) {
      this.p = p;
    }
    pFoo() {
      return "pFoo() and p = " + this.p;
    }
  }
  class ChildName extends ParentName {
    constructor(p, c) {
      super(p);
      this.c = c;
    }
  }
  let cObj = new ChildName(5, 3);
  cObj.pFoo(); // "pFoo() and p = " + 5;
  cObj.p; // NOT allowed. Instead use methods of parent..
  ```

- **Get / Set**

  ```js
  class Foo {
    constructor(a) {
      this.a = a;
    }
    get num() {
      return this.a;
    }
    set num(n) {
      this.a = n;
    }
  }
  let obj = new Foo(5);
  obj.num; // 5   // A method is accessed as a property without parentheses().
  obj.num(10);
  ```

### # Import/Export

- **Require** - ` let foo = require(./FooJs);
- **Export**

  - _FooJs.js_

  ```js
  function A(){......};
  function B(){......};
  module.exports = {
    A,
    B
  }
  ```

  - _main.js_

  ```js
  const foo = require("./FooJs");
  foo.A();
  foo.B();
  ```
