// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  ssr: false,
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "fade", mode: "out-in" },
    head: {
      bodyAttrs: {
        class: "bg-primary font-sans font-base text-white antialiased",
      },
    },
  },
  vite: {
    build: {
      minify: "esbuild", // Faster minification
    },
  },

  nitro: {
    compressPublicAssets: true,
    preset: "vercel-edge",
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "vue3-carousel-nuxt",
    "@nuxt/image",
  ],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    exposeConfig: true,
    viewer: true,
  },
});
