# Styled Components

> v5+

## Basics

- It's css-in-js
- [Installation](https://styled-components.com/docs/basics#installation)
- It creates a new React component with `<htmlTag>` or `<AnyReactComponent>` with styles.
- Scss like Preprocessor used is [Stylis](https://github.com/thysultan/stylis.js)
  - Allows nesting(`&`), pseudo-selector, etc

<vc-table>
<template v-slot:cola>

```js
// **Elements/Title.js**
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
`;

export default Title;
```

</template>
<template v-slot:colb>

```jsx
// **App.js**
import Title from 'Elements/Title';

let App = () => {
  return (
    <div>
      <Title> foo </Title>
    </div>
  );
};
```

</template>
</vc-table>

### Passed Props

```js
// style
background: ${(props) => (props.primary ? "cyan" : "transparent")};
color: ${(props) => (props.color || "red"};

// jsx
<div>
  <Title primary> foo </Title>
  <Title color="blue"> foo </Title>
</div>

```

### Extend

<vc-table>
<template v-slot:cola>

```js
// Base button
let Button = styled.button`
  color: red;
  padding: 2rem;
  margin: 2rem;
  background: transparent;
`;

// extend - AnyStyledComponent
// StyledComp are just ReactComponent
let ButtonDark = styled(Button)`
  background: #333;
`;
```

</template>
<template v-slot:colb>

```jsx
// jsx
<div>
  <Button> foo </Button>
  <ButtonDark> bar </ButtonDark>
  {// Also we can swap elements with
  // newTag / AnyReactComponent}
  <Button as="a" href="/">
    fooLink
  </Button>
</div>
```

</template>
</vc-table>

### Styling any Components

- It's same as extend above. Just with AnyReactComponent
- Needs `className`

<vc-table>
<template v-slot:cola>

```js
// ReactConponent
// If (props) is passed then
// use props.className , props.children
let Link = ({className, children}) => {
  return (
    <a className={className} href="/">
      {children}
    </a>
  );
};

// StyledComponent
let LinkDark = styled(Link)`
  background: #333;
`;
```

</template>
<template v-slot:colb>

```jsx
// jsx
<div>
  <Link> foo </Link>
  <LinkDark> bar </LinkDark>
</div>
```

</template>
</vc-table>

### Css Nesting

- Provided by Stylis.

<vc-table>
<template v-slot:cola>

```js
const Button = styled.button`
  color: red;

  // & = parentComponent

  &:hover {
    color: blue;
  }

  & ~ & {
    color: green;
  }

  // no space after dot
  &.myclass {
    color: black;
  }

  // space after dot (& is not needed)
  & .myinnerclass {
    color: white;
  }
`;
```

</template>
<template v-slot:colb>

```jsx
// jsx
<Button>foo</Button>
<Button>foo sibling</Button>
<Button className="myclass"></Button>
<Button>
  <div className="myinnerclass"> Zoo </div>
</Button>
```

</template>
</vc-table>

### Attaching additional props/attrs

<vc-table>
<template v-slot:cola>

```js
let Input = styled.input.attrs((props) => ({
  type: 'text',
  size: props.size || '1em',
}))`
  color: red;
  background: #666;
`;

// we can override too
// Just extend then change
let Password = styled(Input).attrs((props) => ({
  type: 'password',
}))`
  color: black;
  background: green;
`;
```

</template>
<template v-slot:colb>

```jsx
// jsx
<Input placeholder="foo" />
<Input placeholder="foo" size="3em" />

<Password
  placeholder="secret"
  size="2em"
/>
```

</template>
</vc-table>

### Animations

<vc-table>
<template v-slot:cola>

```js
// Gives unique instance to avoid nameclash
let rotate = keyframes`
  from{
    transform : rotate(0deg);
  }
  to{
    transform : rotate(360deg);
  }
`;

let Rotate = styled.div`
  animation: ${rotate} 2s linear infinite;
`;
```

</template>
<template v-slot:colb>

```jsx
// jsx
<Rotate> I'm rotating </Rotate>
```

</template>
</vc-table>

## Advanced

### Theme

- `<ThemeProvider>` uses _ContextAPI_.

<vc-table>
<template v-slot:cola>

```js
// global theme
let theme = {
  primary: 'grey',
};

// button
let Button = styled.button`
  color: ${(props) => props.theme.primary};
`;

// default theme for button
Button.defaultProps = {
  theme: {
    primary: 'blue',
  },
};

// global theme2 (function)
// inherit from parent <ThemeProvider>
let theme2 = ({primary}) => ({
  primary: 'green',
  secondary: primary, // red
});
```

</template>
<template v-slot:colb>

```jsx
// jsx
<Button>DefaultColor</Button>

<ThemeProvider theme={theme}>
  <Button>ThemeColor</Button>

  <ThemeProvider theme={theme2}>
    <Button>Theme2Color</Button>
  </ThemeProvider>

  <Button theme={{primary:"red"}}>
    OverrideThemeColor
  </Button>

</ThemeProvider>
```

</template>
</vc-table>

## API

### css helper

<vc-table>
<template v-slot:cola>

```js
import {css} from 'styled-components';

let styles = css`
  color: red;
`;

// We can also add internally
let Button = styled.button`
  color: grey;

  ${(props) =>
    props.success &&
    css`
      color: blue;
    `}

  ${(props) =>
    props.danger &&
    css`
      color: red;
    `}
`;
```

</template>
<template v-slot:colb>

```jsx
// jsx
<Button>normal</Button>
<Button success>success</Button>
<Button danger>danger</Button>
```

</template>
</vc-table>

## Tooling

### Stylelint

- Avoid it since my stylint config for `react-refresh-app` is working nicely for StyledComponents too.
