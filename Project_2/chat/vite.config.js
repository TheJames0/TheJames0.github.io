import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // generate manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: {
        main: new URL('index.html', import.meta.url).pathname,
        server: new URL('src/server/index.cjs', import.meta.url).pathname,
      }
      
      
    },
  },
})
