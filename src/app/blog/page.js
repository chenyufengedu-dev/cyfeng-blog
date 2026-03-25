import Link from "next/link";
import { getAllBlogPosts } from "@/lib/data";

export default function BlogPage() {
  // 在组件内部调用该函数，动态获取所有文章数据
  const blogPosts = getAllBlogPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          博客文章
        </h1>
        <p className="text-lg text-slate-500">
          这里将用来展示我的所有博客列表。
        </p>
      </header>

      {/* 间距为适中的 gap-6 */}
      <div className="flex flex-col gap-6">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            // 核心卡片样式：
            // bg-white: 确保卡片内部是纯白，如果未来你的网页背景变成浅灰，卡片会凸显出来
            // border border-slate-200 rounded-2xl: 浅灰边框，16px大圆角
            // hover:shadow-md hover:-translate-y-1: 悬停时阴影加深，且整个卡片向上浮动 4px (-translate-y-1)
            // duration-300: 让浮动动画持续 300 毫秒，显得平滑沉稳
            className="group relative bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-slate-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
          >
            <time className="text-sm font-medium text-slate-500 mb-3">
              {post.date}
            </time>

            {/* 标题颜色：悬停时恢复为更明确的橙色 */}
            <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#ea580c] transition-colors">
              <Link href={`/blog/${post.slug}`}>
                <span className="absolute inset-0"></span>
                {post.title}
              </Link>
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6">
              {post.summary}
            </p>

            {/* 底部阅读全文按钮，保持右箭头的动效 */}
            <div className="mt-auto text-sm font-semibold text-[#ea580c] flex items-center gap-1 group-hover:gap-2 transition-all">
              阅读全文
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
