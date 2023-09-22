import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    rollupOptions: {
      input: './src/main.jsx',
    },
  }
  // ,server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:3000/",
  //       changeOrigin: true,
  //       secure: false,
  //       logLevel: "debug",
  //     },
  //   },
  // },
})
