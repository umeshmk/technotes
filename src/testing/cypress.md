# Cypress

{https://docs.cypress.io/}(https://docs.cypress.io/)

- All 3 can be used - Unit, Integration & End-to-end

## Key differences

- It runs in browser using a node.js process
  - Can switch browsers too
- Can modify network too
- Native access to `window` & DOM objects
- take shortcuts and programmatically do a repeatative tasks like login.
  - Use `cy.request` to send http request directly.
- Flake resistant - means cypress will wait for a element, network request, etc before moving to next steps.
- Debug - timetravel, screenshots, videos, inbuild errors, browser devtools.

## Getting started

```bash
yarn add cypress
yarn run cypress open # open testrunner
```

- Cypress is built on :
  - Mocha - `describe() or context()` and `it() or specify()`. Also [Hooks](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Hooks)
  - Chai - `expect()`

```js
describe("My First Test", () => {
  it("Test a!", () => {
    expect(foo).to.equal(5);
  });

  it("Test b!", () => {
    expect(foo).to.equal(5);
  });
});
```

- 3 phases of a test
  1. Create required state environment
  2. Do something
  3. Assert/Expect the change in state environment
- Default timeout
  - 4s - To find a DOM element
  - 60s - New page load transition event
- Debug
  - `cy.pause()`
  - `cy.debug()`

**Configure Cypress**

```json
{
    "baseUrl": "http://localhost:8080
}
```

**Testing your app**

- If we need server data
  - Run terminal commands - `cy.exec('npm run db:reset && npm run db:seed')` & use `cy.request()`
  - use **Stubs** instead of server

**Login**

- Anti pattern - Never use UI to build state environment
  - instead use `cy.request()` which will manage cookies too

## Core concepts

### Introduction to cypress

#### # Elements

_Cypress use jquery for DOM traversal_

```js
// Synchronus (returns el)
$(".foo"); // jquery
Cypress.$(".foo"); // jquery

//  Asynchronus (returns promise)
cy.get(".foo"); // modified jquery with automatic retry & timeout support
cy.get(".foo").then((el) => {
  // use element
});

// Contains
cy.contains("some text");
cy.get(".main").contains("some text within main");
```

#### # Commands Chain

- _Commands are promises & uses promise chain_
  - _But no `catch()`_
  - _Must always return or chain_
  - _No parallel commands. Run only 1 at a time_
- _Commands have `retry-ability` & so can't use `asyn/await`_
- _Each command has a default timeout of 4s_

```js
cy.get(".foo").click(); // action command
cy.get(".foo").should("be.disabled"); // assertion command

// alias
cy.get(".foo")
  .as("fooAlias")
  .click();
cy.get("@fooAlias").click();
```

#### # Assertions

- _Cypress bundles Chai, Chai-jQuery, and Sinon-Chai_
- _Check for desired state in - elements, objects, application._
- 2 ways
  1. _Implicit_ - `should()` & its alias `and()`
  2. _Explicit_ - `expect()`

```js
cy.get(".foo").should("be.disabled");
expect(true).to.be.true;

// assertions are not compulsory since many commands have inbuilt assertions
cy.get(".bar")
  .should("be.visible")
  .click(); // wrong
cy.get(".bar").click(); // correct
```

#### # Timeouts

- Total timeout depends on starting command
- Does not work with assertions
- Default `4s`
  - except - `visit(), exec(), wait()`

```js
// Both will have a total default timeout of 4s
cy.get(".foo");
cy.get(".foo")
  .should("be.visible")
  .and("contain", "foooooo text");

// add timeout
cy.get(".foo", { timeout: 10 }), should("be.visible"); // correct
cy.get(".foo"), should("be.visible", { timeout: 10 }); // wrong
```

### Writing & Organizing tests

#### # Cypress default folder structure

- _test files_ - `.test.js` files
- _fixtures files_ - static data
- _asset files_ - download, screenshots, videos
- _plugin files_ - runs in node background before browser launch
- _support files_ - `cypress/support/index.js` runs before every test file

#### # Mocha

- `describe(name, config, fn)` and it's alias `context()`
- `it(name, config, fn)` and it's alias `specify()`
  - `it.only()` & `it.skip()`

#### # Mocha Hooks

```js
// before / after
before(() => {
  // root-level hook
  // runs once before/after all tests
});

// beforeEach / afterEach
beforeEach(() => {
  // runs before every test block
});
```

#### # Assertion styles

1. BDD - `should(), expect()`
2. TDD - `assert()`

### Retry-ability

- Cypress only retries commands that query the DOM: `.get(), .find(), .contains()`
- Not every command is retried. eg `click()`
- Disable retry ? - pass `{timeout: 0}`
- Assertion is never retried. It's always previous command before assertion gets retried.
  - This will happen till assertion passes OR
  - Timeout

```js
// Only the previous command is retried

cy.get(".new-todo").type("todo A{enter}"); // say it's delayed by 100ms
cy.get(".new-todo").type("todo B{enter}"); // say it's delayed by 100ms
// A gets added but B is still delayed
cy.get(".todo-list li") // keeps retrying till it founds 1 <li> ie A
  .find("label") // retried, retried, retried with 1 <li> since it's A not B
  .should("contain", "todo B"); // never succeeds with only 1st <li>
```

### Variables & Alias

#### # Variables

- No return value from any Cypress commands.

```js
let fooEl = cy.get(".foo"); // wrong
cy.get(".foo").then((fooEl) => {
  // closures is correct way
});
```

#### # Alias

- create with `.as('foo')`
- Use as `this.foo` - It uses Mocha's shared context
- Alias as early as possible in chaining.

```js
describe("Foo", () => {
  beforeEach(() => {
    cy.get(".foo")
      .invoke("text")
      .as("foo");
  });

  // can be used accross all it() hooks in current describe()
  // callback must a function not arrow func () => {}
  it("test A", function() {
    expect(this.foo).to.eq("some text");

    // we can use 'cy.get()' to avoid 'this.' by using cy.get('@foo')
    // this.foo = sync
    // @foo = async
    cy.get("@foo").should("be.equal", "some text");
  });
});
```

### Conditional testing

- Avoid using it. Use alternatives.
- If we are sure that state won't change then only we can use Conditional testing
- Unstable state will result in flaky testing
- Conditional testing based on
  - server side rendering - allowed (but no async js)
  - client side rendering - allowed only if rendering is sync

```js
// Alternatives
cy.visit("https://app.com?wizard=0");
cy.getCookie("wizardFlag").then(() => {
  /*...*/
});
// request server for more info
// use attributes like data-wizard='true'
```

## Guides

### Debug

- Use inline source maps in project for better debugging

```js
// debugger
cy.get(".foo").then((el) => {
  // do something
  debugger; // use debugger
});
debugger; // can't use since it sync & cypress commands are async

// debug()
cy.get(".foo").debug(); // check console

// pause()
cy.get(".foo");
cy.pause(); // check console
```

### Network request

- 2 ways to make a request. (We mostly use both in testing)
  1. Request actual server (slow)
  2. Request to cypress stubs
     - We can control everything about response like body, status, headers, etc
     - Good for JSON api
- `cy.intercept()` - control request & stub response

#### # Fixtures

- A json file with dummy data

```js
cy.intercept("GET", "/foo/bar/*", { fixtures: "foo/bar.json" });

// even images
cy.fixture("images/dogs.png"); // base64 of /cypress/fixtures/images/dogs.png
```

#### # Waiting

```js
// Define Aliased routes
cy.intercept("/foo/*", { fixture: "foo" }).as("getFoo");
cy.intercept("/bar/*", { fixture: "bar" }).as("getBar");

cy.visit("http://localhost:8888/dashboard"); // make both requests

cy.wait(["@getFoo", "@getBar"]); // wait until it sees a response for each request

cy.get("h1").should("contain", "Dashboard"); // waiting for .wait() to finish
```

## Cypress

- Framework agnostic - works on any Framework
- Both options - Head/Headless
- Test-runner : Mocha
- Uses Mocha & Chai as underneath libraries
- Features
  - Time travel
  - Debug
  - Automatic waiting
  - Fast & Consistent Results - Does not use Selenium or webdriver
  - Screenshots / videos
  - cross browser
- Random classname can be repaced with data attributes
  - `<div class="sc-jJMGnK ffJCrV" data-test="foobar">` - like class for multiple elements
  - `<div class="sc-jJMGnK ffJCrV" data-testid="foobar">` - like id for single element
- Test files in `integration` folder run order is alphabetical. We can use prefix `01_login.test.js`

```sh
# Open desktop cypress browser app
yarn cypress open

# Run headless
yarn cypress run
# record in dashboard
yarn cypress run --record
```

- **Assertions**
  1. Implicit - `should() , and()`
  2. Explicit - `expect(), assert()`

### Page Object Model

- A design principle for ease of maintenance
- Keeps objects & nethods/actions separate from test scripts
- eg : `cy.get("#username").type("admin")`
  - here `username` is object and typing `admin` is method/action
- Create `pages` folder for each page.
  - Ex: `class LoginPage{....}`

<vc-img url='https://i.imgur.com/UDaybeK.png' size=''/>
<vc-img url='https://i.imgur.com/B836p5H.png' size=''/>

## Is needed ?

```json
// .eslintrc.json
{
  "extends": ["plugin:cypress/recommended", "react-app"]
}
```

```json
// cypress.env.json
// access in test.js -  cy.visit(Cypress.env('baseUrl));
{
  "baseUrl": "http://localhost.3000
}

```

```js
cy.clearLocalStorage();
```

```js
// commands.js
Cypress.Commands.add("getByTestId", (id) => {
  cy.get(`[data-testid="${id}"]`);
});

// Usage
// cy.getByTestId("login").click();

// another command ex
// cy.login('abc", "1234")
```

```js
// Notification stub
cy.visit(Cypress.env('baseUrl), {
  onBeforeLoad(win){
    cy.stub(win, "Notification").as("Notification");
  },
});

// usage
cy.get("@Notification").should("have.been.called");

```

- Tasks
  - `cy.task("clear:db")` - Run test js outside of browser. Ex: To clear any DB entries after each test. It s added as plugin
  - `cy.task("seed:db")`
  - Usage - can be called in `beforeEach` hook
