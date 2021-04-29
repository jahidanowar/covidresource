<template>
  <div>
    <form action="" class="mt-5" @submit.prevent="handleSearch">
      <div class="flex flex-col">
        <div class="form-group">
          <label for="state">{{ $t("addResource.state") }}</label>
          <vue-select @selected="stateSelected" :data="states" />
        </div>
        <div v-if="serachQuery.state.length > 0" class="form-group">
          <label for="district">{{ $t("addResource.district") }}</label>
          <vue-select :data="districts" v-model="serachQuery.district" />
        </div>
        <div class="form-group">
          <button
            type="submit"
            class="btn-primary mt-2"
            :disabled="
              serachQuery.state.length < 1 || serachQuery.district.length < 1
            "
          >
            Search
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import VueSelect from "./../Molecules/VueSelect";
export default {
  components: { VueSelect },
  name: "index",
  data() {
    return {
      serachQuery: {
        state: "",
        district: "",
        category: ""
      }
    };
  },
  computed: {
    states() {
      return this.$store.getters["location/getStates"].map(item => item.state);
    },
    districts() {
      let state = this.$store.getters["location/getStates"].filter(
        item => item.state === this.serachQuery.state
      );
      return state ? state[0].districts : [];
    }
  },
  methods: {
    stateSelected(v) {
      this.serachQuery.state = v;
    },
    handleSearch() {
      this.$store.commit("search/SET_SEARCH", this.serachQuery);
      this.$router.replace({ path: "/resources" });
    }
  }
};
</script>

<style></style>
