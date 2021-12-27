# Object Types

- Ex - `Array<T>, Map<K, V>, Set<T>, and Promise<T>`

<vc-table>
<template v-slot:cola>

```ts
// way 1 - {}
function foo(x: {a: number; b: number}): number {
  // code
}

// way 2 - interface
interface XInterface {
  a: number;
  b: number;
}

function foo(x: XInterface) {
  // code
}
```

</template>
<template v-slot:colb>

```ts
// way 3 - Type alias

type xType = {
  a: number;
  b: number;
};

function foo(x: xType) {
  // code
}
```

</template>
</vc-table>

### undefined

```ts
// avoid undefined for optional property
// default value ->  y = 0
interface fooInterface {
  x: number;
  y?: number;
}

function foo({x, y = 0}: fooInterface) {
  return x + y;
}
```

### Readonly

```ts
interface Foo {
  readonly x: number;
}

function foo(obj: Foo) {
  obj.x = 34; // error
}
```

### Extending

<vc-table>
<template v-slot:cola>

```ts
interface A {
  x: number;
}
interface B {
  y: number;
}

interface Combo extends A, B {}
```

</template>
<template v-slot:colb>

```ts
interface A {
  x: number;
}
interface B {
  y: number;
}
// & = intersection
// almost same as extends
// difference is how error is handled
type Combo = A & B;
```

</template>
</vc-table>

### Generic

<vc-table>
<template v-slot:cola>

```ts
// interface
interface xyInterface<T> {
  x: T;
  y: T;
}

// usage
let num: xyInterface<number> = {
  x: 3,
  y: 6,
};
```

</template>
<template v-slot:colb>

```ts
// type alias
type xyType<T> = {
  x: T;
  y: T;
};

// we can use union
type xyOrNull<T> = xyType<T> | null;

// usage
let num: xyOrNull<number> = {
  x: 3,
  y: 6,
};

let num1: xyOrNull<null> = {
  x: null,
  y: null,
};

let num2: xyOrNull<null> = null;
```

</template>
</vc-table>
