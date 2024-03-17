// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  //components: true,
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
  ],
  content: {
    // ... options
    navigation: {
      fields: ['md', 'md2']
    }

  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    // configPath: 'tailwind.config',
    // exposeConfig: false,
    // exposeLevel: 2,
    // config: {},
    // injectPosition: 'first',
    // viewer: true,
  }
})
