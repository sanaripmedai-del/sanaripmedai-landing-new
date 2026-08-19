import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const REVIEWS = [
  {
    quote:
      "Sanarip Med AI кардинально изменил наш подход к первичному приему больных. Точность предварительного анализа симптомов позволяет врачу сразу сосредоточиться на ключевой проблеме.",
    author: "Д-р Елена Ростова",
    title: "Зав. отделением терапевтической службы",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "Внедрение ИИ-консультанта прямо на сайте позволило снизить нагрузку на регистратуру на 60%. Пациенты получают мгновенную квалифицированную информацию 24/7.",
    author: "Маркус Ванс",
    title: "Директор по технологиям медцентра",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "Расшифровка лабораторных анализов и снимков с помощью Sanarip Med AI экономит врачам минимум 3 часа в день. Это лучший цифровой помощник клинициста.",
    author: "Д-р Сара Чен",
    title: "Врач-невролог высшей категории",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1594824813566-78a9c33e8b0a?w=150&auto=format&fit=crop&q=80",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white text-slate-900 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0A6B97] border border-[#0A6B97]/20 rounded-full bg-[#0A6B97]/5">
            Отзывы Специалистов
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Оценка Ведущих Клиницистов
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Узнайте, как врачи и руководители клиник оценивают интеграцию Sanarip Med AI.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev, index) => (
            <motion.div
              key={rev.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-8 rounded-3xl border border-slate-200/80 bg-[#F8FAFC] hover:bg-white shadow-sm hover:shadow-xl hover:border-[#0A6B97]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300" />
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic mb-8">
                  "{rev.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="w-11 h-11 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    {rev.author}
                    <CheckCircle2 className="w-4 h-4 text-[#0A6B97]" />
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">{rev.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
