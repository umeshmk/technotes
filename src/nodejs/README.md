# Nodejs

## Nodejs

---

- Js runtime environment
- Chrome's js ( V8 ) + modules
- Modules

  1. Inbuilt Api - ( files, http, readLine)
  2. 3rd party Npm - (lodash, axios)
  3. My own project modules

- For utility like Webpack,gulp,etc
- nvm - node version manager
- Asynchronous
- Single thread (multiple Worker threads)
- Uses callbacks

- Good for

  1. Non blocking
  2. Event driven
  3. Data intensive
  4. I/O intensive

- Bad for

  1. Data calculations
  2. Processor intensive
  3. Blocking operations

- gf
- "node" cmd for REPL
- no window, document object
- global object (global.foo)
- "node (enter) process" - process object
- "node foo.js" - running js file (.js is option)
- var f = require("./foo.js")
- module.exports = ……
- module.exports.foo = ……
- exports.foo = ……
- exports = …… (is error)
- where …... = function, object, array, etc
- package.json
- "node_modules" folder (global & local)
