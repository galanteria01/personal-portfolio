// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: './src',
  base: "./",
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        projects: resolve(__dirname, 'src/projects.html'),
        contact: resolve(__dirname, 'src/contact.html'),
        main: resolve(__dirname, 'src/index.html'),
      }
    }
  }
})

// Hello WOrld