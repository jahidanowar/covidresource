<template>
  <span
    class="text-xs py-2 px-3 rounded-full mr-2"
    :class="activeClass"
  >
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "chip",
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  computed: {
    activeClass(){
      if(this.type === "default") return "bg-gray-200 dark:bg-gray-800 ";
      if(this.type === "primary") return "bg-green-50 text-green-600";
      if(this.type === "danger") return "bg-red-50 text-red-500";
      if(this.type === "warning") return "bg-yellow-100 text-yellow-500";
    }
  }
};
</script>

<style></style>
