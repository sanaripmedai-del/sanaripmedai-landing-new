import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const MedSyncBanner = () => {
  return (
    <section className="py-12 md:py-16 bg-[#F3F5F9] text-slate-900">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Two-Column Grid matching reference Image 100% */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Stat Card (ABOUT MEDSYNC / 134+) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 rounded-[2rem] bg-white border border-slate-200/80 p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#09638D]">
                ABOUT SANARIP MED
              </span>
              <div className="mt-8 text-6xl sm:text-7xl font-extrabold text-slate-900 tracking-tight">
                134+
              </div>
            </div>

            <p className="mt-8 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
              users trust our care experience it for yourself.
            </p>
          </motion.div>

          {/* Right Column: Statement Card ("We're here to give you and your family...") */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 rounded-[2rem] bg-white border border-slate-200/80 p-8 sm:p-12 lg:p-14 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-slate-400 leading-snug">
              We're here to give you and your family the care you need, with <span className="text-slate-900 font-bold">heart and trust</span> you can count on.
            </h2>

            <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between">
              <a
                href="#ai-chat"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#09638D] hover:bg-[#075174] text-white text-xs sm:text-sm font-bold transition-all shadow-lg shadow-[#09638D]/25 group"
              >
                <span>Get Started</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
              </a>

              <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Защита медицинских данных</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
