import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SanaripLogo } from './SanaripLogo';
import { Phone, MessageSquare, ArrowRight, Menu, X, ShieldCheck } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-md shadow-slate-900/5'
          : 'bg-transparent py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Sanarip Med AI Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <SanaripLogo className="h-9 sm:h-10" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/80 backdrop-blur-md">
            {[
              { name: 'ИИ-Консультант', href: '#ai-chat' },
              { name: 'Услуги', href: '#services' },
              { name: 'О нас', href: '#about' },
              { name: 'Бенчмарки', href: '#benchmarks' },
              { name: 'Отзывы', href: '#testimonials' },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-1.5 text-xs font-semibold text-slate-600 hover:text-[#0A6B97] hover:bg-white rounded-full transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action Call & Chat Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+996555000000"
              className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#0A6B97] transition-colors"
            >
              <div className="w-7 h-7 rounded-full bg-[#0A6B97]/10 flex items-center justify-center">
                <Phone className="w-3.5 h-3.5 text-[#0A6B97]" />
              </div>
              <span className="hidden lg:inline">+996 (555) 00-11-22</span>
            </a>

            <a
              href="#ai-chat"
              className="px-5 py-2.5 rounded-full bg-[#0A6B97] hover:bg-[#085579] text-white text-xs font-bold transition-all duration-300 shadow-md shadow-[#0A6B97]/20 flex items-center gap-2 group"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#49DCB8]" />
              Начать ИИ-Чат
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-[#0A6B97]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden mt-3 pt-4 pb-6 border-t border-slate-200 flex flex-col gap-3 bg-white px-4 rounded-2xl shadow-xl"
          >
            {[
              { name: 'ИИ-Консультант', href: '#ai-chat' },
              { name: 'Услуги', href: '#services' },
              { name: 'О нас', href: '#about' },
              { name: 'Бенчмарки', href: '#benchmarks' },
              { name: 'Отзывы', href: '#testimonials' },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-slate-700 hover:text-[#0A6B97] py-1.5"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="#ai-chat"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-full bg-[#0A6B97] text-white font-bold text-xs"
              >
                Начать ИИ-Чат
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};
