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
          {
            title: "挖掘 JS 的根源",
            href: "/read-together/details/dont-know-js/get-started-ch3",
            name: "get-started-ch3",
          },
          {
            title: "宏观视角",
            href: "/read-together/details/dont-know-js/get-started-ch4",
            name: "get-started-ch4",
          },
          {
            title: "附录 A",
            href: "/read-together/details/dont-know-js/get-started-apA",
            name: "get-started-apA",
          },
          {
            title: "附录 B",
            href: "/read-together/details/dont-know-js/get-started-apB",
            name: "get-started-apB",
          },
        ],
      },
      {
        id: "scope-closures",
        title: "作用域与闭包",
        href: "/read-together/details/dont-know-js/scope-closures-ch1",
        syllabus:
          "JS 如何知道任何给定语句可以访问哪些变量，以及它如何处理两个同名变量？这些问题的答案以明确定义的规则的形式出现，称为作用域。本书将深入探讨作用域的各个方面——它如何工作、它有什么用处、要避免哪些问题——然后指出指导程序结构的常见作用域模式。",
        items: [
          {
            title: "什么是作用域?",
            href: "/read-together/details/dont-know-js/scope-closures-ch1", //真实的地址
            name: "scope-closures-ch1", //用于寻找对应的doc 和拼接动态路径所需
          },
          {
            title: "阐明词法作用域",
            href: "/read-together/details/dont-know-js/scope-closures-ch2", //真实的地址
            name: "scope-closures-ch2", //用于寻找对应的doc 和拼接动态路径所需
          },
          {
            title: "作用域链",
            href: "/read-together/details/dont-know-js/scope-closures-ch3", //真实的地址
            name: "scope-closures-ch3", //用于寻找对应的doc 和拼接动态路径所需
          },
          {
            title: "全局作用域",
            href: "/read-together/details/dont-know-js/scope-closures-ch4", //真实的地址
            name: "scope-closures-ch4", //用于寻找对应的doc 和拼接动态路径所需
          },
          {
            title: "变量的（不那么）隐秘生命周期",
            href: "/read-together/details/dont-know-js/scope-closures-ch5", //真实的地址
            name: "scope-closures-ch5", //用于寻找对应的doc 和拼接动态路径所需
          },
          {
            title: "限制作用域暴露",
            href: "/read-together/details/dont-know-js/scope-closures-ch6", //真实的地址
            name: "scope-closures-ch6", //用于寻找对应的doc 和拼接动态路径所需
          },
          {
            title: "使用闭包",
            href: "/read-together/details/dont-know-js/scope-closures-ch7", //真实的地址
            name: "scope-closures-ch7", //用于寻找对应的doc 和拼接动态路径所需
          },
        ],
      },
      {
        id: "objects-classes",
        title: "对象和类",
        href: "/read-together/details/dont-know-js/objects-classes-ch1",
        syllabus:
          "这是一个广泛流传但极其错误的“事实”，在关于 JavaScript 的讨论中不断出现。让我们来揭穿这个神话。JavaScript 确实有对象，但这并不意味着所有值都是对象。然而，对象无疑是语言中最重要（也是最复杂）的一种值类型，因此掌握它们对于您在 JavaScript 的旅程至关重要。",
        items: [
          {
            title: "对象基础",
            href: "/read-together/details/dont-know-js/objects-classes-ch1", //真实的地址
            name: "objects-classes-ch1", //用于寻找对应的doc 和拼接动态路径所需
          },
        
        ],
      },
 
    ],
  },
];

