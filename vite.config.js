import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  build : {
    rollupOptions: {
      
      input: {
        main: new URL('index.html', import.meta.url).pathname,
        project1: new URL('Project_1/Model_Configurator/index.html', import.meta.url).pathname,
      },
    }
  },
})
