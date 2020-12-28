# Express

- Use **Postman** for api testing.
- Design patterns - https://refactoring.guru/design-patterns/

```bash
# Scaffolding
# (optional & not maintained) (Better to avoid)
npm i express-generator -g
express myproject

# install
npm i express
node index.js # Run

# Nodemon
npm i -g nodemon
nodemon index.js  # Run & watch

```

## Helpful packages

- `joi` - Validation
-

## Most Basics

```js
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// app.get();
// app.post();
// app.put();
// app.delete();

// Homepage
app.get("/", (req, res) => {
  res.send("Hello world");
});

// Posts
// api/posts/2018/5?author=Harry
app.get("/posts/:year/:month", (req, res) => {
  console.log(req.query);
  console.log(req.params);
  res.send(`Parameter & Query`);
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
```

**POST**

```js
const Joi = require("joi");
// if we need post data
app.use(express.json());

// Create post
app.post("/api/users", (req, res) => {
  // create schema for validation
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .required(),
  });

  // check validation for errors
  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(400).send(result.error);
  }
  // create user logic
  const user = {
    name: req.body.name,
  };
  res.send("User created.");
});
```

**PUT**

```js
app.put("api/post/:id", (res, req) => {
  // check id
  // validate data with joi
  // update db
});
```

**Template Engine**

```js
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});
```

**Routers**

```js
// >>> routes/index.js
var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;

// >>> app.js
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

// Routers
app.use("/", indexRouter);
app.use("/users", usersRouter);
```

**Middleware - next()**

```js
router.get("/", function(req, res, next) {
  // code
  next();
});
```

**Static Files**

```js
app.use(express.static(path.join(__dirname, "public")));
```
