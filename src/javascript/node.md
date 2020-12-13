# Nodejs

## Nodejs

:::tip Server Guide
How to create a server ?

[https://www.digitalocean.com/community/books/sysadmin-ebook-making-servers-work](https://www.digitalocean.com/community/books/sysadmin-ebook-making-servers-work)
:::

- Chrome's js engine ( V8 ) + modules

- **Modules**

  1. Inbuilt Api - ( files, http, readLine)
  2. 3rd party - (lodash, axios)
  3. User created modules

- Asynchronous
- Single thread (but multiple Worker threads)
- Uses callbacks

- **Good for**

  1. Non blocking
  2. Event driven
  3. Data intensive
  4. I/O intensive

- **Bad for**

  1. Data calculations
  2. Processor intensive
  3. Blocking operations

- No `window/document` object
- global object - `global.foo`
- `package.json` - Created by npm/yarn init

```sh
node (enter) process      # Gives process object
node foo.js               # running js file (.js is option)
```

```js
 const foo = require("./foo.js");

 // Exporting module

export default {
  // obj
}
export function name(params) {/**/}
export let foo = /*function/object/literal/variables*/

```
