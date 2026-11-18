import React, { useState } from 'react';
import { Player, ALL_PLAYERS, TOP_10_BATTERS, TOP_10_BOWLERS } from '../data/players';
import { GlassPanel } from './GlassPanel';
import { GitCompare, Award, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip
} from 'recharts';

interface ComparisonPanelProps {
  initialPlayerA?: Player;
  initialPlayerB?: Player;
}

export const ComparisonPanel: React.FC<ComparisonPanelProps> = ({
  initialPlayerA,
  initialPlayerB
}) => {
  const [playerAId, setPlayerAId] = useState<number>(initialPlayerA?.playerId || TOP_10_BATTERS[0].playerId);
  const [playerBId, setPlayerBId] = useState<number>(initialPlayerB?.playerId || TOP_10_BATTERS[2].playerId);

  const playerA = ALL_PLAYERS.find((p) => p.playerId === playerAId) || TOP_10_BATTERS[0];
  const playerB = ALL_PLAYERS.find((p) => p.playerId === playerBId) || TOP_10_BATTERS[2];

  // Combine radar data
  const combinedRadar = playerA.radar.map((r, i) => ({
    metric: r.metric,
    [playerA.name]: r.value,
    [playerB.name]: playerB.radar[i]?.value || 50,
  }));

  const scoreDiff = (playerA.compositeScore - playerB.compositeScore).toFixed(2);

  return (
    <div className="space-y-6">
      {/* Selector Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Player A Selector */}
        <GlassPanel className="p-4 border-royal-pink/40">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-mono uppercase text-royal-pink font-bold">
              Player A (Pink Axis)
            </span>
            <span className="text-xs font-mono text-text-tertiary">
              Rank #{playerA.rank} {playerA.role.toUpperCase()}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-14 h-16 rounded-xl overflow-hidden bg-canvas-surface border border-royal-pink/30 shrink-0">
              <img
                src={playerA.image}
                alt={playerA.name}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = getAssetUrl('/assets/backgrounds/stadium_dark.jpg');
                }}
              />
            </div>
            <select
              value={playerAId}
              onChange={(e) => setPlayerAId(Number(e.target.value))}
              className="flex-1 bg-canvas-surface border border-white/10 rounded-xl px-3 py-2 text-sm text-text-primary focus:outline-none focus:border-royal-pink font-sans"
            >
              <optgroup label="Top 10 Batters">
                {TOP_10_BATTERS.map((p) => (
                  <option key={p.playerId} value={p.playerId}>
                    #{p.rank} {p.name} ({p.compositeScore})
                  </option>
                ))}
              </optgroup>
              <optgroup label="Top 10 Bowlers">
                {TOP_10_BOWLERS.map((p) => (
                  <option key={p.playerId} value={p.playerId}>
                    #{p.rank} {p.name} ({p.compositeScore})
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
        </GlassPanel>

        {/* Player B Selector */}
        <GlassPanel className="p-4 border-sky-400/40">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-mono uppercase text-sky-400 font-bold">
              Player B (Cyan Axis)
            </span>
            <span className="text-xs font-mono text-text-tertiary">
              Rank #{playerB.rank} {playerB.role.toUpperCase()}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-14 h-16 rounded-xl overflow-hidden bg-canvas-surface border border-sky-400/30 shrink-0">
              <img
                src={playerB.image}
                alt={playerB.name}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = getAssetUrl('/assets/backgrounds/stadium_dark.jpg');
                }}
              />
            </div>
            <select
              value={playerBId}
              onChange={(e) => setPlayerBId(Number(e.target.value))}
              className="flex-1 bg-canvas-surface border border-white/10 rounded-xl px-3 py-2 text-sm text-text-primary focus:outline-none focus:border-sky-400 font-sans"
            >
              <optgroup label="Top 10 Batters">
                {TOP_10_BATTERS.map((p) => (
                  <option key={p.playerId} value={p.playerId}>
                    #{p.rank} {p.name} ({p.compositeScore})
                  </option>
                ))}
              </optgroup>
              <optgroup label="Top 10 Bowlers">
                {TOP_10_BOWLERS.map((p) => (
                  <option key={p.playerId} value={p.playerId}>
                    #{p.rank} {p.name} ({p.compositeScore})
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
        </GlassPanel>
      </div>

      {/* Head-to-Head Visual Arena */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Radar Overlay */}
        <GlassPanel className="lg:col-span-7 p-6 flex flex-col items-center">
          <div className="w-full flex items-center justify-between mb-2">
            <span className="text-xs font-mono uppercase font-bold text-text-secondary">
              Dual Radar Skill Overlay
            </span>
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="text-royal-pink font-bold">• {playerA.name}</span>
              <span className="text-sky-400 font-bold">• {playerB.name}</span>
            </div>
          </div>
          <div className="w-full h-72">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={combinedRadar}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis
                  dataKey="metric"
                  tick={{ fill: '#A7B2C5', fontSize: 10, fontFamily: 'monospace' }}
                />
                <PolarRadiusAxis domain={[0, 100]} stroke="transparent" />
                <Radar
                  name={playerA.name}
                  dataKey={playerA.name}
                  stroke="#E90074"
                  fill="#E90074"
                  fillOpacity={0.3}
                />
                <Radar
                  name={playerB.name}
                  dataKey={playerB.name}
                  stroke="#38BDF8"
                  fill="#38BDF8"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </GlassPanel>

        {/* Comparative Metrics Table */}
        <div className="lg:col-span-5 space-y-3">
          <GlassPanel className="p-4">
            <div className="text-[10px] font-mono uppercase text-text-tertiary mb-2">
              PCAI Score Differential
            </div>
            <div className="flex items-baseline justify-between font-mono">
              <span className="text-2xl font-black text-royal-pink">{playerA.compositeScore}</span>
              <span className="text-xs text-text-tertiary">
                Δ {Number(scoreDiff) >= 0 ? `+${scoreDiff}` : scoreDiff}
              </span>
              <span className="text-2xl font-black text-sky-400">{playerB.compositeScore}</span>
            </div>
          </GlassPanel>

          <GlassPanel className="p-4">
            <div className="text-[10px] font-mono uppercase text-text-tertiary mb-2">
              Clutch Parameter (δ / θ)
            </div>
            <div className="flex items-baseline justify-between font-mono">
              <span className="text-xl font-bold text-royal-pink">
                +{playerA.delta || playerA.theta}
              </span>
              <span className="text-xs text-text-tertiary">Clutch Lift</span>
              <span className="text-xl font-bold text-sky-400">
                +{playerB.delta || playerB.theta}
              </span>
            </div>
          </GlassPanel>

          <GlassPanel className="p-4">
            <div className="text-[10px] font-mono uppercase text-text-tertiary mb-2">
              Sample Volume
            </div>
            <div className="flex items-baseline justify-between font-mono">
              <span className="text-lg font-bold text-text-primary">
                {playerA.pressureBalls} balls
              </span>
              <span className="text-xs text-text-tertiary">Pressure</span>
              <span className="text-lg font-bold text-text-primary">
                {playerB.pressureBalls} balls
              </span>
            </div>
          </GlassPanel>

          <GlassPanel className="p-4 border-royal-gold/30">
            <div className="text-[10px] font-mono uppercase text-royal-gold font-bold mb-1">
              Auction Value Comparison
            </div>
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-text-primary font-bold">{playerA.auctionPriceRange}</span>
              <span className="text-text-tertiary">vs</span>
              <span className="text-text-primary font-bold">{playerB.auctionPriceRange}</span>
            </div>
          </GlassPanel>
        </div>
      </div>
    </div>
  );
};
