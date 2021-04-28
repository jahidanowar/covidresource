<template>
  <div>
    <button @click.prevent="darkMode()" class="focus:outline-none">
      <div v-if="dark" class="flex items-center sm:flex-row-reverse">
        <svg
          class="w-6 h-6 cursor-pointer mr-2 sm:ml-2 text-yellow-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          ></path>
        </svg>
        {{ $t("light") }}
      </div>
      <div v-else class="flex items-center sm:flex-row-reverse">
        <svg
          class="w-6 h-6 cursor-pointer mr-2 sm:ml-2 text-blue-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          ></path>
        </svg>
        {{ $t("dark") }}
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: "ColorSwitcher",
  computed: {
    dark() {
      return this.$colorMode.value === "dark" ? true : false;
    }
  },
  methods: {
    darkMode() {
      this.$colorMode.value === "dark"
        ? (this.$colorMode.preference = "light")
        : (this.$colorMode.preference = "dark");
    }
  }
};
</script>

<style></style>
