import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  console.log(mode)
  return {
    root: 'src',
    build: {
      outDir: '../dist',
      rollupOptions: {
        input: {
          index: resolve(__dirname, './src/index.html')
        }
      },
    },
  }
})
