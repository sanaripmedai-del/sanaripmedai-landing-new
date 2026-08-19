import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scan, ShieldAlert, Send, MapPin, Eye, Activity, ChevronRight, ChevronLeft } from 'lucide-react';
import { appleScrollVariant, containerVariant } from '../utils/animations';
import { useLanguage } from '../contexts/LanguageContext';

const CASES_I18N = {
  ru: [
    {
      id: 1,
      title: "Кейс 1: Укус животного",
      subtitle: "Фотография отправлена школьником",
      image: "/images/cases/case_wound_bite.jpg",
      type: "Глубокий укус (собака). Нарушение кожных покровов с умеренным риском инфицирования.",
      severity: "8 / 10 (Высокая)",
      recommendation: "Срочно в травмпункт. Наложите стерильную повязку.",
      action: "Режим сопровождения 103",
      threat: true,
      status: "🚨 Угроза"
    },
    {
      id: 2,
      title: "Кейс 2: Термический ожог",
      subtitle: "Фотография кисти руки",
      image: "/images/cases/case_burn_skin.jpg",
      type: "Термический ожог 2-й степени. Видны волдыри и покраснение. Площадь поражения менее 1%.",
      severity: "5 / 10 (Средняя)",
      recommendation: "Охладите проточной водой. Не вскрывайте волдыри.",
      action: "Вызов врача на дом",
      threat: true,
      status: "⚠️ Внимание"
    },
    {
      id: 3,
      title: "Кейс 3: Аллергическая сыпь",
      subtitle: "Фотография контактной сыпи",
      image: "/images/cases/case_allergy_rash.jpg",
      type: "Локализованная сыпь, характерная для дерматита. Признаков системной реакции нет.",
      severity: "3 / 10 (Низкая)",
      recommendation: "Примите антигистаминное средство. Наблюдайте за реакцией.",
      action: "Плановая запись",
      threat: false,
      status: "✅ Стабильно"
    }
  ],
  en: [
    {
      id: 1,
      title: "Case 1: Animal Bite",
      subtitle: "Photo uploaded by patient",
      image: "/images/cases/case_wound_bite.jpg",
      type: "Deep puncture bite (dog). Skin integrity breach with moderate infection risk.",
      severity: "8 / 10 (High)",
      recommendation: "Urgent ER trauma visit required. Apply sterile bandage.",
      action: "103 Priority Escort",
      threat: true,
      status: "🚨 Urgent"
    },
    {
      id: 2,
      title: "Case 2: Thermal Burn",
      subtitle: "Photo of hand skin area",
      image: "/images/cases/case_burn_skin.jpg",
      type: "2nd degree thermal burn. Blisters and erythema visible. Surface area <1%.",
      severity: "5 / 10 (Moderate)",
      recommendation: "Cool under running water. Do not puncture blisters.",
      action: "Doctor Home Visit",
      threat: true,
      status: "⚠️ Warning"
    },
    {
      id: 3,
      title: "Case 3: Allergic Rash",
      subtitle: "Photo of contact skin rash",
      image: "/images/cases/case_allergy_rash.jpg",
      type: "Localized contact dermatitis rash. No systemic anaphylaxis signs.",
      severity: "3 / 10 (Low)",
      recommendation: "Take antihistamine medication. Monitor progression.",
      action: "Outpatient Clinic Booking",
      threat: false,
      status: "✅ Stable"
    }
  ],
  kg: [
    {
      id: 1,
      title: "1-Кейс: Жаныбардын тиштеши",
      subtitle: "Окуучу жөнөткөн сүрөт",
      image: "/images/cases/case_wound_bite.jpg",
      type: "Терең тиштеген жараат (ит). Инфекция коркунучу бар теринин жабыркашы.",
      severity: "8 / 10 (Жогорку)",
      recommendation: "Тез арада травмпунктка кайрылыңыз. Таза таңгыч коюңуз.",
      action: "103 Тез жардам коштоосу",
      threat: true,
      status: "🚨 Коркунуч"
    },
    {
      id: 2,
      title: "2-Кейс: Термикалык күйүк",
      subtitle: "Колдун терисинин сүрөтү",
      image: "/images/cases/case_burn_skin.jpg",
      type: "2-даражадагы термикалык күйүк. Ыйлаакчалар жана кызаруу көрүнүп турат.",
      severity: "5 / 10 (Орто)",
      recommendation: "Агын муздак сууга кармаңыз. Ыйлаакчаларды жарбаңыз.",
      action: "Дарыгерди үйгө чакыруу",
      threat: true,
      status: "⚠️ Эскертүү"
    },
    {
      id: 3,
      title: "3-Кейс: Аллергиялык исиркек",
      subtitle: "Теридеги исиркектин сүрөтү",
      image: "/images/cases/case_allergy_rash.jpg",
      type: "Дерматитке мүнөздүү жергиликтүү исиркек. Оор системалык белгилер жок.",
      severity: "3 / 10 (Төмөн)",
      recommendation: "Антигистамин каражатын кабыл алыңыз. Абалды байкаңыз.",
      action: "Клиникага пландуу жазылуу",
      threat: false,
      status: "✅ Туруктуу"
    }
  ]
};

