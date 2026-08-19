import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Cpu, Activity, Stethoscope, Zap, CheckCircle2 } from 'lucide-react';

export const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  // Parallax transformations for Hero preview dashboard
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom Zerocircle cubic-bezier
      },
    },
  };

  return (
    <section
      ref={targetRef}
      className="relative min-h-screen pt-32 pb-24 md:pt-40 md:pb-36 flex flex-col items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* Background Radial Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-indigo-900/30 via-violet-900/20 to-cyan-900/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Centered Badge (Pill Shape) */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-zinc-900/80 backdrop-blur-xl text-xs text-zinc-300 shadow-xl shadow-indigo-950/20 mb-8 hover:border-white/20 transition-all cursor-pointer group">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="font-medium text-zinc-200">Sanarip Med Engine v3.4 Live</span>
              <span className="text-zinc-600">|</span>
              <span className="text-cyan-400 group-hover:underline flex items-center gap-1">
                Zero-latency Diagnostics
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </motion.div>

          {/* Ultra-Large Gradient Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-gradient-hero leading-[1.05] max-w-4xl"
          >
            Autonomous Clinical Intelligence for Healthcare
          </motion.h1>

          {/* Subtext with High Line-Height */}
          <motion.p
            variants={itemVariants}
            className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed text-center"
          >
            Sanarip Med AI harmonizes real-time patient triage, automated EHR synthesis, and predictive diagnostic copilots into one ultra-fast clinical operating layer.
          </motion.p>

          {/* Dual CTA Buttons */}
          <motion.div variants={itemVariants} className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#demo"
              className="px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_40px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_-2px_rgba(255,255,255,0.5)] flex items-center gap-2 group"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#platform"
              className="px-8 py-4 rounded-full bg-zinc-900/90 text-white font-medium text-sm border border-white/10 hover:border-white/25 hover:bg-zinc-800/80 transition-all duration-300 flex items-center gap-2 backdrop-blur-md"
            >
              <Cpu className="w-4 h-4 text-cyan-400" />
              Explore AI Architecture
            </a>
          </motion.div>

          {/* Micro trust metrics */}
          <motion.div variants={itemVariants} className="mt-10 flex items-center gap-6 text-xs text-zinc-500 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              HIPAA & GDPR Compliant
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              Sub-100ms Inference
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
              99.9% Clinical Accuracy
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Dashboard Preview with Parallax Frame */}
      <motion.div
        style={{ y, opacity, rotateX, scale }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24 perspective-1000"
      >
        <div className="relative rounded-2xl border border-white/10 bg-zinc-950/80 p-2 sm:p-4 backdrop-blur-2xl shadow-[0_0_80px_-20px_rgba(99,102,241,0.25)]">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-zinc-900/60 rounded-t-xl">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-black/40 border border-white/5 text-[11px] text-zinc-400 font-mono">
              <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
              sanarip-med-ai.internal/clinical-stream
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Live Sync
            </div>
          </div>

          {/* Inner Dashboard Content Visual */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:p-6 bg-black/40 rounded-b-xl">
            {/* Left Sidebar Stat panel */}
            <div className="md:col-span-4 flex flex-col gap-4">
              <div className="p-4 rounded-xl border border-white/10 bg-zinc-900/40">
                <div className="text-xs text-zinc-400 mb-1">Active Patient Stream</div>
                <div className="text-2xl font-bold text-white tracking-tight">1,482 cases/min</div>
                <div className="mt-2 text-[11px] text-emerald-400 flex items-center gap-1">
                  ↑ 14% efficiency boost vs standard EHR
                </div>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-zinc-900/40">
                <div className="text-xs text-zinc-400 mb-1">AI Triage Speed</div>
                <div className="text-2xl font-bold text-cyan-400 tracking-tight">18.4ms latency</div>
                <div className="mt-2 text-[11px] text-zinc-400">
                  Model: Med-LLaMA-3-80B-Clinical
                </div>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-zinc-900/40">
                <div className="text-xs text-zinc-400 mb-2">Diagnostic Copilot Status</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
                  <span className="text-xs text-indigo-300 font-semibold">Active Scanning Pathology</span>
                </div>
              </div>
            </div>

            {/* Main Interactive Graph Visual */}
            <div className="md:col-span-8 p-5 rounded-xl border border-white/10 bg-zinc-900/30 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-zinc-300 flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-cyan-400" />
                  Real-Time Clinical Pathology Analysis
                </span>
                <span className="px-2 py-0.5 text-[10px] rounded bg-indigo-500/20 text-indigo-300 font-mono">
                  CONFIDENCE SCORE: 99.4%
                </span>
              </div>

              {/* Simulated Waveform & AI Nodes */}
              <div className="h-44 w-full bg-black/60 rounded-lg border border-white/5 p-4 relative overflow-hidden flex items-center justify-center">
                {/* SVG ECG Waveform */}
                <svg className="w-full h-full text-indigo-500/40" viewBox="0 0 500 100" preserveAspectRatio="none">
                  <path
                    d="M 0 50 Q 30 50 50 20 T 70 80 T 90 50 T 150 50 T 170 10 T 190 90 T 210 50 T 300 50 T 320 30 T 340 70 T 360 50 T 500 50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M 0 50 Q 30 50 50 20 T 70 80 T 90 50 T 150 50 T 170 10 T 190 90 T 210 50 T 300 50 T 320 30 T 340 70 T 360 50 T 500 50"
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="2"
                    strokeDasharray="150 350"
                    className="animate-pulse"
                  />
                </svg>

                {/* Glowing Overlay Tag */}
                <div className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded-md text-[11px] text-zinc-200 border border-cyan-500/30 flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  Detected: Normal Sinus Rhythm w/ Low Risk Indicator
                </div>
              </div>

              {/* Action Ribbon */}
              <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
                <span>EHR Auto-Summarization: <strong className="text-white">Active</strong></span>
                <span className="text-cyan-400 underline cursor-pointer hover:text-cyan-300">View Full Patient Transcript →</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
