<template>
  <div class="sm:py-5 px-4 sm:px-0">
    <div class="my-8">
      <input
        type="text"
        class="w-full shadow-md p-4 rounded dark:bg-gray-700 focus:shadow-lg focus:outline-none"
        :placeholder="$t('serach')"
      />
    </div>
    <div class="grid sm:grid-cols-2 gap-5">
      <card-resource v-for="i in 10" :key="i" />
    </div>
  </div>
</template>

<script>
import CardResource from "../components/Organisms/CardResource.vue";
export default {
  components: { CardResource },
  name: "index"
};
</script>

<style></style>
