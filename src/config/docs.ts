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
      // open: true,
    },
    {
      title: 'Documentation',
      items: [
        {
          title: 'Introduction',
          href: '/docs/documentation',
        },
        {
          title: 'Components',
          href: '/docs/documentation/components',
        },
        {
          title: 'Configuration  Astro DB',
          href: '/docs/documentation/components',
          disabled: true,
        },
        {
          title: 'Search (Fuse.js)',
          href: '/docs/in-progress',
          disabled: true,
        },
      ],
    },
    {
      title: 'Pages',
      items: [
        {
          title: 'Landing',
          href: '/docs/in-progress',
          disabled: true,
        },
        {
          title: 'Changelog',
          href: '/docs/in-progress',
          disabled: true,
        },
        {
          title: 'Wait List',
          href: '/docs/in-progress',
          disabled: true,
        },
      ],
    },
    {
      title: 'Examples',
      items: [
        // {
        //   title: "Introduction",
        //   href: "/docs/in-progress",
        //   disabled: true,
        // },
        {
          title: 'Static Blog',
          href: '/docs/in-progress',
          disabled: true,
        },
        {
          title: 'Docs & Guides',
          href: '/docs/in-progress',
          disabled: true,
        },
        {
          title: 'Blog with Astro DB',
          href: '/docs/in-progress',
          disabled: true,
        },
        {
          title: 'Ecommerce',
          href: '/docs/in-progress',
          disabled: true,
        },
        {
          title: 'Animes (GraphQL)',
          href: '/docs/in-progress',
          disabled: true,
        },
        {
          title: 'Authentification (Lucia)',
          href: '/docs/in-progress',
          disabled: true,
        },
      ],
    },
  ],
}
