# More on Functions

## Function type expression

```ts
// def - (param:type) => returnType;
type callback = (x: string) => string;

// function
function foo(func: callback) {
  func("hello");
}

// arrow function
const bar: callback = (str) => {
  return str;
};
```

## Signature

<vc-table>
<template v-slot:cola>

```ts
// call signature
type callback = {
  (s: string): string;
  x: number;
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
foo(["a", "b"]); // T = string
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
let z = foo<string | number>([1, 2], ["hi"]);
```

</template>
</vc-table>

### Generic + constraint

<vc-table>
<template v-slot:cola>

```ts
// Generic + constraint
// hard to read
function Max<T extends { length: number }>(x: T, y: T): T {
  if (x.length > y.length) return x;
  return y;
}
```

</template>
<template v-slot:colb>

```ts
// same as -  Generic + constraint
// easy to read
type T = { length: number };

function Max(x: T, y: T): T {
  if (x.length > y.length) return x;
  return y;
}
```

</template>
</vc-table>

## Overload

- Avoid Overload if Union can be used.

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
