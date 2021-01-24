# React

[roadmap.sh/react](https://roadmap.sh/react)

- Add extensions
  - Vscode
  - Chrome
- JSX is optional but better. Use Babel Repl.

## v17

- No new feature but made easier to upgrade in future.
- **Event Delegation**
  - Events on any elements are actually attached to `document` or `root` instead of that element.
  - `< v17` - attached to `document` (new way)
  - `> v17` - attached to `root`
- New JSX Transform - Use JSX without importing React. No change in syntax.

```js
// JSX
function App() {
  return <h1>Hello World</h1>;
}

// OLD compilation
import React from "react"; // Manual added in JSX
return React.createElement("h1", null, "Hello world");

// New compilation
import { jsx as _jsx } from "react/jsx-runtime"; // Inserted by a compiler (don't import it yourself!)
return _jsx("h1", { children: "Hello world" });
```
