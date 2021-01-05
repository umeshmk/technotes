# Animations

## Using Css

**Bezier curve**

- [javascript.info/bezier-curve](https://javascript.info/bezier-curve)
- [cubic-bezier.com](https://cubic-bezier.com)

```css
.foo {
  background-color: red;
  transition-property: background-color; // "all" for all properties
  transition-duration: 2s;
  transition-timing-function: ease;
  transition-delay: 1s;
}
```

### Transition-Timing-Function

- `transition-timing-function:`
  1. Bezier curve
     1. `cubic-bezier(coordinates)`
     2. Built-in Bezier curves - `linear, ease, ease-in, ease-out, ease-in-out`
  2. Steps - `steps(totalSteps, start/end)`

```scss
// 4 coordinates - (0,0) (x1,y1) (x2,y2) (1,1)
// --- 2 are predined - (0,0)(1,1)
// --- 2 (or more) are custom - (x1,y1) (x2,y2) - where  (0 < x < 1) & y can be anything
// x-axis = transition-duration
// y-axis = start/end of transition-property
// (0,0,1,1) - linear
transition-timing-function: cubic-bezier(x1, y1, x2, y2);
transition-timing-function: steps(5, start); // start/end of the second
```

### Event

- `transitionend` - at the end of the transition.

### @keyframes

```css
@keyframes my-animation {
  from {
    top: 100px;
  }
  to {
    top: 500px;
  }
}
.foo {
  animation: my-animation 2s infinite alternate;
}
```

## Using Javascript

- [#requestanimationframe](/javascript/asynchronous.html#requestanimationframe)
