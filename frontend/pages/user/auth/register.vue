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
        <button class="btn-primary mb-4" :disabled="loading">
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
    <alert v-if="success" :message="success" type="success" />
  </div>
</template>

<script>
import Alert from "../../../components/Atoms/Alert.vue";
export default {
  components: { Alert },
  middleware: ["auth"],
  auth: "guest",
  data() {
    return {
      loading: false,
      registerForm: {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      errors: {},
      success: null
    };
  },
  methods: {
    async handleRegister() {
      if (this.errors.error) return;
      try {
        this.loading = true;
        const userRegistered = await this.$axios.post(
          "/auth/register",
          this.registerForm
        );

        if (userRegistered.status === 201) {
          this.success =
            "Thanks for joining. We're redirecting you to login page";
          setTimeout(() => {
            this.success = null;
            this.$router.replace({ path: "/user/auth/login" });
          }, 3000);
        }
      } catch (error) {
        this.errors = error.response.data;
      } finally {
        this.loading = false;
      }
    }
  },
  watch: {
    "registerForm.email"(v) {
      if (
        !v.match(
          /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        )
      ) {
        this.errors.error = true;
        this.errors.email = {};
        this.errors.email.message = "Invalid Email, Please use a correct Email";
      } else {
        this.errors.email = {};
        this.errors.error = false;
      }
    },
    "registerForm.password"(v) {
      if (v.length < 8) {
        this.errors.error = true;
        this.errors.password = {};
        this.errors.password.message =
          "Password length shoud be atleast 8 Character";
      } else {
        this.errors.password = {};
        this.errors.error = false;
      }
    },
    "registerForm.confirmPassword"(v) {
      if (this.registerForm.password !== v) {
        this.errors.error = true;
        this.errors.confirmPassword = {};
        this.errors.confirmPassword.message =
          "Confirmation password is not Matching with Password";
      } else {
        this.errors.confirmPassword = {};
        this.errors.error = false;
      }
    }
  },
  head() {
    return {
      title: "Register as a volunteer"
    };
  }
};
</script>

<style></style>
