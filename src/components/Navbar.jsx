import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Github, ExternalLink, Activity, Sparkles, ChevronRight } from 'lucide-react';

export const navItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'demo', label: 'Live Simulator' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'calculations', label: 'Dynamics Lab' },
  { id: 'rubrics', label: '18 Rubrics' },
  { id: 'team', label: 'Team' },
  { id: 'resources', label: 'Resources' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(progress);

      // Active section calculation
      const sectionElements = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 160;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-linear-to-r from-blue-500 via-cyan-400 to-indigo-500 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Glass Navbar */}
      <header className={`fixed top-3 inset-x-0 mx-auto max-w-7xl px-4 sm:px-6 z-40 transition-all duration-300`}>
        <div className={`rounded-2xl transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0E1422]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.45)]' 
            : 'bg-[#0E1422]/50 backdrop-blur-md border border-white/5'
        }`}>
          <div className="flex items-center justify-between h-14 px-4 sm:px-6">
            
            {/* Logo */}
            <div 
              onClick={() => scrollTo('overview')} 
              className="flex items-center space-x-2.5 cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-glow-blue group-hover:scale-105 transition-transform">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-xs tracking-tight text-white block leading-none font-mono">
                  SMART ROAD
                </span>
                <span className="text-[10px] font-mono text-cyan-400 tracking-wider block mt-0.5">
                  MONITORING SYSTEM
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 bg-[#141B2A]/60 px-2 py-1 rounded-xl border border-white/5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 relative ${
                      isActive
                        ? 'text-cyan-400 font-semibold bg-white/10 shadow-xs'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-cyan-400 rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href="https://github.com/NONTITIES/Miniproject"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:text-white transition"
              >
                <Github className="w-3.5 h-3.5 text-slate-400" />
                <span>GitHub</span>
              </a>
              <button
                onClick={() => scrollTo('demo')}
                className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-linear-to-r from-blue-600 to-cyan-600 rounded-xl hover:from-blue-500 hover:to-cyan-500 transition shadow-glow-cyan"
              >
                <Activity className="w-3.5 h-3.5" />
                <span>Test Sim</span>
              </button>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-3 bg-[#0E1422]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium transition ${
                  activeSection === item.id 
                    ? 'text-cyan-400 bg-white/10 font-semibold' 
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 border-t border-white/10 flex gap-2">
              <a
                href="https://github.com/NONTITIES/Miniproject"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-2 w-full py-2 text-xs font-medium text-slate-300 border border-white/10 rounded-xl bg-white/5"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Code</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
