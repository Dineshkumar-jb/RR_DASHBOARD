import React from 'react';
import { Sparkles, ShieldCheck, Flame, ArrowUpRight, BarChart3 } from 'lucide-react';

interface HeroSectionProps {
  onExploreBatters: () => void;
  onExploreBowlers: () => void;
  onOpenLab: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreBatters,
  onExploreBowlers,
  onOpenLab
}) => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-hero-stadium shadow-2xl p-8 lg:p-12 mb-8">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-royal-pink/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-royal-blue/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl space-y-6">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-pink/15 border border-royal-pink/30 text-royal-pink text-xs font-bold tracking-widest uppercase font-mono">
            <span className="w-2 h-2 rounded-full bg-royal-pink animate-pulse" />
            BEYOND THE SCORECARD
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-royal-pink/20 border border-royal-pink/40 text-royal-pink text-xs font-mono font-bold">
            <span>#HallaBol</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-text-secondary text-xs font-mono">
            <span>Official Round 1 Intelligence Platform</span>
          </div>
        </div>

        {/* Main Title */}
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary tracking-tight leading-tight">
            Pressure Context Adjusted Impact{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-pink to-pink-400">
              (PCAI)
            </span>
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed">
            Adapting NBA Regularized Adjusted Plus-Minus and MLB Leverage Index to decouple true latent cricket ability from high-leverage match chaos.
          </p>
        </div>

        {/* Analytical Highlight Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="p-3 rounded-xl bg-canvas-surface/80 border border-white/10 backdrop-blur-md">
            <div className="text-[10px] uppercase font-mono text-text-tertiary">Deliveries</div>
            <div className="text-xl font-bold font-mono text-text-primary">48,290</div>
            <div className="text-[10px] text-text-secondary">Leverage &gt; 1.50</div>
          </div>
          <div className="p-3 rounded-xl bg-canvas-surface/80 border border-white/10 backdrop-blur-md">
            <div className="text-[10px] uppercase font-mono text-text-tertiary">Sample Depth</div>
            <div className="text-xl font-bold font-mono text-text-primary">1,200+</div>
            <div className="text-[10px] text-text-secondary">T20 Fixtures</div>
          </div>
          <div className="p-3 rounded-xl bg-canvas-surface/80 border border-white/10 backdrop-blur-md">
            <div className="text-[10px] uppercase font-mono text-text-tertiary">Confidence</div>
            <div className="text-xl font-bold font-mono text-text-primary">95% BCa</div>
            <div className="text-[10px] text-emerald-400">1,000 Resamples</div>
          </div>
          <div className="p-3 rounded-xl bg-canvas-surface/80 border border-white/10 backdrop-blur-md">
            <div className="text-[10px] uppercase font-mono text-text-tertiary">Player Media</div>
            <div className="text-xl font-bold font-mono text-royal-pink">100% Real</div>
            <div className="text-[10px] text-text-secondary">Zero AI Hallucination</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <button
            onClick={onExploreBatters}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-royal-pink text-white font-semibold text-sm shadow-pink-glow hover:bg-royal-pink-hover transition-all group"
          >
            <Flame size={18} />
            <span>Top 10 Batters Intelligence</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={onExploreBowlers}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-canvas-surface text-text-primary border border-white/10 font-semibold text-sm hover:bg-white/10 transition-all group"
          >
            <ShieldCheck size={18} className="text-sky-400" />
            <span>Top 10 Bowling Suppressors</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={onOpenLab}
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 text-text-secondary border border-white/5 font-mono text-xs hover:text-text-primary hover:bg-white/10 transition-all"
          >
            <BarChart3 size={15} />
            <span>The Pressure Lab Simulator</span>
          </button>
        </div>
      </div>
    </div>
  );
};
