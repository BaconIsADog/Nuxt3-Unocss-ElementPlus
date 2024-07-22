// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu(
    {
      stylistic: true,
      typescript: true,
      vue: true,
      ignores: [
        '**/fixtures',
        'node_modules',
        'dist',
        '.nuxt',
        'coverage',
        '.reports',
        'publish',
        'sw.js',
        '.output',
        '.vercle',
        'docs/.vitepress/dist',
        'docs/.vitepress/cache',
      ],
      unocss: true,
      formatters: true,
    },
    {
      rules: {
        'no-console': 'off',
      },
    },
  ),
)
