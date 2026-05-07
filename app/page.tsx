import MouseGlow from '@/components/mouse-glow';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Experience } from '@/components/experience';
import { Certificates } from '@/components/certificates';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { ThemeSwitcher } from '@/components/theme-switcher';

export default function Home() {
  return (
    <main className="relative bg-[#F9FAFB] min-h-screen text-slate-800 selection:bg-brand-500/30 selection:text-brand-900">
      <MouseGlow />
      <Navbar />
      <ThemeSwitcher />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
