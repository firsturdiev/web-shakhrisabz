export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    "~/assets/css/normalize.css",
    "~/assets/css/main.css"
  ],
  ssr: false,
  app: {
    rootTag: "body",
    head: {
      title: "Shakhrisabz 2024",
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/@glidejs/glide",
        },
      ],
    },
  },
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    vueI18n: './i18n.config.js'
  }
});
