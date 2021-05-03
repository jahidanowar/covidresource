<template>
  <div class="dashboard py-5 px-4 sm:px-0">
    <h1 class="text-3xl font-semibold mb-5">Dashboard</h1>
    <div class="flex">
      <div
        class="w-1/2 rounded border-t-4 border-red-400 bg-white dark:bg-gray-700 p-5 shadow text-center mr-3"
      >
        <div class="text-3xl font-bold">{{ getPendingResource }}</div>
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
        <card-resource-dash-board
          v-for="resource in resources.data"
          :key="resource._id"
          :resource="resource"
          @action="action"
        />
      </div>
    </section>
  </div>
</template>

<script>
import CardResourceDashBoard from "../../../components/Organisms/CardResourceDashBoard.vue";
export default {
  components: { CardResourceDashBoard },
  middleware: ["auth"],
  data() {
    return {
      resources: {}
    };
  },
  computed: {

    getPendingResource() {
      return this.resources.data ? this.resources.data.length : 0;
    }
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
    },
    action(id) {
      const resourceIndex = this.resources.data.findIndex(
        item => item._id === id
      );
      resourceIndex !== -1 && this.resources.data.splice(resourceIndex, 1);
    }
  }
};
</script>

<style></style>
