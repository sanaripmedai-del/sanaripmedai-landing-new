import React from 'react';
import { Hospital, HeartPulse, Microscope, Cross, Dna, Building2, Stethoscope, ShieldCheck } from 'lucide-react';

const LOGOS = [
  { name: 'Stanford Medicine', icon: Hospital },
  { name: 'Mayo AI Health', icon: HeartPulse },
  { name: 'Harvard BioTech', icon: Microscope },
  { name: 'Sanarip Health Labs', icon: Cross },
  { name: 'Apex Bio-Clinical', icon: Dna },
  { name: 'City Central Hospital', icon: Building2 },
  { name: 'Global Telehealth', icon: Stethoscope },
  { name: 'MedVault Cyber Security', icon: ShieldCheck },
];

export const LogoCloud = () => {
  return (
    <div className="w-full bg-white py-10 md:py-14 border-y border-slate-200/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
          Интегрировано в более 50+ медицинских центров и клиник
        </p>
      </div>

      {/* Fade Gradients at Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      {/* Infinite Marquee Track */}
      <div className="flex w-max animate-marquee space-x-12 md:space-x-16 hover:[animation-play-state:paused] cursor-pointer">
        {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => {
          const IconComponent = logo.icon;
          return (
            <div
              key={`${logo.name}-${index}`}
              className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300 group"
            >
              <div className="p-2 rounded-xl bg-slate-100 border border-slate-200 group-hover:border-[#0A6B97]/40 group-hover:bg-[#0A6B97]/10 transition-colors">
                <IconComponent className="w-5 h-5 text-slate-600 group-hover:text-[#0A6B97] transition-colors" />
              </div>
              <span className="text-sm font-bold tracking-tight text-slate-700 group-hover:text-[#0A6B97] transition-colors whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
