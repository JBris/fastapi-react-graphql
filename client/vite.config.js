import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  preview: {
    port: 5001,
    strictPort: true,
  },
  plugins: [react({
    include: "**/*.jsx",
  })],
  server: {
    port: 5001,
    strictPort: true,
    host: true,
    watch: {
      usePolling: true
    },
    cors: true
  }
})
