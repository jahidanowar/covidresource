<template>
  <div class="my-5 px-4 sm:px-0">
    <h1 class="text-3xl mb-2">{{ $t("edit") }}</h1>
    <form class="mt-5" @submit.prevent="handleUpdate">
      <div class="form-group">
        <label for="name">{{ $t("addResource.name") }}</label>
        <input
          type="text"
          v-model="resourceForm.name"
          class="form-control"
          :class="{ 'border-red-300': errors && errors.name }"
          required
        />
        <span
          class="form-error text-xs text-red-400"
          v-if="errors && errors.name"
          >{{ errors.name.message }}</span
        >
      </div>
      <div class="form-group">
        <label for="phone">{{ $t("addResource.phone") }}</label>
        <input
          type="tel"
          v-model="resourceForm.phone"
          class="form-control"
          :class="{ 'border-red-300': errors && errors.phone }"
          required
        />
        <span
          class="form-error text-xs text-red-400"
          v-if="errors && errors.phone"
          >{{ errors.phone.message }}</span
        >
      </div>
      <div class="form-group">
        <label for="info">{{ $t("addResource.info") }}</label>
        <input type="text" v-model="resourceForm.info" class="form-control" />
      </div>
      <div class="form-group mb-4">
        <button type="submit" class="btn-primary mt-2">
          {{ $t("addResource.update") }}
        </button>
      </div>
      <transition name="fade">
        <alert v-if="success" :message="success" type="success" />
      </transition>
    </form>
  </div>
</template>

<script>
import Alert from "../../components/Atoms/Alert.vue";
export default {
  components: { Alert },
  middleware: ["auth"],
  data() {
    return {
      resourceForm: {},
      errors: null,
      success: null
    };
  },
  computed: {
    resourceId() {
      return this.$route.params.id;
    }
  },
  mounted() {
    this.getResource();
  },
  methods: {
    async getResource() {
      try {
        const response = await this.$axios.get(`/resource/${this.resourceId}`);
        this.resourceForm = response.data.data;
      } catch (error) {
        console.log(error.response);
      }
    },
    async handleUpdate() {
      try {
        const response = await this.$axios.patch(
          `/resource/${this.resourceId}`,
          this.resourceForm
        );
        if (response) {
          this.success = "Thank you 🙂, The resource has been update";
          setTimeout(() => {
            this.success = null;
            this.$router.go(-1);
          }, 5000);
        }
      } catch (error) {}
    }
  },
  head() {
    return {
      title: "Edit Resource"
    };
  }
};
</script>

<style></style>
