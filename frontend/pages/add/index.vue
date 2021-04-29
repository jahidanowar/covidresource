<template>
  <div class="my-5 px-4 sm:px-0">
    <h1 class="text-3xl mb-2">{{ $t("addResource.title") }}</h1>
    <p class="opacity-70">{{ $t("addResource.subtitle") }}</p>
    <form @submit.prevent="addResource" class="mt-5" autocomplete="off">
      <div class="form-group">
        <label for="category">{{ $t("addResource.category") }}</label>
        <category-select v-model="resourceForm.category" />
      </div>
      <div class="form-group">
        <label for="name">{{ $t("addResource.name") }}</label>
        <input type="text" v-model="resourceForm.name" class="form-control" />
      </div>
      <div class="form-group">
        <label for="phone">{{ $t("addResource.phone") }}</label>
        <input type="tel" v-model="resourceForm.phone" class="form-control" />
      </div>
      <div class="form-group">
        <label for="state">{{ $t("addResource.state") }} </label>
        <vue-select v-model="resourceForm.state" :data="states" />
      </div>
      <div class="form-group">
        <label for="district">{{ $t("addResource.district") }}</label>
        <vue-select v-model="resourceForm.district" :data="districts" />
      </div>
      <div class="form-group">
        <label for="address">{{ $t("addResource.address") }}</label>
        <input
          type="text"
          v-model="resourceForm.address"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <button type="submit" class="btn-primary mt-2">
          {{ $t("addResource.add") }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import CategorySelect from '../../components/Atoms/CategorySelect.vue';
import VueSelect from "../../components/Molecules/VueSelect.vue";
export default {
  components: { VueSelect, CategorySelect },
  name: "Add",
  data() {
    return {
      resourceForm: {
        category: 0,
        name: "",
        address: "",
        district: "",
        state: "",
        lat: "",
        long: ""
      }
    };
  },
  computed: {
    states() {
      return this.$store.getters["location/getStates"].map(item => item.state);
    },
    districts() {
      let state = this.$store.getters["location/getStates"].filter(
        item => item.state === this.resourceForm.state
      );
      return state.length == 1 ? state[0].districts : [];
    }
  },
  methods: {
    async addResource() {
      try {
        const resource = await this.$axios.post("/resource", this.resourceForm);
        // console.log(resource);
        if (resource) {
          this.$router.replace({ path: "/" });
        }
      } catch (error) {
        console.log(error.response.data);
      }
    },
    getLocation() {
      if (!navigator.geolocation) return;
      navigator.geolocation.getCurrentPosition(position => {
        this.resourceForm.lat = position.coords.latitude;
        this.resourceForm.long = position.coords.longitude;
      });
    },
    stateSelected(v) {
      this.resourceForm.state = v;
    }
  },
  mounted() {
    this.getLocation();
  }
};
</script>

<style></style>
