import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: ReactNode;
  subtitle: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ title, subtitle, align = 'center' }: SectionHeadingProps) {
  return (
    <div className={`mb-16 md:mb-24 flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-4"
      >
        {align === 'center' && <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-brand-500" />}
        <span className="text-brand-500 font-mono tracking-[0.2em] text-sm md:text-base uppercase font-semibold">
          {subtitle}
        </span>
        <div className={`h-[1px] ${align === 'center' ? 'w-8 md:w-16 bg-gradient-to-l' : 'w-16 md:w-32 bg-gradient-to-r'} from-brand-500 to-transparent`} />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-5xl font-heading font-bold text-slate-900 tracking-tight"
      >
        {title}
      </motion.h2>
    </div>
  );
}
