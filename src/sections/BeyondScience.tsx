import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { creativePillars } from '../data/creative';
import { BookOpen, Feather, MessageCircle, Music, Sparkles } from 'lucide-react';

export const BeyondScience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const currentPillar = creativePillars[activeTab];

  return (
    <section id="beyond-science" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden border-t border-[#E5E7DF] dark:border-[#1E2538] bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <SectionLabel number="05" label="THE CREATIVE SIDE" />
          <h2 className="fluid-section-title font-bold text-[#181A18] dark:text-[#F2F3F1] mt-2">
            Some things are felt, <br />
            <span className="font-serif italic font-normal text-[#8DA674] dark:text-[#69E4DB]">
              not explained.
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[#181A18]/75 dark:text-[#F2F3F1]/75 font-sans leading-relaxed">
            Where poetry, reading books, expressive dance, and meaningful conversations provide inspiration and balance.
          </p>
        </div>

        {/* Magazine-Style Interactive Tabs / Nav: Clean Touch Carousel on Mobile */}
        <div className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12 border-b border-[#E5E7DF] dark:border-[#1E2538] pb-3 sm:pb-4 overflow-x-auto no-scrollbar">
          {creativePillars.map((pillar, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={pillar.number}
                onClick={() => setActiveTab(idx)}
                type="button"
                className={`flex-shrink-0 flex items-center space-x-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full font-mono text-[11px] sm:text-xs tracking-wider uppercase transition-all duration-300 focus:outline-none ${
                  isActive
                    ? 'bg-[#181A18] text-[#F7F7F2] dark:bg-[#F2F3F1] dark:text-[#080B19] shadow-sm'
                    : 'text-[#777C78] dark:text-[#A7ADBF] hover:text-[#181A18] dark:hover:text-[#F2F3F1] bg-white/60 dark:bg-[#111526]/60 border border-[#E5E7DF] dark:border-[#1E2538]'
                }`}
              >
                <span className="opacity-60">{pillar.number}</span>
                <span className="font-semibold">{pillar.title}</span>
              </button>
            );
          })}
        </div>

        {/* Editorial Feature Spread */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center bg-white/80 dark:bg-[#111526]/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 border border-[#E5E7DF] dark:border-[#1E2538] shadow-lg"
        >
          {/* Left Column: Asymmetrical Typography & Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-mono text-[#6E8557] dark:text-[#69E4DB] uppercase tracking-widest font-semibold">
              <Sparkles size={14} className="flex-shrink-0" />
              <span className="truncate">THEME {currentPillar.number} · {currentPillar.editorialNote}</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#181A18] dark:text-[#F2F3F1] leading-tight">
              {currentPillar.title}
            </h3>

            <div className="border-l-2 border-[#A8BE91] dark:border-[#69E4DB] pl-3.5 sm:pl-5 py-1">
              <p className="font-serif italic text-base sm:text-lg lg:text-xl text-[#181A18]/90 dark:text-[#F2F3F1]/90 leading-snug">
                "{currentPillar.headline}"
              </p>
            </div>

            <p className="text-xs sm:text-base text-[#181A18]/80 dark:text-[#F2F3F1]/80 leading-relaxed font-sans">
              {currentPillar.body}
            </p>

            {/* Keyword tags */}
            <div className="pt-2 sm:pt-4 flex flex-wrap gap-1.5 sm:gap-2">
              {currentPillar.keywords.map((kw, kwIdx) => (
                <span
                  key={kwIdx}
                  className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[#777C78] dark:text-[#A7ADBF] bg-[#F7F7F2] dark:bg-[#192038] px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-[#E5E7DF] dark:border-[#1E2538]"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Abstract Editorial Artwork Collage */}
          <div className="lg:col-span-5 flex justify-center pt-2 sm:pt-0">
            <div className="relative w-full max-w-[260px] sm:max-w-sm aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[#EFEFEA] to-[#E5E7DF] dark:from-[#192038] dark:to-[#111526] p-6 sm:p-8 flex flex-col justify-between border border-[#E5E7DF] dark:border-[#1E2538] shadow-inner group">
              {/* Subtle architectural grid pattern */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#A8BE91_1px,transparent_1px)] dark:bg-[radial-gradient(#69E4DB_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              <div className="relative z-10 flex justify-between items-start">
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#777C78] dark:text-[#A7ADBF]">
                  Vol. 01 / {currentPillar.title}
                </span>
                <span className="font-serif text-xl sm:text-2xl italic font-bold text-[#6E8557] dark:text-[#69E4DB]">
                  NW
                </span>
              </div>

              {/* Central Abstract Icon Symbolism */}
              <div className="relative z-10 flex flex-col items-center justify-center my-auto py-4 sm:py-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white dark:bg-[#080B19] shadow-lg flex items-center justify-center text-[#6E8557] dark:text-[#69E4DB] border border-[#E5E7DF] dark:border-[#1E2538] group-hover:scale-110 transition-transform duration-500">
                  {activeTab === 0 && <Feather size={26} strokeWidth={1.6} />}
                  {activeTab === 1 && <BookOpen size={26} strokeWidth={1.6} />}
                  {activeTab === 2 && <Music size={26} strokeWidth={1.6} />}
                  {activeTab === 3 && <MessageCircle size={26} strokeWidth={1.6} />}
                </div>
                <div className="mt-3 sm:mt-4 text-center">
                  <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#181A18] dark:text-[#F2F3F1]">
                    {currentPillar.title}
                  </span>
                  <div className="font-mono text-[8px] sm:text-[9px] uppercase tracking-widest text-[#777C78] dark:text-[#A7ADBF] mt-0.5">
                    Creative Dimension
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-3 sm:pt-4 border-t border-[#E5E7DF]/80 dark:border-[#1E2538]/80 flex justify-between items-center text-[9px] sm:text-[10px] font-mono text-[#777C78] dark:text-[#A7ADBF]">
                <span>NISH THA.</span>
                <span>The Art of Science</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Editorial Four-Card Summary Grid Below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {creativePillars.map((p, idx) => (
            <div
              key={p.number}
              onClick={() => setActiveTab(idx)}
              className={`cursor-pointer p-4 sm:p-6 rounded-xl sm:rounded-2xl border transition-all duration-300 ${
                activeTab === idx
                  ? 'border-[#A8BE91] dark:border-[#69E4DB] bg-white dark:bg-[#111526] shadow-md'
                  : 'border-[#E5E7DF] dark:border-[#1E2538] bg-white/40 dark:bg-[#111526]/40 hover:bg-white/80 dark:hover:bg-[#111526]/80'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                <span className="font-mono text-[10px] font-bold text-[#6E8557] dark:text-[#69E4DB]">
                  {p.number}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#777C78] dark:text-[#A7ADBF]">
                  {p.title}
                </span>
              </div>
              <h4 className="font-serif font-bold text-sm sm:text-base text-[#181A18] dark:text-[#F2F3F1] line-clamp-1 mb-1">
                {p.title}
              </h4>
              <p className="text-xs text-[#777C78] dark:text-[#A7ADBF] line-clamp-2 leading-relaxed">
                {p.headline}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
