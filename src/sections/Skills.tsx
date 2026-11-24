import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { skillCategories, SkillItem } from '../data/skills';
import { Palette, MessageSquareQuote, Presentation, BrainCircuit, Sparkles, Compass, Volume2, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(skillCategories[1].skills[0]);

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Palette': return <Palette size={20} />;
      case 'MessageSquareQuote': return <MessageSquareQuote size={20} />;
      case 'Presentation': return <Presentation size={20} />;
      case 'BrainCircuit': return <BrainCircuit size={20} />;
      case 'Sparkles': return <Sparkles size={20} />;
      case 'Compass': return <Compass size={20} />;
      case 'Volume2': return <Volume2 size={20} />;
      default: return <Sparkles size={20} />;
    }
  };

  return (
    <section id="skills" className="py-24 lg:py-32 relative overflow-hidden border-t border-[#E5E7DF] dark:border-[#1E2538] bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <SectionLabel number="03" label="WHAT I BRING" />
          <h2 className="editorial-title text-4xl sm:text-5xl lg:text-6xl font-bold text-[#181A18] dark:text-[#F2F3F1] mt-2">
            Skills shaped by <br />
            <span className="font-serif italic font-normal text-[#8DA674] dark:text-[#69E4DB]">
              curiosity.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#181A18]/75 dark:text-[#F2F3F1]/75 font-sans leading-relaxed">
            Real, cultivated strengths in creative media, interpersonal discourse, and empathetic problem-solving—without synthetic percentage bars.
          </p>
        </div>

        {/* 3 Categories Grid */}
        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-[#111526]/70 backdrop-blur-md border border-[#E5E7DF] dark:border-[#1E2538] shadow-sm"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 mb-6 border-b border-[#E5E7DF] dark:border-[#1E2538] gap-2">
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-xs font-bold text-[#6E8557] dark:text-[#69E4DB] px-2.5 py-1 rounded bg-[#A8BE91]/15 dark:bg-[#69E4DB]/15">
                    {category.categoryLabel}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#181A18] dark:text-[#F2F3F1]">
                    {category.title}
                  </h3>
                </div>
                <p className="text-xs text-[#777C78] dark:text-[#A7ADBF] font-mono">
                  {category.description}
                </p>
              </div>

              {/* Skills Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill) => {
                  const isCurrent = activeSkill?.name === skill.name;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setActiveSkill(skill)}
                      className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                        isCurrent
                          ? 'border-[#A8BE91] dark:border-[#69E4DB] bg-[#F7F7F2] dark:bg-[#192038] shadow-md ring-1 ring-[#A8BE91]/50 dark:ring-[#69E4DB]/50'
                          : 'border-[#E5E7DF] dark:border-[#1E2538] bg-white/90 dark:bg-[#111526]/90 hover:border-[#A8BE91]/60 dark:hover:border-[#69E4DB]/60'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className={`p-2 rounded-xl ${
                            isCurrent
                              ? 'bg-[#A8BE91] text-[#181A18] dark:bg-[#69E4DB] dark:text-[#080B19]'
                              : 'bg-[#EFEFEA] dark:bg-[#192038] text-[#6E8557] dark:text-[#69E4DB]'
                          }`}>
                            {renderIcon(skill.iconName)}
                          </div>
                          <span className="font-mono text-[10px] uppercase tracking-wider text-[#777C78] dark:text-[#A7ADBF]">
                            {skill.badge}
                          </span>
                        </div>

                        <h4 className="font-serif text-xl font-bold text-[#181A18] dark:text-[#F2F3F1] mb-1.5">
                          {skill.name}
                        </h4>

                        <p className="font-serif italic text-xs text-[#6E8557] dark:text-[#69E4DB] mb-3 leading-relaxed">
                          "{skill.tagline}"
                        </p>

                        <p className="text-xs text-[#181A18]/70 dark:text-[#F2F3F1]/70 leading-relaxed font-sans">
                          {skill.description}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-[#E5E7DF]/60 dark:border-[#1E2538]/60 flex items-center justify-between text-[11px] font-mono text-[#777C78] dark:text-[#A7ADBF]">
                        <span className="flex items-center space-x-1 text-[#6E8557] dark:text-[#69E4DB]">
                          <CheckCircle2 size={12} />
                          <span>Demonstrated Ability</span>
                        </span>
                        <span className="opacity-60">[Context Insight]</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Skill Focus Spotlight Banner */}
        {activeSkill && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 rounded-2xl border border-[#A8BE91]/40 dark:border-[#69E4DB]/40 bg-gradient-to-r from-[#A8BE91]/10 via-[#D5F27A]/10 to-transparent dark:from-[#69E4DB]/10 dark:via-[#C9F66D]/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-full bg-[#A8BE91] dark:bg-[#69E4DB] text-[#181A18] dark:text-[#080B19]">
                {renderIcon(activeSkill.iconName)}
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#6E8557] dark:text-[#69E4DB] font-bold">
                  FOCUS REFLECTION
                </span>
                <h4 className="font-serif text-lg font-bold text-[#181A18] dark:text-[#F2F3F1]">
                  {activeSkill.name}: {activeSkill.tagline}
                </h4>
              </div>
            </div>
            <div className="text-xs font-mono text-[#777C78] dark:text-[#A7ADBF] max-w-sm">
              Non-quantified authentic growth: evaluating skills through practice, communication clarity, and situational poise.
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};
