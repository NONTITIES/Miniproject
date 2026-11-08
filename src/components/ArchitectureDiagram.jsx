import React, { useState } from 'react';
import { Spotlight } from './ui/Spotlight';
import { portfolioData } from '../data/portfolioData';
import { Activity, Radio, Database, Layout, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ArchitectureDiagram() {
  const subsystems = portfolioData.architecture.subsystems;
  const [activeSubsystemId, setActiveSubsystemId] = useState(subsystems[0].id);

  const activeSub = subsystems.find(s => s.id === activeSubsystemId) || subsystems[0];

  const getSubsystemIcon = (id) => {
    switch(id) {
      case 'sub-sensor': return <Activity className="w-5 h-5 text-cyan-400" />;
      case 'sub-rf': return <Radio className="w-5 h-5 text-emerald-400" />;
      case 'sub-cloud': return <Database className="w-5 h-5 text-blue-400" />;
      case 'sub-ui': return <Layout className="w-5 h-5 text-indigo-400" />;
      default: return <Activity className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="relative rounded-2xl bg-[#0E1524]/70 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-glass overflow-hidden">
      <Spotlight className="from-cyan-500/15 via-blue-600/10 to-transparent" size={350} />

      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 gap-4 relative z-10">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Section 09: System Architecture & Data Flow</span>
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            End-to-End Edge-to-Cloud Telemetry Pipeline
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Click any block below to inspect silicon components, input signals, and protocol flows.
          </p>
        </div>
        <div className="inline-flex items-center space-x-2 text-xs font-mono px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Pipeline State: Verified Active</span>
        </div>
      </div>

      {/* Pipeline 4-Stage Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-8 relative z-10">
        {subsystems.map((sub, idx) => {
          const isSelected = sub.id === activeSubsystemId;
          return (
            <div key={sub.id} className="relative group">
              <button
                onClick={() => setActiveSubsystemId(sub.id)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative z-10 ${
                  isSelected
                    ? 'border-cyan-400/80 bg-white/10 shadow-glow-cyan'
                    : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    {getSubsystemIcon(sub.id)}
                  </div>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-white/10 text-cyan-300 uppercase">
                    Stage {idx + 1}
                  </span>
                </div>
                <h4 className="font-bold text-sm text-white leading-snug">
                  {sub.name}
                </h4>
                <p className="text-xs text-slate-400 mt-1 line-clamp-1 font-mono">
                  {sub.tier}
                </p>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-medium">
                  <span className={isSelected ? 'text-cyan-400' : 'text-slate-400 group-hover:text-white'}>
                    {isSelected ? 'Active Focus' : 'Inspect Signals'}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1 text-cyan-400' : 'text-slate-500'}`} />
                </div>
              </button>

              {/* Connecting arrow for desktop */}
              {idx < subsystems.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-20 pointer-events-none">
                  <div className="w-6 h-6 rounded-full bg-[#080B12] border border-white/20 shadow-md flex items-center justify-center text-cyan-400">
                    <ArrowRight className="w-3 h-3 text-cyan-400 animate-pulse" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Subsystem Detailed Inspector */}
      <div className="p-6 rounded-2xl bg-[#090E18]/80 border border-white/10 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-3">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shadow-xs">
              {getSubsystemIcon(activeSub.id)}
            </div>
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                {activeSub.tier}
              </span>
              <h4 className="text-lg font-bold text-white">
                {activeSub.name}
              </h4>
            </div>
          </div>
          <span className="text-xs font-mono bg-white/5 px-2.5 py-1 rounded-lg border border-white/10 text-slate-400">
            Node ID: {activeSub.id}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
          {activeSub.purpose}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h5 className="text-xs font-mono uppercase font-semibold text-cyan-400 tracking-wider mb-2.5 flex items-center space-x-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Core Silicon & Hardware</span>
            </h5>
            <ul className="space-y-1.5">
              {activeSub.keyComponents.map((comp, i) => (
                <li key={i} className="text-xs text-slate-300 flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></span>
                  <span>{comp}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h5 className="text-xs font-mono uppercase font-semibold text-blue-400 tracking-wider mb-2.5 flex items-center space-x-1.5">
              <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
              <span>Input Telemetry Signals</span>
            </h5>
            <ul className="space-y-1.5">
              {activeSub.inputs.map((inp, i) => (
                <li key={i} className="text-xs text-slate-300 flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{inp}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h5 className="text-xs font-mono uppercase font-semibold text-indigo-400 tracking-wider mb-2.5 flex items-center space-x-1.5">
              <Radio className="w-3.5 h-3.5 text-indigo-400" />
              <span>Outputs & Inter-Tier Protocol</span>
            </h5>
            <ul className="space-y-1.5">
              {activeSub.outputs.map((out, i) => (
                <li key={i} className="text-xs text-slate-300 flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0"></span>
                  <span>{out}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 pt-2 border-t border-white/10 text-[11px] text-slate-400 font-mono">
              Protocol: {activeSub.commFlow}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
