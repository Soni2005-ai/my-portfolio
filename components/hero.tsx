'use client';

import { motion } from 'motion/react';
import { Download, Mail, ArrowRight, CheckCircle2, Shield, Code, Cpu, User } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-12 bg-[#F9FAFB]">
      {/* Soft Background Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-100/50 rounded-full blur-[100px] mix-blend-multiply translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] mix-blend-multiply -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="flex-1 flex flex-col items-start text-left w-full max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-brand-500" />
              <span className="text-sm font-semibold text-brand-600 tracking-wider uppercase">Open to Internships & Entry-Level Roles</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6 font-sans"
            >
              Saurabh <span className="text-brand-600">Soni</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm font-semibold text-slate-600 mb-6"
            >
              <span>B.Tech Student</span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span>Python Developer</span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span>Cyber Security</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="text-slate-600 text-lg md:text-xl mb-10 max-w-xl leading-relaxed font-light"
            >
              A motivated Computer Science student with a strong academic record and hands-on experience in Python and C++. Actively seeking an internship or entry-level role to apply technical skills and grow professionally.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-5 mb-16"
            >
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-full transition-all shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 hover:-translate-y-0.5">
                Get In Touch
              </a>
              
              <a href="#projects" className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium rounded-full transition-all hover:-translate-y-0.5">
                View My Work
              </a>
            </motion.div>


          </div>

          {/* Profile Image Area */}
          <div className="flex-1 flex justify-center lg:justify-end w-full relative mt-16 md:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, type: "spring", stiffness: 50 }}
              className="relative w-[340px] h-[450px] sm:w-[420px] sm:h-[540px] z-10 mx-auto lg:mr-8"
            >
              {/* Corner Accents (Golden Brackets) */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6 w-8 h-8 md:w-12 md:h-12 border-t-[1.5px] border-l-[1.5px] border-amber-500/80 z-20 pointer-events-none"></div>
              <div className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-12 md:h-12 border-t-[1.5px] border-r-[1.5px] border-amber-500/80 z-20 pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-8 h-8 md:w-12 md:h-12 border-b-[1.5px] border-l-[1.5px] border-amber-500/80 z-20 pointer-events-none"></div>
              <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-8 h-8 md:w-12 md:h-12 border-b-[1.5px] border-r-[1.5px] border-amber-500/80 z-20 pointer-events-none"></div>

              {/* Main Image Container */}
              <div className="absolute inset-0 z-10 overflow-hidden bg-slate-900 group">
                <Image 
                  src="/profile.jpg"
                  alt="Saurabh Soni"
                  fill
                  className="object-cover z-10 transition-transform duration-700 group-hover:scale-105"
                  priority
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                
                {/* Clean Fallback pattern */}
                <div className="hidden absolute inset-0 flex flex-col items-center justify-center text-slate-500 bg-slate-900 p-8 text-center z-10">
                  <div className="w-20 h-20 mb-6 rounded-full flex items-center justify-center bg-slate-800 shadow-sm border border-white/5 transition-transform duration-500 group-hover:scale-110">
                    <User size={32} className="text-slate-500" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-200 mb-1">Your Portrait</h3>
                  <p className="text-sm text-slate-400 mb-6">Upload a professional photo</p>
                  <p className="text-xs text-slate-400 mt-2 font-mono px-3 py-1.5 rounded-md bg-slate-800 border border-white/5 shadow-sm">/public/profile.jpg</p>
                </div>
              </div>
              
              {/* Floating Badges */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-12 -right-4 sm:-right-8 lg:-right-12 z-30 bg-[#0B1120] px-5 py-3.5 md:px-7 md:py-4 rounded-xl border border-slate-800 shadow-2xl flex flex-col items-start gap-0.5"
              >
                <span className="text-xl md:text-2xl font-bold font-serif text-[#EAB308] leading-none">10+</span>
                <span className="text-[9px] md:text-[10px] font-bold text-slate-400 tracking-[0.15em] md:tracking-[0.2em] uppercase mt-1">Certifications</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-16 -left-6 sm:-left-12 z-30 bg-[#0B1120] px-5 py-3.5 md:px-7 md:py-4 rounded-xl border border-slate-800 shadow-2xl flex flex-col items-start gap-0.5"
              >
                <span className="text-xl md:text-2xl font-bold font-serif text-[#EAB308] leading-none">8.78</span>
                <span className="text-[9px] md:text-[10px] font-bold text-slate-400 tracking-[0.15em] md:tracking-[0.2em] uppercase mt-1">CGPA / 10</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
