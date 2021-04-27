<template>
  <div>
    <app-bar />
    <div class="container mx-auto my-10">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import AppBar from "../components/Organisms/AppBar.vue";

export default {
  components: {
    AppBar
  }
};
</script>

<style>
body {
  @apply text-gray-700;
}
</style>
