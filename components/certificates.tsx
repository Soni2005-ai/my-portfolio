'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeading } from './ui/section-heading';
import { Code2, Bot, Lock, Globe, Cloud, GraduationCap, BarChart, ExternalLink, X } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

const certificates = [
  { 
    id: 1,
    title: 'Python Essentials 1',
    issuer: 'CISCO NETWORKING ACADEMY',
    date: 'Oct 2025',
    icon: Code2,
    img: '/certificates/python1.jpg'
  },

  { 
    id: 2,
    title: 'Python Essentials 2',
    issuer: 'CISCO NETWORKING ACADEMY',
    date: 'Nov 2025',
    icon: Code2,
    img: '/certificates/python2.jpg'
  },

  { 
    id: 3,
    title: 'Introduction to Modern AI',
    issuer: 'CISCO NETWORKING ACADEMY',
    date: 'Dec 2025',
    icon: Bot,
    img: '/certificates/modern-ai.jpg'
  },

  { 
    id: 4,
    title: 'Apply AI: Analyze Customer Reviews',
    issuer: 'CISCO NETWORKING ACADEMY',
    date: 'Dec 2025',
    icon: BarChart,
    img: '/certificates/ai-reviews.jpg'
  },

  { 
    id: 5,
    title: 'Introduction to Cybersecurity',
    issuer: 'CISCO NETWORKING ACADEMY',
    date: 'Mar 2026',
    icon: Lock,
    img: '/certificates/cybersecurity.jpg'
  },

  { 
    id: 6,
    title: 'CCNA: Introduction to Networks',
    issuer: 'CISCO NETWORKING ACADEMY',
    date: 'Apr 2026',
    icon: Globe,
    img: '/certificates/ccna-networks.jpg'
  },

  { 
    id: 7,
    title: 'CCNA: Switching, Routing & Wireless Essentials',
    issuer: 'CISCO NETWORKING ACADEMY',
    date: 'Apr 2026',
    icon: Globe,
    img: '/certificates/ccna-routing.jpg'
  },

  { 
    id: 8,
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'AWS TRAINING & CERTIFICATION',
    date: 'Feb 2026',
    icon: Cloud,
    img: '/certificates/aws-practitioner.png'
  },

  { 
    id: 9,
    title: 'Cloud Computing 101',
    issuer: 'AWS EDUCATE',
    date: '2025 – 2026',
    icon: GraduationCap,
    img: '/certificates/cloud101.png'
  },
];

export function Certificates() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  
  const selectedCert = certificates.find(c => c.id === selectedId);

  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-white">
      <div className="container px-6 mx-auto">
        
        <div className="flex flex-col items-start mb-0">
          <SectionHeading 
            align="left"
            subtitle="Certifications"
            title={
              <span>
                My <span className="font-serif italic text-brand-500 font-light pr-2">Credentials</span>
              </span>
            } 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certificates.map((cert, idx) => (
            <motion.div
              layoutId={`cert-card-${cert.id}`}
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="glass-panel p-6 md:p-8 rounded-2xl flex flex-col justify-between group hover:border-brand-500/30 transition-all shadow-lg hover:shadow-brand-500/10 min-h-[220px]"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-600">
                    {React.createElement(cert.icon, { size: 20 })}
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold tracking-wider text-slate-500 uppercase">{cert.issuer}</span>
                </div>
                
                <h4 className="text-slate-900 font-bold text-lg leading-snug mb-4 group-hover:text-brand-600 transition-colors">
                  {cert.title}
                </h4>
              </div>
              
              <div className="mt-auto pt-5 border-t border-slate-200 flex items-center justify-between">
                <p className="text-brand-500/80 text-sm font-medium">{cert.date}</p>
                
                <button 
                  onClick={() => setSelectedId(cert.id)}
                  className="flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-brand-600 transition-colors bg-slate-100 hover:bg-brand-500/10 px-3 py-1.5 rounded-lg"
                >
                  <ExternalLink size={14} />
                  View
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Preview Modal */}
      <AnimatePresence>
        {selectedId && selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-white/90 backdrop-blur-sm cursor-pointer"
            />
            
            <motion.div
              layoutId={`cert-card-${selectedCert.id}`}
              className="relative z-10 w-full max-w-4xl bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-white hover:bg-brand-500 hover:text-black border border-slate-200 rounded-full text-slate-900 transition-all"
              >
                <X size={20} />
              </button>
              
              <div className="p-6 md:p-10">
                <div className="aspect-[1.4] bg-white/80 rounded-xl mb-6 flex flex-col items-center justify-center border border-slate-200 relative overflow-hidden">
                  {selectedCert.img ? (
                     <Image src={selectedCert.img} alt={selectedCert.title} fill className="object-contain" />
                  ) : (
                    <>
                      <div className="w-16 h-16 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-500 mb-4">
                        {React.createElement(selectedCert.icon, { size: 32 })}
                      </div>
                      <p className="text-slate-500 uppercase tracking-widest text-sm text-center px-4">
                        Image Preview Not Available <br/>
                        <span className="text-xs text-brand-500/70 lowercase normal-case mt-2 block">
                          You can upload this image and add its path later.
                        </span>
                      </p>
                    </>
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{selectedCert.title}</h3>
                  <p className="text-brand-500 font-mono text-sm">{selectedCert.issuer} • {selectedCert.date}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
