export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  css: ['~/assets/css/main.css'],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js',
  },
  app: {
    head: {
      title: 'MFR',
      meta: [
        { name: 'description', content: 'Portfolio of Muhamad Faris Rafi, System Implementor & Web Developer' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/geist@1.0.3/dist/fonts/geist-sans/style.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/geist@1.0.3/dist/fonts/geist-mono/style.css' }
      ]
    }
  }
})
