import React, { useState } from 'react';
import { Player, TOP_10_BATTERS } from '../data/players';
import { PlayerHero } from '../components/PlayerHero';
import { PlayerCard } from '../components/PlayerCard';
import { RankingTable } from '../components/RankingTable';
import { PerformanceChart } from '../components/PerformanceChart';
import { Flame, Sparkles, Filter, LayoutGrid, ListFilter } from 'lucide-react';

interface BattersIntelligenceProps {
  onSelectPlayer: (player: Player) => void;
}

export const BattersIntelligence: React.FC<BattersIntelligenceProps> = ({
  onSelectPlayer
}) => {
  const [featuredBatter, setFeaturedBatter] = useState<Player>(TOP_10_BATTERS[0]);
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Module Title Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl bg-canvas-subtle border border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-royal-pink font-bold uppercase mb-1">
            <Flame size={14} />
            <span>Batting Intelligence Module</span>
          </div>
          <h2 className="text-2xl font-black text-text-primary tracking-tight">
            Top 10 Batters Under High-Leverage Pressure
          </h2>
          <p className="text-xs text-text-secondary mt-1">
            Decoupling raw boundary violence from match leverage using NBA RAPM Bayesian shrinkage.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center p-1 rounded-xl bg-canvas-surface border border-white/10 text-xs">
          <button
            onClick={() => setViewMode('cards')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
              viewMode === 'cards'
                ? 'bg-royal-pink text-white shadow-sm'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <LayoutGrid size={13} />
            <span>Cards</span>
          </button>
          <button
            onClick={() => setViewMode('table')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
              viewMode === 'table'
                ? 'bg-royal-pink text-white shadow-sm'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <ListFilter size={13} />
            <span>Linear Table</span>
          </button>
        </div>
      </div>

      {/* Hero Showcase for Currently Selected / Spotlight Batter */}
      <PlayerHero
        player={featuredBatter}
        onOpenDossier={(p) => onSelectPlayer(p)}
      />

      {/* Batters Grid / Table */}
      {viewMode === 'cards' ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase font-mono text-text-secondary tracking-wider">
              Official Top 10 Batters Roster
            </h3>
            <span className="text-xs font-mono text-text-tertiary">
              Click any card to inspect dossier
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {TOP_10_BATTERS.map((batter) => (
              <PlayerCard
                key={batter.playerId}
                player={batter}
                isSelected={featuredBatter.playerId === batter.playerId}
                onSelect={(p) => {
                  setFeaturedBatter(p);
                  onSelectPlayer(p);
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        <RankingTable
          players={TOP_10_BATTERS}
          role="batter"
          onSelectPlayer={(p) => {
            setFeaturedBatter(p);
            onSelectPlayer(p);
          }}
        />
      )}

      {/* 2D Decomposition & Response Curves for Batters */}
      <div className="space-y-3 pt-4">
        <h3 className="text-base font-bold text-text-primary uppercase font-mono tracking-tight">
          Batter Clutch Response Mechanics
        </h3>
        <PerformanceChart role="batter" />
      </div>
    </div>
  );
};
