import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const IntroLoader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F7F7F2] dark:bg-[#080B19] text-[#181A18] dark:text-[#F2F3F1] pointer-events-none"
        >
          <div className="relative flex flex-col items-center">
            {/* Monogram / Brand with subtle molecular ring */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex items-center space-x-3 mb-4"
            >
              <div className="w-10 h-10 rounded-xl bg-[#181A18] dark:bg-[#F2F3F1] flex items-center justify-center text-[#F7F7F2] dark:text-[#080B19] font-serif font-bold text-base shadow-lg">
                NW
              </div>
              <span className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
                NISH THA.
              </span>
            </motion.div>

            {/* Tagline snippet */}
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#777C78] dark:text-[#A7ADBF]"
            >
              The Art of Science
            </motion.p>

            {/* Subtle molecular loader bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 140 }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
              className="h-[2px] mt-6 bg-gradient-to-r from-[#A8BE91] via-[#D5F27A] to-[#63B7AA] dark:from-[#69E4DB] dark:via-[#C9F66D] dark:to-[#4F9DCA] rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
