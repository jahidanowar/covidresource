<template>
  <select
    class="form-control appearance-none"
    ref="select"
    @input="handleSelect"
  >
    <option value="">Select</option>
    <option value="Oxygen">Oxygen</option>
    <option value="Oxygen Refil">Oxygen Refil</option>
    <option value="Hospital">Hospital</option>
    <option value="Medicines">Medicines</option>
    <option value="Ambulance">Ambulance</option>
    <option value="Helpline">Helpline</option>
    <option value="Food">Food</option>
    <option value="Testing">Testing</option>
  </select>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleSelect(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>

<style></style>
