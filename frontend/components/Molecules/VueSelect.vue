<template>
  <div @click="showOptions = false" class="relative">
    <input
      type="text"
      name="searchQuery"
      class="form-control"
      @input="handleInput"
      ref="input"
      autocomplete="off"
      :value="value"
      :class="errorClass"
    />
    <div v-if="showOptions">
      <ul
        class="bg-white dark:bg-gray-500 rounded absolute w-full shadow-xl max-h-48 overflow-y-scroll z-50"
      >
        <li
          v-for="(item, i) in searchResults"
          :key="i"
          @click="selectValue(item)"
          class="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      required: false
    },
    errorClass: Object
  },
  data() {
    return {
      showOptions: false,
      chosenOption: "",
      query: ""
    };
  },

  computed: {
    searchResults() {
      return this.data.filter(item => {
        return item.toLowerCase().includes(this.query.toLowerCase());
      });
    }
  },

  methods: {
    reset() {
      this.$emit("input", "");
      this.chosenOption = "";
    },

    selectValue(v) {
      this.$emit("input", v);
      this.chosenOption = v;
      this.$emit("selected", v);
      this.showOptions = false;
      this.$refs.input.value = v;
      // console.log(v)
    },

    handleInput(e) {
      this.$emit("input", e.target.value);
      this.query = e.target.value;
      this.showOptions = true;
    },

    clickedOutside() {
      // this.showOptions = false;
      // if (!this.chosenOption) {
      //   this.$emit("input", "");
      // }
    }
  }
};
</script>

<style scoped>
.mh-48 {
  max-height: 10rem;
}
</style>
