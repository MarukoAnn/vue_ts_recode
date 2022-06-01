import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS()],
  resolve: {
    alias: {
      '@': path.join(path.resolve(__dirname), './src')
    }
  },
  base: './',
  server: {
    port: 4000,
    open: true,
    cors: true
  }
})
