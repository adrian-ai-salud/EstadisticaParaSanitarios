"use client";

import { scaleLinear } from "d3-scale";
import { useMemo, useState } from "react";
import { linearFit } from "@/lib/stats/descriptive";
import { createRng, normal } from "@/lib/stats/random";
import { formatNumber } from "@/lib/text";
import { AxisBottom, AxisLeft } from "../charts/Axes";
import { Chart } from "../charts/Chart";
import { ActionButton, Controls, Readout, Simulator, Slider, Stat, Stats } from "./ui";

export function RegressionExplorer() {
  const [noise, setNoise] = useState(300);
  const [week, setWeek] = useState(38);
  const [showResiduals, setShowResiduals] = useState(true);
  const [seed, setSeed] = useState(5);

  const points = useMemo(() => {
    const rng = createRng(seed);
    return Array.from({ length: 40 }, () => {
      const x = 34 + rng() * 8;
      return { x, y: 3250 + 175 * (x - 39) + normal(rng, 0, noise) };
    });
  }, [noise, seed]);

  const fit = linearFit(
    points.map((p) => p.x),
    points.map((p) => p.y),
  );
  const predicted = fit.intercept + fit.slope * week;
  const fmtGrams = (v: number) => Math.round(v).toLocaleString("es-ES");

  return (
    <Simulator
      title="Explorador de regresión lineal"
      description="Peso al nacer y edad gestacional de 40 recién nacidos simulados. Cambia la dispersión de los datos y usa la recta para predecir."
    >
      <Controls>
        <Slider
          label="Dispersión alrededor de la recta"
          value={noise}
          min={50}
          max={700}
          step={25}
          onChange={setNoise}
          format={(v) => `± ${v} g`}
        />
        <Slider
          label="Predecir el peso con"
          value={week}
          min={34}
          max={42}
          step={0.5}
          onChange={setWeek}
          format={(v) => `${formatNumber(v, 1)} semanas`}
        />
      </Controls>
      <div className="flex flex-wrap items-center gap-2">
        <label className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-xl border border-border-strong px-3.5 text-sm font-medium text-fg">
          <input
            type="checkbox"
            checked={showResiduals}
            onChange={(event) => setShowResiduals(event.target.checked)}
            className="size-4 accent-[var(--accent)]"
          />
          Mostrar residuos
        </label>
        <ActionButton onClick={() => setSeed((s) => s + 1)}>Otra muestra</ActionButton>
      </div>

      <Chart
        label={`Recta de regresión: peso = ${fmtGrams(fit.intercept)} + ${fmtGrams(fit.slope)} × semanas, R² ${formatNumber(fit.rSquared, 2)}`}
        margin={{ left: 60 }}
      >
        {({ innerWidth, innerHeight }) => {
          const x = scaleLinear().domain([33.5, 42.5]).range([0, innerWidth]);
          const y = scaleLinear().domain([1500, 5000]).range([innerHeight, 0]);
          const clampY = (v: number) => y(Math.min(5000, Math.max(1500, v)));
          return (
            <>
              <AxisLeft
                scale={y}
                innerWidth={innerWidth}
                innerHeight={innerHeight}
                label="Peso al nacer (g)"
                format={(v) => v.toLocaleString("es-ES")}
              />
              <AxisBottom
                scale={x}
                innerWidth={innerWidth}
                innerHeight={innerHeight}
                label="Edad gestacional (semanas)"
              />
              {showResiduals &&
                points.map((p) => (
                  <line
                    key={`r${p.x}`}
                    x1={x(p.x)}
                    x2={x(p.x)}
                    y1={clampY(p.y)}
                    y2={clampY(fit.intercept + fit.slope * p.x)}
                    stroke="var(--series-critical)"
                    strokeWidth={1}
                    opacity={0.6}
                  />
                ))}
              <line
                x1={x(33.5)}
                x2={x(42.5)}
                y1={clampY(fit.intercept + fit.slope * 33.5)}
                y2={clampY(fit.intercept + fit.slope * 42.5)}
                stroke="var(--series-2)"
                strokeWidth={2.5}
              />
              {points.map((p) => (
                <circle
                  key={p.x}
                  cx={x(p.x)}
                  cy={clampY(p.y)}
                  r={4.5}
                  fill="var(--series-1)"
                  stroke="var(--surface)"
                  strokeWidth={1.5}
                >
                  <title>{`${formatNumber(p.x, 1)} semanas · ${fmtGrams(p.y)} g`}</title>
                </circle>
              ))}
              <line
                x1={x(week)}
                x2={x(week)}
                y1={clampY(predicted)}
                y2={innerHeight}
                stroke="var(--text-2)"
                strokeDasharray="3 3"
              />
              <line
                x1={0}
                x2={x(week)}
                y1={clampY(predicted)}
                y2={clampY(predicted)}
                stroke="var(--text-2)"
                strokeDasharray="3 3"
              />
              <circle
                cx={x(week)}
                cy={clampY(predicted)}
                r={6}
                fill="var(--text)"
                stroke="var(--surface)"
                strokeWidth={2}
              />
            </>
          );
        }}
      </Chart>
      <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-[0.82rem] text-fg-2">
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-series-1" aria-hidden="true" />
          Recién nacido
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-0.5 w-4 rounded bg-series-2" aria-hidden="true" />
          Recta de regresión
        </span>
        {showResiduals && (
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-px bg-series-critical" aria-hidden="true" />
            Residuo
          </span>
        )}
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-fg" aria-hidden="true" />
          Predicción
        </span>
      </div>

      <Stats>
        <Stat
          label="Constante (β₀)"
          value={fmtGrams(fit.intercept)}
          hint="g con 0 semanas (sin sentido clínico)"
        />
        <Stat
          label="Pendiente (β₁)"
          value={`${fit.slope > 0 ? "+" : ""}${fmtGrams(fit.slope)}`}
          hint="g por semana"
          tone="accent"
        />
        <Stat label="R²" value={formatNumber(fit.rSquared, 2)} hint="Variabilidad explicada" />
        <Stat
          label="Peso predicho"
          value={fmtGrams(predicted)}
          hint={`g con ${formatNumber(week, 1)} semanas`}
        />
      </Stats>
      <Readout>
        Por cada semana más de gestación, el peso al nacer aumenta de media{" "}
        <strong>{fmtGrams(fit.slope)} g</strong>. La edad gestacional explica el{" "}
        <strong>{formatNumber(fit.rSquared * 100, 0)} %</strong> de la variabilidad del peso; al
        aumentar la dispersión, los residuos crecen y el R² baja aunque la pendiente apenas cambie.
      </Readout>
    </Simulator>
  );
}
