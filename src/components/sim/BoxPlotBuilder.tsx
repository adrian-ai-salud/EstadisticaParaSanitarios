"use client";

import { scaleLinear } from "d3-scale";
import { useMemo, useState } from "react";
import { boxplotStats } from "@/lib/stats/descriptive";
import { createRng, exponential, normal } from "@/lib/stats/random";
import { formatNumber } from "@/lib/text";
import { AxisBottom } from "../charts/Axes";
import { Chart } from "../charts/Chart";
import { ActionButton, Controls, Readout, Simulator, Slider, Stat, Stats } from "./ui";

function generateAges(seed: number, skew: number): number[] {
  const rng = createRng(seed);
  return Array.from({ length: 60 }, () => {
    const value = normal(rng, 48, 9) + skew * exponential(rng, 1 / 14);
    return Math.round(Math.min(92, Math.max(18, value)));
  });
}

export function BoxPlotBuilder() {
  const [seed, setSeed] = useState(11);
  const [skew, setSkew] = useState(0);
  const [extraOutlier, setExtraOutlier] = useState(false);

  const values = useMemo(() => {
    const ages = generateAges(seed, skew);
    return extraOutlier ? [...ages, 97] : ages;
  }, [seed, skew, extraOutlier]);
  const stats = boxplotStats(values);
  const mean = values.reduce((a, b) => a + b, 0) / values.length;

  const jitter = useMemo(() => {
    const rng = createRng(seed + 1000);
    return values.map(() => rng());
  }, [values, seed]);

  return (
    <Simulator
      title="Construye un diagrama de caja"
      description="Edad de 60 pacientes de un estudio. Introduce asimetría o un paciente muy mayor y observa cómo responden la caja, los bigotes y la media."
    >
      <Controls>
        <Slider
          label="Asimetría hacia edades altas"
          value={skew}
          min={0}
          max={2}
          step={0.1}
          onChange={setSkew}
          format={(v) => (v === 0 ? "Ninguna" : formatNumber(v, 1))}
        />
        <div className="flex flex-wrap items-end gap-2">
          <label className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-xl border border-border-strong px-3.5 text-sm font-medium text-fg">
            <input
              type="checkbox"
              checked={extraOutlier}
              onChange={(event) => setExtraOutlier(event.target.checked)}
              className="size-4 accent-[var(--accent)]"
            />
            Añadir un paciente de 97 años
          </label>
          <ActionButton onClick={() => setSeed((s) => s + 1)}>Otra muestra</ActionButton>
        </div>
      </Controls>

      <Chart
        label={`Diagrama de caja de la edad: mediana ${formatNumber(stats.median, 1)} años, Q1 ${formatNumber(stats.q1, 1)}, Q3 ${formatNumber(stats.q3, 1)}, ${stats.outliers.length} valores atípicos.`}
        height={270}
        margin={{ left: 20, right: 20, top: 24 }}
      >
        {({ innerWidth, innerHeight }) => {
          const x = scaleLinear().domain([15, 100]).range([0, innerWidth]);
          const boxTop = 18;
          const boxHeight = 56;
          const mid = boxTop + boxHeight / 2;
          const stripTop = boxTop + boxHeight + 42;
          const stripHeight = innerHeight - stripTop - 6;
          const labels = [
            { x: stats.q1, text: "Q1" },
            { x: stats.median, text: "Mediana" },
            { x: stats.q3, text: "Q3" },
          ];
          return (
            <>
              <AxisBottom
                scale={x}
                innerWidth={innerWidth}
                innerHeight={innerHeight}
                label="Edad (años)"
                grid
              />
              <line
                x1={x(stats.whiskerLow)}
                x2={x(stats.q1)}
                y1={mid}
                y2={mid}
                stroke="var(--text-2)"
                strokeWidth={1.5}
              />
              <line
                x1={x(stats.q3)}
                x2={x(stats.whiskerHigh)}
                y1={mid}
                y2={mid}
                stroke="var(--text-2)"
                strokeWidth={1.5}
              />
              {[stats.whiskerLow, stats.whiskerHigh].map((v) => (
                <line
                  key={v}
                  x1={x(v)}
                  x2={x(v)}
                  y1={mid - 12}
                  y2={mid + 12}
                  stroke="var(--text-2)"
                  strokeWidth={1.5}
                />
              ))}
              <rect
                x={x(stats.q1)}
                y={boxTop}
                width={Math.max(1, x(stats.q3) - x(stats.q1))}
                height={boxHeight}
                rx={6}
                fill="color-mix(in srgb, var(--series-1) 16%, transparent)"
                stroke="var(--series-1)"
                strokeWidth={2}
              />
              <line
                x1={x(stats.median)}
                x2={x(stats.median)}
                y1={boxTop}
                y2={boxTop + boxHeight}
                stroke="var(--series-1)"
                strokeWidth={3}
              />
              <g>
                <path
                  d={`M${x(mean)},${mid - 6}l6,6l-6,6l-6,-6z`}
                  fill="var(--series-2)"
                  stroke="var(--surface)"
                  strokeWidth={2}
                />
              </g>
              {labels.map((label) => (
                <text
                  key={label.text}
                  x={x(label.x)}
                  y={label.text === "Mediana" ? boxTop + boxHeight + 16 : boxTop - 8}
                  textAnchor="middle"
                  fontSize={11.5}
                  fontWeight={label.text === "Mediana" ? 600 : 400}
                  fill="var(--text-2)"
                >
                  {label.text}
                </text>
              ))}
              {[...new Set(stats.outliers)].map((v) => (
                <circle
                  key={v}
                  cx={x(v)}
                  cy={mid}
                  r={4.5}
                  fill="var(--series-critical)"
                  stroke="var(--surface)"
                  strokeWidth={2}
                >
                  <title>{`Valor atípico: ${v} años`}</title>
                </circle>
              ))}
              <text x={0} y={stripTop - 10} fontSize={11.5} fill="var(--text-3)">
                Cada punto es un paciente
              </text>
              {values.map((v, i) => (
                <circle
                  // biome-ignore lint/suspicious/noArrayIndexKey: puntos sin identidad propia
                  key={i}
                  cx={x(v)}
                  cy={stripTop + jitter[i] * stripHeight}
                  r={3.5}
                  fill={stats.outliers.includes(v) ? "var(--series-critical)" : "var(--series-1)"}
                  opacity={0.75}
                />
              ))}
            </>
          );
        }}
      </Chart>

      <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-[0.82rem] text-fg-2">
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-1 rounded bg-series-1" aria-hidden="true" />
          Mediana
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 rotate-45 bg-series-2" aria-hidden="true" />
          Media
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-series-critical" aria-hidden="true" />
          Valor atípico (más de 1,5 × RIC fuera de la caja)
        </span>
      </div>

      <Stats>
        <Stat label="Mediana" value={formatNumber(stats.median, 1)} hint="años" />
        <Stat label="Media" value={formatNumber(mean, 1)} hint="años" />
        <Stat
          label="Rango intercuartílico"
          value={formatNumber(stats.iqr, 1)}
          hint={`Q1 ${formatNumber(stats.q1, 1)} · Q3 ${formatNumber(stats.q3, 1)}`}
        />
        <Stat
          label="Valores atípicos"
          value={stats.outliers.length}
          tone={stats.outliers.length > 0 ? "danger" : undefined}
        />
      </Stats>
      <Readout>
        {Math.abs(mean - stats.median) < 1.5 ? (
          <>
            La media y la mediana casi coinciden: la distribución es{" "}
            <strong>aproximadamente simétrica</strong>.
          </>
        ) : (
          <>
            La media ({formatNumber(mean, 1)}) se separa de la mediana (
            {formatNumber(stats.median, 1)}) hacia la cola larga: la distribución es{" "}
            <strong>asimétrica</strong> y conviene describirla con mediana y rango intercuartílico.
          </>
        )}
      </Readout>
    </Simulator>
  );
}
