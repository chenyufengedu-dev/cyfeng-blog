import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <div className="text-xl font-bold text-slate-900">
        <Link href="/">ChenyuFeng</Link>
      </div>
      <div className="flex gap-6 text-slate-600 font-medi1">
        <Link href="/" className=" hover:text-slate-900 transition-colors">
          首页
        </Link>
        <Link href="/blog" className=" hover:text-slate-900 transition-colors">
          博客
        </Link>
        <Link
          href="/projects"
          className=" hover:text-slate-900 transition-colors"
        >
          项目
        </Link>
      </div>
    </nav>
  );
}
