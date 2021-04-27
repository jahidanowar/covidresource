<template>
  <div>
    <app-bar />
    <div class="container mx-auto">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import AppBar from "../components/Organisms/AppBar.vue";

export default {
  name: 'default',
  components: {
    AppBar
  }
};
</script>

<style>
body {
  @apply bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200;
}
</style>
