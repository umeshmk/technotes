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
let person = new Person();
let teacher = new Teacher();

person.greet(); // Hi
teacher.greet(); // Good Morning
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

## Setters/Getters

- Methods of class that are accessed like a property without parenthesis `()`

### Using Object Literal

```js
var obj = {
  name: "umesh",
  age: 23,
  get show() {
    return this.name.toUpperCase();
  },
  set change(n) {
    this.name = n;
  },
};
obj.show;
obj.change = "Foo";
```

### Using Construtor - Methods

:::danger Not a get/set
This is not an example of get/set. It just uses keywords `getXxxx()` / `setXxxx()`.
They are just methods and are accessed like methods.
:::

- Can access private members like `location` using `get/set` words in methods.

```js
function Foo(name) {
  let location = "Mumbai";
  this.name = name;
  this.getLocation = () => {
    return location;
  };
  this.setLocation = (newLocation) => {
    location = newLocation;
  };
}
let obj = new Foo("umesh");
obj.getLocation(); // Mumbai
obj.setLocation("California");
obj.getLocation(); // California
```

### Using Constructor - Property (Object.defineProperty)

```js
function Foo(name) {
  let location = "Mumbai";
  this.name = name;

  Object.defineProperty(this, "location", {
    get: () => {
      return location; // readonly private member value
    },
    set: (newLocation) => {
      location = newLocation; // writeonly to change private member value
    },
  });
}

let obj = new Foo("Harry");
obj.location; // Mumbai
obj.location("California"); // error
obj.location = "California"; // works
obj.location; // California
```

### Using Class

```js
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }
  set increaseRadiusBy(n) {
    this.radius += n;
  }
}

let c = new Circle(5);
c.diameter; // 10
c.increaseRadiusBy = 2;
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
