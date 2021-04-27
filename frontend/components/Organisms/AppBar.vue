<template>
  <div>
    <div class="w-full bg-gray-100 dark:bg-gray-700 fixed bottom-0 z-50">
      <div class="container mx-auto flex justify-between items-center">
        <logo class="hidden" />
        <ul class="w-full inline-flex justify-around">
          <li class="p-5">
            <nuxt-link class="flex flex-col items-center" to="/">
              <svg
                class="w-6 h-6"
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
              map
            </nuxt-link>
          </li>
          <li class="p-5">
            <nuxt-link class="flex flex-col items-center" to="/list">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                ></path>
              </svg>
              tiles
            </nuxt-link>
          </li>
          <li class="p-5">
            <nuxt-link class="flex flex-col items-center" to="/add">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              add
            </nuxt-link>
          </li>
          <li class="p-5">
            <button @click="toggleDrawer" class="focus:outline-none">
              <icon-menu :isOpened="drawer" />
            </button>
          </li>
        </ul>
      </div>
    </div>
    <offsite-nav v-if="drawer" />
  </div>
</template>

<script>
import ColorSwitcher from "../Atoms/ColorSwitcher.vue";
import IconMenu from "../Atoms/IconMenu.vue";
import OffsiteNav from "../Molecules/OffsiteNav.vue";
import Logo from "./../Atoms/Logo";
export default {
  components: { Logo, ColorSwitcher, IconMenu, OffsiteNav },
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  }
};
</script>

<style></style>
