// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    exposeConfig: true,
    viewer: true,
    config: {
      content: [
        "./app.vue",
        "./components/**/*.{vue,js,ts,jsx,tsx}",
        "./layouts/**/*.{vue,js,ts,jsx,tsx}",
        "./pages/**/*.{vue,js,ts,jsx,tsx}",
        "./plugins/**/*.{js,ts}",
        "./app/**/*.{js,ts}",
        "./content/**/*.md",
        "./content/**/*.svx",
      ],
    },
  },
});
