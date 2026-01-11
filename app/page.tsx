'use client';

import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import { Header } from '@/components/ui/header';

export default function Home() {
  return (
    <main id="main-content" className="relative bg-black min-h-screen" aria-label="Portfolio content">
      {/* New Shadcn-style Navbar */}
      <Header />

      {/* Fixed canvas background - stays in place */}
      <ScrollyCanvas />

      {/* Scrolling content on top */}
      <div className="relative z-10">
        <Overlay />

        {/* Spacer for scroll animation - 300vh */}
        <div className="h-[300vh]" aria-hidden="true" />

        {/* Main Content Sections */}
        <div className="bg-black relative z-20">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </div>
      </div>
    </main>
  );
}
