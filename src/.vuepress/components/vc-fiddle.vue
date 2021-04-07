<template>
  <div class="fiddle">
    <iframe :src="iframeUrl()" width="100%"></iframe>
    <!-- <script async :src="scriptUrl()"></script> -->
  </div>
</template>

<script>
export default {
  props: ["url"],
  methods: {
    iframeUrl() {
      return this.$props.url + "/embedded/js/dark";
    },
    scriptUrl() {
      return this.$props.url + "/embed/js/dark";
    },
  },
};
</script>

<style lang="stylus" scoped>
.fiddle iframe {
    min-height: 400px;

}
</style>
