import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { roadmapData, RoadmapMonth } from '../data/roadmap';
import { Calendar, CheckCircle2, ChevronRight, Flag, ListChecks, Sparkles, Target } from 'lucide-react';

export const Roadmap: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<number>(0);
  const currentMonth = roadmapData[selectedMonth];

  return (
    <section id="roadmap" className="py-24 lg:py-32 relative overflow-hidden border-t border-[#E5E7DF] dark:border-[#1E2538] bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <SectionLabel number="06" label="WHAT COMES NEXT" />
          <h2 className="editorial-title text-4xl sm:text-5xl lg:text-6xl font-bold text-[#181A18] dark:text-[#F2F3F1] mt-2">
            Six months of <br />
            <span className="font-serif italic font-normal text-[#8DA674] dark:text-[#69E4DB]">
              becoming.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#181A18]/75 dark:text-[#F2F3F1]/75 font-sans leading-relaxed">
            A structured, forward-looking academic and skills development trajectory for the upcoming six months of undergraduate biotechnology studies.
          </p>
        </div>

        {/* Milestone Selector: Desktop Horizontal Bar & Mobile Scroll */}
        <div className="mb-12">
          {/* Progress bar line */}
          <div className="relative mb-6">
            <div className="h-1 w-full bg-[#E5E7DF] dark:bg-[#1E2538] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#A8BE91] via-[#D5F27A] to-[#63B7AA] dark:from-[#69E4DB] dark:via-[#C9F66D] dark:to-[#4F9DCA] transition-all duration-300"
                style={{ width: `${((selectedMonth + 1) / roadmapData.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Month Milestone Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {roadmapData.map((item, idx) => {
              const isSelected = selectedMonth === idx;
              return (
                <button
                  key={item.monthNumber}
                  onClick={() => setSelectedMonth(idx)}
                  type="button"
                  className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 focus:outline-none ${
                    isSelected
                      ? 'border-[#A8BE91] dark:border-[#69E4DB] bg-white dark:bg-[#111526] shadow-md ring-2 ring-[#A8BE91]/40 dark:ring-[#69E4DB]/40'
                      : 'border-[#E5E7DF] dark:border-[#1E2538] bg-white/60 dark:bg-[#111526]/60 hover:border-[#A8BE91]/60 dark:hover:border-[#69E4DB]/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[10px] font-bold text-[#6E8557] dark:text-[#69E4DB]">
                      {item.monthLabel}
                    </span>
                    {idx === 0 ? (
                      <span className="w-2 h-2 rounded-full bg-[#A8BE91] dark:bg-[#69E4DB] animate-ping" />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#777C78]/40 dark:bg-[#A7ADBF]/40" />
                    )}
                  </div>
                  <h4 className="font-serif font-bold text-xs sm:text-sm text-[#181A18] dark:text-[#F2F3F1] line-clamp-1">
                    {item.title}
                  </h4>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-[#777C78] dark:text-[#A7ADBF] mt-1">
                    {idx === 0 ? 'Active Focus' : `Phase 0${idx + 1}`}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Milestone Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMonth}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-12 rounded-3xl bg-white/80 dark:bg-[#111526]/80 backdrop-blur-md border border-[#E5E7DF] dark:border-[#1E2538] shadow-xl space-y-8"
          >
            {/* Top Month Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#E5E7DF] dark:border-[#1E2538] gap-4">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#A8BE91]/15 dark:bg-[#69E4DB]/15 text-[#6E8557] dark:text-[#69E4DB] border border-[#A8BE91]/30 dark:border-[#69E4DB]/30">
                    {currentMonth.monthLabel} · {currentMonth.status}
                  </span>
                  <span className="font-mono text-xs text-[#777C78] dark:text-[#A7ADBF]">
                    Theme: {currentMonth.theme}
                  </span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#181A18] dark:text-[#F2F3F1]">
                  {currentMonth.title}
                </h3>
              </div>

              <div className="p-3 rounded-xl bg-[#F7F7F2] dark:bg-[#192038] border border-[#E5E7DF] dark:border-[#1E2538] text-xs font-mono text-[#777C78] dark:text-[#A7ADBF] max-w-xs">
                <span className="text-[#6E8557] dark:text-[#69E4DB] font-semibold">Rubric Alignment:</span> {currentMonth.academicRubricNote}
              </div>
            </div>

            {/* Focus Statement */}
            <div className="p-4 rounded-2xl bg-[#A8BE91]/10 dark:bg-[#69E4DB]/10 border border-[#A8BE91]/30 dark:border-[#69E4DB]/30">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#6E8557] dark:text-[#69E4DB] font-bold">
                CORE STRATEGIC FOCUS
              </span>
              <p className="font-serif italic text-base sm:text-lg text-[#181A18] dark:text-[#F2F3F1] mt-1">
                "{currentMonth.focus}"
              </p>
            </div>

            {/* 4 Pillars: Objectives, Key Topics, Intended Outcomes, Suggested Activities */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Pillar 1: Learning Objectives */}
              <div className="p-5 rounded-2xl bg-[#F7F7F2]/80 dark:bg-[#192038]/80 border border-[#E5E7DF] dark:border-[#1E2538]">
                <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase text-[#6E8557] dark:text-[#69E4DB] mb-3">
                  <Target size={15} />
                  <span>Learning Objectives</span>
                </div>
                <ul className="space-y-2 text-xs text-[#181A18]/80 dark:text-[#F2F3F1]/80 font-sans">
                  {currentMonth.learningObjectives.map((obj, i) => (
                    <li key={i} className="flex items-start space-x-1.5">
                      <span className="text-[#A8BE91] dark:text-[#69E4DB] mt-0.5">•</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pillar 2: Key Topics */}
              <div className="p-5 rounded-2xl bg-[#F7F7F2]/80 dark:bg-[#192038]/80 border border-[#E5E7DF] dark:border-[#1E2538]">
                <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase text-[#6E8557] dark:text-[#69E4DB] mb-3">
                  <ListChecks size={15} />
                  <span>Key Topics</span>
                </div>
                <ul className="space-y-2 text-xs text-[#181A18]/80 dark:text-[#F2F3F1]/80 font-sans">
                  {currentMonth.keyTopics.map((top, i) => (
                    <li key={i} className="flex items-start space-x-1.5">
                      <span className="text-[#D5F27A] dark:text-[#C9F66D] mt-0.5">•</span>
                      <span>{top}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pillar 3: Intended Outcomes */}
              <div className="p-5 rounded-2xl bg-[#F7F7F2]/80 dark:bg-[#192038]/80 border border-[#E5E7DF] dark:border-[#1E2538]">
                <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase text-[#6E8557] dark:text-[#69E4DB] mb-3">
                  <CheckCircle2 size={15} />
                  <span>Intended Outcomes</span>
                </div>
                <ul className="space-y-2 text-xs text-[#181A18]/80 dark:text-[#F2F3F1]/80 font-sans">
                  {currentMonth.intendedOutcomes.map((out, i) => (
                    <li key={i} className="flex items-start space-x-1.5">
                      <span className="text-[#63B7AA] dark:text-[#4F9DCA] mt-0.5">•</span>
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pillar 4: Suggested Activities */}
              <div className="p-5 rounded-2xl bg-[#F7F7F2]/80 dark:bg-[#192038]/80 border border-[#E5E7DF] dark:border-[#1E2538]">
                <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase text-[#6E8557] dark:text-[#69E4DB] mb-3">
                  <Flag size={15} />
                  <span>Suggested Activities</span>
                </div>
                <ul className="space-y-2 text-xs text-[#181A18]/80 dark:text-[#F2F3F1]/80 font-sans">
                  {currentMonth.suggestedActivities.map((act, i) => (
                    <li key={i} className="flex items-start space-x-1.5">
                      <span className="text-[#A8BE91] dark:text-[#69E4DB] mt-0.5">•</span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Milestone Footer Note */}
            <div className="pt-4 border-t border-[#E5E7DF] dark:border-[#1E2538] flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-[#777C78] dark:text-[#A7ADBF] gap-2">
              <span className="italic">
                * Note: Proposed student development roadmap subject to ongoing academic progression and faculty mentorship.
              </span>
              <div className="flex items-center space-x-2">
                <button
                  disabled={selectedMonth === 0}
                  onClick={() => setSelectedMonth(prev => Math.max(0, prev - 1))}
                  className="px-3 py-1 rounded border border-[#E5E7DF] dark:border-[#1E2538] disabled:opacity-30 hover:bg-[#EFEFEA] dark:hover:bg-[#192038]"
                >
                  Previous
                </button>
                <button
                  disabled={selectedMonth === roadmapData.length - 1}
                  onClick={() => setSelectedMonth(prev => Math.min(roadmapData.length - 1, prev + 1))}
                  className="px-3 py-1 rounded border border-[#E5E7DF] dark:border-[#1E2538] disabled:opacity-30 hover:bg-[#EFEFEA] dark:hover:bg-[#192038]"
                >
                  Next
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
