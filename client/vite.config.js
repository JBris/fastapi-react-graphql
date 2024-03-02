import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  preview: {
    port: 8080,
    strictPort: true,
  },
  plugins: [react({
    include: "**/*.jsx",
  })],
  server: {
    port: 8080,
    strictPort: true,
    host: true,
    watch: {
      usePolling: true
    },
    cors: true
  }
})
