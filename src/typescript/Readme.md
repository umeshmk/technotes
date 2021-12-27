# Typescript

> v4.2

:::tip Resources

- [Reference](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [typescriptlang.org](https://www.typescriptlang.org/docs/handbook/intro.html)
- **Typescript + React**
  - [reactjs.org/docs/static-type-checking](https://reactjs.org/docs/static-type-checking.html#typescript)
  - [github.com/piotrwitek/react-redux-typescript-guide](https://github.com/piotrwitek/react-redux-typescript-guide)
  - [github.com/typescript-cheatsheets/react](https://github.com/typescript-cheatsheets/react)
  - [sitepoint.com/react-with-typescript-best-practices/](https://www.sitepoint.com/react-with-typescript-best-practices/)
  - Youtube - [React+Typescript app example](https://www.youtube.com/watch?v=sfmL6bGbiN8)
  - (Archived) [Microsoft/TypeScript-React-Conversion-Guide](https://github.com/Microsoft/TypeScript-React-Conversion-Guide#typescript-react-conversion-guide)

:::

```sh
# install
yarn add typescript
tsc index.ts
tsc index.ts -w # watch

#  tsconfig.json
tsc --init # create
tsc -w # watch
```

_tsconfig.json_

- **Predefined `tsconfig.json` for env like react, node, vite, deno, etc**
  - [https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#tsconfig-bases](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#tsconfig-bases)

```json
{
  "compilerOptions": {
    "target": "ES6",
    // "lib": ["dom", "es6"],
    "rootDir": "./src",
    "outDir": "./dist"
  }
}
```

## Everyday Types

### Types

| Importance | Types                              |
| ---------- | ---------------------------------- |
| _High_     | `string, boolean, number, Array[]` |
| _Medium_   | `object{}, tuple, enum, Function`  |
| _Low_      | `null, void, unknown`              |
| _Avoid_    | `any, never, undefined`            |

### Implicit/Explicit

```ts
// implicit - const vs let
const foo = 'hello world'; // foo: "hello world" - a Literal type
let foo = 'hello'; // foo: string

// Explicit types - only let
let foo: string = 'a string';
let foo: number = 5;
let foo: string[] = ['foo', 'bar'];
```

### Literal type

```ts
interface User {
  name: string;
  gender: 'male' | 'female' | 'unspecified'; // not string but specific values only
}

let user: User = {
  name: 'umesh',
  gender: 'male',
};
```

### Array

```ts
const foo: number[] = [1, 3];
const foo: readonly number[] = [1, 3]; // No push/pop

const bar: Array<number> = [1, 3]; // same as above
const bar: ReadonlyArray<number> = [1, 3]; // No push/pop

const doo: [number, string] = [1, 'hello']; // TUPLE - fixed number(and types) of items
```

### Function type

```ts
// Ex - Function type
let foo: Function;
// foo = 3; // error

// Ex - () => {}
let myFunc: (a: number, b: number) => number = (x, y) => {
  return x + y;
};

// Ex - callback
let myFunc2: (a: number, cb: (x: number) => number) => number = (
  x,
  callback
) => {
  return callback(x);
};

let twice = (num: number) => num * 2;
let thrice = (num: number) => num * 3;
console.log(myFunc2(5, twice)); // 10
console.log(myFunc2(5, thrice)); // 15
```

### Object

```ts
const user: {name: string; age: number; gender?: string} = {
  name: 'umesh',
  age: 31,
  //   gender: 'male' // optional property
};
```

### Union

```ts
// Union function
let getLen = (params: string | string[]) => {
  return params.length;
};
getLen('foo'); // 3
getLen(['foo', 'bar']); // 2
getLen(23); // error
```

### Interfaces & Type Aliases

- Almost similar.
- Can be used together too.

<vc-table>
<template v-slot:cola>

```ts
// interface
interface UserInterface {
  id: number;
  name: string;
}

let user: UserInterface = {
  id: 23,
  name: 'umesh',
};
```

</template>
<template v-slot:colb>

```ts
// type aliases
type ID = number;
type NAME = string;
type STATUS = 'Block' | 'Unblocked';

// EX
type User = {
  id: number;
  name: string;
};

// Ex - Tuple (a strict array)
type mytype = [string, number];
let x: mytype = ['foo', 23];
```

</template>
</vc-table>

### Type vs Interface

- `type` is immutable.

<vc-table>
<template v-slot:cola>

```ts
// allowed in interface
// both id & name will be required
interface UserInterface {
  id: number;
}
interface UserInterface {
  name: string;
}
```

</template>
<template v-slot:colb>

```ts
// Error - duplicate identifier
type UserInterface = {
  id: number;
};
type UserInterface = {
  name: string;
};
```

</template>
</vc-table>

### Type casting/assertion

- Type assertion is not same as casting.

```ts
// --- ex
let page: unknown = '23';
let pageNumber = page as number;

// --- ex
let page: string = '23';
let pageNumber = (page as unknown) as number;

// --- ex
const x = 'hello' as number; // error
const x = ('hello' as unknown) as number; // works
```

```ts
// assertion means here code temporarily lies to compiler
// that {} is of type IUser since it will be set soon
const [user, setUser] = React.useState<IUser>({} as IUser);

// later...
setUser(newUser);
```

### null/undefined

- use `!` at end of variable - value isn’t null or undefined
- see **Working with DOM** below

### Unknown type

```ts
// UNKNOWN
let foo: unknown;
let bar: string;

foo = 23;
foo = 'umesh';

// case 1
bar = foo; // error

// case 2
if (typeof foo === 'string') {
  bar = foo; // no error
}
```

### Never type

- return type of function

```ts
function generateErrorVoid(message: string, code: number): void {
  // return ; // no error
  return ''; // error (string is returned)
}

function generateError(message: string, code: number): never {
  // return; // error
  throw {message: message, errCode: code}; // useful
}
```

## Interfaces

```ts
// first letter is capital
// class = User and interface = UserInterface
interface UserInterface {
  name: string;
  age: number;
  hobby?: number; // optional
  greet(): string; // return type
}
let user: UserInterface = {
  name: 'foo',
  age: 23,
  // error - greet is missing error
};
```

## Working with DOM

```ts
// Note - Use `.ts` file and not typescript Playground

// input
let input = document.querySelector('#name'); // error

// case 1 - add !
let input = document.querySelector('#name')!; // no error - adding ! means #name will be definately available during runtime

// case 2 - add type check
let input = document.querySelector('#name'); // just adding ! means #name will be definately available during runtime
if (input) {
  // code
}
```

```ts
let input = document.querySelector('#name') as HTMLInputElement;
let value = input.value;

// add listener
input.addEventListener('click', (event) => {
  let target = event.target as HTMLInputElement;
  console.log(target.value);
});
```

## Classes

- `private, protected, public`

```ts
class User {
  id: number; // public is default
  protected name: string;
  private age: number;
  readonly something: string;
  static readonly blablah: string = 'hooohaaaa'; // User.blablah

  constructor(name: string, age: number) {
    // error 'id' has no initializer (must be initialized or use '!' like id!)
    this.name = name;
    this.age = age;
    this.something = name + age; // readonly except in constructor
  }
}

let foo = new User('foooo', 23);
```

```ts
// interface
interface UserInterface {
  greet(): string;
}
class User implements UserInterface {
  // code something

  greet() {
    return 'Hello';
  }
}

// inheritance
class Admin extends User {
  // code
}
```

## Generics in Typescript

- Generics allows us to provide different datatypes ie dynamic datatypes
- `<T>` means we can provide different datatypes

```ts
// <T> - no constraint and T can be anything
// <T extends object> - constraint that T must be object only
// <T extends {length:number}> - constraint that T must be object with length property

// add constraint - <T> must be object
const addId = <T extends object>(obj: T) => {
  let id = Math.random().toString(16);
  return {
    id,
    ...obj,
  };
};

interface UserInterface {
  name: string;
}

let user: UserInterface = {
  name: 'foo',
};

// let result = addId(user); // works (implicit)
let result = addId<UserInterface>(user); // better reading (explicit)
```

```ts
// Generics with interface
interface UserInterface<T, V> {
  name: string;
  data: T;
  info: V;
}

const user1: UserInterface<{meta: string}, string> = {
  name: 'foo',
  data: {
    meta: 'bar',
  },
  info: 'hello',
};
```

## Enum

- Recommend - Use for constants in application

```ts
// Enums
// Alternatives is to use Union of strings like 'On'|'Off'

enum StatusEnum {
  On, // can be capital letters too
  Off,
  Loading = 'Pending', // equal not colon (:)
}

// let foo: StatusEnum = 'On'; // not assignable
let foo: StatusEnum = StatusEnum.On;

console.log(StatusEnum.On); // 0
console.log(StatusEnum.Off); // 1
console.log(StatusEnum.Loading); // Pending
```

It is common to use Enums inside Interfaces

```ts
interface UserInterface {
  name: string;
  status: StatusEnum;
}
```
