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

- **Promise** - An object with info on success/failure.
- **Promises vs Callbacks**
  - _No Callback Hell_ - Promises return an object to which we can attach a callback using `then()` (But nested promises MAY lead to HELL too)
  - _No try/catch repeation_ - Just 1 `catch()` for any error
    - `try...catch` - not allowed in async code.
    - `then()/catch()/finally()` is the async equivalent to `try/catch/finally` in sync
    - `throw new Error("An error occurred")` - allowed.
- `resolve(data)/reject(data)` - takes 0 or 1 arg
- **`state:`** _property_
  - possible state = `pending/fulfilled/rejected`
  - `pending` - working
  - Resolved - work done promise object is returned;
    - `fulfilled` - From `resolve(data)` - use `then(data)`
    - `rejected` - From `reject(data)` - use `catch(data)`
- **`result:`** _property_
  - `undefined` - if state is `pending`
  - `data` passed by `resolve(data) / reject(data)`
- **Static methods**
  - `Promise.resolve().then()`
  - `Promise.reject().then()`

### Promise Constructor

```js
let parameterA = "parameterAValue";

let pro = new Promise((resolve, reject) => {
  console.log(parameterA);
  setTimeout(() => resolve(), 500);
  // setTimeout(()=> reject(), 500 );
}, parameterA);

pro
  .then(() => {
    console.log("then()");
  })
  .catch(() => {
    console.log("catch()");
  })
  // no args but passes value/error
  .finally(() => {
    console.log("-----");
  });
```

### Multiple chaining

- We can chain multiple `then()`.
- Ex. `Fetch` api returns a promise object.
  - Fetch promises do not fail on `404 or 500` errors (Better to use **Axios**)

```js
// Ex
let promise = fetch("coffee.jpg");

// Ex
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    console.log("then_1");
    return response.json();
  })
  .then((json) => {
    console.log("then_2");
    console.log(json);
  })
  .catch((err) => {
    console.log("catch() - " + err.message);
  })
  .finally(() => {
    console.log("-------------");
  });
```

### Promise.all

- All below are _static_ methods.
- `Promise.all` - All must fulfill else block is rejected
- `Promise.allSettled` - returns `state/result` property irrespective of success/failure of any promise.
- `Promise.resolve/reject` - not needed due to async/await

```js
let p1 = fetch("url1");
let p2 = fetch("url2");
let p3 = fetch("url3");

Promise.all([p1, p2, p3]).then([p1result, p2result, p3result]);
```

- All promises are started at same time ie parallel.

```js
console.log(new Date().getSeconds()); // 20s

let p1 = new Promise((resolve) => setTimeout(() => resolve(1), 4000));
let p1 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));

Promise.all([p1, p2]).then((a) => {
  console.log(a); // [1, 2]
  console.log(new Date().getSeconds()); // 24s
});
```

## Async/Await

- syntactic sugar to use Promises
- `async` function will always return a promise object.
- `await` only works inside `async()` function
- `await` is always written before a promise object.
- `try, catch, finally` can be used in `async` function

### async/await

- It does not use `then()` method

```js
// Ex 1:
async function foo() {
  return "hello";
}
console.log(foo()); // Promise {<fulfilled>: "hello"}

// Ex 2:
async function hello() {
  let msg = await fetch("url"); // line is paused by javascript till it is resolved & returns a promise object.
  console.log(msg);
}
hello();
```

### async/await - `then()`

- It uses both `await` & `then()` method by returning a promise object.

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

hello()
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
```

### async/await - `Promise.all()`

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

## Fetch Api

- [fetch-api](https://javascript.info/fetch-api)

```js
let promise = fetch(url, options);
let promise = fetch(url); // GET only

// ex
let res = fetch(url);
res.ok;
res.status; // if not ok ie error
res.headers;

// get data
res.text();
res.json();
res.formData();
res.blob(); // Binary data with type
res.arrayBuffer(); // low level representation of Binary data
```

### Headers

- Not allowed Headers (controlled by browser) - [https://fetch.spec.whatwg.org/#forbidden-header-name](https://fetch.spec.whatwg.org/#forbidden-header-name)

```js
// POST
let options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  body: "", // Text/Json/FormData/Blob
};
let res = fetch(url, options);
```

### Upload/Download progress

- Only _download_ progress can be known. (_Upload_ progress is not available)
- `response.body` - a _ReadableStream_ object
  - Data is received in samll chunks

### Abort

```js
let controller = new AbortController();

fetch(url, {
  signal: controller.signal,
})
  .then()
  .catch((err) => {
    if (err.name === "AbortError") alert("Request cancelled.");
  });

controller.abort(); // cancel fetch request.
```

## CORS

**Cross Origin Resource Sharing**

- Origin - Combination of `domain + port + protocol`
- Fetch from `myDomain.com` can send request to `otherDomain.com`
  - `myDomain.com` - Browser
  - `otherDomain.com` - Server

**Cross Request types :**

1. Safe
2. All others are Unsafe

- Browser always adds this header to request `Origin: 'http://myDomain.com'` (without path)

### Safe Request

- Methods allowed - `GET / POST / HEAD`
- Headers allowed
  - `Accept`
  - `Accept-Language`
  - `Content-Language`
  - `Content-Type` - Only this are allowed `application/x-www-form-urlencoded, multipart/form-data or text/plain`
- How to use ?
  - Use `<form>` with `<iframe>` as target (Avoid)
  - Use `<script src="otherDomain.com/home?foo=bar&doo=zoo">`

### Unsafe Request

- Needs confirmation by `otherDomain.com` server
- Confirmation is done using headers.
  - `Access-Control-Allow-Origin:` - value as `myDomain.com` or `*`
- For 1 request browser sends 2 request
  - `preflight` - To check if server accepts request from `myDomain.com`
  - `actual request`

### Credentials

**Credentials** - Cookie or Authentication

- Server should respond with header `Access-Control-Allow-Credentials: true`

```js
// Browser cookies from "otherDomain.com" are attached in fetch request by "myDomain.com"
fetch("https://otherDomain.com", {
  credentials: "include",
});
```

## WebSocket

Use [socketio/socket.io](https://github.com/socketio/socket.io)

- `http/1.1` - Synchronous
- `http/2` - ASynchronous but needs request to initiate.
- `websocket` - Fully ASynchronous & Persistent connection - Client/server can connect to each other anytime

- Good for real time communication games, chats, etc
- Protocol - `ws://mydomain.com` &`wss://mydomain.com` (secured)
- 4 Events - `open, close, error, message`

```js
let ws = new WebSocket("wss://mydomain.com");

// Events
ws.onopen;
ws.onclose;
ws.onmessage;
ws.onerror;

// send data
ws.send(data);
```

## Cookies

- `document.cookie = "user=John; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT"`
- **Headers**
  - `Set-Cookie` - Created by server
  - `Cookie` - Created by browser
- key-value pairs Limit - approx 20 per domain

```js
document.cookie; // a=foo;b=bar;
document.cookie = "a=foo; b=bar;"; // Create - new one is created. Old one is not replaced.

// Encoding
let e = encodeURIComponent(text);

// Options
("foo=bar;"); // key-value
("path=/;"); // url path (if path=/admin then cookie is valid only on /admin/* path & no other paths)
("domain=mydomain.com"); // allows all subdomains too
("expires=Tue, 19 Jan 2038 03:14:07 GMT"); // session cookies - use any one expires or max-age
("max-age=3600;"); // 3600 seconds = 1hr
("secure;"); // https
("samesite=strict;"); // xsrf protection
("httpOnly;"); // set by server to not allow javascript any access to cookie
```

##
