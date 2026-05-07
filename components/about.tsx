'use client';

import { motion } from 'motion/react';
import { SectionHeading } from './ui/section-heading';

export function About() {
  const technicalSkills = [
    { name: "Python", progress: 80 },
    { name: "C++", progress: 60 },
    { name: "HTML & CSS", progress: 70 },
    { name: "AI / ML (Basics)", progress: 60 },
    { name: "Networking (Packet Tracer & VirtualBox)", progress: 55 },
    { name: "Cybersecurity", progress: 50 },
    { name: "AWS (Basics)", progress: 35 },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container px-6 mx-auto relative z-10 max-w-6xl">
        <div className="flex flex-col items-start mb-0">
          <SectionHeading title="Who I Am" subtitle="Discover" align="left" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-slate-600 text-lg leading-relaxed font-light"
          >
            <p>
              I&apos;m <strong className="text-slate-900 font-medium">Saurabh Soni</strong>, a 3rd-year B.Tech student in Computer Science (Cyber Security) at SISTec GN, Bhopal. I&apos;m passionate about building software that solves real problems &mdash; particularly using <strong className="text-brand-600 font-medium">Python, C++, and AI/ML techniques</strong>.
            </p>
            <p>
              I have hands-on experience working on a team-based AI project involving machine learning and data analysis. My academic journey has been strong &mdash; from a <strong className="text-slate-900 font-medium">perfect 100% in Class 10</strong> to maintaining an <strong className="text-brand-600 font-medium">8.78 CGPA</strong> in college.
            </p>
            <p>
              I&apos;m a quick learner who enjoys collaborative environments. I have studied <strong className="text-slate-900 font-medium">networking</strong> academically, gaining practical experience through <strong className="text-brand-600 font-medium">Oracle VirtualBox and Cisco Packet Tracer</strong> simulations. I also have foundational exposure to <strong className="text-slate-900 font-medium">cybersecurity</strong> and <strong className="text-slate-900 font-medium">AWS cloud services</strong>. Outside of academics, I play <strong className="text-slate-900 font-medium">Octopad</strong> in live Bhajan Sandhya shows &mdash; performing devotional music in front of audiences.
            </p>
            <p>
              I am looking for an <strong className="text-slate-900 font-medium">internship or entry-level opportunity</strong> where I can contribute, learn from experienced professionals, and grow my engineering skills.
            </p>
          </motion.div>

          {/* Technical Skills Progress Bars */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 lg:pl-10 lg:border-l border-slate-200"
          >
            <h3 className="text-sm font-mono text-brand-600 tracking-[0.2em] uppercase mb-8 font-semibold">Technical Skills</h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, idx) => (
                <div key={skill.name} className="w-full">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-700 font-medium text-sm tracking-wide">{skill.name}</span>
                    <span className="text-brand-600 text-sm font-mono">{skill.progress}%</span>
                  </div>
                  <div className="h-1 bg-slate-100 rounded-full overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.1 * idx, ease: "easeOut" }}
                      className="absolute top-0 left-0 h-full bg-brand-500 rounded-full"
                    >
                      {/* Glow effect on the progress bar */}
                      <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/30 blur-[2px]" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

