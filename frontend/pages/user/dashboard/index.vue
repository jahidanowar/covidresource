<template>
  <div class="dashboard py-5 px-4 sm:px-0">
    <h1 class="text-3xl font-semibold mb-5">Dashboard</h1>
    <div class="flex">
      <div
        class="w-1/2 rounded border-t-4 border-red-400 bg-white dark:bg-gray-700 p-5 shadow text-center mr-3"
      >
        <div class="text-3xl font-bold">{{ resources.count }}</div>
        <span>PENDING</span>
      </div>
      <div
        class="w-1/2 rounded border-t-4 border-blue-400 bg-white dark:bg-gray-700 p-5 shadow text-center"
      >
        <div class="text-3xl font-bold">15K</div>
        <span>RESOURCES</span>
      </div>
    </div>
    <section class="mt-5">
      <h2 class="text-xl font-semibold mb-5">Pending Verification</h2>

      <div class="grid sm:grid-cols-2 gap-5">
        <div
          v-for="(resource, i) in resources.data"
          :key="i"
          class="rounded p-3 bg-white dark:bg-gray-700 shadow"
        >
          <chip>Hospital</chip>
          <h3 class="mt-3 text-xl mb-2">{{ resource.name }}</h3>
          <p class="text-xs mb-3">
            Add: {{ resource.address }},{{ resource.district }},{{
              resource.state
            }}
          </p>
          <div class="">
            <a :href="resource.link" target="_blank" class="text-blue-400"
              >Source Link</a
            >
          </div>
          <div class="flex gap-5 mt-3">
            <button class="btn-danger text-xs">Reject</button>
            <button class="btn-primary text-xs">Approve</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Chip from "../../../components/Atoms/Chip.vue";
export default {
  components: { Chip },
  middleware: ["auth"],
  data() {
    return {
      resources: {}
    };
  },
  mounted() {
    console.log(this.$auth.user.name);
    this.getPendingResources();
  },
  methods: {
    logout() {
      this.$auth.logout();
    },
    async getPendingResources() {
      try {
        const resources = await this.$axios.get("/resource/pending");
        this.resources = resources.data;
      } catch (error) {
        console.log(error.response);
      }
    }
  }
};
</script>

<style></style>
