<template>
  <div>
    <template v-if="type === 'navlink'">
      <a class="flex items-center flex-row sm:flex-row-reverse" :href="to">
        <slot></slot>
        <span> {{ title }}</span>
      </a>
    </template>
    <template v-else>
      <nuxt-link
        class="flex items-center flex-col text-sm"
        :to="localePath(to)"
      >
        <slot></slot>
        <span class="hidden sm:block"> {{ title }}</span>
      </nuxt-link>
    </template>
  </div>
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
