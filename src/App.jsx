import React from 'react';
import Navbar from './components/Navbar';
import HeroCinematic from './components/HeroCinematic';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import LiveTelemetrySimulator from './components/LiveTelemetrySimulator';
import DynamicCalculator from './components/DynamicCalculator';
import InteractiveRubricExplorer from './components/InteractiveRubricExplorer';
import { AmbientBackground } from './components/ui/AmbientBackground';
import { TiltCard } from './components/ui/TiltCard';
import { portfolioData } from './data/portfolioData';
import { 
  Cpu, Users, Shield, Radio, Activity, Download, 
  ArrowUpRight, Github, CheckCircle2, ChevronRight, Zap,
  ExternalLink, Sparkles, BookOpen, Layers
} from 'lucide-react';

export default function App() {
  const { projectMeta, teamMembers, facultyGuide, resources } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#080B12] text-[#F8FAFC] font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
      
      {/* Ambient Moving Glow & Animated Grid Background */}
      <AmbientBackground />

      {/* Floating Glass Navigation */}
      <Navbar />

      {/* Cinematic Hero Section */}
      <HeroCinematic projectMeta={projectMeta} />

      {/* Main Engineering Modules */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-28 relative z-10">

        {/* 1. Live Interactive Simulator (Rubrics 17 & 02) */}
        <section id="demo" className="scroll-mt-28">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
              Simulation Lab
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mt-1">
              Real-Time Road Vibration Edge Classifier
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              Experience the actual DSP thresholding and spectral peak-extraction algorithm embedded on our ESP32-S3 microcontroller.
            </p>
          </div>
          <LiveTelemetrySimulator />
        </section>

        {/* 2. Interactive Architecture (Rubrics 09 & 08) */}
        <section id="architecture" className="scroll-mt-28">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
              System Engineering
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mt-1">
              End-to-End Subsystem Architecture
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              Modular 4-tier pipeline spanning Edge MEMS sensing, Sub-GHz LoRa RF telemetry, cloud MQTT brokers, and municipal spatial dispatch interfaces.
            </p>
          </div>
          <ArchitectureDiagram />
        </section>

        {/* 3. Dynamics & Power Lab (Rubrics 10 & 12) */}
        <section id="calculations" className="scroll-mt-28">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
              Physics & Energy Modeling
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mt-1">
              Quarter-Car Suspension Dynamics & Power Budget Lab
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              Manipulate velocity and crater depth sliders to verify quarter-car impulse frequencies and dark-run battery longevity.
            </p>
          </div>
          <DynamicCalculator />
        </section>

        {/* 4. Complete 18-Rubric Documentation Matrix (Rubrics 01 - 18) */}
        <section id="rubrics" className="scroll-mt-28">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
              Comprehensive Evaluation Compliance
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mt-1">
              Interactive 18-Rubric Documentation Matrix
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              All 18 university evaluation headings accessible with zero visual fatigue. Segmented into Foundations, Engineering, Architecture, Validation, and Academic Defense.
            </p>
          </div>
          <InteractiveRubricExplorer />
        </section>

        {/* 5. Team Profiles & Guide (Rubric 01 & 03) */}
        <section id="team" className="scroll-mt-28">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
              Project Investigators
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mt-1">
              Engineering Team & Faculty Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {teamMembers.map((m) => (
              <TiltCard 
                key={m.usn} 
                tiltStrength={8}
                className="flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center font-bold text-white text-sm shadow-glow-cyan mb-3">
                    {m.avatar}
                  </div>
                  <h3 className="font-bold text-sm text-white">{m.name}</h3>
                  <span className="text-xs font-mono text-cyan-400 font-semibold block mt-0.5">{m.role}</span>
                  <span className="text-[11px] font-mono text-slate-400 block mt-1">USN: {m.usn}</span>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10">
                  <span className="text-[11px] text-slate-300 italic block">"{m.contributions}"</span>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* Faculty Guide Card */}
          <TiltCard tiltStrength={4} className="mt-4 p-5 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-3">
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="text-slate-400 block font-mono text-[10px] uppercase">Academic Project Guide</span>
                <span className="font-bold text-sm text-white">{facultyGuide.name}</span>
                <span className="text-slate-400 ml-2">({facultyGuide.designation}, {facultyGuide.department})</span>
              </div>
            </div>
            <span className="font-mono text-cyan-400 sm:text-right">{facultyGuide.email}</span>
          </TiltCard>
        </section>

        {/* 6. Deliverables & Reference Library (Rubric 18) */}
        <section id="resources" className="scroll-mt-28">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
              Project Deliverables
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mt-1">
              Technical Documentation & Reference Library
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {resources.slice(0, 3).map((res, i) => (
              <TiltCard 
                key={i} 
                tiltStrength={8}
                className="flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase font-semibold block mb-1">
                    {res.category}
                  </span>
                  <h4 className="font-bold text-sm text-white">{res.title}</h4>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">{res.description}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">{res.fileSize || 'Online Resource'}</span>
                  <button
                    onClick={() => alert(`Starting download simulation: ${res.fileName || 'GitHub Repository'}`)}
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

      </main>

      {/* Clean Futuristic Footer */}
      <footer className="border-t border-white/10 bg-[#06080E]/90 backdrop-blur-xl py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center space-x-2.5">
            <div className="w-7 h-7 rounded-lg bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-glow-blue">
              <Cpu className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="font-bold text-white block leading-tight font-mono">
                SMART ROAD MONITORING SYSTEM
              </span>
              <span className="text-[11px] text-slate-500">
                {projectMeta.academicYear} Final Year Engineering Portfolio
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/NONTITIES/Miniproject" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-cyan-400 flex items-center space-x-1.5 transition"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
            <button 
              onClick={scrollToTop} 
              className="hover:text-cyan-400 transition flex items-center space-x-1 font-mono"
            >
              <span>Back to Top ↑</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
