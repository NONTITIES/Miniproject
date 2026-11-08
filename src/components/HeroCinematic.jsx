import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TiltCard } from './ui/TiltCard';
import { ShimmerButton } from './ui/ShimmerButton';
import { 
  Activity, Radio, Cpu, ShieldCheck, ChevronRight, 
  Github, Sparkles, ArrowDown, Zap, Wifi, Navigation
} from 'lucide-react';

export default function HeroCinematic({ projectMeta }) {
  const [packetCount, setPacketCount] = useState(4812);
  const [activeSignalG, setActiveSignalG] = useState(1.02);

  // Live telemetry ticker simulating active field telemetry packet ingestion
  useEffect(() => {
    const interval = setInterval(() => {
      setPacketCount(prev => prev + 1);
      setActiveSignalG(+(1.0 + (Math.random() - 0.5) * 0.12).toFixed(2));
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="overview" className="relative min-h-[95vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Floating Telemetry Status Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0E1524]/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono backdrop-blur-xl shadow-glow-cyan">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>SYSTEM ONLINE: 868 MHz LoRa LINK ACQUIRED</span>
          </div>

          <div className="hidden sm:inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono backdrop-blur-md">
            <Wifi className="w-3.5 h-3.5 text-blue-400" />
            <span>GATEWAY #01 • RSSI -84 dBm</span>
          </div>

          <span className="text-xs font-mono text-slate-400 border border-white/10 px-2.5 py-1 rounded-full bg-white/5 backdrop-blur-sm">
            {projectMeta.academicYear} • {projectMeta.batch}
          </span>
        </motion.div>

        {/* Hero Grid: Left Copy & Right High-Tech HUD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Cinematic Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              Autonomous <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-300">
                Road Intelligence
              </span> <br />
              & Telemetry.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              {projectMeta.subtitle}
            </p>

            <p className="text-xs sm:text-sm text-slate-400 font-mono">
              {projectMeta.department} • {projectMeta.institution}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <ShimmerButton href="#demo" shimmerColor="#22D3EE">
                <Activity className="w-4 h-4 text-cyan-300" />
                <span>Test Live Road Simulator</span>
                <ChevronRight className="w-4 h-4 text-white/70" />
              </ShimmerButton>

              <a
                href="#architecture"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs sm:text-sm font-medium hover:bg-white/10 hover:text-white transition backdrop-blur-md"
              >
                <span>Subsystem Architecture</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <a
                href="https://github.com/NONTITIES/Miniproject"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition backdrop-blur-md"
              >
                <Github className="w-4 h-4" />
                <span className="text-xs">GitHub Repo</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: High-End Telemetry Radar HUD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <TiltCard tiltStrength={8} className="p-6 overflow-hidden">
              {/* HUD Header Bar */}
              <div className="flex items-center justify-between pb-3.5 border-b border-white/10 text-xs font-mono">
                <span className="flex items-center space-x-2 text-cyan-400 font-bold tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                  <span>NODE-84 FIELD TELEMETRY</span>
                </span>
                <span className="text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                  PKT #{packetCount}
                </span>
              </div>

              {/* Animated Road Vector Grid Canvas */}
              <div className="py-4 relative">
                <svg viewBox="0 0 380 180" className="w-full h-44 overflow-visible">
                  <defs>
                    <linearGradient id="roadSurf" x1="0" y1="1" x2="0" y2="0">
                      <stop offset="0%" stopColor="#121B30" />
                      <stop offset="100%" stopColor="#0A0E1A" />
                    </linearGradient>
                    <linearGradient id="laserBeam" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22D3EE" stopOpacity="0" />
                      <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* 3D Perspective Highway Deck */}
                  <polygon 
                    points="60,175 150,15 230,15 320,175" 
                    fill="url(#roadSurf)" 
                    stroke="rgba(255,255,255,0.12)" 
                    strokeWidth="1.2"
                  />

                  {/* Highway Lane Dividers with Animated Pulsing Glow */}
                  <line 
                    x1="190" y1="15" x2="190" y2="175" 
                    stroke="#22D3EE" 
                    strokeWidth="2" 
                    strokeDasharray="8 8"
                    strokeOpacity="0.75"
                    className="animate-pulse"
                  />

                  {/* Left & Right Edge Guide Lines */}
                  <line x1="125" y1="175" x2="170" y2="15" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" strokeDasharray="3 3" />
                  <line x1="255" y1="175" x2="210" y2="15" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" strokeDasharray="3 3" />

                  {/* Laser Scanning Horizon Bar */}
                  <line x1="90" y1="95" x2="290" y2="95" stroke="#22D3EE" strokeWidth="1.5" strokeOpacity="0.6" className="animate-pulse" />

                  {/* Active Sensor Node #1 (Normal Road) */}
                  <circle cx="170" cy="50" r="5" fill="#3B82F6" className="animate-ping" opacity="0.5" />
                  <circle cx="170" cy="50" r="3.5" fill="#22D3EE" />
                  <text x="180" y="53" fill="#94A3B8" fontSize="8" fontFamily="monospace">
                    NODE-01 (1.02g)
                  </text>

                  {/* Anomaly Impact Event (Severe Pothole Crater) */}
                  <circle cx="210" cy="130" r="8" fill="#EF4444" className="animate-ping" opacity="0.4" />
                  <circle cx="210" cy="130" r="5" fill="#EF4444" />
                  <ellipse cx="210" cy="130" rx="35" ry="12" fill="none" stroke="#EF4444" strokeWidth="1" strokeOpacity="0.6" />
                  
                  {/* Alert Tag */}
                  <g transform="translate(230, 122)">
                    <rect width="135" height="22" rx="4" fill="#1E1014" stroke="#EF4444" strokeWidth="1" />
                    <text x="8" y="15" fill="#EF4444" fontSize="9" fontFamily="monospace" fontWeight="bold">
                      CRATER: +2.78g PEAK
                    </text>
                  </g>

                  {/* Telemetry Wave packet travel animation */}
                  <line x1="210" y1="130" x2="330" y2="40" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.8" />
                  <circle cx="330" cy="40" r="4" fill="#38BDF8" />
                  <text x="300" y="30" fill="#38BDF8" fontSize="8" fontFamily="monospace">
                    RF GATEWAY (868MHz)
                  </text>
                </svg>
              </div>

              {/* Real-time Readout Matrix */}
              <div className="grid grid-cols-2 gap-2.5 pt-3.5 border-t border-white/10 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] text-slate-400 block uppercase">Instantaneous Vibration</span>
                  <span className="text-white font-bold font-mono text-sm">{activeSignalG} g</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] text-slate-400 block uppercase">RF Airtime Latency</span>
                  <span className="text-cyan-400 font-bold font-mono text-sm">42 ms (SF=7)</span>
                </div>
              </div>
            </TiltCard>
          </motion.div>

        </div>

        {/* Bento Metric Cards (3D Tilt with Cursor Spotlight) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          
          <TiltCard tiltStrength={10} className="p-5">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Edge Latency</span>
            <span className="text-3xl font-mono font-extrabold text-white mt-1 block">28 ms</span>
            <span className="text-xs text-slate-400 mt-1 block">Tire impact to classification</span>
          </TiltCard>

          <TiltCard tiltStrength={10} className="p-5">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">RF Link Range</span>
            <span className="text-3xl font-mono font-extrabold text-cyan-400 mt-1 block">2.8 km</span>
            <span className="text-xs text-slate-400 mt-1 block">Sub-GHz LoRa (868 MHz)</span>
          </TiltCard>

          <TiltCard tiltStrength={10} className="p-5">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Accuracy Rate</span>
            <span className="text-3xl font-mono font-extrabold text-emerald-400 mt-1 block">95.2%</span>
            <span className="text-xs text-slate-400 mt-1 block">120 verified road passes</span>
          </TiltCard>

          <TiltCard tiltStrength={10} className="p-5">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Dark Battery</span>
            <span className="text-3xl font-mono font-extrabold text-indigo-400 mt-1 block">77 Days</span>
            <span className="text-xs text-slate-400 mt-1 block">Indefinite w/ solar buffer</span>
          </TiltCard>

        </div>

      </div>
    </section>
  );
}
