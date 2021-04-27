<template>
  <div
    class="bg-white dark:bg-gray-800 absolute top-0 left-0 h-screen w-full z-40"
  >
    <ul>
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
      <li class="p-5 w-full">
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
