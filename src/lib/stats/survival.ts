import { chiSquare1PValue } from "./distributions";

export interface SurvivalRecord {
  time: number;
  event: boolean;
}

export interface KaplanMeierStep {
  time: number;
  survival: number;
  atRisk: number;
  events: number;
  censored: number;
}

export function kaplanMeier(records: readonly SurvivalRecord[]): KaplanMeierStep[] {
  const times = [...new Set(records.map((r) => r.time))].sort((a, b) => a - b);
  const steps: KaplanMeierStep[] = [
    { time: 0, survival: 1, atRisk: records.length, events: 0, censored: 0 },
  ];
  let survival = 1;
  for (const time of times) {
    const atRisk = records.filter((r) => r.time >= time).length;
    const events = records.filter((r) => r.time === time && r.event).length;
    const censored = records.filter((r) => r.time === time && !r.event).length;
    survival *= 1 - events / atRisk;
    steps.push({ time, survival, atRisk, events, censored });
  }
  return steps;
}

export function survivalAt(steps: readonly KaplanMeierStep[], time: number): number {
  let value = 1;
  for (const step of steps) {
    if (step.time > time) break;
    value = step.survival;
  }
  return value;
}

export function medianSurvival(steps: readonly KaplanMeierStep[]): number | null {
  const step = steps.find((s) => s.survival <= 0.5);
  return step ? step.time : null;
}

export function atRiskAt(records: readonly SurvivalRecord[], time: number): number {
  return records.filter((r) => r.time >= time).length;
}

export interface LogRankResult {
  statistic: number;
  pValue: number;
  observedA: number;
  expectedA: number;
}

export function logRank(
  groupA: readonly SurvivalRecord[],
  groupB: readonly SurvivalRecord[],
): LogRankResult {
  const eventTimes = [
    ...new Set([...groupA, ...groupB].filter((r) => r.event).map((r) => r.time)),
  ].sort((a, b) => a - b);
  let observedA = 0;
  let expectedA = 0;
  let varianceSum = 0;
  for (const time of eventTimes) {
    const nA = atRiskAt(groupA, time);
    const nB = atRiskAt(groupB, time);
    const dA = groupA.filter((r) => r.time === time && r.event).length;
    const dB = groupB.filter((r) => r.time === time && r.event).length;
    const n = nA + nB;
    const d = dA + dB;
    observedA += dA;
    expectedA += (d * nA) / n;
    if (n > 1) varianceSum += (d * (nA / n) * (nB / n) * (n - d)) / (n - 1);
  }
  const statistic = varianceSum > 0 ? (observedA - expectedA) ** 2 / varianceSum : 0;
  return { statistic, pValue: chiSquare1PValue(statistic), observedA, expectedA };
}
