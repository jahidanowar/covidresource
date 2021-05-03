<template>
  <div
    class="alert bg-white dark:bg-gray-600 rounded p-3 w-full border-l-2 border-green-400 mt-5"
    :class="alertType"
  >
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    message: String,
    type: {
      type: String,
      default: "default"
    }
  },
  computed: {
    alertType() {
      if (this.type === "success") return "border-green-400";
      if (this.type === "danger") return "border-red-400";
      if (this.type === "default") return "border-gray-500";
    }
  }
};
</script>

<style></style>
