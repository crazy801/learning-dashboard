import {
  Home,
  BookOpen,
  BarChart3,
  Settings
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden md:block w-64 border-r border-zinc-800 bg-zinc-950 p-6">
      <h2 className="mb-10 text-xl font-bold text-white">
        LearnX
      </h2>

      <nav className="space-y-4">
        <div className="flex items-center gap-3 text-cyan-400">
          <Home size={18} />
          Dashboard
        </div>

        <div className="flex items-center gap-3 text-zinc-400">
          <BookOpen size={18} />
          Courses
        </div>

        <div className="flex items-center gap-3 text-zinc-400">
          <BarChart3 size={18} />
          Activity
        </div>

        <div className="flex items-center gap-3 text-zinc-400">
          <Settings size={18} />
          Settings
        </div>
      </nav>
    </aside>
  );
}