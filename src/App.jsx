import React from 'react';
import Navbar from './components/Navbar';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import LiveTelemetrySimulator from './components/LiveTelemetrySimulator';
import DynamicCalculator from './components/DynamicCalculator';
import InteractiveRubricExplorer from './components/InteractiveRubricExplorer';
import { portfolioData } from './data/portfolioData';
import { 
  Cpu, Users, Shield, Radio, Activity, Download, 
  ArrowUpRight, Github, CheckCircle2, ChevronRight, Zap,
  ExternalLink, Sparkles
} from 'lucide-react';

export default function App() {
  const { projectMeta, teamMembers, facultyGuide, resources, finalDemo } = portfolioData;

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#171717] font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      {/* =========================================================================
          HERO & BENTO SHOWCASE (Clean, Modern Minimal 21st.dev style)
         ========================================================================= */}
      <section id="overview" className="pt-20 pb-16 md:pt-28 md:pb-20 border-b border-gray-200/80 bg-linear-to-b from-white via-white to-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Title Banner */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-mono font-medium mb-5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span>Autonomous IoT Engineering • {projectMeta.academicYear}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.12]">
              {projectMeta.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              {projectMeta.tagline}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#demo"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs sm:text-sm font-medium hover:bg-blue-700 transition shadow-xs"
              >
                <Activity className="w-4 h-4" />
                <span>Test Live Road Simulator</span>
              </a>
              <a
                href="#rubrics"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white border border-gray-300 text-gray-700 text-xs sm:text-sm font-medium hover:bg-gray-50 transition shadow-2xs"
              >
                <span>Browse All 18 Rubrics</span>
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              </a>
              <a
                href="https://github.com/NONTITIES/Miniproject"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1.5 px-3.5 py-2.5 rounded-xl bg-gray-100 text-gray-700 text-xs sm:text-sm font-medium hover:bg-gray-200 transition"
              >
                <Github className="w-4 h-4 text-gray-600" />
                <span>Source</span>
              </a>
            </div>
          </div>

          {/* Bento Metric Cards (Clean & Interesting) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="p-5 rounded-2xl bg-white border border-gray-200/90 shadow-2xs">
              <span className="text-[11px] font-mono text-gray-400 uppercase font-semibold block">Edge Latency</span>
              <span className="text-3xl font-mono font-extrabold text-gray-900 mt-1 block">28 ms</span>
              <span className="text-xs text-gray-500 mt-1 block">Tire impact to classification</span>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-gray-200/90 shadow-2xs">
              <span className="text-[11px] font-mono text-gray-400 uppercase font-semibold block">RF Uplink Range</span>
              <span className="text-3xl font-mono font-extrabold text-blue-600 mt-1 block">2.8 km</span>
              <span className="text-xs text-gray-500 mt-1 block">Sub-GHz LoRa (868 MHz)</span>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-gray-200/90 shadow-2xs">
              <span className="text-[11px] font-mono text-gray-400 uppercase font-semibold block">Classification Accuracy</span>
              <span className="text-3xl font-mono font-extrabold text-emerald-600 mt-1 block">95.2%</span>
              <span className="text-xs text-gray-500 mt-1 block">Over 120 vehicle passes</span>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-gray-200/90 shadow-2xs">
              <span className="text-[11px] font-mono text-gray-400 uppercase font-semibold block">Autonomous Battery</span>
              <span className="text-3xl font-mono font-extrabold text-indigo-600 mt-1 block">77 Days</span>
              <span className="text-xs text-gray-500 mt-1 block">Zero sun (Indefinite w/ solar)</span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE MODULES SECTION
         ========================================================================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* 1. Interactive Demonstration (Rubric 17 & 02) */}
        <section id="demo" className="scroll-mt-20">
          <div className="mb-4">
            <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block">
              Core Interactive Feature
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-0.5">
              Live Road Vibration Edge Classifier
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Select any road condition below to watch the 200 Hz MPU-6050 accelerometer waveform and edge classification decision in real time.
            </p>
          </div>
          <LiveTelemetrySimulator />
        </section>

        {/* 2. Interactive Subsystem Architecture (Rubric 09 & 08) */}
        <section id="architecture" className="scroll-mt-20">
          <div className="mb-4">
            <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block">
              System Engineering
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-0.5">
              Interactive Subsystem Architecture
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Click any architecture node to inspect its hardware silicon, input telemetry, and inter-tier communication protocols.
            </p>
          </div>
          <ArchitectureDiagram />
        </section>

        {/* 3. Dynamic Physics & Power Lab (Rubric 10 & 12) */}
        <section id="calculations" className="scroll-mt-20">
          <div className="mb-4">
            <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block">
              Engineering Calculations & Models
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-0.5">
              Interactive Dynamic Dynamics & Power Simulator
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Adjust vehicle velocity, pothole depression depth, and duty-cycle sliders to calculate peak shock forces and battery longevity.
            </p>
          </div>
          <DynamicCalculator />
        </section>

        {/* 4. Complete 18-Rubric Evaluation Matrix (Rubrics 01 - 18) */}
        <section id="rubrics" className="scroll-mt-20">
          <div className="mb-4">
            <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block">
              Full College Rubric Compliance
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-0.5">
              Interactive 18-Rubric Documentation Matrix
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Navigate all 18 evaluation headings with a single click. Structured, minimal, and free of redundant clutter.
            </p>
          </div>
          <InteractiveRubricExplorer />
        </section>

        {/* 5. Team Profiles Quick Grid (Rubric 01 & 03) */}
        <section id="team" className="scroll-mt-20">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block">
              Project Investigators
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-0.5">
              Engineering Team & Faculty Guide
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {teamMembers.map((m) => (
              <div key={m.usn} className="p-5 rounded-2xl bg-white border border-gray-200/90 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center font-bold text-blue-700 text-sm mb-3">
                    {m.avatar}
                  </div>
                  <h3 className="font-bold text-sm text-gray-900">{m.name}</h3>
                  <span className="text-xs font-mono text-blue-600 font-semibold block mt-0.5">{m.role}</span>
                  <span className="text-[11px] font-mono text-gray-400 block mt-1">USN: {m.usn}</span>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <span className="text-[11px] text-gray-600 italic block">"{m.contributions}"</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-2">
            <div>
              <span className="font-bold text-gray-900">Faculty Guide: {facultyGuide.name}</span>
              <span className="text-gray-500 ml-2">({facultyGuide.designation}, {facultyGuide.department})</span>
            </div>
            <span className="font-mono text-blue-600">{facultyGuide.email}</span>
          </div>
        </section>

        {/* 6. Download Resources (Rubric 18) */}
        <section id="resources" className="scroll-mt-20">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block">
              Deliverables & Schematics
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-0.5">
              Project Files & References
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {resources.slice(0, 3).map((res, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white border border-gray-200/90 shadow-2xs flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-blue-600 uppercase font-semibold block mb-1">
                    {res.category}
                  </span>
                  <h4 className="font-bold text-sm text-gray-900">{res.title}</h4>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{res.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-gray-400">{res.fileSize || 'Repository'}</span>
                  <button
                    onClick={() => alert(`Starting download: ${res.fileName || 'GitHub Repository'}`)}
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* =========================================================================
          CLEAN FOOTER
         ========================================================================= */}
      <footer className="bg-white border-t border-gray-200 py-10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center text-white">
              <Cpu className="w-3.5 h-3.5" />
            </div>
            <span className="font-semibold text-gray-900">SMART ROAD MONITORING</span>
            <span>• {projectMeta.academicYear} Final Year Evaluation</span>
          </div>

          <div className="flex items-center space-x-4">
            <a href="https://github.com/NONTITIES/Miniproject" target="_blank" rel="noreferrer" className="hover:text-gray-900 flex items-center space-x-1">
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a href="#overview" className="hover:text-gray-900">Back to Top ↑</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
