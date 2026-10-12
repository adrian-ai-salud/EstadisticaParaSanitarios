import { mean } from "./descriptive";
import { normalCdf, normalQuantile } from "./distributions";
import { normalSample, type Rng } from "./random";

export interface SimulatedInterval {
  id: number;
  estimate: number;
  lower: number;
  upper: number;
  containsTrueMean: boolean;
}

// Intervalos para la media con σ conocida: x̄ ± z(1−α/2) · σ/√n.
export function simulateIntervals(
  rng: Rng,
  options: { trueMean: number; sd: number; sampleSize: number; count: number; confidence: number },
): SimulatedInterval[] {
  const z = normalQuantile(1 - (1 - options.confidence) / 2);
  const margin = (z * options.sd) / Math.sqrt(options.sampleSize);
  return Array.from({ length: options.count }, (_, i) => {
    const estimate = mean(normalSample(rng, options.sampleSize, options.trueMean, options.sd));
    const lower = estimate - margin;
    const upper = estimate + margin;
    return {
      id: i + 1,
      estimate,
      lower,
      upper,
      containsTrueMean: lower <= options.trueMean && options.trueMean <= upper,
    };
  });
}

// Potencia de un contraste bilateral de medias (z) para un tamaño del efecto d de Cohen.
export function twoSidedPower(effectSize: number, sampleSize: number, alpha: number): number {
  const z = normalQuantile(1 - alpha / 2);
  const shift = effectSize * Math.sqrt(sampleSize);
  return 1 - normalCdf(z - shift) + normalCdf(-z - shift);
}
