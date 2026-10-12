export type Rng = () => number;

// Mulberry32: generador con semilla para que la simulación sea reproducible
// y el HTML estático coincida con la primera renderización en el navegador.
export function createRng(seed: number): Rng {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function normal(rng: Rng, mean = 0, sd = 1): number {
  let u = 0;
  while (u === 0) u = rng();
  const v = rng();
  return mean + sd * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

export function normalSample(rng: Rng, n: number, mean = 0, sd = 1): number[] {
  return Array.from({ length: n }, () => normal(rng, mean, sd));
}

export function exponential(rng: Rng, rate: number): number {
  let u = 0;
  while (u === 0) u = rng();
  return -Math.log(u) / rate;
}
