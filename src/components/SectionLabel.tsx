import React from 'react';

interface SectionLabelProps {
  number: string;
  label: string;
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ number, label, className = '' }) => {
  return (
    <div className={`flex items-center space-x-3 mb-4 ${className}`}>
      <span className="inline-flex items-center justify-center font-mono text-[11px] sm:text-[12px] font-bold text-[#A8BE91] dark:text-[#69E4DB] px-2 py-0.5 rounded border border-[#A8BE91]/40 dark:border-[#69E4DB]/40 bg-[#A8BE91]/10 dark:bg-[#69E4DB]/10 tracking-wider">
        {number}
      </span>
      <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#777C78] dark:text-[#A7ADBF] font-semibold">
        {label}
      </span>
      <div className="h-[1px] flex-grow max-w-[60px] bg-gradient-to-r from-[#A8BE91]/60 dark:from-[#69E4DB]/60 to-transparent"></div>
    </div>
  );
};
