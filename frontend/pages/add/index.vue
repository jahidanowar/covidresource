<template>
  <div class="my-5 px-4 sm:px-0">
    <h1 class="text-3xl mb-2">Be a hero</h1>
    <p class="opacity-70">Help other by adding verified resources</p>
    <form @submit.prevent="addResource" class="mt-5">
      <div class="form-group">
        <label for="category">Category</label>
        <select
          class="form-control appearance-none"
          v-model="resourceForm.category"
        >
          <option value="0">Select Category</option>
          <option value="Oxygen">Oxygen</option>
          <option value="Oxygen Refil">Oxygen Refil</option>
          <option value="Helpline">Helpline</option>
          <option value="Ambulance">Ambulance</option>
          <option value="Hospital">Hospital</option>
        </select>
      </div>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" v-model="resourceForm.name" class="form-control" />
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <input type="tel" v-model="resourceForm.phone" class="form-control" />
      </div>
      <div class="form-group">
        <label for="state">State</label>
        <input type="text" v-model="resourceForm.state" class="form-control" />
      </div>
      <div class="form-group">
        <label for="district">District</label>
        <input
          type="text"
          v-model="resourceForm.district"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="address">Address</label>
        <input
          type="text"
          v-model="resourceForm.address"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <button
          type="submit"
          class="mt-2 p-2 rounded bg-green-400 w-full text-white"
        >
          Add Resource
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Add",
  data() {
    return {
      resourceForm: {
        category: 0,
        name: "",
        address: "",
        district: "",
        state: "",
        lat: "23.2253",
        long: "88.3596"
      }
    };
  },
  methods: {
    async addResource() {
      try {
        const resource = await this.$axios.post("/resource", this.resourceForm);
        console.log(resource);
      } catch (error) {
        console.log(error.response.data);
      }
    }
  }
};
</script>

<style></style>
