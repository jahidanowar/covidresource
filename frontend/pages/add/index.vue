<template>
  <div class="my-5 px-4 sm:px-0">
    <h1 class="text-3xl mb-2">{{ $t("addResource.title") }}</h1>
    <p class="opacity-70">{{ $t("addResource.subtitle") }}</p>
    <form @submit.prevent="addResource" class="mt-5" autocomplete="off">
      <div class="form-group">
        <label for="category">{{ $t("addResource.category") }}</label>
        <select
          class="form-control appearance-none"
          v-model="resourceForm.category"
        >
          <option value="0">Select Category</option>
          <option value="Oxygen">Oxygen</option>
          <option value="Oxygen Refil">Oxygen Refil</option>
          <option value="Helpline">Helpline</option>
          <option value="Ambulance">Ambulance</option>
          <option value="Hospital">Hospital</option>
        </select>
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
        <vue-select @selected="stateSelected" :data="states" />
      </div>
      <div class="form-group" v-if="resourceForm.state.length > 0">
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
import VueSelect from "../../components/Molecules/VueSelect.vue";
export default {
  components: { VueSelect },
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
      return this.$store.getters["location/getStates"].filter(
        item => item.state === this.resourceForm.state
      )[0].districts;
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
    stateSelected(v){
      this.resourceForm.state = v
    }
  },
  mounted() {
    this.getLocation();
  }
};
</script>

<style></style>
