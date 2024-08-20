interface PageItem {
  title: string;
  href: string;
  description: string;
  image: string;
  forceReload?: boolean;
}

interface PagesNav {
  title: string;
  items: PageItem[];
}

interface BooksConfig {
  pagesNav: PagesNav[];
}

export const booksConfig: BooksConfig = {
  pagesNav: [
    {
      title: "Pages",
      items: [
        {
          title: "你还不了解的JS",
          href: "/read-together/details/dont-know-js",
          description: "这是深入探讨 JavaScript 语言核心机制的一系列书籍。",
          image: "/assets/images/books/cover/s_hero_cover.png",
        },
      ],
    },
  ],
};

export const books = [
  {
    id: "dont-know-js",
    title: "你还不了解的JS",
    link: "https://github.com/getify/You-Dont-Know-JS",
    description:
      "所有程序的基础都是将变量/函数组织到嵌套作用域中。然而，许多人从未考虑过这些决定是如何以及为何做出的，以及对代码可维护性的影响。作用域和闭包检查词法作用域，在其原理的基础上构建闭包的力量，并深入研究模块模式以获得更好的程序结构。",
    image: "/assets/images/books/s_hero2x.png",
    chapter: [
      {
        id: "get-started",
        title: "开始",
        href: "/read-together/details/dont-know-js/get-started-ch1",
        syllabus:
          "在《你还不懂 JS》系列第一本书的第一章中，我们将花一些时间来奠定基础，以便继续前进。我们需要首先介绍各​​种重要的背景细节，澄清一些关于该语言到底是什么（以及不是什么！）的迷思和误解。",
        items: [
          {
            title: "什么是 JavaScript？",
            href: "/read-together/details/dont-know-js/get-started-ch1", //真实的地址
            name: "get-started-ch1", //用于寻找对应的doc 和拼接动态路径所需
          },
          {
            title: "测量 JS",
            href: "/read-together/details/dont-know-js/get-started-ch2",
            name: "get-started-ch2",
          },
        ],
      },
    ],
  },
];

/* 
{
        id: 'get-started111',
        title: '范围与闭包',
        href: 'get-started111',
        items: [
          {
            title: '范围与闭包1',
            href: 'get-started111-ch1',
          },
          {
            title: '范围与闭包2',
            href: 'get-started111-ch2',
          },
        ],
      },
      {
        id: 'objects-classes',
        title: '对象和类别',
        href: 'objects-classes',
        items: [
          {
            title: '对象和类别1',
            href: 'objects-classes-cn1',
          },
          {
            title: '对象和类别2',
            href: 'objects-classes-ch2',
          },
        ],
      },
      {
        id: 'scope-closures',
        title: '类型和语法',
        href: 'scope-closures',
        items: [
          {
            title: '类型和语法1',
            href: 'scope-closures-ch1',
          },
          {
            title: '类型和语法2',
            href: 'scope-closures-ch2',
          },
        ],
      },
      {
        id: 'sync-async',
        title: '同步和异步',
        href: 'sync-async',
        items: [
          {
            title: '同步和异步1',
            href: 'sync-async-ch1',
          },
          {
            title: '同步和异步2',
            href: 'sync-async-ch2',
          },
        ],
      },
      {
        id: 'types-grammar',
        title: 'ES.Next & Beyond',
        href: 'types-grammar',
        items: [
          {
            title: 'ES.Next & Beyond1',
            href: 'types-grammar-ch1',
          },
          {
            title: 'ES.Next & Beyond2',
            href: 'types-grammar-ch2',
          },
        ],
      },
*/
