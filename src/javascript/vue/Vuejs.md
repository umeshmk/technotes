# Vue (2.6)

:::danger Deprecated
Current latest version is [v3.vuejs.org](https://v3.vuejs.org/) - Dec 2020
v2.6.11 - released on Dec 14, 2019

Still a lot of things are similar
:::

- A progressive framework for UI
- API Reference - https://vuejs.org/v2/api/

- Install - `npm install vue`
- Use my own scaffolding - https://github.com/umeshmk/Laravel-Mix
- `vue.js` & `vue.min.js` = _compiler(for .vue files) + runtime_
- `vue.runtime.js` = _runtime_

## Syntax

- _Declare_ - `{{ dMessage }}`
- _Vue instance_

  ```js
  let app = new Vue({
    el: #app;
    data: {
        dMessage: "hello world"
    },
    methods:{
        mFoo: function (){....}
    }
  });

  ```

- _Directive_

  - **v-bind**
    - `<div v-bind:title="dMessage"></div>`
    - _Shorthand (:)_ - `<div :title="dMessage"></div>`
  - **v-if** - `<div v-if="isVisible">Visible if "isVisible=true"</div>`
  - **v-show** - AVOID IT.
  - **v-for** - `<li v-for="item in arrList"> {{ item }} </li>`
    - _v-for_ + _v-if_ - AVOID IT TOGETHER
  - **v-on**
    - `<button v-on:click="mFoo"></button>`
    - _Shorthand (@)_ - `<button @click="mFoo"></button>`
  - **v-model**
    - Two way binding
    - `<input type="text" v-model="dMessage">`
  - **v-once** - `<span v-once>This will not be rendered again {{ message }}</span>`
  - **v-html** - `<div v-html="dHtml"></div>`
    - Can cause XSS vulnerability.

- _Component_

  - HTML - `<vc-name v-bind:pMsg="dMessage" ></vc-name>`
  - Naming `vc-` is my practice.

  ```js
  Vue.component("vc-name", {
    props: ["pMsg"],
    template: "<p>This is a component and 'pMsg'= {{ pMsg }}.<p>",
  });
  ```

## Vue Instance

- `var vm = new Vue({optionsObject})` where `vm` = ViewModel
- Vue _components_ is also a Vue _instance_. Same optionsObjec too except _#root_ specific.
- Vue has some predefined properties & methods. Prefixed with `$` like `app.$data`, `app.$el`. See API.
- **Lifecycle Hooks** - A way to add custom code at specific stages of Vue instance.
  - `beforeCreate()`
  - `created()`
  - `beforeMount()`
  - `mounted()`
  - `beforeUpdate()`
  - `updated()`
  - `beforeDestroyed()`
  - `destroyed()`
- _ARROW => FUNCTIONS SHOULD ALWAYS BE AVOIDED._

## Template Syntax

- Uses pure HTML.
- Vue converts `HTML --> render functions` (in virtual DOM)
- Can use js tender functions too with **JSX**
- **JS Expressions**

  - Use js in interpolation and directies

  ```js
  {{ dMessage + "is my message."}}
  {{ dNum + 1 }}
  {{ (a < b)? yes:no }}
  <div v-bind:id="'cust_id_' + dId"></div>    // cust_id_34
  // statements DON'T work
  {{ let x = 23  }}
  {{ if(cond){...} }}   // use ternary
  {{ anyGlobalVariables }}
  ```

  - **Dynamic arguments** (vue 2.6+)
    - `<div v-bind:[dAttrName]="dUrl"></div>` // if dAttrName = href

## Computed

- Complex calculated property.

  ```js
  let app = new Vue({
    el: "...",
    data: {
      msg: "Hello",
    },
    computed: {
      cReverseMsg: function() {
        return this.msg
          .split("")
          .reverse()
          .join("");
      },
    },
  });
  ```

- Accessed as property NOY method - `<p>{{ cReverseMsg }}</p>`
- **Get/Set**

  ```js
  computed:{
    cReverseMsg:{
      get: function(){......},
      set: function(newMsg){......},
    }
  }
  // set new msg
  app.cReverseMsg = "Hello world.";
  ```

- **Watch**

  - Useful if AJAX is requested again and again like google suggestions when typed.
  - Use lodash `_.debounce()` or `_.throttle()` to limit async AJAX request.

  ```js
  let app = new Vue([
    el:"#app",
    data:{
      msg:""
    },
    watch: {
      msg: function(newMsg, oldMsg){......}
    }

  ]);
  ```

  - Example - https://vuejs.org/v2/guide/computed.html#Watchers

## Class / Style Binding

- **Class**

  - _html_

    ```html
    <div class="foo bar" v-bind:class="myClasses"></div>
    ```

  - _js_

    ```js
      data:{
        myClasses:{
          classFoo: true
          classBar: false,
        }
      }
    ```

  - _js - computed_

    ```js
      data:{
        isActive: true,
        error: null
      },
      computed:{
        myClasses: function(){
          return {
            active: this.isActive && !this.error,
            'text-danger': this.error
          }
        }
      }
    ```

## Conditional Rendering

- **v-if**

  ```html
  <div v-if="isTrue">Yes it is true.</div>
  <div v-else-if="isWorking">Maybe true.</div>
  <div v-else>Nope.</div>
  ```

- **v-show** - AVOID IT.

## List Rendering (v-for)

- **Array / Objects** - `arr = [3,4,5,6]` / `obj={a:3, b:4, c:5}`

  ```html
  <!-- Array -->
  <div v-for="item in arr">{{ item }}</div>
  <div v-for="(item, index) in arr">{{ index }} = {{ item }}</div>
  <!-- Object -->
  <div v-for="value in obj">{{ value }}</div>
  <div v-for="(value, name, index) in obj">{{ name }} = {{ value }}</div>
  ```

- **Maintain state**
  - use `v-bind:key=item.id`
  - Use Strings/Number for keys and NOT array/object
- **Array change detections**

  - _Mutation methods_
    - `push(), pop(), shift(), unshift(), sort(), splice(), reverse`
    - This methods are wrapped by Vuejs to update views for any mutations.
  - _Non Mutation methods_
    - `filter(), concat(), slice()`
    - Returns new array
  - _Caveats [Array]_
    - Vue cannot detect
      - 1] `app.items[i] = newValue;`
        - _Solutions:_
          - `Vue.set(app.items, i, newValue);`
          - `app.$set(app.items, i, newValue);`
          - `app.items.splice(i, 1, newValue);`
      - 2] `app.items.length = newValue;`
        - _Solutions:_
          - `app.items.splice(newLength);`
  - _Caveats [Objects]_

    - Vue cannot detect

      - 1] Property Addition/Deletion (at root level) - `app.newProp = value`

        - It's added as data but NOT REACTIVE because Vue instance is already created.
        - _Solutions:_
          - No need to add new data property.
          - **Nested objects** - Alter already available data properties object eg. data{ person: {...}}
          - `Vue.set(app.person, newProp, value);`
          - `app.$set(app.person, newProp, value);`
        - _Solutions(multiple properties):_

          - Create a new object and add both old & new properties

          ```js
          app.person = Object.assign({}, app.person, {
            oldProp: value,
            newProp: value,
          });
          ```

