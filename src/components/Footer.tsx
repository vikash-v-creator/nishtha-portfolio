import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E5E7DF] dark:border-[#1E2538] bg-[#FFFFFF]/60 dark:bg-[#111526]/60 backdrop-blur-sm pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-[#E5E7DF] dark:border-[#1E2538]">
          {/* Brand & Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#181A18] dark:text-[#F2F3F1]">
                {profileData.brandName}
              </span>
              <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest rounded bg-[#A8BE91]/15 dark:bg-[#69E4DB]/15 text-[#6E8557] dark:text-[#69E4DB] border border-[#A8BE91]/30 dark:border-[#69E4DB]/30">
                The Art of Science
              </span>
            </div>
            <p className="font-serif italic text-base text-[#181A18]/80 dark:text-[#F2F3F1]/80 max-w-sm">
              "{profileData.tagline}"
            </p>
            <p className="text-xs text-[#777C78] dark:text-[#A7ADBF] max-w-md leading-relaxed">
              Biotechnology student at Lovely Professional University exploring heredity, genetic engineering, and expressive storytelling at the intersection of life sciences and imagination.
            </p>
          </div>

          {/* Quick Academic Profile Summary */}
          <div className="md:col-span-4 space-y-2 text-xs font-mono">
            <div className="text-[11px] uppercase tracking-widest text-[#777C78] dark:text-[#A7ADBF] font-semibold mb-3">
              Academic Registry
            </div>
            <div className="flex justify-between py-1 border-b border-[#E5E7DF]/60 dark:border-[#1E2538]/60">
              <span className="text-[#777C78] dark:text-[#A7ADBF]">Student:</span>
              <span className="font-sans font-medium text-[#181A18] dark:text-[#F2F3F1]">{profileData.name}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#E5E7DF]/60 dark:border-[#1E2538]/60">
              <span className="text-[#777C78] dark:text-[#A7ADBF]">Institution:</span>
              <span className="font-sans font-medium text-[#181A18] dark:text-[#F2F3F1]">{profileData.academicIdentity.university}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#E5E7DF]/60 dark:border-[#1E2538]/60">
              <span className="text-[#777C78] dark:text-[#A7ADBF]">Academic Stage:</span>
              <span className="font-sans font-medium text-[#6E8557] dark:text-[#69E4DB]">{profileData.academicIdentity.stage}</span>
            </div>
          </div>

          {/* Back to top & Actions */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between space-y-6">
            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full border border-[#E5E7DF] dark:border-[#1E2538] hover:border-[#A8BE91] dark:hover:border-[#69E4DB] bg-white dark:bg-[#111526] text-xs font-mono uppercase tracking-wider text-[#181A18] dark:text-[#F2F3F1] transition-all group shadow-sm"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform text-[#8DA674] dark:text-[#69E4DB]" />
            </button>
            <div className="text-[11px] text-[#777C78] dark:text-[#A7ADBF] font-mono">
              Designed with Editorial Precision
            </div>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#777C78] dark:text-[#A7ADBF] space-y-3 sm:space-y-0">
          <div>
            © {currentYear} Nishtha Walia. All personal rights reserved.
          </div>
          <div className="flex items-center space-x-1.5 font-mono text-[11px]">
            <span>Lovely Professional University</span>
            <span>•</span>
            <span className="text-[#8DA674] dark:text-[#69E4DB]">Biotechnology Department</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
