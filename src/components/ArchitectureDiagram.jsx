import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Activity, Radio, Database, Layout, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ArchitectureDiagram() {
  const subsystems = portfolioData.architecture.subsystems;
  const [activeSubsystemId, setActiveSubsystemId] = useState(subsystems[0].id);

  const activeSub = subsystems.find(s => s.id === activeSubsystemId) || subsystems[0];

  const getSubsystemIcon = (id) => {
    switch(id) {
      case 'sub-sensor': return <Activity className="w-5 h-5 text-blue-600" />;
      case 'sub-rf': return <Radio className="w-5 h-5 text-emerald-600" />;
      case 'sub-cloud': return <Database className="w-5 h-5 text-indigo-600" />;
      case 'sub-ui': return <Layout className="w-5 h-5 text-violet-600" />;
      default: return <Activity className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-gray-100 gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-medium">
            Interactive Subsystem Architecture
          </span>
          <h3 className="text-xl font-bold text-gray-900 mt-1">
            End-to-End Edge-to-Cloud Telemetry Pipeline
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            Click any block below to inspect signal paths, hardware components, and I/O specifications.
          </p>
        </div>
        <div className="inline-flex items-center space-x-2 text-xs font-mono px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-600">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Pipeline Status: Calibrated & Verified</span>
        </div>
      </div>

      {/* Pipeline Diagram Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-8 relative">
        {subsystems.map((sub, idx) => {
          const isSelected = sub.id === activeSubsystemId;
          return (
            <div key={sub.id} className="relative group">
              <button
                onClick={() => setActiveSubsystemId(sub.id)}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-200 relative z-10 ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50/40 shadow-sm ring-2 ring-blue-500/20'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-gray-50 border border-gray-100">
                    {getSubsystemIcon(sub.id)}
                  </div>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-600 uppercase">
                    Stage {idx + 1}
                  </span>
                </div>
                <h4 className="font-semibold text-sm text-gray-900 leading-snug">
                  {sub.name}
                </h4>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  {sub.tier}
                </p>

                <div className="mt-4 pt-3 border-t border-gray-100/80 flex items-center justify-between text-xs font-medium">
                  <span className={isSelected ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'}>
                    {isSelected ? 'Active Selection' : 'Inspect Details'}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1 text-blue-600' : 'text-gray-400'}`} />
                </div>
              </button>

              {/* Connecting arrow for desktop */}
              {idx < subsystems.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-20 pointer-events-none">
                  <div className="w-6 h-6 rounded-full bg-white border border-gray-200 shadow-xs flex items-center justify-center text-gray-400">
                    <ArrowRight className="w-3 h-3 text-gray-500" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Detailed Subsystem Inspector Card */}
      <div className="bg-gray-50/70 border border-gray-200/80 rounded-xl p-6 transition-all">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-4 border-b border-gray-200/80 gap-3">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-lg bg-white border border-gray-200 shadow-xs">
              {getSubsystemIcon(activeSub.id)}
            </div>
            <div>
              <span className="text-xs font-mono text-blue-600 uppercase tracking-wider font-semibold">
                {activeSub.tier}
              </span>
              <h4 className="text-lg font-bold text-gray-900">
                {activeSub.name}
              </h4>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-xs text-gray-600">
            <span className="font-mono bg-white px-2.5 py-1 rounded border border-gray-200">
              ID: {activeSub.id}
            </span>
          </div>
        </div>

        <p className="text-sm text-gray-700 mt-4 leading-relaxed">
          {activeSub.purpose}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Hardware & Components */}
          <div className="bg-white p-4 rounded-lg border border-gray-200/80">
            <h5 className="text-xs font-mono uppercase font-semibold text-gray-900 tracking-wider mb-2.5 flex items-center space-x-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>Core Silicon & Components</span>
            </h5>
            <ul className="space-y-1.5">
              {activeSub.keyComponents.map((comp, i) => (
                <li key={i} className="text-xs text-gray-600 flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                  <span>{comp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Input Signals */}
          <div className="bg-white p-4 rounded-lg border border-gray-200/80">
            <h5 className="text-xs font-mono uppercase font-semibold text-gray-900 tracking-wider mb-2.5 flex items-center space-x-1.5">
              <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
              <span>Input Ingestion</span>
            </h5>
            <ul className="space-y-1.5">
              {activeSub.inputs.map((inp, i) => (
                <li key={i} className="text-xs text-gray-600 flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                  <span>{inp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Output Telemetry & Comm Flow */}
          <div className="bg-white p-4 rounded-lg border border-gray-200/80">
            <h5 className="text-xs font-mono uppercase font-semibold text-gray-900 tracking-wider mb-2.5 flex items-center space-x-1.5">
              <Radio className="w-3.5 h-3.5 text-indigo-500" />
              <span>Output & Inter-tier Protocol</span>
            </h5>
            <ul className="space-y-1.5">
              {activeSub.outputs.map((out, i) => (
                <li key={i} className="text-xs text-gray-600 flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></span>
                  <span>{out}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 pt-2.5 border-t border-gray-100 text-[11px] text-gray-500 italic">
              Protocol: {activeSub.commFlow}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
