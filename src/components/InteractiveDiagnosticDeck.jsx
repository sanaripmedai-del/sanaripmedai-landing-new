import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Activity, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export const InteractiveDiagnosticDeck = () => {
  const [scanPos, setScanPos] = useState(50); // percentage 0 - 100

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setScanPos(pct);
  };

  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#0A6B97] border border-[#0A6B97]/20 rounded-full bg-[#0A6B97]/5 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#49DCB8]" />
            Интерактивный ИИ-Сканнер Патологий
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Экспресс-Сканирование в Реальном Времени
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Проведите курсором по ЭКГ-графику для активации лазерной ИИ-диагностики.
          </p>
        </div>

        {/* Interactive Scanner Container */}
        <div
          onMouseMove={handleMouseMove}
          className="relative rounded-3xl border border-slate-200 bg-slate-900 p-6 sm:p-10 text-white shadow-2xl overflow-hidden cursor-crosshair group"
        >
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

          {/* Laser Scanner Beam Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-[#49DCB8] via-cyan-400 to-[#0A6B97] shadow-cyan-glow transition-all duration-75 pointer-events-none z-20"
            style={{ left: `${scanPos}%` }}
          >
            <div className="absolute top-4 -translate-x-1/2 left-1/2 bg-[#0A6B97] text-[#49DCB8] text-[10px] font-mono px-2 py-0.5 rounded-full border border-[#49DCB8] whitespace-nowrap font-bold shadow-lg">
              ИИ-Лазер: {Math.round(scanPos)}%
            </div>
          </div>

          {/* Scanner Header Bar */}
          <div className="relative z-10 flex items-center justify-between pb-6 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0A6B97] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-[#49DCB8]" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm sm:text-base">Клинический Сканер Ритма & Биомаркеров</h4>
                <span className="text-xs text-slate-400 font-mono">SANARIP_LASER_SCANNER_v3.4</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-emerald-400 font-mono font-bold">Скан активен</span>
            </div>
          </div>

          {/* SVG Waveform Visual */}
          <div className="relative z-10 h-44 sm:h-52 w-full bg-black/60 rounded-2xl border border-white/10 p-4 flex items-center justify-center overflow-hidden mb-6">
            <svg className="w-full h-full text-[#0A6B97]" viewBox="0 0 600 120" preserveAspectRatio="none">
              <path
                d="M 0 60 Q 40 60 60 20 T 80 100 T 100 60 T 180 60 T 200 10 T 220 110 T 240 60 T 350 60 T 370 30 T 390 90 T 410 60 T 600 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              <path
                d="M 0 60 Q 40 60 60 20 T 80 100 T 100 60 T 180 60 T 200 10 T 220 110 T 240 60 T 350 60 T 370 30 T 390 90 T 410 60 T 600 60"
                fill="none"
                stroke="#49DCB8"
                strokeWidth="3"
                strokeDasharray="180 400"
                className="animate-pulse"
              />
            </svg>

            {/* Dynamic Result Floating Box */}
            <div className="absolute top-4 left-6 bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-xl text-xs text-white border border-[#49DCB8]/40 flex items-center gap-2 shadow-lg">
              <Zap className="w-4 h-4 text-[#49DCB8]" />
              <span>Нормальный синусовый ритм • Риск аритмии: <strong>0.2%</strong></span>
            </div>
          </div>

          {/* Real-Time Dynamic Triage Metrics */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
              <span className="text-slate-400">Спектральный анализ:</span>
              <span className="text-[#49DCB8] font-bold">100% НОРМА</span>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
              <span className="text-slate-400">Индекс Ишемии:</span>
              <span className="text-emerald-400 font-bold">ОТСУТСТВУЕТ</span>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
              <span className="text-slate-400">Точность оценки:</span>
              <span className="text-cyan-300 font-bold">99.8% CONFIDENCE</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
