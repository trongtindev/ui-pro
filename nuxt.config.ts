import { createResolver } from '@nuxt/kit';

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  components: [{ path: '#ui-pro/components', prefix: 'U', pathPrefix: false }],
  css: ['#ui-pro/assets/css/main.css'],
  alias: { '#ui-pro': resolve('./') },

  vite: {
    optimizeDeps: {
      include: ['vue3-smooth-dnd']
    }
  },

  imports: {
    dirs: [
      './node_modules/@nuxt/ui/dist/runtime/composables/*',
      './node_modules/@nuxtjs/color-mode/dist/runtime/*'
    ]
  },

  compatibilityDate: '2025-01-05'
});
