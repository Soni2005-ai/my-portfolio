'use client';

export function Footer() {
  return (
    <footer className="relative border-t border-slate-200 py-10 overflow-hidden mt-20">
      {/* Subtle gold line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-brand-500/50 to-transparent"></div>
      
      <div className="container px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-2xl font-heading font-bold text-slate-900 tracking-tighter">
            SAURABH<span className="text-brand-500">SONI</span>
          </p>
          <p className="text-sm text-slate-500 mt-1">Cyber Security & Development</p>
        </div>
        
        <p className="text-sm text-slate-500 text-center md:text-right">
          © {new Date().getFullYear()} All Rights Reserved.<br/>
          <span className="text-slate-900">Designed & Developed by Saurabh Soni</span>
        </p>
      </div>
    </footer>
  );
}
