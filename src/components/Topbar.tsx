import React from 'react';
import { Search, ChevronRight } from 'lucide-react';
import { NavPage } from './Sidebar';
import { getAssetUrl } from '../utils/assets';

interface TopbarProps {
  activePage: NavPage;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeFilter?: 'all' | 'batters' | 'bowlers';
  onFilterChange?: (filter: 'all' | 'batters' | 'bowlers') => void;
  onOpenQuickShortlist?: () => void;
}

const pageTitles: Record<NavPage, { title: string; subtitle: string }> = {
  command: {
    title: 'Command Center',
    subtitle: 'Pressure intelligence overview & elite performers'
  },
  batters: {
    title: 'Batter Intelligence',
    subtitle: 'Top 10 pressure-reliable batters ranked via PCAI scoring'
  },
  bowlers: {
    title: 'Bowling Intelligence',
    subtitle: 'Top 10 pressure-reliable bowlers ranked via PCAI suppression'
  },
  lab: {
    title: 'The Pressure Lab',
    subtitle: 'Cross-sport PCAI innovation, response curves & 1v1 counterfactuals'
  },
  compare: {
    title: 'Head-to-Head Comparison',
    subtitle: 'Interactive side-by-side radar & clutch differential analysis'
  },
  roster: {
    title: 'Player Database & Roster',
    subtitle: 'Searchable directory with genuine media cutouts & auction valuations'
  }
};

export const Topbar: React.FC<TopbarProps> = ({
  activePage,
  searchQuery,
  onSearchChange,
  activeFilter = 'all',
  onFilterChange,
}) => {
  const meta = pageTitles[activePage];

  return (
    <header className="sticky top-0 z-30 h-20 bg-canvas/80 backdrop-blur-xl border-b border-white/10 px-8 flex items-center justify-between">
      {/* Page Title & Breadcrumb with Official RR Logo */}
      <div className="flex items-center gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-canvas-surface p-1.5 border border-white/15 shadow flex items-center justify-center overflow-hidden shrink-0">
          <img
            src={getAssetUrl('/assets/logos/rr_logo.png')}
            alt="Rajasthan Royals Crest"
            className="w-full h-full object-contain filter drop-shadow"
          />
        </div>

        <div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-text-tertiary">
            <span>Rajasthan Royals</span>
            <ChevronRight size={12} />
            <span className="text-royal-pink font-semibold">SupeRR Selector S2</span>
            <ChevronRight size={12} />
            <span className="text-text-secondary">{meta.title}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-xl font-black text-text-primary tracking-tight">
              {meta.title}
            </h1>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-royal-pink/20 text-royal-pink border border-royal-pink/30">
              #HallaBol
            </span>
          </div>
        </div>
      </div>

      {/* Center Search Input */}
      <div className="flex-1 max-w-md mx-8 relative">
        <Search
          size={16}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-tertiary"
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search 20 verified cricketers by name, team, or auction tier..."
          className="w-full h-10 pl-10 pr-4 rounded-xl bg-canvas-surface/80 border border-white/10 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-royal-pink/50 focus:ring-1 focus:ring-royal-pink/50 transition-all font-sans"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-text-tertiary hover:text-text-primary font-mono px-1.5 py-0.5 rounded bg-white/5"
          >
            ESC
          </button>
        )}
      </div>

      {/* Right Controls - Removed PCAI 2.4 Active pill as requested */}
      <div className="flex items-center gap-3">
        {onFilterChange && (
          <div className="hidden lg:flex items-center p-1 rounded-xl bg-canvas-surface border border-white/10">
            <button
              onClick={() => onFilterChange('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeFilter === 'all'
                  ? 'bg-royal-pink text-white shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              All (20)
            </button>
            <button
              onClick={() => onFilterChange('batters')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeFilter === 'batters'
                  ? 'bg-royal-pink text-white shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Batters (10)
            </button>
            <button
              onClick={() => onFilterChange('bowlers')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeFilter === 'bowlers'
                  ? 'bg-royal-pink text-white shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Bowlers (10)
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
