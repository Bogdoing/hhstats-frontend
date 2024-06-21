// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  //components: true,
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@pinia/nuxt',
  ],
  plugins: [],
  content: {
    // ... options
    // navigation: {
    //   fields: ['md', 'md2']
    // },
    // markdown: {
    //   anchorLinks: false,
    //   mdc: true,
    // }
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    // configPath: 'tailwind.config',
    // exposeConfig: false,
    // exposeLevel: 2,
    // config: {},
    // injectPosition: 'first',
    // viewer: true,
  },
  imports: {
    dirs: [
      // Scan top-level modules
      'composables',
      // ... or scan modules nested one level deep with a specific name and file extension
      'composables/*/index.{ts,js,mjs,mts}',
      // ... or scan all modules within given directory
      'composables/**'
    ]
  }
})
