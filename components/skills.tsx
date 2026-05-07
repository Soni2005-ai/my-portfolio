'use client';

import { motion } from 'motion/react';
import { SectionHeading } from './ui/section-heading';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C++"]
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS"]
  },
  {
    title: "Networking & Tools",
    skills: ["Cisco Packet Tracer", "Oracle VirtualBox"]
  },
  {
    title: "Cloud Services",
    skills: ["AWS (Basics)"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-6 mx-auto">
        <SectionHeading title="Technical Arsenal" subtitle="Skills" />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel rounded-3xl p-8 border border-slate-200 relative overflow-hidden group hover:border-brand-500/30 transition-colors"
            >
              {/* Background gradient flare */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-500/10 rounded-full blur-3xl group-hover:bg-brand-500/20 transition-all duration-500" />
              
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6 relative z-10 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-500" />
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-slate-200 text-slate-600 hover:text-brand-600 hover:border-brand-500/50 hover:bg-brand-500/10 transition-all cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
