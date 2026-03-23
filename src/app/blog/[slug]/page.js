import Link from "next/link";
import { getPostBySlug } from "@/lib/data";
import { notFound } from "next/navigation";

// 这里的 { params } 是 Next.js 自动传入的参数对象
export default async function BlogPostPage({ params }) {
  // 必须先使用 await 解包 params，然后再读取 slug
  const resolvedParams = await params;
  const currentSlug = resolvedParams.slug;

  // 根据网址上的 slug，去数据源里查找对应的文章
  const post = getPostBySlug(currentSlug);
  // 边界处理：如果用户瞎输了一个网址（比如 /blog/abc），查不到文章，就直接跳转 404 页面
  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* 顶部的返回链接 */}
      <div className="mb-8">
        <Link
          href="/blog"
          className="group w-fit text-sm font-medium text-slate-500 hover:text-[#ea580c] transition-colors flex items-center gap-1"
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              // 匹配的向左箭头路径
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          返回博客列表
        </Link>
      </div>

      {/* 临时占位的文章标题 */}
      <h4 className="text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">
        正在访问的文章标识符 (Slug):{" "}
        <span className="text-[#ea580c]">{currentSlug}</span>
      </h4>

      <header className="mb-10">
        <time className="text-sm font-medium text-slate-500 mb-4 block">
          {post.date}
        </time>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
          {post.title}
        </h1>
      </header>

      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
        <p>{post.content}</p>
      </div>
    </div>
  );
}
