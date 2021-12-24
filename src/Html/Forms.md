# FORMS

- [MDN Ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
- [DatePicker](https://flatlogic.com/blog/best-javascript-date-picker-libraries/)

## Format

```html
<!-- Format 1 - Label & input - (good for css) -->
<div>
  <label for="usernameFormId">Username</label>
  <input type="text" name="username" id="usernameFormId" />
</div>

<!-- Format 2 - Label & input (not good for css) -->
<label for="usernameFormId">
  Username
  <input type="text" name="username" id="usernameFormId" />
</label>
```

### Form Element

```js
// Get Form
let f = document.forms.myForm; // <form name="myForm">
let f = document.forms[0];

// Get Form Element
f.elements.myElement;
f.elements.myElements[0]; // can be an array collection too like all radio buttons with same name
f.elements.myElement.value;

// Backreference
myElement.form; // form element is returned
```

## Send Data

**Validation before sending**

1. By browser
2. By custom javascript

**How to send data to server ?**

1. Send using HTML
2. Send using JS - Using `fetch/axios` & `FormData` Api - [youtube](https://www.youtube.com/watch?v=IAmcCrETKIc)

**Method**

- `get`
- `post`
- `post` with hidden input (as in Laravel) `<input type="hidden" name="method" value="put">`

**Encoding methods - enctype (for _post_ only)**

- `application/x-www-form-urlencoded` - default
- `multipart/form-data` - use if files are attached
- `text/plain` - never use

### 1. With `<form>` & Submit button

```html
<!-- HTML -->
<form action="foo.php" method="post" enctype="multipart/form-data">
  <!-- input fields -->
  <input type="submit" value="submit" />
</form>
```

### 2. With `<form>` & Js

```html
<!-- HTML -->
<form method="post" enctype="multipart/form-data" id="formId">
  <!-- input fields -->
</form>

<script>
  let fd = new FormData(formId); // pass form as parameter
  fetch(url, {
    method: 'POST',
    body: fd,
  });
</script>
```

### 3. With Js only (no `<form>`)

```js
// FormData is write-only object  - Values can be changed but not retrieved
let fd = new FormData();
fd.append('username', 'umesh');
fd.append('file', someFile);
axios({
  url: '....',
  method: 'post',
  data: fd,
  headers: {
    'content-type': 'multipart/form-data',
  },
}).then();
```

:::danger Content-type

1. `FormData` uses the same format used by `enctype="multipart/form-data"` - [MDN](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
2. Axios deletes the `content-type` if data is `FormData` - [Github](https://github.com/axios/axios/blob/503418718f669fcc674719fd862b355605d7b41f/lib/adapters/xhr.js#L15-L17)

:::

### FormData Methods

```js
let fd = new FormData();

// methods
fd.append(name, value); // allows multiple call for same name (radiobox)
fd.set(name, value); // same as append but only the latest value is considered. old ones with same names are ignored
fd.append(name, blob, filename);
fd.get(name);
fd.delete(name);
fd.has(name);
```

### Sending Images

- We can send images as blobs (using canvas to draw image). But sending as a part of `<input type="file">` in FormData is better.

## Form Inputs

[JsFiddle](https://jsfiddle.net/h2Lf4vud/1/)

```html
<!-- text, password, search, url, email, tel
radio, checkbox, button, 
time, date, week,  month, datetime-local --- (better use library for dates)
number, range, color
file, image, hidden -->

<input
  type="{type}"
  name=""
  size="50"
  value=""
  min=""
  max=""
  step=""
  placeholder=""
  pattern="[a-z A-Z]"
  autocomplete="off"
  form="formname"
  maxlength="15"
  list="datalistId"
  readonly
  disabled
  autofocus
  multiple
  required
/>

<!-- FIELDSET  -->
<fieldset>
  <legend><!-- heading --></legend>
  <!-- add form elements here -->
</fieldset>

<!-- SELECT -->
<!-- Press ctrl+click for multiple -->
<select size="" multiple>
  <option value="A" selected>A</option>
  <option value="B">B</option>
</select>

<!-- TEXTAREA -->
<textarea cols="30" rows="5">
    <!-- Lorem-ipsum -->
  </textarea
>

<!-- BUTTON -->
<!-- type : submit, reset, button -->
<!-- Better - allows html -->
<button type="submit"><strong>Submit</strong></button>
<!-- Avoid input - allows only plaintext -->
<input type="submit" value="Submit" />

<!-- AUTOCOMPLETE - DATALIST -->
<input type="text" list="mydl" />
<datalist id="mydl">
  <option value="a" />
  <option value="b" />
</datalist>

<!-- PROGRESS/METER -->
<progress max="100" value="75">75/100</progress>
<meter min="0" max="100" value="75" low="33" high="66" optimum="50">75</meter>
```

## Style css

- Bad - `checkbox, radio, search`
- Worst
  - `select, option, datalist`
  - `color,range, file`
  - `dates-related`
  - `progress, meter`

```scss
// pseudo elements
::before
::after

// pseudo classes
:focus, :hover, :active
:required, :optional // (not needed its default state)
:valid, :invalid,
:in-range, :out-of-range
:enabled, :disabled
:read-only, :read-write
:checked, :indeterminate, :default

// extras
:focus-within
:focus-visible
:placeholder-shown
:empty
```
