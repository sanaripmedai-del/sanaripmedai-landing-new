import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export const ArtStatement = () => {
  return (
    <section className="py-24 md:py-36 bg-[#F8FAFC] text-slate-900 border-t border-slate-200">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Asymmetric Editorial Manifesto Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0A6B97]">
              [ 03 / 05 ] МАНИФЕСТ КАЧЕСТВА
            </span>

            <div className="text-6xl sm:text-7xl font-extrabold tracking-tighter text-slate-900">
              134 000+
            </div>

            <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed">
              пациентов выбрали инновационную систему Sanarip Med AI для регулярной диагностики и заботы о своем здоровье.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 rounded-3xl bg-white border border-slate-200 p-8 sm:p-14 shadow-xl relative overflow-hidden"
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-slate-400 leading-snug">
              Мы создаем <span className="text-slate-900 font-extrabold">будущее цифровой медицины</span>, где врачебная забота и искусственный интеллект работают в абсолютной гармонии.
            </h2>

            <div className="mt-10 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <a
                href="#ai-chat"
                className="px-8 py-4 rounded-full bg-[#0A6B97] text-white font-extrabold text-xs sm:text-sm hover:bg-[#085579] transition-all shadow-lg flex items-center gap-2 group"
              >
                <span>Пройти Экспресс-Диагностику</span>
                <ArrowRight className="w-4 h-4 text-[#49DCB8] group-hover:translate-x-1 transition-transform" />
              </a>

              <span className="text-xs text-slate-500 font-semibold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Лицензированные протоколы
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
