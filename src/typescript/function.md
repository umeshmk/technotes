# More on Functions

- My question on [Stackoverflow](https://stackoverflow.com/questions/70469713/functions-in-typescript)

## Function type expression

```ts
// def - (param:type) => returnType;
type callback = (x: string) => string;

// as arg
function foo(func: callback) {
  func('hello');
}

// as arrow function
const bar: callback = (str) => {
  return str;
};
```

## Signature

- Use this if _callback_ has some extra properties in addition to function defination

<vc-table>
<template v-slot:cola>

```ts
// call signature
type callback = {
  (s: string): string; // actual function
  x: number; // property  (callback.x)y
};
```

</template>
<template v-slot:colb>

```ts
// construct signature
type callback = {
  new (s: string): FooObject;
};
```

</template>
</vc-table>

## Generic Functions

- Use Generics when we have 2+ related variables ie used atleast 2 times.
- If no relation then don't use it.

<vc-table>
<template v-slot:cola>

```ts
// Generic
function foo<T>(x: T[]): T {
  return x[0];
}

foo([2, 4, 5]); // T = number
foo(['a', 'b']); // T = string

// arrow func (only type)
type fooType = <T>(x: T) => T;

// arrow func (def with type)
const foo2 = <T>(x: T) => x; // error since <T> is jsx
// const foo3 = <T,>(x: T) => x; // no error - just add comma
```

</template>
<template v-slot:colb>

```ts
// Generic + Union
function foo<T>(x: T[], y: T[]): T[] {
  return x.concat(y);
}

// Limit types for `<T>` when call
// T = string | number
let z = foo<string | number>([1, 2], ['hi']);
```

</template>
</vc-table>

### Generic + constraint

> Note : if `extends` is used then it can have more properties than what it extends.
>
> [playground](https://www.typescriptlang.org/play?#code/C4TwDgpgBAogHlAvFA3gMwPYYFwGdgBOAlgHYDmA3AL4UBQtaAriQMbBEYlROtQA8AFSgQ4wCCQAmuWHAB8ACjjYBAShS0oUAhGCMCXAORwDdKvR4t56LNgO5cBgDSaARgEMCt+w6oqKUAHoAqBY3LhExSRkGZksUd087ewNffyCQsOFRcQkoF0ZgKBIICCluLCg3aRZOQjdSYCA)

<vc-table>
<template v-slot:cola>

```ts
// Generic + constraint
// hard to read
function Max<T extends {length: number}>(x: T, y: T): T {
  if (x.length > y.length) return x;
  return y;
}
```

</template>
<template v-slot:colb>

```ts
// same but not possible to extend
// but, can be extended using intersection (&)
// easy to read
type T = {length: number};

function Max(x: T, y: T): T {
  if (x.length > y.length) return x;
  return y;
}
```

</template>
</vc-table>

## Overload

- **Avoid Overload if Union can be used.**

```ts
// overload signatures (atleast 2+)
function foo(num: number): number;
function foo(x: number, y: number): number;

// function implementation
function foo(xOrNum: number, y?: number): number {
  if (y) return xOrNum + y;
  return xOrNum * 2;
}

console.log(foo(3)); // 6
console.log(foo(3, 5)); // 8
```
