import React, { useState } from 'react';
import { TOP_10_BATTERS, TOP_10_BOWLERS, Player } from '../data/players';
import { MATCH_SITUATIONS, COUNTERFACTUAL_MATCHUPS, CONTEXT_COEFFICIENTS } from '../data/analytics';
import { GlassPanel } from '../components/GlassPanel';
import { FlaskConical, Play, Award, Zap, Shield, Cpu, RefreshCw, BarChart2, CheckCircle2 } from 'lucide-react';

export const PressureLab: React.FC = () => {
  const [selectedBatterId, setSelectedBatterId] = useState<number>(TOP_10_BATTERS[0].playerId);
  const [selectedBowlerId, setSelectedBowlerId] = useState<number>(TOP_10_BOWLERS[1].playerId); // Pathirana
  const [selectedSituationIndex, setSelectedSituationIndex] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulationResult, setSimulationResult] = useState<any>(null);

  const batter = TOP_10_BATTERS.find((b) => b.playerId === selectedBatterId) || TOP_10_BATTERS[0];
  const bowler = TOP_10_BOWLERS.find((b) => b.playerId === selectedBowlerId) || TOP_10_BOWLERS[1];
  const situation = MATCH_SITUATIONS[selectedSituationIndex] || MATCH_SITUATIONS[0];

  // Check if there is an exact empirical counterfactual matchup in our database
  const empiricalMatch = COUNTERFACTUAL_MATCHUPS.find(
    (m) => m.batter.toLowerCase().includes(batter.name.split(' ')[1]?.toLowerCase() || batter.name.toLowerCase()) &&
           m.bowler.toLowerCase().includes(bowler.name.split(' ')[1]?.toLowerCase() || bowler.name.toLowerCase())
  );

  const runSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => {
      // Analytical simulation based on PCAI parameters
      const bAlpha = batter.alpha || 0.3;
      const bDelta = batter.delta || 0.08;
      const bStrength = bAlpha + bDelta * 1.5;

      const wBeta = bowler.beta || 0.25;
      const wTheta = bowler.theta || 0.07;
      const wStrength = wBeta + wTheta * 1.5;

      // Base win probability influenced by scenario RRR and wickets
      const rrrFactor = Math.min(0.7, (situation.requiredRunRate || 10) / 18);
      const baseBatterProb = Math.max(0.2, Math.min(0.8, 0.5 + (bStrength - wStrength) * 1.8 - (rrrFactor - 0.5) * 0.4));
      const batterWin = Math.round(baseBatterProb * 100);
      const bowlerWin = 100 - batterWin;

      // Outcome distribution
      const boundaryPct = Math.round(Math.max(15, Math.min(45, (batter.pressureBoundaryPct || 25) - (bowler.pressureBoundaryConcededPct ? bowler.pressureBoundaryConcededPct * 0.3 : 5))));
      const dotPct = Math.round(Math.max(20, Math.min(50, (bowler.pressureDotPct || 35) + 5 - (batter.pressureBoundaryPct ? batter.pressureBoundaryPct * 0.2 : 0))));
      const wicketPct = Math.round(Math.max(4, Math.min(18, (bowler.wicketsPerBall || 0.06) * 120)));
      const singlesPct = Math.max(10, 100 - boundaryPct - dotPct - wicketPct);

      const directive = empiricalMatch
        ? empiricalMatch.tactical_recommendation
        : `Under ${situation.name} conditions (${situation.targetRuns} off ${situation.ballsRemaining} balls, RRR ${situation.requiredRunRate}), ${batter.name}'s clutch lift (+${bDelta}) generates an expected +${(bDelta * 60).toFixed(1)} SR points, counterbalanced by ${bowler.name}'s squeeze factor (+${wTheta}). RR directive: deploy ${bowler.name}'s primary yorker / hard-length trajectory into the body.`;

      setSimulationResult({
        batterWin,
        bowlerWin,
        boundaryPct,
        dotPct,
        singlesPct,
        wicketPct,
        tacticalDirective: directive
      });
      setIsSimulating(false);
    }, 350);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Title Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-canvas-subtle border border-white/10 space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono text-royal-gold font-bold uppercase">
          <FlaskConical size={14} />
          <span>Cross-Sport Innovation Laboratory</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-text-primary tracking-tight">
          Pressure Context Adjusted Impact (PCAI) Engine
        </h2>
        <p className="text-xs sm:text-sm text-text-secondary max-w-3xl leading-relaxed">
          The analytical foundation adapted from NBA Regularized Adjusted Plus-Minus (RAPM) and MLB Leverage Index (LI). Our formulation decouples match context, opposition quality, and situation volatility from true pressure resilience.
        </p>
      </div>

      {/* 3 Pillars of PCAI Architecture */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <GlassPanel className="p-5 space-y-3 border-royal-pink/30">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase text-royal-pink font-bold">
              Pillar 1 • MLB Adaptation
            </span>
            <Cpu size={16} className="text-royal-pink" />
          </div>
          <h4 className="text-sm font-bold text-text-primary">
            Continuous Leverage Index (LI)
          </h4>
          <p className="text-xs text-text-secondary leading-relaxed">
            Measures situational volatility on every ball: LI = ΔWP / E[ΔWP]. Deliveries with LI &gt; 1.50 trigger pressure classification.
          </p>
          <div className="p-2 rounded-lg bg-white/5 font-mono text-[10px] text-royal-pink">
            P_t = LI_t × (1 + RRR_excess / RRR_par)
          </div>
        </GlassPanel>

        <GlassPanel className="p-5 space-y-3 border-sky-400/30">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase text-sky-400 font-bold">
              Pillar 2 • NBA Adaptation
            </span>
            <Award size={16} className="text-sky-400" />
          </div>
          <h4 className="text-sm font-bold text-text-primary">
            Regularized Adjusted Plus-Minus (RAPM)
          </h4>
          <p className="text-xs text-text-secondary leading-relaxed">
            Ridge regression (L2 shrinkage) decouples batter ability from bowler quality and pitch characteristics, removing co-linearly shared credit.
          </p>
          <div className="p-2 rounded-lg bg-white/5 font-mono text-[10px] text-sky-400">
            arg min ||y - Xβ||² + λ||β||²
          </div>
        </GlassPanel>

        <GlassPanel className="p-5 space-y-3 border-royal-gold/30">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase text-royal-gold font-bold">
              Pillar 3 • Sports Stats
            </span>
            <BarChart2 size={16} className="text-royal-gold" />
          </div>
          <h4 className="text-sm font-bold text-text-primary">
            Empirical BCa Bootstrap CI
          </h4>
          <p className="text-xs text-text-secondary leading-relaxed">
            1,000 resamples per player calculate 95% bias-corrected accelerated confidence intervals, preventing small-sample distortion.
          </p>
          <div className="p-2 rounded-lg bg-white/5 font-mono text-[10px] text-royal-gold">
            CI = [θ*(α_1), θ*(α_2)] (BCa)
          </div>
        </GlassPanel>
      </div>

      {/* Interactive 1v1 Pressure Matchup Simulator */}
      <GlassPanel className="p-6 sm:p-8 space-y-6 border-white/15">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-royal-pink font-bold uppercase">
              <Zap size={14} />
              <span>Interactive Matchup Simulator</span>
            </div>
            <h3 className="text-lg font-black text-text-primary tracking-tight">
              1v1 Clutch Over Battle Simulator
            </h3>
          </div>

          <button
            onClick={runSimulation}
            disabled={isSimulating}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-royal-pink text-white font-semibold text-xs shadow-pink-glow hover:bg-royal-pink-hover transition-all disabled:opacity-50"
          >
            {isSimulating ? (
              <RefreshCw size={14} className="animate-spin" />
            ) : (
              <Play size={14} />
            )}
            <span>Simulate Over Outcome</span>
          </button>
        </div>

        {/* 3 Selectors: Batter, Scenario, Bowler */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Batter Selector */}
          <div className="p-4 rounded-xl bg-canvas-surface border border-white/10 space-y-3">
            <span className="text-[10px] font-mono uppercase text-text-tertiary">
              Select Pressure Batter
            </span>
            <div className="flex items-center gap-3">
              <div className="w-12 h-14 rounded-lg overflow-hidden bg-canvas border border-white/10 shrink-0">
                <img
                  src={batter.image}
                  alt={batter.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1">
                <select
                  value={selectedBatterId}
                  onChange={(e) => setSelectedBatterId(Number(e.target.value))}
                  className="w-full bg-canvas border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-text-primary font-sans focus:outline-none focus:border-royal-pink"
                >
                  {TOP_10_BATTERS.map((b) => (
                    <option key={b.playerId} value={b.playerId}>
                      #{b.rank} {b.name} (SR: {b.pressureSR})
                    </option>
                  ))}
                </select>
                <div className="text-[10px] font-mono text-royal-pink mt-1">
                  Clutch Lift (δ): +{batter.delta}
                </div>
              </div>
            </div>
          </div>

          {/* Scenario Selector */}
          <div className="p-4 rounded-xl bg-canvas-surface border border-royal-gold/30 space-y-3">
            <span className="text-[10px] font-mono uppercase text-royal-gold font-bold">
              Match Situation Scenario
            </span>
            <select
              value={selectedSituationIndex}
              onChange={(e) => setSelectedSituationIndex(Number(e.target.value))}
              className="w-full bg-canvas border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-text-primary font-sans focus:outline-none focus:border-royal-gold"
            >
              {MATCH_SITUATIONS.map((s, idx) => (
                <option key={idx} value={idx}>
                  {s.name} ({s.targetRuns} off {s.ballsRemaining}b, {s.wicketsRemaining} wkts in hand)
                </option>
              ))}
            </select>
            <div className="text-[10px] font-mono text-text-secondary flex justify-between">
              <span>RRR: {situation.requiredRunRate.toFixed(2)}</span>
              <span className="text-royal-pink">LI: {situation.pressureIndex.toFixed(2)} ({situation.pressureCategory})</span>
            </div>
          </div>

          {/* Bowler Selector */}
          <div className="p-4 rounded-xl bg-canvas-surface border border-white/10 space-y-3">
            <span className="text-[10px] font-mono uppercase text-text-tertiary">
              Select Pressure Bowler
            </span>
            <div className="flex items-center gap-3">
              <div className="w-12 h-14 rounded-lg overflow-hidden bg-canvas border border-white/10 shrink-0">
                <img
                  src={bowler.image}
                  alt={bowler.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1">
                <select
                  value={selectedBowlerId}
                  onChange={(e) => setSelectedBowlerId(Number(e.target.value))}
                  className="w-full bg-canvas border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-text-primary font-sans focus:outline-none focus:border-sky-400"
                >
                  {TOP_10_BOWLERS.map((w) => (
                    <option key={w.playerId} value={w.playerId}>
                      #{w.rank} {w.name} (Econ: {w.pressureEconomy})
                    </option>
                  ))}
                </select>
                <div className="text-[10px] font-mono text-sky-400 mt-1">
                  Squeeze Factor (θ): +{bowler.theta}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simulation Output Card */}
        {simulationResult && (
          <div className="p-5 rounded-2xl bg-canvas-surface border border-royal-pink/40 space-y-4 animate-in fade-in">
            {/* Probability Win Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="font-bold text-royal-pink">
                  {batter.name} Win Prob: {simulationResult.batterWin}%
                </span>
                <span className="font-bold text-sky-400">
                  {bowler.name} Defense Prob: {simulationResult.bowlerWin}%
                </span>
              </div>
              <div className="h-2.5 w-full bg-canvas rounded-full overflow-hidden flex">
                <div
                  className="h-full bg-royal-pink rounded-l-full transition-all duration-500"
                  style={{ width: `${simulationResult.batterWin}%` }}
                />
                <div
                  className="h-full bg-sky-400 rounded-r-full transition-all duration-500"
                  style={{ width: `${simulationResult.bowlerWin}%` }}
                />
              </div>
            </div>

            {/* Ball-by-Ball Probability Distribution */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="text-[9px] text-text-tertiary uppercase">Boundary % (4s/6s)</div>
                <div className="text-lg font-bold text-royal-pink">{simulationResult.boundaryPct}%</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="text-[9px] text-text-tertiary uppercase">Dot Ball %</div>
                <div className="text-lg font-bold text-sky-400">{simulationResult.dotPct}%</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="text-[9px] text-text-tertiary uppercase">Strike Rotation %</div>
                <div className="text-lg font-bold text-text-secondary">{simulationResult.singlesPct}%</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="text-[9px] text-text-tertiary uppercase">Wicket Probability</div>
                <div className="text-lg font-bold text-royal-gold">{simulationResult.wicketPct}%</div>
              </div>
            </div>

            {/* RR Tactical Directive */}
            <div className="p-3.5 rounded-xl bg-royal-pink/10 border border-royal-pink/20 text-xs text-text-primary leading-relaxed">
              <span className="font-mono font-bold text-royal-pink uppercase mr-2">
                Simulated Match Insight:
              </span>
              {simulationResult.tacticalDirective}
            </div>
          </div>
        )}
      </GlassPanel>

      {/* Regression Context Coefficients Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-text-primary uppercase font-mono tracking-tight">
            Empirical Pressure Context Weights (Trained on 48,290 balls)
          </h3>
          <span className="text-xs font-mono text-text-tertiary">
            Multi-Variable Ridge Regression
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {CONTEXT_COEFFICIENTS.map((coef, idx) => (
            <GlassPanel key={idx} className="p-4 space-y-1.5 border-white/10 hover:border-royal-pink/40 transition-colors">
              <div className="text-[10px] font-mono text-text-tertiary uppercase flex items-center justify-between">
                <span>{coef.name}</span>
                <span className="text-royal-pink font-semibold">{coef.impact}</span>
              </div>
              <div className="text-2xl font-black font-mono text-text-primary">
                {coef.coefficient}
              </div>
              <div className="text-[11px] text-text-secondary leading-normal">
                {coef.interpretation}
              </div>
            </GlassPanel>
          ))}
        </div>
      </div>
    </div>
  );
};
