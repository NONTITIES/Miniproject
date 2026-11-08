import React, { useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { cn } from '../../lib/utils';

export function TiltCard({
  children,
  className,
  tiltStrength = 12,
  spotlightColor = 'rgba(112, 242, 207, 0.14)',
  ...props
}) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useSpring(0, { stiffness: 300, damping: 25 });
  const mouseY = useSpring(0, { stiffness: 300, damping: 25 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [tiltStrength, -tiltStrength]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-tiltStrength, tiltStrength]);

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={cn(
        'relative rounded-2xl p-6 transition-all duration-300',
        'bg-[#15182A]/70 border border-white/10 backdrop-blur-xl',
        'shadow-[0_18px_55px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.06)]',
        'hover:border-[#70F2CF]/45 hover:shadow-[0_12px_40px_0_rgba(112,242,207,0.16)]',
        className
      )}
      {...props}
    >
      {/* Radial Spotlight layer */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(350px circle at ${cursorPos.x}px ${cursorPos.y}px, ${spotlightColor}, transparent 75%)`,
          }}
        />
      )}

      {/* Card Content with subtle 3D pop */}
      <div className="relative z-10" style={{ transform: 'translateZ(10px)' }}>
        {children}
      </div>
    </motion.div>
  );
}
