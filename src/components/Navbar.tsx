import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import { profileData } from '../data/profile';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  activeSection: string;
}

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'science', label: 'Science' },
  { id: 'skills', label: 'Skills' },
  { id: 'journey', label: 'Journey' },
  { id: 'beyond-science', label: 'Beyond Science' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleTheme, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-[#F7F7F2]/85 dark:bg-[#080B19]/85 backdrop-blur-md border-b border-[#E5E7DF] dark:border-[#1E2538] shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Monogram */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('hero');
            }}
            className="group flex items-center space-x-2.5 focus:outline-none focus:ring-2 focus:ring-[#A8BE91] dark:focus:ring-[#69E4DB] rounded-md p-1"
          >
            <div className="w-8 h-8 rounded-lg bg-[#181A18] dark:bg-[#F2F3F1] flex items-center justify-center transition-transform group-hover:scale-105 duration-200">
              <span className="font-serif font-bold text-xs text-[#F7F7F2] dark:text-[#080B19] tracking-tight">
                {profileData.monogram}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold tracking-tight text-sm text-[#181A18] dark:text-[#F2F3F1] group-hover:text-[#8DA674] dark:group-hover:text-[#69E4DB] transition-colors">
                {profileData.brandName}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#777C78] dark:text-[#A7ADBF]">
                Bio · Editorial
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  type="button"
                  className={`relative px-3 py-1.5 text-xs xl:text-[13px] font-medium tracking-wide transition-all rounded-md focus:outline-none focus:ring-2 focus:ring-[#A8BE91] dark:focus:ring-[#69E4DB] ${
                    isActive
                      ? 'text-[#181A18] dark:text-[#F2F3F1] font-semibold'
                      : 'text-[#777C78] hover:text-[#181A18] dark:text-[#A7ADBF] dark:hover:text-[#F2F3F1]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#A8BE91] dark:bg-[#69E4DB] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center space-x-3">
            {/* Quick Connect CTA */}
            <button
              onClick={() => scrollTo('contact')}
              type="button"
              className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wider uppercase border border-[#A8BE91]/50 dark:border-[#69E4DB]/40 bg-[#A8BE91]/15 hover:bg-[#A8BE91]/25 dark:bg-[#69E4DB]/15 dark:hover:bg-[#69E4DB]/25 text-[#181A18] dark:text-[#F2F3F1] transition-all duration-200"
            >
              <span>Connect</span>
              <ArrowUpRight size={13} className="text-[#6E8557] dark:text-[#69E4DB]" />
            </button>

            {/* Theme Toggle */}
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-2.5 rounded-xl lg:hidden text-[#181A18] dark:text-[#F2F3F1] hover:bg-[#EFEFEA] dark:hover:bg-[#111526] focus:outline-none focus:ring-2 focus:ring-[#A8BE91] dark:focus:ring-[#69E4DB] min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#F7F7F2]/95 dark:bg-[#080B19]/95 backdrop-blur-xl border-b border-[#E5E7DF] dark:border-[#1E2538] px-5 sm:px-6 py-5 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-2">
              <span className="font-mono text-[10px] tracking-widest text-[#777C78] dark:text-[#A7ADBF] uppercase pb-2 border-b border-[#E5E7DF] dark:border-[#1E2538]">
                Navigation Index
              </span>
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    type="button"
                    className={`flex items-center justify-between text-left py-2.5 px-3.5 rounded-xl text-sm font-medium transition-colors min-h-[44px] ${
                      isActive
                        ? 'bg-[#A8BE91]/20 dark:bg-[#69E4DB]/20 text-[#181A18] dark:text-[#F2F3F1] font-semibold'
                        : 'text-[#777C78] dark:text-[#A7ADBF] hover:text-[#181A18] dark:hover:text-[#F2F3F1]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#A8BE91] dark:bg-[#69E4DB]" />}
                  </button>
                );
              })}
              <div className="pt-3 border-t border-[#E5E7DF] dark:border-[#1E2538] flex justify-between items-center text-xs font-mono text-[#777C78] dark:text-[#A7ADBF]">
                <span>NISHTHA WALIA</span>
                <span>LPU BIOTECH</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
