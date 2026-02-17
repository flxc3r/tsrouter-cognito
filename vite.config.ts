import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import { tanstackRouter } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const baseConfig = {
    plugins: [
      devtools(),
      tanstackRouter({
        target: 'react',
        autoCodeSplitting: true,
      }),
      viteReact(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }

  if (command === 'serve') {
    // dev specific config
    return baseConfig
  } else {
    // command === 'build'
    return {
      ...baseConfig,
      base: '/tsrouter-cognito', // required for GitHub Pages; this is the name of the repo
    }
  }
})
