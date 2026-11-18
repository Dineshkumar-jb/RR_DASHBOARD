import React from 'react';
import { getAssetUrl } from '../utils/assets';
import {
  LayoutDashboard,
  Flame,
  ShieldAlert,
  FlaskConical,
  GitCompare,
  Users
} from 'lucide-react';

export type NavPage = 'command' | 'batters' | 'bowlers' | 'lab' | 'compare' | 'roster';

interface SidebarProps {
  activePage: NavPage;
  onSelectPage: (page: NavPage) => void;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activePage,
  onSelectPage,
}) => {
  const navItems: { id: NavPage; label: string; icon: React.ElementType; badge?: string }[] = [
    { id: 'command', label: 'Command Center', icon: LayoutDashboard },
    { id: 'batters', label: 'Batter Intelligence', icon: Flame, badge: 'Top 10' },
    { id: 'bowlers', label: 'Bowling Intelligence', icon: ShieldAlert, badge: 'Top 10' },
    { id: 'lab', label: 'The Pressure Lab', icon: FlaskConical, badge: 'PCAI' },
    { id: 'compare', label: 'Head-to-Head 1v1', icon: GitCompare },
    { id: 'roster', label: 'Player Database', icon: Users, badge: '20' },
  ];

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-canvas-subtle/95 backdrop-blur-xl border-r border-white/10 z-40 flex flex-col justify-between select-none">
      {/* Top Branding Section with Official RR Logo & #HallaBol */}
      <div>
        <div className="p-6 border-b border-white/5 flex items-center gap-3.5">
          <div className="relative group shrink-0">
            <div className="w-12 h-12 rounded-xl bg-canvas-surface p-1.5 border border-white/15 shadow-lg group-hover:border-royal-pink/50 transition-all flex items-center justify-center overflow-hidden">
              <img
                src={getAssetUrl('/assets/logos/rr_logo.png')}
                alt="Rajasthan Royals Crest"
                className="w-full h-full object-contain filter drop-shadow"
              />
            </div>
            {/* Live Indicator Dot */}
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-royal-pink rounded-full border-2 border-canvas animate-pulse" />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-black tracking-widest text-text-primary uppercase font-mono">
                RAJASTHAN ROYALS
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[11px] font-semibold text-royal-pink tracking-wider uppercase">
                SupeRR Selector S2
              </span>
              <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded-full bg-royal-pink/20 text-royal-pink border border-royal-pink/30">
                #HallaBol
              </span>
            </div>
          </div>
        </div>

        {/* Section Heading */}
        <div className="px-6 pt-6 pb-2">
          <div className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary">
            Intelligence Modules
          </div>
        </div>

        {/* Navigation Rail */}
        <nav className="px-3 space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onSelectPage(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-all group relative ${
                  isActive
                    ? 'bg-royal-pink/10 text-text-primary border border-royal-pink/40 shadow-sm'
                    : 'text-text-secondary hover:text-text-primary hover:bg-white/5 border border-transparent'
                }`}
              >
                {/* Active Indicator Bar */}
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-royal-pink rounded-r-full shadow-pink-glow" />
                )}

                <div className="flex items-center gap-3 pl-1">
                  <Icon
                    size={18}
                    className={`transition-colors ${
                      isActive ? 'text-royal-pink' : 'text-text-tertiary group-hover:text-text-secondary'
                    }`}
                  />
                  <span className="tracking-tight">{item.label}</span>
                </div>

                {item.badge && (
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                      isActive
                        ? 'bg-royal-pink/20 border-royal-pink/30 text-royal-pink font-semibold'
                        : 'bg-white/5 border-white/10 text-text-tertiary'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Clean Bottom Area without the removed badge */}
      <div className="p-4 border-t border-white/5 text-center">
        <span className="text-[10px] font-mono text-text-tertiary tracking-widest uppercase">
          Rajasthan Royals • Halla Bol
        </span>
      </div>
    </aside>
  );
};
