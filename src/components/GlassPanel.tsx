import React from 'react';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  active?: boolean;
  accentBorder?: 'pink' | 'blue' | 'none';
  onClick?: () => void;
}

export const GlassPanel: React.FC<GlassPanelProps> = ({
  children,
  className = '',
  hoverEffect = false,
  active = false,
  accentBorder = 'none',
  onClick
}) => {
  let borderClasses = 'border-white/10';
  if (active || accentBorder === 'pink') {
    borderClasses = 'border-royal-pink/60 shadow-pink-glow';
  } else if (accentBorder === 'blue') {
    borderClasses = 'border-royal-blue-light/70';
  }

  const hoverClasses = hoverEffect ? 'glass-panel-hover cursor-pointer' : '';

  return (
    <div
      onClick={onClick}
      className={`glass-panel rounded-2xl border ${borderClasses} ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
};
