<template>
  <div class="image">
    <img :src="url" :width="pixels(size)" />
  </div>
</template>

<script>
export default {
  props: ["url", "size"],
  methods: {
    pixels(s) {
      switch (s) {
        case "sm":
          return "200px";
        case "md":
          return "300px";
        case "lg":
          return "400px";
        case "xl":
          return "500px";
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.image{
  text-align center
}
</style>
