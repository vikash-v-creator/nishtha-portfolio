import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle, className = '' }) => {
  return (
    <button
      onClick={onToggle}
      type="button"
      className={`relative p-2.5 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#A8BE91] dark:focus:ring-[#69E4DB] group ${
        isDark
          ? 'bg-[#111526] border-[#1E2538] hover:border-[#69E4DB]/60 text-[#69E4DB]'
          : 'bg-[#FFFFFF] border-[#E5E7DF] hover:border-[#A8BE91]/80 text-[#181A18] shadow-sm'
      } ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="flex items-center justify-center text-[#69E4DB]"
            >
              <Moon size={18} strokeWidth={2.2} />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="flex items-center justify-center text-[#8DA674]"
            >
              <Sun size={18} strokeWidth={2.2} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </button>
  );
};
