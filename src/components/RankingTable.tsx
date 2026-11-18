import React, { useState } from 'react';
import { Player } from '../data/players';
import { ArrowUpDown, ChevronRight, Award } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface RankingTableProps {
  players: Player[];
  role: 'batter' | 'bowler';
  onSelectPlayer: (player: Player) => void;
}

export const RankingTable: React.FC<RankingTableProps> = ({
  players,
  role,
  onSelectPlayer
}) => {
  const isBatter = role === 'batter';
  const [sortField, setSortField] = useState<string>('rank');
  const [sortAsc, setSortAsc] = useState<boolean>(true);

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  const sortedPlayers = [...players].sort((a, b) => {
    let aVal: any = (a as any)[sortField];
    let bVal: any = (b as any)[sortField];

    if (sortField === 'primary') {
      aVal = isBatter ? a.pressureSR : a.pressureEconomy;
      bVal = isBatter ? b.pressureSR : b.pressureEconomy;
    }

    if (aVal === undefined || aVal === null) aVal = 0;
    if (bVal === undefined || bVal === null) bVal = 0;

    if (aVal < bVal) return sortAsc ? -1 : 1;
    if (aVal > bVal) return sortAsc ? 1 : -1;
    return 0;
  });

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-canvas-subtle shadow-xl">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs font-mono">
          {/* Table Header */}
          <thead>
            <tr className="border-b border-white/10 bg-canvas-surface/80 text-text-tertiary uppercase text-[10px] tracking-wider">
              <th
                onClick={() => handleSort('rank')}
                className="py-3 px-4 font-semibold cursor-pointer hover:text-text-primary transition-colors"
              >
                <div className="flex items-center gap-1">
                  <span>Rank</span>
                  <ArrowUpDown size={11} />
                </div>
              </th>
              <th
                onClick={() => handleSort('name')}
                className="py-3 px-4 font-semibold cursor-pointer hover:text-text-primary transition-colors"
              >
                <div className="flex items-center gap-1">
                  <span>Player</span>
                  <ArrowUpDown size={11} />
                </div>
              </th>
              <th
                onClick={() => handleSort('compositeScore')}
                className="py-3 px-4 font-semibold cursor-pointer hover:text-text-primary transition-colors"
              >
                <div className="flex items-center gap-1">
                  <span>PCAI Score</span>
                  <ArrowUpDown size={11} />
                </div>
              </th>
              <th className="py-3 px-4 font-semibold">
                <span>95% CI</span>
              </th>
              <th
                onClick={() => handleSort('pressureBalls')}
                className="py-3 px-4 font-semibold cursor-pointer hover:text-text-primary transition-colors"
              >
                <div className="flex items-center gap-1">
                  <span>P-Balls</span>
                  <ArrowUpDown size={11} />
                </div>
              </th>
              <th
                onClick={() => handleSort('primary')}
                className="py-3 px-4 font-semibold cursor-pointer hover:text-text-primary transition-colors"
              >
                <div className="flex items-center gap-1">
                  <span>{isBatter ? 'P-Strike Rate' : 'P-Economy'}</span>
                  <ArrowUpDown size={11} />
                </div>
              </th>
              <th className="py-3 px-4 font-semibold">
                <span>{isBatter ? 'Boundary %' : 'Dot %'}</span>
              </th>
              <th className="py-3 px-4 font-semibold">
                <span>{isBatter ? 'Latent α' : 'Latent β'}</span>
              </th>
              <th className="py-3 px-4 font-semibold">
                <span>{isBatter ? 'Clutch δ' : 'Squeeze θ'}</span>
              </th>
              <th className="py-3 px-4 font-semibold">
                <span>Auction Tier</span>
              </th>
              <th className="py-3 px-4 font-semibold text-right">
                <span>Action</span>
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-white/5">
            {sortedPlayers.map((player) => {
              const isTopThree = player.rank <= 3;

              return (
                <tr
                  key={player.playerId}
                  onClick={() => onSelectPlayer(player)}
                  className="hover:bg-white/5 cursor-pointer transition-colors group"
                >
                  {/* Rank */}
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-xs font-black ${
                        isTopThree
                          ? 'bg-royal-pink/20 text-royal-pink border border-royal-pink/40 shadow-sm'
                          : 'text-text-secondary'
                      }`}
                    >
                      #{player.rank}
                    </span>
                  </td>

                  {/* Player Name & Authentic Avatar */}
                  <td className="py-3.5 px-4 font-sans">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-11 rounded-lg overflow-hidden bg-canvas-surface border border-white/10 shrink-0">
                        <img
                          src={player.image}
                          alt={player.name}
                          className="w-full h-full object-cover object-top"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = getAssetUrl('/assets/backgrounds/stadium_dark.jpg');
                          }}
                        />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-text-primary group-hover:text-royal-pink transition-colors">
                          {player.name}
                        </div>
                        <div className="text-[10px] text-text-tertiary font-mono">
                          {player.matches} Matches • {player.confidenceTier}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* PCAI Composite Score + In-cell bar */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-text-primary tabular-nums">
                        {player.compositeScore}
                      </span>
                      <div className="w-16 h-1.5 bg-white/5 rounded-full overflow-hidden hidden sm:block">
                        <div
                          className="h-full bg-gradient-to-r from-sky-400 to-royal-pink rounded-full"
                          style={{ width: `${Math.min(100, (player.compositeScore / 100) * 100)}%` }}
                        />
                      </div>
                    </div>
                  </td>

                  {/* 95% Confidence Interval */}
                  <td className="py-3.5 px-4 text-text-tertiary text-[11px]">
                    [{player.confidenceInterval[0]} - {player.confidenceInterval[1]}]
                  </td>

                  {/* Pressure Deliveries */}
                  <td className="py-3.5 px-4 text-text-secondary font-medium">
                    {player.pressureBalls}
                  </td>

                  {/* Primary Output */}
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-text-primary">
                      {isBatter ? player.pressureSR : player.pressureEconomy}
                    </div>
                    <div className="text-[10px] text-emerald-400">
                      {isBatter ? `+${player.srLiftPct}%` : `${player.economyImprovement}`}
                    </div>
                  </td>

                  {/* Secondary Output */}
                  <td className="py-3.5 px-4 text-text-secondary">
                    {isBatter ? `${player.pressureBoundaryPct}%` : `${player.pressureDotPct}%`}
                  </td>

                  {/* Latent Talent */}
                  <td className="py-3.5 px-4 text-text-secondary">
                    {isBatter ? player.alpha : player.beta}
                  </td>

                  {/* Clutch */}
                  <td className="py-3.5 px-4">
                    <span className="text-royal-pink font-bold">
                      {isBatter ? `+${player.delta}` : `+${player.theta}`}
                    </span>
                  </td>

                  {/* Auction Tier */}
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-royal-gold">
                      {player.auctionTier}
                    </span>
                  </td>

                  {/* Action Link */}
                  <td className="py-3.5 px-4 text-right">
                    <ChevronRight size={16} className="text-text-tertiary group-hover:text-royal-pink group-hover:translate-x-1 transition-all inline" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
