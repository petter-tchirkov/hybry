<template>
  <div>
    <Overlay v-if="isSidebarOpened" />
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Overlay from "../components/Overlay.vue";
export default {
  computed: {
    isSidebarOpened() {
      return this.$store.state.isSidebarOpened;
    },
  },
  components: { Overlay },
};
</script>

<style lang="scss" scoped></style>
