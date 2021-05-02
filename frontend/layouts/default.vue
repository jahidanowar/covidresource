<template>
  <div>
    <app-bar />
    <div class="container mx-auto mb-20">
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
</style>
