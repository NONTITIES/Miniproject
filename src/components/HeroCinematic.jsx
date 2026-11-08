import React from 'react';
import { motion } from 'framer-motion';
import { Spotlight } from './ui/Spotlight';
import { 
  Activity, Radio, Cpu, ShieldCheck, ChevronRight, 
  Github, Sparkles, ArrowDown, Zap
} from 'lucide-react';

export default function HeroCinematic({ projectMeta }) {
  return (
    <section id="overview" className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* Ambient Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[250px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Tag & Status */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-mono backdrop-blur-md shadow-glow-blue">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>{projectMeta.academicYear} • Final Year Engineering Portfolio</span>
          </div>
          <span className="text-xs font-mono text-slate-400 border border-white/10 px-2.5 py-1 rounded-full bg-white/5 backdrop-blur-sm">
            {projectMeta.status}
          </span>
        </motion.div>

        {/* Cinematic Headline & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              Autonomous <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-cyan-300 to-indigo-300">
                Road Intelligence
              </span> & Telemetry
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              {projectMeta.subtitle}
            </p>

            <p className="text-xs sm:text-sm text-slate-400 font-mono">
              {projectMeta.department} • {projectMeta.institution}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#demo"
                className="group relative inline-flex items-center space-x-2.5 px-6 py-3 rounded-xl bg-linear-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-medium text-xs sm:text-sm shadow-glow-blue hover:shadow-glow-cyan transition-all duration-300 hover:scale-[1.02]"
              >
                <Activity className="w-4 h-4 text-cyan-200" />
                <span>Test Live Road Simulator</span>
                <ChevronRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#architecture"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs sm:text-sm font-medium hover:bg-white/10 hover:text-white transition backdrop-blur-md"
              >
                <span>Subsystem Architecture</span>
              </a>

              <a
                href="https://github.com/NONTITIES/Miniproject"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition backdrop-blur-md"
              >
                <Github className="w-4 h-4" />
                <span className="text-xs">Repo</span>
              </a>
            </div>
          </motion.div>

          {/* Interactive Road Telemetry Radar / Simulation Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl p-6 bg-[#0E1524]/80 border border-white/10 backdrop-blur-xl shadow-glass overflow-hidden">
              <Spotlight className="from-blue-600/30 via-cyan-500/20 to-transparent" size={320} />

              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono">
                <span className="flex items-center space-x-2 text-cyan-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                  <span>NODE-84 FIELD TELEMETRY</span>
                </span>
                <span className="text-slate-400">868 MHz LoRa</span>
              </div>

              {/* Animated Road Vector Grid SVG */}
              <div className="py-6 relative">
                <svg viewBox="0 0 360 160" className="w-full h-36 overflow-visible">
                  {/* Perspective Road Surface */}
                  <polygon 
                    points="60,160 140,20 220,20 300,160" 
                    fill="url(#roadGradient)" 
                    stroke="rgba(255,255,255,0.1)" 
                    strokeWidth="1"
                  />
                  <defs>
                    <linearGradient id="roadGradient" x1="0" y1="1" x2="0" y2="0">
                      <stop offset="0%" stopColor="#141E33" />
                      <stop offset="100%" stopColor="#0B101D" />
                    </linearGradient>
                    <linearGradient id="beamGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                      <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Road Center Line with Animated Dash */}
                  <line 
                    x1="180" y1="20" x2="180" y2="160" 
                    stroke="#22D3EE" 
                    strokeWidth="2" 
                    strokeDasharray="8 8"
                    strokeOpacity="0.7"
                    className="animate-pulse"
                  />

                  {/* Highway Marker Nodes */}
                  <circle cx="165" cy="50" r="4" fill="#3B82F6" className="animate-ping" opacity="0.6" />
                  <circle cx="165" cy="50" r="3" fill="#22D3EE" />

                  <circle cx="195" cy="110" r="6" fill="#EF4444" className="animate-ping" opacity="0.4" />
                  <circle cx="195" cy="110" r="4" fill="#EF4444" />
                  <text x="210" y="113" fill="#EF4444" fontSize="10" fontFamily="monospace" fontWeight="bold">
                    POTHOLE (-0.85g / +2.78g)
                  </text>

                  {/* Sensor Pulse Wave */}
                  <ellipse cx="195" cy="110" rx="30" ry="12" fill="none" stroke="#EF4444" strokeWidth="1" strokeOpacity="0.5" />
                </svg>
              </div>

              {/* Live Status Indicators */}
              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/10 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] text-slate-400 block uppercase">Continuous Sampling</span>
                  <span className="text-white font-bold font-mono">200 Hz Tri-axial</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] text-slate-400 block uppercase">RF Airtime Latency</span>
                  <span className="text-cyan-400 font-bold font-mono">42 ms (SF=7)</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Bento Metric Cards (Frosted Glass with 21st Spotlight) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          
          <div className="group relative p-5 rounded-2xl bg-[#0E1524]/60 border border-white/10 backdrop-blur-xl shadow-glass overflow-hidden hover:border-cyan-500/40 transition-all duration-300">
            <Spotlight className="from-cyan-500/20 to-transparent" size={200} />
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Edge Latency</span>
            <span className="text-3xl font-mono font-extrabold text-white mt-1 block">28 ms</span>
            <span className="text-xs text-slate-400 mt-1 block">Tire impact to classification</span>
          </div>

          <div className="group relative p-5 rounded-2xl bg-[#0E1524]/60 border border-white/10 backdrop-blur-xl shadow-glass overflow-hidden hover:border-blue-500/40 transition-all duration-300">
            <Spotlight className="from-blue-500/20 to-transparent" size={200} />
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">RF Link Range</span>
            <span className="text-3xl font-mono font-extrabold text-cyan-400 mt-1 block">2.8 km</span>
            <span className="text-xs text-slate-400 mt-1 block">Sub-GHz LoRa (868 MHz)</span>
          </div>

          <div className="group relative p-5 rounded-2xl bg-[#0E1524]/60 border border-white/10 backdrop-blur-xl shadow-glass overflow-hidden hover:border-emerald-500/40 transition-all duration-300">
            <Spotlight className="from-emerald-500/20 to-transparent" size={200} />
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Accuracy Rate</span>
            <span className="text-3xl font-mono font-extrabold text-emerald-400 mt-1 block">95.2%</span>
            <span className="text-xs text-slate-400 mt-1 block">120 verified road passes</span>
          </div>

          <div className="group relative p-5 rounded-2xl bg-[#0E1524]/60 border border-white/10 backdrop-blur-xl shadow-glass overflow-hidden hover:border-indigo-500/40 transition-all duration-300">
            <Spotlight className="from-indigo-500/20 to-transparent" size={200} />
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Dark Battery</span>
            <span className="text-3xl font-mono font-extrabold text-indigo-400 mt-1 block">77 Days</span>
            <span className="text-xs text-slate-400 mt-1 block">Indefinite w/ solar buffer</span>
          </div>

        </div>

      </div>
    </section>
  );
}
