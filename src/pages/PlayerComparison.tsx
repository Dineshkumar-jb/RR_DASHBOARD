import React, { useState } from 'react';
import { ComparisonPanel } from '../components/ComparisonPanel';
import { TOP_10_BATTERS, TOP_10_BOWLERS, Player } from '../data/players';
import { GitCompare, Flame, ShieldAlert, Sparkles } from 'lucide-react';

export const PlayerComparison: React.FC = () => {
  const [playerA, setPlayerA] = useState<Player>(TOP_10_BATTERS[0]); // Tim David
  const [playerB, setPlayerB] = useState<Player>(TOP_10_BATTERS[2]); // Suryakumar Yadav

  const presets = [
    { label: 'Finisher Duel: Tim David vs Suryakumar Yadav', a: TOP_10_BATTERS[0], b: TOP_10_BATTERS[2] },
    { label: 'Breakout Stars: Shashank Singh vs Ashutosh Sharma', a: TOP_10_BATTERS[1], b: TOP_10_BATTERS[4] },
    { label: 'Mystery vs Sling: Sufiyan Muqeem vs Matheesha Pathirana', a: TOP_10_BOWLERS[0], b: TOP_10_BOWLERS[1] },
    { label: 'Spin Wizards: Kuldeep Yadav vs Rashid Khan', a: TOP_10_BOWLERS[2], b: TOP_10_BOWLERS[3] },
    { label: 'Pace Clutches: Shaheen Afridi vs Arshdeep Singh', a: TOP_10_BOWLERS[5], b: TOP_10_BOWLERS[9] },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Title Banner */}
      <div className="p-6 rounded-2xl bg-canvas-subtle border border-white/10 space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono text-royal-pink font-bold uppercase">
          <GitCompare size={14} />
          <span>Head-to-Head Comparative Intelligence</span>
        </div>
        <h2 className="text-2xl font-black text-text-primary tracking-tight">
          Player vs Player Pressure Capability Battle
        </h2>
        <p className="text-xs text-text-secondary leading-relaxed">
          Overlaying 6-dimensional skill polygons and counterfactual metrics to evaluate relative tactical utility for Rajasthan Royals.
        </p>
      </div>

      {/* Preset Quick Selectors */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-mono text-text-tertiary">Quick Battles:</span>
        {presets.map((preset, idx) => (
          <button
            key={idx}
            onClick={() => {
              setPlayerA(preset.a);
              setPlayerB(preset.b);
            }}
            className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-text-secondary hover:text-text-primary transition-all"
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Comparison Panel */}
      <ComparisonPanel initialPlayerA={playerA} initialPlayerB={playerB} />
    </div>
  );
};
