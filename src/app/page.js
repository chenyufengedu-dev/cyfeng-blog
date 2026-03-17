export default function Home() {
  return (
    // bg-slate-50 设置了浅灰蓝色的背景
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-6">
      {/* text-5xl 放大字体，text-slate-900 设置深色字体，mb-6 设置底部外边距 */}
      <h1 className="text-5xl font-bold text-slate-900 mb-6 text-center">
        Welcome to cyfeng&apos;s Blog.
      </h1>

      {/* text-lg 设置略大的正文字体，text-slate-600 设置中灰色，max-w-md 限制文本最大宽度以优化阅读体验 */}
      <p className="text-lg text-blue-600 max-w-md text-center">
        你好，我正在学习前端开发。这是我使用 Next.js 和 Tailwind CSS
        搭建的个人网站，目前正在持续迭代中。
      </p>
    </main>
  );
}
