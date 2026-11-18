import React, { useState } from 'react';
import { Sidebar, NavPage } from './components/Sidebar';
import { Topbar } from './components/Topbar';
import { getAssetUrl } from './utils/assets';
import { CommandCenter } from './pages/CommandCenter';
import { BattersIntelligence } from './pages/BattersIntelligence';
import { BowlersIntelligence } from './pages/BowlersIntelligence';
import { PressureLab } from './pages/PressureLab';
import { PlayerComparison } from './pages/PlayerComparison';
import { PlayerDatabase } from './pages/PlayerDatabase';
import { PlayerProfile } from './components/PlayerProfile';
import { Player, ALL_PLAYERS } from './data/players';
import { ExternalLink, Heart } from 'lucide-react';

export const App: React.FC = () => {
  const [activePage, setActivePage] = useState<NavPage>('command');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  // Filtered search results popup/bar if user types search query
  const searchResults = searchQuery
    ? ALL_PLAYERS.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.auctionTier.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.role.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen bg-canvas text-text-primary flex relative overflow-x-hidden">
      {/* Subtle Background Watermark: RR Crest with +25% increased opacity on all pages EXCEPT Home ('command') */}
      {activePage !== 'command' && (
        <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
          <img
            src={getAssetUrl('/assets/logos/rr_logo.png')}
            alt=""
            aria-hidden="true"
            className="w-[480px] h-[480px] sm:w-[650px] sm:h-[650px] object-contain opacity-[0.055] filter contrast-125 select-none"
          />
        </div>
      )}

      {/* Left Sidebar Navigation Rail */}
      <Sidebar
        activePage={activePage}
        onSelectPage={(page) => {
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Content Area */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen relative z-10">
        {/* Top Header Bar with RR Logo */}
        <Topbar
          activePage={activePage}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Global Search Results Overlay (if searching) */}
        {searchQuery && (
          <div className="p-8 bg-canvas-surface/95 border-b border-white/10 z-20 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-royal-pink font-bold uppercase">
                Search Results ({searchResults.length} cricketers found)
              </span>
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-text-tertiary hover:text-white"
              >
                Clear Search
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {searchResults.map((player) => (
                <div
                  key={player.playerId}
                  onClick={() => {
                    setSelectedPlayer(player);
                    setSearchQuery('');
                  }}
                  className="p-3.5 rounded-xl bg-canvas border border-white/10 hover:border-royal-pink/50 cursor-pointer flex items-center gap-3 group transition-all"
                >
                  <div className="w-10 h-12 rounded-lg overflow-hidden bg-canvas-surface shrink-0">
                    <img
                      src={player.image}
                      alt={player.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-royal-pink font-bold">
                      #{player.rank} {player.role.toUpperCase()}
                    </div>
                    <div className="text-xs font-bold text-text-primary group-hover:text-royal-pink transition-colors">
                      {player.name}
                    </div>
                    <div className="text-[10px] font-mono text-text-tertiary">
                      Score: {player.compositeScore}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Page Views Container */}
        <main className="flex-1 p-6 lg:p-10 max-w-7xl w-full mx-auto">
          {activePage === 'command' && (
            <CommandCenter
              onSelectPlayer={setSelectedPlayer}
              onNavigate={setActivePage}
            />
          )}

          {activePage === 'batters' && (
            <BattersIntelligence onSelectPlayer={setSelectedPlayer} />
          )}

          {activePage === 'bowlers' && (
            <BowlersIntelligence onSelectPlayer={setSelectedPlayer} />
          )}

          {activePage === 'lab' && <PressureLab />}

          {activePage === 'compare' && <PlayerComparison />}

          {activePage === 'roster' && (
            <PlayerDatabase onOpenDossier={setSelectedPlayer} />
          )}
        </main>

        {/* Footer with Creator Credits & Halla Bol */}
        <footer className="border-t border-white/5 py-8 px-10 text-xs text-text-secondary font-mono bg-canvas-subtle/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
            {/* Left: Competition & Battle Cry */}
            <div className="flex items-center gap-2.5">
              <span className="font-bold text-text-primary">
                Rajasthan Royals — SupeRR Selector Season 2
              </span>
              <span className="px-2 py-0.5 rounded-full bg-royal-pink/20 text-royal-pink border border-royal-pink/30 text-[10px] font-black tracking-wider">
                #HallaBol
              </span>
            </div>

            {/* Right: Done by Dinesh Kumar JB & GitHub */}
            <div className="flex items-center gap-4">
              <span>
                Done by <strong className="text-white font-bold">Dinesh Kumar JB</strong>
              </span>
              <span className="text-white/20">•</span>
              <a
                href="https://github.com/Dineshkumar-jb"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-royal-pink hover:text-white border border-white/10 hover:border-royal-pink/50 transition-all font-semibold"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>Dineshkumar-jb</span>
                <ExternalLink size={11} className="opacity-70" />
              </a>
            </div>
          </div>
        </footer>
      </div>

      {/* Deep-Dive Player Dossier Modal (Reference 2 Layout) */}
      {selectedPlayer && (
        <PlayerProfile
          player={selectedPlayer}
          onClose={() => setSelectedPlayer(null)}
          onCompareWith={(p) => {
            setSelectedPlayer(null);
            setActivePage('compare');
          }}
        />
      )}
    </div>
  );
};
