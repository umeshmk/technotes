# SOLID - Software Design Principles

:::tip Principles
Note that these are **Principles** not **Rules**.<br/>
Can sometimes lead to **overengineered** code.

**Resources:**

- [freecodecamp](https://www.youtube.com/watch?v=XzdhzyAukMM)
- [youtube.com/watch?v=yxf2spbpTSw](https://www.youtube.com/watch?v=yxf2spbpTSw)
- [youtube.com/watch?v=\_\_jNeGClKPE](https://www.youtube.com/watch?v=__jNeGClKPE)
  :::

1. _Single Responsibility Principle_
2. _Open/Closed Principle_
3. _Liskov Substitution Principle_
4. _Interface Segregation Principle_
5. _Dependency Inversion_

**Others**

- _KISS_ - Keep it simple stupid
- _Premature Optimizations_ is not needed
- _Minimalism_ - You aren't gonna need it
- _Docs_ - Never trust the documents
- _DRY_ - Don't repeat yourself
- _Agile develepment_ - Get continous feedback from client

## Single Responsibility Principle

- Single Responsibility for class/methods
- Only 1 reason to change class/methods
- Dataflow - Data should flow parent to child.
  - Bad ex - 2 parents modifying child could be bad.

<vc-table>
<template v-slot:cola>

```js
// Bad
class UserSettings{
  constructor(){....}
  credentials(){....}
  settings(){....}
}
```

</template>
<template v-slot:colb>

```js
// Good
class Auth{
  constructor(){....}
  credentials(){....}
}
class Settings{
  constructor(){....}
  settings(){....}
}
```

</template>
</vc-table>

## Open/Closed Principle

- Like loose coupling, black-box.
- Software entities (classes, functions, modules, etc) is open for extension but closed for modification

<vc-table>
<template v-slot:cola>

```js
// Bad
let flavour = ["pista", "mango"];
let maker = {
  icecream(myFlavour) {
    if (flavour.indexOf(myFlavour) > -1) {
      // yes
    } else {
      // no
    }
  },
};
```

</template>
<template v-slot:colb>

```js
// Good
let flavour = ["pista", "mango"];
let maker = {
  icecream(myFlavour) {
    if (flavour.indexOf(myFlavour) > -1) {
      // yes
    } else {
      // no
    }
  },
  addFlavour(newFlavour) {
    flavour.push(newFlavour);
  },
};
```

</template>
</vc-table>

## Liskov Substitution Principle

> _Let `q(x)` be a property provable about objects of `x` of type `T`. Then `q(y)` should be provable for objects `y` of type `S`(Where `S` is a subtype of `T`.)_

- Use inheritance only if Child class can be a Substitution for parent class
- Ex:
  - A `Square` is a `Rectangle` but not vice versa.
  - If `Square` is a subtype of `Rectangle` then `q(Rectangle) == q(square)` but it won't since both have different requirements.
  - So we should use `Shape`

<vc-table>
<template v-slot:cola>

```js
// Bad
class Rectangle {
  constructor(){
    this.width = 0;
    this.height = 0;
  }
  setWidth(width){
    this.width = width;
  }
  setHeight(height){
    this.height = height;
  }
  render(area){...}
  setColor(color){...}
  area(){return this.width * this.height;}

}

class Square extends Rectangle{
  setWidth(width){
    this.width = width;
    this.height = width;
  }
  setHeight(height){
    this.width = height;
    this.height = height;
  }

}
```

</template>
<template v-slot:colb>

```js
// Good
class Shape {
  render(area){...}
  setColor(color){...}
}

class Rectangle extends Shape {
  constructor(width, height){
    super();
    this.width = width;
    this.height = height ;
  }
  area(){return this.width * this.height;}
}

class Square extends Shape {
  constructor(side){
    super();
    this.side = side ;
  }
  area(){return this.side * this.side;}
}
```

</template>
</vc-table>

## Interface Segregation Principle

- Divide big interface into multiple small interfaces (which are more specific).
- If a class is not using interface then class should not be forced to Implement that interface.
- JavaScript don;t have interfaces. So it means interactions in js.
  - We can use Facade Pattern (A Facade is an object that provides a simplified interface to big code.).

<vc-table>
<template v-slot:cola>

```js
// Bad
class DOMTraversal {
  constructor(settings) {
    this.settings = settings;
    this.setup();
  }
  setup() {
    let root = this.settings.root;
    this.animationModule.setup();
  }
}

let obj = new DOMTraversal({
  root: document.getElementById("root"),
  animationModule() {}, // optional
});
```

</template>
<template v-slot:colb>

```js
// Good
class DOMTraversal {
  constructor(settings) {
    this.settings = settings;
    this.options = settings.options;
    this.setup();
  }
  setup() {
    let root = this.settings.root;
    this.extraSetup();
  }
  extraSetup() {
    if (this.options.animationModule) {
      this.options.animationModule.setup();
    }
  }
}

let obj = new DOMTraversal({
  root: document.getElementById("root"),
  options: {
    animationModule() {},
  },
});
```

</template>
</vc-table>

## Dependency Inversion

- Depend on abstractions(interfaces) instead of concrete classes
- But javascript has not abstractions.

<vc-table>
<template v-slot:cola>

```js
// Bad

class Foo {}
class Foo1 {}
class Foo2 {}
class Bar {
  constructor() {
    // hard coded dependency
    this.something = new Foo();
  }
}
```

</template>
<template v-slot:colb>

```js
// Good

class Foo {}
class Foo1 {}
class Foo2 {}
class Bar {
  constructor(something) {
    this.something = something;
  }
}

let obj = new Bar(new Foo());
let obj2 = new Bar(new Foo2());
```

</template>
</vc-table>
