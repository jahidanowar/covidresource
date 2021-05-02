<template>
  <div class="alert bg-white dark:bg-gray-600 rounded p-3 w-full border-l-2 border-green-400">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    message: String
  }
};
</script>

<style></style>
