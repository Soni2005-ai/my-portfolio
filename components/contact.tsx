'use client';

import { motion } from 'motion/react';
import { SectionHeading } from './ui/section-heading';
import { Mail, Linkedin, Github, Phone, MapPin, ArrowRight } from 'lucide-react';

const socialLinks = [
  {
    type: 'EMAIL',
    value: 'sonisaurabh2005@gmail.com',
    href: 'mailto:sonisaurabh2005@gmail.com',
    icon: Mail,
  },
  {
    type: 'LINKEDIN',
    value: 'saurabh-soni-5ab9a42b9',
    href: 'https://www.linkedin.com/in/saurabh-soni-5ab9a42b9',
    icon: Linkedin,
  },
  {
    type: 'GITHUB',
    value: 'github.com/Soni2005-ai',
    href: 'https://github.com/Soni2005-ai',
    icon: Github,
  },
  {
    type: 'PHONE',
    value: '+91-7974882864',
    href: 'tel:+917974882864',
    icon: Phone,
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white">
      <div className="container px-6 mx-auto max-w-5xl">
        <div className="flex flex-col items-start mb-16">
          <SectionHeading 
            align="left"
            subtitle="CONTACT" 
            title={
              <span>
                Let&apos;s <span className="font-serif italic text-brand-500 font-light pr-2">Connect</span>
              </span>
            } 
          />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                Open to internship opportunities & entry-level roles.
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                If you&apos;re looking for an enthusiastic, hardworking student who picks up new skills fast and genuinely enjoys building things — I&apos;d love to talk. Reach out through any of the channels below.
              </p>
            </div>
            
            <div className="glass-panel p-6 rounded-2xl border border-slate-200 flex flex-col items-start gap-4 inline-flex shadow-sm">
              <div className="flex items-center gap-2 text-brand-600 text-xs font-bold tracking-widest uppercase">
                <MapPin size={14} className="text-red-500 fill-red-500/20" />
                <span className="text-brand-600">LOCATION</span>
              </div>
              <div>
                <p className="text-slate-900 font-bold text-lg">Bhopal, Madhya Pradesh, India</p>
                <p className="text-slate-500 text-sm mt-1">Open to remote internships & relocating</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {socialLinks.map((link, idx) => (
              <a 
                key={idx}
                href={link.href}
                target={link.type !== 'PHONE' && link.type !== 'EMAIL' ? '_blank' : undefined}
                rel={link.type !== 'PHONE' && link.type !== 'EMAIL' ? 'noopener noreferrer' : undefined}
                className="glass-panel p-5 md:p-6 rounded-2xl flex items-center justify-between group hover:border-brand-500/30 hover:bg-slate-50 transition-all shadow-sm"
              >
                <div className="flex items-center gap-5 md:gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:text-brand-600 transition-all text-slate-600">
                    <link.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-widest text-slate-500 uppercase font-bold block mb-1">
                      {link.type}
                    </span>
                    <span className="text-slate-900 font-medium text-sm md:text-base group-hover:text-brand-600 transition-colors truncate block max-w-[200px] sm:max-w-xs md:max-w-sm">
                      {link.value}
                    </span>
                  </div>
                </div>
                <ArrowRight size={18} className="text-gray-600 group-hover:text-brand-600 group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
