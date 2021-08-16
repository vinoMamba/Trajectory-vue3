<template>
  <TopBar/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import TopBar from "/@/components/TopBar.vue";

export default defineComponent({
  name: "Home",
  components: {TopBar},
});
</script>

<style lang="scss" scoped>
</style>
