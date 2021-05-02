<template>
  <div class="rounded p-3 bg-white dark:bg-gray-700 shadow">
    <chip>{{ resource.category }}</chip>
    <h3 class="mt-3 text-xl mb-2">{{ resource.name }}</h3>
    <p class="text-xs mb-3">
      Add: {{ resource.address }},{{ resource.district }},{{ resource.state }}
    </p>
    <div class="">
      <a :href="resource.link" target="_blank" class="text-blue-400"
        >Source Link</a
      >
    </div>
    <div class="flex gap-5 mt-3">
      <button
        class="btn-danger text-xs"
        @click="handleAction('reject', resource._id)"
      >
        Reject
      </button>
      <button
        class="btn-primary text-xs"
        @click="handleAction('approve', resource._id)"
      >
        Approve
      </button>
    </div>
  </div>
</template>

<script>
import Chip from "../Atoms/Chip.vue";
export default {
  name: "CardResourceDashboard",
  props: {
    resource: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      success: null
    };
  },
  components: {
    Chip
  },
  methods: {
    handleAction(action, id) {
      if (action === "approve") {
        this.$axios
          .patch(`/resource/${id}`, { status: "published" })
          .then(response => {
            this.success = "Resource has been approved 👍";
          });
      } else if (action === "reject") {
        this.$axios
          .delete(`/resource/${id}`)
          .then(response => {
            this.success = "Resource has been dropped";
          });
      }
    }
  }
};
</script>

<style></style>
