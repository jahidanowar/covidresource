<template>
  <nuxt-link
    class="flex items-center"
    :class="[
      type === 'navlink' ? 'flex-row sm:flex-row-reverse' : 'flex-col text-sm'
    ]"
    :to="localePath(to)"
  >
    <slot></slot>
    <span :class="{ 'hidden sm:block': type !== 'navlink' }"> {{ title }}</span>
  </nuxt-link>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    to: String,
    title: String,
    type: String
  }
};
</script>

<style></style>
