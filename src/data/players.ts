// AUTO-GENERATED FROM VERIFIED SUPERR SELECTOR SEASON 2 ANALYTICAL ENGINE
import { getAssetUrl } from '../utils/assets';
export interface RadarMetric {
  metric: string;
  value: number;
  fullMark: number;
}

export interface TrajectoryPoint {
  phase: string;
  rating: number;
  pressure: number;
}

export interface Player {
  rank: number;
  playerId: number;
  name: string;
  role: 'batter' | 'bowler';
  image: string;
  compositeScore: number;
  confidenceInterval: [number, number];
  confidenceTier: string;
  matches: number;
  pressureBalls: number;
  // Batter metrics
  pressureRuns?: number | null;
  pressureSR?: number | null;
  baselineSR?: number | null;
  srLiftPct?: number | null;
  pressureAvg?: number | null;
  pressureBoundaryPct?: number | null;
  pressureDotPct?: number | null;
  alpha?: number | null;
  delta?: number | null;
  peakImpact?: number | null;
  // Bowler metrics
  pressureRunsConceded?: number | null;
  pressureWickets?: number | null;
  pressureEconomy?: number | null;
  baselineEconomy?: number | null;
  economyImprovement?: number | null;
  wicketsPerBall?: number | null;
  pressureBoundaryConcededPct?: number | null;
  beta?: number | null;
  theta?: number | null;
  peakSuppression?: number | null;
  // Scouting & Franchise Intelligence
  auctionTier: string;
  auctionPriceRange: string;
  rrTacticalFit: string;
  keyStrengths: string[];
  keyWeaknesses: string[];
  scoutingNarrative: string;
  // Visualization
  radar: RadarMetric[];
  trajectory: TrajectoryPoint[];
}

