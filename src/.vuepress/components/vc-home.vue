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
      msg: "Hello this is <demo-component>",
      topic: {
        Documentation: "/documentation/vuepress",
        Windows10: "/windows10/windows10",
        "Visual Studio Code": "/visual-studio-code/vscode",
        Terminal: "/terminal/Zsh",
        Miscellaneous: "/miscellaneous/Git",
        "Php (deprecated)": "/php",
        "Laravel 6 (deprecated)": "/laravel/v6/1-GettingStarted",
        Html: "/html",
        Css: "/css",
        Javascript: "/",
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
