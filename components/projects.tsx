'use client';

import { motion } from 'motion/react';
import { SectionHeading } from './ui/section-heading';
import { ArrowRight, ShieldAlert, Users } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container px-6 mx-auto max-w-5xl">
        <div className="flex flex-col items-start mb-0">
          <SectionHeading 
            align="left"
            subtitle="Projects" 
            title={
              <span>
                My <span className="font-serif italic text-brand-500 font-light pr-2">Work</span>
              </span>
            } 
          />
        </div>
        
        <div className="mt-12">
          {/* Project Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group glass-panel rounded-[2rem] p-8 md:p-12 relative transition-all duration-500 hover:border-brand-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] overflow-hidden"
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center flex-shrink-0">
                  <ShieldAlert className="w-8 h-8 text-brand-500 stroke-[1.5]" />
                </div>
                
                {/* Dates */}
                <div className="flex flex-col md:items-end gap-2 text-left md:text-right">
                  <span className="text-slate-500 font-mono text-sm tracking-widest uppercase">Dec 2025 — Dec 2026</span>
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6 group-hover:text-brand-600 transition-colors">
                AI/ML Based Phishing Detection System
              </h3>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-4xl font-light">
                Developed as part of a 5-member academic team under faculty mentorship. The system uses machine learning models to analyze URLs and classify them as legitimate or phishing — helping users avoid malicious websites. Focused on data preprocessing, model training, and accuracy evaluation using Python ML libraries. TypeScript was used in the frontend integration layer of the system.
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-12">
                {[
                  "PYTHON", 
                  "MACHINE LEARNING", 
                  "AI / ML", 
                  "TYPESCRIPT", 
                  "URL ANALYSIS", 
                  "CLASSIFICATION"
                ].map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs font-mono font-medium text-brand-600 px-4 py-2 rounded-lg border border-brand-500/20 bg-brand-500/5 backdrop-blur-sm shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Footer */}
              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                  <Users size={16} className="text-slate-600" />
                  <span>Team of 5</span>
                  <span className="text-gray-700 font-bold">·</span>
                  <span>Mentor: Dr. Nikhlesh Pathik</span>
                  <span className="text-gray-700 font-bold">·</span>
                  <span>SISTec GN</span>
                </div>
                
                <a 
                  href="https://github.com/Soni2005-ai/-Ai-ML-Based-Phishing-Detection-System-" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-brand-600 hover:text-brand-600 transition-colors hover:gap-3 group/link"
                >
                  GitHub
                  <ArrowRight size={18} className="transition-all" />
                </a>
              </div>
            </div>
            

          </motion.div>
        </div>
      </div>
    </section>
  );
}
