# Object Oriented Programming

:::danger OOP - The Trillion Dollar Disaster ?

- _Source_
  - [Famous Medium article](https://medium.com/better-programming/object-oriented-programming-the-trillion-dollar-disaster-92a4b666c7c7) - Read other articles too.
  - [Medium](https://medium.com/@cscalfani/goodbye-object-oriented-programming-a59cda4c0e53)
- _In Real World, You do not inherit “behaviors” from your parents, you develop your own behaviors. And you’re unable to “override” your parents’ behaviors._
- _Fundamental error - Objects bind functions and data structures together in indivisible units._
- **Design Patterns** - _OOP Guidelines like SOLID principle, dependency injection, design patterns, and others are just bandaids created to fill shortcomings of OOP._
- _GoLang - Some modern programming languages avoid inheritance altogether._

<vc-img url="https://miro.medium.com/max/1050/1*_xDSrTC0F2lke6OYtkRm8g.png" size="lg"></vc-img>

**Functional languages**

- _Elixir, Elm, F#, scala, clojure_
- _With the right guidance and linting, JavaScript can be a good functional language._
  :::

:::tip Types of Programming

_JavaScript is multi-paradigms._

1. Procedural
2. OOP
3. Functional

- _JavaScript OOP is not like Java's OOP. There are Differences._
- JavaScript is **Prototypical OOP & Classless**

:::

## OOP Principles

### Encapsulation

- Binding data & methods (acting on data) together into single entity.
- _Eg: A Car has data(petrol, kms) & method(mileage) which will use data to calculate._
- _Total encapsulation_ - Make date private. We can use _closures or get/set_.

```js
// private or not is a different issue. -
let obj = {
  x: 10,
  y: 20,
  add: () => {
    return this.x + this.y;
  },
};
```

---

### Abstraction

- **Concept**
  - Hides the implementation details from the user.
  - We cannot create any instance. It's child must do it.
  - Abstract methods - methods without body.
  - _But javascript OOP is not java OOP._

* stackoverflow
  - [Best advice - Just don't use it.](https://stackoverflow.com/a/7477488)
  - [_Abstract classes don't play a big role in JavaScript_](https://stackoverflow.com/a/15306051)
    - **In Java** - We use abstract classes to acheive
      1. _Polymorphism_
      2. _Code sharing(inheritance)_
    - **In JavaScript** - Neither are a problems.

---

### Inheritance

- See [javascript/#prototype](http://localhost:8080/javascript/#prototype)
- Share code. No code duplication.

#### # Object Literal _(not a convention. Use constructors.)_

```js
let parent = {x: 10};
let child = Object.create(parent, {y: 20});
```

#### # Constructors

1. **Constructor -> Instance**

```js
obj = new Parent();
```

2. **Constructor -> Constructor -> Instance** - _(Extend)_

```js
function Parent(x) {
  this.x = x;
}
Parent.prototype.sayHi = () => 'Hi';

function Child(x, y) {
  Parent.call(this, x); // Run & Inherit
  this.y = y;
}

// Child.prototype = Parent.prototype; // wrong - Overriding is not possible
Child.prototype = Object.create(Parent.prototype); // new object { constructor: Parent(), __proto__: Parent.prototype }
Child.prototype.constructor = Child; // Override - { constructor: Child(), __proto__: Parent.prototype }

let o = new Child(10, 20);

c(o instanceof Child); // true
c(o instanceof Parent); // true

c(Object.getPrototypeOf(o)); // Parent
```

#### Using Class

```js
class Parent {
  constructor(x) {
    this.x = x;
  }
  sayHi() {
    return 'hi';
  }
}

class Child extends Parent {
  constructor(x, y) {
    super(x);
    this.y = y;
  }
}
let obj = new Child(3, 4);
```

---

### Polymorphism

**MDN** - "The fancy word for the ability of multiple object types to implement the same functionality is polymorphism."

[JavaScript is a dynamic language with **duck typing**. Polymorphism is not an issue. ](https://stackoverflow.com/a/15306051)

```js
let student = {
  greet: function() {
    return 'Hello';
  },
};

let teacher = {
  greet: function() {
    return 'Good Morning';
  },
};

c(student.greet());
c(teacher.greet());
```

**Concept**

- Polymorphism - Objects with **Same name methods** but **different logic**
  1. **Dynamic (Overriding)(runtime)** - Subclass method overrides superclass method
  2. **Static (Overloading)(compiletime)** - A class with n methods with same name but different arguments

_Polymorphism allows us to change program behavior at runtime._

```js
// Overriding
let person = {
  prototype: {},
};
person.prototype.greet = () => 'Hello.';

let student = {};
student.prototype = Object.create(person.prototype);
student.prototype.greet = () => 'Hello student.';

let teacher = {};
teacher.prototype = Object.create(person.prototype);
teacher.prototype.greet = () => 'Good morning.';

c(student.greet());
c(teacher.greet());
```

## Instanceof

**`obj instanceof Constructor`**

- Will get `Constructor.prototype`
- Then check the prototype chain of `obj` for ref to `Constructor.prototype`
- Return true/false (if found anywhere in the chain)

```js
let a = [2, 3];

c(a instanceof Array); // true
c(a instanceof Object); // true
```

## Creating Objects

#### Object

```js
let obj = new Object();
```

#### Object Literals

```js
let obj = {
  x: 3,
  y: 4,
  add: () => {
    return this.x + this.y;
  },
};
```

#### Factory Function

```js
function Foo(x, y) {
  return {
    x,
    y,
    add: function() {
      return this.x + this.y;
    },
  };
}

let o = Foo(2, 3); // just call don't use 'new'
```

#### Constructor

```js
// first letter is capital
function Foo(x, y) {
  this.x = x;
  this.y = y;
  this.add = () => {
    return this.x + this.y;
  };
}
let obj = new Foo(2, 3);
```

#### Classes

```js
class Foo {
  constructor(x) {
    this.x = x;
  }
  num() {
    return this.x;
  }
}
let obj = new Foo(5);
```

## Passed by reference

:::tip
Objects are **Mutable** because they are always addressed by **reference**.
:::

> **Example**

```js
// passed by value - number/string/boolean/symbol/undefined/null
// passed by reference - objects (array,functions,etc)
let x = {n: 10};
let y = x;
x.n = 20;

console.log(x, y); // {n:20} {n:20}
```

## Copy Object

1. _Reference Copy_
2. _Shallow Copy_ - (Top level properties are copied. For Nested objects, ref is copied)
   - _Spread operator_
   - _Assign_ - `Object.assign ({}, obj)`
3. _Deep Copy_
   - _Lodash_
   - _Json_ - `JSON.parse(JSON.stringify(obj))` (undefined, symbols, methods are skipped)

_Note : Methods can't be copied reliably in javascript. So share them._

```js
let foo = {
  x: 3,
  y: {
    z: 4,
  },
};

// shallow copy
let bar = {
  a: 10,
  ...foo,
};
c(bar); // {a: 10, x: 3, y: {…}}
c(foo.y === bar.y); // true - ref to same object

// deep copy
let deep = JSON.parse(JSON.stringify(foo));
c(foo.y === deep.y); // false
```

## This

- Based on location where it is used

```js
c(this); // this = window object

function foo() {
  c(this); // owner of function ie 'Window'
}
```

**In method**

```js
let p = {
  foo: 23,
  bar: function() {
    c(this); // this = owner of function = p object
  },
  barArrow: () => {
    c(this); // this = window object
  },
  barMix: function() {
    let arrow = () => {
      c(this); // lexical scoping - takes this from outer context = p object
    };
    return arrow();
  },
};

p.bar(); // p object
p.barArrow(); // window object
p.barMix(); // p object
```

**In Event handlers**

```html
<!-- this = [object HTMLButtonElement] -->
<button onclick="alert(this);">
  click
</button>
```

#### bind()

- We use this `bind()` to bind `this` to the funtion context.

```js
let foo = function() {
  c(this);
};
let myThis = {
  x: 10,
};

let newFoo = foo.bind(myThis);

newFoo(); // myThis
foo(); // window
```

## Property

- **_Types of Property_**
  1. _Data property_ - has value
  2. _Accessor property_ - has no value but `get/set`

```js
// Both enumerable & non-enumerable props
Object.getOwnPropertyNames(obj);

// Enumerable props
for (let x in obj);

Object.keys(obj); // all keys
Object.values(obj); // all values
```

- **_Property Attributes_**
  - Data & Accessor property has some Attributes used internally by JSEngine. Eg: `[[Prototype]]`
  - _Data property_ - `[[Value]], [[Enumerable]], [[Writable]], [[Configurable]]`
  - _Accessor property_ - `[[Get]], [[Set]], [[Enumerable]], [[Configurable]]`

```js
// get flags
Object.getOwnPropertyDescriptor(obj, propName); // {value: , writable: true, enumerable: true, configurable: true, }

// change flags
Object.defineProperty(obj, propName, {value: 'foo', enumerable: false}); // If flags are absent then all flags = false.
```

#### Add, Delete property

```js
// add
obj.newProp = 'value';
obj['new-prop'] = 'value';

// dynamic key
let obj = {
  [someVariable]: 'umesh',
};
obj[someVariable];

// delete
delete obj.newProp;
```

## Property - Get/Set

- _Accessor property_
  - Has no `value` but `get/set` methods.
  - This methods are accessed just like a property without parenthesis `()`
  - `set()` allows only **one parameter**.
- _Property Attributes_ - `[[Get]], [[Set]], [[Enumerable]], [[Configurable]]`

#### Using Object Literal

- **Two ways**
  1. Using keywords `get/set` inside literal object.
  2. Using `Object.defineProperty` outside literal object

```js
// first, last = data property
// user = accessor property
var obj = {
  first: 'umesh',
  last: 'kadam',
  get user() {
    return `${this.first} ${this.last}`;
  },
  set user(name) {
    let [first, last] = name.split(' '); // array destructuring
    this.first = first;
    this.last = last;
  },
};

// Object.defineProperty can be used here

obj.user = 'Foo Bar'; // set
console.log(obj.user); // get
```

#### Using Constructor - Property

- **One way**
  1. Not possible - Using keywords `get/set` inside Constructor.
  2. Using `Object.defineProperty` inside/outside Constructor by passing context `this/obj`

```js
function Foo(name) {
  this.name = name;

  Object.defineProperty(this, 'user', {
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

let obj = new Foo('Harry');
obj.user = 'Potter'; // set
c(obj.user); // get - Potter
```

#### Using Class

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

let obj = new Foo('Umesh');
obj.user = 'Harry'; // set
c(obj.user); // get
```

#### Using keywords

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
let obj = new Foo('umesh');
obj.getName();
obj.setName('Harry');
```

## Private/Protected

- **Private** - `#propName` (almost a js standard now. Visible only inside class.) (No Inheritance for child class.)
- **Protected** - `_propName` (a convention but not official. It is assecible from anywhere outside. But `_` reminds us not to use outside class.)

#### In Constructor

```js
function Foo() {
  let x = 3; // private member (not property)
  this.num = () => x;
}

let o = new Foo();

c(o.num()); // 3
o.x = 55; // is creating property and not private member
```

#### In Class

```js
class Foo {
  //  let x = 3; // error can't use let/const inside class
  x = 3; // public
  _y = 5; // public (protected as convention)
  #z = 4; // private

  num() {
    return this.#priNum();
  }

  #priNum() {
    return this.x + this._y + this.#z;
  }
}

let o = new Foo();
c(o); // Foo {x: 3, _y: 5, #priNum: ƒ, #z: 4}

c(o.x); // 3
c(o._y); // 5
c(o.z); // undefined
// c(o.#z); // error

c(o.num()); // 12
```

## Method Chaining

```js
class User {
  constructor(name) {
    this.name = name;
  }
  one() {
    console.log('one');
    return this;
  }
  two() {
    console.log('two');
    return this;
  }
}

let user = new User('umesh');
user.one().two();
```

## Static methods

- They are just utility/helper methods relevant to class
- They can be accessed using classname only and not class instances/objects
- `this` keyword is never used inside static methods
- eg: `Object.keys(), Object.values(), etc`

```js
class Foo {
  x = 3;
  static num() {
    return this.x;
  }
  static square(x) {
    return x ** 2;
  }
}

c(Foo.x); // undefined
c(Foo.num()); // undefined - (we can't use "this" in static)
c(Foo.square(10)); // 100
```

## Mixins

- It's like adding extra props/methods to prototype of any class.
- Js does not allow **multiple Inheritance**. But then mixin can be a great alternative.

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
