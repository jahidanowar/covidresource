export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "server",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "CovidResource",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      // {
      //   rel: "preload",
      //   as: "font",
      //   type: "font/woff2",
      //   crossorigin: true,
      //   href: "./assets/fonts/archia/archia-regular-webfont.woff2"
      // },
      // {
      //   rel: "preload",
      //   as: "font",
      //   type: "font/woff2",
      //   crossorigin: true,
      //   href: "./assets/fonts/archia/archia-medium-webfont.woff2"
      // },
      // {
      //   rel: "preload",
      //   as: "font",
      //   type: "font/woff2",
      //   crossorigin: true,
      //   href: "./assets/fonts/archia/archia-semibold-webfont.woff2"
      // },
      // {
      //   rel: "preload",
      //   as: "font",
      //   type: "font/woff2",
      //   crossorigin: true,
      //   href: "./assets/fonts/archia/archia-bold-webfont.woff2"
      // }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["./plugins/date.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode"
  ],

  tailwindcss: {
    jit: true
  },

  colorMode: {
    classSuffix: ""
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "nuxt-i18n"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL || "http://localhost:5000/api/v1"
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en"
    }
  },

  i18n: {
    locales: [
      { code: "en", name: "English", iso: "en-US", file: "en.js" },
      { code: "bn", name: "বাংলা", iso: "bn", file: "bn.js" }
    ],
    defaultLocale: "en",
    langDir: "~/locales/"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
