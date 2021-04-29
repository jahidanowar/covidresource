<template>
  <div class="sm:py-5 px-4 sm:px-0">
    <div class="my-8">
      <h1 class="text-3xl font-semibold text-center">Search Resources</h1>
      <serach-box />
    </div>
  </div>
</template>

<script>
import SerachBox from '../components/Organisms/SerachBox.vue';
export default {
  components: { SerachBox },
  name: "index",
  data() {
    return{

    }
  },
  computed: {},
  methods: {}
};
</script>

<style></style>
