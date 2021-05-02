<template>
  <div class="dashboard py-5 px-4 sm:px-0">
    <h1 class="text-3xl font-semibold mb-5">Dashboard</h1>
    <div class="flex">
      <div
        class="w-1/2 rounded border-t-4 border-red-400 bg-white dark:bg-gray-700 p-5 shadow text-center mr-3"
      >
        <div class="text-3xl font-bold">100</div>
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
          v-for="i in 10"
          :key="i"
          class="rounded p-3 bg-white dark:bg-gray-700 shadow mb-5"
        >
          <chip>Hospital</chip>
          <h3 class="mt-3 text-xl mb-2">Dumkal Hospital</h3>
          <p class="text-sm mb-3">Add: Dumkal, Murshidabad, West Bengal</p>
          <div class="">
            <a href="#" target="_blank" class="text-blue-400">Source Link</a>
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
  mounted() {
    console.log(this.$auth.user.name);
  },
  methods: {
    logout() {
      this.$auth.logout();
    }
  }
};
</script>

<style></style>
