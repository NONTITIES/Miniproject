import React, { useState } from 'react';
import { Spotlight } from './ui/Spotlight';
import { Calculator, Zap, Gauge, ArrowRight, ShieldAlert } from 'lucide-react';

export default function DynamicCalculator() {
  const [speed, setSpeed] = useState(50);
  const [depth, setDepth] = useState(45);
  const [dutyCycle, setDutyCycle] = useState(1.5);

  const v = speed * (1000 / 3600);
  const chord = 0.55;
  const impactTimeMs = ((chord / v) * 1000).toFixed(0);
  
  const impulseFactor = (depth / 30) * Math.pow(v / 13.88, 1.2);
  const peakG = (1.0 + impulseFactor * 1.4).toFixed(2);
  const naturalFreq = (11.08).toFixed(2);

  const activeFraction = dutyCycle / 100;
  const avgCurrentMa = (42.0 * activeFraction + 0.018 * (1 - activeFraction)).toFixed(3);
  const batteryCap = 1200;
  const batteryDays = ((batteryCap / avgCurrentMa) / 24).toFixed(1);

  const getSeverityBadge = (g) => {
    if (g < 1.5) return { text: 'Nominal Micro-Texture', color: 'text-emerald-400 bg-emerald-950/60 border-emerald-500/30' };
    if (g < 2.2) return { text: 'Level 1: Minor Distress', color: 'text-amber-400 bg-amber-950/60 border-amber-500/30' };
    if (g < 3.0) return { text: 'Level 2: Moderate Rutting', color: 'text-orange-400 bg-orange-950/60 border-orange-500/30' };
    return { text: 'Level 3: Urgent Crater Hazard', color: 'text-red-400 bg-red-950/70 border-red-500/40 shadow-glow-cyan' };
  };

  const badge = getSeverityBadge(parseFloat(peakG));

  return (
    <div className="relative rounded-2xl bg-[#15182A]/70 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-glass overflow-hidden">
      <Spotlight className="from-blue-600/20 via-cyan-500/10 to-transparent" size={320} />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-3 relative z-10">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Section 10 & 12: Theory & Math Engine</span>
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Quarter-Car Dynamics & Power Computation Lab
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Adjust vehicle velocity, pothole depression depth, and LoRa duty-cycle to compute impulse dynamics in real time.
          </p>
        </div>
        <span className="text-xs font-mono text-cyan-300 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10 shrink-0">
          Model: 2-DOF Quarter-Car
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 relative z-10">
        
        {/* Sliders Panel */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Speed Slider */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex justify-between text-xs font-medium mb-2">
              <span className="text-slate-300">Vehicle Speed:</span>
              <span className="font-mono font-bold text-cyan-400">{speed} km/h ({(v).toFixed(1)} m/s)</span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1.5">
              <span>20 km/h</span>
              <span>60 km/h</span>
              <span>100 km/h</span>
            </div>
          </div>

          {/* Depth Slider */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex justify-between text-xs font-medium mb-2">
              <span className="text-slate-300">Pothole Depression Depth:</span>
              <span className="font-mono font-bold text-cyan-400">{depth} mm</span>
            </div>
            <input
              type="range"
              min="10"
              max="80"
              value={depth}
              onChange={(e) => setDepth(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1.5">
              <span>10 mm (Hairline)</span>
              <span>45 mm (Standard)</span>
              <span>80 mm (Crater)</span>
            </div>
          </div>

          {/* Duty Cycle Slider */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex justify-between text-xs font-medium mb-2">
              <span className="text-slate-300">LoRa Active Duty Cycle:</span>
              <span className="font-mono font-bold text-indigo-400">{dutyCycle}%</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="5.0"
              step="0.5"
              value={dutyCycle}
              onChange={(e) => setDutyCycle(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1.5">
              <span>0.5% (High Reserve)</span>
              <span>2.5%</span>
              <span>5.0% (Aggressive)</span>
            </div>
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-3.5">
          <div className="p-4 rounded-2xl bg-[#090E18]/80 border border-white/10 flex flex-col justify-between">
            <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Predicted Peak Dynamic G-Shock</span>
            <div className="my-2">
              <span className="text-3xl font-mono font-extrabold text-white">+{peakG}g</span>
            </div>
            <span className="text-[11px] text-slate-500 font-mono">Impact duration: ~{impactTimeMs} ms</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#090E18]/80 border border-white/10 flex flex-col justify-between">
            <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Unsprung Resonance</span>
            <div className="my-2">
              <span className="text-3xl font-mono font-extrabold text-cyan-400">{naturalFreq} Hz</span>
            </div>
            <span className="text-[11px] text-slate-500 font-mono">Wheel-hop mode natural frequency</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#090E18]/80 border border-white/10 flex flex-col justify-between">
            <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Average Current Draw</span>
            <div className="my-2">
              <span className="text-3xl font-mono font-extrabold text-indigo-400">{avgCurrentMa} mA</span>
            </div>
            <span className="text-[11px] text-slate-500 font-mono">Sleep quiescent current: 18 µA</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#090E18]/80 border border-white/10 flex flex-col justify-between">
            <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Dark Battery Longevity</span>
            <div className="my-2">
              <span className="text-3xl font-mono font-extrabold text-emerald-400">{batteryDays} days</span>
            </div>
            <span className="text-[11px] text-emerald-500 font-mono">Net-positive with solar harvesting</span>
          </div>

          {/* Anomaly Badge */}
          <div className={`col-span-2 p-3.5 rounded-xl border flex items-center justify-between text-xs font-semibold backdrop-blur-md ${badge.color}`}>
            <span>Real-time DSP Anomaly Classification:</span>
            <span className="font-mono font-bold uppercase tracking-wider">{badge.text}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
