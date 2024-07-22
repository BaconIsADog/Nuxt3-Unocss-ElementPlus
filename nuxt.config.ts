export default defineNuxtConfig({
  compatibilityDate: '2024-07-04',

  modules: [
    '@nuxt/eslint',
    '@unocss/nuxt',
    '@element-plus/nuxt',
    'dayjs-nuxt',
  ],

  css: ['@unocss/reset/tailwind.css', 'element-plus/dist/index.css', 'element-plus/theme-chalk/dark/css-vars.css', '~/assets/scss/main.scss'],

  devtools: {
    enabled: true,
  },
  
  features: {
    inlineStyles: false,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  dayjs: {
    locales: ['en', 'zh-tw'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'zh-tw',
    defaultTimezone: 'Asia/Taipei',
  },
})
