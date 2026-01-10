'use client';

import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Fixed canvas background - stays in place */}
      <ScrollyCanvas />

      {/* Scrolling content on top */}
      <div className="relative z-10">
        <Overlay />

        {/* Spacer for scroll animation - 300vh */}
        <div className="h-[300vh]" />

        {/* Projects section */}
        <Projects />
      </div>
    </main>
  );
}
