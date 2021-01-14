<template>
  <div class="topics">
    <a class="" v-for="(url, title) in topic" :href="url">
      <h1>{{ title }}</h1>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topic: {
        Javascript: "/javascript",
        "Object Oriented Programming": "/oop",
        Html: "/html",
        Css: "/css/",
        Terminal: "/terminal/Zsh",
        "Visual Studio Code": "/visual-studio-code/vscode",
        Documentation: "/documentation/vuepress",
        Windows10: "/windows10/windows10",
        "Tools (Webpack)": "/tools/webpack",
        Miscellaneous: "/miscellaneous/Git",
        "Laravel 6 (deprecated)": "/laravel/v6/1-GettingStarted",
        "Php (deprecated)": "/php",
        // Surveys: "/surveys",
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
