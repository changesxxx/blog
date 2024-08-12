import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import mdx from '@astrojs/mdx'
import react from '@astrojs/react'

import codeFileName from './src/utils/remark-code-fileName.js'
// import codeTitle from 'remark-code-title'

// https://astro.build/config
//https://shiki.style/themes 主题
export default defineConfig({
  markdown: { remarkPlugins: [codeFileName] },
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
      },
      gfm: true,
    }),
    tailwind(),
    react(),
  ],
})
