<template>
  <div class="topics">
    <a class="" v-for="(url, title) in topic" :href="base + url">
      <h1>{{ title }}</h1>
    </a>
  </div>
</template>

<script>
import {base} from '../config';
export default {
  data() {
    return {
      base,
      topic: {
        Typescript: 'typescript',
        React: 'react',
        // GraphQL: 'others/graphql',
        Javascript: 'javascript',
        'Object Oriented Programming': 'oop',
        'Html & Css': 'html/css/styled-components',
        Testing: 'testing',
        // Css: 'css/styled-components',
        Terminal: 'terminal/Zsh.html',
        'Visual Studio Code': 'visual-studio-code/vscode.html',
        // Documentation: 'documentation/vuepress.html',
        // Windows10: 'windows10/windows10.html',
        'Tools (Webpack)': 'tools/webpack.html',
        'Datastructures & Algorithms': 'datastructures-&-algorithms',
        // 'Design Patterns': 'design-patterns',
        Others: 'others/design-patterns',
        // "Laravel 6 (deprecated)": "laravel/v6/1-GettingStarted.html",
        // "Php (deprecated)": "php",
      },
    };
  },
};
</script>

<style lang="stylus" scoped>
.topics {
  padding: 40px;
  border: 1px solid;

  a {
    display block
    color: lightgreen;
    margin-top  40px
    // padding: 10px 40px;
  }

  h1 {
    font-size: 1.6em;
    background-color: #202020;
    // padding: 10px;
    padding: 15px 10px;
  }
}
</style>
