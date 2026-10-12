import { describe, expect, it } from "vitest";
import {
  boxplotStats,
  linearFit,
  mean,
  median,
  quantile,
  standardDeviation,
} from "@/lib/stats/descriptive";
import { metricsFromTable, predictiveValues } from "@/lib/stats/diagnostic";
import {
  binomialPmf,
  chiSquare1PValue,
  normalCdf,
  normalQuantile,
  poissonPmf,
} from "@/lib/stats/distributions";
import { simulateIntervals, twoSidedPower } from "@/lib/stats/inference";
import { createRng } from "@/lib/stats/random";
import { kaplanMeier, logRank, medianSurvival } from "@/lib/stats/survival";
import { difference } from "@/lib/stats/timeseries";

describe("distribuciones", () => {
  it("normal estándar", () => {
    expect(normalCdf(0)).toBeCloseTo(0.5, 6);
    expect(normalCdf(1.96)).toBeCloseTo(0.975, 3);
    expect(normalCdf(-1)).toBeCloseTo(0.1587, 4);
    expect(normalQuantile(0.975)).toBeCloseTo(1.959964, 5);
    expect(normalQuantile(0.005)).toBeCloseTo(-2.575829, 5);
  });

  it("binomial: 7 de 10 con p = 0,6", () => {
    expect(binomialPmf(7, 10, 0.6)).toBeCloseTo(0.214991, 5);
    const total = Array.from({ length: 11 }, (_, k) => binomialPmf(k, 10, 0.6)).reduce(
      (a, b) => a + b,
    );
    expect(total).toBeCloseTo(1, 10);
  });

  it("Poisson: 3 ingresos con λ = 1,5", () => {
    expect(poissonPmf(3, 1.5)).toBeCloseTo(0.125511, 5);
  });

  it("chi-cuadrado con 1 gl", () => {
    expect(chiSquare1PValue(3.841459)).toBeCloseTo(0.05, 4);
  });
});

describe("estadística descriptiva", () => {
  const values = [2, 4, 4, 4, 5, 5, 7, 9];

  it("media, mediana y desviación típica muestral", () => {
    expect(mean(values)).toBe(5);
    expect(median(values)).toBe(4.5);
    expect(standardDeviation(values)).toBeCloseTo(2.13809, 4);
  });

  it("cuantiles de tipo 7", () => {
    expect(quantile([1, 2, 3, 4], 0.25)).toBeCloseTo(1.75, 10);
    expect(quantile([1, 2, 3, 4], 0.75)).toBeCloseTo(3.25, 10);
  });

  it("detecta valores atípicos con la regla de Tukey", () => {
    const stats = boxplotStats([10, 12, 13, 14, 15, 16, 17, 40]);
    expect(stats.outliers).toEqual([40]);
    expect(stats.whiskerHigh).toBe(17);
  });

  it("recta de regresión exacta", () => {
    const fit = linearFit([1, 2, 3, 4], [3, 5, 7, 9]);
    expect(fit.slope).toBeCloseTo(2, 10);
    expect(fit.intercept).toBeCloseTo(1, 10);
    expect(fit.r).toBeCloseTo(1, 10);
  });
});

describe("pruebas diagnósticas", () => {
  it("caso de la prueba rápida de gripe", () => {
    const m = metricsFromTable({
      truePositive: 85,
      falsePositive: 45,
      falseNegative: 15,
      trueNegative: 855,
    });
    expect(m.sensitivity).toBeCloseTo(0.85, 10);
    expect(m.specificity).toBeCloseTo(0.95, 10);
    expect(m.ppv).toBeCloseTo(0.6538, 4);
    expect(m.npv).toBeCloseTo(0.9828, 4);
    expect(m.positiveLikelihoodRatio).toBeCloseTo(17, 6);
    expect(m.negativeLikelihoodRatio).toBeCloseTo(0.1579, 4);
  });

  it("Bayes coincide con la tabla 2×2", () => {
    const { ppv, npv } = predictiveValues(0.85, 0.95, 0.1);
    expect(ppv).toBeCloseTo(0.6538, 4);
    expect(npv).toBeCloseTo(0.9828, 4);
  });
});

describe("análisis de supervivencia", () => {
  const records = [
    { time: 6, event: true },
    { time: 6, event: true },
    { time: 6, event: true },
    { time: 6, event: false },
    { time: 7, event: true },
    { time: 9, event: false },
    { time: 10, event: true },
    { time: 10, event: false },
  ];

  it("Kaplan-Meier", () => {
    const steps = kaplanMeier(records);
    expect(steps.find((s) => s.time === 6)?.survival).toBeCloseTo(5 / 8, 10);
    expect(steps.find((s) => s.time === 7)?.survival).toBeCloseTo((5 / 8) * (3 / 4), 10);
    expect(steps.find((s) => s.time === 10)?.survival).toBeCloseTo((5 / 8) * (3 / 4) * (1 / 2), 10);
    expect(medianSurvival(steps)).toBe(7);
  });

  it("log-rank igual a cero con grupos idénticos", () => {
    const result = logRank(records, records);
    expect(result.statistic).toBeCloseTo(0, 10);
    expect(result.pValue).toBeCloseTo(1, 10);
  });

  it("log-rank detecta grupos separados", () => {
    const early = [1, 2, 3, 4, 5, 6].map((time) => ({ time, event: true }));
    const late = [10, 11, 12, 13, 14, 15].map((time) => ({ time, event: true }));
    expect(logRank(early, late).pValue).toBeLessThan(0.01);
  });
});

describe("inferencia", () => {
  it("cobertura de los intervalos al 95 %", () => {
    const intervals = simulateIntervals(createRng(7), {
      trueMean: 120,
      sd: 15,
      sampleSize: 30,
      count: 4000,
      confidence: 0.95,
    });
    const coverage = intervals.filter((i) => i.containsTrueMean).length / intervals.length;
    expect(coverage).toBeGreaterThan(0.935);
    expect(coverage).toBeLessThan(0.965);
  });

  it("potencia de referencia: d = 0,5, n = 32, α = 0,05", () => {
    expect(twoSidedPower(0.5, 32, 0.05)).toBeCloseTo(0.807, 2);
    expect(twoSidedPower(0, 32, 0.05)).toBeCloseTo(0.05, 6);
  });
});

describe("series temporales", () => {
  it("la primera diferencia elimina una tendencia lineal", () => {
    expect(difference([3, 5, 7, 9])).toEqual([2, 2, 2]);
  });
});
