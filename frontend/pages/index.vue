<template>
  <div class="sm:py-5 px-4 sm:px-0">
    <div class="my-8">
      <input type="text" class="w-full shadow-lg p-4 rounded dark:bg-gray-700" :placeholder="$t('serach')">
    </div>
    <div class="grid sm:grid-cols-2 gap-10">
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
