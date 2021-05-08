<template>
  <div class="px-4 sm:px-0 grid place-items-center py-10">
    <div class="wrapper w-full">
      <section class="search">
        <h1 class="text-3xl lg:text-5xl font-bold lg:text-center mb-5">
          {{ $("home.heading") }}
        </h1>
        <serach-box
          class="lg:py-5 lg:px-10 rounded-xl lg:pb-10 lg:border lg:bg-white lg:dark:bg-gray-700 lg:dark:border-gray-800"
        />
      </section>
      <section class="banners mt-10">
        <div class="grid lg:grid-cols-3 gap-5">
          <div
            class="rounded-xl bg-green-100 dark:bg-green-800 text-green-500 dark:text-green-300 px-8 py-5"
          >
            <a
              href="tel:1800 313 444 222"
              class="text-2xl lg:text-3xl  font-bold"
              >1800 313 444 222</a
            >
            <h2 class="text-md lg:text-xl mt-2 font-semibold">
              State Government Helpline
            </h2>
            <p class="text-xs lg:text-sm">for Covid patient in West Bengal</p>
          </div>
          <div
            class="rounded-xl bg-yellow-100 dark:bg-yellow-600 text-yellow-500 dark:text-yellow-300 px-8 py-5"
          >
            <a href="tel:03340902929" class="text-2xl lg:text-3xl  font-bold"
              >(033) 4090 2929</a
            >
            <h2 class="text-md lg:text-xl mt-2 font-semibold">
              Ambulance Service
            </h2>
            <p class="text-xs lg:text-sm">for Covid patient in West Bengal</p>
          </div>
          <div
            class="rounded-xl bg-red-100 dark:bg-red-600 text-red-500 dark:text-red-300 px-8 py-5"
          >
            <a href="tel:03323576001" class="text-2xl lg:text-3xl  font-bold"
              >(033) 2357 6001</a
            >
            <h2 class="text-md lg:text-xl mt-2 font-semibold">Telemedicine</h2>
            <p class="text-xs lg:text-sm">for Covid patient in West Bengal</p>
          </div>
        </div>
      </section>
      <section class="cta mt-10">
        <div
          class="rounded-xl bg-gray-200 dark:bg-gray-700 px-10 flex flex-wrap-reverse items-center pb-10 lg:pb-0"
        >
          <div class="w-full lg:w-3/5">
            <h1 class="text-3xl font-bold mb-2">
              {{ $t("cta.title") }}
            </h1>
            <p>
              {{ $t("cta.description") }}
            </p>
            <div class="mt-8 flex flex-col lg:flex-row">
              <nuxt-link
                to="/add"
                class="rounded bg-green-400 text-gray-50 p-4 text-center lg:mr-5 mb-5 lg:mb-0"
                >{{ $t("cta.addResource") }}</nuxt-link
              >
              <nuxt-link
                to="/user/auth/register"
                class="rounded bg-gray-300 dark:bg-gray-800 p-4 text-center"
                >{{ $t("cta.becomeVolunteer") }}r</nuxt-link
              >
            </div>
          </div>
          <div class="w-full lg:w-2/5">
            <super-hero class="animate-float max-w-sm mx-auto" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import SuperHero from "../components/Atoms/SuperHero.vue";
import SerachBox from "../components/Organisms/SerachBox.vue";
export default {
  components: { SerachBox, SuperHero },
  name: "index",
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style></style>
