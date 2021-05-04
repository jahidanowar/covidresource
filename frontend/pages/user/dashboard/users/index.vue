<template>
  <div class="dashboard py-5 px-4 sm:px-0">
    <h1 class="text-3xl font-semibold mb-5">Users</h1>
    <section v-if="users.length > 0" class="mt-5">
      <h2 class="text-xl font-semibold mb-5">Pending Verification</h2>
      <div class="grid sm:grid-cols-2 gap-5">
        <div
          v-for="user in users"
          :key="user._id"
          class="p-3 shadow rounded flex flex-col"
        >
          <div>
            <p>{{ user.name }}</p>
            <p>{{ user.email }}</p>
          </div>
          <div class="flex gap-5 mt-2">
            <button
              class="btn-danger"
              @click="handleUserAction('reject', user._id)"
            >
              Reject
            </button>
            <button
              class="btn-primary"
              @click="handleUserAction('verify', user._id)"
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </section>
    <section v-else class="text-center mt-5">
      All the users are verified slide down to check for new users
    </section>
  </div>
</template>

<script>
export default {
  middleware: ["auth", "isModerator"],
  data() {
    return {
      users: {}
    };
  },
  mounted() {
    this.getUnverifiedUser();
  },

  methods: {
    async getUnverifiedUser() {
      try {
        const users = await this.$axios.get("/auth/users");
        this.users = users.data;
      } catch (error) {
        console.log(error.response);
      }
    },
    handleUserAction(action, id) {
      if (action === "verify") {
        return this.verifyUser(id);
      } else if (action === "reject") {
        return this.deleteUser(id);
      }
    },
    async verifyUser(id) {
      try {
        const response = await this.$axios.patch(`/auth/users/${id}`, {
          verified: true
        });
        this.removeUser(id);
      } catch (error) {}
    },
    async deleteUser(id) {
      try {
        const response = await this.$axios.delete(`/auth/users/${id}`);
        this.removeUser(id);
      } catch (error) {}
    },
    removeUser(id) {
      const itemIndex = this.users.findIndex(item => item._id === id);
      itemIndex !== -1 && this.users.splice(itemIndex, 1);
    }
  },
  head() {
    return {
      title: "Users"
    };
  }
};
</script>

<style></style>
