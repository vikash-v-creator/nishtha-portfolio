import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { profileData } from '../data/profile';
import { Mail, Linkedin, Copy, Check, ArrowUpRight, MessageSquare, Sparkles, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [inquirySubject, setInquirySubject] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleComposeEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(inquirySubject || 'Hello Nishtha - Academic Inquiry');
    const body = encodeURIComponent(inquiryMessage || 'Dear Nishtha,\n\nI came across your biotechnology portfolio and would love to connect...');
    window.location.href = `mailto:${profileData.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden border-t border-[#E5E7DF] dark:border-[#1E2538] bg-transparent">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#A8BE91]/15 dark:bg-[#69E4DB]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <SectionLabel number="07" label="LET'S CONNECT" />
          <h2 className="editorial-title fluid-section-title font-bold text-[#181A18] dark:text-[#F2F3F1] mt-2">
            Every great journey begins <br />
            <span className="font-serif italic font-normal text-[#8DA674] dark:text-[#69E4DB]">
              with a conversation.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#181A18]/80 dark:text-[#F2F3F1]/80 font-sans leading-relaxed">
            "Always curious, always learning and always open to meaningful opportunities."
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column: Direct Links & Profile Verification */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/80 dark:bg-[#111526]/80 backdrop-blur-md border border-[#E5E7DF] dark:border-[#1E2538] shadow-lg space-y-6">
              
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#6E8557] dark:text-[#69E4DB] font-bold">
                  DIRECT CONTACT CHANNELS
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#181A18] dark:text-[#F2F3F1] mt-1">
                  Reach Out Directly
                </h3>
                <p className="text-xs text-[#777C78] dark:text-[#A7ADBF] mt-1 font-sans">
                  Whether for academic symposiums, student biotechnology collaborations, or creative dialogues.
                </p>
              </div>

              {/* Email Block */}
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#F7F7F2] dark:bg-[#192038] border border-[#E5E7DF] dark:border-[#1E2538] space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#777C78] dark:text-[#A7ADBF]">
                  <span className="flex items-center space-x-1.5">
                    <Mail size={14} className="text-[#6E8557] dark:text-[#69E4DB]" />
                    <span>EMAIL ADDRESS</span>
                  </span>
                  <button
                    onClick={copyEmail}
                    type="button"
                    className="flex items-center space-x-1 text-[11px] text-[#6E8557] dark:text-[#69E4DB] hover:underline focus:outline-none p-1"
                  >
                    {copied ? (
                      <>
                        <Check size={12} />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="block font-sans font-semibold text-base sm:text-lg text-[#181A18] dark:text-[#F2F3F1] hover:text-[#8DA674] dark:hover:text-[#69E4DB] transition-colors break-all"
                >
                  {profileData.contact.email}
                </a>

                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="w-full py-3 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider bg-[#181A18] hover:bg-[#333] text-white dark:bg-[#F2F3F1] dark:hover:bg-white dark:text-[#080B19] transition-all flex items-center justify-center space-x-2 min-h-[44px]"
                >
                  <span>SEND AN EMAIL</span>
                  <Mail size={14} />
                </a>
              </div>

              {/* LinkedIn Block */}
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#F7F7F2] dark:bg-[#192038] border border-[#E5E7DF] dark:border-[#1E2538] space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#777C78] dark:text-[#A7ADBF]">
                  <span className="flex items-center space-x-1.5">
                    <Linkedin size={14} className="text-[#6E8557] dark:text-[#69E4DB]" />
                    <span>PROFESSIONAL NETWORK</span>
                  </span>
                  <span className="text-[10px] text-[#6E8557] dark:text-[#69E4DB]">Verified Profile</span>
                </div>

                <div className="font-sans font-semibold text-sm sm:text-base text-[#181A18] dark:text-[#F2F3F1] break-all">
                  linkedin.com/in/nishtha-walia-527b35372
                </div>

                <a
                  href={profileData.contact.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider border border-[#A8BE91] dark:border-[#69E4DB] text-[#181A18] dark:text-[#F2F3F1] hover:bg-[#A8BE91]/15 dark:hover:bg-[#69E4DB]/15 transition-all flex items-center justify-center space-x-2 group min-h-[44px]"
                >
                  <span>CONNECT ON LINKEDIN</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Quick Inquiry Composer */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white/80 dark:bg-[#111526]/80 backdrop-blur-md border border-[#E5E7DF] dark:border-[#1E2538] shadow-lg space-y-6">
              <div>
                <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#6E8557] dark:text-[#69E4DB] font-semibold mb-1">
                  <MessageSquare size={14} />
                  <span>PRE-COMPOSE AN INQUIRY</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#181A18] dark:text-[#F2F3F1]">
                  Draft a Direct Note
                </h3>
                <p className="text-xs sm:text-sm text-[#777C78] dark:text-[#A7ADBF] font-sans mt-1">
                  Fill in your thoughts and click below to open your preferred mail client with everything populated.
                </p>
              </div>

              <form onSubmit={handleComposeEmail} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#777C78] dark:text-[#A7ADBF] mb-1.5">
                    Subject / Discussion Area
                  </label>
                  <input
                    type="text"
                    value={inquirySubject}
                    onChange={(e) => setInquirySubject(e.target.value)}
                    placeholder="e.g. Biotechnology Symposium / Academic Collaboration / Poetry"
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E7DF] dark:border-[#1E2538] bg-[#F7F7F2]/60 dark:bg-[#192038]/60 text-[#181A18] dark:text-[#F2F3F1] placeholder-[#777C78]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#A8BE91] dark:focus:ring-[#69E4DB] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#777C78] dark:text-[#A7ADBF] mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    placeholder="Write a brief note or question for Nishtha..."
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E7DF] dark:border-[#1E2538] bg-[#F7F7F2]/60 dark:bg-[#192038]/60 text-[#181A18] dark:text-[#F2F3F1] placeholder-[#777C78]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#A8BE91] dark:focus:ring-[#69E4DB] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider bg-[#A8BE91] hover:bg-[#8DA674] dark:bg-[#69E4DB] dark:hover:bg-[#52D4CB] text-[#181A18] dark:text-[#080B19] transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>LAUNCH IN MAIL CLIENT</span>
                  <Send size={14} />
                </button>
              </form>

              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#777C78] dark:text-[#A7ADBF]">
                <span>Recipient: {profileData.contact.email}</span>
                <span className="flex items-center space-x-1 text-[#6E8557] dark:text-[#69E4DB]">
                  <Sparkles size={11} />
                  <span>Direct Inbox Dispatch</span>
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
