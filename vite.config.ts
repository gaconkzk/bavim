import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import unocss from 'unocss/vite'
import transformerDirective from '@unocss/transformer-directives'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    unocss({
      transformers: [transformerDirective()],
    }),
    svelte(),
  ],
})
