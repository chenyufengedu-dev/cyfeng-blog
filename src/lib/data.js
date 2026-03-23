// 1. 将原本写在列表页的数据剪切到这里，并增加了一点文章正文内容 (content)
export const blogPosts = [
  {
    id: 1,
    title: "我的第一篇博客：Next.js 与 Tailwind 搭建历程",
    date: "2026-03-22",
    summary:
      "记录了我如何从零开始，使用 Next.js App Router 和 Tailwind CSS 搭建个人博客骨架的过程。",
    content:
      "这是第一篇文章的完整正文。在这里我们可以写很长很长的段落。目前先用这段纯文本占位，后续我们会引入 Markdown 解析器，让这里能够渲染加粗、代码块和图片。",
    slug: "my-first-blog-post",
  },
  {
    id: 2,
    title: "深入理解 CSS 盒模型与 Flexbox 排版",
    date: "2026-03-18",
    summary:
      "探讨了 Margin 与 Padding 的本质区别，以及如何利用 Flexbox 实现各种复杂的对齐需求。",
    content:
      "这是第二篇文章的正文。Margin 用来推开别人，Padding 用来撑大自己。Flexbox 则是一个非常强大的排版工具，能解决 90% 的对齐问题。",
    slug: "understanding-box-model-and-flexbox",
  },
];

// 2. 导出一个专门用来“通过 slug 查找单篇文章”的工具函数
export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}