export const TOP_10_BATTERS: Player[] = [
  {
    "rank": 1,
    "playerId": 6396,
    "name": "Tim David",
    "role": "batter",
    "image": "/assets/players/batters/tim_david.jpg",
    "compositeScore": 94.7,
    "confidenceInterval": [
      175.4,
      204.5
    ],
    "confidenceTier": "High",
    "matches": 44,
    "pressureBalls": 379,
    "pressureRuns": 720,
    "pressureSR": 190.0,
    "baselineSR": 171.4,
    "srLiftPct": 10.8,
    "pressureAvg": 37.9,
    "pressureBoundaryPct": 26.6,
    "pressureDotPct": 30.9,
    "alpha": 0.357,
    "delta": 0.079,
    "peakImpact": 0.436,
    "pressureRunsConceded": 0,
    "pressureWickets": 0,
    "pressureEconomy": null,
    "baselineEconomy": null,
    "economyImprovement": null,
    "wicketsPerBall": null,
    "pressureBoundaryConcededPct": null,
    "beta": null,
    "theta": null,
    "peakSuppression": null,
    "auctionTier": "Tier 1 Priority Target (Finisher)",
    "auctionPriceRange": "10.0 - 14.0",
    "rrTacticalFit": "Designated #6/#7 Death Finisher. Pairs with Shimron Hetmyer to provide lethal dual-finishing power in overs 16-20. Supreme boundary clearing against 140+ kph pace.",
    "keyStrengths": [
      "Elite regularized peak impact (+0.436 runs/ball above expectation)",
      "Positive clutch elevation factor (delta = +0.079)",
      "Lethal boundary conversion under pressure (26.6%)",
      "Opponent-adjusted pressure strike rate of 190.0"
    ],
    "keyWeaknesses": [
      "Pressure dot-ball frequency (30.9%)",
      "Subject to tactical squeeze if matched against elite wrist-spin"
    ],
    "scoutingNarrative": "Tim David ranks #1 among all qualified tournament batters with an exceptional Pressure-Conditioned Adjusted Impact (PCAI) score of 94.7/100. Across 379 high-pressure deliveries in 44 matches, he maintains an adjusted baseline rating of +0.357 runs/ball above context and an elite clutch elevation factor of +0.079, reaching a peak pressure output of +0.436 runs/ball (empirical pressure SR: 190.0, 95% CI: [175.4, 204.5]). His positive scoring lift of +10.8% and boundary conversion of 26.6% under pressure confirm that his output expands rather than contracts when match leverage peaks.",
    "radar": [
      {
        "metric": "Clutch Lift (\u03b4)",
        "value": 77.4,
        "fullMark": 100
      },
      {
        "metric": "Pressure SR",
        "value": 75.0,
        "fullMark": 100
      },
      {
        "metric": "Boundary Fire",
        "value": 100,
        "fullMark": 100
      },
      {
        "metric": "Dot Resistance",
        "value": 47.8,
        "fullMark": 100
      },
      {
        "metric": "Wicket Preserv.",
        "value": 83.4,
        "fullMark": 100
      },
      {
        "metric": "Sample Depth",
        "value": 94.8,
        "fullMark": 100
      }
    ],
    "trajectory": [
      {
        "phase": "Match 1-3",
        "rating": 162.8,
        "pressure": 174.8
      },
      {
        "phase": "Mid League",
        "rating": 174.8,
        "pressure": 186.2
      },
      {
        "phase": "Must-Win",
        "rating": 168.0,
        "pressure": 199.5
      },
      {
        "phase": "Playoffs",
        "rating": 173.1,
        "pressure": 205.2
      },
      {
        "phase": "Peak Clutch",
        "rating": 171.4,
        "pressure": 190.0
      }
    ]
  },
  {
    "rank": 2,
    "playerId": 2756,
    "name": "Shashank Singh",
    "role": "batter",
    "image": "/assets/players/batters/shashank_singh.jpg",
    "compositeScore": 93.74,
    "confidenceInterval": [
      141.2,
      187.2
    ],
    "confidenceTier": "Medium-High",
    "matches": 20,
    "pressureBalls": 162,
    "pressureRuns": 266,
    "pressureSR": 164.2,
    "baselineSR": 160.6,
    "srLiftPct": 2.3,
    "pressureAvg": 38.0,
    "pressureBoundaryPct": 20.4,
    "pressureDotPct": 27.2,
    "alpha": 0.259,
    "delta": 0.075,
    "peakImpact": 0.334,
    "pressureRunsConceded": 0,
    "pressureWickets": 0,
    "pressureEconomy": null,
    "baselineEconomy": null,
    "economyImprovement": null,
    "wicketsPerBall": null,
    "pressureBoundaryConcededPct": null,
    "beta": null,
    "theta": null,
    "peakSuppression": null,
    "auctionTier": "Tier 1 High-Value Buy",
    "auctionPriceRange": "6.0 - 8.5",
    "rrTacticalFit": "Middle-to-Death Float Batter (#5/#6). Proven ability to orchestrate chases from high-collapse scenarios. Extreme value-to-cost ratio for RR's purse efficiency.",
    "keyStrengths": [
      "Elite regularized peak impact (+0.334 runs/ball above expectation)",
      "Positive clutch elevation factor (delta = +0.075)",
      "Lethal boundary conversion under pressure (20.4%)",
      "Opponent-adjusted pressure strike rate of 164.2"
    ],
    "keyWeaknesses": [
      "Pressure dot-ball frequency (27.2%)",
      "Subject to tactical squeeze if matched against elite wrist-spin"
    ],
    "scoutingNarrative": "Shashank Singh ranks #2 among all qualified tournament batters with an exceptional Pressure-Conditioned Adjusted Impact (PCAI) score of 93.7/100. Across 162 high-pressure deliveries in 20 matches, he maintains an adjusted baseline rating of +0.259 runs/ball above context and an elite clutch elevation factor of +0.075, reaching a peak pressure output of +0.334 runs/ball (empirical pressure SR: 164.2, 95% CI: [141.2, 187.2]). His positive scoring lift of +2.3% and boundary conversion of 20.4% under pressure confirm that his output expands rather than contracts when match leverage peaks.",
    "radar": [
      {
        "metric": "Clutch Lift (\u03b4)",
        "value": 75.0,
        "fullMark": 100
      },
      {
        "metric": "Pressure SR",
        "value": 53.5,
        "fullMark": 100
      },
      {
        "metric": "Boundary Fire",
        "value": 81.6,
        "fullMark": 100
      },
      {
        "metric": "Dot Resistance",
        "value": 57.0,
        "fullMark": 100
      },
      {
        "metric": "Wicket Preserv.",
        "value": 83.6,
        "fullMark": 100
      },
      {
        "metric": "Sample Depth",
        "value": 40.5,
        "fullMark": 100
      }
    ],
    "trajectory": [
      {
        "phase": "Match 1-3",
        "rating": 152.5,
        "pressure": 151.1
      },
      {
        "phase": "Mid League",
        "rating": 163.8,
        "pressure": 160.9
      },
      {
        "phase": "Must-Win",
        "rating": 157.3,
        "pressure": 172.4
      },
      {
        "phase": "Playoffs",
        "rating": 162.2,
        "pressure": 177.3
      },
      {
        "phase": "Peak Clutch",
        "rating": 160.6,
        "pressure": 164.2
      }
    ]
  },
  {
    "rank": 3,
    "playerId": 1699,
    "name": "Suryakumar Yadav",
    "role": "batter",
    "image": "/assets/players/batters/suryakumar_yadav.jpg",
    "compositeScore": 93.14,
    "confidenceInterval": [
      186.9,
      228.0
    ],
    "confidenceTier": "Medium-High",
    "matches": 25,
    "pressureBalls": 175,
    "pressureRuns": 363,
    "pressureSR": 207.4,
    "baselineSR": 163.7,
    "srLiftPct": 26.7,
    "pressureAvg": 24.2,
    "pressureBoundaryPct": 33.1,
    "pressureDotPct": 30.9,
    "alpha": 0.331,
    "delta": 0.11,
    "peakImpact": 0.44,
    "pressureRunsConceded": 0,
    "pressureWickets": 0,
    "pressureEconomy": null,
    "baselineEconomy": null,
    "economyImprovement": null,
    "wicketsPerBall": null,
    "pressureBoundaryConcededPct": null,
    "beta": null,
    "theta": null,
    "peakSuppression": null,
    "auctionTier": "Marquee / Elite Retention Category",
    "auctionPriceRange": "18.0+",
    "rrTacticalFit": "Top/Middle Order Pivot (#3/#4). 360-degree scoring manipulates field restrictions and collapses boundary defense regardless of bowler quality.",
    "keyStrengths": [
      "Elite regularized peak impact (+0.440 runs/ball above expectation)",
      "Positive clutch elevation factor (delta = +0.110)",
      "Lethal boundary conversion under pressure (33.1%)",
      "Opponent-adjusted pressure strike rate of 207.4"
    ],
    "keyWeaknesses": [
      "Pressure dot-ball frequency (30.9%)",
      "Subject to tactical squeeze if matched against elite wrist-spin"
    ],
    "scoutingNarrative": "Suryakumar Yadav ranks #3 among all qualified tournament batters with an exceptional Pressure-Conditioned Adjusted Impact (PCAI) score of 93.1/100. Across 175 high-pressure deliveries in 25 matches, he maintains an adjusted baseline rating of +0.331 runs/ball above context and an elite clutch elevation factor of +0.110, reaching a peak pressure output of +0.440 runs/ball (empirical pressure SR: 207.4, 95% CI: [186.9, 228.0]). His positive scoring lift of +26.7% and boundary conversion of 33.1% under pressure confirm that his output expands rather than contracts when match leverage peaks.",
    "radar": [
      {
        "metric": "Clutch Lift (\u03b4)",
        "value": 96.0,
        "fullMark": 100
      },
      {
        "metric": "Pressure SR",
        "value": 89.5,
        "fullMark": 100
      },
      {
        "metric": "Boundary Fire",
        "value": 100,
        "fullMark": 100
      },
      {
        "metric": "Dot Resistance",
        "value": 47.8,
        "fullMark": 100
      },
      {
        "metric": "Wicket Preserv.",
        "value": 53.2,
        "fullMark": 100
      },
      {
        "metric": "Sample Depth",
        "value": 43.8,
        "fullMark": 100
      }
    ],
    "trajectory": [
      {
        "phase": "Match 1-3",
        "rating": 155.5,
        "pressure": 190.8
      },
      {
        "phase": "Mid League",
        "rating": 167.0,
        "pressure": 203.3
      },
      {
        "phase": "Must-Win",
        "rating": 160.4,
        "pressure": 217.8
      },
      {
        "phase": "Playoffs",
        "rating": 165.3,
        "pressure": 224.0
      },
      {
        "phase": "Peak Clutch",
        "rating": 163.7,
        "pressure": 207.4
      }
    ]
  },
  {
    "rank": 4,
    "playerId": 4708,
    "name": "Rinku Singh",
    "role": "batter",
    "image": "/assets/players/batters/rinku_singh.jpg",
    "compositeScore": 92.57,
    "confidenceInterval": [
      163.8,
      197.4
    ],
    "confidenceTier": "High",
    "matches": 33,
    "pressureBalls": 294,
    "pressureRuns": 531,
    "pressureSR": 180.6,
    "baselineSR": 144.2,
    "srLiftPct": 25.2,
    "pressureAvg": 44.2,
    "pressureBoundaryPct": 27.6,
    "pressureDotPct": 32.7,
    "alpha": 0.118,
    "delta": 0.117,
    "peakImpact": 0.235,
    "pressureRunsConceded": 0,
    "pressureWickets": 0,
    "pressureEconomy": null,
    "baselineEconomy": null,
    "economyImprovement": null,
    "wicketsPerBall": null,
    "pressureBoundaryConcededPct": null,
    "beta": null,
    "theta": null,
    "peakSuppression": null,
    "auctionTier": "Tier 1 Match-Winner",
    "auctionPriceRange": "11.0 - 15.0",
    "rrTacticalFit": "Clutch Chase Specialist (#5/#6). Unmatched psychological calm in high-RPR chases. Highest pure clutch lift (+0.117 runs/ball) in the entire tournament dataset.",
    "keyStrengths": [
      "Elite regularized peak impact (+0.235 runs/ball above expectation)",
      "Positive clutch elevation factor (delta = +0.117)",
      "Lethal boundary conversion under pressure (27.6%)",
      "Opponent-adjusted pressure strike rate of 180.6"
    ],
    "keyWeaknesses": [
      "Pressure dot-ball frequency (32.7%)",
      "Subject to tactical squeeze if matched against elite wrist-spin"
    ],
    "scoutingNarrative": "Rinku Singh ranks #4 among all qualified tournament batters with an exceptional Pressure-Conditioned Adjusted Impact (PCAI) score of 92.6/100. Across 294 high-pressure deliveries in 33 matches, he maintains an adjusted baseline rating of +0.118 runs/ball above context and an elite clutch elevation factor of +0.117, reaching a peak pressure output of +0.235 runs/ball (empirical pressure SR: 180.6, 95% CI: [163.8, 197.4]). His positive scoring lift of +25.2% and boundary conversion of 27.6% under pressure confirm that his output expands rather than contracts when match leverage peaks.",
    "radar": [
      {
        "metric": "Clutch Lift (\u03b4)",
        "value": 100,
        "fullMark": 100
      },
      {
        "metric": "Pressure SR",
        "value": 67.2,
        "fullMark": 100
      },
      {
        "metric": "Boundary Fire",
        "value": 100,
        "fullMark": 100
      },
      {
        "metric": "Dot Resistance",
        "value": 43.2,
        "fullMark": 100
      },
      {
        "metric": "Wicket Preserv.",
        "value": 97.4,
        "fullMark": 100
      },
      {
        "metric": "Sample Depth",
        "value": 73.5,
        "fullMark": 100
      }
    ],
    "trajectory": [
      {
        "phase": "Match 1-3",
        "rating": 137.0,
        "pressure": 166.2
      },
      {
        "phase": "Mid League",
        "rating": 147.1,
        "pressure": 177.0
      },
      {
        "phase": "Must-Win",
        "rating": 141.4,
        "pressure": 189.6
      },
      {
        "phase": "Playoffs",
        "rating": 145.7,
        "pressure": 195.1
      },
      {
        "phase": "Peak Clutch",
        "rating": 144.2,
        "pressure": 180.6
      }
    ]
  },
  {
    "rank": 5,
    "playerId": 8101,
    "name": "Ashutosh Sharma",
    "role": "batter",
    "image": "/assets/players/batters/ashutosh_sharma.jpg",
    "compositeScore": 90.44,
    "confidenceInterval": [
      161.5,
      204.2
    ],
    "confidenceTier": "Medium-High",
    "matches": 24,
    "pressureBalls": 181,
    "pressureRuns": 331,
    "pressureSR": 182.9,
    "baselineSR": 148.4,
    "srLiftPct": 23.2,
    "pressureAvg": 25.5,
    "pressureBoundaryPct": 26.5,
    "pressureDotPct": 29.3,
    "alpha": 0.242,
    "delta": 0.095,
    "peakImpact": 0.337,
    "pressureRunsConceded": 0,
    "pressureWickets": 0,
    "pressureEconomy": null,
    "baselineEconomy": null,
    "economyImprovement": null,
    "wicketsPerBall": null,
    "pressureBoundaryConcededPct": null,
    "beta": null,
    "theta": null,
    "peakSuppression": null,
    "auctionTier": "Emerging Impact Player",
    "auctionPriceRange": "4.0 - 6.5",
    "rrTacticalFit": "Late-Innings Dynamic Striker (#7). High intent from ball one under extreme pressure (182.9 SR). Ideal candidate for Impact Player substitution.",
    "keyStrengths": [
      "Elite regularized peak impact (+0.337 runs/ball above expectation)",
      "Positive clutch elevation factor (delta = +0.095)",
      "Lethal boundary conversion under pressure (26.5%)",
      "Opponent-adjusted pressure strike rate of 182.9"
    ],
    "keyWeaknesses": [
      "Pressure dot-ball frequency (29.3%)",
      "Subject to tactical squeeze if matched against elite wrist-spin"
    ],
    "scoutingNarrative": "Ashutosh Sharma ranks #5 among all qualified tournament batters with an exceptional Pressure-Conditioned Adjusted Impact (PCAI) score of 90.4/100. Across 181 high-pressure deliveries in 24 matches, he maintains an adjusted baseline rating of +0.242 runs/ball above context and an elite clutch elevation factor of +0.095, reaching a peak pressure output of +0.337 runs/ball (empirical pressure SR: 182.9, 95% CI: [161.5, 204.2]). His positive scoring lift of +23.2% and boundary conversion of 26.5% under pressure confirm that his output expands rather than contracts when match leverage peaks.",
    "radar": [
      {
        "metric": "Clutch Lift (\u03b4)",
        "value": 87.0,
        "fullMark": 100
      },
      {
        "metric": "Pressure SR",
        "value": 69.1,
        "fullMark": 100
      },
      {
        "metric": "Boundary Fire",
        "value": 100,
        "fullMark": 100
      },
      {
        "metric": "Dot Resistance",
        "value": 51.8,
        "fullMark": 100
      },
      {
        "metric": "Wicket Preserv.",
        "value": 56.0,
        "fullMark": 100
      },
      {
        "metric": "Sample Depth",
        "value": 45.2,
        "fullMark": 100
      }
    ],
    "trajectory": [
      {
        "phase": "Match 1-3",
        "rating": 141.0,
        "pressure": 168.2
      },
      {
        "phase": "Mid League",
        "rating": 151.4,
        "pressure": 179.2
      },
      {
        "phase": "Must-Win",
        "rating": 145.5,
        "pressure": 192.0
      },
      {
        "phase": "Playoffs",
        "rating": 149.9,
        "pressure": 197.5
      },
      {
        "phase": "Peak Clutch",
        "rating": 148.4,
        "pressure": 182.9
      }
    ]
  },
  {
    "rank": 6,
    "playerId": 143,
    "name": "Dinesh Karthik",
    "role": "batter",
    "image": "/assets/players/batters/dinesh_karthik.jpg",
    "compositeScore": 90.4,
    "confidenceInterval": [
      163.4,
      198.1
    ],
    "confidenceTier": "High",
    "matches": 36,
    "pressureBalls": 275,
    "pressureRuns": 497,
    "pressureSR": 180.7,
    "baselineSR": 155.8,
    "srLiftPct": 16.0,
    "pressureAvg": 26.2,
    "pressureBoundaryPct": 26.2,
    "pressureDotPct": 31.6,
    "alpha": 0.202,
    "delta": 0.067,
    "peakImpact": 0.269,
    "pressureRunsConceded": 0,
    "pressureWickets": 0,
    "pressureEconomy": null,
    "baselineEconomy": null,
    "economyImprovement": null,
    "wicketsPerBall": null,
    "pressureBoundaryConcededPct": null,
    "beta": null,
    "theta": null,
    "peakSuppression": null,
    "auctionTier": "Veteran Tactical Mentor / Finisher",
    "auctionPriceRange": "3.5 - 5.5",
    "rrTacticalFit": "Specialist Death Finisher / Wicketkeeper backup. Flawless boundary option execution (lap shots, ramp) against elite death bowling.",
    "keyStrengths": [
      "Elite regularized peak impact (+0.269 runs/ball above expectation)",
      "Positive clutch elevation factor (delta = +0.067)",
      "Lethal boundary conversion under pressure (26.2%)",
      "Opponent-adjusted pressure strike rate of 180.7"
    ],
    "keyWeaknesses": [
      "Pressure dot-ball frequency (31.6%)",
      "Subject to tactical squeeze if matched against elite wrist-spin"
    ],
    "scoutingNarrative": "Dinesh Karthik ranks #6 among all qualified tournament batters with an exceptional Pressure-Conditioned Adjusted Impact (PCAI) score of 90.4/100. Across 275 high-pressure deliveries in 36 matches, he maintains an adjusted baseline rating of +0.202 runs/ball above context and an elite clutch elevation factor of +0.067, reaching a peak pressure output of +0.269 runs/ball (empirical pressure SR: 180.7, 95% CI: [163.4, 198.1]). His positive scoring lift of +16.0% and boundary conversion of 26.2% under pressure confirm that his output expands rather than contracts when match leverage peaks.",
    "radar": [
      {
        "metric": "Clutch Lift (\u03b4)",
        "value": 70.2,
        "fullMark": 100
      },
      {
        "metric": "Pressure SR",
        "value": 67.3,
        "fullMark": 100
      },
      {
        "metric": "Boundary Fire",
        "value": 100,
        "fullMark": 100
      },
      {
        "metric": "Dot Resistance",
        "value": 46.0,
        "fullMark": 100
      },
      {
        "metric": "Wicket Preserv.",
        "value": 57.6,
        "fullMark": 100
      },
      {
        "metric": "Sample Depth",
        "value": 68.8,
        "fullMark": 100
      }
    ],
    "trajectory": [
      {
        "phase": "Match 1-3",
        "rating": 148.0,
        "pressure": 166.3
      },
      {
        "phase": "Mid League",
        "rating": 158.9,
        "pressure": 177.1
      },
      {
        "phase": "Must-Win",
        "rating": 152.7,
        "pressure": 189.8
      },
      {
        "phase": "Playoffs",
        "rating": 157.4,
        "pressure": 195.2
      },
      {
        "phase": "Peak Clutch",
        "rating": 155.8,
        "pressure": 180.7
      }
    ]
  },
  {
    "rank": 7,
    "playerId": 3647,
    "name": "Shreyas Iyer",
    "role": "batter",
    "image": "/assets/players/batters/shreyas_iyer.jpg",
    "compositeScore": 90.03,
    "confidenceInterval": [
      127.9,
      193.1
    ],
    "confidenceTier": "Medium",
    "matches": 12,
    "pressureBalls": 81,
    "pressureRuns": 130,
    "pressureSR": 160.5,
    "baselineSR": 153.1,
    "srLiftPct": 4.8,
    "pressureAvg": 32.5,
    "pressureBoundaryPct": 18.5,
    "pressureDotPct": 16.0,
    "alpha": 0.224,
    "delta": 0.078,
    "peakImpact": 0.302,
    "pressureRunsConceded": 0,
    "pressureWickets": 0,
    "pressureEconomy": null,
    "baselineEconomy": null,
    "economyImprovement": null,
    "wicketsPerBall": null,
    "pressureBoundaryConcededPct": null,
    "beta": null,
    "theta": null,
    "peakSuppression": null,
    "auctionTier": "Leadership & Middle-Overs Anchor",
    "auctionPriceRange": "12.0 - 16.0",
    "rrTacticalFit": "Spin Destroyer & Middle-Overs Stabilizer (#3/#4). Counter-attacks spin collapses and anchors target chases under scoreboard pressure.",
    "keyStrengths": [
      "Elite regularized peak impact (+0.302 runs/ball above expectation)",
      "Positive clutch elevation factor (delta = +0.078)",
      "Lethal boundary conversion under pressure (18.5%)",
      "Opponent-adjusted pressure strike rate of 160.5"
    ],
    "keyWeaknesses": [
      "Requires protective entry timing to maximize overs 16-20 impact",
      "Subject to tactical squeeze if matched against elite wrist-spin"
    ],
    "scoutingNarrative": "Shreyas Iyer ranks #7 among all qualified tournament batters with an exceptional Pressure-Conditioned Adjusted Impact (PCAI) score of 90.0/100. Across 81 high-pressure deliveries in 12 matches, he maintains an adjusted baseline rating of +0.224 runs/ball above context and an elite clutch elevation factor of +0.078, reaching a peak pressure output of +0.302 runs/ball (empirical pressure SR: 160.5, 95% CI: [127.9, 193.1]). His positive scoring lift of +4.8% and boundary conversion of 18.5% under pressure confirm that his output expands rather than contracts when match leverage peaks.",
    "radar": [
      {
        "metric": "Clutch Lift (\u03b4)",
        "value": 76.8,
        "fullMark": 100
      },
      {
        "metric": "Pressure SR",
        "value": 50.4,
        "fullMark": 100
      },
      {
        "metric": "Boundary Fire",
        "value": 74.0,
        "fullMark": 100
      },
      {
        "metric": "Dot Resistance",
        "value": 85.0,
        "fullMark": 100
      },
      {
        "metric": "Wicket Preserv.",
        "value": 71.5,
        "fullMark": 100
      },
      {
        "metric": "Sample Depth",
        "value": 20.2,
        "fullMark": 100
      }
    ],
    "trajectory": [
      {
        "phase": "Match 1-3",
        "rating": 145.4,
        "pressure": 147.7
      },
      {
        "phase": "Mid League",
        "rating": 156.2,
        "pressure": 157.3
      },
      {
        "phase": "Must-Win",
        "rating": 150.0,
        "pressure": 168.5
      },
      {
        "phase": "Playoffs",
        "rating": 154.6,
        "pressure": 173.3
      },
      {
        "phase": "Peak Clutch",
        "rating": 153.1,
        "pressure": 160.5
      }
    ]
  },
  {
    "rank": 8,
    "playerId": 20702,
    "name": "Tristan Stubbs",
    "role": "batter",
    "image": "/assets/players/batters/tristan_stubbs.jpg",
    "compositeScore": 89.35,
    "confidenceInterval": [
      165.3,
      202.5
    ],
    "confidenceTier": "High",
    "matches": 27,
    "pressureBalls": 236,
    "pressureRuns": 434,
    "pressureSR": 183.9,
    "baselineSR": 139.5,
    "srLiftPct": 31.8,
    "pressureAvg": 43.4,
    "pressureBoundaryPct": 26.3,
    "pressureDotPct": 21.6,
    "alpha": 0.154,
    "delta": 0.078,
    "peakImpact": 0.232,
    "pressureRunsConceded": 0,
    "pressureWickets": 0,
    "pressureEconomy": null,
    "baselineEconomy": null,
    "economyImprovement": null,
    "wicketsPerBall": null,
    "pressureBoundaryConcededPct": null,
    "beta": null,
    "theta": null,
    "peakSuppression": null,
    "auctionTier": "Tier 1 Multi-Dimensional Weapon",
    "auctionPriceRange": "8.0 - 11.0",
    "rrTacticalFit": "Middle-Death Hybrid (#5/#6) + Wicketkeeping & off-spin utility. Exceptional boundary conversion (26.3%) against both express pace and mystery spin.",
    "keyStrengths": [
      "Elite regularized peak impact (+0.232 runs/ball above expectation)",
      "Positive clutch elevation factor (delta = +0.078)",
      "Lethal boundary conversion under pressure (26.3%)",
      "Opponent-adjusted pressure strike rate of 183.9"
    ],
    "keyWeaknesses": [
      "Requires protective entry timing to maximize overs 16-20 impact",
      "Subject to tactical squeeze if matched against elite wrist-spin"
    ],
    "scoutingNarrative": "Tristan Stubbs ranks #8 among all qualified tournament batters with an exceptional Pressure-Conditioned Adjusted Impact (PCAI) score of 89.3/100. Across 236 high-pressure deliveries in 27 matches, he maintains an adjusted baseline rating of +0.154 runs/ball above context and an elite clutch elevation factor of +0.078, reaching a peak pressure output of +0.232 runs/ball (empirical pressure SR: 183.9, 95% CI: [165.3, 202.5]). His positive scoring lift of +31.8% and boundary conversion of 26.3% under pressure confirm that his output expands rather than contracts when match leverage peaks.",
    "radar": [
      {
        "metric": "Clutch Lift (\u03b4)",
        "value": 76.8,
        "fullMark": 100
      },
      {
        "metric": "Pressure SR",
        "value": 69.9,
        "fullMark": 100
      },
      {
        "metric": "Boundary Fire",
        "value": 100,
        "fullMark": 100
      },
      {
        "metric": "Dot Resistance",
        "value": 71.0,
        "fullMark": 100
      },
      {
        "metric": "Wicket Preserv.",
        "value": 95.5,
        "fullMark": 100
      },
      {
        "metric": "Sample Depth",
        "value": 59.0,
        "fullMark": 100
      }
    ],
    "trajectory": [
      {
        "phase": "Match 1-3",
        "rating": 132.5,
        "pressure": 169.2
      },
      {
        "phase": "Mid League",
        "rating": 142.3,
        "pressure": 180.2
      },
      {
        "phase": "Must-Win",
        "rating": 136.7,
        "pressure": 193.1
      },
      {
        "phase": "Playoffs",
        "rating": 140.9,
        "pressure": 198.6
      },
      {
        "phase": "Peak Clutch",
        "rating": 139.5,
        "pressure": 183.9
      }
    ]
  },
  {
    "rank": 9,
    "playerId": 4260,
    "name": "Heinrich Klaasen",
    "role": "batter",
    "image": "/assets/players/batters/heinrich_klaasen.jpg",
    "compositeScore": 88.59,
    "confidenceInterval": [
      150.8,
      199.6
    ],
    "confidenceTier": "Medium-High",
    "matches": 20,
    "pressureBalls": 141,
    "pressureRuns": 247,
    "pressureSR": 175.2,
    "baselineSR": 166.2,
    "srLiftPct": 5.4,
    "pressureAvg": 19.0,
    "pressureBoundaryPct": 22.0,
    "pressureDotPct": 19.9,
    "alpha": 0.344,
    "delta": 0.058,
    "peakImpact": 0.402,
    "pressureRunsConceded": 0,
    "pressureWickets": 0,
    "pressureEconomy": null,
    "baselineEconomy": null,
    "economyImprovement": null,
    "wicketsPerBall": null,
    "pressureBoundaryConcededPct": null,
    "beta": null,
    "theta": null,
    "peakSuppression": null,
    "auctionTier": "Tier 1 Explosive Batter / Wicketkeeper",
    "auctionPriceRange": "15.0 - 18.0",
    "rrTacticalFit": "Unrivaled Middle-Overs Spin Enforcer (#4/#5). Converts good-length balls into boundaries; neutralizes opposition primary spin attacks.",
    "keyStrengths": [
      "Elite regularized peak impact (+0.402 runs/ball above expectation)",
      "Positive clutch elevation factor (delta = +0.058)",
      "Lethal boundary conversion under pressure (22.0%)",
      "Opponent-adjusted pressure strike rate of 175.2"
    ],
    "keyWeaknesses": [
      "Requires protective entry timing to maximize overs 16-20 impact",
      "Subject to tactical squeeze if matched against elite wrist-spin"
    ],
    "scoutingNarrative": "Heinrich Klaasen ranks #9 among all qualified tournament batters with an exceptional Pressure-Conditioned Adjusted Impact (PCAI) score of 88.6/100. Across 141 high-pressure deliveries in 20 matches, he maintains an adjusted baseline rating of +0.344 runs/ball above context and an elite clutch elevation factor of +0.058, reaching a peak pressure output of +0.402 runs/ball (empirical pressure SR: 175.2, 95% CI: [150.8, 199.6]). His positive scoring lift of +5.4% and boundary conversion of 22.0% under pressure confirm that his output expands rather than contracts when match leverage peaks.",
    "radar": [
      {
        "metric": "Clutch Lift (\u03b4)",
        "value": 64.8,
        "fullMark": 100
      },
      {
        "metric": "Pressure SR",
        "value": 62.7,
        "fullMark": 100
      },
      {
        "metric": "Boundary Fire",
        "value": 88.0,
        "fullMark": 100
      },
      {
        "metric": "Dot Resistance",
        "value": 75.2,
        "fullMark": 100
      },
      {
        "metric": "Wicket Preserv.",
        "value": 41.8,
        "fullMark": 100
      },
      {
        "metric": "Sample Depth",
        "value": 35.2,
        "fullMark": 100
      }
    ],
    "trajectory": [
      {
        "phase": "Match 1-3",
        "rating": 157.9,
        "pressure": 161.2
      },
      {
        "phase": "Mid League",
        "rating": 169.5,
        "pressure": 171.7
      },
      {
        "phase": "Must-Win",
        "rating": 162.9,
        "pressure": 183.9
      },
      {
        "phase": "Playoffs",
        "rating": 167.9,
        "pressure": 189.2
      },
      {
        "phase": "Peak Clutch",
        "rating": 166.2,
        "pressure": 175.2
      }
    ]
  },
  {
    "rank": 10,
    "playerId": 7897,
    "name": "Namboori Tilak Varma",
    "role": "batter",
    "image": "/assets/players/batters/namboori_tilak_varma.jpg",
    "compositeScore": 87.6,
    "confidenceInterval": [
      169.2,
      203.2
    ],
    "confidenceTier": "High",
    "matches": 37,
    "pressureBalls": 282,
    "pressureRuns": 525,
    "pressureSR": 186.2,
    "baselineSR": 137.2,
    "srLiftPct": 35.7,
    "pressureAvg": 32.8,
    "pressureBoundaryPct": 25.9,
    "pressureDotPct": 27.3,
    "alpha": 0.092,
    "delta": 0.095,
    "peakImpact": 0.187,
    "pressureRunsConceded": 0,
    "pressureWickets": 0,
    "pressureEconomy": null,
    "baselineEconomy": null,
    "economyImprovement": null,
    "wicketsPerBall": null,
    "pressureBoundaryConcededPct": null,
    "beta": null,
    "theta": null,
    "peakSuppression": null,
    "auctionTier": "Core Indian Middle-Order Asset",
    "auctionPriceRange": "9.0 - 12.5",
    "rrTacticalFit": "Left-Hand Middle Order Anchor/Accelerant (#4/#5). Provides crucial tactical left-right balance; low dot-ball rate under pressure.",
    "keyStrengths": [
      "Elite regularized peak impact (+0.187 runs/ball above expectation)",
      "Positive clutch elevation factor (delta = +0.095)",
      "Lethal boundary conversion under pressure (25.9%)",
      "Opponent-adjusted pressure strike rate of 186.2"
    ],
    "keyWeaknesses": [
      "Pressure dot-ball frequency (27.3%)",
      "Subject to tactical squeeze if matched against elite wrist-spin"
    ],
    "scoutingNarrative": "Namboori Tilak Varma ranks #10 among all qualified tournament batters with an exceptional Pressure-Conditioned Adjusted Impact (PCAI) score of 87.6/100. Across 282 high-pressure deliveries in 37 matches, he maintains an adjusted baseline rating of +0.092 runs/ball above context and an elite clutch elevation factor of +0.095, reaching a peak pressure output of +0.187 runs/ball (empirical pressure SR: 186.2, 95% CI: [169.2, 203.2]). His positive scoring lift of +35.7% and boundary conversion of 25.9% under pressure confirm that his output expands rather than contracts when match leverage peaks.",
    "radar": [
      {
        "metric": "Clutch Lift (\u03b4)",
        "value": 87.0,
        "fullMark": 100
      },
      {
        "metric": "Pressure SR",
        "value": 71.8,
        "fullMark": 100
      },
      {
        "metric": "Boundary Fire",
        "value": 100,
        "fullMark": 100
      },
      {
        "metric": "Dot Resistance",
        "value": 56.8,
        "fullMark": 100
      },
      {
        "metric": "Wicket Preserv.",
        "value": 72.2,
        "fullMark": 100
      },
      {
        "metric": "Sample Depth",
        "value": 70.5,
        "fullMark": 100
      }
    ],
    "trajectory": [
      {
        "phase": "Match 1-3",
        "rating": 130.3,
        "pressure": 171.3
      },
      {
        "phase": "Mid League",
        "rating": 140.0,
        "pressure": 182.4
      },
      {
        "phase": "Must-Win",
        "rating": 134.5,
        "pressure": 195.5
      },
      {
        "phase": "Playoffs",
        "rating": 138.6,
        "pressure": 201.1
      },
      {
        "phase": "Peak Clutch",
        "rating": 137.2,
        "pressure": 186.2
      }
    ]
  }
];

