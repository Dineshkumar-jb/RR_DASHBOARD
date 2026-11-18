import React from 'react';
import { Player } from '../data/players';
import { GlassPanel } from './GlassPanel';
import { Award, Zap, Shield, TrendingUp, Sparkles, ExternalLink } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface PlayerHeroProps {
  player: Player;
  onOpenDossier: (player: Player) => void;
}

export const PlayerHero: React.FC<PlayerHeroProps> = ({ player, onOpenDossier }) => {
  const isBatter = player.role === 'batter';

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-canvas-subtle p-6 lg:p-10 mb-8">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-royal-blue/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-royal-pink/15 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left: Player Visual Showcase (Inspired by Reference 1 & 2) */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-72 sm:w-80 h-96 rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-b from-canvas-surface to-canvas shadow-2xl group">
            <img
              src={player.image}
              alt={player.name}
              className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                // fallback to colored placeholder if image error
                (e.target as HTMLImageElement).src = getAssetUrl('/assets/backgrounds/stadium_dark.jpg');
              }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-transparent opacity-80" />

            {/* Rank Badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-canvas/80 backdrop-blur-md border border-white/15 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-royal-pink animate-ping" />
              <span className="text-xs font-mono font-black text-royal-pink">
                RANK #{player.rank}
              </span>
              <span className="text-[10px] font-mono text-text-tertiary uppercase">
                {isBatter ? 'BATTER' : 'BOWLER'}
              </span>
            </div>

            {/* Auction Valuation Pill */}
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-canvas-surface/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
              <div>
                <div className="text-[9px] font-mono uppercase tracking-wider text-text-tertiary">
                  IPL 2027 Projected Valuation
                </div>
                <div className="text-xs font-bold text-royal-gold font-mono">
                  {player.auctionPriceRange}
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-royal-gold/15 text-royal-gold border border-royal-gold/30 font-semibold">
                {player.auctionTier}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Oversized Typography & Floating Glass Performance Cards */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-royal-pink">
                {player.confidenceTier} CONFIDENCE TIER
              </span>
              <span className="text-text-tertiary">•</span>
              <span className="text-xs font-mono text-text-secondary">
                {player.matches} Matches Analyzed
              </span>
            </div>

            {/* Oversized Typography Name */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter uppercase leading-none">
              {player.name}
            </h2>

            <p className="text-sm font-medium text-text-secondary">
              {isBatter ? 'Primary Death-Overs Finisher & Boundary Catalyst' : 'Primary High-Leverage Suppressor & Death Enforcer'}
            </p>
          </div>

          {/* Floating Glass Performance Cards (Reference 1 Style) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {/* Metric 1: Composite Score */}
            <GlassPanel className="p-4 relative overflow-hidden border-royal-pink/40">
              <div className="text-[10px] font-mono uppercase text-text-tertiary mb-1">
                PCAI Composite Score
              </div>
              <div className="text-3xl font-black font-mono text-text-primary">
                {player.compositeScore}
              </div>
              <div className="text-[10px] font-mono text-royal-pink mt-1">
                CI: [{player.confidenceInterval[0]} - {player.confidenceInterval[1]}]
              </div>
            </GlassPanel>

            {/* Metric 2: Primary Output */}
            <GlassPanel className="p-4">
              <div className="text-[10px] font-mono uppercase text-text-tertiary mb-1">
                {isBatter ? 'Pressure Strike Rate' : 'Pressure Economy'}
              </div>
              <div className="text-3xl font-black font-mono text-text-primary">
                {isBatter ? player.pressureSR : player.pressureEconomy}
              </div>
              <div className="text-[10px] font-mono text-emerald-400 mt-1">
                {isBatter ? `+${player.srLiftPct}% Lift` : `${player.economyImprovement} Under Baseline`}
              </div>
            </GlassPanel>

            {/* Metric 3: Latent & Clutch Decomposition */}
            <GlassPanel className="p-4">
              <div className="text-[10px] font-mono uppercase text-text-tertiary mb-1">
                {isBatter ? 'Latent α / Clutch δ' : 'Latent β / Squeeze θ'}
              </div>
              <div className="text-2xl font-black font-mono text-text-primary">
                {isBatter ? `+${player.delta}` : `+${player.theta}`}
              </div>
              <div className="text-[10px] font-mono text-sky-400 mt-1">
                {isBatter ? `Peak Impact: ${player.peakImpact}` : `Suppression: ${player.peakSuppression}`}
              </div>
            </GlassPanel>
          </div>

          {/* Scouting Narrative Preview */}
          <div className="p-4 rounded-xl bg-canvas-surface/70 border border-white/5 space-y-2">
            <div className="text-[10px] font-mono uppercase font-bold text-royal-gold flex items-center gap-1.5">
              <Award size={13} />
              Rajasthan Royals Scouting Directive
            </div>
            <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
              {player.rrTacticalFit}
            </p>
          </div>

          {/* Action Row */}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => onOpenDossier(player)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-royal-pink text-white font-semibold text-xs shadow-pink-glow hover:bg-royal-pink-hover transition-all"
            >
              <span>Open Player Intelligence Dossier</span>
              <ExternalLink size={14} />
            </button>

            <span className="text-xs text-text-tertiary font-mono">
              Press any card to open profile
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
