import React from 'react';
import { motion } from 'framer-motion';
import { SanaripLogo } from './SanaripLogo';
import { ArrowRight, Sparkles, Phone, ShieldCheck, Activity, Award } from 'lucide-react';

export const ArtHero = () => {
  return (
    <section className="relative min-h-[90vh] bg-[#F8FAFC] text-slate-900 overflow-hidden pt-6 pb-20 flex flex-col justify-between">
      
      {/* Background Glowing 3D Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#0A6B97]/15 via-[#49DCB8]/20 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Top Header */}
      <header className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 w-full flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <SanaripLogo className="h-10 sm:h-11" />
        </a>

        {/* Minimal Nav Pills */}
        <nav className="hidden md:flex items-center gap-2 bg-white/80 p-1.5 rounded-full border border-slate-200 backdrop-blur-md shadow-sm">
          {['ИИ-Терминал', 'Услуги', 'О нас', 'Галерея Врачей'].map((item, idx) => (
            <a
              key={item}
              href={`#${['ai-chat', 'services', 'about', 'doctors'][idx]}`}
              className="px-5 py-2 text-xs font-bold text-slate-700 hover:text-[#0A6B97] hover:bg-slate-100 rounded-full transition-all"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+996555000000"
            className="hidden sm:flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-700 hover:text-[#0A6B97]"
          >
            <Phone className="w-4 h-4 text-[#0A6B97]" />
            <span>+996 (555) 00-11-22</span>
          </a>

          <a
            href="#ai-chat"
            className="px-6 py-2.5 rounded-full bg-[#0A6B97] hover:bg-[#085579] text-white text-xs font-extrabold transition-all shadow-md shadow-[#0A6B97]/20 flex items-center gap-2"
          >
            <span>Начать ИИ-Чат</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#49DCB8]" />
          </a>
        </div>
      </header>

      {/* Main Art Editorial Title Area */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 w-full my-auto pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          {/* Frosted Glass Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-slate-200 shadow-sm text-xs font-extrabold text-slate-700 mb-8 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#49DCB8] animate-ping" />
            <span className="text-[#0A6B97]">Арт-Минимализм</span>
            <span className="text-slate-300">•</span>
            <span>Клинический ИИ-Ассистент 24/7</span>
          </div>

          {/* Editorial Headline */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-slate-900 leading-[0.95]">
            Искусство <br />
            <span className="text-gradient-brand">Точной Диагностики</span>
          </h1>

          <p className="mt-8 text-base sm:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl">
            Sanarip Med AI объединяет врачебный опыт высшей категории и мгновенный глубокий ИИ-анализ в единый элегантный цифровой интерфейс.
          </p>

          {/* Floating Levitating Badges */}
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <div className="px-5 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
              <Award className="w-5 h-5 text-[#0A6B97]" />
              <div>
                <div className="text-sm font-extrabold text-slate-900">10+ лет</div>
                <div className="text-[10px] text-slate-500 font-semibold">опыта цифровой медицины</div>
              </div>
            </div>

            <div className="px-5 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
              <Activity className="w-5 h-5 text-[#49DCB8]" />
              <div>
                <div className="text-sm font-extrabold text-slate-900">99.4%</div>
                <div className="text-[10px] text-slate-500 font-semibold">точность ИИ-протоколов</div>
              </div>
            </div>

            <a
              href="#ai-chat"
              className="px-8 py-3.5 rounded-full bg-[#0A6B97] text-white font-extrabold text-xs sm:text-sm hover:bg-[#085579] transition-all shadow-xl shadow-[#0A6B97]/20 flex items-center gap-2 group"
            >
              <span>Запустить Консультант</span>
              <ArrowRight className="w-4 h-4 text-[#49DCB8] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Minimal Strip */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 w-full pt-8 border-t border-slate-200/80 flex justify-between items-center text-xs text-slate-400 font-mono">
        <span>[ 01 / 05 ] SANARIP_MED_CORE</span>
        <span className="hidden sm:inline">HIPAA & ISO 27001 COMPLIANT</span>
      </div>

    </section>
  );
};
