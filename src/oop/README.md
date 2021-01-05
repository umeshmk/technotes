# Object Oriented Programming

<!-- > source - [Programming with Mosh](https://www.youtube.com/watch?v=PFmuCDHHpwk) -->

:::tip Types of Programming

1. Procedural
2. OOP
3. Functional

:::

**Property & Methods**

```js
{
  property: "value",
  method: () => {},
};

obj.constructor // gives constructor for object
```

## OOP Principles

### Encapsulation

- Method `add()` no parameters are needed to pass. Instead `this` is used.
- Data `x,y` is bundled with method `add()`

```js
// Procedural
let x = 10;
let y = 20;
function add(x, y) {
  return x + y;
}

// OOP
let obj = {
  x: 10,
  y: 20,
  add: () => {
    return this.x + this.y;
  },
};
```

### Abstraction

- Using local variables as Private members (not Private property/method of object).
- User just pass the radius.
- User has no idea about `pi` and `formula`
- User has no access to `pi`

```js
function Circle(radius) {
  let pi = 3.14; // scope is private to this function only;
  let formula = (r) => {
    return pi * r * r;
  };
  this.radius = radius;
  this.area = () => {
    return formula(this.radius);
  };
}
let obj = new Circle(5);
console.log(obj.pi); // error
console.log(obj.formula()); // error
console.log(obj.radius);
console.log(obj.area());
```

### Inheritance

- Teacher Object instance can access Person class properties & methods.
- No code duplication.

**Example - using constructor**

```js
function Person(name) {
  this.name = name;
}
function Teacher(name, subject) {
  Person.call(name);
  this.subject = subject;
}
let aTeacherObj = new Teacher("snape", "Dark arts");
aTeacherObj.name; // snape
```

**Example - using constructor with prototype method**

```js
function Person(name) {
  this.name = name;
}
Person.prototype.greetProt = () => {
  return "Hello from prototype";
};
function Teacher(name, subject) {
  Person.call(this, name); // don't forget to pass "this" as first parameter
  this.subject = subject;
}

// add Person's prototype  as a prototype for Teacher
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher; // change constructor

// create obj
let aTeacherObj = new Teacher("sanpe", "dark arts");
aTeacherObj.greetProt();
```

**Example - using Class**

```js
// Parent
class Person {
  constructor(name) {
    this.name = name;
  }
  greet(){
      return "Hi " + this.name;
  }
}

// Child
class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }
}
let aTeacherObj = new Teacher("snape", "css );
aTeacherObj.greet();
```

### Polymorphism

- Polymorphism means methods with **Same name** but **different implementation logic**
  1. **Dynamic (Overriding)(runtime)** - Subclass method overrides superclass method
  2. **Static (Overloading)(compiletime)** - A class with n methods with same name but different arguments
- **MDN** - "The fancy word for the ability of multiple object types to implement the same functionality is polymorphism."
- In example `greet()` method is in different forms for each class but name is same ie. `greet()`

```js
// Parent - Person
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return "Hi";
  }
}
// Child - Teacher
class Teacher extends Person {
  constructor(name) {
    super(name);
  }
  greet() {
    // super.greet(); // parent can be accessed if needed
    return "Good Morning";
  }
}

// objects
let person = new Person("foo");
let teacher = new Teacher("bar");

person.greet(); // Hi
teacher.greet(); // Good Morning
```

## Instanceof

```js
let a = [2, 3];

console.log(a instanceof Array); // true
console.log(a instanceof Object); // true
```

- Helpful in Polymorphism.

```js
// Parent - Person
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return "Hi";
  }
}
// Child - Teacher
class Teacher extends Person {
  constructor(name) {
    super(name);
  }
  greet() {
    return "Good Morning";
  }
}

// objects
let person = new Person("foo");
let teacher = new Teacher("bar");

console.log(person instanceof Person); // true
console.log(teacher instanceof Person); // true
console.log(person instanceof Teacher); // false
console.log(teacher instanceof Teacher); // true
```

## Creating Objects

### Object Literals

- **Pros**
  - Use - if there is just 1 or very few instances needed.
  - Quickest
  - Best for json data sharing
- **Cons**
  - Duplication

```js
let obj = {
  x: 3,
  y: 4,
  add: () => {
    return this.x + this.y;
  },
};
```

### Factory Function

```js
function foo() {
  return {
    x: 3,
    y: 4,
    add: () => {
      return this.x + this.y;
    },
  };
}
let obj = foo(); // just call don't use 'new'
```

### Constructor

```js
// first letter is capital
function Foo() {
  this.x = 3;
  this.y = 4;
  this.add = () => {
    return this.x + this.y;
  };
}
let obj = new Foo();
```

**Constructor with prototype methods**

```js
// add() gets stored in prototype. Not actual object.
function Foo() {
  this.x = 3;
  this.y = 4;
}
Foo.prototype.add = () => {
  return this.x + this.y;
};
let obj = new Foo();
```

### Classes

- **Pros**
  - Use - if there multiple instances needed.
  - No duplication
  - Modern Syntax is Good
- **Cons**
  - Time consuming for small implementations

```js
class Foo {
  constructor(x) {
    this.x = x;
  }
}
let obj = new Foo(5);
```

### Object

- Same as Object literal. `{}` get converted internally to `new Object()`

```js
// way 1
let obj = new Object();

// way 2
let objA = new A();
let objB = Object.create(objA); // A is the prototype for B. (Also Inheritance without using classes.)
```

## Passed by reference

:::tip
Objects are **Mutable** because they are always addressed by **reference**.
:::

> **Example**

```js
// passed by value - number/string/boolean/symbol/undefined/null
let x = 10;
let y = x;
x = 20;

console.log(x); // 20
console.log(y); // 10

// passed by reference - object/array/functions
let x = { n: 10 };
let y = x;
x.n = 20;

console.log(x); // {n:20}
console.log(y); // {n:20}
```

> **Example**

```js
// passed by value - number/string/boolean/symbol/undefined/null
let x = "jack";
function foo(value) {
  value.name = "harry";
}
foo(x);
console.log(x); // jack - unchanged

// passed by reference - object/array/functions
let x = { name: "jack" };
function foo(ref) {
  ref.name = "harry";
}
foo(x);
console.log(x); // harry - changed
```

## Dynamic Properties/Methods

- Add/remove/access dyanmically.
- Both current & new property/method is possible.

### Add/remove

```js
obj.newProp = "value";
obj.["newProp"] = "value";
obj.[someVariable] = "value"; // dynamic property name

// delete
delete obj.newProp;
```

### Access

```js
// Access
for (let x in obj) {
  console.log(x); // keyname (both props & methods )
  console.log(obj[x]); // keyvalue
  if (typeof x !== "function") {
    console.log(x); // keyname (only props & no methods )
  }
}

// access using Object
Object.keys(obj); // all keys
Object.values(obj); // all values

// access to check key
if("key" in obj) // "key" is present in obj
```

## Property Flags

- **Each property has 3 Types of hidden flags (default value is always `true` for all 3 flags)**
  - `writable` - value can be changed
  - `enumerable` - property can be counted in loop
  - `configurable` - property can be deleted or modified

```js
// show property flags
let description = Object.getOwnPropertyDescriptor(obj, propName);
console.log(description); // {value: , writable: true, enumerable: true, configurable: true, }

// change flags
Object.defineProperty(obj, propName, descriptionObj);
Object.defineProperty(user, name, { value: "umesh" }); // If flags are absent then all flags = false.

Object.defineProperties(obj, {propName: description, ....}); // Multiple properties
```

## Setters/Getters

- **Property Types**
  - _Data property_ - has `value`
  - _Accessor property_ - has no `value` but `get/set`
    - Methods that are accessed like a property without parenthesis `()`
    - It has no `writable` property flag but `get()` & `set()` functions
    - `set()` allows only one parameter.

### Using Object Literal

- **Two ways**
  1. Using keywords `get/set` inside literal object.
  2. Using `Object.defineProperty` outside literal object

```js
// first, last = data property
// user = accessor property
var obj = {
  first: "umesh",
  last: "kadam",
  get user() {
    return `${this.first} ${this.last}`;
  },
  set user(name) {
    let [first, last] = name.split(" "); // array destructuring
    this.first = first;
    this.last = last;
  },
};

// Object.defineProperty can be used here

obj.user = "Foo Bar"; // set
console.log(obj.user); // get
```

### Using Constructor - Property

- **One way**
  1. Not possible - Using keywords `get/set` inside Constructor.
  2. Using `Object.defineProperty` inside/outside Constructor by passing context `this/obj`

```js
function Foo(name) {
  this.name = name;

  Object.defineProperty(this, "user", {
    get: () => {
      return this.name;
    },
    set: (name) => {
      if (name.length > 3) {
        this.name = name;
      }
    },
  });
}

let obj = new Foo("Harry");
obj.user = "Potter"; // set
console.log(obj.user); // get - Potter
```

### Using Construtor - Methods

:::danger Not a get/set Syntax
This is not an example of get/set Syntax. It just uses keywords `getXxxx()` / `setXxxx()`.
They are just simple methods (not accessor property).

**Advantage** - Arguments can be of any length & not restricted as in `get/set`
:::

```js
function Foo(name) {
  this.name = name;
  this.getName = () => {
    return this.name.toUpperCase();
  };
  this.setName = (name) => {
    this.name = name;
  };
}
let obj = new Foo("umesh");
obj.getName();
obj.setName("Harry");
```

### Using Class

```js
class Foo {
  constructor(name) {
    this.name = name;
  }

  get user() {
    return this.name;
  }
  set user(name) {
    this.name = name;
  }
}

let c = new Foo("Umesh");
c.user = "Harry"; // set
console.log(c.user); // get
```

## Private/Protected

- **Private** - `#propName` (almost a js standard now. Visible only inside class.) (No Inheritance for child class.)
- **Protected** - `_propName` (a convention but not official. It is assecible from anywhere outside. But `_` reminds us not to use outside class.)

### In Constructor

```js
function Foo() {
  let pri = "umesh"; // private member (not property)

  this.myPrivate = () => {
    return pri;
  };
}

let obj = new Foo();

console.log(obj.myPrivate()); // umesh
console.log(obj.pri); // undefined
obj.pri = "something"; // is creating property and not private member
```

### In Class

```js
class Foo {
  let pri = "Hmmm...why I'm not allowed ?"; // unlike constructor above "let/const" is not allowed
  #myPrivate = "Hmmm...secret"; // private
  myPrivate = "Hmmm...no secret"; // allowed & public

  // constructor if needed

  #myPrivateMethod() {
    // code
  }
  myPrivateMethod() {
    return this.#myPrivate; // accessed using "this"
  }
}

let obj = new Foo();
console.log(obj.myPrivateMethod());
```

## Method Chaining

```js
class User {
  constructor(name) {
    this.name = name;
  }
  one() {
    console.log("one");
    return this;
  }
  two() {
    console.log("two");
    return this;
  }
}

let user = new User("umesh");
user.one().two();
```

## Static methods

- They are just utility/helper methods relevant to class
- They can be accessed using classname only and not class instances/objects
- `this` keyword is never used inside static methods
- eg: `Object.keys()`

```js
class Square {
  constructor(side) {
    this.side = side;
  }
  static compare(s1, s2) {
    return s1 > s2 ? "First is bigger" : "Second is bigger";
  }
}

let s1 = new Square(5);
let s2 = new Square(7);
Square.compare(s1, s2); // classname is used not object
```

## Destructuring

```js
let obj = { name: "umesh", age: 27 };

// without destructuring
var name = obj.name;
var age = obj.age;

// with destructuring
let { name, age } = obj;
```

## Symbol

- A symbol is unique identifier.
- It's always accessed using variable.
- Hidden/Skipped by - `for in`, `Object.keys` but not by cloning `(Object.assign(dest, [src1, src2...]))`

```js
// Description is obtional
let id = Symbol("This is description & has no side-effects on anything.");
let id = Symbol();
id.description; // read description

// Symbold are always unique
let x = Symbol("hello");
let y = Symbol("hello");
console.log(x === y); // false

// To use variable as property name we use symbols.
// This avoids conflict with other properties of same name
let id = Symbol();

let obj = {
  id: "property",
  [id]: "Symbol variable as property",
};

console.log(obj.id); // "property",
console.log(obj[id]); // "Symbol variable as property"
```

## Mixins

- It's like adding extra props/methods to prototype of any class.
- Js does not allow multiple Inheritance. But then mixin can be a great alternative.

```js
let mixin = {
  msg: "I'm form Mixin",
};

class Person {}
class Teacher extends Person {}

let obj = new Teacher();

console.log(Teacher.prototype); // Person {...}

Object.assign(Teacher.prototype, mixin); // add mixin to teacher
console.log(Teacher.prototype); // Person {msg: "...." , ...}
```
