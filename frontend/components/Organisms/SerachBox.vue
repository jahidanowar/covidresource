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
          <button
            type="submit"
            class="btn-primary mt-2 flex justify-center items-center"
          >
            <template v-if="loading"
              >{{ $t("searching") }}
              <svg
                class="animate-spin ml-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </template>
            <template v-else>
              {{ $t("search") }}
              <svg
                class="w-5 h-5 ml-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </template>
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
  data() {
    return {
      loading: false
    };
  },
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
        this.loading = true;
        const resources = await this.$axios.$get(
          `/resource?category=${this.category}&state=${this.state}&district=${this.district}`
        );
        this.$store.commit("resource/SET_RESOURCES", resources.data);
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
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