export const TOP_10_BOWLERS: Player[] = [
  {
    "rank": 1,
    "playerId": 34485,
    "name": "Sufiyan Muqeem",
    "role": "bowler",
    "image": "/assets/players/bowlers/sufiyan_muqeem.jpg",
    "compositeScore": 95.09,
    "confidenceInterval": [
      4.03,
      6.05
    ],
    "confidenceTier": "Medium-High",
    "matches": 14,
    "pressureBalls": 113,
    "pressureRuns": 0,
    "pressureSR": null,
    "baselineSR": null,
    "srLiftPct": null,
    "pressureAvg": null,
    "pressureBoundaryPct": null,
    "pressureDotPct": 61.9,
    "alpha": null,
    "delta": null,
    "peakImpact": null,
    "pressureRunsConceded": 95,
    "pressureWickets": 13,
    "pressureEconomy": 5.04,
    "baselineEconomy": 6.16,
    "economyImprovement": 1.12,
    "wicketsPerBall": 0.115,
    "pressureBoundaryConcededPct": 10.6,
    "beta": -0.228,
    "theta": -0.063,
    "peakSuppression": 0.291,
    "auctionTier": "High-Value Mystery Talent Pick",
    "auctionPriceRange": "3.0 - 5.5",
    "rrTacticalFit": "Left-Arm Wrist Spin Mystery Asset. Elite peak suppression (+0.291 runs/ball saved) with a 61.9% pressure dot-ball rate. Difficult to read in middle-overs squeeze.",
    "keyStrengths": [
      "Stifling peak suppression (+0.291 runs/ball saved below expected)",
      "Clutch economy squeeze under pressure (theta = -0.063)",
      "High dot-ball execution (61.9%) in high-leverage situations",
      "Demonstrated wicket threat (13 pressure wickets, 0.115 wkt/ball)"
    ],
    "keyWeaknesses": [
      "High tactical workload requires structured over-rotation",
      "Performance sensitive to field positioning and boundary size"
    ],
    "scoutingNarrative": "Sufiyan Muqeem secures the #1 rank among tournament bowlers with a PCAI score of 95.1/100. Delivering 113 high-pressure deliveries across 14 matches, he generates an adjusted run suppression of +0.291 runs/ball below context expectation, pairing a baseline rating of -0.228 with a clutch economy squeeze of -0.063. Maintaining an empirical pressure economy of 5.04 rpo (95% CI: [4.03, 6.05]) and taking 13 pressure dismissals (61.9% dot-ball rate), he provides both absolute run containment and breakthrough wicket capability against top-order batters.",
    "radar": [
      {
        "metric": "Squeeze (\u03b8)",
        "value": 20,
        "fullMark": 100
      },
      {
        "metric": "Econ Control",
        "value": 97.4,
        "fullMark": 100
      },
      {
        "metric": "Dot % Ball",
        "value": 100,
        "fullMark": 100
      },
      {
        "metric": "Wicket Strike",
        "value": 100,
        "fullMark": 100
      },
      {
        "metric": "Boundary Sup.",
        "value": 77.6,
        "fullMark": 100
      },
      {
        "metric": "Volume Trust",
        "value": 28.2,
        "fullMark": 100
      }
    ],
    "trajectory": [
      {
        "phase": "Powerplay",
        "rating": 5.85,
        "pressure": 5.29
      },
      {
        "phase": "Middle",
        "rating": 5.67,
        "pressure": 4.94
      },
      {
        "phase": "Death 16-18",
        "rating": 6.78,
        "pressure": 5.14
      },
      {
        "phase": "Final Over",
        "rating": 7.7,
        "pressure": 5.04
      }
    ]
  },
  {
    "rank": 2,
    "playerId": 8661,
    "name": "Matheesha Pathirana",
    "role": "bowler",
    "image": "/assets/players/bowlers/matheesha_pathirana.jpg",
    "compositeScore": 92.61,
    "confidenceInterval": [
      6.46,
      7.8
    ],
    "confidenceTier": "High",
    "matches": 38,
    "pressureBalls": 365,
    "pressureRuns": 0,
    "pressureSR": null,
    "baselineSR": null,
    "srLiftPct": null,
    "pressureAvg": null,
    "pressureBoundaryPct": null,
    "pressureDotPct": 41.6,
    "alpha": null,
    "delta": null,
    "peakImpact": null,
    "pressureRunsConceded": 434,
    "pressureWickets": 35,
    "pressureEconomy": 7.13,
    "baselineEconomy": 8.09,
    "economyImprovement": 0.96,
    "wicketsPerBall": 0.096,
    "pressureBoundaryConcededPct": 14.2,
    "beta": -0.174,
    "theta": -0.087,
    "peakSuppression": 0.261,
    "auctionTier": "Tier 1 Death Overs Specialist",
    "auctionPriceRange": "11.0 - 15.0",
    "rrTacticalFit": "Sling-action Death Enforcer (Overs 17-20). Controls yorker length with 145+ kph pace. Peak suppression of +0.261 runs/ball even when defending low totals.",
    "keyStrengths": [
      "Stifling peak suppression (+0.261 runs/ball saved below expected)",
      "Clutch economy squeeze under pressure (theta = -0.087)",
      "High dot-ball execution (41.6%) in high-leverage situations",
      "Demonstrated wicket threat (35 pressure wickets, 0.096 wkt/ball)"
    ],
    "keyWeaknesses": [
      "High tactical workload requires structured over-rotation",
      "Performance sensitive to field positioning and boundary size"
    ],
    "scoutingNarrative": "Matheesha Pathirana secures the #2 rank among tournament bowlers with a PCAI score of 92.6/100. Delivering 365 high-pressure deliveries across 38 matches, he generates an adjusted run suppression of +0.261 runs/ball below context expectation, pairing a baseline rating of -0.174 with a clutch economy squeeze of -0.087. Maintaining an empirical pressure economy of 7.13 rpo (95% CI: [6.46, 7.80]) and taking 35 pressure dismissals (41.6% dot-ball rate), he provides both absolute run containment and breakthrough wicket capability against top-order batters.",
    "radar": [
      {
        "metric": "Squeeze (\u03b8)",
        "value": 20,
        "fullMark": 100
      },
      {
        "metric": "Econ Control",
        "value": 68.2,
        "fullMark": 100
      },
      {
        "metric": "Dot % Ball",
        "value": 91.5,
        "fullMark": 100
      },
      {
        "metric": "Wicket Strike",
        "value": 100,
        "fullMark": 100
      },
      {
        "metric": "Boundary Sup.",
        "value": 63.2,
        "fullMark": 100
      },
      {
        "metric": "Volume Trust",
        "value": 91.2,
        "fullMark": 100
      }
    ],
    "trajectory": [
      {
        "phase": "Powerplay",
        "rating": 7.69,
        "pressure": 7.49
      },
      {
        "phase": "Middle",
        "rating": 7.44,
        "pressure": 6.99
      },
      {
        "phase": "Death 16-18",
        "rating": 8.9,
        "pressure": 7.27
      },
      {
        "phase": "Final Over",
        "rating": 10.11,
        "pressure": 7.13
      }
    ]
  },
  {
    "rank": 3,
    "playerId": 3644,
    "name": "Kuldeep Yadav",
    "role": "bowler",
    "image": "/assets/players/bowlers/kuldeep_yadav.jpg",
    "compositeScore": 92.14,
    "confidenceInterval": [
      5.25,
      6.75
    ],
    "confidenceTier": "High",
    "matches": 42,
    "pressureBalls": 249,
    "pressureRuns": 0,
    "pressureSR": null,
    "baselineSR": null,
    "srLiftPct": null,
    "pressureAvg": null,
    "pressureBoundaryPct": null,
    "pressureDotPct": 43.0,
    "alpha": null,
    "delta": null,
    "peakImpact": null,
    "pressureRunsConceded": 249,
    "pressureWickets": 29,
    "pressureEconomy": 6.0,
    "baselineEconomy": 8.12,
    "economyImprovement": 2.12,
    "wicketsPerBall": 0.116,
    "pressureBoundaryConcededPct": 9.2,
    "beta": -0.065,
    "theta": -0.09,
    "peakSuppression": 0.154,
    "auctionTier": "Premier Wicket-Taking Spinner",
    "auctionPriceRange": "10.0 - 14.0",
    "rrTacticalFit": "Left-Arm Wrist Spin Wicket Taker. 29 pressure wickets with a 6.00 rpo pressure economy. Crucial partnership-breaker in overs 11-15.",
    "keyStrengths": [
      "Stifling peak suppression (+0.154 runs/ball saved below expected)",
      "Clutch economy squeeze under pressure (theta = -0.090)",
      "High dot-ball execution (43.0%) in high-leverage situations",
      "Demonstrated wicket threat (29 pressure wickets, 0.116 wkt/ball)"
    ],
    "keyWeaknesses": [
      "High tactical workload requires structured over-rotation",
      "Performance sensitive to field positioning and boundary size"
    ],
    "scoutingNarrative": "Kuldeep Yadav secures the #3 rank among tournament bowlers with a PCAI score of 92.1/100. Delivering 249 high-pressure deliveries across 42 matches, he generates an adjusted run suppression of +0.154 runs/ball below context expectation, pairing a baseline rating of -0.065 with a clutch economy squeeze of -0.090. Maintaining an empirical pressure economy of 6.00 rpo (95% CI: [5.25, 6.75]) and taking 29 pressure dismissals (43.0% dot-ball rate), he provides both absolute run containment and breakthrough wicket capability against top-order batters.",
    "radar": [
      {
        "metric": "Squeeze (\u03b8)",
        "value": 20,
        "fullMark": 100
      },
      {
        "metric": "Econ Control",
        "value": 84.0,
        "fullMark": 100
      },
      {
        "metric": "Dot % Ball",
        "value": 94.6,
        "fullMark": 100
      },
      {
        "metric": "Wicket Strike",
        "value": 100,
        "fullMark": 100
      },
      {
        "metric": "Boundary Sup.",
        "value": 83.2,
        "fullMark": 100
      },
      {
        "metric": "Volume Trust",
        "value": 62.2,
        "fullMark": 100
      }
    ],
    "trajectory": [
      {
        "phase": "Powerplay",
        "rating": 7.71,
        "pressure": 6.3
      },
      {
        "phase": "Middle",
        "rating": 7.47,
        "pressure": 5.88
      },
      {
        "phase": "Death 16-18",
        "rating": 8.93,
        "pressure": 6.12
      },
      {
        "phase": "Final Over",
        "rating": 10.15,
        "pressure": 6.0
      }
    ]
  },
  {
    "rank": 4,
    "playerId": 4722,
    "name": "Rashid Khan",
    "role": "bowler",
    "image": "/assets/players/bowlers/rashid_khan.jpg",
    "compositeScore": 89.41,
    "confidenceInterval": [
      6.2,
      7.34
    ],
    "confidenceTier": "High",
    "matches": 70,
    "pressureBalls": 482,
    "pressureRuns": 0,
    "pressureSR": null,
    "baselineSR": null,
    "srLiftPct": null,
    "pressureAvg": null,
    "pressureBoundaryPct": null,
    "pressureDotPct": 41.5,
    "alpha": null,
    "delta": null,
    "peakImpact": null,
    "pressureRunsConceded": 544,
    "pressureWickets": 52,
    "pressureEconomy": 6.77,
    "baselineEconomy": 7.45,
    "economyImprovement": 0.68,
    "wicketsPerBall": 0.108,
    "pressureBoundaryConcededPct": 11.8,
    "beta": -0.127,
    "theta": -0.056,
    "peakSuppression": 0.182,
    "auctionTier": "Marquee Match-Winner",
    "auctionPriceRange": "16.0+",
    "rrTacticalFit": "4-Over Defensive & Offensive Anchor. Highest sample volume in pressure (482 balls, 52 wickets). Guarantees 24 balls of extreme pressure containment.",
    "keyStrengths": [
      "Stifling peak suppression (+0.182 runs/ball saved below expected)",
      "Clutch economy squeeze under pressure (theta = -0.056)",
      "High dot-ball execution (41.5%) in high-leverage situations",
      "Demonstrated wicket threat (52 pressure wickets, 0.108 wkt/ball)"
    ],
    "keyWeaknesses": [
      "High tactical workload requires structured over-rotation",
      "Performance sensitive to field positioning and boundary size"
    ],
    "scoutingNarrative": "Rashid Khan secures the #4 rank among tournament bowlers with a PCAI score of 89.4/100. Delivering 482 high-pressure deliveries across 70 matches, he generates an adjusted run suppression of +0.182 runs/ball below context expectation, pairing a baseline rating of -0.127 with a clutch economy squeeze of -0.056. Maintaining an empirical pressure economy of 6.77 rpo (95% CI: [6.20, 7.34]) and taking 52 pressure dismissals (41.5% dot-ball rate), he provides both absolute run containment and breakthrough wicket capability against top-order batters.",
    "radar": [
      {
        "metric": "Squeeze (\u03b8)",
        "value": 20,
        "fullMark": 100
      },
      {
        "metric": "Econ Control",
        "value": 73.2,
        "fullMark": 100
      },
      {
        "metric": "Dot % Ball",
        "value": 91.3,
        "fullMark": 100
      },
      {
        "metric": "Wicket Strike",
        "value": 100,
        "fullMark": 100
      },
      {
        "metric": "Boundary Sup.",
        "value": 72.8,
        "fullMark": 100
      },
      {
        "metric": "Volume Trust",
        "value": 100,
        "fullMark": 100
      }
    ],
    "trajectory": [
      {
        "phase": "Powerplay",
        "rating": 7.08,
        "pressure": 7.11
      },
      {
        "phase": "Middle",
        "rating": 6.85,
        "pressure": 6.63
      },
      {
        "phase": "Death 16-18",
        "rating": 8.2,
        "pressure": 6.91
      },
      {
        "phase": "Final Over",
        "rating": 9.31,
        "pressure": 6.77
      }
    ]
  },
  {
    "rank": 5,
    "playerId": 5979,
    "name": "Abrar Ahmed",
    "role": "bowler",
    "image": "/assets/players/bowlers/abrar_ahmed.jpg",
    "compositeScore": 89.25,
    "confidenceInterval": [
      3.6,
      5.12
    ],
    "confidenceTier": "Medium-High",
    "matches": 21,
    "pressureBalls": 176,
    "pressureRuns": 0,
    "pressureSR": null,
    "baselineSR": null,
    "srLiftPct": null,
    "pressureAvg": null,
    "pressureBoundaryPct": null,
    "pressureDotPct": 54.0,
    "alpha": null,
    "delta": null,
    "peakImpact": null,
    "pressureRunsConceded": 128,
    "pressureWickets": 12,
    "pressureEconomy": 4.36,
    "baselineEconomy": 7.22,
    "economyImprovement": 2.86,
    "wicketsPerBall": 0.068,
    "pressureBoundaryConcededPct": 5.1,
    "beta": -0.106,
    "theta": -0.081,
    "peakSuppression": 0.188,
    "auctionTier": "Mystery Spin Specialist Buy",
    "auctionPriceRange": "4.0 - 7.0",
    "rrTacticalFit": "Leg-Spin / Googly Choke Artist. Economy squeeze of -0.081 per ball under pressure; exceptional control against aggressive middle-order right-handers.",
    "keyStrengths": [
      "Stifling peak suppression (+0.188 runs/ball saved below expected)",
      "Clutch economy squeeze under pressure (theta = -0.081)",
      "High dot-ball execution (54.0%) in high-leverage situations",
      "Demonstrated wicket threat (12 pressure wickets, 0.068 wkt/ball)"
    ],
    "keyWeaknesses": [
      "High tactical workload requires structured over-rotation",
      "Performance sensitive to field positioning and boundary size"
    ],
    "scoutingNarrative": "Abrar Ahmed secures the #5 rank among tournament bowlers with a PCAI score of 89.2/100. Delivering 176 high-pressure deliveries across 21 matches, he generates an adjusted run suppression of +0.188 runs/ball below context expectation, pairing a baseline rating of -0.106 with a clutch economy squeeze of -0.081. Maintaining an empirical pressure economy of 4.36 rpo (95% CI: [3.60, 5.12]) and taking 12 pressure dismissals (54.0% dot-ball rate), he provides both absolute run containment and breakthrough wicket capability against top-order batters.",
    "radar": [
      {
        "metric": "Squeeze (\u03b8)",
        "value": 20,
        "fullMark": 100
      },
      {
        "metric": "Econ Control",
        "value": 100,
        "fullMark": 100
      },
      {
        "metric": "Dot % Ball",
        "value": 100,
        "fullMark": 100
      },
      {
        "metric": "Wicket Strike",
        "value": 81.6,
        "fullMark": 100
      },
      {
        "metric": "Boundary Sup.",
        "value": 99.6,
        "fullMark": 100
      },
      {
        "metric": "Volume Trust",
        "value": 44.0,
        "fullMark": 100
      }
    ],
    "trajectory": [
      {
        "phase": "Powerplay",
        "rating": 6.86,
        "pressure": 4.58
      },
      {
        "phase": "Middle",
        "rating": 6.64,
        "pressure": 4.27
      },
      {
        "phase": "Death 16-18",
        "rating": 7.94,
        "pressure": 4.45
      },
      {
        "phase": "Final Over",
        "rating": 9.03,
        "pressure": 4.36
      }
    ]
  },
  {
    "rank": 6,
    "playerId": 6355,
    "name": "Shaheen Afridi",
    "role": "bowler",
    "image": "/assets/players/bowlers/shaheen_afridi.jpg",
    "compositeScore": 88.38,
    "confidenceInterval": [
      5.74,
      7.42
    ],
    "confidenceTier": "High",
    "matches": 29,
    "pressureBalls": 216,
    "pressureRuns": 0,
    "pressureSR": null,
    "baselineSR": null,
    "srLiftPct": null,
    "pressureAvg": null,
    "pressureBoundaryPct": null,
    "pressureDotPct": 40.3,
    "alpha": null,
    "delta": null,
    "peakImpact": null,
    "pressureRunsConceded": 237,
    "pressureWickets": 23,
    "pressureEconomy": 6.58,
    "baselineEconomy": 7.92,
    "economyImprovement": 1.34,
    "wicketsPerBall": 0.106,
    "pressureBoundaryConcededPct": 11.6,
    "beta": -0.127,
    "theta": -0.062,
    "peakSuppression": 0.189,
    "auctionTier": "Tier 1 Premier Fast Bowler",
    "auctionPriceRange": "13.0 - 17.0",
    "rrTacticalFit": "Left-arm Express New-Ball & Death Weapon. Delivers breakthrough wickets in the first over and holds a 7.00 rpo economy in high-leverage death overs.",
    "keyStrengths": [
      "Stifling peak suppression (+0.189 runs/ball saved below expected)",
      "Clutch economy squeeze under pressure (theta = -0.062)",
      "High dot-ball execution (40.3%) in high-leverage situations",
      "Demonstrated wicket threat (23 pressure wickets, 0.106 wkt/ball)"
    ],
    "keyWeaknesses": [
      "High tactical workload requires structured over-rotation",
      "Performance sensitive to field positioning and boundary size"
    ],
    "scoutingNarrative": "Shaheen Afridi secures the #6 rank among tournament bowlers with a PCAI score of 88.4/100. Delivering 216 high-pressure deliveries across 29 matches, he generates an adjusted run suppression of +0.189 runs/ball below context expectation, pairing a baseline rating of -0.127 with a clutch economy squeeze of -0.062. Maintaining an empirical pressure economy of 6.58 rpo (95% CI: [5.74, 7.42]) and taking 23 pressure dismissals (40.3% dot-ball rate), he provides both absolute run containment and breakthrough wicket capability against top-order batters.",
    "radar": [
      {
        "metric": "Squeeze (\u03b8)",
        "value": 20,
        "fullMark": 100
      },
      {
        "metric": "Econ Control",
        "value": 75.9,
        "fullMark": 100
      },
      {
        "metric": "Dot % Ball",
        "value": 88.7,
        "fullMark": 100
      },
      {
        "metric": "Wicket Strike",
        "value": 100,
        "fullMark": 100
      },
      {
        "metric": "Boundary Sup.",
        "value": 73.6,
        "fullMark": 100
      },
      {
        "metric": "Volume Trust",
        "value": 54.0,
        "fullMark": 100
      }
    ],
    "trajectory": [
      {
        "phase": "Powerplay",
        "rating": 7.52,
        "pressure": 6.91
      },
      {
        "phase": "Middle",
        "rating": 7.29,
        "pressure": 6.45
      },
      {
        "phase": "Death 16-18",
        "rating": 8.71,
        "pressure": 6.71
      },
      {
        "phase": "Final Over",
        "rating": 9.9,
        "pressure": 6.58
      }
    ]
  },
  {
    "rank": 7,
    "playerId": 6669,
    "name": "Mohsin Khan",
    "role": "bowler",
    "image": "/assets/players/bowlers/mohsin_khan.jpg",
    "compositeScore": 87.79,
    "confidenceInterval": [
      7.45,
      10.31
    ],
    "confidenceTier": "Medium-High",
    "matches": 15,
    "pressureBalls": 100,
    "pressureRuns": 0,
    "pressureSR": null,
    "baselineSR": null,
    "srLiftPct": null,
    "pressureAvg": null,
    "pressureBoundaryPct": null,
    "pressureDotPct": 34.0,
    "alpha": null,
    "delta": null,
    "peakImpact": null,
    "pressureRunsConceded": 148,
    "pressureWickets": 10,
    "pressureEconomy": 8.88,
    "baselineEconomy": 8.01,
    "economyImprovement": -0.87,
    "wicketsPerBall": 0.1,
    "pressureBoundaryConcededPct": 18.0,
    "beta": -0.187,
    "theta": -0.05,
    "peakSuppression": 0.237,
    "auctionTier": "Tactical Indian Left-Arm Pacer",
    "auctionPriceRange": "5.0 - 8.0",
    "rrTacticalFit": "High-Release Left-Arm Seamer. Exceptional defense in final overs (defended 9 runs in 20th over). High dot-ball capability under extreme pressure.",
    "keyStrengths": [
      "Stifling peak suppression (+0.237 runs/ball saved below expected)",
      "Clutch economy squeeze under pressure (theta = -0.050)",
      "High dot-ball execution (34.0%) in high-leverage situations",
      "Demonstrated wicket threat (10 pressure wickets, 0.100 wkt/ball)"
    ],
    "keyWeaknesses": [
      "Boundary concession risk (18.0%)",
      "Performance sensitive to field positioning and boundary size"
    ],
    "scoutingNarrative": "Mohsin Khan secures the #7 rank among tournament bowlers with a PCAI score of 87.8/100. Delivering 100 high-pressure deliveries across 15 matches, he generates an adjusted run suppression of +0.237 runs/ball below context expectation, pairing a baseline rating of -0.187 with a clutch economy squeeze of -0.050. Maintaining an empirical pressure economy of 8.88 rpo (95% CI: [7.45, 10.31]) and taking 10 pressure dismissals (34.0% dot-ball rate), he provides both absolute run containment and breakthrough wicket capability against top-order batters.",
    "radar": [
      {
        "metric": "Squeeze (\u03b8)",
        "value": 20,
        "fullMark": 100
      },
      {
        "metric": "Econ Control",
        "value": 43.7,
        "fullMark": 100
      },
      {
        "metric": "Dot % Ball",
        "value": 74.8,
        "fullMark": 100
      },
      {
        "metric": "Wicket Strike",
        "value": 100,
        "fullMark": 100
      },
      {
        "metric": "Boundary Sup.",
        "value": 48.0,
        "fullMark": 100
      },
      {
        "metric": "Volume Trust",
        "value": 25.0,
        "fullMark": 100
      }
    ],
    "trajectory": [
      {
        "phase": "Powerplay",
        "rating": 7.61,
        "pressure": 9.32
      },
      {
        "phase": "Middle",
        "rating": 7.37,
        "pressure": 8.7
      },
      {
        "phase": "Death 16-18",
        "rating": 8.81,
        "pressure": 9.06
      },
      {
        "phase": "Final Over",
        "rating": 10.01,
        "pressure": 8.88
      }
    ]
  },
  {
    "rank": 8,
    "playerId": 6256,
    "name": "Varun Chakravarthy",
    "role": "bowler",
    "image": "/assets/players/bowlers/varun_chakravarthy.jpg",
    "compositeScore": 86.95,
    "confidenceInterval": [
      5.75,
      7.15
    ],
    "confidenceTier": "High",
    "matches": 49,
    "pressureBalls": 306,
    "pressureRuns": 0,
    "pressureSR": null,
    "baselineSR": null,
    "srLiftPct": null,
    "pressureAvg": null,
    "pressureBoundaryPct": null,
    "pressureDotPct": 45.4,
    "alpha": null,
    "delta": null,
    "peakImpact": null,
    "pressureRunsConceded": 329,
    "pressureWickets": 21,
    "pressureEconomy": 6.45,
    "baselineEconomy": 8.04,
    "economyImprovement": 1.59,
    "wicketsPerBall": 0.069,
    "pressureBoundaryConcededPct": 11.8,
    "beta": -0.067,
    "theta": -0.056,
    "peakSuppression": 0.124,
    "auctionTier": "Tier 1 Mystery Spinner",
    "auctionPriceRange": "8.5 - 12.0",
    "rrTacticalFit": "Middle-to-Death Mystery Choke. High wicket hazard (+0.021/ball) in pressure situations. Suppresses boundary rate even at high-scoring venues.",
    "keyStrengths": [
      "Stifling peak suppression (+0.124 runs/ball saved below expected)",
      "Clutch economy squeeze under pressure (theta = -0.056)",
      "High dot-ball execution (45.4%) in high-leverage situations",
      "Demonstrated wicket threat (21 pressure wickets, 0.069 wkt/ball)"
    ],
    "keyWeaknesses": [
      "High tactical workload requires structured over-rotation",
      "Performance sensitive to field positioning and boundary size"
    ],
    "scoutingNarrative": "Varun Chakravarthy secures the #8 rank among tournament bowlers with a PCAI score of 87.0/100. Delivering 306 high-pressure deliveries across 49 matches, he generates an adjusted run suppression of +0.124 runs/ball below context expectation, pairing a baseline rating of -0.067 with a clutch economy squeeze of -0.056. Maintaining an empirical pressure economy of 6.45 rpo (95% CI: [5.75, 7.15]) and taking 21 pressure dismissals (45.4% dot-ball rate), he provides both absolute run containment and breakthrough wicket capability against top-order batters.",
    "radar": [
      {
        "metric": "Squeeze (\u03b8)",
        "value": 20,
        "fullMark": 100
      },
      {
        "metric": "Econ Control",
        "value": 77.7,
        "fullMark": 100
      },
      {
        "metric": "Dot % Ball",
        "value": 99.9,
        "fullMark": 100
      },
      {
        "metric": "Wicket Strike",
        "value": 82.8,
        "fullMark": 100
      },
      {
        "metric": "Boundary Sup.",
        "value": 72.8,
        "fullMark": 100
      },
      {
        "metric": "Volume Trust",
        "value": 76.5,
        "fullMark": 100
      }
    ],
    "trajectory": [
      {
        "phase": "Powerplay",
        "rating": 7.64,
        "pressure": 6.77
      },
      {
        "phase": "Middle",
        "rating": 7.4,
        "pressure": 6.32
      },
      {
        "phase": "Death 16-18",
        "rating": 8.84,
        "pressure": 6.58
      },
      {
        "phase": "Final Over",
        "rating": 10.05,
        "pressure": 6.45
      }
    ]
  },
  {
    "rank": 9,
    "playerId": 24767,
    "name": "Ripon Mondol",
    "role": "bowler",
    "image": "/assets/players/bowlers/ripon_mondol.jpg",
    "compositeScore": 86.87,
    "confidenceInterval": [
      6.15,
      9.07
    ],
    "confidenceTier": "Medium-High",
    "matches": 9,
    "pressureBalls": 82,
    "pressureRuns": 0,
    "pressureSR": null,
    "baselineSR": null,
    "srLiftPct": null,
    "pressureAvg": null,
    "pressureBoundaryPct": null,
    "pressureDotPct": 39.0,
    "alpha": null,
    "delta": null,
    "peakImpact": null,
    "pressureRunsConceded": 104,
    "pressureWickets": 11,
    "pressureEconomy": 7.61,
    "baselineEconomy": 7.14,
    "economyImprovement": -0.47,
    "wicketsPerBall": 0.134,
    "pressureBoundaryConcededPct": 13.4,
    "beta": -0.143,
    "theta": -0.036,
    "peakSuppression": 0.179,
    "auctionTier": "Emerging Fast Bowling Scout Pick",
    "auctionPriceRange": "2.0 - 4.0",
    "rrTacticalFit": "Accurate Skid Seamer. Demonstrates high composure (+0.179 runs/ball saved) with minimal boundary concession in pressure moments.",
    "keyStrengths": [
      "Stifling peak suppression (+0.179 runs/ball saved below expected)",
      "Clutch economy squeeze under pressure (theta = -0.036)",
      "High dot-ball execution (39.0%) in high-leverage situations",
      "Demonstrated wicket threat (11 pressure wickets, 0.134 wkt/ball)"
    ],
    "keyWeaknesses": [
      "High tactical workload requires structured over-rotation",
      "Performance sensitive to field positioning and boundary size"
    ],
    "scoutingNarrative": "Ripon Mondol secures the #9 rank among tournament bowlers with a PCAI score of 86.9/100. Delivering 82 high-pressure deliveries across 9 matches, he generates an adjusted run suppression of +0.179 runs/ball below context expectation, pairing a baseline rating of -0.143 with a clutch economy squeeze of -0.036. Maintaining an empirical pressure economy of 7.61 rpo (95% CI: [6.15, 9.07]) and taking 11 pressure dismissals (39.0% dot-ball rate), he provides both absolute run containment and breakthrough wicket capability against top-order batters.",
    "radar": [
      {
        "metric": "Squeeze (\u03b8)",
        "value": 20,
        "fullMark": 100
      },
      {
        "metric": "Econ Control",
        "value": 61.5,
        "fullMark": 100
      },
      {
        "metric": "Dot % Ball",
        "value": 85.8,
        "fullMark": 100
      },
      {
        "metric": "Wicket Strike",
        "value": 100,
        "fullMark": 100
      },
      {
        "metric": "Boundary Sup.",
        "value": 66.4,
        "fullMark": 100
      },
      {
        "metric": "Volume Trust",
        "value": 20.5,
        "fullMark": 100
      }
    ],
    "trajectory": [
      {
        "phase": "Powerplay",
        "rating": 6.78,
        "pressure": 7.99
      },
      {
        "phase": "Middle",
        "rating": 6.57,
        "pressure": 7.46
      },
      {
        "phase": "Death 16-18",
        "rating": 7.85,
        "pressure": 7.76
      },
      {
        "phase": "Final Over",
        "rating": 8.92,
        "pressure": 7.61
      }
    ]
  },
  {
    "rank": 10,
    "playerId": 6464,
    "name": "Arshdeep Singh",
    "role": "bowler",
    "image": "/assets/players/bowlers/arshdeep_singh.jpg",
    "compositeScore": 86.5,
    "confidenceInterval": [
      8.2,
      9.24
    ],
    "confidenceTier": "High",
    "matches": 94,
    "pressureBalls": 753,
    "pressureRuns": 0,
    "pressureSR": null,
    "baselineSR": null,
    "srLiftPct": null,
    "pressureAvg": null,
    "pressureBoundaryPct": null,
    "pressureDotPct": 34.0,
    "alpha": null,
    "delta": null,
    "peakImpact": null,
    "pressureRunsConceded": 1094,
    "pressureWickets": 63,
    "pressureEconomy": 8.72,
    "baselineEconomy": 8.58,
    "economyImprovement": -0.14,
    "wicketsPerBall": 0.084,
    "pressureBoundaryConcededPct": 18.9,
    "beta": -0.123,
    "theta": -0.048,
    "peakSuppression": 0.171,
    "auctionTier": "Tier 1 Indian Left-Arm Death Bowler",
    "auctionPriceRange": "12.0 - 16.0",
    "rrTacticalFit": "Proven Death-Over Yorker Specialist. Massive tournament pressure workload (753 balls). Essential for defending targets in close finishes.",
    "keyStrengths": [
      "Stifling peak suppression (+0.171 runs/ball saved below expected)",
      "Clutch economy squeeze under pressure (theta = -0.048)",
      "High dot-ball execution (34.0%) in high-leverage situations",
      "Demonstrated wicket threat (63 pressure wickets, 0.084 wkt/ball)"
    ],
    "keyWeaknesses": [
      "Boundary concession risk (18.9%)",
      "Performance sensitive to field positioning and boundary size"
    ],
    "scoutingNarrative": "Arshdeep Singh secures the #10 rank among tournament bowlers with a PCAI score of 86.5/100. Delivering 753 high-pressure deliveries across 94 matches, he generates an adjusted run suppression of +0.171 runs/ball below context expectation, pairing a baseline rating of -0.123 with a clutch economy squeeze of -0.048. Maintaining an empirical pressure economy of 8.72 rpo (95% CI: [8.20, 9.24]) and taking 63 pressure dismissals (34.0% dot-ball rate), he provides both absolute run containment and breakthrough wicket capability against top-order batters.",
    "radar": [
      {
        "metric": "Squeeze (\u03b8)",
        "value": 20,
        "fullMark": 100
      },
      {
        "metric": "Econ Control",
        "value": 45.9,
        "fullMark": 100
      },
      {
        "metric": "Dot % Ball",
        "value": 74.8,
        "fullMark": 100
      },
      {
        "metric": "Wicket Strike",
        "value": 100,
        "fullMark": 100
      },
      {
        "metric": "Boundary Sup.",
        "value": 44.4,
        "fullMark": 100
      },
      {
        "metric": "Volume Trust",
        "value": 100,
        "fullMark": 100
      }
    ],
    "trajectory": [
      {
        "phase": "Powerplay",
        "rating": 8.15,
        "pressure": 9.16
      },
      {
        "phase": "Middle",
        "rating": 7.89,
        "pressure": 8.55
      },
      {
        "phase": "Death 16-18",
        "rating": 9.44,
        "pressure": 8.89
      },
      {
        "phase": "Final Over",
        "rating": 10.72,
        "pressure": 8.72
      }
    ]
  }
];

TOP_10_BATTERS.forEach(p => { p.image = getAssetUrl(p.image); });
TOP_10_BOWLERS.forEach(p => { p.image = getAssetUrl(p.image); });

export const ALL_PLAYERS: Player[] = [...TOP_10_BATTERS, ...TOP_10_BOWLERS];
