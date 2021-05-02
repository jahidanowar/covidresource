export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "CovidResource",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "A crowd-sourced platform to find verfied covid resources"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["./plugins/date.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],

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
    "@nuxtjs/auth-next",
    // https://go.nuxtjs.dev/pwa
    "nuxt-i18n",
    "@nuxtjs/pwa"
  ],
  auth: {
    strategies: {
      local: {
        token: {
          property: "token"
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: "user"
          // autoFetch: true
        },
        endpoints: {
          login: { url: "/auth/login", method: "post" },
          logout: { url: "/auth/logout", method: "post" },
          user: { url: "/auth/user", method: "get" }
        }
      }
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL || "http://localhost:5000/api/v1"
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      name: "CovidResources",
      theme_color: "#10B981",
      description: "A crowd-sourced platform to find verfied covid resources"
    },
    icon: {
      fileName: "app-icon-2.png"
    },
    manifest: {
      lang: "en",
      name: "CovidResources",
      short_name: "CovidWb"
    }
  },

  i18n: {
    locales: [
      { code: "en", name: "English", iso: "en-US", file: "en.js" },
      { code: "bn", name: "বাংলা", iso: "bn", file: "bn.js" },
      { code: "hi", name: "हिंदी", iso: "hi", file: "hi.js" }
    ],
    defaultLocale: "en",
    langDir: "~/locales/"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
