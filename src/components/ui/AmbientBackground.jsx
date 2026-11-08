import React from 'react';

export function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Midnight Base */}
      <div className="absolute inset-0 bg-[#080B12]" />

      {/* Grid Pattern with subtle radial mask */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-40"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)',
        }}
      />

      {/* Ambient Moving Glow Orbs */}
      <div className="absolute -top-[10%] left-[20%] w-[550px] h-[550px] bg-blue-600/12 rounded-full blur-[140px] animate-pulse-slow" />
      <div className="absolute top-[35%] -right-[5%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '4s' }} />

      {/* Subtle Horizontal Scanning Horizon Line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/20 to-transparent" />
    </div>
  );
}
