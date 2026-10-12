"use client";

import { ArrowRight, Check, RotateCcw } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Option {
  label: string;
  hint?: string;
  next: string;
}

interface Question {
  kind: "question";
  title: string;
  options: Option[];
}

interface Result {
  kind: "result";
  test: string;
  summary: string;
  alternative?: string;
  link?: { href: string; label: string };
}

const nodes: Record<string, Question | Result> = {
  start: {
    kind: "question",
    title: "¿Qué quieres hacer?",
    options: [
      {
        label: "Comparar grupos o mediciones",
        hint: "Por ejemplo, tratamiento A frente a B, o antes y después",
        next: "outcome",
      },
      {
        label: "Estudiar la relación entre dos variables",
        hint: "Por ejemplo, edad y tensión arterial",
        next: "relation",
      },
      {
        label: "Predecir un resultado con varias variables",
        hint: "Ajustando por posibles factores de confusión",
        next: "predict",
      },
      {
        label: "Analizar el tiempo hasta un evento",
        hint: "Supervivencia, recaída, alta…",
        next: "survival",
      },
    ],
  },
  outcome: {
    kind: "question",
    title: "¿De qué tipo es la variable que comparas?",
    options: [
      { label: "Cuantitativa", hint: "Tensión arterial, HbA1c, peso", next: "quant-groups" },
      { label: "Ordinal", hint: "Escala de dolor, grado de dependencia", next: "ord-groups" },
      {
        label: "Cualitativa (categorías)",
        hint: "Curado sí/no, tipo de complicación",
        next: "cat-design",
      },
    ],
  },
  "quant-groups": {
    kind: "question",
    title: "¿Cuántos grupos o mediciones comparas?",
    options: [
      { label: "Dos", next: "quant-2-design" },
      { label: "Tres o más", next: "quant-3-design" },
    ],
  },
  "quant-2-design": {
    kind: "question",
    title: "¿Los datos son independientes o relacionados?",
    options: [
      {
        label: "Independientes",
        hint: "Pacientes distintos en cada grupo",
        next: "quant-2-ind-normal",
      },
      {
        label: "Relacionados",
        hint: "Los mismos pacientes medidos dos veces",
        next: "quant-2-rel-normal",
      },
    ],
  },
  "quant-3-design": {
    kind: "question",
    title: "¿Los datos son independientes o relacionados?",
    options: [
      {
        label: "Independientes",
        hint: "Pacientes distintos en cada grupo",
        next: "quant-3-ind-normal",
      },
      {
        label: "Relacionados",
        hint: "Los mismos pacientes medidos varias veces",
        next: "quant-3-rel-normal",
      },
    ],
  },
  "quant-2-ind-normal": {
    kind: "question",
    title: "¿La variable sigue una distribución normal en cada grupo?",
    options: [
      { label: "Sí, o hay más de 30 pacientes por grupo", next: "t-ind" },
      { label: "No, y la muestra es pequeña", next: "mann-whitney" },
    ],
  },
  "quant-2-rel-normal": {
    kind: "question",
    title: "¿Las diferencias entre las dos mediciones siguen una distribución normal?",
    options: [
      { label: "Sí, o hay más de 30 parejas", next: "t-paired" },
      { label: "No, y la muestra es pequeña", next: "wilcoxon" },
    ],
  },
  "quant-3-ind-normal": {
    kind: "question",
    title: "¿La variable sigue una distribución normal en cada grupo?",
    options: [
      { label: "Sí", next: "anova" },
      { label: "No", next: "kruskal" },
    ],
  },
  "quant-3-rel-normal": {
    kind: "question",
    title: "¿La variable sigue una distribución normal en cada medición?",
    options: [
      { label: "Sí", next: "anova-rm" },
      { label: "No", next: "friedman" },
    ],
  },
  "ord-groups": {
    kind: "question",
    title: "¿Cuántos grupos o mediciones comparas?",
    options: [
      { label: "Dos", next: "ord-2-design" },
      { label: "Tres o más", next: "ord-3-design" },
    ],
  },
  "ord-2-design": {
    kind: "question",
    title: "¿Los datos son independientes o relacionados?",
    options: [
      { label: "Independientes", next: "mann-whitney" },
      { label: "Relacionados", next: "wilcoxon" },
    ],
  },
  "ord-3-design": {
    kind: "question",
    title: "¿Los datos son independientes o relacionados?",
    options: [
      { label: "Independientes", next: "kruskal" },
      { label: "Relacionados", next: "friedman" },
    ],
  },
  "cat-design": {
    kind: "question",
    title: "¿Los datos son independientes o relacionados?",
    options: [
      { label: "Independientes", hint: "Pacientes distintos en cada grupo", next: "chi2" },
      {
        label: "Relacionados, dos mediciones",
        hint: "Mismos pacientes, antes y después",
        next: "mcnemar",
      },
      {
        label: "Relacionados, tres o más mediciones",
        hint: "Resultado dicotómico",
        next: "cochran",
      },
    ],
  },
  relation: {
    kind: "question",
    title: "¿De qué tipo son las dos variables?",
    options: [
      { label: "Cuantitativas con distribución normal", next: "pearson" },
      { label: "Ordinales, o cuantitativas no normales", next: "spearman" },
      { label: "Cualitativas", next: "chi2" },
    ],
  },
  predict: {
    kind: "question",
    title: "¿Qué tipo de resultado quieres predecir?",
    options: [
      { label: "Cuantitativo", hint: "Peso al nacer, tensión arterial", next: "linear" },
      { label: "Dicotómico", hint: "Enfermo/sano, reingreso sí/no", next: "logistic" },
      { label: "Tiempo hasta un evento", next: "cox" },
    ],
  },
  survival: {
    kind: "question",
    title: "¿Qué necesitas?",
    options: [
      { label: "Describir la supervivencia y comparar grupos", next: "km" },
      { label: "Estimar el efecto de varios factores a la vez", next: "cox" },
    ],
  },
  "t-ind": {
    kind: "result",
    test: "t de Student para muestras independientes",
    summary: "Compara las medias de dos grupos independientes.",
    alternative:
      "Si las varianzas de los grupos son distintas (prueba de Levene), usa la corrección de Welch.",
    link: { href: "/pruebas/pruebas-parametricas", label: "Pruebas paramétricas" },
  },
  "t-paired": {
    kind: "result",
    test: "t de Student para datos pareados",
    summary: "Compara la media de las diferencias entre dos mediciones de los mismos sujetos.",
    link: { href: "/pruebas/pruebas-parametricas", label: "Pruebas paramétricas" },
  },
  anova: {
    kind: "result",
    test: "ANOVA de un factor",
    summary: "Compara las medias de tres o más grupos independientes.",
    alternative:
      "Si es significativo, usa pruebas post hoc (Tukey, Bonferroni) para saber qué grupos difieren. Con varianzas distintas, ANOVA de Welch.",
    link: { href: "/pruebas/pruebas-parametricas", label: "Pruebas paramétricas" },
  },
  "anova-rm": {
    kind: "result",
    test: "ANOVA de medidas repetidas",
    summary: "Compara tres o más mediciones de los mismos sujetos.",
    alternative:
      "Comprueba el supuesto de esfericidad (Mauchly) y aplica la corrección de Greenhouse-Geisser si no se cumple.",
    link: { href: "/pruebas/pruebas-parametricas", label: "Pruebas paramétricas" },
  },
  "mann-whitney": {
    kind: "result",
    test: "U de Mann-Whitney",
    summary: "Compara dos grupos independientes a partir de los rangos de los datos.",
    link: { href: "/pruebas/pruebas-no-parametricas", label: "Pruebas no paramétricas" },
  },
  wilcoxon: {
    kind: "result",
    test: "Prueba de los rangos con signo de Wilcoxon",
    summary:
      "Compara dos mediciones relacionadas cuando las diferencias no son normales o la variable es ordinal.",
    link: { href: "/pruebas/pruebas-no-parametricas", label: "Pruebas no paramétricas" },
  },
  kruskal: {
    kind: "result",
    test: "Kruskal-Wallis",
    summary: "Compara tres o más grupos independientes a partir de los rangos.",
    alternative: "Si es significativa, compara los grupos por pares con la prueba de Dunn.",
    link: { href: "/pruebas/pruebas-no-parametricas", label: "Pruebas no paramétricas" },
  },
  friedman: {
    kind: "result",
    test: "Prueba de Friedman",
    summary:
      "Compara tres o más mediciones relacionadas cuando no se cumple la normalidad o la variable es ordinal.",
    link: { href: "/pruebas/pruebas-no-parametricas", label: "Pruebas no paramétricas" },
  },
  chi2: {
    kind: "result",
    test: "Chi-cuadrado de Pearson",
    summary:
      "Contrasta la asociación entre dos variables cualitativas en una tabla de contingencia.",
    alternative: "Si alguna frecuencia esperada es menor de 5, usa la prueba exacta de Fisher.",
    link: { href: "/fundamentos/analisis-bivariante", label: "Análisis bivariante" },
  },
  mcnemar: {
    kind: "result",
    test: "Prueba de McNemar",
    summary:
      "Compara una proporción en dos mediciones de los mismos sujetos (por ejemplo, antes y después de una intervención).",
  },
  cochran: {
    kind: "result",
    test: "Q de Cochran",
    summary:
      "Compara una proporción en tres o más mediciones de los mismos sujetos con un resultado dicotómico.",
  },
  pearson: {
    kind: "result",
    test: "Correlación de Pearson",
    summary:
      "Mide la fuerza y la dirección de la relación lineal entre dos variables cuantitativas.",
    alternative:
      "Representa antes el diagrama de dispersión: Pearson no detecta relaciones no lineales.",
    link: { href: "/fundamentos/analisis-bivariante", label: "Análisis bivariante" },
  },
  spearman: {
    kind: "result",
    test: "Correlación de Spearman",
    summary: "Mide la relación monótona entre dos variables a partir de sus rangos.",
    link: { href: "/pruebas/pruebas-no-parametricas", label: "Pruebas no paramétricas" },
  },
  linear: {
    kind: "result",
    test: "Regresión lineal múltiple",
    summary:
      "Estima el efecto de cada predictor sobre un resultado cuantitativo, ajustado por los demás.",
    link: { href: "/modelos/regresion-lineal-multiple", label: "Regresión lineal múltiple" },
  },
  logistic: {
    kind: "result",
    test: "Regresión logística",
    summary:
      "Estima la probabilidad de un resultado dicotómico; sus coeficientes se expresan como odds ratio.",
    link: { href: "/modelos/modelos-de-clasificacion", label: "Modelos de clasificación" },
  },
  km: {
    kind: "result",
    test: "Kaplan-Meier y prueba de log-rank",
    summary:
      "Kaplan-Meier estima la curva de supervivencia teniendo en cuenta la censura; log-rank compara las curvas de dos o más grupos.",
    link: { href: "/supervivencia/curvas-de-kaplan-meier", label: "Curvas de Kaplan-Meier" },
  },
  cox: {
    kind: "result",
    test: "Regresión de Cox",
    summary:
      "Estima el hazard ratio de cada variable sobre el tiempo hasta el evento, ajustado por las demás.",
    link: { href: "/supervivencia/modelo-de-cox", label: "Modelo de Cox" },
  },
};

