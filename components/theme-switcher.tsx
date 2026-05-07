'use client';

import { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const themes = [
  { id: 'default', name: 'Pro Gold', color: '#eab308' },
  { id: 'blue', name: 'Navy Blue', color: '#3b82f6' },
  { id: 'emerald', name: 'Emerald', color: '#10b981' },
  { id: 'violet', name: 'Violet', color: '#8b5cf6' },
  { id: 'rose', name: 'Rose', color: '#f43f5e' }
];

export function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState('default');

  const applyTheme = (themeId: string) => {
    // Remove all theme classes first
    document.documentElement.classList.remove('theme-blue', 'theme-emerald', 'theme-violet', 'theme-rose');
    
    // Add new theme class if not default
    if (themeId !== 'default') {
      document.documentElement.classList.add(`theme-${themeId}`);
    }
    
    setActiveTheme(themeId);
    localStorage.setItem('portfolio-theme', themeId);
  };

  useEffect(() => {
    // Load theme from localStorage if available
    const savedTheme = localStorage.getItem('portfolio-theme') || 'default';
    setTimeout(() => {
      applyTheme(savedTheme);
    }, 0);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute bottom-16 right-0 glass-panel p-3 rounded-2xl flex flex-col gap-3 min-w-[140px]"
          >
            <p className="text-xs font-mono text-slate-600 px-2 pb-1 border-b border-slate-200 uppercase font-bold tracking-wider">Accents</p>
            <div className="flex flex-col gap-1">
              {themes.map((colorTheme) => (
                <button
                  key={colorTheme.id}
                  onClick={() => applyTheme(colorTheme.id)}
                  className={`flex items-center gap-3 px-2 py-1.5 rounded-lg transition-colors ${
                    activeTheme === colorTheme.id ? 'bg-slate-200 text-slate-900' : 'hover:bg-slate-100 text-slate-600'
                  }`}
                >
                  <span 
                    className="w-4 h-4 rounded-full shadow-sm"
                    style={{ backgroundColor: colorTheme.color }}
                  />
                  <span className="text-sm font-medium">{colorTheme.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-brand-600 hover:text-brand-600 transition-colors shadow-lg"
        aria-label="Toggle theme switcher"
      >
        <Palette size={20} />
      </button>
    </div>
  );
}
