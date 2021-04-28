<template>
  <div class="rounded shadow p-4 bg-white dark:bg-gray-700">
    <div class="inline-flex mb-4">
      <chip>Hospital</chip>
    </div>
    <div class="flex flex-col lg:flex-row justify-between lg:items-center">
      <div class="info">
        <h2 class="text-3xl mb-2 font-semibold">Dumkal Hospital</h2>
        <div class="address flex items-center opacity-70 mb-4">
          <svg
            class="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
          <p class="text-sm">Jalangi, Murshidabad, West Bengal</p>
        </div>
      </div>
      <div class="contact">
        <div class="flex items-center">
          <svg
            class="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            ></path>
          </svg>
          <a href="tel:123" class="text-xl mr-2">6298907864</a>
          <a href="tel:123" class="text-xl mr-2">6298907864</a>
        </div>
      </div>
    </div>
    <hr class="my-3 dark:border-gray-600" />
    <div class="bar flex flex-col sm:flex-row sm:items-center justify-between">
      <p>Didn't pickup the call</p>
      <div class="flex items-center opacity-80">
        <svg
          class="w-4 h-4 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <p class="text-sm">23 Apr 2021 07:00 PM</p>
      </div>
    </div>
  </div>
</template>

<script>
import Chip from '../Atoms/Chip.vue';
export default {
  components: { Chip },};
</script>

<style></style>
