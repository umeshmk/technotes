# Vuejs - Component

### # Basics

- **Define**

  - `data` must be a function. Since multiple instances have separate data.

  ```js
  Vue.component("vc-foo", {
    data: function() {
      return [(a: "data")];
    },
    prop: ["pFoo"],
    template: "...."
  });
  ```

- **Usage** - `<vc-foo></vc-foo>`
- **Root** - `const app = new Vue({ el: "#app"});`
- **Registration**
  1. Global - all root vue instances have access.
  2. Local
- **Passing data with props**
  - Props are custom attributes on custom element
  - _Passing exact value_ - `<vc-foo title="This is exact title."></vc-foo>`
  - _Passing variable value_ - `<vc-foo v-bind:title="dataTitle"></vc-foo>`
- **Listening to child events**

  1. _Parent listens to child events_
     - Parent method - `mEnlargeText(optionalValue){...}`

  ```html
  <vc-foo v-on:enlarge-text="mEnlargeText"></vc-foo>
  ```

  2. _Child component_ - `$emit("custom-event", optionalValue)`

  ```js
  <div>
    <p>...</p>
    <button v-on:click="$emit('enlarge-text', optionalValue)">
      Enlarge text
    </button>
  </div>
  ```

- **Slots**

  ```html
  <!-- In root -->
  <vc-foo>This is slot.</vc-foo>
  <!-- In component -->
  <div>
    <p>
      Read the slot text below
    </p>
    <slot></slot>
  </div>
  ```

- **Dynamic components**
  - Needed in situations like Navigation Tabs where show just one component at a time.
  - _Define_ - `<component v-bind:is="currentActiveComponent"></component>`
  - _currentActiveComponent_ is
    1.  Name of component registered OR
    2.  Component's options object.

### # Registration

- **Naming**

  1. _Kebab-case_ - `Vue.component("vc-foo", {...});`
     - `<vc-foo></vc-foo>`
  2. _PascalCase_ - `Vue.component("VcFoo", {...});`
     - `<vc-foo></vc-foo>`
     - `<VcFoo></VcFoo>`

- **Scope**

  - _Global_
    - _Define_ - `Vue.component("vc-foo", {...});`
    - _Use in Root_ - All root `new Vue()`
    - _Use in Sub-Components_ - All components
  - _Local_

    - _Define_ - `var VcFooOptions = { .... }`
    - _Use in Root_

      ```js
      const app = new Vue({
        el: "#app",
        components: {
          "vc-foo": VcFooOptions
        }
      });
      ```

    - _Use in Sub-Components_

      ```js
      var VcFooOptions = {...};
      var VcBarOptions = {
        components:{
          'vc-foo': VcFooOptions
        }
      };
      ```

      - In `VcBar.vue` file using ES2015 modules

        ```js
        import VcFoo from "./vue/components/VcFoo.vue";

        export default {
          components: {
            VcFoo /*Both name and value*/
          }
        };
        ```

### # Props

- **camelCase vs kebab-case**
  - In _html_ - `<vc-foo post-title="..."></vc-foo>`
  - In _js|vue_ - `props:["postTitle"]`
- **Types**

  ```js
  props:{
    postTitle: String,
    age: Number,
    isChecked: Boolean,
    descriptions:Object,
    calculate:Function,
    projects:Array
  }
  ```

- **Passing values**
  - _Static_
    - String(No binding is needed.) - `<vc-post title="My first post."></vc-post>`
    - Number - `<vc-post v-bind:age = "25" ></vc-post>`
    - Boolean - `<vc-post v-bind:is-checked = "true" ></vc-post>`
    - Array - `<vc-post v-bind:projects = "['a', 'b', 'c']" ></vc-post>`
    - Object - `<vc-post v-bind:description = "{foo:'...', bar:'...'}" ></vc-post>`
  - _Dynamic_ - `<vc-post v-bind:title="post.title"></vc-post>`
- **One way data flow**
  - From parent to child
  - Should not mutate props directly. Instead use
    - _data_ - `data:function(){return {dFoo : this.pFoo}; }`
    - _computed_ - `computed:{ cFooTrimed: function(){return this.pFoo.trim();}}`
  - **Note : Object and arrays are passed as reference. Mutating them in child will change the parent data too.**
- **Validation**

  ```js
  props:{
    propA: [Number, String],
    propB:{
      type:String,
      required:true
    },
    propC:{
      type:Number,
      default:123
    },
    propD:{
      type:Object,
      default:function() { return{/*object*/} }
    }
  }
  ```

- **Non prop attributes**

  - _html_ - `<vc-foo custom-arg="..."></vc-foo>`
  - Arguments get added to the root element of the component in template.
  - https://vuejs.org/v2/guide/components-props.html#Non-Prop-Attributes

### # Custom Events

- **Names**
  - Always use kebab-case - `$emit('my-custom-event')`
- **Customizing component v-model**
- **Binding native events to components**
- **`.sync` modifier.**

### # Slots

- In v2.6 new `v-slot` directive is added
- **Slot content**

  - _type_
    - _text_ - `<vc-foo> text.<vc-foo>`
    - _html_ - `<vc-foo><span>text in span.</span><vc-foo>`
    - _component_ - `<vc-foo><vc-bar>text in component.</vc-bar><vc-foo>`
  - _Render content in template_

    ```js
    <template>
      ......
      <slot></slot>
    </template>
    ```

- **Fallback content** - `<slot>this is default text </slot>`
- **Named slots**

  - _In html (use `<template>` only)_

    ```html
    <vc-foo>
      <template v-slot:header>
        This is header
      </template>
      <template v-slot:footer>
        This is footer
      </template>
      <template v-slot:default>
        This is default slot
      </template>
    </vc-foo>
    <!-- Or use shorthand  -->

    <vc-foo>
      <template #header>
        This is header
      </template>
      <template #footer>
        This is footer
      </template>
      <template #default>
        This is default slot
      </template>
    </vc-foo>
    ```

  - _In component_

    ```js
    <template>
      <div>
        <slot name="header"></slot>
      </div>
      <div>
        <slot name="footer"></slot>
      </div>
      <slot name="default"></slot>
    </template>
    ```

- **Scoped slots**

### # Dynamic components (Yet to learn)

### # Handling edge cases (Not recommended but can be done.)

- Element and component access
  - Use root instance (use vuex instead)   -   `this.$root.foo`
  
