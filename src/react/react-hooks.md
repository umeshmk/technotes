# React Hooks

::: tip

- [https://usehooks-ts.com/](https://usehooks-ts.com/)
- [https://github.com/enaqx/awesome-react#react-hooks](https://github.com/enaqx/awesome-react#react-hooks)
- [https://github.com/rehooks/awesome-react-hooks](https://github.com/rehooks/awesome-react-hooks)
- [Thinking in React Hooks](https://wattenberger.com/blog/react-hooks)
- [usehooks.com - Easy to understand React Hook recipes](https://usehooks.com/)
- [usehooks.com](https://usehooks.com/)
- [useful-custom-react-hooks](https://github.com/WebDevSimplified/useful-custom-react-hooks/tree/main/src)

:::

- Hooks are just functions.
- Hooks don't work in Class.
- Optional
- No breaking changes

:::danger Why Hooks ?
**Reusing Logic (Leads to wrapper hell)**

- HOC
- Render Props

**Huge Components**

- Similar things in different places like subscribe/unsubscribe in `componentDidMount/componentWillUnMount`

**Classes are confusing**

- Hooks allows us to use all react features without class
- Bad for minifying, hot reload, etc

**Mixins are bad**

**State Management Libraries**

- Makes component reuse difficult

:::

## Rules of Hooks

- Linter will implement the rules - `eslint-plugin-react-hooks`
- React depends on order of the Hook calls in a component
- Rules
  1. Don't call hooks inside - loop, conditions & nested functions.
  2. Call from - Function Component & Custom Hooks. Not from regular functions

## useState

- In class `this.setState({foo:3, bar:4})` - states are merged. But in hooks its replaced.

```jsx
import React, { useState } from "react";

function Foo(props) {
  // intialValue can be object, string, number, array etc
  // returns a value & function to update value
  const [value, setValue] = useState(initialValue);
  const [state2, setState2] = useState(initialValue2); // can use multiple times

  //createExpensiveObject() is only called once, Not called on subsequent render
  const [value, setValue] = useState(() => createExpensiveObject(props.count));

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

## useEffect

- Allows us to write imperative code which is not possible in react's component which is purely a functional code.
  - React component does not allow sideeffects like mutations, Async, timers, etc directly
- Used for side-effects like Data fetching, subscription, DOM changes, etc
- Called AFTER every render & defers running till BrowserDOM is painted.
  - Lifecycles combined together - `componentDidMount, componentDidUpdate & componentWillUnMount`
- Most of the effects are Asynchronous. But for some synchronous effect like measure layout we have a `useLayoutEffect`
- 2 Types
  - Needs cleanUp (to avoid memory leak) - eg: subscription
  - No cleanUp - eg: Logging, data fetching, DOM changes
- `useLayoutEffect()`
  - Not deferred. That is, it runs before BrowserDOM is painted.
  - Use only if `useEffect()` cause a problem

```jsx
function Foo(props) {
  // we can use multiple effects. They maintain the same order as written.

  useEffect(() => {
    // This inner function is different everytime render is performed.
    // Because in js each function is separate when created.
    // ()=>{} === ()=>{} // false
    // This Helps maintain the correct state on each render

    // clean up function
    // called after every render & unmount,
    // called before running next useEffect()
    // Eg: clear old eventhandlers we don't need multiple copies of event handlers
    // Eg: unsubscribe()
    return () => {
      //...
    };

    // Dependencies
    // - Run effect if atleast one dependency change
    // - empty array - run effect Only once on mount. It mesns it's independent of any state, props.
    // - setFoo - such functions won’t change on re-renders. It’s safe to omit.
    // - "dispatch()" from useReducer - safe to omit.
  }, [foo, bar]);
}
```

## useContext

- If context changes then react will re-render

```jsx
import MyContext from "./path/MyContext";

function Foo(props) {
  // value passed depends on <MyContext.Provider value="..."> ancestor
  const myValue = useContext(MyContext);
}
```

## useReducer

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

## useCallback/useMemo

- Used for Optimization - Cache & avoid heavy calculations on every render based on dependencies.
- Use rarely and carefully

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

## useRef

- Used to store an object known as `ref`. Persist for lifetime of Component.
- But it's `obj.current` can be mutated on render.
- A change in `obj.current` won't trigger re-render
- Can also be used to store previous state, props values. (save in `useEffect()`).

```jsx
// create
//   - initialValue is .current
const inputEl = useRef(initialValue) // initialValue can be null or some value.

// add
<input ref={inputEl} type="text" />

// use
inputEl.current.focus()
```

## Building your own hooks

- Name starts with `use` like `useValidation()`

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
  // return any state values or anything else needed or just return nothing
}
```
