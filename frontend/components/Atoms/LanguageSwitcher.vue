<template>
  <div>
    <button
      class="bg-gray-100 dark:bg-gray-700 py-2 px-4 rounded appearance-none w-full focus:outline-none border border-transparent focus:border-green-300"
      @click="showLangs = !showLangs"
    >
      {{ $i18n.localeProperties.name }}
    </button>
    <div v-if="showLangs" class="mt-5 text-center">
      <nuxt-link
        class="w-full block py-2"
        v-for="lang in langs"
        :key="lang.code"
        :to="switchLocalePath(lang.code)"
        >{{ lang.name }}</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "LanguageSwitcher",
  data() {
    return {
      showLangs: false
    };
  },
  computed: {
    langs() {
      return this.$i18n.locales.filter(i => i.code !== this.locale);
    }
  },
  methods: {
    changeLang() {
      console.log(this.$i18n);
    }
  }
};
</script>

<style></style>
