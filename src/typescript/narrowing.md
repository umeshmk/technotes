# Narrowing

- `typeof, instanceof` are type guards.

## typeof

- Note:
  - `typeof null` = object
  - `typeof []` = object
    <!-- - `typeof 0, NaN, "", 0n, null, undefined` = false -->

```ts
function foo(x: number | string): string {
  if (typeof x === 'number') {
    return x + 1; // number
  }
  return 'hello' x; // string
}
```

```ts
function foo(x: string | string[] | null): string {
  if (typeof x === 'object' && x) {
    // string[]
  }
  if (typeof x === 'object') {
    // string[] | null
  }
  if (typeof x === 'string') {
    // string
  }
  return x + '';
}
```

```ts
// == null - checks for both null, undefined
let foo = undefined;

if (foo == null) {
  console.log(foo); // undefined
}
```

## instanceof

```ts
function foo(x: string | Date) {
  if (x instanceof Date) {
    // Date
  }
  // string
}
```

## Assignment

```ts
let foo: number | string;

foo = 32;
foo = 'hi';
foo = true; // error
```
