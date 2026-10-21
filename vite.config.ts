import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// 公開は GitHub Pages のプロジェクトサイト（/seisaku-note/）。開発中の localhost はルートのままにする。
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/seisaku-note/' : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
}))
