import React from 'react';
import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { IntroLoader } from './components/IntroLoader';
import { GlobalDNAHelix } from './components/GlobalDNAHelix';

// Sections
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { ScientificWorld } from './sections/ScientificWorld';
import { Skills } from './sections/Skills';
import { Journey } from './sections/Journey';
import { BeyondScience } from './sections/BeyondScience';
import { Roadmap } from './sections/Roadmap';
import { Contact } from './sections/Contact';

const sectionIds = [
  'hero',
  'about',
  'science',
  'skills',
  'journey',
  'beyond-science',
  'roadmap',
  'contact',
];

export const App: React.FC = () => {
  const { theme, toggleTheme, isDark } = useTheme();
  const activeSection = useScrollSpy(sectionIds, 150);

  return (
    <div className="relative min-h-screen bg-[#F7F7F2] dark:bg-[#080B19] text-[#181A18] dark:text-[#F2F3F1] transition-colors duration-500 overflow-x-hidden selection:bg-[#A8BE91]/40 dark:selection:bg-[#69E4DB]/30 font-sans">
      {/* Initial Intro Loader */}
      <IntroLoader />

      {/* Persistent Global 3D DNA Double Helix Animation Background */}
      <GlobalDNAHelix isDark={isDark} activeSection={activeSection} />

      {/* Top Subtle Scroll Progress Bar */}
      <ScrollProgress />

      {/* Subtle Custom Follow Cursor for Desktop */}
      <CustomCursor />

      {/* Sticky Navigation Bar */}
      <Navbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* Main Content Sections - Positioned above the global 3D background */}
      <main className="relative z-10">
        <Hero />
        <About />
        <ScientificWorld isDark={isDark} />
        <Skills />
        <Journey />
        <BeyondScience />
        <Roadmap />
        <Contact />
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default App;
