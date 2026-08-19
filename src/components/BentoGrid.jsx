import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Baby, HeartPulse, Activity, ScanLine, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

const SERVICES = [
  {
    number: '01',
    title: 'Семейная медицина & ИИ',
    desc: 'Комплексный непрерывный мониторинг здоровья всей семьи с персонализированными картами рекомендаций.',
    icon: Stethoscope,
    highlight: false,
    badge: 'Клинический Стандарт',
  },
  {
    number: '02',
    title: 'ИИ-Педиатрия & Профилактика',
    desc: 'Бережный контроль детского развития, график вакцинации и мгновенные онлайн-консультации.',
    icon: Baby,
    highlight: true, // Signature Soft Blue Highlight Card
    badge: 'Популярное Направление',
  },
  {
    number: '03',
    title: 'Женское здоровье',
    desc: 'Специализированная диагностика, ведение беременности и эндокринный ИИ-мониторинг.',
    icon: Activity,
    highlight: false,
    badge: 'Экспертная Экспертиза',
  },
  {
    number: '04',
    title: 'Кардиология & ЭКГ ИИ',
    desc: 'Экспресс-расшифровка ритма сердца, мониторинг артериального давления и выявление рисков.',
    icon: HeartPulse,
    highlight: false,
    badge: 'Мгновенная Экспертиза',
  },
  {
    number: '05',
    title: 'УЗИ & Лабораторный Анализ',
    desc: 'Автоматическая интеграция с лабораториями, перевод сложных показателей в понятные графики.',
    icon: ScanLine,
    highlight: false,
    badge: 'Автоматизация 100%',
  },
];

export const BentoGrid = () => {
  return (
    <section id="services" className="py-24 md:py-36 bg-[#F8FAFC] text-slate-900 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#0A6B97] border border-[#0A6B97]/20 rounded-full bg-[#0A6B97]/5 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#49DCB8]" />
              Медицинские направления [ 01 / 05 ]
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Наши Медицинские Услуги
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-md leading-relaxed font-medium">
            Полный спектр медицинских направлений от первичной ИИ-консультации до экспертной врачебной помощи.
          </p>
        </div>

        {/* 3D Stacked Deck Grid (Awwwards / Apple-Grade Stacking Card Animation) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {SERVICES.map((srv, idx) => {
            const IconComp = srv.icon;
            return (
              <motion.div
                key={srv.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
                className={`rounded-3xl p-8 transition-all duration-300 relative group flex flex-col justify-between ${
                  srv.highlight
                    ? 'bg-gradient-to-br from-[#0A6B97] via-[#085579] to-[#0A6B97] text-white shadow-2xl shadow-[#0A6B97]/25 border border-white/20'
                    : 'bg-white border border-slate-200/80 hover:border-[#0A6B97]/40 shadow-sm hover:shadow-2xl'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-4xl font-extrabold tracking-tighter ${
                      srv.highlight ? 'text-[#49DCB8]' : 'text-slate-300 group-hover:text-[#0A6B97]'
                    } transition-colors`}>
                      {srv.number}
                    </span>

                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      srv.highlight ? 'bg-white/15 text-[#49DCB8] border border-white/20' : 'bg-slate-100 text-[#0A6B97]'
                    }`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold mb-3 ${
                    srv.highlight ? 'bg-white/20 text-cyan-100' : 'bg-slate-100 text-[#0A6B97]'
                  }`}>
                    {srv.badge}
                  </span>

                  <h3 className={`text-xl font-extrabold tracking-tight mb-3 ${
                    srv.highlight ? 'text-white' : 'text-slate-900'
                  }`}>
                    {srv.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-8 ${
                    srv.highlight ? 'text-cyan-100 font-normal' : 'text-slate-500'
                  }`}>
                    {srv.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100/20">
                  <a
                    href="#ai-chat"
                    className={`text-xs font-bold flex items-center gap-1.5 transition-colors ${
                      srv.highlight ? 'text-[#49DCB8] hover:underline' : 'text-[#0A6B97] hover:text-[#085579]'
                    }`}
                  >
                    <span>Записаться на прием</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <span className={`text-xs font-semibold ${srv.highlight ? 'text-cyan-200' : 'text-slate-400'}`}>
                    24/7 Онлайн
                  </span>
                </div>
              </motion.div>
            );
          })}

          {/* Featured Clinical Team Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="rounded-3xl p-8 bg-slate-900 text-white relative overflow-hidden flex flex-col justify-between shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0A6B97]/90 via-slate-900/80 to-transparent opacity-95 -z-0" />
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&auto=format&fit=crop&q=80"
              alt="Клинические врачи"
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay -z-10"
            />

            <div className="relative z-10">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#49DCB8] text-slate-900 mb-4 inline-block shadow-md">
                Врачебная Экспертиза
              </span>
              <h3 className="text-2xl font-extrabold leading-tight text-white mb-3">
                Команда ведущих врачей и клиницистов
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed font-normal">
                Каждое заключение ИИ проходит верификацию сертифицированными врачами высшей категории.
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/20 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <CheckCircle2 className="w-4 h-4 text-[#49DCB8]" />
                Лицензированный медцентр
              </div>
              <span className="text-xs text-cyan-300 font-mono font-bold">100% Доверие</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
