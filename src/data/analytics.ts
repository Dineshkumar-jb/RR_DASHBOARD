// AUTO-GENERATED ANALYTICAL ENGINE DATA
export interface MatchSituation {
  name: string;
  description: string;
  targetRuns: number;
  ballsRemaining: number;
  wicketsRemaining: number;
  requiredRunRate: number;
  pressureIndex: number;
  pressureCategory: string;
}

export interface CounterfactualMatchup {
  batter: string;
  bowler: string;
  neutral_pressure_P: number;
  neutral_expected_SR: number;
  high_pressure_P: number;
  high_pressure_expected_SR: number;
  clutch_lift_SR: number;
  tactical_recommendation: string;
}

export interface ContextCoefficient {
  variable_key: string;
  name: string;
  coefficient: string;
  interpretation: string;
  impact: string;
}

export const MATCH_SITUATIONS: MatchSituation[] = [
  {
    "name": "Final Over Defense",
    "description": "14 runs required from 6 balls with 3 wickets in hand",
    "targetRuns": 14,
    "ballsRemaining": 6,
    "wicketsRemaining": 3,
    "requiredRunRate": 14.0,
    "pressureIndex": 3.85,
    "pressureCategory": "Extreme Leverage"
  },
  {
    "name": "Death Overs Chase",
    "description": "38 runs required from 18 balls with 5 wickets in hand",
    "targetRuns": 38,
    "ballsRemaining": 18,
    "wicketsRemaining": 5,
    "requiredRunRate": 12.67,
    "pressureIndex": 2.45,
    "pressureCategory": "High Leverage"
  },
  {
    "name": "Middle-Overs Squeeze",
    "description": "72 runs required from 48 balls with 6 wickets in hand",
    "targetRuns": 72,
    "ballsRemaining": 48,
    "wicketsRemaining": 6,
    "requiredRunRate": 9.0,
    "pressureIndex": 1.62,
    "pressureCategory": "Moderate Leverage"
  },
  {
    "name": "Super Over Tiebreaker",
    "description": "16 runs required from 6 balls with 2 wickets in hand",
    "targetRuns": 16,
    "ballsRemaining": 6,
    "wicketsRemaining": 2,
    "requiredRunRate": 16.0,
    "pressureIndex": 4.5,
    "pressureCategory": "Maximum Volatility"
  },
  {
    "name": "High Target Chase",
    "description": "55 runs required from 24 balls with 4 wickets in hand",
    "targetRuns": 55,
    "ballsRemaining": 24,
    "wicketsRemaining": 4,
    "requiredRunRate": 13.75,
    "pressureIndex": 2.8,
    "pressureCategory": "High Leverage"
  },
  {
    "name": "Low-Scoring Tail Defense",
    "description": "28 runs required from 30 balls with 2 wickets in hand",
    "targetRuns": 28,
    "ballsRemaining": 30,
    "wicketsRemaining": 2,
    "requiredRunRate": 5.6,
    "pressureIndex": 3.2,
    "pressureCategory": "High Wicket Leverage"
  }
];

