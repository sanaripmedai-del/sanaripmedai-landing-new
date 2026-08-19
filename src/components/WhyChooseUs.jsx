import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Heart, Users, Sparkles, CheckCircle2, Stethoscope, Cpu, Star } from 'lucide-react';

const STATS = [
  { val: '10+', label: 'Лет опыта в медицине', desc: 'Успешная клиническая практика и инновации' },
  { val: '15+', label: 'Направлений медицины', desc: 'От кардиологии до неврологии и эндокринологии' },
  { val: '95%', label: 'Удовлетворенность пациентов', desc: 'Высокая оценка качества обслуживания' },
  { val: '98%', label: 'Точность ИИ-диагностики', desc: 'Подтверждено двойными слепыми аудитами' },
];

export const WhyChooseUs = () => {
  return (
    <section id="about" className="py-24 md:py-36 bg-white text-slate-900 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid (Matching bottom layout of Image 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Panel: Doctors Visual Container with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#0A6B97] to-[#085579] p-2 group">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=80"
                alt="Врачи клиники Sanarip Med AI"
                className="w-full h-[450px] sm:h-[520px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Badge 1 (Top Left) */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-6 left-6 glass-panel-light p-3.5 rounded-2xl shadow-xl border border-white/80 flex items-center gap-3 backdrop-blur-xl"
              >
                <div className="w-9 h-9 rounded-xl bg-[#0A6B97] text-white flex items-center justify-center font-bold text-xs shadow-md">
                  <Stethoscope className="w-4 h-4 text-[#49DCB8]" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900">Опытные Врачи</div>
                  <div className="text-[10px] text-slate-500 font-semibold">Высшая категория</div>
                </div>
              </motion.div>

              {/* Floating Badge 2 (Bottom Right) */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-6 right-6 glass-panel-light p-4 rounded-2xl shadow-xl border border-white/80 flex items-center gap-3 backdrop-blur-xl"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900">Сертифицированная Клиника</div>
                  <div className="text-[10px] text-slate-500 font-semibold">Лицензия Минздрава</div>
                </div>
              </motion.div>

              {/* Floating Badge 3 (Bottom Left) */}
              <div className="absolute bottom-6 left-6 bg-[#0A6B97] text-white px-4 py-2.5 rounded-full text-xs font-extrabold shadow-xl flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#49DCB8]" />
                Современное ИИ-Оборудование
              </div>
            </div>
          </motion.div>

          {/* Right Panel: Title & Key Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <span className="px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#0A6B97] border border-[#0A6B97]/20 rounded-full bg-[#0A6B97]/5 inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#49DCB8]" />
                Преимущества клиники
              </span>
              <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Почему Пациенты Выбирают <span className="text-gradient-brand">Sanarip Med AI</span>
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Мы объединяем лучшие медицинские кадры с передовыми технологиями искусственного интеллекта, чтобы сделать качественное лечение доступным и понятным каждому.
              </p>
            </div>

            {/* 2x2 Key Statistics Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-200">
              {STATS.map((stat, i) => (
                <div key={i} className="space-y-1 p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#0A6B97] tracking-tight">
                    {stat.val}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-500 font-normal leading-normal">
                    {stat.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Points */}
            <div className="space-y-3 pt-4 border-t border-slate-200">
              {[
                'Индивидуальный подход к каждому пациенту без очередей',
                'Безопасное хранение медицинских карт со 100% конфиденциальностью',
                'Прямой онлайн-доступ к вашей медкарте 24 часа в сутки',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-[#49DCB8]/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0A6B97]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
