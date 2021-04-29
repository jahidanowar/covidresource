<template>
  <div class="sm:py-5 px-4 sm:px-0">
    <div class="my-8">
      <h1 class="text-4xl">Search</h1>
      <form action="" class="mt-5">
        <div class="flex">
          <div class="mr-2">
            <select name="state" id="" class="form-control appearance-none">
              <option value="west Bengal">West Bengal</option>
            </select>
          </div>
          <div class="mr-2">
            <select name="district" id="" class="form-control appearance-none">
              <option value="Murshidabad">Murshidabad</option>
            </select>
          </div>
          <div class="mr-2">
            <button type="submit" class="btn-primary">Search</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import CardResource from "../components/Organisms/CardResource.vue";
export default {
  components: { CardResource },
  name: "index",
  async fetch() {
    try {
      const resource = await this.$axios.$get("resource");
      this.$store.commit("resource/SET_RESOURCES", resource.data);
    } catch (error) {
      console.log(error);
    }
  },
  data() {
    return {
      serachQuery: ""
    };
  },
};
</script>

<style></style>
