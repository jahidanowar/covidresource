<template>
  <div
    class="container mx-auto py-5 px-4 sm:px-0 h-screen grid place-items-center"
  >
    <div>
      <h1 class="text-3xl font-semibold mb-2">Login</h1>
      <form @submit.prevent="handleLogin" class="mt-5">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control"
            v-model="loginForm.email"
            required
          />
          <span
            class="form-error text-xs text-red-400"
            v-if="errors && errors.email"
            >{{ errors.email.message }}</span
          >
        </div>
        <div class="form-group">
          <label for="pssword">Password</label>
          <input
            type="password"
            class="form-control"
            v-model="loginForm.password"
            required
          />
          <span
            class="form-error text-xs text-red-400"
            v-if="errors && errors.password"
            >{{ errors.password.message }}</span
          >
        </div>
        <div class="form-group mt-5 text-center">
          <button class="btn-primary mb-4" :disabled="loading">
            <template v-if="loading">
              ..
            </template>
            <template v-else>
              Login
            </template>
          </button>
          <nuxt-link to="/user/auth/register" class="opacity-80"
            >Register as a volunteer</nuxt-link
          >
        </div>
      </form>
      <alert v-if="errors" :message="errors.message" type="danger" />
    </div>
  </div>
</template>

<script>
import Alert from "../../../components/Atoms/Alert.vue";

export default {
  layout: "empty",
  middleware: ["auth"],
  auth: "guest",
  components: { Alert },
  data() {
    return {
      loading: false,
      loginForm: {
        email: "",
        password: ""
      },
      errors: null,
      success: null
    };
  },
  methods: {
    async handleLogin() {
      try {
        this.loading = true;
        let response = await this.$auth.loginWith("local", {
          data: this.loginForm
        });
        // if (response.status === 200) {
        //   this.$router.replace({ path: "/user/dashboard" });
        // }
      } catch (error) {
        this.errors = error.response.data;
      } finally {
        this.loading = false;
      }
    }
  },
  head() {
    return {
      title: "Login"
    };
  }
};
</script>

<style></style>
