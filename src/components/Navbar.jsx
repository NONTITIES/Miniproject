import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Github, ExternalLink, ChevronDown } from 'lucide-react';

export const navItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'team', label: 'Team' },
  { id: 'problem-need', label: 'Problem & Research' },
  { id: 'architecture', label: 'Architecture & Design' },
  { id: 'calculations', label: 'Calculations & Theory' },
  { id: 'verification', label: 'Verification & Testing' },
  { id: 'journal', label: 'Journal & Records' },
  { id: 'demo', label: 'Demonstration' },
  { id: 'resources', label: 'Resources' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionElements = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 140;

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
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm' 
        : 'bg-[#FAFAFA]/90 backdrop-blur-sm border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Project Title */}
          <div 
            onClick={() => scrollTo('overview')} 
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm group-hover:bg-blue-700 transition">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <span className="font-semibold text-sm tracking-tight text-gray-900 block leading-tight">
                SMART ROAD MONITORING
              </span>
              <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider block">
                IoT Engineering Portfolio
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    isActive
                      ? 'text-blue-600 bg-blue-50/80 font-semibold'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Links */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://github.com/NONTITIES/Miniproject"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:text-gray-900 transition shadow-xs"
            >
              <Github className="w-3.5 h-3.5 text-gray-600" />
              <span>GitHub</span>
            </a>
            <button
              onClick={() => scrollTo('demo')}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition shadow-xs"
            >
              <span>Live Sim</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-1 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition ${
                activeSection === item.id 
                  ? 'text-blue-600 bg-blue-50 font-semibold' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
            <a
              href="https://github.com/NONTITIES/Miniproject"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center space-x-2 w-full py-2 text-xs font-medium text-gray-700 border border-gray-300 rounded-md bg-white"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Source Code</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
