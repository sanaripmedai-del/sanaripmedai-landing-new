import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Stethoscope, Sparkles, CheckCircle2, Shield, ArrowUpRight, Cpu } from 'lucide-react';

const STICKY_STEPS = [
  {
    id: 1,
    title: '01. Instant Multi-Source Triage',
    subtitle: 'Zero-Latency Patient Check-in',
    description:
      'Patients or intake nurses submit initial symptoms. Sanarip Med AI runs real-time risk assessment, triaging cases by urgency level and highlighting red-flag indicators within seconds.',
    tag: 'Triage Stage',
    badgeColor: 'text-indigo-400 border-indigo-500/30 bg-indigo-950/40',
    stats: 'Avg Triage Time: < 3.2 seconds',
    visual: {
      type: 'triage',
      title: 'Triage Queue Priority',
      badge: 'URGENT - LEVEL 1',
      metrics: [
        { label: 'Chest Pain / Dyspnea Alert', val: 'CRITICAL', color: 'text-red-400' },
        { label: 'ECG Analysis', val: 'ST Elevation Detected', color: 'text-amber-400' },
        { label: 'Recommended Action', val: 'Immediate Cardiology Consult', color: 'text-emerald-400' },
      ]
    }
  },
  {
    id: 2,
    title: '02. Real-Time AI Pathology Assist',
    subtitle: 'High-Precision Diagnostic Copilot',
    description:
      'Cross-references radiological scans, lab blood panels, and historical EHR records against global diagnostic databases to present clinicians with differential diagnosis options.',
    tag: 'Diagnostic Stage',
    badgeColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/40',
    stats: 'Diagnostic Sensitivity: 99.4%',
    visual: {
      type: 'pathology',
      title: 'Multimodal AI Copilot Scan',
      badge: 'PATHOLOGY CONFIRMED',
      metrics: [
        { label: 'Lab Correlation', val: 'Match Confidence 98.7%', color: 'text-cyan-400' },
        { label: 'Drug Interaction Check', val: 'Zero Contraindications', color: 'text-emerald-400' },
        { label: 'Recommended Rx', val: 'Adjusted Dosage Suggested', color: 'text-indigo-400' },
      ]
    }
  },
  {
    id: 3,
    title: '03. Autonomous EHR Documentation',
    subtitle: '3.5 Hours Saved Per Shift',
    description:
      'Synthesizes clinician dictations, room conversations, and treatment plans into perfectly formatted FHIR-compliant EHR notes, ready for 1-click physician sign-off.',
    tag: 'Documentation Stage',
    badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/40',
    stats: 'Administrative Burden: -80%',
    visual: {
      type: 'documentation',
      title: 'Automated FHIR EHR Generator',
      badge: 'SYNTHESIS COMPLETE',
      metrics: [
        { label: 'SOAP Note Status', val: 'Generated & Structured', color: 'text-emerald-400' },
        { label: 'Billing CPT Codes', val: 'Auto-Matched (CPT 99214)', color: 'text-indigo-400' },
        { label: 'Physician Review', val: 'Pending 1-Click Signature', color: 'text-cyan-400' },
      ]
    }
  }
];

export const StickyScrollSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="clinical-impact" className="py-24 md:py-36 bg-black text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-400 border border-indigo-500/30 rounded-full bg-indigo-950/30">
            Clinical Workflow Progression
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tighter text-gradient-hero">
            How Sanarip Med AI Operates
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            Experience the seamless 3-stage lifecycle from emergency triage to fully documented clinical discharge.
          </p>
        </div>

        {/* Sticky Scroll Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Text Navigation */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-10">
            {STICKY_STEPS.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                    isActive
                      ? 'border-indigo-500/50 bg-zinc-900/90 shadow-xl shadow-indigo-500/10'
                      : 'border-white/5 bg-zinc-950/40 opacity-50 hover:opacity-80 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2.5 py-0.5 text-[11px] font-semibold rounded-full border ${step.badgeColor}`}>
                      {step.tag}
                    </span>
                    <span className="text-xs text-zinc-500 font-mono">{step.stats}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
                    {step.title}
                  </h3>
                  <h4 className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-3">
                    {step.subtitle}
                  </h4>

                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-indigo-400">
                    <span>Explore Stage {step.id} Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Interactive Cards */}
          <div className="lg:col-span-7 space-y-12">
            {STICKY_STEPS.map((step, index) => {
              const visual = step.visual;
              return (
                <motion.div
                  key={`card-${step.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.4 }}
                  onViewportEnter={() => setActiveStep(index)}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-3xl border border-white/10 bg-zinc-950/80 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl"
                >
                  {/* Decorative Background Ambient Glow */}
                  <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

                  {/* Header Bar */}
                  <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
                        <Cpu className="w-5 h-5 text-indigo-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-base">{visual.title}</h4>
                        <span className="text-xs text-zinc-500 font-mono">SANARIP_CORE_ENGINE_NODE_{step.id}</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      {visual.badge}
                    </span>
                  </div>

                  {/* Metric List */}
                  <div className="space-y-4 mb-8">
                    {visual.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-black/60 border border-white/5 flex items-center justify-between"
                      >
                        <span className="text-xs sm:text-sm text-zinc-400 font-medium">{m.label}</span>
                        <span className={`text-xs sm:text-sm font-bold font-mono ${m.color}`}>{m.val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Progress Line */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 font-mono">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Validation Check Passed
                    </div>
                    <span>Latency: 14.8ms</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