export const COUNTERFACTUAL_MATCHUPS: CounterfactualMatchup[] = [
  {
    "batter": "Tim David",
    "bowler": "Sufiyan Muqeem",
    "neutral_pressure_P": 0.2,
    "neutral_expected_SR": 201.1,
    "high_pressure_P": 0.85,
    "high_pressure_expected_SR": 202.1,
    "clutch_lift_SR": 1.0,
    "tactical_recommendation": "In high-pressure death overs (P=0.85), expected scoring rate shifts by +1.0 SR points. Batter clutch coefficient (+0.079) vs bowler squeeze (-0.063)."
  },
  {
    "batter": "Tim David",
    "bowler": "Matheesha Pathirana",
    "neutral_pressure_P": 0.2,
    "neutral_expected_SR": 206.0,
    "high_pressure_P": 0.85,
    "high_pressure_expected_SR": 205.5,
    "clutch_lift_SR": -0.5,
    "tactical_recommendation": "In high-pressure death overs (P=0.85), expected scoring rate shifts by -0.5 SR points. Batter clutch coefficient (+0.079) vs bowler squeeze (-0.087)."
  },
  {
    "batter": "Tim David",
    "bowler": "Kuldeep Yadav",
    "neutral_pressure_P": 0.2,
    "neutral_expected_SR": 216.9,
    "high_pressure_P": 0.85,
    "high_pressure_expected_SR": 216.2,
    "clutch_lift_SR": -0.7,
    "tactical_recommendation": "In high-pressure death overs (P=0.85), expected scoring rate shifts by -0.7 SR points. Batter clutch coefficient (+0.079) vs bowler squeeze (-0.090)."
  },
  {
    "batter": "Shashank Singh",
    "bowler": "Sufiyan Muqeem",
    "neutral_pressure_P": 0.2,
    "neutral_expected_SR": 191.3,
    "high_pressure_P": 0.85,
    "high_pressure_expected_SR": 192.0,
    "clutch_lift_SR": 0.7,
    "tactical_recommendation": "In high-pressure death overs (P=0.85), expected scoring rate shifts by +0.7 SR points. Batter clutch coefficient (+0.075) vs bowler squeeze (-0.063)."
  },
  {
    "batter": "Shashank Singh",
    "bowler": "Matheesha Pathirana",
    "neutral_pressure_P": 0.2,
    "neutral_expected_SR": 196.2,
    "high_pressure_P": 0.85,
    "high_pressure_expected_SR": 195.4,
    "clutch_lift_SR": -0.8,
    "tactical_recommendation": "In high-pressure death overs (P=0.85), expected scoring rate shifts by -0.8 SR points. Batter clutch coefficient (+0.075) vs bowler squeeze (-0.087)."
  },
  {
    "batter": "Shashank Singh",
    "bowler": "Kuldeep Yadav",
    "neutral_pressure_P": 0.2,
    "neutral_expected_SR": 207.1,
    "high_pressure_P": 0.85,
    "high_pressure_expected_SR": 206.1,
    "clutch_lift_SR": -1.0,
    "tactical_recommendation": "In high-pressure death overs (P=0.85), expected scoring rate shifts by -1.0 SR points. Batter clutch coefficient (+0.075) vs bowler squeeze (-0.090)."
  },
  {
    "batter": "Suryakumar Yadav",
    "bowler": "Sufiyan Muqeem",
    "neutral_pressure_P": 0.2,
    "neutral_expected_SR": 199.1,
    "high_pressure_P": 0.85,
    "high_pressure_expected_SR": 202.1,
    "clutch_lift_SR": 3.0,
    "tactical_recommendation": "In high-pressure death overs (P=0.85), expected scoring rate shifts by +3.0 SR points. Batter clutch coefficient (+0.110) vs bowler squeeze (-0.063)."
  },
  {
    "batter": "Suryakumar Yadav",
    "bowler": "Matheesha Pathirana",
    "neutral_pressure_P": 0.2,
    "neutral_expected_SR": 204.0,
    "high_pressure_P": 0.85,
    "high_pressure_expected_SR": 205.5,
    "clutch_lift_SR": 1.4,
    "tactical_recommendation": "In high-pressure death overs (P=0.85), expected scoring rate shifts by +1.4 SR points. Batter clutch coefficient (+0.110) vs bowler squeeze (-0.087)."
  },
  {
    "batter": "Suryakumar Yadav",
    "bowler": "Kuldeep Yadav",
    "neutral_pressure_P": 0.2,
    "neutral_expected_SR": 214.9,
    "high_pressure_P": 0.85,
    "high_pressure_expected_SR": 216.2,
    "clutch_lift_SR": 1.3,
    "tactical_recommendation": "In high-pressure death overs (P=0.85), expected scoring rate shifts by +1.3 SR points. Batter clutch coefficient (+0.110) vs bowler squeeze (-0.090)."
  }
];

export const CONTEXT_COEFFICIENTS: ContextCoefficient[] = [
  {
    "variable_key": "phase_death_over",
    "name": "Death Overs (16\u201320) Run Surge",
    "coefficient": "+0.430",
    "interpretation": "Expected scoring rate acceleration per ball under death fielding restrictions",
    "impact": "+2.58 runs/over"
  },
  {
    "variable_key": "phase_powerplay",
    "name": "Powerplay (1\u20136) Seam Control",
    "coefficient": "-0.118",
    "interpretation": "New ball movement and inner-circle restrictions suppression",
    "impact": "-0.71 runs/over"
  },
  {
    "variable_key": "innings_2_chase",
    "name": "Innings 2 Target Pressure",
    "coefficient": "+0.014",
    "interpretation": "Chasing target psychological pressure premium",
    "impact": "+0.08 runs/over"
  },
  {
    "variable_key": "wickets_lost_ratio",
    "name": "Wickets Lost Penalty",
    "coefficient": "-0.586",
    "interpretation": "Run deceleration per wicket lost (survival conservatism)",
    "impact": "-3.52 runs/over"
  },
  {
    "variable_key": "bowling_type_spin",
    "name": "Spin Delivery Run Dampening",
    "coefficient": "-0.086",
    "interpretation": "Boundary containment against wrist and finger spin in middle overs",
    "impact": "-0.52 runs/over"
  }
];

export const EXECUTIVE_KPIS = {
  totalDeliveries: "200,000+",
  pressureDeliveries: "48,290",
  matchesCovered: "1,200+",
  clutchSeparationPct: "+34.8%",
  modelConfidence: "95% Empirical BCa",
  crossSportAdaptation: "NBA Regularized Adjusted Plus-Minus + MLB Leverage Index"
};
