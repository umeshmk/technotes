# Methodology

[getbem.com/naming](http://getbem.com/naming/)

- Most popular as per surveys
  1. BEM
  2. Atomicity

## BEM - Block Element Modifier

- It's just a _naming_ convention.
- _Modular_ - Code can be reused - Not dependent on other blocks/elements.
- **Block** - Standalone entity
  - `header, container, menu, checkbox, input`
- **Element** - A part of a block
  - `menu item, list item, checkbox caption, header title`
- **Modifier** - A flag on a block/element
  - `disabled, highlighted, checked, fixed, size big, color yellow`

```scss
// only classes - do not use #myid or <mytag>

// Block
// -- Naming - letters, digits, dashes (no underscores)
.myblock {
}

// Elements
// -- Naming - letters, digits, dashes, underscores (2 underscores)
.myblock__myelement {
}

// Modifiers
// -- Naming - letters, digits, dashes, underscores (2 dashes)
.myblock--mymodifier {
}
.myblock__myelement--mymodifier {
}
.myblock--my-modifier {
}
```

```html
<!-- When using elements - Do not add the original classes of block -->
<div class="myblock myblock__myelement">Bad</div>
<div class="myblock__myelement">Good</div>
<div class="myblock">
  <span class="myblock__myelement">Good(nested)</span>
</div>

<!-- When using modifiers - Keep the original classes of block/elements -->
<div class="block--mymodifier">Bad(only modifier is used)</div>
<div class="myblock myblock--mymodifier">Block + modifier</div>
<div class="myblock__myelement myblock__myelement--mymodifier">
  Element + modifier
</div>
```

## Atomic/Utility/Functional

- **TailwindCss** is most popular & recommended one
