"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/10" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 bg-white dark:bg-white/10 text-slate-700 dark:text-brand-400 border border-slate-200 dark:border-white/10 shadow-sm"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <Sun size={20} className="text-brand-500 transition-all duration-300" strokeWidth={2.5} />
      ) : (
        <Moon size={20} className="text-slate-700 transition-all duration-300" strokeWidth={2.5} />
      )}
    </button>
  );
}
