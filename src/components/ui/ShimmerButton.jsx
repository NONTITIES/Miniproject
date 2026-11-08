import React from 'react';
import { cn } from '../../lib/utils';

export function ShimmerButton({
  children,
  className,
  shimmerColor = '#22D3EE',
  shimmerSize = '0.05em',
  borderRadius = '0.75rem',
  shimmerDuration = '3s',
  background = 'rgba(14, 21, 36, 0.9)',
  onClick,
  href,
  ...props
}) {
  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      onClick={onClick}
      style={{
        '--spread': '90deg',
        '--shimmer-color': shimmerColor,
        '--radius': borderRadius,
        '--speed': shimmerDuration,
        '--cut': shimmerSize,
        '--bg': background,
      }}
      className={cn(
        'group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-5 py-2.5 text-xs sm:text-sm font-medium text-white [background:var(--bg)] [border-radius:var(--radius)]',
        'border border-white/10 shadow-[0_0_20px_-5px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_-3px_rgba(34,211,238,0.5)]',
        'transform-gpu transition-all duration-300 active:translate-y-px hover:scale-[1.02]',
        className
      )}
      {...props}
    >
      {/* Perimeter Shimmer beam container */}
      <div
        className={cn(
          '-z-30 blur-[2px]',
          'absolute inset-0 overflow-visible [container-type:size]'
        )}
      >
        <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
          {/* Spark gradient rotating around border */}
          <div className="animate-spin-slow absolute inset-[-100%] w-auto [background:conic-gradient(from_0deg,transparent_0_340deg,var(--shimmer-color)_360deg)]" />
        </div>
      </div>

      {/* Backdrop overlay */}
      <div className="absolute inset-[1px] -z-20 rounded-[calc(var(--radius)-1px)] [background:var(--bg)] transition-colors group-hover:bg-[#162035]" />

      {/* Button Children */}
      <span className="relative z-10 flex items-center gap-2 font-medium tracking-wide">
        {children}
      </span>
    </Component>
  );
}
