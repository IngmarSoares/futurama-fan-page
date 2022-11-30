import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.sampleapis.com/futurama/info',
        changeOrigin: true,
        rewrite: (path) => { console.log(path); return path.replace('/^\/api/', '') }
      }
    }
  }
})
