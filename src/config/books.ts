interface PageItem {
  title: string
  href: string
  description: string
  image: string
  forceReload?: boolean
}

interface PagesNav {
  title: string
  items: PageItem[]
}

interface BooksConfig {
  pagesNav: PagesNav[]
}

export const booksConfig: BooksConfig = {
  pagesNav: [
    {
      title: 'Pages',
      items: [
        {
          title: '你还不了解的JS',
          href: '/read-together/details',
          description: '这是深入探讨 JavaScript 语言核心机制的一系列书籍。',
          image: '/assets/images/books/cover/s_hero_cover.png',
        },
      ],
    },
  ],
}
