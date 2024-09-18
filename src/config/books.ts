interface PageItem {
  title: string;
  href: string;
  description: string;
  image: string;
  forceReload?: boolean;
}

interface BookNav {
  type:string
  items: PageItem[];
}

interface BooksConfig {
  booksNav: BookNav[];
}


interface BookItems { 
  title: string
  href: string
  id:string
}

interface Book { 
  id: string
  title: string
  href: string
  syllabus: string
  items?:BookItems []
}



interface BookList {
  id: string
  title: string
  link: string
  description: string
  image: string
  chapter:Book[]
}

export const booksConfig: BooksConfig = {
  booksNav: [
    {
      type:'语言层面',
      items: [
        {
          title: "你还不了解的JS",
          href: "/read-together/details/dont-know-js",
          description: "这是深入探讨 JavaScript 语言核心机制的一系列书籍。",
          image: "/assets/images/books/cover/s_hero_cover.png",
        },
      ],
    },
    {
      type:'框架',
      items: [
        {
          title: "Advanced React",
          href: "/read-together/details/advanced-react",
          description: "通过先进的概念、策略、技术、模式和深入调查，将您的 React 知识提升到新的水平。",
          image: "/assets/images/books/cover/react_advanced_cover.jpg",
        },
      ],
    }
  ],
};

