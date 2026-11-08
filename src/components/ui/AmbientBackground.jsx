import React from 'react';

export function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% -10%, #1c1b38 0%, #0b0d19 42%, #080a12 78%)' }} />
      <div className="absolute inset-0 bg-grid-pattern opacity-50" style={{ maskImage: 'radial-gradient(ellipse 82% 65% at 50% 28%, black 30%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 82% 65% at 50% 28%, black 30%, transparent 100%)' }} />
      <div className="ambient-orb absolute -top-[14%] left-[8%] w-[620px] h-[620px] rounded-full blur-[150px]" style={{ background: 'rgba(112,242,207,.11)' }} />
      <div className="ambient-orb absolute top-[22%] -right-[12%] w-[700px] h-[700px] rounded-full blur-[170px]" style={{ background: 'rgba(139,110,255,.14)', animationDelay: '-6s' }} />
      <div className="ambient-orb absolute bottom-[-12%] left-[18%] w-[560px] h-[560px] rounded-full blur-[160px]" style={{ background: 'rgba(255,143,156,.055)', animationDelay: '-11s' }} />
      <div className="absolute inset-x-0 top-0 h-40 ambient-scan" style={{ background: 'linear-gradient(180deg, transparent, rgba(112,242,207,.035), transparent)' }} />
      <div className="absolute inset-x-0 top-[48%] h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(112,242,207,.2), rgba(167,139,250,.16), transparent)' }} />
      <div className="absolute inset-0 opacity-[.12]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,.5) .6px, transparent .6px)', backgroundSize: '5px 5px' }} />
    </div>
  );
}
