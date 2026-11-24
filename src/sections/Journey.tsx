import React, { useEffect, useRef, useState } from 'react';
import { SectionLabel } from '../components/SectionLabel';
import { activitiesData } from '../data/activities';
import { Award, Sparkles } from 'lucide-react';

export const Journey: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Normalized milestone trigger thresholds along the central timeline
  const milestonePositions = [0.06, 0.24, 0.42, 0.60, 0.78, 0.94];

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    motionQuery.addEventListener('change', handleMotionChange);

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (timelineRef.current) {
            const rect = timelineRef.current.getBoundingClientRect();
            const winH = window.innerHeight;

            // Start drawing line as timeline enters 70% of viewport
            const startThreshold = winH * 0.70;
            const totalDistance = rect.height;
            const currentDistance = startThreshold - rect.top;

            const progress = Math.max(0, Math.min(1, currentDistance / totalDistance));
            setScrollProgress(progress);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section id="journey" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden border-t border-[#E5E7DF] dark:border-[#1E2538] bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <SectionLabel number="04" label="EXPERIENCES THAT SHAPE ME" />
          <h2 className="fluid-section-title font-bold text-[#181A18] dark:text-[#F2F3F1] mt-2">
            Every experience adds a <br />
            <span className="font-serif italic font-normal text-[#8DA674] dark:text-[#69E4DB]">
              new dimension.
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[#181A18]/75 dark:text-[#F2F3F1]/75 font-sans leading-relaxed">
            The journey unfolds as you scroll. Extracurricular pursuits across athletics, public speaking, creative arts, and academic participation.
          </p>
        </div>

        {/* Central Alternating Timeline Container with Scroll-Driven Animation */}
        <div ref={timelineRef} className="relative mb-16 sm:mb-24 min-h-[1100px] sm:min-h-[1400px]">
          
          {/* 1. Central Timeline Track: Static Guideline Line */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 top-4 bottom-8 w-[2px] -translate-x-1/2 bg-[#E5E7DF] dark:bg-[#1E2538] rounded-full" />

          {/* 2. Central Timeline Line: Progressive Scroll-Driven Drawing Line */}
          <div
            className="absolute left-4 sm:left-6 md:left-1/2 top-4 w-[2.5px] -translate-x-1/2 bg-gradient-to-b from-[#A8BE91] via-[#D5F27A] to-[#63B7AA] dark:from-[#69E4DB] dark:via-[#C9F66D] dark:to-[#4F9DCA] rounded-full transition-all duration-75 pointer-events-none shadow-[0_0_8px_rgba(168,190,145,0.4)] dark:shadow-[0_0_10px_rgba(105,228,219,0.5)]"
            style={{
              height: prefersReducedMotion ? '100%' : `${Math.min(100, Math.max(0, scrollProgress * 100))}%`,
            }}
          />

          {/* Activity Timeline Items */}
          <div className="space-y-10 sm:space-y-16 md:space-y-24 pt-3 sm:pt-4">
            {activitiesData.map((activity, idx) => {
              const isRightSide = idx % 2 === 0;
              const threshold = milestonePositions[idx];

              // Scrub progress calculation for this individual card (0 to 1)
              const cardWindow = 0.12;
              const rawCardProgress = prefersReducedMotion
                ? 1
                : Math.max(0, Math.min(1, (scrollProgress - (threshold - 0.06)) / cardWindow));

              const isMarkerActive = prefersReducedMotion || scrollProgress >= threshold;

              // Desktop horizontal offset: right cards slide in from +120px, left cards slide in from -120px
              const desktopOffsetX = isRightSide
                ? (1 - rawCardProgress) * 120
                : (1 - rawCardProgress) * -120;

              // Mobile horizontal offset: gently slides in from +16px (never causes horizontal overflow)
              const mobileOffsetX = (1 - rawCardProgress) * 16;

              return (
                <div
                  key={activity.id}
                  className="relative flex flex-col md:flex-row items-center w-full min-h-[170px] sm:min-h-[220px]"
                >
                  {/* Center Milestone Marker Node */}
                  <div
                    className={`absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center z-20 transition-all duration-300 ${
                      isMarkerActive
                        ? 'bg-white dark:bg-[#080B19] border-2 border-[#A8BE91] dark:border-[#69E4DB] scale-110 shadow-lg ring-3 sm:ring-4 ring-[#A8BE91]/20 dark:ring-[#69E4DB]/25'
                        : 'bg-white/70 dark:bg-[#111526]/70 border border-[#E5E7DF] dark:border-[#1E2538] opacity-40 scale-90'
                    }`}
                  >
                    <span
                      className={`font-mono text-[10px] sm:text-xs font-bold transition-colors duration-300 ${
                        isMarkerActive
                          ? 'text-[#6E8557] dark:text-[#69E4DB]'
                          : 'text-[#777C78] dark:text-[#A7ADBF]'
                      }`}
                    >
                      {activity.number}
                    </span>
                  </div>

                  {/* Desktop Positioning: Alternating Left vs Right */}
                  <div
                    className={`w-full flex ${
                      isRightSide
                        ? 'md:justify-end'
                        : 'md:justify-start'
                    }`}
                  >
                    {/* Timeline Card Wrapper with Progressive Scroll Reveal */}
                    <div
                      className={`ml-10 sm:ml-14 md:ml-0 w-[calc(100%-2.75rem)] sm:w-[calc(100%-3.5rem)] md:w-[45%] ${
                        isRightSide ? 'md:pl-10' : 'md:pr-10'
                      }`}
                      style={{
                        opacity: prefersReducedMotion ? 1 : rawCardProgress,
                        transform: prefersReducedMotion
                          ? 'none'
                          : window.innerWidth < 768
                          ? `translateX(${mobileOffsetX}px)`
                          : `translateX(${desktopOffsetX}px)`,
                        transition: prefersReducedMotion
                          ? 'none'
                          : 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.15s ease-out',
                        pointerEvents: rawCardProgress > 0.4 ? 'auto' : 'none',
                      }}
                    >
                      <div className="p-4 sm:p-7 rounded-xl sm:rounded-2xl bg-white/85 dark:bg-[#111526]/85 backdrop-blur-md border border-[#E5E7DF] dark:border-[#1E2538] hover:border-[#A8BE91] dark:hover:border-[#69E4DB] shadow-sm hover:shadow-xl transition-all duration-300 group">
                        
                        {/* 1. Category label & Status badge */}
                        <div
                          className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2 mb-2 sm:mb-3 transition-all duration-300"
                          style={{
                            opacity: rawCardProgress > 0.15 ? 1 : 0,
                            transform: rawCardProgress > 0.15 ? 'translateY(0)' : 'translateY(4px)',
                          }}
                        >
                          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[#6E8557] dark:text-[#69E4DB] font-semibold px-2 sm:px-2.5 py-0.5 rounded bg-[#A8BE91]/15 dark:bg-[#69E4DB]/15 border border-[#A8BE91]/30 dark:border-[#69E4DB]/30">
                            {activity.category}
                          </span>
                          <span className="text-[9px] sm:text-[10px] font-mono text-[#777C78] dark:text-[#A7ADBF]">
                            {activity.status}
                          </span>
                        </div>

                        {/* 2. Activity Title */}
                        <h3
                          className="font-serif text-xl sm:text-2xl font-bold text-[#181A18] dark:text-[#F2F3F1] group-hover:text-[#6E8557] dark:group-hover:text-[#69E4DB] transition-all duration-300 mb-1.5 sm:mb-2"
                          style={{
                            opacity: rawCardProgress > 0.3 ? 1 : 0,
                            transform: rawCardProgress > 0.3 ? 'translateY(0)' : 'translateY(6px)',
                          }}
                        >
                          {activity.title}
                        </h3>

                        {/* 3. Description */}
                        <p
                          className="text-xs sm:text-sm text-[#181A18]/80 dark:text-[#F2F3F1]/80 leading-relaxed font-sans mb-3 sm:mb-4 transition-all duration-300"
                          style={{
                            opacity: rawCardProgress > 0.5 ? 1 : 0,
                            transform: rawCardProgress > 0.5 ? 'translateY(0)' : 'translateY(6px)',
                          }}
                        >
                          {activity.description}
                        </p>

                        {/* 4. Participation Focus Information */}
                        <div
                          className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-[#F7F7F2]/80 dark:bg-[#192038]/80 border-l-2 border-[#A8BE91] dark:border-[#69E4DB] mb-3 sm:mb-4 text-[11px] sm:text-xs font-mono text-[#777C78] dark:text-[#A7ADBF] transition-all duration-300"
                          style={{
                            opacity: rawCardProgress > 0.65 ? 1 : 0,
                            transform: rawCardProgress > 0.65 ? 'translateY(0)' : 'translateY(6px)',
                          }}
                        >
                          <span className="text-[#6E8557] dark:text-[#69E4DB] font-semibold">Participation Focus:</span> {activity.focusArea}
                        </div>

                        {/* 5. Hashtag Tags */}
                        <div
                          className="flex flex-wrap gap-1 sm:gap-1.5 pt-2 border-t border-[#E5E7DF]/60 dark:border-[#1E2538]/60 transition-all duration-300"
                          style={{
                            opacity: rawCardProgress > 0.8 ? 1 : 0,
                            transform: rawCardProgress > 0.8 ? 'translateY(0)' : 'translateY(4px)',
                          }}
                        >
                          {activity.tags.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-[#777C78] dark:text-[#A7ADBF] bg-[#EFEFEA]/80 dark:bg-[#192038]/80 px-2 py-0.5 rounded"
                            >
                              #{t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dedicated Area for Future Certificates and Achievement Evidence */}
        <div className="mt-12 sm:mt-16 p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white/75 dark:bg-[#111526]/75 backdrop-blur-md border border-[#E5E7DF] dark:border-[#1E2538] shadow-sm">
          <div className="max-w-3xl space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
            <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#6E8557] dark:text-[#69E4DB] font-semibold">
              <Award size={15} />
              <span>Academic Evidence & Credential Registry</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#181A18] dark:text-[#F2F3F1]">
              Future Verification Showcase
            </h3>
            <p className="text-xs sm:text-sm text-[#777C78] dark:text-[#A7ADBF] font-sans leading-relaxed">
              In strict adherence to academic ethics, this portfolio does not fabricate unverified accolades or certificates. As Nishtha advances through her undergraduate coursework, competitions, symposiums, and certifications will be systematically archived here.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-dashed border-[#A8BE91]/50 dark:border-[#69E4DB]/40 bg-white/60 dark:bg-[#192038]/60 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[9px] sm:text-[10px] text-[#8DA674] dark:text-[#69E4DB] font-bold">
                  CREDENTIAL SLOT · 01
                </span>
                <h4 className="font-serif font-bold text-base sm:text-lg text-[#181A18] dark:text-[#F2F3F1] mt-1">
                  Biotechnology Lab Certifications
                </h4>
                <p className="text-xs text-[#777C78] dark:text-[#A7ADBF] mt-1.5 sm:mt-2 font-sans">
                  Reserved for verified biosafety, molecular protocol, or GLP laboratory coursework certificates upon completion.
                </p>
              </div>
              <div className="mt-4 sm:mt-6 pt-2.5 sm:pt-3 border-t border-[#E5E7DF]/60 dark:border-[#1E2538]/60 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#777C78] dark:text-[#A7ADBF]">
                <span>Status: In Academic Pursuit</span>
                <Sparkles size={13} className="text-[#A8BE91] dark:text-[#69E4DB]" />
              </div>
            </div>

            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-dashed border-[#A8BE91]/50 dark:border-[#69E4DB]/40 bg-white/60 dark:bg-[#192038]/60 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[9px] sm:text-[10px] text-[#8DA674] dark:text-[#69E4DB] font-bold">
                  CREDENTIAL SLOT · 02
                </span>
                <h4 className="font-serif font-bold text-base sm:text-lg text-[#181A18] dark:text-[#F2F3F1] mt-1">
                  Symposiums & Declamation
                </h4>
                <p className="text-xs text-[#777C78] dark:text-[#A7ADBF] mt-1.5 sm:mt-2 font-sans">
                  Archived participation certificates from university-level public discourse, debate, and declamation events.
                </p>
              </div>
              <div className="mt-4 sm:mt-6 pt-2.5 sm:pt-3 border-t border-[#E5E7DF]/60 dark:border-[#1E2538]/60 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#777C78] dark:text-[#A7ADBF]">
                <span>Status: Campus Active</span>
                <Sparkles size={13} className="text-[#A8BE91] dark:text-[#69E4DB]" />
              </div>
            </div>

            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-dashed border-[#A8BE91]/50 dark:border-[#69E4DB]/40 bg-white/60 dark:bg-[#192038]/60 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[9px] sm:text-[10px] text-[#8DA674] dark:text-[#69E4DB] font-bold">
                  CREDENTIAL SLOT · 03
                </span>
                <h4 className="font-serif font-bold text-base sm:text-lg text-[#181A18] dark:text-[#F2F3F1] mt-1">
                  Athletic & Marathon Badges
                </h4>
                <p className="text-xs text-[#777C78] dark:text-[#A7ADBF] mt-1.5 sm:mt-2 font-sans">
                  Participation timing bibs and finisher mementos from structured marathon and sports meets.
                </p>
              </div>
              <div className="mt-4 sm:mt-6 pt-2.5 sm:pt-3 border-t border-[#E5E7DF]/60 dark:border-[#1E2538]/60 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#777C78] dark:text-[#A7ADBF]">
                <span>Status: Physical Discipline</span>
                <Sparkles size={13} className="text-[#A8BE91] dark:text-[#69E4DB]" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
