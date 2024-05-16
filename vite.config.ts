import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
        // Agregar encabezados CORS
        headers: {
          'Access-Control-Allow-Origin': '*' // o cambia '*' por tu origen específico
        }
      },
    },
  },
  plugins: [react()]
})
