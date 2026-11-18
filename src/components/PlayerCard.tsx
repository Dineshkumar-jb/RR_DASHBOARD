import React from 'react';
import { Player } from '../data/players';
import { GlassPanel } from './GlassPanel';
import { ChevronRight, Award, Zap, ShieldAlert } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface PlayerCardProps {
  player: Player;
  onSelect: (player: Player) => void;
  isSelected?: boolean;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({
  player,
  onSelect,
  isSelected = false
}) => {
  const isBatter = player.role === 'batter';
  const isTopThree = player.rank <= 3;

  return (
    <GlassPanel
      hoverEffect
      active={isSelected}
      onClick={() => onSelect(player)}
      className="p-5 flex flex-col justify-between group transition-all"
    >
      <div>
        {/* Top Header Row: Rank, Photo, Name */}
        <div className="flex items-start gap-4 mb-4">
          {/* Authentic Real Player Photo */}
          <div className="relative w-16 h-20 rounded-xl overflow-hidden bg-canvas-surface border border-white/10 shrink-0 group-hover:border-royal-pink/50 transition-colors">
            <img
              src={player.image}
              alt={player.name}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform"
              onError={(e) => {
                (e.target as HTMLImageElement).src = getAssetUrl('/assets/backgrounds/stadium_dark.jpg');
              }}
            />
            {/* Rank overlay on photo */}
            <div
              className={`absolute top-1 left-1 px-1.5 py-0.5 rounded text-[10px] font-mono font-black ${
                isTopThree
                  ? 'bg-royal-pink text-white shadow-pink-glow'
                  : 'bg-canvas/80 text-text-secondary border border-white/10'
              }`}
            >
              #{player.rank}
            </div>
          </div>

          {/* Name & Role */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1 mb-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-text-tertiary truncate">
                {player.confidenceTier} TIER
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-royal-gold">
                {player.auctionTier}
              </span>
            </div>

            <h3 className="text-base font-bold text-text-primary group-hover:text-royal-pink transition-colors truncate tracking-tight">
              {player.name}
            </h3>

            <div className="flex items-center gap-1.5 text-xs text-text-secondary font-mono mt-0.5">
              <span>{player.matches} Matches</span>
              <span>•</span>
              <span className="text-text-tertiary">{player.pressureBalls} Balls</span>
            </div>
          </div>
        </div>

        {/* PCAI Score Bar */}
        <div className="space-y-1.5 mb-4 p-2.5 rounded-xl bg-canvas-surface/60 border border-white/5">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-text-secondary font-medium">PCAI Score</span>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-black text-text-primary">{player.compositeScore}</span>
              <span className="text-[10px] text-text-tertiary">/ 100</span>
            </div>
          </div>
          {/* Micro score progress bar */}
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-sky-400 via-royal-pink to-pink-500 rounded-full"
              style={{ width: `${Math.min(100, (player.compositeScore / 100) * 100)}%` }}
            />
          </div>
          <div className="flex justify-between text-[9px] font-mono text-text-tertiary">
            <span>95% CI: [{player.confidenceInterval[0]} - {player.confidenceInterval[1]}]</span>
            <span className="text-emerald-400 font-semibold">Reliable</span>
          </div>
        </div>

        {/* 4-Stat Grid */}
        <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-3">
          {isBatter ? (
            <>
              <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                <div className="text-[9px] text-text-tertiary uppercase">Pressure SR</div>
                <div className="text-sm font-bold text-text-primary">{player.pressureSR}</div>
                <div className="text-[9px] text-emerald-400">+{player.srLiftPct}% Lift</div>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                <div className="text-[9px] text-text-tertiary uppercase">Boundary %</div>
                <div className="text-sm font-bold text-text-primary">{player.pressureBoundaryPct}%</div>
                <div className="text-[9px] text-text-tertiary">{player.pressureDotPct}% Dots</div>
              </div>
            </>
          ) : (
            <>
              <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                <div className="text-[9px] text-text-tertiary uppercase">Pressure Econ</div>
                <div className="text-sm font-bold text-text-primary">{player.pressureEconomy}</div>
                <div className="text-[9px] text-emerald-400">{player.economyImprovement} Under</div>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                <div className="text-[9px] text-text-tertiary uppercase">Dot %</div>
                <div className="text-sm font-bold text-text-primary">{player.pressureDotPct}%</div>
                <div className="text-[9px] text-sky-400">{player.pressureWickets} Wkts</div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Footer Directive Snippet */}
      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs text-text-secondary group-hover:text-text-primary">
        <span className="text-[11px] truncate max-w-[190px] font-sans">
          {player.keyStrengths[0] || player.rrTacticalFit}
        </span>
        <ChevronRight size={14} className="text-royal-pink group-hover:translate-x-1 transition-transform shrink-0" />
      </div>
    </GlassPanel>
  );
};
