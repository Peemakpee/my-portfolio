export default defineNuxtConfig({
  // Compatibility date for features and deprecations
  compatibilityDate: '2024-08-17',

  // Enable Nuxt DevTools
  devtools: { enabled: true },

  // Global CSS files
  css: ['@/assets/app.css'],

  // PostCSS configuration
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Nuxt modules
  modules: [
    "@nuxt/ui",            // Nuxt UI components
    "@nuxtjs/tailwindcss", // Tailwind CSS module
    "@nuxtjs/color-mode",  // Dark mode support
  ],

  // Global page headers
  app: {
    head: {
      title: "Mc Portfolio",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png?v=2" }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  // Color mode configuration
  colorMode: {
    classSuffix: "",
  },

  // Auto import components
  components: true,

  // Build configuration
  build: {},
});
