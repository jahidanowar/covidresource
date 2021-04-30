<template>
  <div>
    <form action="" class="mt-5" @submit.prevent="handleSearch">
      <div class="flex flex-col">
        <div class="form-group">
          <label for="state">{{ $t("addResource.state") }}</label>
          <vue-select v-model="state" :data="states" />
        </div>
        <div class="form-group">
          <label for="district">{{ $t("addResource.district") }}</label>
          <vue-select :data="districts" v-model="district" />
        </div>
        <div class="form-group">
          <label for="category">{{ $t("addResource.searchCategory") }}</label>
          <category-select v-model="category" />
        </div>
        <div class="form-group">
          <button type="submit" class="btn-primary mt-2">
            Search
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import CategorySelect from "../Atoms/CategorySelect.vue";
import VueSelect from "./../Molecules/VueSelect";
export default {
  components: { VueSelect, CategorySelect },
  name: "index",
  computed: {
    state: {
      set(d) {
        this.$store.commit("search/SET_STATE", d);
      },
      get() {
        return this.$store.getters["search/getState"];
      }
    },
    district: {
      set(d) {
        this.$store.commit("search/SET_DISTRICT", d);
      },
      get() {
        return this.$store.getters["search/getDistrict"];
      }
    },
    category: {
      set(d) {
        this.$store.commit("search/SET_CATEGORY", d);
      },
      get() {
        return this.$store.getters["search/getCategory"];
      }
    },

    states() {
      return this.$store.getters["location/getStates"].map(item => item.state);
    },
    districts() {
      let state = this.$store.getters["location/getStates"].filter(
        item => item.state === this.state
      );
      return state.length == 1 ? state[0].districts : [];
    }
  },
  methods: {
    async handleSearch() {
      try {
        const resources = await this.$axios.$get(
          `/resource?category=${this.category}&state=${this.state}&district=${this.district}`
        );
        this.$store.commit("resource/SET_RESOURCES", resources.data);
      } catch (error) {
        console.log(error);
      }
      if (this.$route.path !== "/resources") {
        this.$router.push(this.localeRoute({ name: "resources" }));
      }
    }
  },
  mounted() {
    this.$store.getters["search/getSearchParam"];
  }
};
</script>

<style></style>
