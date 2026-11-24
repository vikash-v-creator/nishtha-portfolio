import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Compass, Dna, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background Editorial Architectural Lines & Subtle Gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20 scientific-lines" />
      
      {/* Soft atmospheric ambient glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#A8BE91]/20 dark:bg-[#69E4DB]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[420px] h-[420px] bg-[#D5F27A]/15 dark:bg-[#4F9DCA]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Editorial Typography & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:pr-6">
            
            {/* Top Micro Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-2.5"
            >
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#6E8557] dark:text-[#69E4DB] font-bold px-3 py-1 rounded-full border border-[#A8BE91]/40 dark:border-[#69E4DB]/40 bg-[#A8BE91]/10 dark:bg-[#69E4DB]/10">
                HELLO, I'M
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#777C78] dark:text-[#A7ADBF] flex items-center space-x-1.5">
                <Dna size={13} className="text-[#A8BE91] dark:text-[#69E4DB]" />
                <span>BIOTECHNOLOGY STUDENT · FIRST SEMESTER</span>
              </span>
            </motion.div>

            {/* Main Editorial Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="space-y-1"
            >
              <h1 className="editorial-title text-6xl sm:text-7xl md:text-8xl lg:text-[6.2rem] xl:text-[7.2rem] font-bold tracking-tight text-[#181A18] dark:text-[#F2F3F1] leading-[0.9]">
                NISHTHA <br />
                <span className="text-[#8DA674] dark:text-[#69E4DB] font-normal italic font-serif">
                  WALIA.
                </span>
              </h1>
            </motion.div>

            {/* Supporting Headline (Core Tagline) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="border-l-2 border-[#A8BE91] dark:border-[#69E4DB] pl-4 sm:pl-5 py-1"
            >
              <p className="font-serif italic text-xl sm:text-2xl text-[#181A18]/90 dark:text-[#F2F3F1]/90 leading-snug">
                "Curiosity in mind. <br className="hidden sm:inline" />
                Creativity in soul. <br className="hidden sm:inline" />
                Science in pursuit."
              </p>
              <div className="mt-1 text-[11px] font-mono tracking-wider uppercase text-[#777C78] dark:text-[#A7ADBF]">
                LOVELY PROFESSIONAL UNIVERSITY · FIRST SEMESTER
              </div>
            </motion.div>

            {/* Short Narrative Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="text-sm sm:text-base text-[#181A18]/80 dark:text-[#F2F3F1]/80 max-w-xl leading-relaxed"
            >
              I'm a Biotechnology student fascinated by genetics, genetic engineering and the endless possibilities of science. Beyond academics, I find inspiration in poetry, books, dance and meaningful conversations.
            </motion.p>

            {/* Scientific Decorative Annotation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex items-center space-x-2 text-[10px] font-mono tracking-widest uppercase text-[#777C78] dark:text-[#A7ADBF]"
            >
              <Sparkles size={12} className="text-[#D5F27A] dark:text-[#C9F66D]" />
              <span>EXPLORING LIFE AT THE MOLECULAR LEVEL</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-4 pt-3"
            >
              <button
                onClick={() => scrollTo('journey')}
                type="button"
                className="px-6 py-3.5 rounded-full font-mono text-xs tracking-wider uppercase font-semibold text-[#181A18] dark:text-[#080B19] bg-[#A8BE91] hover:bg-[#8DA674] dark:bg-[#69E4DB] dark:hover:bg-[#52D4CB] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
              >
                EXPLORE MY JOURNEY
              </button>

              <button
                onClick={() => scrollTo('contact')}
                type="button"
                className="px-6 py-3.5 rounded-full font-mono text-xs tracking-wider uppercase font-medium text-[#181A18] dark:text-[#F2F3F1] border border-[#E5E7DF] dark:border-[#1E2538] hover:border-[#A8BE91] dark:hover:border-[#69E4DB] bg-white/70 dark:bg-[#111526]/70 backdrop-blur-sm transition-all duration-200 inline-flex items-center space-x-2 group hover:-translate-y-0.5"
              >
                <span>LET'S CONNECT</span>
                <ArrowUpRight size={14} className="text-[#8DA674] dark:text-[#69E4DB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </motion.div>

          </div>

          {/* RIGHT SIDE: Real Portrait with Editorial & Scientific Treatment */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[390px] sm:max-w-[430px]"
            >
              
              {/* Scientific Annotation Box Top-Right */}
              <div className="absolute -top-4 -right-2 z-20 hidden sm:block bg-white/90 dark:bg-[#111526]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#E5E7DF] dark:border-[#1E2538] shadow-sm text-[10px] font-mono tracking-wider text-[#181A18] dark:text-[#F2F3F1]">
                <div className="text-[8px] text-[#777C78] dark:text-[#A7ADBF] uppercase">Subject Identification</div>
                <div className="font-semibold text-[#6E8557] dark:text-[#69E4DB]">NISHTHA WALIA // 01</div>
              </div>

              {/* Molecular Frame Overlay Lines */}
              <div className="absolute -inset-3 rounded-2xl border border-dashed border-[#A8BE91]/40 dark:border-[#69E4DB]/30 pointer-events-none -z-10" />
              <div className="absolute -inset-6 rounded-3xl border border-[#E5E7DF]/60 dark:border-[#1E2538]/60 pointer-events-none -z-20" />

              {/* Main Portrait Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-[#111526] p-2.5 sm:p-3 shadow-2xl border border-[#E5E7DF] dark:border-[#1E2538] group">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#EFEFEA] dark:bg-[#192038]">
                  <img
                    src="./images/nishtha-portrait.jpg"
                    alt="Nishtha Walia - Biotechnology Student at Lovely Professional University"
                    className="w-full h-full object-cover object-center filter saturate-[1.03] contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle delicate gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181A18]/30 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Bottom Photo Metadata Caption */}
                <div className="pt-3 pb-1 px-1 flex items-center justify-between text-[10px] font-mono text-[#777C78] dark:text-[#A7ADBF]">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A8BE91] dark:bg-[#69E4DB]"></span>
                    <span>AUTHENTIC PORTRAIT</span>
                  </div>
                  <span>PAG. 01 / PROTAGONIST</span>
                </div>
              </div>

              {/* Floating Scientific Annotation Tag Bottom-Left */}
              <div className="absolute -bottom-5 -left-3 sm:-left-6 z-20 bg-white/95 dark:bg-[#111526]/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#E5E7DF] dark:border-[#1E2538] shadow-lg text-[10px] font-mono text-[#181A18] dark:text-[#F2F3F1] max-w-[210px]">
                <div className="text-[#777C78] dark:text-[#A7ADBF] text-[8px] uppercase tracking-wider">Academic Horizon</div>
                <div className="font-semibold text-[#181A18] dark:text-[#F2F3F1]">Genetics & Bio-Engineering</div>
                <div className="text-[9px] text-[#8DA674] dark:text-[#69E4DB] mt-0.5">Lovely Professional Univ.</div>
              </div>

              {/* Decorative DNA Vector Accent */}
              <div className="absolute -bottom-8 -right-4 w-16 h-16 pointer-events-none text-[#A8BE91]/30 dark:text-[#69E4DB]/20">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="20" cy="20" r="4" />
                  <circle cx="80" cy="80" r="4" />
                  <circle cx="50" cy="50" r="3" />
                  <line x1="20" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                </svg>
              </div>

            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 lg:mt-16 flex flex-col items-center justify-center space-y-2 cursor-pointer text-[#777C78] dark:text-[#A7ADBF] hover:text-[#181A18] dark:hover:text-[#F2F3F1] transition-colors"
          onClick={() => scrollTo('about')}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.25em]">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
