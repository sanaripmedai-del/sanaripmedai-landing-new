import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Baby, HeartPulse, ScanLine, ArrowUpRight, Sparkles } from 'lucide-react';

export const ArtServicesDeck = () => {
  return (
    <section id="services" className="py-24 md:py-36 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0A6B97]">
              [ 04 / 05 ] УНИКАЛЬНЫЕ НАПРАВЛЕНИЯ
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Медицинские Направления Клиники
            </h2>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm max-w-md font-medium">
            Каждое отделение клиники функционирует на стыке высокой врачебной квалификации и цифровых ИИ-технологий.
          </p>
        </div>

        {/* 4 Distinct Art Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Minimalist White Editorial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between hover:shadow-xl transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-extrabold text-[#0A6B97]">01</span>
                <Stethoscope className="w-6 h-6 text-[#0A6B97]" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-3">Семейная Медицина</h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6">
                Персональный непрерывный контроль здоровья всех членов семьи.
              </p>
            </div>
            <a href="#ai-chat" className="text-xs font-extrabold text-[#0A6B97] flex items-center gap-1 hover:underline">
              <span>Подробнее</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Card 2: Signature Electric Blue Art Pill Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-3xl bg-[#0A6B97] text-white flex flex-col justify-between shadow-xl shadow-[#0A6B97]/25 hover:scale-[1.02] transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-extrabold text-[#49DCB8]">02</span>
                <Baby className="w-6 h-6 text-[#49DCB8]" />
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-white/20 text-cyan-100 mb-3 inline-block">
                Популярное
              </span>
              <h3 className="text-xl font-extrabold text-white mb-3">ИИ-Педиатрия</h3>
              <p className="text-xs text-cyan-100 font-normal leading-relaxed mb-6">
                Заботливый мониторинг развития детей и онлайн-связь с педиатром.
              </p>
            </div>
            <a href="#ai-chat" className="text-xs font-extrabold text-[#49DCB8] flex items-center gap-1 hover:underline">
              <span>Записаться</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Card 3: Outlined Glass Frame */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-3xl bg-white border-2 border-slate-200 flex flex-col justify-between hover:border-[#0A6B97] transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-extrabold text-slate-300">03</span>
                <HeartPulse className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-3">Кардиология ИИ</h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6">
                Расшифровка сердечного ритма, артериального давления и аритмий.
              </p>
            </div>
            <a href="#ai-chat" className="text-xs font-extrabold text-slate-900 flex items-center gap-1 hover:text-[#0A6B97]">
              <span>Консультация</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Card 4: Dark Slate Art Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-extrabold text-cyan-400">04</span>
                <ScanLine className="w-6 h-6 text-[#49DCB8]" />
              </div>
              <h3 className="text-xl font-extrabold text-white mb-3">Лаборатория & УЗИ</h3>
              <p className="text-xs text-slate-300 font-normal leading-relaxed mb-6">
                Перевод сложных анализов в наглядные графики и диаграммы.
              </p>
            </div>
            <a href="#ai-chat" className="text-xs font-extrabold text-[#49DCB8] flex items-center gap-1 hover:underline">
              <span>Загрузить анализы</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
