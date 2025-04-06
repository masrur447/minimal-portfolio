// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  ssr: false,
  devtools: { enabled: process.env.NODE_ENV !== "production" },
  app: {
    pageTransition: { name: "fade", mode: "out-in" },
    head: {
      title: "Eyaheya Masrur - Portfolio",
      titleTemplate: "%s - Eyaheya Masrur",
      htmlAttrs: {
        lang: "en",
        dir: "ltr",
      },
      bodyAttrs: {
        class: "bg-primary font-sans font-base text-white antialiased",
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
        {
          name: "description",
          content:
            "I'm Eyaheya Masrur a Next/Nuxt.JS Developerv and Laravel Developer based in Bangladesh.",
        },
        { name: "author", content: "Eyaheya Masrur" },
        { name: "keywords", content: "Eyaheya Masrur, Portfolio" },
        {
          property: "og:title",
          content: "Eyaheya Masrur - Portfolio",
        },
        {
          property: "og:description",
          content:
            "I'm Eyaheya Masrur a Next/Nuxt.JS Developerv and Laravel Developer based in Bangladesh.",
        },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter&display=swap",
        },
      ],
    },
  },
  vite: {
    build: {
      minify: "esbuild", // Faster minification
    },
  },

  nitro: {
    compressPublicAssets: true,
    preset: "vercelStatic",
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "vue3-carousel-nuxt",
    "@nuxt/image",
    "@nuxtjs/seo",
  ],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    exposeConfig: true,
    viewer: true,
  },
  ogImage: {
    enabled: false,
  },
});
