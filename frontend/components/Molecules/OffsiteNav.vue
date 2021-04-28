<template>
  <div
    class="bg-white dark:bg-gray-800 fixed top-0 sm:top-20 left-0 h-screen w-full z-40"
  >
    <ul class="container mx-auto sm:text-right mt-5">
      <li class="p-5 w-full">
        <nuxt-link :to="{}">{{ $t("drawer.support") }}</nuxt-link>
      </li>
      <li class="p-5 w-full">
        <nuxt-link :to="{}">{{ $t("drawer.contribute") }}</nuxt-link>
      </li>
      <li class="p-5 w-full">
        <nuxt-link :to="{}">{{ $t("drawer.about") }}</nuxt-link>
      </li>
      <li class="p-5 w-full"><color-switcher /></li>
      <li class="p-5 sm:w-1/3 sm:ml-auto">
        <language-switcher />
      </li>
    </ul>
  </div>
</template>

<script>
import LanguageSwitcher from "../Atoms/LanguageSwitcher.vue";
import ColorSwitcher from "./../Atoms/ColorSwitcher";
export default {
  components: { ColorSwitcher, LanguageSwitcher }
};
</script>

<style></style>
