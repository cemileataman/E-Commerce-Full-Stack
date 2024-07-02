import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    open: true,
    https: false, // HTTPS'i devre dışı bırakmak için
  }
})