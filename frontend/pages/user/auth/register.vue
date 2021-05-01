<template>
  <div class="py-5 px-4 sm:px-0">
    <h1 class="text-3xl font-semibold mb-2">Register as volunteer</h1>
    <p class="opacity-70">Become a volunteer and add verfied resources</p>
    <form @submit.prevent="handleRegister" class="mt-5">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          v-model="registerForm.email"
          required
        />
        <span
          class="form-error text-xs text-red-400"
          v-if="errors && errors.email"
          >{{ errors.email.message }}</span
        >
      </div>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          v-model="registerForm.name"
          required
        />
        <span
          class="form-error text-xs text-red-400"
          v-if="errors && errors.name"
          >{{ errors.name.message }}</span
        >
      </div>
      <div class="form-group">
        <label for="pssword">Password</label>
        <input
          type="password"
          class="form-control"
          v-model="registerForm.password"
          required
        />
        <span
          class="form-error text-xs text-red-400"
          v-if="errors && errors.password"
          >{{ errors.password.message }}</span
        >
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirm Password</label>
        <input
          type="password"
          class="form-control"
          v-model="registerForm.confirmPassword"
          required
        />
        <span
          class="form-error text-xs text-red-400"
          v-if="errors && errors.confirmPassword"
          >{{ errors.confirmPassword.message }}</span
        >
      </div>
      <div class="form-group mt-5 text-center">
        <button class="btn-primary mb-4">
          <template v-if="loading">
            Registering...
          </template>
          <template v-else>
            Register
          </template>
        </button>
        <nuxt-link to="/user/auth/login" class="opacity-80"
          >Already registered ?</nuxt-link
        >
      </div>
    </form>
    <alert v-if="success" :message="success" />
  </div>
</template>

<script>
import Alert from "../../../components/Atoms/Alert.vue";
export default {
  components: { Alert },
  data() {
    return {
      loading: false,
      registerForm: {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      errors: null,
      success: null
    };
  },
  methods: {
    async handleRegister() {
      if (this.errors) return;

      try {
        this.loading = true;
        const userRegistered = await this.$axios.post(
          "/user/register",
          this.registerForm
        );

        if (userRegistered.status === 201) {
          this.success =
            "Thanks for joining. One of the moderators will activate your account soon.";
          setTimeout(() => {
            this.success = null;
            this.$router.replace({ path: "/user/auth/login" });
          }, 8000);
        }
      } catch (error) {
        this.errors = error.response.data;
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style></style>
