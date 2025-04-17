import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteImagemin from 'vite-plugin-imagemin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImagemin({
      gifsicle: {
        optimizationLevel: 3
      },
      mozjpeg: {
        quality: 75
      },
      optipng: {
        optimizationLevel: 5
      },
      pngquant: {
        quality: [0.65, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            removeViewBox: false
          }
        ]
      }
    })
  ]
})