- **Use of** `<template>` - `<template v-for="v in list">....</template>`
- `v-if` **with** `v-for`
  - _NEVER USE TOGETHER_. - `<div v-for="l in list" v-if="isDone"></div>`

## Event Handling

- **Listening to Events**
  - use `v-on`
- **\$event**
  - `<button v-on="foo($event)"></button>`
- **Event Modifiers**
  - `.stop` - stop event propogation
  - `.prevent` - prevent default
  - `.capture` - child element's event is handled by parent first
  - `.self` - direct event & not propogated from child element
  - `.once` - event at the most 1 time
  - `.passive` - useful for mobile (v2.3+)
  - _Usage_
    - `<div v-on:click.prevent="foo()"></div>`
  - _Chaining modifiers_
    - `<div v-on:click.prevent.self="foo()"></div>`
- **Keyboard Key Modifiers**
  - `<div v-on:keyup.enter="..."></div>`
  - `<div v-on:keyup.page-down="..."></div>`
- **Mouse Key Modifiers**
  - `.left`
  - `.right`
  - `.middle`

## Form Input Handling

- 2-way binding with `input, textarea & select` using `v-model` directive
- Vue ignores initial `selected, value, checked` attributes & data is source of truth.

| Elements          | property | Event  | Ex                                            |
| ----------------- | -------- | ------ | --------------------------------------------- |
| `text, textare`   | value    | input  | `<input v-model="foo">`                       |
| `checkbox, radio` | checked  | change | `<input type="checkbox" v-model="isChecked">` |
| `select`          | value    | change | `<select v-model="isSelected">`               |

- For multiple values use array
