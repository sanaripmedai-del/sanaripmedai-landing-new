import React from 'react';
import { motion } from 'framer-motion';
import { Search, MessageSquare, Heart, ArrowRight } from 'lucide-react';

export const RealAdviceDeck = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#F3F5F9] text-slate-900">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Subtitle & Main Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#09638D]">
              YOUR GUIDE TO FEELING BETTER
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-light text-slate-900 tracking-tight leading-tight">
              Real Advice, From <br />
              <span className="font-extrabold">Real Health Experts</span>
            </h2>
          </div>

          <p className="text-slate-500 text-sm sm:text-base max-w-md leading-relaxed font-medium">
            Get practical tips and personalized care from professionals who are here to help at every step.
          </p>
        </div>

        {/* 3-Card Feature Grid matching exact CureLink layout 100% */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: White Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] bg-white border border-slate-200/80 p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-8">
                <Search className="w-5 h-5 text-slate-800" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Find The Right Doctor For You
              </h3>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium mb-8">
                Connect With Experienced, Compassionate Doctors Who Understand Your Needs And Are Ready To Guide You Toward Better Health.
              </p>
            </div>

            <a
              href="#ai-chat"
              className="text-xs font-bold text-slate-900 hover:text-[#09638D] flex items-center gap-2 transition-colors group"
            >
              <span>Discover More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Card 2: Signature Card (#09638D) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[2rem] bg-[#09638D] text-white p-8 sm:p-10 flex flex-col justify-between shadow-2xl shadow-[#09638D]/25 hover:shadow-[#09638D]/40 transition-all duration-300"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-8 backdrop-blur-md">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                Expert Insights You Can Trust
              </h3>

              <p className="text-xs sm:text-sm text-cyan-100 leading-relaxed font-normal mb-8">
                Access Practical Advice And The Latest Medical Knowledge From Trusted Experts So You Can Make Confident Decisions About Your Health.
              </p>
            </div>

            <a
              href="#ai-chat"
              className="text-xs font-bold text-white hover:text-cyan-200 flex items-center gap-2 transition-colors group"
            >
              <span>Discover More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Card 3: White Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-[2rem] bg-white border border-slate-200/80 p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-8">
                <Heart className="w-5 h-5 text-slate-800" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Personalized Tips For Better Living
              </h3>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium mb-8">
                Get Customized Health Tips, Lifestyle Advice, And Preventative Care Suggestions To Help You Feel Your Best Every Day.
              </p>
            </div>

            <a
              href="#ai-chat"
              className="text-xs font-bold text-slate-900 hover:text-[#09638D] flex items-center gap-2 transition-colors group"
            >
              <span>Discover More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
