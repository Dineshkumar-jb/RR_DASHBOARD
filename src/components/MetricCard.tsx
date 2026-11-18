import React from 'react';
import { GlassPanel } from './GlassPanel';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string | number;
  subValue?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendText?: string;
  icon?: LucideIcon;
  accent?: 'pink' | 'blue' | 'gold' | 'emerald';
  badge?: string;
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  subValue,
  trend,
  trendText,
  icon: Icon,
  accent = 'blue',
  badge,
  className = ''
}) => {
  const accentStripColor = {
    pink: 'bg-royal-pink',
    blue: 'bg-sky-400',
    gold: 'bg-royal-gold',
    emerald: 'bg-royal-emerald',
  }[accent];

  const iconColor = {
    pink: 'text-royal-pink bg-royal-pink/10',
    blue: 'text-sky-400 bg-sky-400/10',
    gold: 'text-royal-gold bg-royal-gold/10',
    emerald: 'text-royal-emerald bg-royal-emerald/10',
  }[accent];

  return (
    <GlassPanel className={`relative overflow-hidden p-5 flex flex-col justify-between ${className}`}>
      {/* Top micro accent strip */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] ${accentStripColor}`} />

      <div className="flex items-start justify-between mb-3">
        <span className="text-[11px] font-semibold tracking-wider text-text-secondary uppercase">
          {label}
        </span>
        <div className="flex items-center gap-1.5">
          {badge && (
            <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-text-tertiary">
              {badge}
            </span>
          )}
          {Icon && (
            <div className={`p-1.5 rounded-lg ${iconColor}`}>
              <Icon size={16} />
            </div>
          )}
        </div>
      </div>

      <div className="space-y-1">
        <div className="text-2xl lg:text-3xl font-extrabold text-text-primary tracking-tight tabular-nums font-mono">
          {value}
        </div>
        {(subValue || trendText) && (
          <div className="flex items-center gap-2 text-xs text-text-tertiary">
            {trendText && (
              <span
                className={`font-semibold flex items-center gap-0.5 ${
                  trend === 'up'
                    ? 'text-royal-emerald'
                    : trend === 'down'
                    ? 'text-royal-rose'
                    : 'text-text-secondary'
                }`}
              >
                {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '•'} {trendText}
              </span>
            )}
            {subValue && <span>{subValue}</span>}
          </div>
        )}
      </div>
    </GlassPanel>
  );
};
