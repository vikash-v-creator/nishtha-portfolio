import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { profileData } from '../data/profile';
import { BookOpen, GraduationCap, Microscope, Palette, Sparkles, UserCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden border-t border-[#E5E7DF] dark:border-[#1E2538] bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <SectionLabel number="01" label="THE PERSON BEHIND THE CURIOSITY" />
          <h2 className="editorial-title text-4xl sm:text-5xl lg:text-6xl font-bold text-[#181A18] dark:text-[#F2F3F1] mt-2">
            More than what <br />
            <span className="font-serif italic font-normal text-[#8DA674] dark:text-[#69E4DB]">
              meets the eye.
            </span>
          </h2>
          <p className="mt-4 font-mono text-xs uppercase tracking-widest text-[#777C78] dark:text-[#A7ADBF]">
            A synthesis of scientific ambition, expressive arts, and personal intuition.
          </p>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* LEFT: Secondary Editorial Image Composition & Academic Dossier */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-[#111526] p-3 shadow-xl border border-[#E5E7DF] dark:border-[#1E2538] group">
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#EFEFEA] dark:bg-[#192038]">
                <img
                  src="./images/nishtha-portrait.jpg"
                  alt="Nishtha Walia Editorial Portrait"
                  className="w-full h-full object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181A18]/70 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white space-y-1">
                    <p className="font-serif italic text-lg leading-tight">
                      "Exploring the extraordinary connections between life, science and imagination."
                    </p>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#D5F27A] dark:text-[#69E4DB]">
                      First Semester Biotechnology Trajectory
                    </span>
                  </div>
                </div>
              </div>

              {/* Monogram stamp */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/90 dark:bg-[#080B19]/90 backdrop-blur-md flex items-center justify-center border border-[#E5E7DF] dark:border-[#1E2538] shadow-sm">
                <span className="font-serif font-bold text-xs text-[#181A18] dark:text-[#F2F3F1]">
                  {profileData.monogram}
                </span>
              </div>
            </div>

            {/* Academic Information Panel */}
            <div className="bg-white/80 dark:bg-[#111526]/80 backdrop-blur-sm rounded-2xl p-6 border border-[#E5E7DF] dark:border-[#1E2538] shadow-sm space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono tracking-wider uppercase text-[#6E8557] dark:text-[#69E4DB] font-semibold pb-2 border-b border-[#E5E7DF] dark:border-[#1E2538]">
                <GraduationCap size={16} />
                <span>Academic Record & Institution</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between items-baseline py-1 border-b border-[#E5E7DF]/50 dark:border-[#1E2538]/50">
                  <span className="text-[#777C78] dark:text-[#A7ADBF] text-[11px]">NAME:</span>
                  <span className="font-sans font-semibold text-[#181A18] dark:text-[#F2F3F1]">
                    {profileData.name}
                  </span>
                </div>

                <div className="flex justify-between items-baseline py-1 border-b border-[#E5E7DF]/50 dark:border-[#1E2538]/50">
                  <span className="text-[#777C78] dark:text-[#A7ADBF] text-[11px]">UNIVERSITY:</span>
                  <span className="font-sans font-medium text-[#181A18] dark:text-[#F2F3F1] text-right">
                    {profileData.academicIdentity.university}
                  </span>
                </div>

                <div className="flex justify-between items-baseline py-1 border-b border-[#E5E7DF]/50 dark:border-[#1E2538]/50">
                  <span className="text-[#777C78] dark:text-[#A7ADBF] text-[11px]">FIELD:</span>
                  <span className="font-sans font-semibold text-[#8DA674] dark:text-[#69E4DB]">
                    {profileData.academicIdentity.student}
                  </span>
                </div>

                <div className="flex justify-between items-baseline py-1 border-b border-[#E5E7DF]/50 dark:border-[#1E2538]/50">
                  <span className="text-[#777C78] dark:text-[#A7ADBF] text-[11px]">CURRENT STAGE:</span>
                  <span className="font-sans font-medium text-[#181A18] dark:text-[#F2F3F1]">
                    {profileData.academicIdentity.stage}
                  </span>
                </div>

                <div className="flex justify-between items-baseline pt-1">
                  <span className="text-[#777C78] dark:text-[#A7ADBF] text-[11px]">ACADEMIC BACKGROUND:</span>
                  <span className="font-sans font-medium text-[#181A18] dark:text-[#F2F3F1] text-right text-[11px]">
                    {profileData.academicIdentity.background}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: Written Introduction & The 3 Core Concept Dimensions */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Beautifully Written Truthful Introduction */}
            <div className="space-y-5 text-[#181A18]/85 dark:text-[#F2F3F1]/85 text-base sm:text-lg leading-relaxed font-sans">
              <p className="first-letter:font-serif first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-[#8DA674] dark:first-letter:text-[#69E4DB]">
                I'm Nishtha Walia, a Biotechnology student at Lovely Professional University with a growing interest in genetics and genetic engineering.
              </p>
              <p>
                I enjoy discovering new ideas, exploring opportunities and understanding how things work. I'm especially fascinated by the science behind life and the possibilities that biotechnology offers.
              </p>
              <p>
                Beyond academics, I'm someone who finds expression through poetry, dance and books. I enjoy meaningful conversations and believe that understanding situations and communicating ideas effectively are among the most valuable abilities a person can develop.
              </p>
              <p className="font-medium text-[#181A18] dark:text-[#F2F3F1] border-l-2 border-[#A8BE91] dark:border-[#69E4DB] pl-4 py-1 italic font-serif">
                "I see myself as a curious learner, a creative thinker and someone who is always open to discovering something new."
              </p>
            </div>

            {/* Core Concept: THE ART OF SCIENCE (3 Dimensions) */}
            <div className="pt-6 border-t border-[#E5E7DF] dark:border-[#1E2538] space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#777C78] dark:text-[#A7ADBF]">
                    CORE PHILOSOPHY
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#181A18] dark:text-[#F2F3F1]">
                    The Art of Science
                  </h3>
                </div>
                <span className="font-mono text-xs text-[#8DA674] dark:text-[#69E4DB]">
                  THREE DIMENSIONS
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {profileData.coreConcept.pillars.map((pillar, idx) => (
                  <div
                    key={pillar.key}
                    className="p-5 rounded-xl bg-white/70 dark:bg-[#111526]/70 border border-[#E5E7DF] dark:border-[#1E2538] hover:border-[#A8BE91] dark:hover:border-[#69E4DB] transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-[10px] font-bold text-[#6E8557] dark:text-[#69E4DB]">
                          0{idx + 1}
                        </span>
                        {idx === 0 && <Microscope size={16} className="text-[#A8BE91] dark:text-[#69E4DB]" />}
                        {idx === 1 && <Palette size={16} className="text-[#D5F27A] dark:text-[#C9F66D]" />}
                        {idx === 2 && <UserCheck size={16} className="text-[#63B7AA] dark:text-[#4F9DCA]" />}
                      </div>
                      <h4 className="font-serif font-bold text-lg text-[#181A18] dark:text-[#F2F3F1] group-hover:text-[#6E8557] dark:group-hover:text-[#69E4DB] transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-[11px] font-mono uppercase text-[#777C78] dark:text-[#A7ADBF] mb-2 tracking-wide">
                        {pillar.subtitle}
                      </p>
                      <p className="text-xs text-[#181A18]/70 dark:text-[#F2F3F1]/70 leading-relaxed mb-4">
                        {pillar.description}
                      </p>
                    </div>

                    <ul className="space-y-1.5 border-t border-[#E5E7DF]/70 dark:border-[#1E2538]/70 pt-3 text-[11px] text-[#777C78] dark:text-[#A7ADBF]">
                      {pillar.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start space-x-1.5">
                          <span className="text-[#A8BE91] dark:text-[#69E4DB] mt-0.5">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
