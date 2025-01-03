import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Bind to all available network interfaces
    port: 5173,        // Default port; you can change this if needed
  },
  build: {
    rollupOptions: {
      external: ['react-chartjs-2'],  // Externalize 'react-chartjs-2' during build
    },
  },
})
