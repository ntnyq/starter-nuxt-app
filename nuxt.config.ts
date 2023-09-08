/**
 * @file Nuxt config
 * @see https://nuxt.com/docs/api/configuration/nuxt-config
 */

import { META } from './constants'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    'floating-vue/nuxt',
  ],

  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  // typescript: {
  //   tsConfig: {
  //     compilerOptions: {
  //       moduleResolution: 'bundler',
  //     },
  //   },
  // },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
    },
  },

  app: {
    head: {
      title: META.appName,
      viewport: 'width=device-width,initial-scale=1',
      link: [{ rel: 'icon', type: 'image/png', href: '/icon_48.png' }],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: META.appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  vue: {
    defineModel: true,
  },

  vite: {
    server: {
      cors: true,
    },
  },

  components: {
    dirs: ['~/components'],
  },

  imports: {
    dirs: ['./composables', './utils'],
  },

  css: [
    '@unocss/reset/tailwind.css',
    'floating-vue/dist/style.css',
    '~/styles/vars.css',
    '~/styles/global.css',
  ],

  // ssr: false,

  devtools: { enabled: true },

  // gtm: {},

  colorMode: {
    classSuffix: '',
  },

  googleFonts: {
    download: true,
    families: {
      Inter: true,
    },
  },
})
