---
title: "深入理解 CSS 盒模型与 Flexbox 排版"
date: "2026-03-18"
summary: "探讨了 Margin 与 Padding 的本质区别，以及如何利用 Flexbox 实现各种复杂的对齐需求。"
---

## 盒模型 (Box Model) 核心概念

在网页中，每一个元素都是一个矩形的盒子。理解盒模型是进行任何排版的前提。

- **Content (内容)**：文字或图片本身的尺寸。
- **Padding (内边距)**：内容与边框之间的距离。用来撑大自己。
- **Border (边框)**：盒子的物理边界。
- **Margin (外边距)**：盒子与其他盒子之间的距离。用来推开别人。

### Flexbox 实战

Flexbox 解决了传统浮动 (float) 布局的痛点，特别适合做一维（单行或单列）的排版。

```css
.container {
  display: flex;
  flex-direction: column; /* 垂直排列 */
  align-items: flex-start; /* 左对齐，这就是我们之前用过的 items-start 的底层原理 */
}
```