export const AIVisionModule = () => {
  const { language, t } = useLanguage();
  const currentLang = (language || 'RU').toLowerCase();
  const CASES = CASES_I18N[currentLang] || CASES_I18N.ru;
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  const startScan = () => {
    setIsScanning(true);
    setScanComplete(false);
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 2000);
  };

  const nextCase = () => {
    setScanComplete(false);
    setActiveIndex((prev) => (prev + 1) % CASES.length);
  };
  
  const prevCase = () => {
    setScanComplete(false);
    setActiveIndex((prev) => (prev - 1 + CASES.length) % CASES.length);
  };

  return (
    <section id="ai-vision" className="py-32 md:py-48 bg-[#F3F5F9] text-slate-900 overflow-hidden">
      <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-12 xl:px-20">
        
        {/* Header */}
        <motion.div 
          className="flex flex-col xl:flex-row xl:items-end justify-between mb-24 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={containerVariant}
        >
          <div>
            <motion.h2 variants={appleScrollVariant} className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.18] sm:leading-[1.15]">
              {t('aiVision.title1')} <br />
              <span className="text-gradient-brand">{t('aiVision.title2')}</span>
            </motion.h2>
          </div>

          <motion.p variants={appleScrollVariant} className="text-slate-500 text-lg md:text-xl max-w-lg leading-relaxed font-medium">
            {t('aiVision.description')}
          </motion.p>
        </motion.div>

        {/* Unified Dashboard Panel */}
        <motion.div 
          className="relative w-full bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row gap-16 lg:gap-20 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={containerVariant}
        >
          {/* Left: Overlapping Image Gallery & Controls */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div className="flex-1 flex flex-col items-center justify-center pt-8">
              
              {/* Horizontal Overlapping Cards */}
              <div className="flex items-center justify-center w-full px-4">
                {CASES.map((caseItem, index) => {
                  const isActive = index === activeIndex;
                  const isHovered = index === hoveredIndex;
                  
                  // Сhaotic offsets for a messy photo stack look
                  const chaoticRotations = [-5, 3, -4];
                  const chaoticYOffsets = [8, -4, 12];
                  
                  const defaultRotate = chaoticRotations[index % chaoticRotations.length];
                  const defaultY = chaoticYOffsets[index % chaoticYOffsets.length];
                  
                  return (
                    <motion.div
                      key={caseItem.id}
                      onClick={() => {
                        setActiveIndex(index);
                        setScanComplete(false);
                      }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      style={{ zIndex: isHovered ? 50 : isActive ? 40 : index }}
                      animate={{
                        y: isHovered ? -20 : isActive ? -10 : defaultY,
                        rotate: isHovered ? 0 : isActive ? 0 : defaultRotate,
                        scale: isHovered ? 1.05 : isActive ? 1.02 : 1,
                      }}
                      className={`relative w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] xl:w-[280px] xl:h-[280px] rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer border-[8px] border-white shrink-0 bg-slate-100 transition-all duration-300 ${index !== 0 ? '-ml-16 sm:-ml-24 xl:-ml-32' : ''}`}
                    >
                      <img src={caseItem.image} alt={caseItem.title} className="w-full h-full object-cover" />
                      
                      {/* Dark overlay for inactive cards */}
                      <div className={`absolute inset-0 transition-opacity duration-300 ${isActive ? 'bg-slate-900/10' : isHovered ? 'bg-transparent' : 'bg-slate-900/50'}`} />
                      
                      {/* Central crosshair for active card */}
                      {isActive && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 border-2 border-dashed border-white/50 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/20">
                            <Scan className={`w-6 h-6 sm:w-8 sm:h-8 text-white ${isScanning ? 'animate-spin text-[#61DED3]' : ''}`} />
                          </div>
                        </div>
                      )}
                      
                      {/* Scanning laser line & holographic beam (full height traversal) */}
                      {isActive && isScanning && (
                        <motion.div
                          initial={{ top: '0%' }}
                          animate={{ top: ['0%', '92%', '0%'] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                          className="absolute inset-x-0 z-30 pointer-events-none"
                        >
                          {/* High-intensity neon cyan laser bar */}
                          <div className="h-1 bg-gradient-to-r from-transparent via-[#61DED3] to-transparent shadow-[0_0_20px_#61DED3]" />
                          {/* Soft scanning glow cone */}
                          <div className="h-16 bg-gradient-to-b from-[#61DED3]/25 to-transparent" />
                        </motion.div>
                      )}

                      {/* Full-frame scanning grid overlay */}
                      {isActive && isScanning && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0.3, 0.7, 0.3] }}
                          transition={{ duration: 1.2, repeat: Infinity }}
                          className="absolute inset-0 bg-[#61DED3]/10 z-20 pointer-events-none border border-[#61DED3]/40"
                        />
                      )}
                    </motion.div>
                  );
                })}
              </div>

            </div>

            {/* Active Case Info & Action */}
            <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6 px-4">
              <div>
                <h4 className="font-extrabold text-slate-900 text-xl sm:text-2xl">{CASES[activeIndex].title}</h4>
                <p className="text-sm text-slate-500 font-medium mt-1">{CASES[activeIndex].subtitle}</p>
              </div>
              <button
                onClick={startScan}
                disabled={isScanning || scanComplete}
                className={`px-8 py-4 rounded-full text-base font-bold transition-all shrink-0 shadow-lg hover:shadow-xl ${scanComplete ? 'bg-[#61DED3] text-slate-900 shadow-[#61DED3]/30' : 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/20'}`}
              >
                {isScanning ? t('aiVision.scanning') : scanComplete ? t('aiVision.analyzed') : t('aiVision.scanButton')}
              </button>
            </div>
          </div>

          {/* Right: Scan Results Minimal Dashboard */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
              <h3 className="font-extrabold text-slate-900 text-2xl sm:text-3xl flex items-center gap-3">
                <Activity className="w-7 h-7 text-[#09638D]" />
                {t('aiVision.analyzed')}
              </h3>
              <span className={`text-sm font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider ${
                scanComplete 
                  ? (CASES[activeIndex].threat ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700') 
                  : 'bg-slate-100 text-slate-500'
              }`}>
                {scanComplete ? CASES[activeIndex].status : '...'}
              </span>
            </div>

            <div className="flex-1 relative min-h-[300px]">
              <AnimatePresence mode="wait">
                {scanComplete ? (
                  <motion.div 
                    key="results"
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <div className={`p-6 rounded-3xl text-base sm:text-lg flex items-start gap-4 font-medium ${CASES[activeIndex].threat ? 'bg-red-50 text-red-900' : 'bg-emerald-50 text-emerald-900'}`}>
                      <ShieldAlert className={`w-7 h-7 shrink-0 mt-0.5 ${CASES[activeIndex].threat ? 'text-red-600' : 'text-emerald-600'}`} />
                      <div>
                        <strong>{t('aiVision.analyzed')}:</strong> {CASES[activeIndex].type}
                      </div>
                    </div>

                    <div className="space-y-4 text-base sm:text-lg font-semibold text-slate-700">
                      <div className="flex justify-between items-center py-3 border-b border-slate-50">
                        <span className="text-slate-500 text-sm sm:text-base">{t('aiVision.severityLabel')}</span>
                        <span className={CASES[activeIndex].threat ? "text-red-600 font-extrabold" : "text-emerald-600 font-extrabold"}>{CASES[activeIndex].severity}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-slate-50">
                        <span className="text-slate-500 text-sm sm:text-base">{t('aiVision.recommendationLabel')}</span>
                        <span className="text-slate-900 font-extrabold text-right max-w-[60%]">{CASES[activeIndex].recommendation}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-slate-50">
                        <span className="text-slate-500 text-sm sm:text-base">{t('aiVision.actionLabel')}</span>
                        <span className="text-[#09638D] font-extrabold flex items-center gap-2">
                          <Send className="w-5 h-5" /> {CASES[activeIndex].action}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="placeholder"
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center text-slate-400 font-medium"
                  >
                    <Scan className="w-16 h-16 mb-6 opacity-20" />
                    <p className="max-w-sm text-base sm:text-lg">
                      {t('aiVision.description')}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
