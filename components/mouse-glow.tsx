'use client';

import { useMotionValue, useSpring, motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function MouseGlow() {
  const [mounted, setMounted] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { bounce: 0, duration: 100 });
  const springY = useSpring(y, { bounce: 0, duration: 100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half of width/height (300px) to center
      x.set(e.clientX - 300);
      y.set(e.clientY - 300);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 w-[600px] h-[600px] rounded-full bg-brand-500/[0.05] blur-[100px] mix-blend-multiply hidden lg:block"
      style={{ x: springX, y: springY }}
    />
  );
}
