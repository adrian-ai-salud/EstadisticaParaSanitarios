import { normal, type Rng } from "./random";

export interface SeriesPoint {
  index: number;
  trend: number;
  seasonal: number;
  noise: number;
  value: number;
}

// Serie mensual aditiva con pico estacional en enero (patrón típico de la gripe).
export function generateMonthlySeries(
  rng: Rng,
  options: { months: number; level: number; slope: number; amplitude: number; noiseSd: number },
): SeriesPoint[] {
  return Array.from({ length: options.months }, (_, index) => {
    const trend = options.level + options.slope * index;
    const seasonal = options.amplitude * Math.cos((2 * Math.PI * index) / 12);
    const noise = normal(rng, 0, options.noiseSd);
    return { index, trend, seasonal, noise, value: trend + seasonal + noise };
  });
}

export function difference(values: readonly number[], lag = 1): number[] {
  return values.slice(lag).map((v, i) => v - values[i]);
}
