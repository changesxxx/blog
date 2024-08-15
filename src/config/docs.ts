import type { DocsConfig } from '@/types'

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: 'Documentation',
      href: '/docs/getting-started/',
    },
    {
      title: 'Guides',
      href: '/guides',
    },
  ],
  sidebarNav: [
    {
      title: 'Html',
      href: '/notes/web-introduction/html',
    },
    {
      title: 'Css',
      href: '/notes/web-introduction/css',
    },
    {
      title: 'javaScript',
      items: [
        {
          title: '基础知识',
          href: '/notes/web-introduction/javaScript/basic',
        },
        {
          title: '基础语法',
          href: '/notes/web-introduction/javaScript/syntax',
        },
      ],
    },
    {
      title: 'Babel',
      href: '/notes/web-introduction/babel',
    },
    {
      title: 'webpack',
      items: [
        {
          title: '基础用法',
          href: '/notes/web-introduction/webpack/basic',
        },
        {
          title: '拓展',
          href: '/notes/web-introduction/webpack/expand',
        },
      ],
    },
  ],
}
