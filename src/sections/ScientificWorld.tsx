import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { scientificInterests, ScientificInterest } from '../data/interests';
import { ArrowRight, X, ShieldAlert, Activity } from 'lucide-react';

interface ScientificWorldProps {
  isDark: boolean;
}

export const ScientificWorld: React.FC<ScientificWorldProps> = ({ isDark }) => {
  const [selectedInterest, setSelectedInterest] = useState<ScientificInterest | null>(null);

  return (
    <section
      id="science"
      className="py-16 sm:py-24 lg:py-32 relative overflow-hidden transition-colors border-t border-[#E5E7DF] dark:border-[#1E2538] bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Monospace Scientific Coordinate Badges */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-5">
          <div className="max-w-2xl">
            <SectionLabel number="02" label="THE SCIENCE THAT INSPIRES ME" />
            <h2 className="fluid-section-title font-bold text-[#181A18] dark:text-[#F2F3F1] mt-2">
              Exploring the <br />
              <span className="font-serif italic font-normal text-[#63B7AA] dark:text-[#69E4DB]">
                language of life.
              </span>
            </h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[#181A18]/75 dark:text-[#F2F3F1]/75 font-sans leading-relaxed">
              Curiosity focused on hereditary mechanisms, molecular engineering, and the transformative capacity of biological systems.
            </p>
          </div>

          <div className="font-mono text-xs text-[#777C78] dark:text-[#A7ADBF] p-3.5 sm:p-4 rounded-xl border border-[#E5E7DF] dark:border-[#1E2538] bg-white/75 dark:bg-[#111526]/75 backdrop-blur-md self-start md:self-end">
            <div className="text-[9px] sm:text-[10px] text-[#A8BE91] dark:text-[#69E4DB] uppercase tracking-wider font-bold mb-0.5 sm:mb-1">
              DISCIPLINARY TRAJECTORY
            </div>
            <div className="text-xs sm:text-sm">Biotechnology · First Semester</div>
            <div className="text-[9px] sm:text-[10px] opacity-70 mt-0.5">Foundational Inquiry Stage</div>
          </div>
        </div>

        {/* Global 3D DNA Observatory & Molecular Architecture Portal */}
        <div className="relative mb-14 sm:mb-20 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#A8BE91]/40 dark:border-[#69E4DB]/40 bg-white/20 dark:bg-[#111526]/30 backdrop-blur-sm shadow-xl">
          {/* Subtle Corner Brackets for Scientific HUD */}
          <div className="absolute top-3 left-3 w-3 sm:w-4 h-3 sm:h-4 border-t-2 border-l-2 border-[#A8BE91] dark:border-[#69E4DB]" />
          <div className="absolute top-3 right-3 w-3 sm:w-4 h-3 sm:h-4 border-t-2 border-r-2 border-[#A8BE91] dark:border-[#69E4DB]" />
          <div className="absolute bottom-3 left-3 w-3 sm:w-4 h-3 sm:h-4 border-b-2 border-l-2 border-[#A8BE91] dark:border-[#69E4DB]" />
          <div className="absolute bottom-3 right-3 w-3 sm:w-4 h-3 sm:h-4 border-b-2 border-r-2 border-[#A8BE91] dark:border-[#69E4DB]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[320px] sm:min-h-[440px]">
            {/* Left Interactive Viewing Portal: Framing the Global 3D DNA floating behind */}
            <div className="lg:col-span-8 p-5 sm:p-8 md:p-10 flex flex-col justify-between h-full relative">
              <div className="flex items-center space-x-2 text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-[#6E8557] dark:text-[#69E4DB] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#A8BE91] dark:bg-[#69E4DB] animate-pulse flex-shrink-0" />
                <span className="truncate">GLOBAL 3D MOLECULAR OBSERVATORY // PERSISTENT DNA CANVAS</span>
              </div>

              {/* Central viewing area allows the giant 3D DNA helix to be seen clearly */}
              <div className="my-auto py-5 sm:py-8">
                <div className="inline-block px-2.5 sm:px-3 py-1 rounded-full bg-white/80 dark:bg-[#111526]/80 backdrop-blur-md border border-[#E5E7DF] dark:border-[#1E2538] text-[9px] sm:text-[10px] font-mono text-[#777C78] dark:text-[#A7ADBF] mb-2 sm:mb-3">
                  <span className="text-[#6E8557] dark:text-[#69E4DB] font-bold">SCROLL MOTION:</span> Axial & orbital synchronization
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#181A18] dark:text-[#F2F3F1] leading-tight">
                  "Let the science move <br />
                  <span className="font-serif italic font-normal text-[#8DA674] dark:text-[#69E4DB]">
                    behind her story."
                  </span>
                </h3>
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-[#181A18]/80 dark:text-[#F2F3F1]/80 max-w-lg font-sans">
                  The persistent 3D double helix navigates through space behind each section, revealing changing orientations as you scroll through Nishtha's academic journey.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[9px] sm:text-[10px] font-mono text-[#777C78] dark:text-[#A7ADBF]">
                <span className="flex items-center space-x-1">
                  <Activity size={12} className="text-[#6E8557] dark:text-[#69E4DB] flex-shrink-0" />
                  <span>3D Kinetic Model Active</span>
                </span>
                <span>•</span>
                <span>3.6 Helical Turns</span>
                <span>•</span>
                <span>Antiparallel Geometry</span>
              </div>
            </div>

            {/* Right Interactive Sidebar & Base-Pair Architecture */}
            <div className="lg:col-span-4 p-5 sm:p-7 md:p-8 border-t lg:border-t-0 lg:border-l border-[#E5E7DF] dark:border-[#1E2538] bg-white/85 dark:bg-[#111526]/85 backdrop-blur-md space-y-4 sm:space-y-6">
              <div>
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#6E8557] dark:text-[#69E4DB] font-semibold">
                  MOLECULAR ARCHITECTURE
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#181A18] dark:text-[#F2F3F1] mt-1">
                  Double Helix Paradigm
                </h4>
                <p className="text-xs text-[#181A18]/70 dark:text-[#F2F3F1]/70 mt-1.5 sm:mt-2 leading-relaxed font-sans">
                  The complementary antiparallel strands of deoxyribonucleic acid encapsulate the biological blueprint of living organisms.
                </p>
              </div>

              {/* Interactive Base Pair Legend */}
              <div className="space-y-2 font-mono text-xs pt-1">
                <div className="text-[10px] sm:text-[11px] text-[#777C78] dark:text-[#A7ADBF] uppercase tracking-wider font-semibold">
                  Complementary Base Pairing
                </div>
                <div className="flex items-center justify-between p-2 sm:p-2.5 rounded-lg bg-[#EFEFEA]/80 dark:bg-[#192038]/80 border border-[#E5E7DF]/60 dark:border-[#1E2538]/60">
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="w-2 h-2 rounded-full bg-[#63B7AA] dark:bg-[#69E4DB] flex-shrink-0" />
                    <span>Adenine (A) = Thymine (T)</span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] opacity-70">2 H-Bonds</span>
                </div>
                <div className="flex items-center justify-between p-2 sm:p-2.5 rounded-lg bg-[#EFEFEA]/80 dark:bg-[#192038]/80 border border-[#E5E7DF]/60 dark:border-[#1E2538]/60">
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="w-2 h-2 rounded-full bg-[#A8BE91] dark:bg-[#C9F66D] flex-shrink-0" />
                    <span>Guanine (G) ≡ Cytosine (C)</span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] opacity-70">3 H-Bonds</span>
                </div>
              </div>

              <div className="p-3 rounded-xl border border-[#A8BE91]/30 dark:border-[#69E4DB]/30 bg-[#A8BE91]/10 dark:bg-[#69E4DB]/10 text-[10px] sm:text-[11px] text-[#181A18]/80 dark:text-[#F2F3F1]/80">
                <span className="font-semibold text-[#6E8557] dark:text-[#69E4DB] font-mono">Academic Focus:</span> Conceptual curiosity in molecular systems, forming the cornerstone of undergraduate biotechnology studies at LPU.
              </div>
            </div>
          </div>
        </div>

        {/* 3 Scientific Interest Cards */}
        <div className="space-y-4 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#777C78] dark:text-[#A7ADBF] font-semibold">
              AREAS OF SCIENTIFIC INQUIRY
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] text-[#6E8557] dark:text-[#69E4DB]">
              Tap card to explore key questions
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {scientificInterests.map((interest) => (
              <motion.div
                key={interest.id}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedInterest(interest)}
                className="group relative cursor-pointer p-5 sm:p-7 rounded-2xl bg-white/85 dark:bg-[#111526]/85 backdrop-blur-md border border-[#E5E7DF] dark:border-[#1E2538] hover:border-[#A8BE91] dark:hover:border-[#69E4DB] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Card Top Code and Badge */}
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="font-mono text-[10px] font-bold text-[#6E8557] dark:text-[#69E4DB] tracking-widest">
                      {interest.code}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider bg-[#A8BE91]/15 dark:bg-[#69E4DB]/15 text-[#6E8557] dark:text-[#69E4DB] border border-[#A8BE91]/30 dark:border-[#69E4DB]/30">
                      {interest.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#181A18] dark:text-[#F2F3F1] group-hover:text-[#6E8557] dark:group-hover:text-[#69E4DB] transition-colors mb-2">
                    {interest.title}
                  </h3>
                  
                  <p className="font-serif italic text-xs sm:text-sm text-[#181A18]/90 dark:text-[#F2F3F1]/90 mb-3 sm:mb-4 leading-snug">
                    "{interest.tagline}"
                  </p>

                  <p className="text-xs text-[#777C78] dark:text-[#A7ADBF] line-clamp-3 leading-relaxed font-sans mb-5 sm:mb-6">
                    {interest.description}
                  </p>
                </div>

                {/* Bottom Card Action */}
                <div className="pt-3.5 sm:pt-4 border-t border-[#E5E7DF]/70 dark:border-[#1E2538]/70 flex items-center justify-between text-xs font-mono font-medium text-[#181A18] dark:text-[#F2F3F1]">
                  <span className="text-[10px] sm:text-[11px] group-hover:text-[#6E8557] dark:group-hover:text-[#69E4DB] transition-colors">
                    Explore Questions
                  </span>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#EFEFEA] dark:bg-[#192038] group-hover:bg-[#A8BE91] dark:group-hover:bg-[#69E4DB] group-hover:text-[#181A18] flex items-center justify-center transition-all duration-200">
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Truthful Academic Disclaimer Banner */}
        <div className="mt-8 sm:mt-12 p-3.5 sm:p-4 rounded-xl border border-[#E5E7DF] dark:border-[#1E2538] bg-[#FFFFFF]/75 dark:bg-[#111526]/75 backdrop-blur-md flex items-start sm:items-center space-x-2.5 sm:space-x-3 text-xs text-[#777C78] dark:text-[#A7ADBF] font-mono leading-relaxed">
          <ShieldAlert size={16} className="text-[#A8BE91] dark:text-[#69E4DB] flex-shrink-0 mt-0.5 sm:mt-0" />
          <span>
            <strong className="text-[#181A18] dark:text-[#F2F3F1]">Academic Context:</strong> These entries reflect Nishtha's focused academic curiosities and foundational first-semester studies at Lovely Professional University.
          </span>
        </div>

      </div>

      {/* Modal for Deeper Scientific Interest Breakdown */}
      <AnimatePresence>
        {selectedInterest && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#111526] border border-[#E5E7DF] dark:border-[#1E2538] shadow-2xl p-5 sm:p-8 text-[#181A18] dark:text-[#F2F3F1]"
            >
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#E5E7DF] dark:border-[#1E2538]">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-xs font-bold text-[#6E8557] dark:text-[#69E4DB]">
                    {selectedInterest.code}
                  </span>
                  <span className="text-[#777C78] dark:text-[#A7ADBF]">/</span>
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#777C78] dark:text-[#A7ADBF]">
                    Scientific Deep Dive
                  </span>
                </div>
                <button
                  onClick={() => setSelectedInterest(null)}
                  className="p-1.5 rounded-lg text-[#777C78] dark:text-[#A7ADBF] hover:text-[#181A18] dark:hover:text-[#F2F3F1] hover:bg-[#EFEFEA] dark:hover:bg-[#192038] transition-colors"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="mt-4 sm:mt-5 space-y-3 sm:space-y-4">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                  {selectedInterest.title}
                </h3>
                <p className="font-serif italic text-sm sm:text-base text-[#6E8557] dark:text-[#69E4DB]">
                  "{selectedInterest.tagline}"
                </p>
                <p className="text-xs sm:text-sm text-[#181A18]/80 dark:text-[#F2F3F1]/80 leading-relaxed font-sans">
                  {selectedInterest.description}
                </p>

                <div className="pt-3 sm:pt-4 border-t border-[#E5E7DF] dark:border-[#1E2538]">
                  <div className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#777C78] dark:text-[#A7ADBF] font-semibold mb-2 sm:mb-3">
                    Curiosity Questions Under Exploration:
                  </div>
                  <ul className="space-y-2 text-xs text-[#181A18]/85 dark:text-[#F2F3F1]/85">
                    {selectedInterest.keyQuestions.map((q, idx) => (
                      <li key={idx} className="flex items-start space-x-2 bg-[#F7F7F2] dark:bg-[#192038] p-2.5 rounded-lg">
                        <span className="text-[#A8BE91] dark:text-[#69E4DB] font-bold font-mono">0{idx + 1}.</span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-[#E5E7DF] dark:border-[#1E2538] flex items-center justify-between text-xs font-mono text-[#777C78] dark:text-[#A7ADBF]">
                <span className="text-[10px] sm:text-xs truncate max-w-[200px]">Concept: {selectedInterest.molecularConcept}</span>
                <button
                  onClick={() => setSelectedInterest(null)}
                  className="px-4 py-2 rounded-full bg-[#181A18] dark:bg-[#F2F3F1] text-white dark:text-[#080B19] font-mono text-[10px] sm:text-[11px] font-semibold hover:opacity-90 transition-opacity"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
