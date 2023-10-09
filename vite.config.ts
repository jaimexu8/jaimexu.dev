import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/jaimexu.dev/",
  build: {
    outDir: "dist"
  },
  plugins: [react()],
})
