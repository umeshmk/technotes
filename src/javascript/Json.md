# JSON

- Text | Language independent
- Better than XML
- _Extension_ - `file.json`
- _MIME Type_ - `application/json`
- **Syntax**

```json
{
  "persons": [
    { "name": "Foo", "age": 23 },
    { "name": "Bar", "age": 26 },
    { "name": "Baz", "age": 36 }
  ],
  "Animals" ; {
      "Birds": ["a", "b", "c"],
      "Fishes": ["x", "y", "z"],
  }
}
```

- **Values**
  - _Valid_ - `string. boolean, number, object, array, null`
  - _Invalid_ - `function, date, undefined`
- **Object/Array --> JSON**

```js
// Obj => json
var obj = {"name":"foo", "age":23};
JSON.stringify(obj);

// Array => json
var arr = ['foo", "bar"]
JSON.stringify(arr);
```

- **JSON --> Object**

```js
var Obj = JSON.parse(jsonData);
```
