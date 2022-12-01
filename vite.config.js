import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/futurama': {
        target: 'https://api.sampleapis.com',
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path) => { console.log(path); return path.replace('/^\/api/', '') }
      }
    }
  }
})
