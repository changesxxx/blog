import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import mdx from '@astrojs/mdx'
import react from '@astrojs/react'

// https://astro.build/config
//https://shiki.style/themes 主题
export default defineConfig({
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        // theme: 'github-dark-dimmed',
        theme: 'material-theme-ocean',
      },
      gfm: true,
    }),
    tailwind(),
    react(),
  ],
})
