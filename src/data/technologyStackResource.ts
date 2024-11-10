interface Resource {
  title: string;
  icon: string;
  link: string;
  explain: string;
}

interface technologyStack {
  name: string;
  icon: string;
  resource: Resource[];
}

const technologyStackResource: technologyStack[] = [
  {
    name: "html",
    icon: "/assets/images/page/home/html.svg",
    resource: [
      {
        title: "MDN文档",
        icon: "/assets/images/page/home/mdn.png",
        link: "https://developer.mozilla.org/zh-CN/docs/Web/HTML",
        explain: "更像是一本字典(推荐原英文文档,中文文档内容有缺失)",
      },
    ],
  },
  {
    name: "css",
    icon: "/assets/images/page/home/css.svg",
    resource: [
      {
        title: "MDN文档",
        icon: "/assets/images/page/home/mdn.png",
        link: "https://developer.mozilla.org/zh-CN/docs/Web/CSS",
        explain: "更像是一本字典(推荐原英文文档,中文文档内容有缺失)",
      },
    ],
  },
  {
    name: "js",
    icon: "/assets/images/page/home/js.svg",
    resource: [],
  },
  {
    name: "react",
    icon: "/assets/images/page/home/react.svg",
    resource: [
      {
        title: "React官方文档",
        icon: "/assets/images/page/home/react.svg",
        link: "https://zh-hans.react.dev/",
        explain:
          "React 拥有业界最好的文档之一，我向您保证，这足以启动您的项目并获得初步知识。",
      },
      {
        title: "Build your own React",
        icon: "/assets/images/page/home/profile.jpg",
        link: "https://pomb.us/build-your-own-react/",
        explain:
          "作者遵循真实 React 代码的架构,从头开始重写React,最终实现一个mini React。",
      },
    ],
  },
  {
    name: "vue",
    icon: "/assets/images/page/home/vue.svg",
    resource: [],
  },
  {
    name: "webpack",
    icon: "/assets/images/page/home/webpack.svg",
    resource: [],
  },
];

export default technologyStackResource;