export const books:BookList[] = [
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
            id: "get-started-ch1", //用于寻找对应的doc 和拼接动态路径所需
          },
          {
            title: "测量 JS",
            href: "/read-together/details/dont-know-js/get-started-ch2",
            id: "get-started-ch2",
          },
          {
            title: "挖掘 JS 的根源",
            href: "/read-together/details/dont-know-js/get-started-ch3",
            id: "get-started-ch3",
          },
          {
            title: "宏观视角",
            href: "/read-together/details/dont-know-js/get-started-ch4",
            id: "get-started-ch4",
          },
          {
            title: "附录 A",
            href: "/read-together/details/dont-know-js/get-started-apA",
            id: "get-started-apA",
          },
          {
            title: "附录 B",
            href: "/read-together/details/dont-know-js/get-started-apB",
            id: "get-started-apB",
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
            id: "scope-closures-ch1", //用于寻找对应的doc 和拼接动态路径所需
          },
          {
            title: "阐明词法作用域",
            href: "/read-together/details/dont-know-js/scope-closures-ch2", //真实的地址
            id: "scope-closures-ch2", //用于寻找对应的doc 和拼接动态路径所需
          },
          {
            title: "作用域链",
            href: "/read-together/details/dont-know-js/scope-closures-ch3", //真实的地址
            id: "scope-closures-ch3", //用于寻找对应的doc 和拼接动态路径所需
          },
          {
            title: "全局作用域",
            href: "/read-together/details/dont-know-js/scope-closures-ch4", //真实的地址
            id: "scope-closures-ch4", //用于寻找对应的doc 和拼接动态路径所需
          },
          {
            title: "变量的（不那么）隐秘生命周期",
            href: "/read-together/details/dont-know-js/scope-closures-ch5", //真实的地址
            id: "scope-closures-ch5", //用于寻找对应的doc 和拼接动态路径所需
          },
          {
            title: "限制作用域暴露",
            href: "/read-together/details/dont-know-js/scope-closures-ch6", //真实的地址
            id: "scope-closures-ch6", //用于寻找对应的doc 和拼接动态路径所需
          },
          {
            title: "使用闭包",
            href: "/read-together/details/dont-know-js/scope-closures-ch7", //真实的地址
            id: "scope-closures-ch7", //用于寻找对应的doc 和拼接动态路径所需
          },
          {
            title: "模块模式",
            href: "/read-together/details/dont-know-js/scope-closures-ch8", //真实的地址
            id: "scope-closures-ch8", //用于寻找对应的doc 和拼接动态路径所需
          },
          {
            title: "附录A:深入探索",
            href: "/read-together/details/dont-know-js/scope-closures-apA", //真实的地址
            id: "scope-closures-apA", //用于寻找对应的doc 和拼接动态路径所需
          },
          {
            title: "附录B:练习",
            href: "/read-together/details/dont-know-js/scope-closures-apB", //真实的地址
            id: "scope-closures-apB", //用于寻找对应的doc 和拼接动态路径所需
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
            id: "objects-classes-ch1", //用于寻找对应的doc 和拼接动态路径所需
          },
            {
            title: "对象的工作原理",
            href: "/read-together/details/dont-know-js/objects-classes-ch2", //真实的地址
            id: "objects-classes-ch2", //用于寻找对应的doc 和拼接动态路径所需
          },
          {
            title: "类对象",
            href: "/read-together/details/dont-know-js/objects-classes-ch3", //真实的地址
            id: "objects-classes-ch3", //用于寻找对应的doc 和拼接动态路径所需
          },
          {
            title: "this工作原理",
            href: "/read-together/details/dont-know-js/objects-classes-ch4", //真实的地址
            id: "objects-classes-ch4", //用于寻找对应的doc 和拼接动态路径所需
          },
          {
            title: "委托",
            href: "/read-together/details/dont-know-js/objects-classes-ch5", //真实的地址
            id: "objects-classes-ch5", //用于寻找对应的doc 和拼接动态路径所需
          }
        ]
      },
      {
        id: "sync-async",
        title: "同步和异步",
        href: "",
        syllabus:"尚未开始"
      },
       {
        id: "types-grammar",
        title: "类型和语法",
        href: "/read-together/details/dont-know-js/types-grammar-ch1",
        syllabus:
          "在这里，我们将研究 JS 的核心值类型，特别是称为原始的非对象类型。",
        items: [
          {
            title: "变体",
            href: "/read-together/details/dont-know-js/types-grammar-ch1",
            id: "types-grammar-ch1", 
          },
          {
            title: "原始值的行为",
            href: "/read-together/details/dont-know-js/types-grammar-ch2",
            id: "types-grammar-ch2", 
          },
          {
            title: "对象值",
            href: "/read-together/details/dont-know-js/types-grammar-ch3",
            id: "types-grammar-ch3", 
          },
          {
            title: "强制转换值",
            href: "/read-together/details/dont-know-js/types-grammar-ch4",
            id: "types-grammar-ch4", 
          },
        ]
      },
    ],
  },
  {
    id: "advanced-react",
    title: "Advanced React",
    link: "https://www.advanced-react.com",
    image: "/assets/images/books/react_advanced.jpg",
     description:
      "本书假设你对 React 有一定的基础知识。它希望你理解什么是状态以及如何使用它。什么是钩子以及如何编写它们。什么是组件以及如何在其他组件内部渲染组件。换句话说，它假设你能够成功写出一个基本的“待办事项”应用。",
    chapter: [
       {
        id: "intro-to-re-renders",
        title: "重新渲染简介",
        href: "/read-together/details/advanced-react/intro-to-re-renders",
        syllabus:
          "在谈到 React 和 React 中的性能时，理解重新渲染及其影响至关重要。它们是如何触发的，如何在应用中传播，当组件重新渲染时发生了什么，以及我们为什么需要它们。 这一章介绍了这些概念，接下来几章将更详细地探讨。",
      },
      {
        id: "elements-children-props-re-renders",
        title: "元素、作为 props 的子组件和重新渲染",
        href: "/read-together/details/advanced-react/elements-children-props-re-renders",
        syllabus:
          "我们已经了解了相对简单的状态变化如何触发我们应用中下游重新渲染。当情况变得更复杂时，我们有哪些选择呢？",
      },
      {
        id: "elements-props-configuration",
        title: "关于作为 props 元素的配置问题",
        href: "/read-together/details/advanced-react/elements-props-configuration",
        syllabus:
          "让我们继续探讨 React 的工作原理。这一次，我们将构建一个简单的“带图标的按钮”组件。",
      },
      {
        id: "render-props-advanced-configuration",
        title: "渲染 props 的高级配置",
        href: "/read-together/details/advanced-react/render-props-advanced-configuration",
        syllabus:
          "元素作为 props，尽管很优秀，并不能为我们解决所有问题。在这一章中，我们将了解什么是渲染 props 模式",
      },
      {
        id: "memoization",
        title: "使用 useMemo、useCallback 和 React.memo 进行记忆化",
        href: "/read-together/details/advanced-react/memoization",
        syllabus:
          "让我们讨论一个与提高 React 性能密切相关的话题，但实际上在我们进行的所有操作中，至少一半的时间并没有按预期工作。记忆化。",
      },
      {
        id: "diffing-reconciliation",
        title: "深入探讨差异和协调",
        href: "/read-together/details/advanced-react/diffing-reconciliation",
        syllabus:
          "在本章中，我们将探讨一些非常有趣的错误，深入了解底层的工作原理。",
      },
      {
        id: "higher-order-components",
        title: "现代世界中的高阶组件",
        href: "/read-together/details/advanced-react/higher-order-components",
        syllabus:
          "在转向 React 的其他部分之前，还有一种最终的组合技术需要讨论：高阶组件！",
      },
      {
        id: "context-performance",
        title: "React 上下文与性能",
        href: "/read-together/details/advanced-react/context-performance",
        syllabus:
          "在 React 中的重新渲染”拼图的最后一个非常重要的部分是上下文。",
      },
      {
        id: "refs",
        title: "Refs：从存储数据到命令式 API",
        href: "/read-together/details/advanced-react/refs",
        syllabus:
          "学习如何使用 Refs 访问 UI 元素",
      },
      {
        id: "closures-in-react",
        title: "React 中的闭包",
        href: "/read-together/details/advanced-react/closures-in-react",
        syllabus:
          "闭包及其存在对我们代码有何影响,本章将了解闭包在react的常见场景及应对",
      },
      {
        id: "debouncing-throttling-with-refs",
        title: "使用 Refs 实现高级防抖和节流",
        href: "/read-together/details/advanced-react/debouncing-throttling-with-refs",
        syllabus:
          "在 React 中正确实现防抖/节流实际上是相当具有挑战性的。本章我们将了解通过Refs实现防抖和节流，以及 Refs 与使用 useMemo 和 useCallback 之间的区别。",
      },
      {
        id: "flickering-ui-useLayoutEffect",
        title: "逃避闪烁 UI 的 useLayoutEffect",
        href: "/read-together/details/advanced-react/flickering-ui-useLayoutEffect",
        syllabus:
          "本章我们将学习关于useLayoutEffect的所有知识",
      },
      {
        id: "react-portals",
        title: "React Portals 及其必要性",
        href: "/read-together/details/advanced-react/react-portals",
        syllabus:
          "让我们看看另一个有趣的 UI bug：内容剪切。",
      },
      {
        id: "data-client-performance",
        title: "客户端的数据获取与性能",
        href: "/read-together/details/advanced-react/data-client-performance",
        syllabus:
          "在 React 中获取数据的“正确方式”究竟是什么？",
      },
      {
        id: "data-race-conditions",
        title: "数据获取与竞态条件",
        href: "/read-together/details/advanced-react/data-race-conditions",
        syllabus:
          "在前端数据获取中，竞态条件是一个值得单独一章讨论的重要话题。让我们调查一个存在竞态条件的应用，并修复它。",
      },
      {
        id: "error-handling-react",
        title: "在 React 中的用错误处理",
        href: "/read-together/details/advanced-react/error-handling-react",
        syllabus:
          "在最后一章中，让我们看看 React 中的错误处理。",
      },
    ]
  }
];

