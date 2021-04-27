<template>
  <div
    class="bg-white dark:bg-gray-800 absolute top-0 left-0 h-screen w-full z-40"
  >
    <ul>
      <li class="p-5 w-full">
        <nuxt-link :to="{}">Support</nuxt-link>
      </li>
      <li class="p-5 w-full">
        <nuxt-link :to="{}">Contribute</nuxt-link>
      </li>
      <li class="p-5 w-full">
        <nuxt-link :to="{}">About us</nuxt-link>
      </li>
      <li class="p-5 w-full"><color-switcher /></li>
    </ul>
  </div>
</template>

<script>
import ColorSwitcher from "./ColorSwitcher.vue";
export default {
  components: { ColorSwitcher }
};
</script>

<style></style>
