import React from 'react';
import { Player } from '../data/players';
import { GlassPanel } from './GlassPanel';
import { getAssetUrl } from '../utils/assets';
import {
  X,
  Award,
  Zap,
  Shield,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  Target,
  DollarSign
} from 'lucide-react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';

interface PlayerProfileProps {
  player: Player | null;
  onClose: () => void;
  onCompareWith?: (player: Player) => void;
}

export const PlayerProfile: React.FC<PlayerProfileProps> = ({
  player,
  onClose,
  onCompareWith
}) => {
  if (!player) return null;

  const isBatter = player.role === 'batter';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-canvas/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-6xl max-h-[92vh] overflow-y-auto rounded-3xl bg-canvas-subtle border border-white/15 shadow-2xl p-6 sm:p-8 space-y-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-royal-pink/15 text-royal-pink border border-royal-pink/30 text-xs font-mono font-bold">
              RANK #{player.rank} {player.role.toUpperCase()}
            </span>
            <span className="text-xs font-mono text-text-tertiary">
              ID: {player.playerId} • {player.confidenceTier} CONFIDENCE TIER
            </span>
          </div>

          <div className="flex items-center gap-2">
            {onCompareWith && (
              <button
                onClick={() => onCompareWith(player)}
                className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-text-secondary hover:text-text-primary transition-all"
              >
                Compare Player
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-text-secondary hover:text-white transition-all"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Reference 2 Layout: Left Player Showcase + Right Statistical Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Player Cutout & Career Overview Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-b from-canvas-surface to-canvas shadow-xl group">
              <img
                src={player.image}
                alt={player.name}
                className="w-full h-80 object-cover object-top filter contrast-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = getAssetUrl('/assets/backgrounds/stadium_dark.jpg');
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-2xl font-black text-text-primary tracking-tight">
                  {player.name}
                </h2>
                <div className="text-xs font-mono text-royal-pink mt-0.5">
                  {player.rrTacticalFit.split('.')[0]}
                </div>
              </div>
            </div>

            {/* Auction & Franchise Value Card */}
            <GlassPanel className="p-4 space-y-3 border-royal-gold/30">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-text-tertiary flex items-center gap-1">
                  <DollarSign size={13} className="text-royal-gold" />
                  IPL 2027 Valuation
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-royal-gold/15 text-royal-gold border border-royal-gold/30 font-bold">
                  {player.auctionTier}
                </span>
              </div>
              <div className="text-xl font-black font-mono text-text-primary">
                {player.auctionPriceRange}
              </div>
              <p className="text-[11px] text-text-secondary leading-relaxed">
                Projected retention / open market price ceiling based on high-leverage win contribution.
              </p>
            </GlassPanel>

            {/* Career Numbers Grid (Reference 2 style) */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-3 rounded-xl bg-canvas-surface border border-white/5">
                <div className="text-[10px] text-text-tertiary uppercase">Matches</div>
                <div className="text-base font-bold text-text-primary">{player.matches}</div>
              </div>
              <div className="p-3 rounded-xl bg-canvas-surface border border-white/5">
                <div className="text-[10px] text-text-tertiary uppercase">Pressure Balls</div>
                <div className="text-base font-bold text-text-primary">{player.pressureBalls}</div>
              </div>
              <div className="p-3 rounded-xl bg-canvas-surface border border-white/5">
                <div className="text-[10px] text-text-tertiary uppercase">
                  {isBatter ? 'Pressure Runs' : 'Pressure Wkts'}
                </div>
                <div className="text-base font-bold text-text-primary">
                  {isBatter ? player.pressureRuns : player.pressureWickets}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-canvas-surface border border-white/5">
                <div className="text-[10px] text-text-tertiary uppercase">
                  {isBatter ? 'Pressure Avg' : 'Pressure Econ'}
                </div>
                <div className="text-base font-bold text-text-primary">
                  {isBatter ? player.pressureAvg : player.pressureEconomy}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Charts & Tactical Analysis */}
          <div className="lg:col-span-8 space-y-6">
            {/* Top Stat Row: Primary Outputs & Decomposition */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <GlassPanel className="p-4 border-royal-pink/40">
                <div className="text-[10px] font-mono uppercase text-text-tertiary">Composite Score</div>
                <div className="text-2xl font-black font-mono text-text-primary">{player.compositeScore}</div>
                <div className="text-[9px] font-mono text-royal-pink">CI: [{player.confidenceInterval[0]} - {player.confidenceInterval[1]}]</div>
              </GlassPanel>

              <GlassPanel className="p-4">
                <div className="text-[10px] font-mono uppercase text-text-tertiary">
                  {isBatter ? 'Pressure SR' : 'Economy Diff'}
                </div>
                <div className="text-2xl font-black font-mono text-text-primary">
                  {isBatter ? player.pressureSR : `${player.economyImprovement}`}
                </div>
                <div className="text-[9px] font-mono text-emerald-400">
                  {isBatter ? `+${player.srLiftPct}% Lift` : `vs Baseline: ${player.baselineEconomy}`}
                </div>
              </GlassPanel>

              <GlassPanel className="p-4">
                <div className="text-[10px] font-mono uppercase text-text-tertiary">
                  {isBatter ? 'Boundary %' : 'Dot % Ball'}
                </div>
                <div className="text-2xl font-black font-mono text-text-primary">
                  {isBatter ? `${player.pressureBoundaryPct}%` : `${player.pressureDotPct}%`}
                </div>
                <div className="text-[9px] font-mono text-sky-400">
                  {isBatter ? `${player.pressureDotPct}% Dots` : `Bdry: ${player.pressureBoundaryConcededPct}%`}
                </div>
              </GlassPanel>

              <GlassPanel className="p-4">
                <div className="text-[10px] font-mono uppercase text-text-tertiary">
                  {isBatter ? 'Clutch Lift (δ)' : 'Clutch Squeeze (θ)'}
                </div>
                <div className="text-2xl font-black font-mono text-text-primary">
                  {isBatter ? `+${player.delta}` : `+${player.theta}`}
                </div>
                <div className="text-[9px] font-mono text-text-secondary">
                  {isBatter ? `α: ${player.alpha}` : `β: ${player.beta}`}
                </div>
              </GlassPanel>
            </div>

            {/* Charts Row: Radar + Trajectory */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Radar Chart */}
              <GlassPanel className="p-5 flex flex-col items-center">
                <div className="w-full flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase font-bold text-text-secondary">
                    Pressure Skill Polygon
                  </span>
                  <span className="text-[10px] font-mono text-royal-pink font-semibold">
                    Percentile vs Pool
                  </span>
                </div>
                <div className="w-full h-56 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={player.radar}>
                      <PolarGrid stroke="rgba(255,255,255,0.1)" />
                      <PolarAngleAxis
                        dataKey="metric"
                        tick={{ fill: '#A7B2C5', fontSize: 10, fontFamily: 'monospace' }}
                      />
                      <PolarRadiusAxis domain={[0, 100]} stroke="transparent" />
                      <Radar
                        name={player.name}
                        dataKey="value"
                        stroke="#E90074"
                        fill="#E90074"
                        fillOpacity={0.4}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </GlassPanel>

              {/* Trajectory Line Chart (Reference 2 style) */}
              <GlassPanel className="p-5">
                <div className="w-full flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase font-bold text-text-secondary">
                    Performance Under Escalating Pressure
                  </span>
                  <span className="text-[10px] font-mono text-sky-400 font-semibold">
                    Neutral vs Clutch
                  </span>
                </div>
                <div className="w-full h-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={player.trajectory} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                      <XAxis dataKey="phase" tick={{ fill: '#6B7A99', fontSize: 9 }} />
                      <YAxis tick={{ fill: '#6B7A99', fontSize: 9 }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#0B1630',
                          borderColor: 'rgba(255,255,255,0.1)',
                          borderRadius: '8px',
                          fontSize: '11px'
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="rating"
                        name="Baseline Rating"
                        stroke="#6B7A99"
                        strokeDasharray="4 4"
                        strokeWidth={1.5}
                        dot={false}
                      />
                      <Line
                        type="monotone"
                        dataKey="pressure"
                        name="High-Leverage"
                        stroke="#E90074"
                        strokeWidth={2.5}
                        dot={{ r: 4, fill: '#E90074' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </GlassPanel>
            </div>

            {/* Rajasthan Royals Scouting Directive & Strengths */}
            <div className="p-5 rounded-2xl bg-canvas-surface border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-royal-gold text-xs font-mono uppercase font-bold">
                <Award size={15} />
                <span>Rajasthan Royals Tactical Recommendation</span>
              </div>
              <p className="text-sm text-text-primary leading-relaxed">
                {player.rrTacticalFit}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-white/5">
                {/* Strengths */}
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase text-emerald-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 size={13} />
                    Verified Strengths
                  </div>
                  <ul className="space-y-1.5 text-xs text-text-secondary">
                    {player.keyStrengths.map((str, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{str}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Weaknesses / Vulnerabilities */}
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase text-royal-rose font-semibold flex items-center gap-1.5">
                    <AlertTriangle size={13} />
                    Tactical Vulnerabilities
                  </div>
                  <ul className="space-y-1.5 text-xs text-text-secondary">
                    {player.keyWeaknesses.map((w, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-royal-rose font-bold">•</span>
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Scouting Narrative Full Paragraph */}
            {player.scoutingNarrative && (
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-text-tertiary leading-relaxed">
                <div className="font-mono uppercase text-[10px] text-text-secondary font-bold mb-1">
                  Analyst Scouting Log
                </div>
                {player.scoutingNarrative}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
