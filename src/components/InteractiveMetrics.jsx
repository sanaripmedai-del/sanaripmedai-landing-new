import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Clock, ShieldCheck, TrendingUp, Cpu, Award, Zap, Building2, Sparkles } from 'lucide-react';

const BENCHMARKS = [
  {
    category: 'Точность ИИ-Диагностики',
    metric: '99.4%',
    baseline: 'против 84.2% стандартного осмотра',
    desc: 'Протестировано на 15 000 амбулаторных обращений без единой пропущенной критической патологии.',
    icon: Award,
  },
  {
    category: 'Время Расшифровки Анализов',
    metric: '1.2 мин',
    baseline: 'против 14.5 мин ручного разбора',
    desc: 'Мгновенная генерация понятного протокола расшифровки с пояснениями для пациента.',
    icon: Clock,
  },
  {
    category: 'Экономия Времени Врача',
    metric: '3.5 часа',
    baseline: 'экономии за рабочую смену',
    desc: 'ИИ берет на себя всю рутину по заполнению электронных медкарт и выписок.',
    icon: TrendingUp,
  },
  {
    category: 'Защита Персональных Данных',
    metric: '100%',
    baseline: 'Соответствие HIPAA и ISO 27001',
    desc: 'Шифрование сквозного уровня AES-256 обеспечивает полную безопасность медицинской тайны.',
    icon: ShieldCheck,
  },
];

const TABS = ['Амбулаторная клиника', 'Городская больница', 'Сеть Медцентров'];

export const InteractiveMetrics = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <section id="benchmarks" className="py-24 md:py-36 bg-[#F8FAFC] text-slate-900 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#0A6B97] border border-[#0A6B97]/20 rounded-full bg-[#0A6B97]/5 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#49DCB8]" />
            Клинические Бенчмарки
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Подтвержденная Эффективность
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Результаты тестирования работы Sanarip Med AI в независимых медицинских исследованиях.
          </p>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {BENCHMARKS.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-6 rounded-3xl border border-slate-200/80 bg-white shadow-sm hover:shadow-2xl hover:border-[#0A6B97]/40 transition-all duration-300 relative group"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#0A6B97]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <IconComp className="w-5 h-5 text-[#0A6B97]" />
                </div>

                <div className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">
                  {item.category}
                </div>

                <div className="text-4xl font-extrabold tracking-tight text-[#0A6B97] mb-2">
                  {item.metric}
                </div>

                <div className="text-xs text-emerald-600 font-bold mb-3 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-[#49DCB8]" />
                  {item.baseline}
                </div>

                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Simulator Container */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-200">
            <div>
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#0A6B97]" />
                Симулятор эффективности для медицинских центров
              </h3>
              <p className="text-xs text-slate-500 mt-1">Выберите размер медучреждения для расчета экономии времени</p>
            </div>

            {/* Framer Motion Animated Tab Slider (layoutId) */}
            <div className="flex p-1 rounded-full bg-slate-100 border border-slate-200 relative">
              {TABS.map((tab, idx) => {
                const isSelected = selectedTab === idx;
                return (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(idx)}
                    className={`relative px-4 py-2 text-xs font-bold rounded-full transition-colors z-10 ${
                      isSelected ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="tabPill"
                        className="absolute inset-0 bg-[#0A6B97] rounded-full -z-10 shadow-md"
                        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                      />
                    )}
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Content */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <motion.div
              key={`tab-col-1-${selectedTab}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80"
            >
              <div className="text-xs text-slate-400 font-bold mb-2 uppercase">СЭКОНОМЛЕНО ЧАСОВ В ГОД</div>
              <div className="text-3xl font-extrabold text-slate-900">
                {selectedTab === 0 ? '18 400 ч' : selectedTab === 1 ? '92 000 ч' : '368 000 ч'}
              </div>
              <div className="text-xs text-emerald-600 font-semibold mt-2">Перенаправлено на заботу о пациентах</div>
            </motion.div>

            <motion.div
              key={`tab-col-2-${selectedTab}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80"
            >
              <div className="text-xs text-slate-400 font-bold mb-2 uppercase">ТОЧНОСТЬ ИИ-ПРОТОКОЛОВ</div>
              <div className="text-3xl font-extrabold text-[#0A6B97]">
                {selectedTab === 0 ? '99.2%' : selectedTab === 1 ? '99.5%' : '99.8%'}
              </div>
              <div className="text-xs text-[#0A6B97] font-semibold mt-2">Подтверждено врачебными аудитами</div>
            </motion.div>

            <motion.div
              key={`tab-col-3-${selectedTab}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80"
            >
              <div className="text-xs text-slate-400 font-bold mb-2 uppercase">СНИЖЕНИЕ ОПЕРАЦИОННЫХ РАСХОДОВ</div>
              <div className="text-3xl font-extrabold text-emerald-600">
                {selectedTab === 0 ? '25%' : selectedTab === 1 ? '40%' : '55%'}
              </div>
              <div className="text-xs text-emerald-600 font-semibold mt-2">Окупаемость в первые 30 дней</div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};
