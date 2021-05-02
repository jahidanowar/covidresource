<template>
  <div
    class="bg-white dark:bg-gray-800 fixed top-0 sm:top-20 left-0 h-screen w-full z-40"
  >
    <ul class="container mx-auto sm:text-right mt-5 p-5">
      <li class="p-3 w-full">
        <menu-item to="/" :title="$t('drawer.support')" type="navlink">
          <svg
            class="w-6 h-6 mr-2 sm:ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            ></path>
          </svg>
        </menu-item>
      </li>
      <li class="p-3 w-full">
        <menu-item to="/" :title="$t('drawer.contribute')" type="navlink">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 mr-2 sm:ml-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            ></path>
          </svg>
        </menu-item>
      </li>
      <li class="p-3 w-full">
        <menu-item to="/" :title="$t('drawer.about')" type="navlink">
          <svg
            class="w-6 h-6 mr-2 sm:ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
        </menu-item>
      </li>
      <li v-if="$auth.loggedIn" class="p-3 w-full">
        <logout />
      </li>

      <li class="p-3 w-full"><color-switcher /></li>
      <li class="p-3">
        <language-switcher />
      </li>
    </ul>
  </div>
</template>

<script>
import LanguageSwitcher from "../Atoms/LanguageSwitcher.vue";
import Logout from "../Atoms/Logout.vue";
import MenuItem from "../Atoms/MenuItem.vue";
import ColorSwitcher from "./../Atoms/ColorSwitcher";
export default {
  components: { ColorSwitcher, LanguageSwitcher, MenuItem, Logout }
};
</script>

<style></style>
