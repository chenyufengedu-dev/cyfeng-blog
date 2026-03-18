import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          你好，我是ChenyuFeng
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
          这是我的个人博客，用于记录技术学习过程、项目复盘以及生活思考。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* 主按钮：深色背景，实心 */}
          <Link
            href="/blog"
            className="px-8 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
          >
            阅读博客
          </Link>

          {/* 次按钮：白底，带边框 (border)，用于区分视觉主次 */}
          <Link
            href="/projects"
            className="px-8 py-3 bg-white text-slate-900 font-medium rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
          >
            查看项目
          </Link>
        </div>
      </div>
    </main>
  );
}
