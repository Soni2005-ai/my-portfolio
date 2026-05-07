'use client';

import { motion } from 'motion/react';
import { SectionHeading } from './ui/section-heading';
import { Trophy, ClipboardList, Music } from 'lucide-react';

const education = [
  {
    year: "2027",
    status: "EXPECTED",
    degree: "B.Tech — Computer Science (Cyber Security)",
    institution: "Sagar Group of Institutions — SISTec GN, Bhopal · RGPV University",
    score: "8.78",
    scoreType: "CGPA / 10"
  },
  {
    year: "2023",
    status: "PASSED",
    degree: "Class 12 — Science Stream",
    institution: "Sahara Public Higher Secondary School, Kalapipal · MPBSE",
    score: "93.4%",
    scoreType: "PERCENTAGE"
  },
  {
    year: "2021",
    status: "PASSED",
    degree: "Class 10",
    institution: "S.D Scholars High School, Kalapipal · MPBSE",
    score: "100%",
    scoreType: "PERFECT"
  }
];

const highlights = [
  {
    title: "Sagar Ratna Award",
    desc: "Academic Excellence — SISTec GN",
    icon: Trophy,
    iconColor: "text-amber-400"
  },
  {
    title: "Sagar Manthan Workshop",
    desc: "3-day Placement Readiness — SIST, March 2026",
    icon: ClipboardList,
    iconColor: "text-amber-100"
  },
  {
    title: "Octopad Performer",
    desc: "Live Bhajan Sandhya Shows — Devotional Music",
    icon: Music,
    iconColor: "text-purple-400"
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container px-6 mx-auto max-w-5xl">
        <div className="flex flex-col items-start mb-12">
          <SectionHeading 
            align="left"
            subtitle="EDUCATION" 
            title={
              <span>
                Academic <span className="font-serif italic text-brand-500 font-light pr-2">Background</span>
              </span>
            } 
          />
        </div>
        
        <div className="space-y-4 mb-8">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-brand-500/30 transition-colors border border-slate-200 shadow-sm hover:shadow-brand-500/5 group"
            >
              <div className="flex items-center gap-6 md:gap-10 w-full md:w-auto">
                <div className="flex flex-col items-center justify-center min-w-[80px]">
                  <span className="text-2xl font-serif font-bold text-brand-600 mb-1">{item.year}</span>
                  <span className="text-[9px] tracking-widest text-slate-500 uppercase font-mono">{item.status}</span>
                </div>
                <div className="w-px h-12 bg-slate-200 hidden md:block" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.degree}</h3>
                  <p className="text-slate-600 text-sm font-light">{item.institution}</p>
                </div>
              </div>
              
              <div className="w-full md:w-auto mt-2 md:mt-0 flex justify-end md:justify-center">
                <div className="px-4 py-3 rounded-xl border border-slate-200 flex flex-col items-center justify-center min-w-[100px] group-hover:border-slate-200 transition-colors bg-white">
                  <span className="text-lg font-bold text-brand-600">{item.score}</span>
                  <span className="text-[9px] tracking-widest text-slate-500 uppercase font-mono mt-1">{item.scoreType}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {highlights.map((highlight, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
              className="glass-panel p-5 rounded-2xl flex items-center gap-5 hover:border-brand-500/30 transition-colors border border-slate-200"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-transparent`}>
                <highlight.icon className={highlight.iconColor} size={24} />
              </div>
              <div className="min-w-0">
                <h4 className="text-slate-900 font-bold mb-1 truncate">{highlight.title}</h4>
                <p className="text-slate-500 text-sm truncate font-light">{highlight.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
