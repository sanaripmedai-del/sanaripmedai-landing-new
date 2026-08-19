import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, ShieldCheck, Phone, MapPin, Mail, Clock } from 'lucide-react';

export const ArtDoctorShowcase = () => {
  return (
    <section id="doctors" className="py-24 md:py-36 bg-[#F8FAFC] text-slate-900 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0A6B97]">
            [ 05 / 05 ] ГАЛЕРЕЯ КЛИНИЦИСТОВ
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Врачебная Экспертиза & Контакты
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Photo Panel */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#0A6B97] to-slate-900 p-2">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=80"
                alt="Врачи клиники Sanarip Med AI"
                className="w-full h-[450px] sm:h-[500px] object-cover rounded-2xl"
              />

              {/* Floating Badges */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-white flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#0A6B97] text-white flex items-center justify-center font-bold text-xs">
                  <Stethoscope className="w-4 h-4 text-[#49DCB8]" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900">Опытные Врачи</div>
                  <div className="text-[10px] text-slate-500 font-semibold">Высшая категория</div>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 bg-[#0A6B97] text-white px-5 py-2.5 rounded-full text-xs font-extrabold shadow-xl">
                Лицензированный Медцентр
              </div>
            </div>
          </div>

          {/* Contacts Spec Panel */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              График Работы и Контакты
            </h3>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-4 shadow-sm">
                <Clock className="w-5 h-5 text-[#0A6B97]" />
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-900">Часы работы</div>
                  <div className="text-xs text-slate-500 font-medium">Пн - Пт: 8:00 - 19:00 | Сб: 10:00 - 15:00</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-4 shadow-sm">
                <MapPin className="w-5 h-5 text-[#0A6B97]" />
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-900">Адрес клиники</div>
                  <div className="text-xs text-slate-500 font-medium">г. Бишкек, ул. Медицинская, 15</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-4 shadow-sm">
                <Phone className="w-5 h-5 text-[#0A6B97]" />
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-900">Телефон регистратуры</div>
                  <div className="text-xs text-slate-500 font-medium">+996 (555) 00-11-22</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Watermark Background */}
        <div className="absolute -bottom-10 right-0 opacity-[0.03] pointer-events-none text-9xl font-extrabold text-slate-900">
          SanaripMed
        </div>

      </div>
    </section>
  );
};
