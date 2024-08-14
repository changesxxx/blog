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
      href: 'web-introduction/html',
    },
    {
      title: 'Css',
      href: 'web-introduction/css',
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
      // open: true,
    },
    {
      title: 'Pages',
      items: [
        {
          title: 'Landing',
          href: '/docs/in-progress1',
          disabled: true,
        },
        {
          title: 'Changelog',
          href: '/docs/in-progress2',
          disabled: true,
        },
        {
          title: 'Wait List',
          href: '/docs/in-progress3',
          disabled: true,
        },
      ],
    },
  ],
}
