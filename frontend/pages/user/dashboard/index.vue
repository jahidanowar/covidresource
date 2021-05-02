<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
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
