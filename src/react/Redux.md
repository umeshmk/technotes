# Redux

[redux](https://redux.js.org/) <br/>
[redux-toolkit](https://redux-toolkit.js.org/) <br/>
[react-redux](https://react-redux.js.org/) <br/>

A _Global State Management_ library. It uses _"one way data flow"_ structure

- **Predictable** - Same behaviour on client, server & native. Easy to test.
- **Centralized** - State & logic both are Centralized
- **Debuggable** - Allows "Time-travel debugging" using chrome extension
- **Flexible** - Works with any UI & has addons like thunk, saga, etc
- **Tiny** - Just 2kb (without RTK Query)

:::tip When to use ?

- _Context/hooks_ - Small to mid apps, forms
- _Redux_ - Very large and Complex apps

**TradeOffs**

- Lot of Boilerplate & setup
- Data fetching and caching is cumbersome.
- Manual `extraReducers` boilerplate.
- Manual Query Data Memoization is complex using Reselect. (Memoization means updating store only if data has changed.)

**Data fetching and caching**

- Avoid using Thunks if needed.
- Libraries - `Apollo Client, React Query, Urql, and SWR`
- See [comparison](https://react-query.tanstack.com/comparison)

:::

## 3 Principles of Redux

1. **Single source of truth** - Single global object as store
2. **State is read-only** - Only action can change state
3. **Changes are made with pure functions** - Reducers are pure functions

## Pure vs Impure function

<vc-table>
<template v-slot:cola>

```js
// PURE

// return value depends purely on passed arguments.
function square(x) {
  return x * x;
}
// never modify but returns new state
function squareAll(list) {
  return list.map((x) => x * x);
}
```

</template>
<template v-slot:colb>

```js
// IMPURE

// return value depends on sideeffects too
function square(x) {
  callMyDB(x);
  return x * x;
}
// modify state
function squareAll(list) {
  for (let i = 0; i < list.length; i++) {
    list[i] = square(list[i]);
  }
}
```

</template>
</vc-table>

## Typescript

- Strongly recommended
- _Typescript + redux-toolkit_
  - [Typescript](https://redux-toolkit.js.org/tutorials/typescript)
  - [Usage-with-typescript](https://redux-toolkit.js.org/usage/usage-with-typescript)

```ts
// app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
```

```ts
// app/hooks.ts
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

```ts
// features/Counter/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./../../app/store";

interface State {
  /*...*/
}
const initialState: State = {
  /*...*/
};

const counterSlice = createSlice({
  /*...*/
  reducers:{
    // action.payload is of type number
    incrementBy: (state, action:PayloadAction<number>) => {
      /*...*/
    }
})

const selectCount = (state:RootState) => state.counter.value;
```

## Redux Toolkit

- It's an abstraction layer that wraps around redux core
- Includes - `redux, immer, redux-thunk, reselect`
- `react-redux` is not included

```sh
# Existing project
npm install @reduxjs/toolkit

# New project
# template = @reduxjs/toolkit + react-redux
yarn create react-app my-app --template redux
yarn create react-app my-app --template redux-typescript
```

#### API

- **`configureStore()`**
  - A wrapper for redux `createStore`
  - Automatically adds slice, middlewares, devtools, etc
- **`createReducer()`**
  - A function used instead of switch case
  - Use `immer` behind the scenes
- **`createAction()`**
  - A function based on action string
- **`createSlice()`**
  - Accepts - reducer functions, name, intialState
  - Generates - slice reducer, action creators
- **`createAsyncThunk`**
  - Accepts - action type, function(which returns promise)
  - Generates - a thunk with 3 action types `pending/fulfilled/rejected`
- **`createEntityAdapter`**
  - Manage [normalization](https://redux.js.org/tutorials/essentials/part-6-performance-normalization#normalizing-data)
    - _"Normalization" means no duplication of data, and keeping items stored in a lookup table by item ID_
    - _Normalized state shape usually looks like `{ids: [], entities: {}}`_
  - Generates - reusable reducers and selectors
- **`createSelector`**
  - A utility from `reselect`
  - Generates _memoized selectors_ that will only recalculate results when the inputs change ie caching.

:::tip Redux needs immutable state

Toolkit use `immer` internally which allows us to write mutable code.

- `createSlice` & `createReducer` use immer internally

:::

## React-redux

- React binding for redux.
- It uses hooks api. It is recommended instead of `connect()` api

```js
import { Provider } from "react-redux";
import store from "./store";

// wrap App in Provider
<Provider store={store}>
  <App />
</Provider>;
```

```js
// Get data from store in component
import { useSelector, useDispatch } from "react-redux";
import { increment, selectCount } from "./counterSlice";

// use it like normal hooks
const count = useSelector(selectCount);
const dispatch = useDispatch(); // dipatch(increment())
```

#### Api

- `<Provider store={store}>`
- Hooks
  - `useSelector(), useDispatch(), useStore()`
  - `useActions()` - removed in v7.1

## Redux

- **Actions** are like events
- **Reducers** are like event listeners
- **Dispatch** is like trigger to events
- **Subscribers** are like listeners to changes after reducers

### Store

- Just an object
- Typically a redux app have **just 1 store** used globally.
- `getState` - get current state value
- `sunscribe` - update UI if state changes (returns a function to unsubscribe)
- `dispatch` - dispatch an action

<vc-table>
<template v-slot:cola>

```js
// CORE REDUX
import { createStore } from "redux";
import fooReducer from "./fooReducer";

let store = createStore(fooReducer);

store.getState();
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch({ type: "foo/A", payload: data });
```

</template>
<template v-slot:colb>

```js
// REDUX TOOLKIT
import { configureStore } from "@reduxjs/toolkit";
import fooSlice, { A } from "./fooSlice";

const store = configureStore({
  reducer: fooSlice.reducer,
  // OR
  reducer: {
    foo: fooSlice.reducer, // state.foo
    bar: barSlice.reducer, // state.bar
  },
});

store.getState();
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(A()); // action function
```

</template>
</vc-table>

### Reducer

- `initialState` - can be `{}, [], primitives`
- Just a function.
- Signature - `(state, action) => newState`
- Store ie `state` can be `{}, [], primitives`
- We can split root reducer into many separate reducers just like react components.

<vc-table>
<template v-slot:cola>

```js
// CORE REDUX

const initialState = { value: 0 };
function fooReducer(state = initialState, action) {
  switch (action.type) {
    case "foo/A":
      // Mutation not allowed
      return { value: state.value + 1 };

    case "foo/B":
      // code
      return newState;

    default:
      return state;
  }
}
```

</template>
<template v-slot:colb>

```js
// REDUX TOOLKIT
import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };
const fooSlice = createSlice({
  name: "foo",
  initialState,
  reducers: {
    A: (state) => {
      // Mutation allowed (immer)
      state.value += 1;
      // return state; // not needed
    },
    B: (state, action) => {
      // code
    },
  },
});

const fooReducer = fooSlice.reducer;
const { A, B } = fooSlice.actions;
const selectCount = (state) => state.foo.value;

export { fooReducer, A, B, selectCount };
```

</template>
</vc-table>

### Action

- Just an object
- `type` is compulsory
- `payload` is convention

```js
const action = {
  type: "foo/A",
  payload: {
    id: 3,
    name: "umesh",
  },
};

// action creator
const actionCreator = (id, name) => {
  return {
    type: "foo/A",
    payload: {
      id: id,
      name: name,
    },
  };
};

// action creator from slice
const { A, B } = fooSlice.actions;
```

### Async Thunks

> Note : Use **react-query** like library. Also redux/toolkit comes with RTK Query

- Just a function with async logic.
- Redux Toolkit automatically sets up a middleware `redux-thunk`
- Thunk function always gets args `(dispatch, getState)`
- **`createAsyncThunk() api`**
  - `pending/fulfilled/rejected`
  - Automatically, action is created & dispatched too
    - `{ type: "posts/fetchPost/pending", payload: returnValue }`
    - Usage - show/hide loading spinner, errors, etc in components

```js
// REDUX TOOLKIT

// postSlice.js
const initialState = {
  posts: [];
  status: 'idle',
  error: null
}


const fetchPosts = createAsyncThunk("posts/fetchPost", async (sendDataIfAny) => {
  // also use try/catch
  const response = await fetchPost("api/posts");

  // return promise
  return response;
  // OR
  // return data
  const json = await response.json();
  return json;
});


const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    /*...*/
  },
  extraReducers: {
    [fetchPosts.pending]:(state, action) => {
      state.status = "loading";
    },
    [fetchPosts.fulfilled]:(state, action) => {
      state.status = "success";
      state.posts = action.payload;
    },
    [fetchPosts.rejected]:(state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    }
  },

  // # Another way
  extraReducers(builder){
    builder
    .addCase(fetchPost.pending, (state,action) => { /*..*/ })
    .addCase(fetchPost.fulfilled, (state,action) => { /*..*/ })
    .addCase(fetchPost.rejected, (state,action) => { /*..*/ })

  }

})

```

### useSelector

- If redux state changes then `useSelector` will check if selected value `state.counter.value` has changed. If changed only then re-render component.

```js
// fooSlice.js
export const selectCount = (state) => state.counter.value;

// any react component
const count = useSelector(selectCount);
// OR without export
const count = useSelector((state) => state.counter.value);
```

## Ecosystem

[https://redux.js.org/introduction/ecosystem](https://redux.js.org/introduction/ecosystem)

[NpmTrends](https://www.npmtrends.com/connected-react-router-vs-immer-vs-normalizr-vs-react-redux-vs-redux-actions-vs-redux-form-vs-redux-mock-store-vs-redux-persist-vs-redux-saga-vs-redux-thunk)

**Only important and possibly useful list of ecosystem (other libraries are omitted) :**

- _Library Integration and Bindings_ - `react-redux`
- _Reducers_ - `redux-undo`
- _Actions_ - `redux-actions`
- _utility_ - `reselect, normalizr`
- _Store_ - `redux-persist`
- _Immutable_ - `immer`
- _sideeffects_ - `redux-thunk, redux-saga, redux-observable`
- _Middleware_ - `NONE`
- _Entities and Collections_ - `NONE`
- _Component State and Encapsulation_ - `NONE`
- _Devtools_ - `redux DevTools chrome extension`
- _Testing_ - `redux-mock-store`
- _Routing_ - `connected-react-router`
- _Forms_ - `redux-form`
- _Higher-Level Abstractions_ - `NONE`
