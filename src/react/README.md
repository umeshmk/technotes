# React

[roadmap.sh/react](https://roadmap.sh/react)

- Add extensions
  - Vscode (provides **snippets** for es7, react, redux, components, etc)
  - Chrome
- JSX is optional. Use Babel Repl.

## v17

- No new feature but made easier to upgrade in future.
- **Event Delegation**
  - Click event on `<button onclick={handler}>` is actually attached to `document` or `root`
  - `< v17` - all events are attached to `document`
  - `> v17` - all events are attached to `root`
- New JSX Transform - Use JSX without importing React. No syntax change.

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
