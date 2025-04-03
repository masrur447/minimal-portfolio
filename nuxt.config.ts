// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      bodyAttrs: {
        class: "bg-primary text-white antialiased",
      },
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    exposeConfig: true,
    viewer: true,
  },
});
