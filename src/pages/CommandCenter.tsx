import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { MetricCard } from '../components/MetricCard';
import { PlayerHero } from '../components/PlayerHero';
import { RankingTable } from '../components/RankingTable';
import { PerformanceChart } from '../components/PerformanceChart';
import { Player, TOP_10_BATTERS, TOP_10_BOWLERS } from '../data/players';
import { EXECUTIVE_KPIS } from '../data/analytics';
import { Database, Activity, Target, ShieldCheck, Flame, ArrowRight } from 'lucide-react';

interface CommandCenterProps {
  onSelectPlayer: (player: Player) => void;
  onNavigate: (page: any) => void;
}

export const CommandCenter: React.FC<CommandCenterProps> = ({
  onSelectPlayer,
  onNavigate
}) => {
  const topBatter = TOP_10_BATTERS[0];
  const topBowler = TOP_10_BOWLERS[0];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Cinematic Hero Banner */}
      <HeroSection
        onExploreBatters={() => onNavigate('batters')}
        onExploreBowlers={() => onNavigate('bowlers')}
        onOpenLab={() => onNavigate('lab')}
      />

      {/* 4 Executive KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          label="Total Deliveries Evaluated"
          value={EXECUTIVE_KPIS.totalDeliveries}
          subValue="Ball-by-ball IPL & T20 data"
          accent="blue"
          icon={Database}
          badge="DATA PACK"
        />
        <MetricCard
          label="High-Leverage Deliveries"
          value={EXECUTIVE_KPIS.pressureDeliveries}
          subValue="Leverage Index > 1.50"
          trend="up"
          trendText="24.1% of total"
          accent="pink"
          icon={Flame}
          badge="LEVERAGE"
        />
        <MetricCard
          label="Clutch Separation Lift"
          value={EXECUTIVE_KPIS.clutchSeparationPct}
          subValue="Top 10 vs Neutral Average"
          trend="up"
          trendText="+0.34 WPA"
          accent="gold"
          icon={Target}
          badge="RAPM Δ"
        />
        <MetricCard
          label="Model Verification"
          value={EXECUTIVE_KPIS.modelConfidence}
          subValue="1,000 Resamples Per Player"
          accent="emerald"
          icon={ShieldCheck}
          badge="STABLE"
        />
      </div>

      {/* #1 Batter Spotlight Hero */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-royal-pink" />
            <h3 className="text-lg font-black text-text-primary uppercase tracking-tight">
              Top Pressure Batter Spotlight
            </h3>
          </div>
          <button
            onClick={() => onNavigate('batters')}
            className="text-xs font-mono text-royal-pink hover:text-royal-pink-hover flex items-center gap-1 font-semibold"
          >
            <span>View All 10 Batters</span>
            <ArrowRight size={14} />
          </button>
        </div>
        <PlayerHero player={topBatter} onOpenDossier={onSelectPlayer} />
      </div>

      {/* #1 Bowler Spotlight Hero */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
            <h3 className="text-lg font-black text-text-primary uppercase tracking-tight">
              Top Pressure Bowler Spotlight
            </h3>
          </div>
          <button
            onClick={() => onNavigate('bowlers')}
            className="text-xs font-mono text-sky-400 hover:text-sky-300 flex items-center gap-1 font-semibold"
          >
            <span>View All 10 Bowlers</span>
            <ArrowRight size={14} />
          </button>
        </div>
        <PlayerHero player={topBowler} onOpenDossier={onSelectPlayer} />
      </div>

      {/* Cross-Sport 2D Decomposition Chart */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-royal-gold" />
          <h3 className="text-lg font-black text-text-primary uppercase tracking-tight">
            Bayesian Regularized Skill Decomposition
          </h3>
        </div>
        <PerformanceChart role="batter" />
      </div>
    </div>
  );
};
