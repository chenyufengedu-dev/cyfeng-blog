import Link from "next/link";
import { getPostBySlug } from "@/lib/data";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

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

      <header className="mb-10">
        <time className="text-sm font-medium text-slate-500 mb-4 block">
          {post.date}
        </time>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
          {post.title}
        </h1>
        {/* 灰色的细分割线 */}
        <hr className="border-slate-200 mt-8 mb-8" />
      </header>

      {/* prose-pre Typography 插件的作用域修饰符 用于自定义 Markdown 解析后多行代码块的外观 */}
      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed prose-pre:bg-transparent prose-pre:p-0">
        <ReactMarkdown
          components={{
            // 这里的逻辑：拦截所有的 <code> 标签
            code({ node, inline, className, children, ...props }) {
              // 匹配 Markdown 代码块语言类型，例如 ```javascript 里的 javascript
              const match = /language-(\w+)/.exec(className || "");

              // 如果不是行内代码（!inline）且匹配到了语言类型，就使用高亮组件
              return !inline && match ? (
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                // 如果只是普通的行内代码（比如用单个反引号包裹的词），保持原样输出
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
