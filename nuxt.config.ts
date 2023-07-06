/**
 * @file Nuxt config
 * @see https://nuxt.com/docs/api/configuration/nuxt-config
 */

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    'floating-vue/nuxt',
  ],

  pwa: {
    // https://github.com/vite-pwa/vite-plugin-pwa/issues/120#issuecomment-1202579983
    strategies: 'generateSW',
    workbox: {
      globPatterns: ['**/*.{js,css}'],
      navigateFallback: null,
    },
    manifest: {
      name: 'Nuxt Starter',
      description: 'nuxt starter',
    },
  },

  // ssr: false,

  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  vite: {
    vue: {
      script: {
        defineModel: true,
      },
    },

    server: {
      cors: true,
    },
  },

  imports: {
    dirs: [],
  },

  css: ['@unocss/reset/tailwind.css'],

  devtools: { enabled: true },
})