export function TestSelector() {
  const [path, setPath] = useState<{ node: string; choice: string }[]>([]);
  const current =
    path.length === 0
      ? "start"
      : ((nodes[path[path.length - 1].node] as Question).options.find(
          (o) => o.label === path[path.length - 1].choice,
        )?.next ?? "start");
  const node = nodes[current];

  return (
    <figure className="not-prose my-10 overflow-hidden rounded-2xl border border-border bg-surface shadow-md">
      <figcaption className="flex items-center justify-between gap-3 border-b border-border px-5 py-4 sm:px-6">
        <div>
          <p className="text-xs font-semibold tracking-wider text-accent uppercase">Asistente</p>
          <p className="mt-0.5 text-lg font-semibold text-fg">¿Qué prueba estadística uso?</p>
        </div>
        {path.length > 0 && (
          <button
            type="button"
            onClick={() => setPath([])}
            className="inline-flex h-9 items-center gap-2 rounded-xl border border-border-strong px-3 text-sm font-medium text-fg hover:border-accent"
          >
            <RotateCcw className="size-4" aria-hidden="true" />
            Empezar de nuevo
          </button>
        )}
      </figcaption>

      <div className="p-5 sm:p-6">
        {path.length > 0 && (
          <ol className="mb-5 flex flex-col gap-1.5">
            {path.map((step, index) => (
              <li key={step.node} className="flex items-start gap-2.5 text-sm">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-strong">
                  <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="text-fg-3">
                  {(nodes[step.node] as Question).title}{" "}
                  <button
                    type="button"
                    onClick={() => setPath(path.slice(0, index))}
                    className="font-medium text-fg underline decoration-border-strong underline-offset-4 hover:decoration-accent"
                    aria-label={`Cambiar respuesta: ${step.choice}`}
                  >
                    {step.choice}
                  </button>
                </span>
              </li>
            ))}
          </ol>
        )}

        <div aria-live="polite">
          {node.kind === "question" ? (
            <fieldset>
              <legend className="mb-3 font-serif text-xl font-semibold text-fg">
                {node.title}
              </legend>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {node.options.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => setPath([...path, { node: current, choice: option.label }])}
                    className="group flex items-start justify-between gap-3 rounded-xl border border-border bg-bg p-4 text-left transition-colors hover:border-accent hover:bg-accent-soft"
                  >
                    <span>
                      <span className="block font-medium text-fg">{option.label}</span>
                      {option.hint && (
                        <span className="mt-0.5 block text-sm text-fg-3">{option.hint}</span>
                      )}
                    </span>
                    <ArrowRight
                      className="mt-0.5 size-4 shrink-0 text-fg-3 transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </button>
                ))}
              </div>
            </fieldset>
          ) : (
            <div className="rounded-xl border border-accent/30 bg-accent-soft p-5">
              <p className="text-xs font-semibold tracking-wider text-accent-strong uppercase">
                Prueba recomendada
              </p>
              <p className="mt-1 font-serif text-2xl font-semibold text-fg">{node.test}</p>
              <p className="mt-2 leading-relaxed text-fg-2">{node.summary}</p>
              {node.alternative && (
                <p className="mt-2 text-sm leading-relaxed text-fg-2">{node.alternative}</p>
              )}
              {node.link && (
                <Link
                  href={node.link.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-strong underline-offset-4 hover:underline"
                >
                  Repasar: {node.link.label}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </figure>
  );
}
