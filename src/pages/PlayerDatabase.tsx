import React, { useState } from 'react';
import { ALL_PLAYERS, Player } from '../data/players';
import { GlassPanel } from '../components/GlassPanel';
import { Users, Search, Award, ChevronRight, CheckCircle2, Shield, Flame } from 'lucide-react';

interface PlayerDatabaseProps {
  onOpenDossier: (player: Player) => void;
}

export const PlayerDatabase: React.FC<PlayerDatabaseProps> = ({ onOpenDossier }) => {
  const [selectedPlayer, setSelectedPlayer] = useState<Player>(ALL_PLAYERS[0]);
  const [filterRole, setFilterRole] = useState<'all' | 'batter' | 'bowler'>('all');
  const [search, setSearch] = useState<string>('');

  const filteredPlayers = ALL_PLAYERS.filter((p) => {
    if (filterRole !== 'all' && p.role !== filterRole) return false;
    if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl bg-canvas-subtle border border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-royal-gold font-bold uppercase mb-1">
            <Users size={14} />
            <span>Complete Scouting Directory</span>
          </div>
          <h2 className="text-2xl font-black text-text-primary tracking-tight">
            20 Verified Pressure Cricketers Database
          </h2>
          <p className="text-xs text-text-secondary mt-1">
            100% authentic player photographs, verified PCAI scores, and IPL 2027 auction directives.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2">
          <div className="flex items-center p-1 rounded-xl bg-canvas-surface border border-white/10 text-xs">
            <button
              onClick={() => setFilterRole('all')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                filterRole === 'all'
                  ? 'bg-royal-pink text-white shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              All (20)
            </button>
            <button
              onClick={() => setFilterRole('batter')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                filterRole === 'batter'
                  ? 'bg-royal-pink text-white shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Batters (10)
            </button>
            <button
              onClick={() => setFilterRole('bowler')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                filterRole === 'bowler'
                  ? 'bg-royal-pink text-white shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Bowlers (10)
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Left Roster List (Reference 3) + Right Active Player Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Player List */}
        <div className="lg:col-span-7 space-y-2 max-h-[75vh] overflow-y-auto pr-2">
          {filteredPlayers.map((player) => {
            const isSelected = selectedPlayer.playerId === player.playerId;
            const isBatter = player.role === 'batter';

            return (
              <div
                key={player.playerId}
                onClick={() => setSelectedPlayer(player)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? 'bg-canvas-surface border-royal-pink/60 shadow-pink-glow'
                    : 'bg-canvas-subtle/80 hover:bg-white/5 border-white/5'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  {/* Real Photo Thumbnail */}
                  <div className="w-12 h-14 rounded-xl overflow-hidden bg-canvas border border-white/10 shrink-0">
                    <img
                      src={player.image}
                      alt={player.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-royal-pink/15 text-royal-pink font-bold">
                        #{player.rank}
                      </span>
                      <span className="text-[10px] font-mono uppercase text-text-tertiary">
                        {isBatter ? 'Batter' : 'Bowler'}
                      </span>
                      <span className="text-[10px] font-mono text-royal-gold">
                        {player.auctionTier}
                      </span>
                    </div>
                    <div className="font-bold text-sm text-text-primary">
                      {player.name}
                    </div>
                    <div className="text-[10px] font-mono text-text-secondary">
                      {isBatter
                        ? `SR: ${player.pressureSR} (+${player.srLiftPct}%)`
                        : `Econ: ${player.pressureEconomy} (${player.economyImprovement})`}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-sm font-black font-mono text-text-primary">
                    {player.compositeScore}
                  </div>
                  <div className="text-[10px] font-mono text-text-tertiary">
                    {player.matches} Matches
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Live Player Inspector Panel (Reference 3 Right Roster Dossier) */}
        <div className="lg:col-span-5 sticky top-24">
          <GlassPanel className="p-6 space-y-5 border-royal-pink/30">
            {/* Player Headshot & Name */}
            <div className="relative rounded-2xl overflow-hidden bg-canvas-surface border border-white/10 h-64">
              <img
                src={selectedPlayer.image}
                alt={selectedPlayer.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-royal-pink font-bold">
                    RANK #{selectedPlayer.rank} • {selectedPlayer.role.toUpperCase()}
                  </span>
                  <h3 className="text-xl font-black text-text-primary">
                    {selectedPlayer.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black font-mono text-royal-pink">
                    {selectedPlayer.compositeScore}
                  </span>
                  <div className="text-[9px] font-mono text-text-tertiary">PCAI SCORE</div>
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <div className="text-[9px] text-text-tertiary uppercase">Valuation</div>
                <div className="text-xs font-bold text-royal-gold">{selectedPlayer.auctionPriceRange}</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <div className="text-[9px] text-text-tertiary uppercase">Confidence</div>
                <div className="text-xs font-bold text-emerald-400">{selectedPlayer.confidenceTier}</div>
              </div>
            </div>

            {/* RR Tactical Recommendation */}
            <div className="space-y-1.5">
              <div className="text-[10px] font-mono uppercase font-bold text-royal-gold flex items-center gap-1.5">
                <Award size={13} />
                Rajasthan Royals Tactical Fit
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                {selectedPlayer.rrTacticalFit}
              </p>
            </div>

            {/* Key Strengths */}
            <div className="space-y-1.5">
              <div className="text-[10px] font-mono uppercase font-bold text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 size={13} />
                Key Capabilities
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedPlayer.keyStrengths.map((str, i) => (
                  <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {str}
                  </span>
                ))}
              </div>
            </div>

            {/* Open Full Dossier Button */}
            <button
              onClick={() => onOpenDossier(selectedPlayer)}
              className="w-full py-2.5 rounded-xl bg-royal-pink text-white font-semibold text-xs shadow-pink-glow hover:bg-royal-pink-hover transition-all text-center block"
            >
              Open Full Intelligence Dossier
            </button>
          </GlassPanel>
        </div>
      </div>
    </div>
  );
};
