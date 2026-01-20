import { Link, Outlet } from "react-router-dom";

const AppLayout = () => (
  <div className="min-h-screen">
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-xl font-semibold">数据分析与绘图平台</h1>
          <p className="text-sm text-slate-500">前后端分离 + 插件式分析模块</p>
        </div>
        <nav className="flex gap-4 text-sm">
          <Link className="text-slate-700 hover:text-slate-900" to="/">
            分析控制台
          </Link>
          <Link className="text-slate-700 hover:text-slate-900" to="/plugins">
            插件管理
          </Link>
        </nav>
      </div>
    </header>
    <main className="mx-auto max-w-6xl px-6 py-8">
      <Outlet />
    </main>
  </div>
);

export default AppLayout;
