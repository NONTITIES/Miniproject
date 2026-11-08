import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Users, Layers, Cpu, ShieldCheck, CheckCircle2, 
  AlertTriangle, Wrench, BookOpen, FileText, ChevronRight,
  TrendingUp, Radio, Activity, Download
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
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h4 className="font-bold text-base text-gray-900">Section 01: Team Profiles & Guide</h4>
              <span className="text-xs font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded">4 Investigators</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {portfolioData.teamMembers.map(m => (
                <div key={m.usn} className="p-3.5 bg-gray-50/70 border border-gray-200/80 rounded-xl">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-gray-900">{m.name}</span>
                    <span className="text-[10px] font-mono text-gray-500">{m.usn}</span>
                  </div>
                  <span className="text-[11px] font-mono text-blue-600 font-semibold block mt-0.5">{m.role}</span>
                  <p className="text-[11px] text-gray-600 mt-2 line-clamp-2">"{m.contributions}"</p>
                </div>
              ))}
            </div>
            <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100 flex items-center justify-between text-xs">
              <span className="text-gray-700 font-medium">Faculty Guide: <strong className="text-gray-900">{portfolioData.facultyGuide.name}</strong></span>
              <span className="text-blue-700 font-mono text-[11px]">{portfolioData.facultyGuide.designation}</span>
            </div>
          </div>
        );

      case '02':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h4 className="font-bold text-base text-gray-900">Section 02: Overview & Technical Scope</h4>
              <span className="text-xs font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Verified Prototype</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              {portfolioData.overview.introduction}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                <span className="font-bold text-gray-900 block mb-1">Core Principle</span>
                <span className="text-gray-600 text-[11px]">200 Hz Tri-axial accelerometer impulse tracking with edge RMS and Crest Factor pothole extraction.</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                <span className="font-bold text-gray-900 block mb-1">Target Outcomes</span>
                <span className="text-gray-600 text-[11px]">85% faster defect discovery, sub-500ms alert latency, and municipal GIS work-order automation.</span>
              </div>
            </div>
          </div>
        );

      case '03':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h4 className="font-bold text-base text-gray-900">Section 03: Responsibility Matrix</h4>
              <span className="text-xs font-mono text-gray-500">4 Core Engineering Tracks</span>
            </div>
            <div className="space-y-2.5">
              {portfolioData.responsibilityMatrix.map((item, idx) => (
                <div key={idx} className="p-3 bg-gray-50/70 border border-gray-200/80 rounded-xl text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="font-bold text-gray-900 block">{item.subsystem}</span>
                    <span className="text-[11px] text-gray-600">HW: {item.hardwareTasks}</span>
                  </div>
                  <span className="font-mono text-blue-600 shrink-0 font-semibold text-[11px]">Lead: {item.lead}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case '04':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h4 className="font-bold text-base text-gray-900">Section 04: Problem, Need & Economic Impact</h4>
              <span className="text-xs font-mono text-red-600 bg-red-50 px-2 py-0.5 rounded">High Severity</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {portfolioData.problemAndNeed.existingProblems.slice(0, 4).map((p, i) => (
                <div key={i} className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <span className="font-bold text-gray-900 block mb-0.5">{p.title}</span>
                  <span className="text-gray-600 text-[11px]">{p.description}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case '05':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h4 className="font-bold text-base text-gray-900">Section 05: Concept & Component Selection</h4>
              <span className="text-xs font-mono text-blue-600">3 Key Decisions</span>
            </div>
            <div className="space-y-2">
              {portfolioData.conceptChoices.map((c, i) => {
                const selected = c.options.find(o => o.selected);
                return (
                  <div key={i} className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-gray-500 uppercase text-[10px]">{c.domain}</span>
                      <span className="font-bold text-blue-600 font-mono text-[11px]">Selected: {selected?.name}</span>
                    </div>
                    <p className="text-gray-600 text-[11px] mt-1">{selected?.reason}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case '06':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h4 className="font-bold text-base text-gray-900">Section 06: Design Choices & Trade-Offs</h4>
              <span className="text-xs font-mono text-gray-500">System Architecture Analysis</span>
            </div>
            <div className="space-y-2.5">
              {portfolioData.designChoices.comparisons.map((c, i) => (
                <div key={i} className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-xs">
                  <div className="flex items-center justify-between font-semibold mb-1">
                    <span className="text-gray-900">{c.criterion}</span>
                    <span className="text-blue-600 font-mono text-[11px]">Selected: {c.optionB}</span>
                  </div>
                  <p className="text-[11px] text-gray-600">{c.advantages}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case '07':
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <h4 className="font-bold text-base text-gray-900">Section 07: Review Decisions Timeline</h4>
              <span className="text-xs font-mono text-blue-600">4 Milestones</span>
            </div>
            {portfolioData.reviewDecisions.map((r, i) => (
              <div key={i} className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-xs">
                <div className="flex justify-between font-bold text-gray-900 mb-0.5">
                  <span>{r.phase}</span>
                  <span className="text-gray-500 font-mono text-[10px]">{r.date}</span>
                </div>
                <p className="text-gray-600 text-[11px]">Action: {r.actionTaken}</p>
              </div>
            ))}
          </div>
        );

      case '08':
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <h4 className="font-bold text-base text-gray-900">Section 08: Functional Engineering Requirements</h4>
              <span className="text-xs font-mono text-gray-500">FR-01 to FR-05</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {portfolioData.functionalRequirements.map(fr => (
                <div key={fr.id} className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                  <span className="font-mono text-blue-600 font-bold text-[10px]">{fr.id}</span>
                  <h5 className="font-bold text-gray-900 text-[11px] mt-0.5">{fr.title}</h5>
                  <p className="text-gray-500 text-[10px] mt-1 line-clamp-2">{fr.systemResponse}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case '09':
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <h4 className="font-bold text-base text-gray-900">Section 09: Subsystems & Data Flow</h4>
              <span className="text-xs font-mono text-emerald-600">Modular Pipeline</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {portfolioData.architecture.subsystems.map(sub => (
                <div key={sub.id} className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                  <span className="font-bold text-gray-900 text-[11px] block">{sub.name}</span>
                  <span className="text-gray-500 text-[10px] mt-1 block">{sub.tier}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case '10':
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <h4 className="font-bold text-base text-gray-900">Section 10: Theoretical Formulations</h4>
              <span className="text-xs font-mono text-blue-600">3 Validated Proofs</span>
            </div>
            {portfolioData.calculations.map(c => (
              <div key={c.id} className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-xs">
                <span className="font-mono text-[10px] text-blue-600 font-bold">{c.id} • {c.title}</span>
                <p className="font-mono text-gray-800 text-[11px] mt-1 bg-white p-2 rounded border border-gray-100">{c.formula}</p>
                <span className="text-emerald-700 font-mono text-[11px] font-bold mt-1 block">{c.result}</span>
              </div>
            ))}
          </div>
        );

      case '11':
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <h4 className="font-bold text-base text-gray-900">Section 11: Verification Test Cases</h4>
              <span className="text-xs font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">6/6 PASS</span>
            </div>
            <div className="space-y-1.5 text-xs">
              {portfolioData.verificationTestCases.map(tc => (
                <div key={tc.id} className="p-2.5 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-between">
                  <div>
                    <span className="font-mono font-bold text-blue-600 text-[11px]">{tc.id}</span>
                    <span className="text-gray-700 ml-2 text-[11px]">{tc.description}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 font-mono">{tc.status}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case '12':
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <h4 className="font-bold text-base text-gray-900">Section 12: Predicted vs. Calculated vs. Measured</h4>
              <span className="text-xs font-mono text-gray-500">Error Bounds &lt; 14%</span>
            </div>
            <div className="space-y-1.5 text-xs">
              {portfolioData.empiricalComparison.map((row, i) => (
                <div key={i} className="p-2.5 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-between">
                  <span className="font-medium text-gray-900 text-[11px]">{row.parameter}</span>
                  <div className="flex items-center space-x-3 font-mono text-[11px]">
                    <span className="text-gray-500">Sim: {row.predicted}</span>
                    <span className="text-emerald-600 font-bold">Act: {row.measured}</span>
                    <span className="font-bold text-blue-600">({row.error})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case '13':
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <h4 className="font-bold text-base text-gray-900">Section 13: Failures, Root Causes & Fixes</h4>
              <span className="text-xs font-mono text-gray-500">4 Debugging Case Studies</span>
            </div>
            {portfolioData.failuresAndFixes.slice(0, 3).map(f => (
              <div key={f.id} className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-xs">
                <span className="font-mono text-red-600 font-bold text-[10px]">{f.id} • {f.category}</span>
                <p className="font-semibold text-gray-900 text-[11px] mt-0.5">Issue: {f.issue}</p>
                <p className="text-emerald-700 text-[11px] mt-1 font-medium">Fix: {f.engineeringFix}</p>
              </div>
            ))}
          </div>
        );

      case '14':
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <h4 className="font-bold text-base text-gray-900">Section 14: Engineering Lab Notebook</h4>
              <span className="text-xs font-mono text-gray-500">Field Logs</span>
            </div>
            {portfolioData.engineeringNotebook.slice(0, 3).map(n => (
              <div key={n.entryNumber} className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-xs">
                <div className="flex justify-between text-[10px] font-mono text-gray-400 mb-0.5">
                  <span>{n.entryNumber} • {n.author}</span>
                  <span>{n.date}</span>
                </div>
                <h5 className="font-bold text-gray-900 text-[11px]">{n.title}</h5>
                <p className="text-gray-600 text-[11px] mt-1">{n.notes}</p>
              </div>
            ))}
          </div>
        );

      case '15':
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <h4 className="font-bold text-base text-gray-900">Section 15: Review Committee Evaluation</h4>
              <span className="text-xs font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Grade A+ (Outstanding)</span>
            </div>
            {portfolioData.reviewRecord.map(r => (
              <div key={r.reviewId} className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-xs">
                <div className="flex justify-between font-bold text-gray-900 text-[11px]">
                  <span>{r.stage}</span>
                  <span className="text-blue-600 font-mono text-[10px]">{r.status}</span>
                </div>
                <p className="text-gray-600 text-[11px] mt-1">{r.feedback}</p>
              </div>
            ))}
          </div>
        );

      case '16':
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <h4 className="font-bold text-base text-gray-900">Section 16: Reflections & Forward Links</h4>
              <span className="text-xs font-mono text-gray-500">Retrospective</span>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-xs">
              <span className="font-bold text-gray-900 block mb-1">Key Takeaway</span>
              <p className="text-gray-600 text-[11px]">{portfolioData.reflections.technicalLearnings[0]}</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-xs">
              <span className="font-bold text-emerald-700 block mb-1">Future Direction</span>
              <p className="text-gray-600 text-[11px]">{portfolioData.reflections.futureWork[0]}</p>
            </div>
          </div>
        );

      case '17':
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <h4 className="font-bold text-base text-gray-900">Section 17: Final Demonstration</h4>
              <span className="text-xs font-mono text-emerald-600">Sim Ready</span>
            </div>
            <p className="text-xs text-gray-600">
              Use the live interactive telemetry simulator above to test road profiles and observe sub-30ms edge classification.
            </p>
            <div className="grid grid-cols-2 gap-2 text-center text-xs">
              <div className="p-2 bg-gray-50 rounded border border-gray-200">
                <span className="font-bold text-gray-900 block font-mono text-sm">28 ms</span>
                <span className="text-gray-500 text-[10px]">Edge Latency</span>
              </div>
              <div className="p-2 bg-gray-50 rounded border border-gray-200">
                <span className="font-bold text-gray-900 block font-mono text-sm">95.2%</span>
                <span className="text-gray-500 text-[10px]">Accuracy</span>
              </div>
            </div>
          </div>
        );

      case '18':
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <h4 className="font-bold text-base text-gray-900">Section 18: Documentation & Files</h4>
              <span className="text-xs font-mono text-blue-600">Downloads Ready</span>
            </div>
            <div className="space-y-2">
              {portfolioData.resources.slice(0, 3).map((r, i) => (
                <div key={i} className="p-3 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-gray-900 block">{r.title}</span>
                    <span className="text-[10px] text-gray-500 font-mono">{r.fileSize}</span>
                  </div>
                  <span className="text-blue-600 font-semibold text-[11px]">{r.actionText}</span>
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
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs">
      {/* Category Pills (21st.dev style) */}
      <div className="flex flex-wrap gap-1.5 pb-4 border-b border-gray-100">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleTabChange(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition ${
              activeTab === cat.id
                ? 'bg-blue-600 text-white font-semibold shadow-xs'
                : 'bg-gray-100/80 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Sub-section Switcher */}
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        {/* Left Sub-Navigation */}
        <div className="md:w-56 shrink-0 space-y-1">
          {currentCategory.sections.map((sec) => (
            <button
              key={sec}
              onClick={() => setActiveSectionId(sec)}
              className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition flex items-center justify-between ${
                activeSectionId === sec
                  ? 'bg-blue-50 text-blue-700 font-semibold border border-blue-200/80'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span>Section {sec}</span>
              <ChevronRight className={`w-3.5 h-3.5 ${activeSectionId === sec ? 'text-blue-600' : 'text-gray-400'}`} />
            </button>
          ))}
        </div>

        {/* Right Content Panel */}
        <div className="grow min-h-[300px] bg-white rounded-xl">
          {renderSectionContent(activeSectionId)}
        </div>
      </div>
    </div>
  );
}
