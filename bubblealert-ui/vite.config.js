import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { port: 5173, host: true },
  // Use relative asset paths so the bundle works when hosted from a subdirectory
  base: './'
})
