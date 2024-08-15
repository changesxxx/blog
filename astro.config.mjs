import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import {
  transformerNotationHighlight,
  transformerNotationDiff,
} from '@shikijs/transformers'

// https://astro.build/config
//https://shiki.style/themes 主题
export default defineConfig({
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        // theme: 'github-dark-dimmed',
        // theme: 'material-theme-ocean',
        //ayu-dark
        themes: {
          light: 'material-theme-ocean',
          // light: 'ayu-dark',
          dark: 'material-theme-darker',
        },
        transformers: [
          transformerNotationHighlight(),
          transformerNotationDiff(),
        ],
      },
      gfm: true,
    }),
    tailwind(),
    react(),
  ],
})
