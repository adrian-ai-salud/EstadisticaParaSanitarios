"use client";

import { scaleBand, scaleLinear } from "d3-scale";
import { useState } from "react";
import { binomialPmf, poissonPmf } from "@/lib/stats/distributions";
import { formatNumber, formatPercent } from "@/lib/text";
import { AxisLeft } from "../charts/Axes";
import { Chart } from "../charts/Chart";
import { columnPath } from "../charts/shapes";
import { Controls, Readout, Segmented, Simulator, Slider, Stat, Stats } from "./ui";

type Kind = "binomial" | "poisson";

export function DiscreteExplorer() {
  const [kind, setKind] = useState<Kind>("binomial");
  const [n, setN] = useState(10);
  const [p, setP] = useState(0.6);
  const [lambda, setLambda] = useState(1.5);
  const [k, setK] = useState(7);

  const maxK = kind === "binomial" ? n : Math.max(8, Math.ceil(lambda + 4 * Math.sqrt(lambda)));
  const kk = Math.min(k, maxK);
  const probabilities = Array.from({ length: maxK + 1 }, (_, i) =>
    kind === "binomial" ? binomialPmf(i, n, p) : poissonPmf(i, lambda),
  );
  const exact = probabilities[kk];
  const atMost = probabilities.slice(0, kk + 1).reduce((a, b) => a + b, 0);
  const expected = kind === "binomial" ? n * p : lambda;
  const yMax = Math.max(0.1, ...probabilities) * 1.12;

  return (
    <Simulator
      title="Simulador de distribuciones discretas"
      description="Elige la distribución, ajusta sus parámetros y selecciona un número de sucesos k para ver su probabilidad."
    >
      <Segmented
        label="Distribución"
        value={kind}
        onChange={(value) => {
          setKind(value);
          setK(value === "binomial" ? 7 : 3);
        }}
        options={[
          { value: "binomial", label: "Binomial" },
          { value: "poisson", label: "Poisson" },
        ]}
      />
      <Controls>
        {kind === "binomial" ? (
          <>
            <Slider label="Número de pacientes (n)" value={n} min={1} max={50} onChange={setN} />
            <Slider
              label="Probabilidad de respuesta (p)"
              value={p}
              min={0.01}
              max={0.99}
              step={0.01}
              onChange={setP}
              format={(v) => formatNumber(v, 2)}
            />
          </>
        ) : (
          <Slider
            label="Media de sucesos por intervalo (λ)"
            value={lambda}
            min={0.5}
            max={15}
            step={0.5}
            onChange={setLambda}
            format={(v) => formatNumber(v, 1)}
          />
        )}
        <Slider label="Número de sucesos (k)" value={kk} min={0} max={maxK} onChange={setK} />
      </Controls>

      <Chart
        label={`Distribución ${kind === "binomial" ? `binomial con n = ${n} y p = ${formatNumber(p, 2)}` : `de Poisson con λ = ${formatNumber(lambda, 1)}`}. P(X = ${kk}) = ${formatPercent(exact)}.`}
        margin={{ left: 66 }}
      >
        {({ innerWidth, innerHeight }) => {
          const x = scaleBand<number>()
            .domain(probabilities.map((_, i) => i))
            .range([0, innerWidth])
            .paddingInner(0.25)
            .paddingOuter(0.1);
          const y = scaleLinear().domain([0, yMax]).range([innerHeight, 0]);
          const barWidth = Math.min(x.bandwidth(), 24);
          const labelEvery = Math.ceil(probabilities.length / 16);
          return (
            <>
              <AxisLeft
                scale={y}
                innerWidth={innerWidth}
                innerHeight={innerHeight}
                format={(v) => formatPercent(v)}
                label="Probabilidad"
                labelOffset={54}
              />
              {probabilities
                .map((prob, k) => ({ k, prob }))
                .map(({ k: i, prob }) => {
                  const cx = (x(i) ?? 0) + x.bandwidth() / 2;
                  const isSelected = i === kk;
                  return (
                    // biome-ignore lint/a11y/noStaticElementInteractions: atajo con ratón; el mismo valor se elige con el control deslizante
                    <g key={i} onClick={() => setK(i)} className="cursor-pointer">
                      <rect
                        x={x(i)}
                        y={0}
                        width={x.bandwidth()}
                        height={innerHeight}
                        fill="transparent"
                      />
                      {prob > 0 && (
                        <path
                          d={columnPath(cx, barWidth, y(prob), innerHeight)}
                          fill={
                            isSelected
                              ? "var(--series-2)"
                              : i < kk
                                ? "var(--series-1)"
                                : "color-mix(in srgb, var(--series-1) 45%, var(--surface))"
                          }
                        >
                          <title>{`P(X = ${i}) = ${formatPercent(prob)}`}</title>
                        </path>
                      )}
                      {(i % labelEvery === 0 || isSelected) && (
                        <text
                          x={cx}
                          y={innerHeight + 18}
                          textAnchor="middle"
                          fontSize={11.5}
                          fontWeight={isSelected ? 700 : 400}
                          fill={isSelected ? "var(--text)" : "var(--text-3)"}
                        >
                          {i}
                        </text>
                      )}
                      {isSelected && (
                        <text
                          x={cx}
                          y={y(prob) - 8}
                          textAnchor="middle"
                          fontSize={12}
                          fontWeight={600}
                          fill="var(--text)"
                        >
                          {formatPercent(prob)}
                        </text>
                      )}
                    </g>
                  );
                })}
              <line
                x1={0}
                x2={innerWidth}
                y1={innerHeight}
                y2={innerHeight}
                stroke="var(--chart-axis)"
              />
              <text
                x={innerWidth / 2}
                y={innerHeight + 38}
                textAnchor="middle"
                fontSize={12}
                fill="var(--text-2)"
              >
                {kind === "binomial"
                  ? "Pacientes que responden (k)"
                  : "Sucesos en el intervalo (k)"}
              </text>
            </>
          );
        }}
      </Chart>

      <Stats>
        <Stat label={`P(X = ${kk})`} value={formatPercent(exact)} tone="accent" />
        <Stat label={`P(X ≤ ${kk})`} value={formatPercent(atMost)} />
        <Stat label={`P(X ≥ ${kk})`} value={formatPercent(1 - atMost + exact)} />
        <Stat
          label="Valor esperado"
          value={formatNumber(expected, 1)}
          hint={kind === "binomial" ? "n · p" : "λ"}
        />
      </Stats>
      <Readout>
        {kind === "binomial" ? (
          <>
            Si cada paciente responde con una probabilidad de {formatPercent(p)}, la probabilidad de
            que respondan exactamente{" "}
            <strong>
              {kk} de {n}
            </strong>{" "}
            es del <strong>{formatPercent(exact)}</strong>.
          </>
        ) : (
          <>
            Con una media de {formatNumber(lambda, 1)} sucesos por intervalo, la probabilidad de
            observar exactamente <strong>{kk}</strong> es del{" "}
            <strong>{formatPercent(exact)}</strong>.
          </>
        )}{" "}
        Pulsa sobre cualquier barra para seleccionarla.
      </Readout>
    </Simulator>
  );
}
