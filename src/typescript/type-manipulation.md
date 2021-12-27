# Type Manipulation

## Generic

- `any` vs `<T>`
  - eg: If we use `any` we don't know the return type of function.
- We can't have generic enums and namespaces.

<vc-table>
<template v-slot:cola>

```ts
// Define Generic
function foo<T>(x: T): T {
  return x;
}
```

</template>
<template v-slot:colb>

```ts
// Use
let x1 = foo<string>('hello');
let x1 = foo<number>(3);
let x2 = foo('hello'); // type is inferred
```

</template>
</vc-table>

### Generic type

```ts
// Root Generic
function foo<T>(x: T): T {
  return x;
}

// Create Non-generic functions - Derived from Root Generic
// - new function with same implementation different types
interface fooInterface<T> {
  (x: T): T;
}
let fooNum: fooInterface<number> = foo;
let fooStr: fooInterface<string> = foo;
```

### Generic Classes

```ts
// just like interface
class foo<T> {
  factor: T;
  result: (x: T) => T;
}
```

_Using above class_

<vc-table>
<template v-slot:cola>

```ts
// Number
let double = new foo<number>();
double.factor = 2;
double.result = function(x) {
  return x * this.factor;
};

console.log(double.result(3)); // 6
```

</template>
<template v-slot:colb>

```ts
// String
let fooStr = new foo<string>();
fooStr.factor = 'Hi';
fooStr.result = function(x) {
  return this.factor + ' ' + x;
};

console.log(fooStr.result('world')); // Hi world
```

</template>
</vc-table>

### Generic constraint

- use interface

```ts
interface fooInterface {
  length: number;
}

function foo<T extends fooInterface>(x: T): T {
  return x;
}
```

## keyof / extends keyof

```ts
// keyof
type Point = {x: number; y: number};
type PKey = keyof Point; // union  x | y

let obj: Point = {x: 3, y: 5};
let key1: PKey = 'x';
let key2: PKey = 'y';
// let key3:P = 'z'; // error
```

```ts
// extends keyof
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

let user = {
  name: 'umesh',
  role: 'frontend',
};

let name = getValue(user, 'name'); // umesh
let role = getValue(user, 'role'); // frontend
```

## Indexed access types

```ts
type foo = {x: number; y: string};

type fooX = foo['x']; // number
type fooY = foo['y']; // string
type fooXY = foo['x' | 'y']; // number | string
type fooKey = foo[keyof foo]; // same as fooXY ie number | string
```

## Conditional types

- Mostly Used with Generics

```ts
// Ex
interface Y {}
interface X extends Y {}

type s = X extends Y ? string : number; // string
type n = RegExp extends Y ? string : number; // number
```

```ts
// Ex
type c<T> = T extends {length: number} ? T : never;

let obj = {
  length: 3,
};
let arr = [3, 4, 5];
let str = 'hello';
let empty = {};

type c1 = c<typeof obj>; // { length: number }
type c2 = c<typeof arr>; // number[]
type c3 = c<typeof str>; // string
type c4 = c<typeof empty>; // never
```

## Mapped types

```ts
type X = {
  [prop: string]: string | boolean;
};

let x1: X = {
  name: 'umesh', // works
};
let x2: X = {
  age: 2, // error,
};
```

```ts
// in keyof
// modifier readonly is optional
type X<T> = {
  -readonly [prop in keyof T]: boolean;
};
type Y = {
  a: string;
  b: number;
};

type XY = X<Y>; // type xy = {a: boolean;b: boolean;}
```

## Template Literals

```ts
type x = "world";
type y = `Hello ${x}`; // `Hello world`

type x = number | string;
type y = `Hello ${x}`; // `Hello ${string}` | `Hello ${number}`
const foo1:y = "Hello"; // error
const foo2:y = "Hello "; // no error

type x = number | string;
type y = "a" | "b";
type z = `${y}_${x}`; // `a_${string}` | `a_${number}` | `b_${string}` | `b_${number}`

```

## _Intrinsic String Manipulation_

```ts
type x = 'Hello wORLD';
type up = Uppercase<x>; // "HELLO WORLD"
type low = Lowercase<x>; // "hello world"
type cap = Capitalize<x>; // "Hello wORLD"
type uncap = Uncapitalize<x>; // "hello wORLD"
```
