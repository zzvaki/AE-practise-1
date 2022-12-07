import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      exclude: [
        '**/components/*',
        '**/pages/**/components/*',
        '**/pages/**/*.{ts, json, js, png, jpg, svg, woff, woff2, ttf, eot}',
      ],
      dirs: [
        {
          dir: 'src/pages',
          baseRoute: '',
        },
      ],
      importMode: 'async',
    }),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '/'),
      '@': path.resolve(__dirname, './src'),
    },
  },
})
