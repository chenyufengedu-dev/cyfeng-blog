import fs from "fs";
import path from "path";
import matter from "gray-matter";

// 1. 定义存储 Markdown 文件的绝对路径 (定位到 src/posts)
const postsDirectory = path.join(process.cwd(), "src/posts");

// 2. 获取所有博客文章的列表数据（用于博客列表页）
export function getAllBlogPosts() {
  // 读取目录下的所有文件名
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md")) // 过滤掉非 .md 文件
    .map((fileName) => {
      // 去掉文件名中的 ".md" 后缀，剩下的部分直接作为路由的 slug
      const slug = fileName.replace(/\.md$/, "");

      // 组合出文件的完整物理路径并读取内容
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // 使用 gray-matter 解析文件顶部的 Frontmatter 元数据
      const matterResult = matter(fileContents);

      // 返回该文章的摘要信息（不含正文，减轻列表页的数据负担）
      return {
        slug,
        ...matterResult.data, // 展开 title, date, summary 等数据
      };
    });

  // 按照日期从新到旧降序排列
  return allPostsData.sort((a, b) => {
    return a.date < b.date ? 1 : -1;
  });
}

// 3. 根据 slug 获取单篇文章的完整内容（用于博客详情页）
export function getPostBySlug(slug) {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // matterResult.data 是顶部元数据，matterResult.content 是正文
    const matterResult = matter(fileContents);

    return {
      slug,
      content: matterResult.content, // 详情页需要渲染完整的正文
      ...matterResult.data,
    };
  } catch (error) {
    // 如果由于网址输入错误找不到对应的 md 文件，返回 null 触发 404
    return null;
  }
}
