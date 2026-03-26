---
title: "第一篇博客：Next.js 与 Tailwind 搭建历程"
date: "2026-03-22"
summary: "记录了我如何从零开始，使用 Next.js App Router 和 Tailwind CSS 搭建个人博客骨架的过程。"
---

## 核心技术选型

在本次博客系统的搭建中，我主要使用了以下现代前端技术栈：

- **Next.js 15 (App Router)**：提供强大的基于文件系统的路由能力，以及更优的服务器端渲染（SSR）性能。
- **Tailwind CSS**：摒弃了传统的类名命名痛点，通过原子化 CSS 类名实现快速、一致的排版。

### 关键代码片段示例

这是我学到的动态路由参数解析方式：

```javascript
export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const currentSlug = resolvedParams.slug;
  return <div>当前路径：{currentSlug}</div>;
}
```

> 💡 **总结**：虽然初期的路由和组件抽离概念有些抽象，但通过实际动手操作，整个前端工程化的思维模型已经初步建立。
