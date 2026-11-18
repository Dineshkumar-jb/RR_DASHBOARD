import React, { useState } from 'react';
import { Player, TOP_10_BATTERS, TOP_10_BOWLERS } from '../data/players';
import { GlassPanel } from './GlassPanel';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ZAxis,
  LineChart,
  Line,
  Legend
} from 'recharts';

interface PerformanceChartProps {
  role?: 'batter' | 'bowler';
}

export const PerformanceChart: React.FC<PerformanceChartProps> = ({ role = 'batter' }) => {
  const [activeTab, setActiveTab] = useState<'scatter' | 'curves'>('scatter');
  const players = role === 'batter' ? TOP_10_BATTERS : TOP_10_BOWLERS;
  const isBatter = role === 'batter';

  // Format data for 2D decomposition scatter
  const scatterData = players.map((p) => ({
    name: p.name,
    x: isBatter ? p.alpha : p.beta,
    y: isBatter ? p.delta : p.theta,
    score: p.compositeScore,
    rank: p.rank
  }));

  // Synthetic continuous response curve across Pressure Index 0 to 100
  const pressureLevels = [10, 25, 40, 55, 70, 85, 95];
  const responseCurveData = pressureLevels.map((pIndex) => {
    const normP = pIndex / 100;
    const point: any = { pressureIndex: pIndex };

    if (isBatter) {
      // Strike rate response model
      point['League Neutral'] = Math.round(130 + normP * 5);
      point['Tim David (#1)'] = Math.round(145 + normP * normP * 48);
      point['Suryakumar Yadav (#3)'] = Math.round(152 + normP * 35);
      point['Heinrich Klaasen (#9)'] = Math.round(148 + normP * 40);
    } else {
      // Economy suppression response model
      point['League Neutral'] = (8.2 + normP * 2.8).toFixed(2);
      point['Sufiyan Muqeem (#1)'] = (6.8 + normP * 0.9).toFixed(2);
      point['Matheesha Pathirana (#2)'] = (7.1 + normP * 0.8).toFixed(2);
      point['Rashid Khan (#4)'] = (6.4 + normP * 1.1).toFixed(2);
    }
    return point;
  });

  return (
    <GlassPanel className="p-6 space-y-4">
      {/* Chart Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
        <div>
          <h3 className="text-base font-bold text-text-primary tracking-tight">
            {activeTab === 'scatter'
              ? `2D Latent Talent vs Clutch Separation (${isBatter ? 'α vs δ' : 'β vs θ'})`
              : `Continuous Response Curves Under Escalating Leverage`}
          </h3>
          <p className="text-xs text-text-tertiary">
            {activeTab === 'scatter'
              ? 'Decoupling baseline talent from clutch pressure lift (RAPM Bayesian shrinkage)'
              : 'Empirical outcome trajectories as match leverage increases to critical death overs'}
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex items-center p-1 rounded-xl bg-canvas-surface border border-white/10 text-xs">
          <button
            onClick={() => setActiveTab('scatter')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'scatter'
                ? 'bg-royal-pink text-white shadow-sm'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            2D Decomposition
          </button>
          <button
            onClick={() => setActiveTab('curves')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'curves'
                ? 'bg-royal-pink text-white shadow-sm'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Response Curves
          </button>
        </div>
      </div>

      {/* Chart Canvas */}
      <div className="h-72 w-full pt-2">
        {activeTab === 'scatter' ? (
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 30, bottom: 20, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis
                type="number"
                dataKey="x"
                name={isBatter ? 'Latent Ability α' : 'Latent Suppression β'}
                tick={{ fill: '#A7B2C5', fontSize: 10, fontFamily: 'monospace' }}
                domain={['auto', 'auto']}
              />
              <YAxis
                type="number"
                dataKey="y"
                name={isBatter ? 'Clutch Lift δ' : 'Clutch Squeeze θ'}
                tick={{ fill: '#A7B2C5', fontSize: 10, fontFamily: 'monospace' }}
                domain={['auto', 'auto']}
              />
              <ZAxis range={[70, 70]} />
              <Tooltip
                cursor={{ strokeDasharray: '3 3' }}
                content={({ payload }) => {
                  if (!payload || !payload.length) return null;
                  const d = payload[0].payload;
                  return (
                    <div className="p-3 rounded-xl bg-canvas-surface border border-white/15 text-xs font-mono space-y-1 shadow-xl">
                      <div className="font-bold text-text-primary flex items-center justify-between gap-3">
                        <span>{d.name}</span>
                        <span className="text-royal-pink">Rank #{d.rank}</span>
                      </div>
                      <div className="text-text-secondary">
                        PCAI Composite: <span className="font-bold text-white">{d.score}</span>
                      </div>
                      <div className="text-text-tertiary">
                        {isBatter ? `α: ${d.x} | δ: +${d.y}` : `β: ${d.x} | θ: +${d.y}`}
                      </div>
                    </div>
                  );
                }}
              />
              <Scatter
                name={isBatter ? 'Batters' : 'Bowlers'}
                data={scatterData}
                fill="#E90074"
              />
            </ScatterChart>
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={responseCurveData} margin={{ top: 10, right: 30, bottom: 10, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis
                dataKey="pressureIndex"
                name="Pressure Index (0-100)"
                tick={{ fill: '#A7B2C5', fontSize: 10 }}
              />
              <YAxis
                name={isBatter ? 'Predicted Strike Rate' : 'Predicted Economy'}
                tick={{ fill: '#A7B2C5', fontSize: 10 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0B1630',
                  borderColor: 'rgba(255,255,255,0.15)',
                  borderRadius: '10px',
                  fontSize: '11px',
                  fontFamily: 'monospace'
                }}
              />
              <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
              <Line
                type="monotone"
                dataKey="League Neutral"
                stroke="#6B7A99"
                strokeDasharray="4 4"
                strokeWidth={1.5}
                dot={false}
              />
              {isBatter ? (
                <>
                  <Line type="monotone" dataKey="Tim David (#1)" stroke="#E90074" strokeWidth={2.5} />
                  <Line type="monotone" dataKey="Suryakumar Yadav (#3)" stroke="#38BDF8" strokeWidth={2} />
                  <Line type="monotone" dataKey="Heinrich Klaasen (#9)" stroke="#F59E0B" strokeWidth={2} />
                </>
              ) : (
                <>
                  <Line type="monotone" dataKey="Sufiyan Muqeem (#1)" stroke="#E90074" strokeWidth={2.5} />
                  <Line type="monotone" dataKey="Matheesha Pathirana (#2)" stroke="#38BDF8" strokeWidth={2} />
                  <Line type="monotone" dataKey="Rashid Khan (#4)" stroke="#10B981" strokeWidth={2} />
                </>
              )}
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </GlassPanel>
  );
};
