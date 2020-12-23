# Asynchronous Javascript

- **Thread** = A single process to do all tasks. But one task at one time.
- Javascript is _synchronous, blocking, single threaded_ called `main thread`
  - eg: Use `alert()` to block code.
- _Webworkers_ are used to create a `worker thread`
  - But it has no access to _DOM_
- **Promises** use `worker thread` and after processing returns result to `main thread`.
- **Callbacks** functions are a bit old now. But still used. eg: `addEventListener(event, callback)`
  - Some callback are synchronous. Ex. `Array.prototype.forEach(arr, callback)`
- **Event Queue** - Async tasks are added to the event queue which runs after `main thread` has finished with tasks ie empty stack.

## Timeout & Intervals

### setTimeout/setInterval

```js
setTimeout(callback, milliseconds, parameters); // 1000 = 1s
setTimeout(callback, 0); // Runs after main thread is empty. (not immediately)
clearTimeout(name);

setInterval(callback, milliseconds, parameters);
clearInterval(name);

// Recursive callback in setTimeout() === setInterval()
// Difference = Time to run inside code is counted for setInterval() but not for setTimeout()
// setTimeout() executes after 200ms only irrespective of time taken to run code
function foo() {
  // code
  setTimeout(foo, 200);
}
setInterval(foo, 200);
```

### requestAnimationFrame

- Better than `setTimeout/setInterval`
- Use to call a function repeatedly & efficiently especially for animations
- Frame Per Second _(FPS)_ - higher is better
- Most screens has _Refresh rate_ of **60Hz** which can give atmost **60FPS**
- [MDN Example](https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/simple-raf-spinner.html)
- Cons
  - Can't choose custom frame rate.

## Promises

**Promises is the new way for Asynchronous code**

- Ex. `Fetch` api
- Fetch will call `url` and return a promise.
- **Promise** = An object with info on success/failure.
- **Promises vs Callbacks**
  - Promises return an object to which we can attach a callback using `then()`
  - _No Callback Hell_ - Attach another Async task using `then()`.(But nested promises MAY lead to HELL too)
  - _Better Error handling_ - Just 1 `catch()` for any error
- Fetch promises do not fail on `404 or 500` errors
- Better to use **Axios**
- synchronous `try...catch` won't work in async code.
  - But can throw errors like `throw new Error("An error occurred")`
  - `then()/catch()/finally()` is the async equivalent to `try/catch/finally` in sync
- **Terms**
  - `Pending` - It is working
  - `Resolved` - Promise object is returned
    - `Fulfilled` - Promise is successful (`then()`)
    - `Rejected` - Promise is successful (`catch()`)

```js
// Ex
let promise = fetch("coffee.jpg");

// Ex
fetch("products.json")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    products = json;
    doSomething();
  })
  .catch((err) => {
    console.log("Fetch Error: " + err.message);
  })
  .finally(() => {
    console.log("Done with promises.");
  });
```

### Promise.all

- A _static_ method.
- All must fulfill else block is rejected

```js
let p1 = fetch("url1");
let p2 = fetch("url2");
let p3 = fetch("url3");

Promise.all([p1, p2, p3]).then([p1result, p2result, p3result]);
```

### Promise Constructor

```js
let pro = new Promise((resolve, reject, parameterA) => {
  // IF - code something
  resolve("success");
  // ELSE - code something
  reject("failure");
});

pro(parameterA)
  .then()
  .catch();
```

## Async/Await

- syntactic sugar to promises
- `await` only works inside `async()` function
- `await` is always written before a promise object.
- `await` replaces `then()` in promise
- `await` line is paused by javascript till it returns a promise object.
- `try, catch, finally` can be used in `async` function

### async/await

- It does not use `then()` method but can be used if needed by returning a promise object.

```js
async function hello() {
  let msg = await fetch("url");
  console.log(msg);
}

hello(); // logs msg (promise object)
```

### async/await & promise - hybrid

- It just uses both `await` & `then()` method by returning a promise object.

```js
async function hello() {
  let response = await fetch("url");
  if (response.ok) {
    return response;
  } else {
    throw new Error("Error in fetch");
  }
}

// INVOKE
hello(); // returns promise object
hello()
  .then((value) => {
    console.log(value); // Hello
  })
  .catch((err) => {
    console.log(err);
  });
```

### async/await - Promise.all()

```js
// fetch one url
async function myFetchOne(url) {
  let response = await fetch(url);
  if (response.ok) {
    return response;
  } else {
    throw new Error("A new Error in Promise.all()");
  }
}

// fetch all urls
async function myFetchAll() {
  let aPro = await myFetchOne("url");
  let bPro = await myFetchOne("url");
  let cPro = await myFetchOne("url");

  let response = await Promise.all([aPro, bPro, cPro]);

  console.log("All Fetch are successful");
  console.log(response[0]);
  console.log(response[1]);
  console.log(response[2]);
}

myFetchAll().catch((err) => console.log(err));
```

### Downside (with solution)

- In above example we have 3 `myFetchOne("url")`
- The `bPro` & `cPro` will not start unless 1st `aPro` is completed/resolved.
- To solve this issue just assign the `myFetchOne("url")` to variables.
- This will start all 3 promises simultaneously. They might take any time to finish, but they are not blocked by each other.
- **In short - Wait for results but start all promises at the same time.**

```js
async function myFetchAll() {
  let aPro = myFetchOne("url");
  let bPro = myFetchOne("url");
  let cPro = myFetchOne("url");

  await aPro;
  await bPro;
  await cPro;

  // code.....
}
```
