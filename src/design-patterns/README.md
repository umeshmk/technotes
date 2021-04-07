# Design Patterns

:::tip Resources

- [kamranahmedse/design-patterns-for-humans](https://github.com/kamranahmedse/design-patterns-for-humans)
- [Learning JavaScript Design Patterns - addyosmani](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
- [Toptal - The Comprehensive Guide to JavaScript Design Patterns](https://www.toptal.com/javascript/comprehensive-guide-javascript-design-patterns)
- [wikipedia.org/wiki/Design_Patterns](https://en.wikipedia.org/wiki/Design_Patterns)
- [betterprogramming.pub/javascript-design-patterns-25f0faaaa15](https://betterprogramming.pub/javascript-design-patterns-25f0faaaa15)

:::

## Design Patterns

- **Keep it Simple.**

Design patterns in Javascript provide you with repeatable solutions to common problems. These are a few of the design patterns that are important to know.

- _Creational_ - Creating objects
- _Structural_ - Relation between objects
- _Behavioral_ - Communication between objects
- _Concurrency_ - Multi-threaded programming paradigms _(Active object, Nuclear reaction, Scheduler)_

| Creational Patterns  | Structural Patterns | Behavioral Patterns     | Architectural               |
| -------------------- | ------------------- | ----------------------- | --------------------------- |
| Simple Factory       | Adapter             | Chain of Responsibility | Module                      |
| **_Factory Method_** | Bridge              | Command                 | Constructor                 |
| Abstract Factory     | Composite           | Iterator                | MVC (Model-View-Controller) |
| Builder              | **_Decorator_**     | Mediator                | MVP (Model-View-Presenter)  |
| Prototype            | **_Facade_**        | Memento                 | MVVM (Model-View-ViewModel) |
| **_Singleton_**      | Flyweight           | **_Observer_**          |
|                      | Proxy               | Visitor                 |
|                      |                     | **_Strategy_**          |
|                      |                     | State                   |
|                      |                     | Template Method         |

## Architectural Patterns

### Constructor

```js
function Foo(params) {
  this.params = params;
}

let obj = new Foo();
```

### Module

- Keep something as private yet accessible.
- Cons
  - new property/methods added dynamically to obj has no access private variables..

```js
let collection = (function() {
  // private
  let obj = [];

  // public
  return {
      addObj: ....,
      removeObj: ....,
      getObj: ....
  }
})();

collection.addObj({....});
```

## Creational Patterns

### Singleton

- Used when we need only one instance of a class.
- eg: configuration object, session object, etc

```js
let singletonConfig = (function() {
  let config;

  function createConfig(options) {
    // create a obj
  }

  return {
    create: (options) => {
      if (config === undefined) config = new createConfig(options);
      else return "Already configured.";
    },
    get: () => {
      if (config === undefined) return "Not configured.";
      else return config;
    },
  };
})();
```

### Prototype

```js
let proto = {
  // some functions
};

function Foo(a) {
  let a = a || "somethingdefault";

  function constuctorFunc(x) {
    this.x = x;
  }

  let instance = new constuctorFunc(a);
  return instance;
}

// all instance share the proto functions instead of adding in all instances.
let obj = new Foo("data");
let obj2 = new Foo("data2");
```

## Structural Patterns

### Facade

- An abstraction layer. A simple interface use.

```js
jQuery(".parent .child div.span");
```

## Behavioral Patterns

### Observer (Publisher/Subscriber)

- 2 parts - Subject and Observers.
- **Publisher/Subscriber** is a slight modified version of Observer Pattern. It is more loosely coupled.
- _In Observer_ - subject has a references to subscribed Observers and calls methods directly
- _In Publisher/Subscriber_ - A communication channel is used. Publisher just fires event and runs callback sent for that event.
- Useful in firing multiple callbacks for single event.

```js
let publishSubscribe = {};

(function(container) {
  let countId = 0;

  // Subsribe
  container.subscribe = (event, callback) => {
    // register new event if not present
    if (!(event in container)) container[event] = [];

    // add callback to the list of callbacks
    // All callbacks will be executed when event is fired
    container[event].push({
      "id: ++countId,
      "callback": callback
    });
  };

  // Unsubsribe
  container.unsubscribe = (event, subscriberId) => {
      // just remove subscriberId from container
  };

  // Publish
  container.publish = (event, data) => [
      for(subscriber of container[event]){
          subscriber.callback(data);
      }
  ];
})(publishSubscribe);


// Subscribe to events
let sub1 = publishSubscribe.subscribe('clickedFoo', foo());
let sub2 = publishSubscribe.subscribe('clickedFoo', foo2());
let sub3 = publishSubscribe.subscribe('clickedBar', bar());

// publish
publishSubscribe.publish('clickedFoo', {"data": "someEventData"}); // runs foo(), foo2()
publishSubscribe.publish('clickedBar', {"data": "someEventData"}); // runs bar()
```

### Command

- We create an abstraction layer(just like interface) over the actual executing code.

```js
// Execution
let invoker = {
  add: (x, y) => {
    return x + y;
  },
  subtract: (x, y) => {
    return x - y;
  },
  multiply: (x, y) => {
    return x * y;
  },
};

// abstraction (interface) layer
let abstractManager = {
  execute: (name, ...args) => {
    if (name in invoker) {
      return invoker[name].apply(invoker, args);
    }
  },
};

manager.execute("add", 3, 5); // 8
```
