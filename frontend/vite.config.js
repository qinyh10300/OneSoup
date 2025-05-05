import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 添加这一行

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 5173
  }
})