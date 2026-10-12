export function mean(values: readonly number[]): number {
  return values.reduce((sum, v) => sum + v, 0) / values.length;
}

export function variance(values: readonly number[]): number {
  const m = mean(values);
  return values.reduce((sum, v) => sum + (v - m) ** 2, 0) / (values.length - 1);
}

export function standardDeviation(values: readonly number[]): number {
  return Math.sqrt(variance(values));
}

// Cuantil por interpolación lineal (tipo 7, el predeterminado en R y Excel).
export function quantile(values: readonly number[], p: number): number {
  const sorted = [...values].sort((a, b) => a - b);
  const h = (sorted.length - 1) * p;
  const lo = Math.floor(h);
  const hi = Math.ceil(h);
  return sorted[lo] + (h - lo) * (sorted[hi] - sorted[lo]);
}

export function median(values: readonly number[]): number {
  return quantile(values, 0.5);
}

export interface BoxplotStats {
  q1: number;
  median: number;
  q3: number;
  iqr: number;
  whiskerLow: number;
  whiskerHigh: number;
  outliers: number[];
}

// Bigotes de Tukey: hasta el dato más extremo dentro de 1,5 × RIC desde la caja.
export function boxplotStats(values: readonly number[]): BoxplotStats {
  const q1 = quantile(values, 0.25);
  const q3 = quantile(values, 0.75);
  const iqr = q3 - q1;
  const lowFence = q1 - 1.5 * iqr;
  const highFence = q3 + 1.5 * iqr;
  const inside = values.filter((v) => v >= lowFence && v <= highFence);
  return {
    q1,
    median: median(values),
    q3,
    iqr,
    whiskerLow: Math.min(...inside),
    whiskerHigh: Math.max(...inside),
    outliers: values.filter((v) => v < lowFence || v > highFence),
  };
}

export interface LinearFit {
  intercept: number;
  slope: number;
  r: number;
  rSquared: number;
}

export function linearFit(xs: readonly number[], ys: readonly number[]): LinearFit {
  const mx = mean(xs);
  const my = mean(ys);
  let sxy = 0;
  let sxx = 0;
  let syy = 0;
  for (let i = 0; i < xs.length; i++) {
    sxy += (xs[i] - mx) * (ys[i] - my);
    sxx += (xs[i] - mx) ** 2;
    syy += (ys[i] - my) ** 2;
  }
  const slope = sxy / sxx;
  const r = sxy / Math.sqrt(sxx * syy);
  return { intercept: my - slope * mx, slope, r, rSquared: r * r };
}
