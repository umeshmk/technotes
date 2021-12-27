# Classes & Modules

## Classes

```ts
class Foo {
  x: number;
  y: number;
  readonly z: string = 'hi'; // write only in constructor

  uninit: string; // error - if strictPropertyInitialization is enabled
  uninit2!: string; // ! disables strictPropertyInitialization

  constructor() {
    this.uninit = 'strictPropertyInitialization needs this to work';
    this.z = 'can be written only in constructor()';
  }
}
```

### Overload constructor

```ts
// constructor
class Foo extends Bar {
  constructor(a: number): number; // error - cant have return type since it's always an instance
  constructor(a: number);
  constructor(a: string);
  constructor(a: number | string, b?: number) {
    super(); // refers to Bar
    // code
  }
}
```

### Implements

```ts
interface FooInterface {
  greet: (msg: string) => string;
  greet2: (msg: string) => string;
}
class Foo implements FooInterface {
  greet(msg: string) {
    return 'Hi' + msg;
  }

  // msg must be :string but no error by typescript
  // interface checks
  //    - method name, return type, num of args
  //    - not parameter types

  // Here "msg:any" - will throw error
  // instead use msg :string
  greet2(msg) {
    return 'Hi' + msg;
  }
}
```

### Visibility

```ts
class Foo {
  x = 'public';
  protected y = 0; // can be used in subclass
  private z = 3; // only this class (but for typescript only. It's visible in javascript.)

  // static
  static a = 6; // use Foo.a
  private static b = 6; // visibility can be used
  // static private  c = 6; // error - private must precede static
}
```

### Generic class

```ts
class Foo<T> {
  x: T;
  constructor(x: T) {
    this.x = x;
  }
}

let f = new Foo('hello');
f.x = '2';
f.x = 2; // error;
```

## Modules

- Don't use **namespaces** use ESModules (pre-dates the ES Modules standard).
