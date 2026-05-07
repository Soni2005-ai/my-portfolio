'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import React from 'react';
import { ThemeToggle } from './theme-toggle';

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'CERTIFICATIONS', href: '#certificates' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'EDUCATION', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['about', 'certificates', 'projects', 'experience', 'contact'];
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = `#${section}`;
        }
      }
      setActiveHash(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3' : 'py-5 px-4'}`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group relative z-10 w-32">
          <span className="text-slate-900 font-bold text-2xl tracking-tight">Saurabh</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navItems.map((item, index) => {
            const isActive = activeHash === item.href;
            return (
              <React.Fragment key={item.name}>
                <a
                  href={item.href}
                  className={`text-sm font-medium capitalize tracking-wide transition-all duration-300 hover:text-brand-600 ${isActive ? 'text-brand-600' : 'text-slate-600'}`}
                >
                  {item.name.toLowerCase()}
                </a>
              </React.Fragment>
            );
          })}
        </div>
        
        {/* Call to action & Theme */}
        <div className="hidden lg:flex items-center justify-end gap-4 w-48">
          <ThemeToggle />
          <a href="#contact" className="px-6 py-2.5 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-medium text-sm transition-colors shadow-md shadow-brand-500/20 whitespace-nowrap">
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Toggle & Theme */}
        <div className="lg:hidden flex items-center gap-3 relative z-10">
          <ThemeToggle />
          <button 
            className="text-slate-800 p-1.5 hover:text-brand-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-slate-200 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-600 hover:text-brand-600 hover:bg-slate-50 py-4 px-4 font-medium capitalize text-sm transition-all text-center border-b border-slate-100 last:border-none"
                >
                  {item.name.toLowerCase()}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
