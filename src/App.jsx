import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import LiveTelemetrySimulator from './components/LiveTelemetrySimulator';
import { portfolioData } from './data/portfolioData';
import { 
  Cpu, Users, BookOpen, AlertCircle, Layers, CheckSquare, 
  Compass, Calculator, CheckCircle2, AlertTriangle, Wrench, 
  BookMarked, ClipboardList, Lightbulb, PlayCircle, Download,
  ExternalLink, ArrowUpRight, Github, ChevronRight, Activity,
  Calendar, Shield, Radio, Sparkles
} from 'lucide-react';

export default function App() {
  const { 
    projectMeta, teamMembers, facultyGuide, overview, responsibilityMatrix,
    problemAndNeed, conceptChoices, designChoices, reviewDecisions,
    functionalRequirements, architecture, calculations, verificationTestCases,
    empiricalComparison, failuresAndFixes, engineeringNotebook, reviewRecord,
    reflections, finalDemo, resources, academicReferences
  } = portfolioData;

  const [activeNotebookFilter, setActiveNotebookFilter] = useState('ALL');
  const [activeResourceCategory, setActiveResourceCategory] = useState('ALL');
  const [activeCalculationId, setActiveCalculationId] = useState(calculations[0].id);

  const selectedCalc = calculations.find(c => c.id === activeCalculationId) || calculations[0];

  const resourceCategories = ['ALL', 'Academic & Design Reports', 'Hardware & Schematics', 'Datasheets & Components', 'Source Code & Repositories'];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#171717] font-sans antialiased">
      <Navbar />

      {/* HERO SECTION */}
      <section id="overview" className="pt-20 pb-16 md:pt-28 md:pb-24 border-b border-gray-200/80 bg-linear-to-b from-white to-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Meta Pill */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-mono font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span>{projectMeta.academicYear} • {projectMeta.batch} • {projectMeta.status}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.15]">
              {projectMeta.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
              {projectMeta.subtitle}
            </p>

            <p className="mt-2 text-sm text-gray-500 font-mono">
              {projectMeta.department} • {projectMeta.institution}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#demo"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition shadow-xs"
              >
                <PlayCircle className="w-4 h-4" />
                <span>Launch Interactive Demo</span>
              </a>
              <a
                href="#architecture"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-white border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 hover:text-gray-900 transition shadow-2xs"
              >
                <span>View Architecture</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </a>
              <a
                href="https://github.com/NONTITIES/Miniproject"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition"
              >
                <Github className="w-4 h-4 text-gray-600" />
                <span>GitHub Repo</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-gray-200/80">
              <div>
                <span className="text-2xl font-bold font-mono text-gray-900">28 ms</span>
                <span className="block text-xs text-gray-500 mt-0.5">Detection Latency</span>
              </div>
              <div>
                <span className="text-2xl font-bold font-mono text-gray-900">2.8 km</span>
                <span className="block text-xs text-gray-500 mt-0.5">LoRa RF Link</span>
              </div>
              <div>
                <span className="text-2xl font-bold font-mono text-gray-900">95.2%</span>
                <span className="block text-xs text-gray-500 mt-0.5">Classification Accuracy</span>
              </div>
              <div>
                <span className="text-2xl font-bold font-mono text-gray-900">18 µA</span>
                <span className="block text-xs text-gray-500 mt-0.5">Deep Sleep Quiescent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINING ALL 18 RUBRIC SECTIONS */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

        {/* =========================================================================
            SECTION 01: About Us
           ========================================================================= */}
        <section id="team" className="scroll-mt-24">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 bg-blue-100 text-blue-800 rounded">
              SECTION 01
            </span>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Evaluation Rubric 01</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">About Us & Team Profiles</h2>
          <p className="text-sm text-gray-600 mt-1 mb-8 max-w-2xl">
            Student investigators, primary engineering domains, individual responsibilities, and faculty academic guide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers.map((member) => (
              <div key={member.usn} className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between pb-4 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center font-bold text-blue-700 text-sm">
                        {member.avatar}
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-gray-900">{member.name}</h3>
                        <span className="text-xs font-mono text-blue-600 font-semibold">{member.role}</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono px-2 py-1 bg-gray-100 text-gray-600 rounded">
                      USN: {member.usn}
                    </span>
                  </div>

                  <div className="mt-4 space-y-2.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold block">
                      Core Responsibilities
                    </span>
                    <ul className="space-y-1.5">
                      {member.primaryResponsibilities.map((resp, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {member.skills.map((skill) => (
                      <span key={skill} className="text-[11px] font-mono px-2 py-0.5 bg-gray-50 border border-gray-200 rounded text-gray-600">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 italic">
                    Key Contribution: "{member.contributions}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Faculty Guide Card */}
          <div className="mt-6 bg-white border border-gray-200 rounded-xl p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-gray-400 tracking-wider font-semibold">
                  Faculty Project Guide
                </span>
                <h4 className="font-bold text-base text-gray-900">{facultyGuide.name}</h4>
                <p className="text-xs text-gray-600">{facultyGuide.designation} • {facultyGuide.department}</p>
              </div>
            </div>
            <div className="text-xs font-mono text-gray-500 sm:text-right">
              <div>{facultyGuide.institution}</div>
              <div className="text-blue-600 mt-0.5">{facultyGuide.email}</div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 02: Project Overview
           ========================================================================= */}
        <section id="project-overview" className="scroll-mt-24">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 bg-blue-100 text-blue-800 rounded">
              SECTION 02
            </span>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Evaluation Rubric 02</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Project Overview</h2>
          <p className="text-sm text-gray-600 mt-1 mb-8 max-w-2xl">
            Introduction, technical working principle, project scope, key features, and expected impact.
          </p>

          <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-blue-600 font-semibold mb-2">
                Executive Introduction
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {overview.introduction}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
              <div>
                <h3 className="text-sm font-mono uppercase tracking-wider text-gray-900 font-semibold mb-3 flex items-center space-x-2">
                  <CheckSquare className="w-4 h-4 text-blue-600" />
                  <span>Core Project Objectives</span>
                </h3>
                <ul className="space-y-2">
                  {overview.objectives.map((obj, i) => (
                    <li key={i} className="text-xs sm:text-sm text-gray-600 flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-mono uppercase tracking-wider text-gray-900 font-semibold mb-3 flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-emerald-600" />
                  <span>Working Principle & Physics</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {overview.workingPrinciple}
                </p>
                <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200 text-xs text-gray-500 font-mono">
                  Scope: {overview.scope}
                </div>
              </div>
            </div>

            {/* Technology Stack Grid */}
            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold mb-4">
                Full-Stack Hardware & Software Technologies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {overview.technologies.map((tech) => (
                  <div key={tech.name} className="p-3 bg-gray-50 border border-gray-200/80 rounded-lg">
                    <span className="text-[10px] font-mono text-blue-600 uppercase tracking-wider font-semibold block">
                      {tech.category}
                    </span>
                    <span className="text-xs font-semibold text-gray-900 mt-1 block">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 03: Teams & Roles Responsibility Matrix
           ========================================================================= */}
        <section id="teams-roles" className="scroll-mt-24">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 bg-blue-100 text-blue-800 rounded">
              SECTION 03
            </span>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Evaluation Rubric 03</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Teams & Roles Responsibility Matrix</h2>
          <p className="text-sm text-gray-600 mt-1 mb-8 max-w-2xl">
            Subsystem breakdown, hardware/software distribution, and individual validation accountability.
          </p>

          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-xs">
            <table className="min-w-full divide-y divide-gray-200 text-left text-xs">
              <thead className="bg-gray-50 font-mono text-gray-600 uppercase text-[11px]">
                <tr>
                  <th className="px-5 py-3.5 font-semibold">Subsystem Domain</th>
                  <th className="px-4 py-3.5 font-semibold">Lead & Contributors</th>
                  <th className="px-4 py-3.5 font-semibold">Hardware Engineering Tasks</th>
                  <th className="px-4 py-3.5 font-semibold">Software & Algorithm Tasks</th>
                  <th className="px-4 py-3.5 font-semibold">Validation Method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {responsibilityMatrix.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition">
                    <td className="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap">
                      {item.subsystem}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="font-semibold text-blue-600 block">{item.lead}</span>
                      <span className="text-[11px] text-gray-500">{item.members.join(', ')}</span>
                    </td>
                    <td className="px-4 py-4 text-gray-600 max-w-xs">
                      {item.hardwareTasks}
                    </td>
                    <td className="px-4 py-4 text-gray-600 max-w-xs">
                      {item.softwareTasks}
                    </td>
                    <td className="px-4 py-4 text-gray-500 font-mono text-[11px]">
                      {item.validationMethod}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* =========================================================================
            SECTION 04: Problem & Need
           ========================================================================= */}
        <section id="problem-need" className="scroll-mt-24">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 bg-blue-100 text-blue-800 rounded">
              SECTION 04
            </span>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Evaluation Rubric 04</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Problem & Need from Customer Perspective</h2>
          <p className="text-sm text-gray-600 mt-1 mb-8 max-w-2xl">
            Real-world road safety hazards, economic impact, stakeholder pain points, and current solution deficiencies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problemAndNeed.existingProblems.map((prob, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-lg bg-red-50 text-red-600 border border-red-100">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-base text-gray-900">{prob.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {prob.description}
                </p>
              </div>
            ))}
          </div>

          {/* Stakeholders & Deficiencies */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs">
              <h3 className="font-bold text-sm text-gray-900 mb-4 font-mono uppercase tracking-wider">
                Target Stakeholders & User Benefits
              </h3>
              <div className="space-y-3">
                {problemAndNeed.targetUsers.map((u, i) => (
                  <div key={i} className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <span className="text-xs font-bold text-blue-600 block">{u.user}</span>
                    <span className="text-xs text-gray-600 mt-0.5 block">{u.benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs">
              <h3 className="font-bold text-sm text-gray-900 mb-4 font-mono uppercase tracking-wider">
                Limitations of Existing Market Solutions
              </h3>
              <div className="space-y-3">
                {problemAndNeed.limitationsOfExisting.map((lim, i) => (
                  <div key={i} className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <span className="text-xs font-bold text-gray-900 block">{lim.approach}</span>
                    <span className="text-xs text-red-600 mt-0.5 block">Deficiency: {lim.limitation}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 05 & 06: Concept Choices & Design Trade-offs
           ========================================================================= */}
        <section id="concept-design-choices" className="scroll-mt-24">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 bg-blue-100 text-blue-800 rounded">
              SECTIONS 05 & 06
            </span>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Evaluation Rubric 05 & 06</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Concept Choices & Engineering Trade-Offs</h2>
          <p className="text-sm text-gray-600 mt-1 mb-8 max-w-2xl">
            Systematic evaluation of sensor alternatives, communication protocols, microcontrollers, and architectural trade-offs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {conceptChoices.map((concept, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold block mb-3">
                    Domain: {concept.domain}
                  </span>
                  <div className="space-y-3">
                    {concept.options.map((opt, idx) => (
                      <div 
                        key={idx} 
                        className={`p-3 rounded-lg border text-xs ${
                          opt.selected 
                            ? 'bg-blue-50/70 border-blue-200 text-gray-900' 
                            : 'bg-gray-50/50 border-gray-200 text-gray-500'
                        }`}
                      >
                        <div className="flex items-center justify-between font-semibold mb-1">
                          <span>{opt.name}</span>
                          {opt.selected ? (
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-600 text-white font-bold">
                              SELECTED
                            </span>
                          ) : (
                            <span className="text-[10px] font-mono text-gray-400">Rejected</span>
                          )}
                        </div>
                        <p className="text-[11px] leading-relaxed text-gray-600">
                          {opt.reason}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Section 06: Design Comparison Matrix */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs">
            <h3 className="font-bold text-sm text-gray-900 mb-4 font-mono uppercase tracking-wider">
              Section 06: Architectural Trade-Off Analysis Matrix
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-left text-xs">
                <thead className="bg-gray-50 font-mono text-gray-600 text-[11px] uppercase">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Engineering Criterion</th>
                    <th className="px-4 py-3 font-semibold">Rejected Alternative</th>
                    <th className="px-4 py-3 font-semibold">Selected Design</th>
                    <th className="px-4 py-3 font-semibold">Engineering Advantages</th>
                    <th className="px-4 py-3 font-semibold">Trade-Off & Mitigation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {designChoices.comparisons.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50">
                      <td className="px-4 py-3.5 font-semibold text-gray-900 whitespace-nowrap">
                        {item.criterion}
                      </td>
                      <td className="px-4 py-3.5 text-gray-500">
                        {item.optionA}
                      </td>
                      <td className="px-4 py-3.5 font-bold text-blue-600">
                        {item.optionB}
                      </td>
                      <td className="px-4 py-3.5 text-gray-700">
                        {item.advantages}
                      </td>
                      <td className="px-4 py-3.5 text-gray-500 italic">
                        {item.disadvantages}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 07: Review Decisions Timeline
           ========================================================================= */}
        <section id="review-decisions" className="scroll-mt-24">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 bg-blue-100 text-blue-800 rounded">
              SECTION 07
            </span>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Evaluation Rubric 07</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Review Decisions & Engineering Evolutions</h2>
          <p className="text-sm text-gray-600 mt-1 mb-8 max-w-2xl">
            Chronological log of faculty feedback, audit reviews, architectural changes, and design outcomes.
          </p>

          <div className="relative border-l-2 border-blue-200 ml-4 sm:ml-6 pl-6 space-y-8">
            {reviewDecisions.map((rev, i) => (
              <div key={i} className="relative group">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white border-2 border-blue-600 group-hover:scale-125 transition-transform"></div>
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 mb-2 border-b border-gray-100 gap-1">
                    <h3 className="font-bold text-sm text-gray-900">{rev.phase}</h3>
                    <span className="text-xs font-mono text-blue-600 font-semibold">{rev.date}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3 text-xs">
                    <div>
                      <span className="font-semibold text-gray-500 block uppercase tracking-wider text-[10px] mb-1">
                        Faculty Feedback
                      </span>
                      <p className="text-gray-700">{rev.feedback}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-600 block uppercase tracking-wider text-[10px] mb-1">
                        Action Taken
                      </span>
                      <p className="text-gray-700">{rev.actionTaken}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-emerald-600 block uppercase tracking-wider text-[10px] mb-1">
                        Engineering Outcome
                      </span>
                      <p className="text-gray-700">{rev.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 08: Functional Requirements
           ========================================================================= */}
        <section id="requirements" className="scroll-mt-24">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 bg-blue-100 text-blue-800 rounded">
              SECTION 08
            </span>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Evaluation Rubric 08</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Functional Engineering Requirements</h2>
          <p className="text-sm text-gray-600 mt-1 mb-8 max-w-2xl">
            Structured system requirements catalog with formal input, processing, output, and response time criteria.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {functionalRequirements.map((fr) => (
              <div key={fr.id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 bg-blue-50 text-blue-700 rounded border border-blue-200">
                    {fr.id}
                  </span>
                  <h3 className="font-bold text-sm text-gray-900">{fr.title}</h3>
                </div>

                <div className="mt-4 space-y-3 text-xs">
                  <div>
                    <span className="font-mono text-gray-400 block uppercase text-[10px]">Inputs</span>
                    <p className="text-gray-700 mt-0.5">{fr.inputs}</p>
                  </div>
                  <div>
                    <span className="font-mono text-gray-400 block uppercase text-[10px]">Processing & Logic</span>
                    <p className="text-gray-700 mt-0.5 font-mono text-[11px] bg-gray-50 p-2 rounded border border-gray-100">
                      {fr.processing}
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-gray-400 block uppercase text-[10px]">Outputs</span>
                    <p className="text-gray-700 mt-0.5">{fr.outputs}</p>
                  </div>
                  <div className="pt-2 border-t border-gray-100 text-emerald-700 font-medium">
                    Response: {fr.systemResponse}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 09: Architecture & Subsystems (Interactive Diagram)
           ========================================================================= */}
        <section id="architecture" className="scroll-mt-24">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 bg-blue-100 text-blue-800 rounded">
              SECTION 09
            </span>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Evaluation Rubric 09</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">System Architecture & Interactive Subsystems</h2>
          <p className="text-sm text-gray-600 mt-1 mb-8 max-w-2xl">
            Modular multi-tier architecture spanning Edge Sensing, RF Gateway, Cloud Ingestion, and Web Telemetry.
          </p>

          <ArchitectureDiagram />
        </section>

        {/* =========================================================================
            SECTION 10: Design & Calculations (Theoretical Formulations)
           ========================================================================= */}
        <section id="calculations" className="scroll-mt-24">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 bg-blue-100 text-blue-800 rounded">
              SECTION 10
            </span>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Evaluation Rubric 10</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Design Calculations & Mathematical Formulations</h2>
          <p className="text-sm text-gray-600 mt-1 mb-8 max-w-2xl">
            Step-by-step mathematical proofs for node power budgets, RF path loss link calculations, and quarter-car suspension dynamics.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Calculation Selector Tabs */}
            <div className="lg:col-span-4 space-y-2">
              {calculations.map((calc) => (
                <button
                  key={calc.id}
                  onClick={() => setActiveCalculationId(calc.id)}
                  className={`w-full text-left p-4 rounded-xl border transition ${
                    activeCalculationId === calc.id
                      ? 'bg-blue-50/80 border-blue-600 shadow-xs'
                      : 'bg-white border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="text-[10px] font-mono text-blue-600 font-semibold uppercase block">
                    {calc.id}
                  </span>
                  <h4 className="font-bold text-sm text-gray-900 mt-1">
                    {calc.title}
                  </h4>
                  <span className="text-xs text-gray-500 font-mono mt-1 block">
                    Units: {calc.units}
                  </span>
                </button>
              ))}
            </div>

            {/* Step-by-Step Calculation Canvas */}
            <div className="lg:col-span-8 bg-white border border-gray-200 rounded-xl p-6 shadow-xs">
              <div className="pb-4 border-b border-gray-100">
                <span className="text-xs font-mono text-blue-600 uppercase tracking-wider font-semibold">
                  {selectedCalc.id} • Mathematical Verification
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-1">
                  {selectedCalc.title}
                </h3>
                <div className="mt-3 p-3 bg-gray-50 rounded-lg border border-gray-200 font-mono text-sm text-blue-700">
                  Formula: {selectedCalc.formula}
                </div>
              </div>

              {/* Parameters */}
              <div className="my-5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold mb-2">
                  Given Engineering Parameters
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono bg-gray-50/70 p-3 rounded-lg border border-gray-100">
                  {Object.entries(selectedCalc.parameters).map(([key, val]) => (
                    <div key={key}>
                      <span className="text-gray-500">{key}: </span>
                      <span className="text-gray-900 font-medium">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step-by-step */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold mb-2">
                  Derivation & Step-by-Step Solution
                </h4>
                <div className="space-y-2">
                  {selectedCalc.stepByStep.map((step, idx) => (
                    <div key={idx} className="p-2.5 rounded bg-white border border-gray-200 text-xs text-gray-700 font-mono">
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              {/* Final Result Banner */}
              <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800">
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold block">
                  Final Validated Result
                </span>
                <span className="text-sm font-bold font-mono mt-0.5 block">
                  {selectedCalc.result}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 11: Build & Verification Test Cases
           ========================================================================= */}
        <section id="verification" className="scroll-mt-24">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 bg-blue-100 text-blue-800 rounded">
              SECTION 11
            </span>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Evaluation Rubric 11</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Build, Integration & Verification Test Suite</h2>
          <p className="text-sm text-gray-600 mt-1 mb-8 max-w-2xl">
            Formal hardware and firmware test-case execution record verifying end-to-end specifications against acceptance criteria.
          </p>

          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-xs">
            <table className="min-w-full divide-y divide-gray-200 text-left text-xs">
              <thead className="bg-gray-50 font-mono text-gray-600 text-[11px] uppercase">
                <tr>
                  <th className="px-4 py-3.5 font-semibold">Test ID</th>
                  <th className="px-4 py-3.5 font-semibold">Subsystem</th>
                  <th className="px-5 py-3.5 font-semibold">Test Case Description</th>
                  <th className="px-4 py-3.5 font-semibold">Expected Standard</th>
                  <th className="px-4 py-3.5 font-semibold">Measured Outcome</th>
                  <th className="px-3 py-3.5 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {verificationTestCases.map((tc) => (
                  <tr key={tc.id} className="hover:bg-gray-50/50">
                    <td className="px-4 py-3.5 font-mono font-bold text-blue-600 whitespace-nowrap">
                      {tc.id}
                    </td>
                    <td className="px-4 py-3.5 font-medium text-gray-900 whitespace-nowrap">
                      {tc.subsystem}
                    </td>
                    <td className="px-5 py-3.5 text-gray-600 max-w-xs">
                      {tc.description}
                    </td>
                    <td className="px-4 py-3.5 text-gray-600 font-mono text-[11px]">
                      {tc.expected}
                    </td>
                    <td className="px-4 py-3.5 text-gray-700 font-mono text-[11px]">
                      {tc.actual}
                    </td>
                    <td className="px-3 py-3.5 whitespace-nowrap">
                      <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{tc.status}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* =========================================================================
            SECTION 12: Predicted vs Calculated vs Measured
           ========================================================================= */}
        <section id="predicted-vs-calculated" className="scroll-mt-24">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 bg-blue-100 text-blue-800 rounded">
              SECTION 12
            </span>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Evaluation Rubric 12</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Predicted vs. Calculated vs. Measured Validation</h2>
          <p className="text-sm text-gray-600 mt-1 mb-8 max-w-2xl">
            Comparison between simulation models, analytical formulas, and physical hardware lab measurements with percentage error explanations.
          </p>

          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-xs">
            <table className="min-w-full divide-y divide-gray-200 text-left text-xs">
              <thead className="bg-gray-50 font-mono text-gray-600 text-[11px] uppercase">
                <tr>
                  <th className="px-4 py-3.5 font-semibold">Parameter</th>
                  <th className="px-4 py-3.5 font-semibold">Predicted (Sim)</th>
                  <th className="px-4 py-3.5 font-semibold">Calculated (Theory)</th>
                  <th className="px-4 py-3.5 font-semibold">Measured (Bench)</th>
                  <th className="px-3 py-3.5 font-semibold">Error (%)</th>
                  <th className="px-5 py-3.5 font-semibold">Engineering Variance Justification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {empiricalComparison.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50/50">
                    <td className="px-4 py-3.5 font-semibold text-gray-900 whitespace-nowrap">
                      {row.parameter}
                    </td>
                    <td className="px-4 py-3.5 font-mono text-gray-500">
                      {row.predicted}
                    </td>
                    <td className="px-4 py-3.5 font-mono text-blue-600 font-semibold">
                      {row.calculated}
                    </td>
                    <td className="px-4 py-3.5 font-mono text-emerald-600 font-bold">
                      {row.measured}
                    </td>
                    <td className="px-3 py-3.5 font-mono font-bold text-gray-900 whitespace-nowrap">
                      {row.error}
                    </td>
                    <td className="px-5 py-3.5 text-gray-600 text-[11px]">
                      {row.explanation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* =========================================================================
            SECTION 13: Failures & Fixes
           ========================================================================= */}
        <section id="failures-fixes" className="scroll-mt-24">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 bg-blue-100 text-blue-800 rounded">
              SECTION 13
            </span>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Evaluation Rubric 13</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Technical Failures, Root Causes & Engineering Fixes</h2>
          <p className="text-sm text-gray-600 mt-1 mb-8 max-w-2xl">
            Critical debugging records documenting hardware failures, RF signal attenuations, firmware resets, and resolutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {failuresAndFixes.map((item) => (
              <div key={item.id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <span className="text-xs font-mono font-bold text-red-600">
                      {item.id} • {item.category}
                    </span>
                    <Wrench className="w-4 h-4 text-gray-400" />
                  </div>

                  <h3 className="font-bold text-sm text-gray-900 mt-3">
                    Problem: {item.issue}
                  </h3>

                  <div className="mt-4 space-y-2.5 text-xs">
                    <div className="bg-red-50/50 p-2.5 rounded-lg border border-red-100 text-red-900">
                      <span className="font-mono text-[10px] uppercase font-bold block mb-0.5">Root Cause:</span>
                      {item.rootCause}
                    </div>
                    <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-700">
                      <span className="font-mono text-[10px] uppercase font-bold text-gray-500 block mb-0.5">Troubleshooting:</span>
                      {item.troubleshooting}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 bg-emerald-50/60 p-3 rounded-lg border border-emerald-100 text-emerald-900 text-xs">
                  <span className="font-mono text-[10px] uppercase font-bold block mb-0.5">Engineering Solution Implemented:</span>
                  {item.engineeringFix}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 14: Engineering Notebook
           ========================================================================= */}
        <section id="journal" className="scroll-mt-24">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 bg-blue-100 text-blue-800 rounded">
              SECTION 14
            </span>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Evaluation Rubric 14</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Engineering Notebook & Lab Journal</h2>
          <p className="text-sm text-gray-600 mt-1 mb-8 max-w-2xl">
            Chronological field and laboratory notebook entries recording experimental breakthroughs, calibrations, and observations.
          </p>

          <div className="space-y-4">
            {engineeringNotebook.map((entry) => (
              <div key={entry.entryNumber} className="bg-white border border-gray-200 rounded-xl p-5 shadow-xs flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="md:w-48 shrink-0">
                  <span className="text-xs font-mono font-bold text-blue-600 block">
                    {entry.entryNumber}
                  </span>
                  <span className="text-xs text-gray-500 font-mono block mt-0.5">
                    {entry.date}
                  </span>
                  <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                    Author: {entry.author}
                  </span>
                </div>
                <div className="grow">
                  <h3 className="font-bold text-sm text-gray-900">{entry.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed font-mono">
                    {entry.notes}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 15: Review Record
           ========================================================================= */}
        <section id="review-record" className="scroll-mt-24">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 bg-blue-100 text-blue-800 rounded">
              SECTION 15
            </span>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Evaluation Rubric 15</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Department Evaluation & Review Record</h2>
          <p className="text-sm text-gray-600 mt-1 mb-8 max-w-2xl">
            Formal milestone defenses with external and internal faculty evaluation panels.
          </p>

          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-xs">
            <table className="min-w-full divide-y divide-gray-200 text-left text-xs">
              <thead className="bg-gray-50 font-mono text-gray-600 text-[11px] uppercase">
                <tr>
                  <th className="px-4 py-3.5 font-semibold">Review ID</th>
                  <th className="px-4 py-3.5 font-semibold">Stage & Milestone</th>
                  <th className="px-4 py-3.5 font-semibold">Date</th>
                  <th className="px-4 py-3.5 font-semibold">Review Committee</th>
                  <th className="px-5 py-3.5 font-semibold">Panel Feedback & Critiques</th>
                  <th className="px-3 py-3.5 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {reviewRecord.map((rev) => (
                  <tr key={rev.reviewId} className="hover:bg-gray-50/50">
                    <td className="px-4 py-3.5 font-mono font-bold text-blue-600 whitespace-nowrap">
                      {rev.reviewId}
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-gray-900 whitespace-nowrap">
                      {rev.stage}
                    </td>
                    <td className="px-4 py-3.5 font-mono text-gray-500 whitespace-nowrap">
                      {rev.date}
                    </td>
                    <td className="px-4 py-3.5 text-gray-600">
                      {rev.panel}
                    </td>
                    <td className="px-5 py-3.5 text-gray-700">
                      {rev.feedback}
                    </td>
                    <td className="px-3 py-3.5 whitespace-nowrap">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
                        {rev.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* =========================================================================
            SECTION 16: Reflections & Forward Links
           ========================================================================= */}
        <section id="reflections" className="scroll-mt-24">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 bg-blue-100 text-blue-800 rounded">
              SECTION 16
            </span>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Evaluation Rubric 16</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Reflections & Forward Links</h2>
          <p className="text-sm text-gray-600 mt-1 mb-8 max-w-2xl">
            Technical retrospective, hardware limitations, teamwork learnings, and research roadmap for municipal expansion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs">
              <h3 className="font-bold text-sm text-gray-900 font-mono uppercase tracking-wider mb-3 flex items-center space-x-2">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                <span>Technical Learnings & Skills Mastered</span>
              </h3>
              <ul className="space-y-2">
                {reflections.technicalLearnings.map((item, i) => (
                  <li key={i} className="text-xs text-gray-600 flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-gray-500 italic">
                Teamwork: {reflections.teamworkExperience}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-sm text-gray-900 font-mono uppercase tracking-wider mb-3 flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-red-500" />
                  <span>Acknowledged System Limitations</span>
                </h3>
                <ul className="space-y-2">
                  {reflections.systemLimitations.map((lim, i) => (
                    <li key={i} className="text-xs text-gray-600 flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0"></span>
                      <span>{lim}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-600 font-bold mb-2">
                  Future Research & Production Directions
                </h4>
                <ul className="space-y-1.5">
                  {reflections.futureWork.map((fw, i) => (
                    <li key={i} className="text-xs text-gray-700 flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                      <span>{fw}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 17: Final Demonstration (Simulator & Achievements)
           ========================================================================= */}
        <section id="demo" className="scroll-mt-24">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 bg-blue-100 text-blue-800 rounded">
              SECTION 17
            </span>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Evaluation Rubric 17</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Final System Demonstration</h2>
          <p className="text-sm text-gray-600 mt-1 mb-8 max-w-2xl">
            Live interactive telemetry simulation, edge classification engine, and verified performance benchmarks.
          </p>

          <LiveTelemetrySimulator />

          {/* Workflow Sequence Steps */}
          <div className="mt-8 bg-white border border-gray-200 rounded-xl p-6 shadow-xs">
            <h3 className="font-bold text-sm text-gray-900 font-mono uppercase tracking-wider mb-4">
              Autonomous Sensing to Municipal Dispatch Workflow
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {finalDemo.liveSimulationStages.map((stg) => (
                <div key={stg.step} className="p-3 bg-gray-50 border border-gray-200 rounded-lg flex flex-col justify-between">
                  <div>
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-mono text-xs font-bold flex items-center justify-center mb-2">
                      {stg.step}
                    </span>
                    <h4 className="text-xs font-bold text-gray-900 mb-1">{stg.title}</h4>
                    <p className="text-[11px] text-gray-600 leading-relaxed">{stg.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 18: Project Files & References
           ========================================================================= */}
        <section id="resources" className="scroll-mt-24">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 bg-blue-100 text-blue-800 rounded">
              SECTION 18
            </span>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Evaluation Rubric 18</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Project Files, Datasheets & Academic References</h2>
          <p className="text-sm text-gray-600 mt-1 mb-8 max-w-2xl">
            Engineering documentation, KiCAD schematics, official component datasheets, and academic literature citations.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            {resourceCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveResourceCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition ${
                  activeResourceCategory === cat
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resources
              .filter(r => activeResourceCategory === 'ALL' || r.category === activeResourceCategory)
              .map((res, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-blue-600 uppercase font-semibold">
                        {res.category}
                      </span>
                      {res.fileSize && (
                        <span className="text-[10px] font-mono text-gray-400">
                          {res.fileSize}
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-sm text-gray-900">{res.title}</h3>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">{res.description}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                    {res.url ? (
                      <a
                        href={res.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center space-x-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition"
                      >
                        <span>{res.actionText}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button
                        onClick={() => alert(`Starting download simulation for: ${res.fileName}`)}
                        className="inline-flex items-center space-x-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>{res.actionText} ({res.fileName})</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
          </div>

          {/* Academic Citations */}
          <div className="mt-10 bg-white border border-gray-200 rounded-xl p-6 shadow-xs">
            <h3 className="font-bold text-sm text-gray-900 font-mono uppercase tracking-wider mb-4">
              Academic Literature & IEEE Bibliography
            </h3>
            <div className="space-y-3">
              {academicReferences.map((ref) => (
                <div key={ref.id} className="text-xs text-gray-600 font-mono flex items-start space-x-3 p-2 rounded hover:bg-gray-50">
                  <span className="font-bold text-blue-600 shrink-0">{ref.id}</span>
                  <span>{ref.citation}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-sm text-gray-900 block leading-tight">
                SMART ROAD MONITORING SYSTEM
              </span>
              <span className="text-xs text-gray-500">
                Engineering Evaluation Portfolio • {projectMeta.academicYear}
              </span>
            </div>
          </div>

          <div className="text-xs text-gray-500 text-center md:text-right">
            <div>Department of Electronics & Communication / Computer Science</div>
            <div className="mt-0.5">Built with React, Vite, Tailwind CSS & Framer Motion</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
