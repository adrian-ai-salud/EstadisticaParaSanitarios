export interface ContingencyTable {
  truePositive: number;
  falsePositive: number;
  falseNegative: number;
  trueNegative: number;
}

export interface DiagnosticMetrics {
  sensitivity: number;
  specificity: number;
  ppv: number;
  npv: number;
  positiveLikelihoodRatio: number;
  negativeLikelihoodRatio: number;
  prevalence: number;
}

export function metricsFromTable(t: ContingencyTable): DiagnosticMetrics {
  const sick = t.truePositive + t.falseNegative;
  const healthy = t.trueNegative + t.falsePositive;
  const sensitivity = t.truePositive / sick;
  const specificity = t.trueNegative / healthy;
  return {
    sensitivity,
    specificity,
    ppv: t.truePositive / (t.truePositive + t.falsePositive),
    npv: t.trueNegative / (t.trueNegative + t.falseNegative),
    positiveLikelihoodRatio: sensitivity / (1 - specificity),
    negativeLikelihoodRatio: (1 - sensitivity) / specificity,
    prevalence: sick / (sick + healthy),
  };
}

export function tableFromRates(
  sensitivity: number,
  specificity: number,
  prevalence: number,
  population: number,
): ContingencyTable {
  const sick = population * prevalence;
  const healthy = population - sick;
  return {
    truePositive: sick * sensitivity,
    falseNegative: sick * (1 - sensitivity),
    trueNegative: healthy * specificity,
    falsePositive: healthy * (1 - specificity),
  };
}

// Teorema de Bayes aplicado al resultado positivo y negativo.
export function predictiveValues(sensitivity: number, specificity: number, prevalence: number) {
  const ppv =
    (sensitivity * prevalence) / (sensitivity * prevalence + (1 - specificity) * (1 - prevalence));
  const npv =
    (specificity * (1 - prevalence)) /
    (specificity * (1 - prevalence) + (1 - sensitivity) * prevalence);
  return { ppv, npv };
}
