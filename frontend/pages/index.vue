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
      <card-resource
        v-for="(resource, i) in resources"
        :key="i"
        :name="resource.name"
        :phone="resource.phone"
        :address="
          resource.address + ', ' + resource.district + ', ' + resource.state
        "
        :date="resource.createdAt"
        :category="resource.category"
        :status="resource.verified ? 'Verified' : 'Not Verified'"
      />
    </div>
  </div>
</template>

<script>
import CardResource from "../components/Organisms/CardResource.vue";
export default {
  components: { CardResource },
  name: "index",
  async fetch() {
    try {
      const resource = await this.$axios.$get("resource");
      this.$store.commit("resource/SET_RESOURCES", resource.data);
    } catch (error) {
      console.log(error);
    }
  },
  computed: {
    resources() {
      return this.$store.getters["resource/getResources"];
    }
  }
};
</script>

<style></style>
