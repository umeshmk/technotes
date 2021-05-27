# React

<vc-img url="https://i.imgur.com/lSeQFDs.png" size=""/>

:::tip Helpful

- [roadmap.sh/react](https://roadmap.sh/react)
- [Full React Course 2020 - FreeCodeCamp (youtube)](https://www.youtube.com/watch?v=4UZrsTqkcW4)
- Use `Create-react-app` with typescript _( also Check my [react-refresh-app](https://github.com/umeshmk/react-refresh-app) repo in my Github.)_
- Snippets
  - [_ES7 React/Redux/GraphQL/React-Native snippets_](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) - _Recommended_
  - [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets) - _Not Recommended_.
- Fetch data - use [tannerlinsley/react-query](https://github.com/tannerlinsley/react-query)
- [usehooks.com](https://usehooks.com/)

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

## Main Concepts

**_We have 2 trees_**

1. **React tree** (react elements)
2. **DOM tree** (html elements)

### JSX

- JSX is extended js.
- JSX return an object.
- CamelCase
  - `class` --> `className`
  - `onclick` --> `onClick`
  - `tabindex` --> `tabIndex`
- Except `data-foo={bar}` which is same as html

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

- ReactDOM does the job of rendering react elements on DOM
- **React elements are immutable.** So we can't update but create a new one using `ReactDOM.render()`.
- React will
  - _JSX --> React objects_
- ReactDOM will
  - _React objects --> Render --> Paint to BrowserDOM_
  - Compare the new & old renders
  - Update the BrowserDOM with only the changed elements.
    - **Why ? - Because BrowserDOM API is slower than JavaScript objects.**

```js
ReactDOM.render(<div>Hello, {name}</div>, document.getElementById("root"));
```

### Components and Props

- Components are functions which takes `props` and return react element.
- We can use `return ( )` to avoid semicolons.
- Identify JSX as a
  - Component - `<Header></Header>`(First letter is capital)
  - Html element - `<header></header>`
- **`props` are read-only** which means `props.foo = "bar"` will give error

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

- State is _private & controlled_ by component itself.
- Function components can't have state property because it doesn't create instances. (We can use Hooks though.)
- We need class component instance to add properties & methods like state, Lifecycle, etc.
- All `render()` calls will use single instance.

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

:::danger Asynchronous

- Sometimes `setState()` **Maybe** Asynchronous.
- It may update a batch of multiple `setState` together making it Asynchronous.
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

### Handling Events

- [Supported Events](https://reactjs.org/docs/events.html#supported-events)

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
- `<input type="file">` value is read-only. Uncontrolled component.

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
- Divide design Mockup into small components
- SIngle responsibility for components.
- Build Static version using props only. (don't use state at all)
- Identify the minimal state needed.
  - Values can be derived from other states/props to keep it minimum
- Lifting State up to nearest common ancestor (only if states are shared between components.)
  - Using props we can pass - _primitives, function & react elements_
  - _Inverse data flow_ is nothing keeping state in parent & passing function to update that state to child components.

## Advanced Guides

### Accessibility

- Yet TODO

### Code splitting

- Code-splitting means having multiple bundles which are dynamically loaded during runtime.

**Option 1 - Dynamic imports**

- Webpack will automatically split.(needs some configs)[works on my create-refresh-app]
- Create-react-app is already configured.

```js
import('./foo).then((foo)=>{
  // code using use foo
})
```

**Option 1 - Lazy Loading (Best)**

- Route based code-splitting is good way to lazy load using `react-router-dom`.

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
- We can have nested Providers overriding other Providers.
- See Examples - [https://reactjs.org/docs/context.html#examples](https://reactjs.org/docs/context.html#examples)
- Cons
  - Makes component reuse difficult

```jsx
// it's outside the function App
const ThemeContext = React.createContext("light"); // light is default

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

```jsx
// Using context value in functional component
<ThemeContext.Consumer>
  { (value) =>  (<Button theme={value}>) }
</ThemeContext.Consumer>

```

### Error Boundaries

- It is nothing but a component which will show fallback UI if error occurs else show `props.children`
- Only class components can be error Boundaries
- Most likely use it once and use anywhere
- See reference for more.

### Forwarding Refs

- Useful for reusable libraries or leaf components like `FancyButton, MyTextInput`
- Refs to DOM elements for actions like focus, animations,selection, etc
- A component gets a refs and then forward it to it's DOM children

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

**Using Higher order components (HOC)**

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

- A Pattern - Allows to reuse component logic. (common in 3rd party libraries like Redux)
- A function - It takes a component and returns a new modified component

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

- Refer to official reference

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

- Portal can be anywhere in DOM tree. **But it's position is same in React tree**. So we can use events bubbled from portal to Parent. (Remember this events are not html events but SyntheticEvents used by react & so it works correctly.)

### Profiler

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

- Checks for - Element Type, attributes & childrens (and keys)
- Re-render means calling `render()` not mount/unmount component
- After Re-render React will check for any difference in previous and new React tree. Then update DOM only for changed element.
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

> Maybe it's replaced by Hooks ?

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

### StrictMode

- In development only
- Identifies errors
- No UI just like fragment

```jsx
<React.StrictMode>
  <App />
</React.StrictMode>
```

## Hooks

- Hooks are just functions.
- Hooks don't work in Class.

:::danger Why Hooks ?
**Reusing Logic (Leads to wrapper hell)**

- HOC
- Render Props

**Huge Components**

- Similar things in different places like subscribe/unsubscribe in `componentDidMount/componentWillUnMount`

**Classes are confusing**

- Hooks allows us to use all react features without class

**Mixins are bad**

**State Management Libraries**

- Makes component reuse difficult

:::

### Rules of Hooks

- Linter will implement the rules.
- React depends on order of the Hook calls in a component
- Rules
  1. Don't call hooks inside - loop, conditions & nested functions.
  2. Call from - Function Component & Custom Hooks

### useState

- In class `this.setState({foo:3, bar:4})` - states are merged. But in hooks its replaced.

```jsx
import React, { useState } from "react";

function Foo(props) {
  // intialValue can be object, string, number, array etc
  // returns a value & function to update value
  const [value, setValue] = useState(initialValue);
  const [state2, setState2] = useState(initialValue2); // can use multiple times

  // set next value
  setValue(nextValue);

  // set next value - using prev value
  setValue((prev) => {
    // calculate next value using prev
    //
    // return next value
    // If object, we can also merge other values {...prevValues, nextValue}
  });

  // if next === prev then no re-render takes place
}
```

### useEffect

- Used in - Data fetching, subscription, DOM changes, etc
- Called after every render like (but after DOM is updated) - `componentDidMount, componentDidUpdate & componentWillUnMount`
- Most of the effects are Asynchronous. But for some synchronous effect like measure layout we have a `useLayoutEffect`
- 2 Types
  - Needs cleanUp (to avoid memory leak) - eg: subscription
  - No cleanUp - eg: Logging, data fetching, DOM changes

```jsx
function Foo(props) {
  // we can use multiple effects. They maintain the same order as written.
  useEffect(() => {
    // This inner function is different everytime render is performed.
    // Because in js each function is separate when created.
    // ()=>{} === ()=>{} // false
    // Helps maintain the correct state

    return () => {
      // clean up function called after every render. This helps to avoid bugs
    };
    // re-run if atleast 1 value is changed after render. COmpare prev & current render.
    // pass empty [] to run effect only once after mounting
  }, [foo, bar]);
}
```

### useContext

- If context changes then react will re-render

```jsx
import MyContext from "./path/MyContext";

function Foo(props) {
  // value passed depends on <MyContext.Provider value="..."> ancestor
  const myValue = useContext(MyContext);
}
```

### useReducer

- An alternative to `useState` if state is complex & state updates are adhoc
- It's similar to Redux

```jsx
const initialState = {
  /*.....*/
};

// optional
// function initFunc(initialArgs) {
//   return {
//     /*.....*/
//   };
// }

function Foo(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // optional
  // const [state, dispatch] = useReducer(reducer, initialArgs, initFunc);
}

// reducer is a function
// (preState, action) => nextState
function reducer(prevState, action) {
  switch (action.type) {
    case "FOO":
      // calculate
      return { ...prevState, newFoo };
    case "BAR":
      // calculate
      return { ...prevState, newBar };

    // optional
    case "RESET":
      return initFunc(action.payload);

    default:
      throw new Error("Invalid action type");
  }
}
```

### useCallback/useMemo

- Used for Optimization - Cache & avoid heavy calculations on every render based on dependencies.

```jsx
// useCallback(func, deps) === useMemo(() => func, deps )

// returns callback
const memoizedCallback = useCallback(() => {
  // This function is a memoization function
  // It will cache the value until dependencies changes
}, [input]);

// returns value
const memoizedValue = useMemo(() => /*somethingHeavy(a, b);*/, [a, b]);
```

### useRef

- Used to store an immutable object.
- But it's `obj.current` can be mutated on render.
- A change in `obj.current` won't trigger re-render

```jsx
// create
//   - initialValue is .current
const inputEl = useRef(initialValue) // initialValue can be null or some value.

// add
<input ref={inputEl} type="text" />

// use
inputEl.current.focus()
```

### Building your own hooks

```jsx
function Foo(props) {
  // call useMyCustomHook() with any arg value which can be state/prop too.
}

function useMyCustomHook(value) {
  // use react builtin hooks
  // can be state or effect or anything
  //
  // value is optional
  //
  // return any state values or anything else needed
}
```

### Hooks FAQ

- Adoption strategy
  - No hook for `componentDidCatch`
  - Redux and React-router supports hooks
- From classes to hooks
  - `useRef.current` is like property of some class INSTANCE.
