<template>
  <div class="flex flex-col items-center text-sm font-semibold">
    <template v-if="!isOpened">
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
      {{ $t("appbar.menu") }}
    </template>
    <template v-else>
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
      {{ $t("appbar.close") }}
    </template>
  </div>
</template>

<script>
export default {
  props: {
    isOpened: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style></style>
