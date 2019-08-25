# FORMS

[JsFiddle](https://jsfiddle.net/h2Lf4vud/)

```html
<form action="foo.php" method="get"></form>

<!-- INPUT -->
<input 
    type = { text, radio, password, checkbox, button, date, email, month, number, range, search, url, file, reset, submit } 
    name = ""
    size = "50"
    value = ""
    min = ""
    max = ""
    placeholder = ""
    pattern = "[a-z A-Z]"
    autocomplete = "off"
    form = "formname"
    maxlength = "15"
    list = "datalistId"
    readonly
    disabled
    autofocus
    multiple
    required
>

<!-- FIELDSET  -->
<fieldset>
    <legend> <!-- heading --> </legend>
    <!-- add form elements here -->
</fieldset>
  
  <!-- SELECT -->
  <!-- Press ctrl+click for multiple -->
  <select size="" multiple>
    <option value="A">A</option>
    <option value="B">B</option>
  </select>

  <!-- TEXTAREA -->
  <textarea cols="30" rows="5">
    <!-- Lorem-ipsum -->
  </textarea>

  <!-- BUTTON -->
  <button onclick="alert('Good morning.');">Click me to alert ! </button>
  
  <!-- DATALIST -->
  <input type="text" list="mydl">
  <datalist id="mydl">
    <option value="a"/>
    <option value="b"/>
  </datalist>

```
