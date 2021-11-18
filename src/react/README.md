# React

- A javascript library not framework.
- **Declarative views** - (Functional programming is Declarative)
  - Easy syntax
  - Good Debug
- **Component based**
  - Just javascript not templates (ie uses jsx)
  - Encapsulated state,
  - Easy to compose Complex UI
  - Keep state & DOM separate
- **Independent**
  - Use with any techstack, Any plugins
  - Works in - Browser, Nodejs(server side rendering), Mobile(ReactNative)
  - Build tools is optional - Even simple `react` & `react-dom` are enough for website.

<vc-img url="https://i.imgur.com/lSeQFDs.png" size=""/>

:::tip Helpful

- [roadmap.sh/react](https://roadmap.sh/react)
- Build Tools
  - Use `Create-react-app` with typescript _( also Check my [react-refresh-app](https://github.com/umeshmk/react-refresh-app) repo in my Github.)_
  - [vitejs.dev](https://vitejs.dev/)
- Snippets
  - [_ES7 React/Redux/GraphQL/React-Native snippets_](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) - _Recommended_
  - [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets) - _Not Recommended_.
- Fetch data - use [tannerlinsley/react-query](https://github.com/tannerlinsley/react-query)
- [typescript-cheatsheets/react](https://github.com/typescript-cheatsheets/react)

:::

- **React officially promotes functional components over class components.**
- **Also Hooks don't work in classes.**
- Add extensions
  - Vscode
  - Chrome
- JSX is optional but better. Use Babel Repl.

## v17

- No new feature but made easier to upgrade in future.
- **Event Delegation**
  - Events on any elements are actually attached to `document` or `root` instead of that element.
  - `v17` - `root.addEventListener`
  - `< v17` - `document.addEventListener`
- New JSX Transform - Use JSX without importing React. No change in syntax.

## Create-react-app

> Also try [Vite](https://vitejs.dev/)

- Integrated toolchain by Facebook
- Uses
  - Babel - compiler for jsx, es
  - Webpack - bundler
- No config needed.
- Why ? Adv - Scaling, liveediting, prod/dev env, preprocessors, 3rd-party npm libraries
- Recommended toolchain
  - SPA - create-react-app
  - SSR - Next.js
  - Static - Next.js & Gatsby

## Main Concepts

**_We have 2 trees_**

1. **React tree** (react elements - virtualDOM)
2. **DOM tree** (html elements - BrowserDOM)

### JSX

- JSX is extended js. (an xml like syntax)
- Syntactic sugar for `React.createElement()`
- It is optional.
- Compilation - Babel converts JSX to react elements objects
- **Markup & logic** stays together in a **loosely coupled** unit aka component.
- **JSX is an expression too** - can be returned from anywhere like `if, for, variables, arguments, function, etc`
- CamelCase
  - `class` --> `className`
  - `onclick` --> `onClick`
  - `tabindex` --> `tabIndex`
  - Except `aria-label` & `data-foo={bar}` which is same as html
- Dot Notation - `<Fpp.A>` , `<Fpp.B>` etc can used for related react components.
  - Export from same module once `export default Foo;`

```jsx
// passing multiple props using spread operator
let data = { name: "umesh", age: "31" };
return <Person {...data} />;

// also
let { foo, ...everythingElse } = props;
return <Person {...everythingElse} />;
```

```js
// First letter is capital
<foo> // html element
<Foo> // react component

// Prevents Injection attacks - Prevents xss cross-site attacks
// All VALUES are Escaped before render.
<div> html is unescaped </div>
<div> value is {escaped} </div>

// Ignored by { }
// Boolean, null, undefined

 // childrens here can be accessed using "props.children" in Foo component
<Foo>
  /** any childrens*/
</Foo>

// Only react objects. Can't use any other objects
<div>{new Date().toLocaleString()}</div> // works
<div>{new Date()}</div> // gives error
```

<vc-table>
<template v-slot:cola>

```jsx
<div /> // self closing tag

<div>{this}</div>; // Use Js

<div>foo</div>; // content

// nested
<div>
  foo
  <span>bar</span>
</div>;

// attributes (props & events)
<div
  className="bg-red"
  onClick={() => alert("clicked")}
  data-foo="bar"
  tabIndex="0"
>
  foo
</div>;
```

</template>
<template v-slot:colb>

```js
React.createElement("div", null);

React.createElement("div", null, this);

React.createElement("div", null, "foo");

React.createElement(
  "div",
  null,
  "foo",
  React.createElement("span", null, "bar")
);

React.createElement(
  "div",
  {
    className: "bg-red",
    onClick: () => alert("clicked"),
    "data-foo": "bar",
    tabIndex: "0",
  },
  "foo"
);
```

</template>
</vc-table>

### Rendering Elements

- **React element is an immutable object.**
  - We can't update but create a new react element for each render.
  - React element object creation is faster than creating BrowserDOM element objects.
- Babel will
  - _JSX --> React Syntax_
- React Core will
  - _React Syntax --> Immutable React objects (VirtualDOM)_
- ReactDOM will (Render)
  - _VirtualDOM --> Reconciliation slgorithm (old vs new VirtualDOM) --> Change only what's needed in BrowserDOM_

```js
ReactDOM.render(<div>Hello, {name}</div>, document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));
```

### Components and Props

- All react components must be **Pure Functions**
  - It will never modify arguments inputs
  - Same output for same input
  - React _state_ does not violate this rule
- Components are functions which takes `props` and return react element.
  - It can be a `class` too.
- We can use `return ( )` to avoid semicolons.
- Identify JSX as a
  - Component - `<Header></Header>`(First letter is capital)
  - Html element - `<header></header>`
- **`props` are read-only** which means `props.foo = "bar"` will give error
- Create extra new components if
  - Component is Complex
  - Component parts are Reused many times

<vc-table>
<template v-slot:cola>

```jsx
// functional component
function Welcome(props) {
  return (
    <div>
      Hello
      <span>{props.name}</span>
    </div>
  );
}
```

</template>
<template v-slot:colb>

```jsx
// class component
class Welcome extends React.Component {
  render() {
    return (
      <div>
        Hello
        <span>{this.props.name}</span>
      </div>
    );
  }
}
```

</template>
</vc-table>

- **Usage**

```jsx
<Welcome name="umesh" />
```

### State & Lifecycle

- State is
  - similar to Props
  - _private & controlled_ by component itself.
- Function components can't have `this.state` property because it doesn't create instances. (We can use Hooks though.)
- We need class component instance to add properties & methods like state, Lifecycle, etc.
- All `render()` calls will use single instance.
- Update state correctly
  - Use `setState` to change. Never mutate directly
  - State updates maybe Asynchronous

```jsx
class Welcome extends React.Component {
  // intialize state
  constructor(props) {
    super(props);
    this.state = { surname: "kadam" };
  }

  // setstate
  doSomething() {
    // this.state.surname = "kadammm"; // wrong (no re-render)
    this.setState({ surname: "kadammm" }); // right
  }

  // Lifecycle methods
  componentDidMount() {
    /*eg: addEventListener*/
    /*eg: setInterval*/
  }
  componentWillUnMount() {
    /*eg: removeEventListener*/
    /*eg: clearInterval*/
  }

  // render - everytime props/state changes
  render() {
    return (
      <div>
        Hello {this.props.name} {this.state.surname}
      </div>
    );
  }
}
```

**`setState` is merged.**

```js
constructor(){
  this.state = {name: 'umesh', surname:'kadam'}
}
change(){
  // internally surname will be merged with name
  this.setState({
    surname: 'kadammm'
  })
}
```

:::danger Asynchronous

- Sometimes `setState()` **Maybe** Asynchronous.
- For Performance, react may update a batch of multiple `setState` together making it Asynchronous.
- In JavaScript async code runs only after the end of current script.

```js
increment(){
  this.setState({count: this.state.count + 1});
}
incrementFunc(){
  this.setState((prevState, props)=>{
    return {count: prevState.count + 1};
  });
}

do(){
  // maynot work
  this.increment();
  this.increment();

  // works
  this.incrementFunc();
  this.incrementFunc();
}
```

:::

### Handling Events

- [Supported Events](https://reactjs.org/docs/events.html#supported-events)
- Synthetic Events
  - Based on standard from W3C SPEC
  - Cross browser compatible
  - Works NOT SAME as native browser events. There is some difference
- No need to call `addEvebtListener`
- In `class` we need to bind methods `this.handleClick = this.handleClick.bind(this);` if we call without parentheses like `<div onClick={this.handleClick} >`
  - No binding needed if we use arrow function - `<div onClick={() => this.handleClick();} >`. (NOT RECOMMENDED)

<vc-table>
<template v-slot:cola>

```html
<!-- html -->
<div onclick="handleClick();"></div>
```

</template>
<template v-slot:colb>

```jsx
// jsx
<div onClick={handleClick}></div>
// use "onClickCapture" if using capture
```

</template>
</vc-table>

```js
// event 'e' is a Synthetic event - cross browser wrapper for native events
// same interface as browser specific events
function handleClick(e) {
  // return false; // won't work
  e.preventDefault(); // work

  // e.nativeEvent; // native browser event (rarely needed)
}
```

_Function vs Class_

<vc-table>
<template v-slot:cola>

```jsx
// function
function Foo(props) {
  function handleClick() {
    /*code*/
  }

  return <button onClick={handleClick}></button>;
}
```

</template>
<template v-slot:colb>

```jsx
// class
class Foo extends React.Component {
  constructor(){
    // binding is must if using 'this' in function
    this.handleClick = this.handleClick.bind(this);
  }

  function handleClick() {
    /*code using 'this'*/
  }

  render() {
    return <button onClick={this.handleClick}></button>;
    // If you don't want to bind then use (not recommended)
    // onClick={ () => this.handleClick }
  }
}
```

</template>
</vc-table>

_Public class fields syntax (no need to bind)_

```js
handleClick = () => {
  /*code*/
};
```

_Passing arguments to event handlers(class)_

```jsx
// Best way I guess (passing data instead of args)
<button onClick={this.handleClick} data-id={id}></button>; //  'e.target.dataset.id' inside the function

<button onClick={(e) => this.handleClick(id, e)}></button>;
<button onClick={this.handleClick.bind(this, id)}></button>; // 'e' will be passed automatically
```

### Conditional Rendering

- To avoid rendering a component conditionally we can `return null;`.
  - But Lifecycle methods will still run.

```jsx
// way 1 - return JSX
function Foo(props) {
  if (props.doo) {
    return <Something />;
  }
  return <SomethingElse />;
}

// way 2 - Use variable
let button;
if (props.isDanger) {
  button = <ButtonDanger />;
} else {
  button = <Button />;
}

// way 3 - inline && operator
// if count=0 will give <div>0</div>
return (
  <div>
    {props.count > 0 && <soan>Foooooo</span>}
  <div/>
)

// way 4 - ternary operator
return (
  <div>
    {props.isDanger ? <ButtonDanger /> : <Button /> }
  <div/>
)
```

### Lists & Keys

- `key` always comes inside `map()`
- `key` must be unique among siblings. Not globally.
- `key` does not get passed to component. Pass it as props with another name.

```jsx
function List(props) {
  const list = props.numbers.map((num) => <li key={num}> {num} </li>);
  // index (not recommended)-  map((num, index) => <li key={index}> {num} </li>);
  return <ul>{list}</ul>;
}

// <List numbers={[5, 2, 6, 8]} />
```

### Forms

- Use formik or [react-hook-form](https://react-hook-form.com/)
- `input, select, textarea` have some internal state which is different from component state.
- Controlled Component
  - When we submit form, we use `e.preventDefault()` and then start handling form data manually instead of default browser behavior of visiting new page on submit.
  - Such components always uses react state only.
- `<input type="file">` value is read-only. Uncontrolled component. Can be uploaded or managed using `FileAPI`

```jsx
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
    // we can also get 'e.target.type' & 'e.target.name'
    // this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e){
    console.log(this.state);
    e.preventDefault();
  }

  render(){
    return (
    <form onSubmit={this.handleSubmit}>
      <input name="name" value={this.state.input} onChange={this.handleChange}>
      <input type='submit' value="Submit">
    </form>
    );
  }
}
```

_Select_

<vc-table>
<template v-slot:cola>

```html
<!-- html -->
<select>
  <option value="first">1</option>
  <option selected value="second">
    2
  </option>
  <option value="third">3</option>
</select>
```

</template>
<template v-slot:colb>

```jsx
// react jsx
<select value={this.state.select} onChange={this.handleChange}>
  <option value="first">1</option>
  <option value="second">2</option>
  <option value="third">3</option>
</select>
// <select value={[2,6,8]}  multiple={true}>
```

</template>
</vc-table>

### Lifting state up

- Focus on top-down data flow
- Instead of adding more states try deriving it from other props/states.

### Composition vs Inheritance

- Use Composition instead of inheritance
- **Specialization** - it is way of using composition to create specialized components.
  - eg: `<Button>` is generic, while `<DarkButton>` & `<LightButton>` are specific

<vc-table>
<template v-slot:cola>

```jsx
// adding random number of childrens
function Foo(props) {
  return <div>{props.children}</div>;
}

// create slots
return (
  <div>
    <h1>{props.car}</h1>
    <h3>{props.bike}</h3>
  </div>
);
```

</template>
<template v-slot:colb>

```jsx
// use component
<Foo>
  <h1>Hello</h1>
  <h3>world</h3>
</Foo>

// use slots
<Foo car={<Car />}  bike={<Bike />} />

```

</template>
</vc-table>

### Thinking in react

- Start with DataModel(json) & Design Mockups.
- Step 1: Break The UI Into A Component Hierarchy
  - Divide design Mockup into small components and define its heirarchy
  - SIngle responsibility for components.
- Step 2: Build A Static Version in React
  - Using props only. (don't use state at all)
- Step 3 - Identify the minimal but complete state needed for whole UI.
- Step 4 - Identify which component state should live
  - If it can be derived from props then do it. Don't create new state.
- Step 5: Add Inverse Data Flow
  - Simply pass `(x) => setFoo(x)` to child component as a prop.
- Lifting State up to nearest common ancestor (only if states are shared between components.)
  - Using props we can pass - _primitives, function & react elements_
  - _Inverse data flow_ is nothing keeping state in parent & passing function to update that state to child components.

## Advanced Guides

### Accessibility

- Yet TODO

### Code splitting

- Code-splitting - Split single bundle into multiple javascript files
- Why ?
  - For faster initial load
  - load other files only if required during runtime

**Option 1 - Dynamic imports**

- Webpack will automatically split.(needs some configs)
- Create-react-app is already configured.

```js
import('./foo).then((foo)=>{
  // code using use foo
})
```

**Option 2 - Lazy Loading**

- Will load the component javascript file only when it is rendered first time by react.
- Must be `export default` component
- Render it inside `Suspense`
- Use `ErrorBoundary` incase loading fails (like network error)
- _Route based code-splitting_ is good way to lazy load using `react-router-dom`.
  - Just put `<Switch>` inside `<Suspense>`
- Note - Lazy loading and Suspense are not available in SSR.

```jsx
// works both inside & outside function but keep outside to avoid rerendering
const MyDynamicComponent = React.lazy(() => import("./MyDynamicComponent"));

function App(props) {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <MyDynamicComponent />
    </Suspense>;
  )
}
```

### Context

- Share data (eg: theme, language, user, data-cache, etc) globally to many components.
- Why ? - If we use top-down waterfall model for data sharing then we have to keep passing props throung all intermediate components
- `<ThemeContext.Provider value = {theme}`
  - `.Provider` & `value` are always required. Can't use any other name than `value`
- We can have nested Providers overriding other Providers.
- See Examples - [https://reactjs.org/docs/context.html#examples](https://reactjs.org/docs/context.html#examples)
- Cons/Caveats
  - Makes component reuse difficult. Alternative is Component Composition (only for simple projects)
  - Uses reference identity to determine when to re-render.
    - If Provider's parent re-render - might create unintentional re-renders in consumers too.

```jsx
// it's outside the function App (mostly in separate file)
// light is default (used only if the component using it has no matching Provider as it's Parent )
const ThemeContext = React.createContext("light");

function App() {
  // we can change value from light to dark
  return (
    <ThemeContext.Provider value="dark">
      <Anything />
    </ThemeContext.Provider>
  );
}

// Any child inside Provider has access to context
// 2 variable handled by react -  contextType & this.context
// this.context will use nearest Provider ancestor
class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  return (
    <Button theme={this.context}>
  )
}
```

- _**Component composition** is a good alternative to context._ See [#composition-vs-inheritance](#composition-vs-inheritance)

```jsx
// Here we pass component instead of props

function App(props) {
  const child = <Child foo={props.foo} bar={props.bar} />;

  return (
    <div>
      <Parent child={child}>
    </div>
  );
}

// Parent will render as slot
function Parent(props) {
  return (
    <div>
      {props.child}
    </div>
  );
}
```

**Context.Consumer**

- Updating Context from a Nested Component - Use a Button `'ToggleTheme'`
  - But logic to change that theme should be globally like in `<App >` which uses Provider

```jsx
// Using context value in functional component
<ThemeContext.Consumer>
  { (value) =>  (<Button theme={value}>) }
</ThemeContext.Consumer>

```

### Error Boundaries

- It is a component
- Will show fallback UI if javascript error occurs inside this component.
- Can't use `try/catch` - since react is Declarative not imperative.
- NOT useful for
  - Asynchronous errors
  - SSR
  - Event handlers
- Only class components can be error Boundaries
- Most likely use it once and use anywhere
- IMO, Not muxh useful - See reference for more.

### Forwarding Refs

- Usecase ? - when parent component wants ref to an html element (DOM node, not component) that is inside it's child component. Child will forward it from parent to html element. This way parent gets access.
- `(props, ref)` - ref is not passed to functional components.
  - To use it, pass component as arg to `forwardRef((props,ref) => {...})`
- Ref are Used for focus, animations, selection, etc

```jsx
// forward ref to child DOM element
const FancyButton = React.forwardRef((props, ref) => {
  return <button ref={ref}> {props.children} </button>;
});

// create ref & pass
const ref = React.createRef(); // we can access DOM element using "ref.current.focus()"
return (
  <div>
    <FancyButton ref={ref}> Click me </FancyButton>
  </div>
);
```

**Using Higher order components (HOC)** - (_AVOID HOC - USE HOOKS_)

```jsx
// Define HOC
function logging(WrappedComponent) {
  class Logging extends React.Component {
    // do some logging

    render() {
      const { myRef, ...rest } = this.props;
      return <WrappedComponent {...rest} ref={myRef} />;
    }
  }

  return React.forwardRef((props, ref) => {
    <Logging {...props} myRef={ref} />;
  });
}
```

```jsx
// Define components (export HOC not component)

class FancyButton extends React.Component{
  // do something on focus
}
export logging(FancyButton);

class FancyInput extends React.Component{
  // do something on focus
}
export logging(FancyInput);
```

```jsx
// Define App
const ref = React.createRef();

<FancyButton ref={ref}> Click me </FancyButton>;
```

### Fragments

- Return multiple elements

```jsx
// without Fragment
return (
  <div>
    <dt>Foo</dt>
    <dd>Foo description</dd>
  </div>
);

// with Fragment
return (
  <React.Fragment>
    <dt>Foo</dt>
    <dd>Foo description</dd>
  </React.Fragment>
);

// short syntax
return (
  <>
    <dt>Foo</dt>
    <dd>Foo description</dd>
  </>
);
```

### Higher Order Components

- AVOID - Use Hooks to share logic
- Not a part of React, but a Pattern.
- Allows to reuse common logic for various components. (common in 3rd party libraries like Redux's connect)
- A function with
  - Input - A component
  - Output - Modified component

Say we have this 2 components with similar logic but slightly different like urls

<vc-table>
<template v-slot:cola>

```js
class Foo extends React.Component {
  componentDidMount() {
    // logging
    // data from "/data/foo" url
  }
  render() {
    // jsx
  }
}
```

</template>
<template v-slot:colb>

```js
class Bar extends React.Component {
  componentDidMount() {
    // logging
    // data from "/data/bar" url
  }
  render() {
    // jsx
  }
}
```

</template>
</vc-table>

We can reduce the repeation of logic (`componentDidMount()` method) using HOC

```jsx
// HOC - returns a new component
function subscription(WrappedComponent, dataUrl) {
  return class extends React.Component {
    componentDidMount() {
      // logging
      // data fetching from  dataUrl
    }

    render() {
      const { something, ...rest } = this.props;
      return <WrappedComponent {...rest} something={something} />;
    }
  };
}
```

```jsx
// In App

// outside render() to help reconciliation
const FooWithSubscription = subscription(Foo, "data/foo");
const BarWithSubscription = subscription(Bar, "data/bar");

// inside render()
<FooWithSubscription />
<BarWithSubscription />
```

**Conventions**

- Don;t mutate `WrappedComponent` like using `WrappedComponent.prototype.zoozoo`
- Don't use HOC inside `render()`.
- Copy Non-React Static methods using `hoist-non-react-statics`
- For Refs check [#forwarding-refs](#forwarding-refs)

### Integrating with Other Libraries

- WIth Jquery & Backbone (AVOID)

### JSX in Depth

- Refer to [/technotes/react/#jsx](/technotes/react/#jsx)

### Optimizing Performance

- Use Production build.
- Profiling Components with the
  - Chrome Performance Tab
  - DevTools
- Virtualize Long Lists (eg: 1000's of rows in tables) - Use windowing technique `react-window` or `react-virtualized`
- Avoid Reconciliation
  - To prevent DOM update we must stop re-rendering using `return true/false` from `ShouldComponentUpdate(prev, new)`
  - So reconciliation will not take place since re-render did not happen.
- The Power Of Not Mutating Data
  - Do not mutate props/state
  - Use `concat, ...spreadsyntax` instead of `push` in array
  - Use `Object.assign()` or `...objectspread syntax`
  - Deeply nested objects ? - use Immer or immutability-helper.

### Portals

- Use incase like `z-index, overflow` or `modals, tooltips, etc`

```jsx
// child = element, string, fragment - (anything that renders)
// DOMElement = Any html element regardless of location
render(){
  return ReactDOM.createPortal(child, DOMElement);
}
```

- Portal can be anywhere in DOM tree. **But it's position is same in React tree**. So we can use events bubbled from portal to Parent.

### Profiler

- Check _react DevTools_.
- Statistics for component like how many time component renders.
- Refer to reference for more.

```jsx
// App.js
return (
  <div>
    <Profiler id="header" onRender={callback}>
      <Header />
    </Profiler>
    <Profiler id="main" onRender={callback}>
      <Main />
    </Profiler>
  </div>
);
```

### Reconciliation

- Uses react's diffing algorithm. It check each node in virtualDOM in breadth-first search pattern.
- Checks for - Element Type, attributes & childrens (and keys)
- Re-render means calling `render()` not mount/unmount component
- After Re-render React will check for any difference in previous and new React tree. Then update DOM only for changed element.
- Always use `key` attribute for list items. Never use array `index` or `Math.randow()`
- Check reference for more
- **ReactFiber** is the new reconciliation engine in React 16.

### Refs and DOM

- Refs is used to access
  1. DOM Nodes
  2. React Class Elements (Note - Cannot access functional components because it does not have instances)
  3. Inside React Function Elements (must use `forwardRef`)
- When to use ? - focus, select, animations, 3rd party DOM libraries, etc
- `React.createRef` is latest and `callback ref` is older way to implement Refs.
- Don't overuse Refs.

```jsx
class Foo extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef(); // access using "this.myRef.current"
  }
  render() {
    return <div ref={this.myRef}>Helloworld</div>;
    // return <MyText ref={this.myRef}>Helloworld</MyText>; // incase of class component
  }
}
```

### Render Props

> AVOID - Use Hooks

- Sharing code between components using prop who's value is a function.
  - Code is nothing but behavior that we need to share (portable)
- Used by `react-router, downshift, formik`

_Components which share same behavior_

<vc-table>
<template v-slot:cola>

```jsx
// Foo
<>
  <div>This is Foo</div>
  <div>{this.props.data}</div>
</>
```

</template>
<template v-slot:colb>

```jsx
// Bar
<>
  <div>This is Bar</div>
  <div>{this.props.data}</div>
</>
```

</template>
</vc-table>

_Behaviour - reusable_

```jsx
class Behaviour extends React.Component {
  // code
  // some state.data  eg mouse position
  doSomething() {
    // manipulate state.data on some event eg onMouseMove
  }
  render() {
    return (
      <>
        <div>This is shared behavior</div>
        {this.props.render(this.state.data)}
      </>
    );
  }
}
```

_Use Behaviour_

```jsx
// App
// Note - we can use any name instead of "render="
<>
  <div>This is app. </div>
  <Behaviour render={(data) => <Foo data={data}>} />
  <Behaviour render={(data) => <Bar data={data}>} />
</>
```

### Static type checking

- Use Typescript or Flow.
- Avoid PropTypes.

### StrictMode

- In development only
- Identifies errors
  - Unsafe lifecycles
  - Legacy API
  - Deprecated API like `findDOMNode()`
- No UI just like fragment

```jsx
<React.StrictMode>
  <App />
</React.StrictMode>
```

### Uncontrolled Components

- Form data is handled by
  - React component - Controlled (Recommended)
  - Dom - Uncontrolled
- Adv - Integrate react and non react code
- `<input type="file">` value is read-only. Uncontrolled component.

### Web components

- React component - Sync virtualDOM & UI
- Web component - Encapsulation for reuse
  - **ShadowDOM** is a browser technology used for scoping variables and css in web components.
- Mostly we use only react.
- But, we can use both react & web inside each other, together.

## Hooks

[technotes/react/react-hooks](/react/react-hooks.html)

## Testing

### Testing Overview

- 2 ways
  - _Render component tree_ - just check output (_Jest , React-testing-library_)
  - _Run Complete App_ - end-to-end Testing (_Cypress_)
- Difference between _“unit” and “integration”_ tests ? - Can be blurry. Depends on team & product.
- _Jest_ - A test runner which provides `jsdom` to access DOM
- _React-testing-library_ - A set of helpers to test react components. Implementation details of component is not needed.
- [Jest vs React-testing-library](https://stackoverflow.com/questions/66341449/testing-library-react-vs-jest)
- _create-react-app_ has both Jest and React Testing Library

## FAQs

### Ajax

- Use Axios or Fetch
- We can use `catch()`. The comment is old one. Src - [stackoverflow](https://stackoverflow.com/questions/65985507/why-shouldnt-i-use-catch-to-handle-errors-in-react-useeffect-api-calls)
