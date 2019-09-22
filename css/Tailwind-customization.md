# Customization

#### # Configuration

- Use `tailwind.config.js`
- Plugins

  - Can add 3rd party plugins
  - Eg: `transform, transition, gradients, etc`

#### # Colors

```js
theme: {
    colors: {
      primary: '#5c6ac4',
      // ...
    }
}
/****OR*****/
theme: {
  colors: {
    primary: 'var(--color-primary)',
    // ...
  }
}

/*Add variables In css*/
:root{
    --color-primary : #121547;
}
```

- **Colors list**
  - Black , white
  - gray , red, orange, yellow, green, teal, blue, indigo, purple, pink

#### Spacing

- Used by
  - Margin / Padding
  - Width / Height
- Available size [link](https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale)

- 0, px
- 1, 2, 3, 4, 5, 6, 8
- 10, 12, 16, 20
- 24, 32, 40
- 48, 56, 64

#### Variants

- `responsive`
- `group-hover`
- `focus-within`
- `first`
- `last`
- `odd`
- `even`
- `hover`
- `focus`
- `active`
- `visited`
- `disabled`

  ```js
  variants: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  }
  ```
