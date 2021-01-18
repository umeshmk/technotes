# Awesome React

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

> Orignal src - [enaqx/awesome-react](https://github.com/enaqx/awesome-react)

:::danger License
Check License before using it.
:::

A collection of awesome things regarding the React ecosystem.

Edited for me. Added NpmTrends. Prioritized/Avoided based on trends.

---

## React

> JavaScript Library for building User Interfaces

- **General Resources**
  - [ Official Website](https://reactjs.org/)
  - [ GitHub](https://github.com/facebook/react)
- **Community**
  - [Reactiflux Discord Channel](http://www.reactiflux.com/)
  - [ StackOverflow](http://stackoverflow.com/questions/tagged/reactjs)
  - [ Twitter](https://twitter.com/reactjs)

## React Tutorials

- **General Tutorials**
  - [Using React in Visual Studio Code](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial)
  - [Scrimba - Learn React for free interactively](https://scrimba.com/g/glearnreact)
- **Hooks**
  - [React Hooks](https://reactjs.org/docs/hooks-intro.html)
  - [Replacing Redux with React Hooks and Context](https://medium.com/octopus-labs-london/replacing-redux-with-react-hooks-and-context-part-1-11b72ffdb533)
  - [React Hooks cheat sheet: Unlock solutions to common problems](https://blog.logrocket.com/react-hooks-cheat-sheet-unlock-solutions-to-common-problems-af4caf699e70/)
  - [How to fetch data with React Hooks?](https://www.robinwieruch.de/react-hooks-fetch-data/)
  - [Easy to understand React Hook recipes](https://usehooks.com/)
  - [Awesome React Hooks](https://github.com/rehooks/awesome-react-hooks)
  - [Build a React chat app with Hooks, a pragmatic example](https://www.cometchat.com/tutorials/building-a-chat-app-with-react-hooks-a-pragmatic-example/)
- **TypeScript**
  - [TypeScript, React and Webpack](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)
  - [JSX in TypeScript](https://www.typescriptlang.org/docs/handbook/jsx.html)
  - [Cheatsheets for experienced React developers getting started with TypeScript](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet)
  - [React by Example](https://reactbyexample.github.io/)
- **Performance**
  - [React Optimizing Performance](https://reactjs.org/docs/optimizing-performance.html)
  - [Introducing the React Profiler](https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html)
  - [Optimizing React: Virtual DOM explained](https://evilmartians.com/chronicles/optimizing-react-virtual-dom-explained)
  - [A Definitive Guide to Optimize Major Performance issues in React](https://www.simform.com/react-performance/)
  - [Twitter Lite and High Performance React Progressive Web Apps at Scale](https://medium.com/@paularmstrong/twitter-lite-and-high-performance-react-progressive-web-apps-at-scale-d28a00e780a3)
  - [Using the React DevTools Profiler to Diagnose React App Performance Issues](https://www.netlify.com/blog/2018/08/29/using-the-react-devtools-profiler-to-diagnose-react-app-performance-issues/)
  - [Top 5 Practices to Boost React Performance](https://www.codementor.io/blizzerand/top-5-practices-to-boost-react-performance-jv6zr89ep)
  - [React is Slow, React is Fast: Optimizing react Apps in Practice](https://medium.com/dailyjs/react-is-slow-react-is-fast-optimizing-react-apps-in-practice-394176a11fba)
  - [Rendering large lists with react-window](https://addyosmani.com/blog/react-window/)
- **Internals**
  - [Build your own React](https://engineering.hexacta.com/didact-learning-how-react-works-by-building-it-from-scratch-51007984e5c5)
  - [Inside Fiber: In-depth overview of the new reconciliation algorithm in React](https://medium.com/react-in-depth/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react-e1c04700ef6e)
  - [Entire React code base explanation by visual block schemes](https://github.com/Bogdan-Lyashenko/Under-the-hood-ReactJS)
- **Interview Questions**
  - [13 Essential React Interview Questions](https://www.toptal.com/react/interview-questions)
  - [List of React interview Questions and Answers](https://github.com/sudheerj/reactjs-interview-questions)

## React Tools

:::tip NPMTrends
Use **NPMTrends/GitHubStars** to check which tool is popular.
:::

### Development Tools

> [Npm Trends](https://www.npmtrends.com/create-react-app-vs-react-hot-loader-vs-react-loadable-vs-loadable-components-vs-@storybook/ui-vs-@storybook/components-vs-eslint-plugin-react-vs-eslint-plugin-jsx-a11y-vs-@axe-core/react)

- [codesandbox](https://codesandbox.io/s/new) - An online IDE for rapid React development with integrated React DevTools.
- [react-devtools](https://github.com/facebook/react-devtools) - Inspection of React component hierarchy in the Chrome and Firefox Developer Tools
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - React specific linting rules for ESLint
- [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Static AST checker for a11y rules on JSX elements
- [storybook](https://github.com/storybookjs/storybook) - UI component dev & test
- [create-react-app](https://github.com/facebook/create-react-app) - Set up a modern Web app by running one command
- [react-starter-kit](https://github.com/kriasoft/react-starter-kit) - Isomorphic Web app boilerplate
- [react-hot-loader](https://github.com/gaearon/react-hot-loader) - (Deprecated - Use FastRefresh) Tweak React components in real time
- [react-loadable](https://github.com/jamiebuilds/react-loadable) - A higher order component for loading components with promises
- [loadable-components](https://github.com/smooth-code/loadable-components) - React code splitting made easy
- Optional
  - [DataFormsJS JSX Loader](https://github.com/dataformsjs/dataformsjs/blob/master/docs/jsx-loader.md) - Small JavaScript Compiler for quickly converting JSX to JS directly on a web page
  - [Why Did You Render](https://github.com/welldone-software/why-did-you-render) - Monkey patches React to notify you about avoidable re-renders.
- Avoid
  - [reactotron](https://github.com/skellock/reactotron) - A desktop app for inspecting your React and React Native projects
  - [docz](https://github.com/doczjs/docz) - Zero Config, live-reloading documentation with Markdown + JSX
  - [react-styleguidist](https://github.com/styleguidist/react-styleguidist) - Isolated React component development environment with a living style guide
  - [react-cosmos](https://github.com/react-cosmos/react-cosmos) - Dev tool for creating reusable React components
  - [@axe-core/react](https://github.com/dequelabs/axe-core-npm) - Accessibility auditing for React applications

### Frameworks

> [Npm Trends](https://www.npmtrends.com/next-vs-gatsby-vs-react-admin)

- [next.js](https://github.com/vercel/next.js) - The React Framework
- [gatsby.js](https://github.com/gatsbyjs/gatsby) - Free and open source framework based on React
- Avoid
  - [react-admin](https://github.com/marmelab/react-admin) - Frontend Framework for building B2B applications on top of REST/GraphQL APIs
  - [remix](https://remix.run/) - (Paid) Finally, a killer React framework from the creators of React Router
  - [aleph.js](https://github.com/alephjs/aleph.js) - The React Framework in Deno

### Styling

> Refer to awesome-react-components notes #CSS/Style

### Routing

> Refer to awesome-react-components notes #Router

### Component Libraries

> See [/react/awesome-react-components.html#ui-frameworks-component-libraries](/react/awesome-react-components.html#ui-frameworks-component-libraries)

### Command Line

- [ink](https://github.com/vadimdemedes/ink) - React for interactive command-line apps
- Avoid
  - [react-blessed](https://github.com/Yomguithereal/react-blessed) - A React renderer for blessed terminal interface library

### Testing

> Refer to awesome-react-components notes

### Libraries

- [Preact](https://git.io/preact) - Fast 3kb React alternative with the same ES6 API.
- Optional
  - [react-responsive](https://github.com/wearefractal/react-responsive) - Media queries in react for responsive design
  - [Slate](https://github.com/ianstormtaylor/slate) - A completely customizable framework for building rich text editors.
  - [react-toolbox](https://github.com/react-toolbox/react-toolbox) - A set of React components implementing Google's Material Design specification
  - [uppy](https://github.com/transloadit/uppy) - The next open source file uploader for web browsers
  - [react-snap](https://github.com/stereobooster/react-snap) - Zero-configuration framework-agnostic static prerendering for SPAs
  - [react-instantsearch](https://github.com/algolia/react-instantsearch) - Lightning-fast search for React and React Native applications, by Algolia
  - [riotjs](https://github.com/muut/riotjs) - A React-like, 3.5KB user interface library
- Avoid
  - [tcomb-react](https://github.com/gcanti/tcomb-react) - Library allowing you to check all the props of your React components
  - [react-border-wrapper](https://github.com/Metroxe/react-border-wrapper) - A wrapper for placing elements along div borders in React.
  - [react-magic](https://github.com/reactjs/react-magic) - Automatically AJAXify plain HTML with the power of React
  - [react-cursor](https://github.com/dustingetz/react-cursor) - Functional state management abstraction for use with Facebook React
  - [Touchstonejs](https://github.com/touchstonejs/touchstonejs) - React.js powered UI framework for developing beautiful hybrid mobile apps.
  - [Elemental](http://elemental-ui.com/) - A UI Toolkit for React.js Websites and Apps
  - [StateTrooper](https://github.com/swipely/state-trooper) - Centrally manage state for React applications with CSP
  - [Maple.js](https://github.com/Wildhoney/Maple.js) - Bringing the concept of web-components to React
  - [react-i13n](https://github.com/yahoo/react-i13n) - A performant, scalable and pluggable approach to instrumenting your React application
  - [react-open-doodles](https://github.com/lunahq/react-open-doodles) - Awesome free illustrations as react components.
  - [Keo](https://github.com/Wildhoney/Keo) - Plain functions for a more functional Deku approach to creating React components, with functional goodies such as pipe, memoize, etc...
  - [Bit](https://github.com/teambit/bit) - A virtual repository for managing and using react and other web components across applications
  - [AtlasKit](https://atlaskit.atlassian.com/) - Atlassian's React UI library
  - [ReactiveSearch](https://github.com/appbaseio/reactivesearch) - UI components library for Elasticsearch
  - [react-json-schema](https://github.com/TechniqueSoftware/react-json-schema) - Construct React elements from JSON by mapping JSON definitions to React components that you expose.
  - [compose-state](https://github.com/tvler/compose-state) - Compose multiple setState or getDerivedStateFromProps updaters in React
  - [react-lodash](https://github.com/typicode/react-lodash) - Lodash as React components
  - [Stator](https://github.com/cs01/stator) - Simple, plain JavaScript state management with built-in support for React
  - [ClearX](https://github.com/Autodesk/clearx) - Fast & Effortless State management for React with zero learning curve. ClearX gives great flexibility in separation of concerns for your React applications
  - [refract](https://github.com/fanduel-oss/refract) - Harness the power of reactive programming to supercharge your components
  - [react-desktop](https://github.com/gabrielbull/react-desktop) - OS X and Windows UI components built with React
  - [Reapop](https://github.com/LouisBarranqueiro/reapop) - A React & Redux notifications system
  - [react-extras](https://github.com/sindresorhus/react-extras) - Useful components and utilities for working with React
  - [react-esi](https://github.com/dunglas/react-esi) - React Edge Side Includes
  - [hookstate](https://github.com/avkonst/hookstate) - Modern, very fast and extendable state management for React that is based on hooks
  - [universal-model-react](https://github.com/universal-model/universal-model-react) - Unified state management solution for React

### Integration

- Avoid
  - [react-three-fiber](https://github.com/react-spring/react-three-fiber) - A react reconciler for threejs (web and react-native)
  - [react-masonry-css](https://github.com/paulcollett/react-masonry-css) - Fast Masonry layout powered by CSS, dependency free
  - [reaptcha](https://github.com/sarneeh/reaptcha) - Clean, modern and simple React wrapper for Google reCAPTCHA
  - [ReasonReact](https://reasonml.github.io/reason-react/)
  - [React Rails](https://github.com/reactjs/react-rails)
  - [ReactJS.NET](https://github.com/reactjs/React.NET)
  - [om](https://github.com/swannodette/om) - ClojureScript interface
  - [Reagent](https://github.com/reagent-project/reagent) - A minimalistic ClojureScript interface to React.js
  - [Express React views](https://github.com/reactjs/express-react-views)
  - [React Page Middleware](https://github.com/reactjs/react-page-middleware)
  - [ngReact](https://github.com/davidchang/ngReact) - React Components in Angular
  - [coffee-react-transform](https://github.com/jsdf/coffee-react-transform) - Provides React JSX support for Coffeescript
  - [sprockets-coffee-react](https://github.com/jsdf/sprockets-coffee-react) - Sprockets preprocessor for CJSX
  - [react-kup](https://github.com/snd/react-kup) - A simple, non-intrusive alternative to jsx for coffeescript
  - [turbo-react](https://github.com/ssorallen/turbo-react) - Combine Turbolinks and React to apply DOM diffs
  - [react-bacon](https://github.com/jamesmacaulay/react-bacon) - A little module for using React with Bacon.js
  - [msx](https://github.com/insin/msx) - React's JSX Transformer, tweaked to output calls to Mithril
  - [React.withBackbone](https://github.com/beanworks/React.withBackbone) - React 16 ready backbone binding
  - [Backbone React Component](https://github.com/magalhas/backbone-react-component)
  - [react-backbone](https://github.com/jhudson8/react-backbone) - Backbone-aware mixins for react
  - [NestedReact](https://github.com/Volicon/NestedReact/) - transparent integration with Backbone Views and NestedTypes models
  - [backbone-reaction](https://github.com/jhudson8/backbone-reaction) - React, Backbone and then some
  - [react.backbone](https://github.com/usepropeller/react.backbone) - Plugin for React to make Backbone migration easier
  - [reactbone](https://github.com/andrejewski/reactbone) - React extensions for Backbone
  - [backbone-react-ui](https://github.com/securingsincity/backbone-react-ui) - React components for use with backbone and backbone paginator
  - [react-events](https://github.com/jhudson8/react-events) - Declarative managed event bindings for react components
  - [react-mixin-manager](https://github.com/jhudson8/react-mixin-manager) - React mixin registration manager
  - [gsap-react-plugin](https://github.com/hzdg/gsap-react-plugin) - A GSAP plugin for tweening React.js component state
  - [react-topcoat by @plaxdan](https://github.com/plaxdan/react-topcoat) - Topcoat CSS components built with the React library
  - [react-topcoat by @arnemart](https://github.com/arnemart/react-topcoat) - A collection of React components for Topcoat
  - [reactdown](https://github.com/andreypopp/reactdown) - Write React components using markdown syntax
  - [react-jade](https://github.com/ForbesLindesay/react-jade) - Compile Jade to React JavaScript
  - [jade-react](https://github.com/duncanbeevers/jade-react) - Compile Jade templates to React.DOM expressions
  - [gulp-jade-react](https://github.com/duncanbeevers/gulp-jade-react) - Compile Jade templates into React de-sugared JSX with Gulp
  - [sbt-reactjs](https://github.com/ddispaltro/sbt-reactjs) - React SBT Plugin using npm
  - [scalajs-react](https://github.com/japgolly/scalajs-react) - A guilty affair between Scala.js and Facebook's React
  - [react-xtags](https://github.com/vjeux/react-xtags/) - Using React to implement xtags
  - [React.hiccup](https://github.com/lantiga/react.hiccup) - A complete replacement for JSX written in sweet.js
  - [react-with-di](https://github.com/vojtajina/react-with-di) - A hacked prototype of React.js with DI
  - [jreact](https://github.com/KnisterPeter/jreact) - React on server-side Java (with Rhino or Nashorn)
  - [react-play](https://github.com/ssorallen/react-play) - Rendering React components in the Play Framework with JDK8's Nashorn
  - [rx-react](https://github.com/fdecampredon/rx-react) - Utilities to works with React in a RxJS
  - [reactfire](https://github.com/firebase/reactfire) - ReactJS mixin for easy Firebase integration
  - [firedux](https://github.com/AndersDJohnson/firedux) - Firebase + Redux for ReactJS
  - [react-clickdrag-mixin](https://github.com/tleunen/react-clickdrag-mixin) - ClickDrag mixin for React component
  - [Rewrite the Admin UI of KeystoneJS in React](https://github.com/keystonejs/keystone/issues/503)
  - [react-masonry-mixin](https://github.com/eiriklv/react-masonry-mixin) - Standalone mixin for Masonry (@desandro)
  - [react-packery-mixin](https://github.com/eiriklv/react-packery-mixin) - Standalone mixin for Packery (Metafizzy)
  - [aframe-react](https://github.com/ngokevin/aframe) - A-Frame VR + React
  - [react-three](https://github.com/Izzimach/react-three) - React bindings to create and control a 3D scene using three.js
  - [react-three-renderer](https://github.com/toxicFork/react-three-renderer) - Render into a three.js canvas using React
  - [react-threejs](https://github.com/fritx/react-threejs) - Simplest bindings between React & Three.js
  - [react-captcha](https://github.com/appleboy/react-recaptcha) - A react.js reCAPTCHA for Google
  - [react-recaptcha-that-works](https://github.com/douglasjunior/react-recaptcha-that-works) - A reCAPTCHA bridge for React that works

### State Management

> Refer to awesome-react-components notes

### AR and VR

- [React 360](https://facebook.github.io/react-360/) - Create exciting 360 and VR experiences using React
- [Viro React](https://viromedia.com/viroreact/) - Platform for rapidly building AR/VR applications using React Native

### Renderers

> [NpmTrends](https://www.npmtrends.com/ink-vs-react-sketchapp-vs-react-three-fiber-vs-react-nil-vs-@react-pdf/renderer-vs-react-figma)

- [ink](https://github.com/vadimdemedes/ink) - React for interactive command-line apps
- Avoid
  - [React Sketch.app](https://github.com/airbnb/react-sketchapp) - Render React components to Sketch
  - [React Figma](https://github.com/react-figma/react-figma) - A React renderer for Figma
  - [react-three-fiber](https://github.com/pmndrs/react-three-fiber) - A React renderer for Three.js (web and react-native)
  - [react-nil](https://github.com/pmndrs/react-nil) - A react null renderer
  - [React PDF](https://github.com/diegomura/react-pdf) - Create PDF files using React
  - [React 360](https://facebook.github.io/react-360/)
  - [React Hardware](https://github.com/iamdustan/react-hardware) - A React renderer for Hardware

### Forms

> Refer to awesome-react-components notes

### Autocomplete

> Refer to awesome-react-components notes

### Graphics

> [NpmTrends](https://www.npmtrends.com/react-art-vs-react-canvas-vs-react-famous-vs-react-kinetic-vs-react-svg-morph-vs-react-hooks-svgdrawing-vs-react-svg-pan-zoom)

- [react-art](https://github.com/facebook/react-art) - React Bridge to the ART Drawing Library
- Avoid
  - [react-canvas](https://github.com/Flipboard/react-canvas) - High performance `<canvas>` rendering for React components
  - [react-famous](https://github.com/pilwon/react-famous) - Complex 3D animations UI at 60 FPS with Famo.us
  - [react-kinetic](https://github.com/freiksenet/react-kinetic) - HTML5 Canvas via KineticJS using React
  - [react-svg-morph](https://github.com/gorangajic/react-svg-morph) - morph your svg components one into another
  - [react-hooks-svgdrawing](https://github.com/kmkzt/react-hooks-svgdrawing) - SVG Drawing with React hooks
  - [react-svg-pan-zoom](https://github.com/chrvadala/react-svg-pan-zoom) - A React component that adds pan and zoom features to SVG.

### Data Managing

> Refer to awesome-react-components notes

### Maps

> Refer to awesome-react-components notes

### Charts

> Refer to awesome-react-components notes

---

## React Native (Deleted)

> Framework for building native apps using React

---

## Redux

> Predictable State Container for JavaScript Apps

### Redux General Resources

- [Redux GitHub](https://github.com/reactjs/redux)
- [Redux Official Site](http://redux.js.org/)
- [Awesome Redux List](https://github.com/xgrommx/awesome-redux)

### Redux Tools

> [NpmTrends](https://www.npmtrends.com/react-redux-vs-reselect-vs-redux-thunk-vs-redux-mock-store-vs-redux-saga-vs-redux-logger)
>
> [NpmTrends - Optional](https://www.npmtrends.com/redux-persist-vs-redux-form-vs-react-router-redux-vs-redux-immutable-vs-normalizr-vs-redux-observable-vs-redux-devtools-vs-redux-undo)

1. [react-redux](https://github.com/reactjs/react-redux) - Official React bindings for Redux
2. [reselect](https://github.com/reactjs/reselect) - Selector library for Redux
3. [redux-thunk](https://github.com/gaearon/redux-thunk) - Thunk middleware for redux

- [redux-mock-store](https://github.com/arnaudbenard/redux-mock-store) - A mock store for your testing your redux async action creators and middleware
- [redux-saga](https://github.com/yelouafi/redux-saga) - An alternative side effect model for Redux apps
- [redux-logger](https://github.com/theaqua/redux-logger) - Logger middleware for redux
- Optional
  - [redux-persist](https://github.com/rt2zz/redux-persist) - Persist and rehydrate a redux store
  - [redux-form](https://github.com/erikras/redux-form) - A Higher Order Component using react-redux to keep form state
  - [react-router-redux](https://github.com/reactjs/react-router-redux) - Bindings to keep react-router and redux in sync
  - [redux-immutable](https://github.com/gajus/redux-immutable) - Create an equivalent function of Redux combineReducers that works with Immutable.js state
  - [normalizr](https://github.com/paularmstrong/normalizr) - Normalizes nested JSON according to a schema
  - [redux-observable](https://github.com/redux-observable/redux-observable) - RxJS middleware for Redux
  - [redux-devtools](https://github.com/reduxjs/redux-devtools) - DevTools for Redux with hot reloading, action replay, and customizable UI
- Avoid
  - [redux-undo](https://github.com/omnidan/redux-undo) - Higher order reducer to add undo/redo functionality to redux state containers
  - [redux-toolkit](https://github.com/reduxjs/redux-toolkit) - The official, opinionated, batteries-included toolset for efficient Redux development
  - [redux-data-fx](https://github.com/matthieu-beteille/redux-data-fx) - Declarative Side Effects for Redux
  - [redux-analytics](https://github.com/markdalgleish/redux-analytics) - Analytics middleware for Redux
  - [redux-search](https://github.com/treasure-data/redux-search) - Redux bindings for client-side search
  - [redux-react-i18n](https://github.com/derzunov/redux-react-i18n) - An i18n solution for redux/react
  - [R16N](https://github.com/razodeh/r16n/) - A redux/react I18n solution
  - [redux-actiontyper](https://github.com/alnorris/redux-actiontyper) - Helper to create less verbose action types for Redux
  - [redux-state-validator](https://github.com/suyesh/redux-state-validator) - A simple redux middleware to validate redux state values and object types using JSON Schema

### Redux Tutorials

- [Building Applications with React and Redux in ES6](https://www.pluralsight.com/courses/react-redux-react-router-es6)
- [Getting Started with Redux](https://egghead.io/series/getting-started-with-redux)
- [Building React Applications with Idiomatic Redux](https://egghead.io/series/building-react-applications-with-idiomatic-redux)
- [Redux Tutorial](https://github.com/happypoulp/redux-tutorial)
- [Getting Started with React, Redux and Immutable: a Test-Driven Tutorial: Part 1](http://www.theodo.fr/blog/2016/03/getting-started-with-react-redux-and-immutable-a-test-driven-tutorial-part-1/)
- [Getting Started with React, Redux and Immutable: a Test-Driven Tutorial: Part 2](http://www.theodo.fr/blog/2016/03/getting-started-with-react-redux-and-immutable-a-test-driven-tutorial-part-2/)
- [Full-Stack Redux Tutorial](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html)
- [Server-Side Rendering with Redux and React-Router](https://www.codementor.io/reactjs/tutorial/redux-server-rendering-react-router-universal-web-app)
- [Deep Introduction to Redux](https://www.codementor.io/reactjs/tutorial/intro-to-react-redux-pros)
- [Unit Testing Redux Apps](https://www.codementor.io/reactjs/tutorial/redux-unit-test-mocha-mocking)
- [Secure Your React and Redux App with JWT Authentication](https://auth0.com/blog/2016/01/04/secure-your-react-and-redux-app-with-jwt-authentication/)
- [Build an Image Gallery Using React, Redux and redux-saga](http://joelhooks.com/blog/2016/03/20/build-an-image-gallery-using-redux-saga)
- [A simplified approach to calling APIs with redux](http://www.sohamkamani.com/blog/2016/06/05/redux-apis/)
- [React Redux based blood donor demo application](https://github.com/smanne/reduxnor)
- [LearnCode.academy Redux Tutorials Series](https://www.youtube.com/watch?v=1w-oQ-i1XB8&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b&index=15)
- [Practical Redux](https://blog.isquaredsoftware.com/series/practical-redux/)
- [A Complete React Redux Tutorial for Beginners](https://daveceddia.com/redux-tutorial/)

---

## MobX (Deleted)

> Simple, scalable state management for JavaScript Apps

---

## GraphQL

> Query Language

#### GraphQL Spec

- [GraphQL Official Site](http://graphql.org/)
- [GraphQL Specification](https://github.com/graphql/graphql-spec/tree/master/spec)
- [GraphQL Specification Repository](https://github.com/facebook/graphql)

#### GraphQL Tools

- [GraphCMS - The GraphQL Headless CMS](https://graphcms.com)
- [GraphQL CMS](https://github.com/sarkistlt/graphql-auto-generating-cms)
- [Mongoose schema To GraphQL](https://github.com/sarkistlt/mongoose-schema-to-graphql)
- [GraphQL bridge to REST API](https://github.com/dacz/apollo-bridge-link)
- [GraphQL Playground - GraphQL IDE for better development workflows](https://github.com/graphcool/graphql-playground)

#### GraphQL Tutorials

- [GraphQL Introduction](http://facebook.github.io/react/blog/2015/05/01/graphql-introduction.html)
- [First Thoughts on GraphQL](http://hueypetersen.com/posts/2015/02/02/first-thoughts-on-graph-ql/)
- [Modeling Queries in a GraphQL Like Way](http://hueypetersen.com/posts/2015/02/08/modeling-queries-graph-ql-like/)
- [Thin and Graphy](http://hueypetersen.com/posts/2015/02/22/thin-and-graphy/)
- [GraphQL Overview - Getting Started with GraphQL and Node.js](https://blog.risingstack.com/graphql-overview-getting-started-with-graphql-and-nodejs/)
- [Writing a Basic API with GraphQL](http://davidandsuzi.com/writing-a-basic-api-with-graphql/)
- [Building a GraphQL Server with Node.js and SQL](https://www.reindex.io/blog/building-a-graphql-server-with-node-js-and-sql/)
- [GraphQL Tour: Variables](https://medium.com/the-graphqlhub/graphql-tour-variables-58c6abd10f56#.wj9dsgyoy)
- [How to Graphql - The Fullstack Tutorial for GraphQL](https://howtographql.com/)

#### GraphQL Implementations

- [graphql](https://github.com/graphql/graphql-js) - A reference implementation of GraphQL for **JavaScript**
- [react-transmit](https://github.com/RickWong/react-transmit) - Relay-inspired library based on **JavaScript Promises**
- Avoid
  - [sangria](https://github.com/OlegIlyenko/sangria) - **Scala** GraphQL client and server library
  - [graphene](http://graphene-python.org/) - GraphQL in **Python** made simple
  - [graphqllib](https://github.com/dittos/graphqllib) - GraphQL implementation for **Python**
  - [graphql-ruby](https://github.com/rmosolgo/graphql-ruby) - **Ruby** implementation of Facebook's GraphQL
  - [graphql-java](https://github.com/andimarek/graphql-java) - GraphQL **Java** implementation
  - [graphql-php](https://github.com/webonyx/graphql-php) - A **PHP** port of GraphQL reference implementation
  - [graphql-dotnet](https://github.com/graphql-dotnet/graphql-dotnet) - GraphQL for **.NET**
  - [graphql-go](https://github.com/graphql-go/graphql) - GraphQL for Go/Golang

#### Server Integration

- [express-graphql](https://github.com/graphql/express-graphql) - Create a GraphQL HTTP server with **Express**
- [graphql-yoga](https://github.com/graphcool/graphql-yoga) - Easiest way to run a GraphQL server

#### Database Integration

- [Hasura](https://hasura.io/) - Instant Realtime GraphQL on Postgres
- [Prisma](https://www.prisma.io/) - A performant open-source GraphQL ORM-like \* layer doing the heavy lifting in your GraphQL server.
- [graphql-bookshelf](https://github.com/brysgo/graphql-bookshelf) - Some help defining GraphQL schema around BookshelfJS models
- [GraphpostgresQL](https://github.com/solidsnack/GraphpostgresQL) - GraphQL for **PostgreSQL**
- [graffiti](https://github.com/RisingStack/graffiti) - Node.js GraphQL ORM
- [sql-to-graphql](https://github.com/vaffel/sql-to-graphql) - Generate a GraphQL API based on your SQL database structure
- [graphql-sequelize](https://github.com/mickhansen/graphql-sequelize) - GraphQL & Relay for MySQL & Postgres via Sequelize

---

## Relay (Deleted)

> Data-Driven React Applications

---

## Apollo

> Data stack based on GraphQL

#### Apollo General Resources

- [Apollo Official Site](http://www.apollostack.com/)
- [Apollo GitHub](https://github.com/apollostack)
- [Apollo Blog](https://medium.com/apollo-stack)
- [Apollo Slack](https://apollostack.slack.com/)

#### Apollo Tools

- [react-apollo-redux - A small wrapper to automatically dispatch actions in response to apollo mutations](https://github.com/Drawbotics/react-apollo-redux)

---

## Videos

- [reactjsvideos.com](https://www.reactjsvideos.com)
- [Trying React Hooks for the first time with Dan Abramov](https://www.youtube.com/watch?v=G-aO5hzo1aw)

---

## Demo React Apps

- [hackernews-react-graphql](https://github.com/clintonwoo/hackernews-react-graphql) - Hacker News clone rewritten with universal JavaScript, using React and GraphQL
- [react-reduction](https://github.com/reduction-admin/react-reduction) - Free Admin Template Built with React and Bootstrap4
- [reactjs-tmdb-app](https://github.com/SKempin/reactjs-tmdb-app) - Responsive React The Movie Database App
- [react-shopping-cart](https://github.com/jeffersonRibeiro/react-shopping-cart) - Simple ecommerce cart application built with React Redux

---

## Real React Apps

- [kibana](https://github.com/elastic/kibana) - Your window into the Elastic Stack
- [firefox debugger](https://github.com/firefox-devtools/debugger) - The Firefox debugger that works anywhere
- [spectrum](https://github.com/withspectrum/spectrum) – Simple, powerful online communities
- [mattermost](https://github.com/mattermost/mattermost-webapp) - Open source Slack alternative
- [overreacted](https://github.com/gaearon/overreacted.io) - Personal blog by Dan Abramov
- [winamp2-js](https://github.com/captbaritone/winamp2-js) - Winamp 2 reimplemented for the browser
- [dnote](https://github.com/dnote/dnote) - A command line notebook with multi-device sync and web interface
