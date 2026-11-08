import React, { useState } from 'react';
import { Spotlight } from './ui/Spotlight';
import { portfolioData } from '../data/portfolioData';
import { 
  Users, Layers, Cpu, ShieldCheck, CheckCircle2, 
  AlertTriangle, Wrench, BookOpen, FileText, ChevronRight,
  TrendingUp, Radio, Activity, Download, Award, Sparkles
} from 'lucide-react';

const categories = [
  { id: 'foundations', label: '1. Foundations', sections: ['01', '02', '03', '04'] },
  { id: 'engineering', label: '2. Engineering Choices', sections: ['05', '06', '07', '08'] },
  { id: 'architecture', label: '3. Architecture & Math', sections: ['09', '10', '11'] },
  { id: 'validation', label: '4. Empirical Validation', sections: ['12', '13', '14'] },
  { id: 'defense', label: '5. Academic Defense', sections: ['15', '16', '17', '18'] }
];

export default function InteractiveRubricExplorer() {
  const [activeTab, setActiveTab] = useState('foundations');
  const [activeSectionId, setActiveSectionId] = useState('01');

  const currentCategory = categories.find(c => c.id === activeTab) || categories[0];

  const handleTabChange = (cat) => {
    setActiveTab(cat.id);
    setActiveSectionId(cat.sections[0]);
  };

  const renderSectionContent = (secId) => {
    switch (secId) {
      case '01':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h4 className="font-bold text-base text-white">Section 01: Team Profiles & Academic Guide</h4>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded-lg">4 Investigators</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {portfolioData.teamMembers.map(m => (
                <div key={m.usn} className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-500/30 transition">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-white">{m.name}</span>
                    <span className="text-[10px] font-mono text-slate-400">USN: {m.usn}</span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 font-semibold block mt-0.5">{m.role}</span>
                  <p className="text-[11px] text-slate-300 mt-2 line-clamp-2">"{m.contributions}"</p>
                </div>
              ))}
            </div>
            <div className="p-3.5 bg-blue-950/40 rounded-xl border border-blue-500/20 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
              <span className="text-slate-300 font-medium">Faculty Guide: <strong className="text-white">{portfolioData.facultyGuide.name}</strong></span>
              <span className="text-cyan-400 font-mono text-[11px]">{portfolioData.facultyGuide.designation}</span>
            </div>
          </div>
        );

      case '02':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h4 className="font-bold text-base text-white">Section 02: Overview & Technical Scope</h4>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-lg">Verified Prototype</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {portfolioData.overview.introduction}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 bg-white/5 rounded-xl border border-white/10">
                <span className="font-bold text-cyan-400 block mb-1">Core Principle</span>
                <span className="text-slate-300 text-[11px]">200 Hz Tri-axial accelerometer impulse tracking with edge RMS and Crest Factor pothole extraction.</span>
              </div>
              <div className="p-3.5 bg-white/5 rounded-xl border border-white/10">
                <span className="font-bold text-cyan-400 block mb-1">Target Outcomes</span>
                <span className="text-slate-300 text-[11px]">85% faster defect discovery, sub-500ms alert latency, and municipal GIS work-order automation.</span>
              </div>
            </div>
          </div>
        );

      case '03':
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h4 className="font-bold text-base text-white">Section 03: Responsibility Matrix</h4>
              <span className="text-xs font-mono text-slate-400">4 Core Engineering Tracks</span>
            </div>
            <div className="space-y-2">
              {portfolioData.responsibilityMatrix.map((item, idx) => (
                <div key={idx} className="p-3.5 bg-white/5 border border-white/10 rounded-xl text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="font-bold text-white block">{item.subsystem}</span>
                    <span className="text-[11px] text-slate-400">HW: {item.hardwareTasks}</span>
                  </div>
                  <span className="font-mono text-cyan-400 shrink-0 font-semibold text-[11px]">Lead: {item.lead}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case '04':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h4 className="font-bold text-base text-white">Section 04: Problem, Need & Economic Impact</h4>
              <span className="text-xs font-mono text-red-400 bg-red-950/60 border border-red-500/30 px-2.5 py-0.5 rounded-lg">High Criticality</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {portfolioData.problemAndNeed.existingProblems.slice(0, 4).map((p, i) => (
                <div key={i} className="p-3.5 bg-white/5 rounded-xl border border-white/10">
                  <span className="font-bold text-white block mb-0.5">{p.title}</span>
                  <span className="text-slate-300 text-[11px]">{p.description}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case '05':
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h4 className="font-bold text-base text-white">Section 05: Concept & Component Selection</h4>
              <span className="text-xs font-mono text-cyan-400">3 Key Decisions</span>
            </div>
            <div className="space-y-2">
              {portfolioData.conceptChoices.map((c, i) => {
                const selected = c.options.find(o => o.selected);
                return (
                  <div key={i} className="p-3.5 bg-white/5 border border-white/10 rounded-xl text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-slate-400 uppercase text-[10px]">{c.domain}</span>
                      <span className="font-bold text-cyan-400 font-mono text-[11px]">Selected: {selected?.name}</span>
                    </div>
                    <p className="text-slate-300 text-[11px] mt-1">{selected?.reason}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case '06':
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h4 className="font-bold text-base text-white">Section 06: Design Choices & Trade-Offs</h4>
              <span className="text-xs font-mono text-slate-400">System Trade-offs</span>
            </div>
            <div className="space-y-2">
              {portfolioData.designChoices.comparisons.map((c, i) => (
                <div key={i} className="p-3.5 bg-white/5 border border-white/10 rounded-xl text-xs">
                  <div className="flex items-center justify-between font-semibold mb-1">
                    <span className="text-white">{c.criterion}</span>
                    <span className="text-cyan-400 font-mono text-[11px]">Selected: {c.optionB}</span>
                  </div>
                  <p className="text-[11px] text-slate-300">{c.advantages}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case '07':
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <h4 className="font-bold text-base text-white">Section 07: Review Decisions Timeline</h4>
              <span className="text-xs font-mono text-cyan-400">4 Milestones</span>
            </div>
            {portfolioData.reviewDecisions.map((r, i) => (
              <div key={i} className="p-3 bg-white/5 border border-white/10 rounded-xl text-xs">
                <div className="flex justify-between font-bold text-white mb-0.5">
                  <span>{r.phase}</span>
                  <span className="text-cyan-400 font-mono text-[10px]">{r.date}</span>
                </div>
                <p className="text-slate-300 text-[11px]">Action: {r.actionTaken}</p>
              </div>
            ))}
          </div>
        );

      case '08':
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <h4 className="font-bold text-base text-white">Section 08: Functional Engineering Requirements</h4>
              <span className="text-xs font-mono text-slate-400">FR-01 to FR-05</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {portfolioData.functionalRequirements.map(fr => (
                <div key={fr.id} className="p-3 bg-white/5 border border-white/10 rounded-xl">
                  <span className="font-mono text-cyan-400 font-bold text-[10px]">{fr.id}</span>
                  <h5 className="font-bold text-white text-[11px] mt-0.5">{fr.title}</h5>
                  <p className="text-slate-400 text-[10px] mt-1 line-clamp-2">{fr.systemResponse}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case '09':
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <h4 className="font-bold text-base text-white">Section 09: Subsystems & Data Flow</h4>
              <span className="text-xs font-mono text-emerald-400">Modular Pipeline</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {portfolioData.architecture.subsystems.map(sub => (
                <div key={sub.id} className="p-3 bg-white/5 border border-white/10 rounded-xl">
                  <span className="font-bold text-white text-[11px] block">{sub.name}</span>
                  <span className="text-cyan-400 text-[10px] mt-1 block font-mono">{sub.tier}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case '10':
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <h4 className="font-bold text-base text-white">Section 10: Theoretical Formulations</h4>
              <span className="text-xs font-mono text-cyan-400">3 Validated Proofs</span>
            </div>
            {portfolioData.calculations.map(c => (
              <div key={c.id} className="p-3 bg-white/5 border border-white/10 rounded-xl text-xs">
                <span className="font-mono text-[10px] text-cyan-400 font-bold">{c.id} • {c.title}</span>
                <p className="font-mono text-cyan-300 text-[11px] mt-1 bg-black/40 p-2 rounded-lg border border-white/5">{c.formula}</p>
                <span className="text-emerald-400 font-mono text-[11px] font-bold mt-1 block">{c.result}</span>
              </div>
            ))}
          </div>
        );

      case '11':
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <h4 className="font-bold text-base text-white">Section 11: Verification Test Cases</h4>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">6/6 PASS</span>
            </div>
            <div className="space-y-1.5 text-xs">
              {portfolioData.verificationTestCases.map(tc => (
                <div key={tc.id} className="p-2.5 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="font-mono font-bold text-cyan-400 text-[11px]">{tc.id}</span>
                    <span className="text-slate-300 ml-2 text-[11px]">{tc.description}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 font-mono">{tc.status}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case '12':
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <h4 className="font-bold text-base text-white">Section 12: Predicted vs. Calculated vs. Measured</h4>
              <span className="text-xs font-mono text-slate-400">Error Bounds &lt; 14%</span>
            </div>
            <div className="space-y-1.5 text-xs">
              {portfolioData.empiricalComparison.map((row, i) => (
                <div key={i} className="p-2.5 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                  <span className="font-medium text-white text-[11px]">{row.parameter}</span>
                  <div className="flex items-center space-x-3 font-mono text-[11px]">
                    <span className="text-slate-400">Sim: {row.predicted}</span>
                    <span className="text-emerald-400 font-bold">Act: {row.measured}</span>
                    <span className="font-bold text-cyan-400">({row.error})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case '13':
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <h4 className="font-bold text-base text-white">Section 13: Failures, Root Causes & Fixes</h4>
              <span className="text-xs font-mono text-slate-400">4 Debugging Case Studies</span>
            </div>
            {portfolioData.failuresAndFixes.slice(0, 3).map(f => (
              <div key={f.id} className="p-3 bg-white/5 border border-white/10 rounded-xl text-xs">
                <span className="font-mono text-red-400 font-bold text-[10px]">{f.id} • {f.category}</span>
                <p className="font-semibold text-white text-[11px] mt-0.5">Issue: {f.issue}</p>
                <p className="text-emerald-400 text-[11px] mt-1 font-medium">Fix: {f.engineeringFix}</p>
              </div>
            ))}
          </div>
        );

      case '14':
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <h4 className="font-bold text-base text-white">Section 14: Engineering Lab Notebook</h4>
              <span className="text-xs font-mono text-slate-400">Field Logs</span>
            </div>
            {portfolioData.engineeringNotebook.slice(0, 3).map(n => (
              <div key={n.entryNumber} className="p-3 bg-white/5 border border-white/10 rounded-xl text-xs">
                <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-0.5">
                  <span>{n.entryNumber} • {n.author}</span>
                  <span>{n.date}</span>
                </div>
                <h5 className="font-bold text-white text-[11px]">{n.title}</h5>
                <p className="text-slate-300 text-[11px] mt-1">{n.notes}</p>
              </div>
            ))}
          </div>
        );

      case '15':
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <h4 className="font-bold text-base text-white">Section 15: Review Committee Evaluation</h4>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">Grade A+ (Outstanding)</span>
            </div>
            {portfolioData.reviewRecord.map(r => (
              <div key={r.reviewId} className="p-3 bg-white/5 border border-white/10 rounded-xl text-xs">
                <div className="flex justify-between font-bold text-white text-[11px]">
                  <span>{r.stage}</span>
                  <span className="text-cyan-400 font-mono text-[10px]">{r.status}</span>
                </div>
                <p className="text-slate-300 text-[11px] mt-1">{r.feedback}</p>
              </div>
            ))}
          </div>
        );

      case '16':
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <h4 className="font-bold text-base text-white">Section 16: Reflections & Forward Links</h4>
              <span className="text-xs font-mono text-slate-400">Retrospective</span>
            </div>
            <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 text-xs">
              <span className="font-bold text-white block mb-1">Key Takeaway</span>
              <p className="text-slate-300 text-[11px]">{portfolioData.reflections.technicalLearnings[0]}</p>
            </div>
            <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 text-xs">
              <span className="font-bold text-emerald-400 block mb-1">Future Direction</span>
              <p className="text-slate-300 text-[11px]">{portfolioData.reflections.futureWork[0]}</p>
            </div>
          </div>
        );

      case '17':
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <h4 className="font-bold text-base text-white">Section 17: Final Demonstration</h4>
              <span className="text-xs font-mono text-emerald-400">Live Simulation Ready</span>
            </div>
            <p className="text-xs text-slate-300">
              Use the interactive road telemetry simulator at the top of the page to test road vibration profiles and monitor sub-30ms edge classification.
            </p>
            <div className="grid grid-cols-2 gap-2 text-center text-xs">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="font-bold text-white block font-mono text-sm">28 ms</span>
                <span className="text-slate-400 text-[10px]">Edge Latency</span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="font-bold text-cyan-400 block font-mono text-sm">95.2%</span>
                <span className="text-slate-400 text-[10px]">Accuracy</span>
              </div>
            </div>
          </div>
        );

      case '18':
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <h4 className="font-bold text-base text-white">Section 18: Documentation & Resources</h4>
              <span className="text-xs font-mono text-cyan-400">Downloads Ready</span>
            </div>
            <div className="space-y-2">
              {portfolioData.resources.slice(0, 3).map((r, i) => (
                <div key={i} className="p-3.5 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white block">{r.title}</span>
                    <span className="text-[10px] text-slate-400 font-mono">{r.fileSize}</span>
                  </div>
                  <span className="text-cyan-400 font-semibold text-[11px]">{r.actionText}</span>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative rounded-2xl bg-[#15182A]/70 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-glass overflow-hidden">
      <Spotlight className="from-cyan-500/15 via-blue-600/10 to-transparent" size={320} />

      {/* Category Pills (21st.dev style) */}
      <div className="flex flex-wrap gap-2 pb-5 border-b border-white/10 relative z-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleTabChange(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
              activeTab === cat.id
                ? 'bg-linear-to-r from-blue-600 to-cyan-600 text-white font-semibold shadow-glow-cyan scale-[1.02]'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Sub-section Switcher */}
      <div className="flex flex-col md:flex-row gap-6 mt-6 relative z-10">
        {/* Left Sub-Navigation */}
        <div className="md:w-56 shrink-0 space-y-1.5">
          {currentCategory.sections.map((sec) => (
            <button
              key={sec}
              onClick={() => setActiveSectionId(sec)}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium transition flex items-center justify-between ${
                activeSectionId === sec
                  ? 'bg-white/10 text-cyan-400 font-semibold border border-cyan-500/40 shadow-xs'
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span>Section {sec}</span>
              <ChevronRight className={`w-3.5 h-3.5 ${activeSectionId === sec ? 'text-cyan-400' : 'text-slate-600'}`} />
            </button>
          ))}
        </div>

        {/* Right Content Panel */}
        <div className="grow min-h-[300px] p-5 rounded-2xl bg-[#080D18]/80 border border-white/10">
          {renderSectionContent(activeSectionId)}
        </div>
      </div>
    </div>
  );
}
