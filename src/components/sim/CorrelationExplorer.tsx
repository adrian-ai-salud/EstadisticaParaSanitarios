"use client";

import { scaleLinear } from "d3-scale";
import { useMemo, useState } from "react";
import { linearFit, mean, standardDeviation } from "@/lib/stats/descriptive";
import { createRng, normal } from "@/lib/stats/random";
import { formatNumber } from "@/lib/text";
import { AxisBottom, AxisLeft } from "../charts/Axes";
import { Chart } from "../charts/Chart";
import { ActionButton, Controls, Readout, Segmented, Simulator, Slider, Stat, Stats } from "./ui";

type Shape = "linear" | "curve";

function describeStrength(r: number): string {
  const a = Math.abs(r);
  if (a < 0.1) return "prácticamente nula";
  if (a < 0.3) return "débil";
  if (a < 0.7) return "moderada";
  return "fuerte";
}

export function CorrelationExplorer() {
  const [rho, setRho] = useState(0.7);
  const [shape, setShape] = useState<Shape>("linear");
  const [seed, setSeed] = useState(3);

  const points = useMemo(() => {
    const rng = createRng(seed);
    const ages = Array.from({ length: 50 }, () => 25 + rng() * 55);
    const m = mean(ages);
    const sd = standardDeviation(ages);
    return ages.map((age) => {
      const z = (age - m) / sd;
      const signal = shape === "linear" ? rho * z : 1.1 * (z * z - 1);
      const noiseScale = shape === "linear" ? Math.sqrt(1 - rho * rho) : 0.35;
      return { x: age, y: 132 + 14 * (signal + noiseScale * normal(rng)) };
    });
  }, [rho, shape, seed]);

  const fit = linearFit(
    points.map((p) => p.x),
    points.map((p) => p.y),
  );

  return (
    <Simulator
      title="Explorador de correlación"
      description="Edad y tensión arterial sistólica de 50 pacientes simulados. Ajusta la fuerza de la relación y compara el r obtenido."
    >
      <Segmented
        label="Forma de la relación"
        value={shape}
        onChange={setShape}
        options={[
          { value: "linear", label: "Relación lineal" },
          { value: "curve", label: "Relación en U" },
        ]}
      />
      <Controls>
        {shape === "linear" ? (
          <Slider
            label="Correlación real en la población (ρ)"
            value={rho}
            min={-1}
            max={1}
            step={0.05}
            onChange={setRho}
            format={(v) => formatNumber(v, 2)}
          />
        ) : (
          <p className="text-sm leading-relaxed text-fg-2">
            La tensión es alta en jóvenes y mayores y baja en edades intermedias: hay una relación
            clara, pero no lineal.
          </p>
        )}
        <div className="flex items-end">
          <ActionButton onClick={() => setSeed((s) => s + 1)}>Otra muestra</ActionButton>
        </div>
      </Controls>

      <Chart
        label={`Diagrama de dispersión de edad y tensión sistólica con r = ${formatNumber(fit.r, 2)}`}
        margin={{ left: 56 }}
      >
        {({ innerWidth, innerHeight }) => {
          const x = scaleLinear().domain([20, 85]).range([0, innerWidth]);
          const y = scaleLinear().domain([80, 185]).range([innerHeight, 0]);
          return (
            <>
              <AxisLeft
                scale={y}
                innerWidth={innerWidth}
                innerHeight={innerHeight}
                label="TAS (mmHg)"
              />
              <AxisBottom
                scale={x}
                innerWidth={innerWidth}
                innerHeight={innerHeight}
                label="Edad (años)"
              />
              <line
                x1={x(20)}
                x2={x(85)}
                y1={y(fit.intercept + fit.slope * 20)}
                y2={y(fit.intercept + fit.slope * 85)}
                stroke="var(--series-2)"
                strokeWidth={2}
                strokeDasharray="6 4"
              />
              {points.map((p) => (
                <circle
                  key={`${p.x}-${p.y}`}
                  cx={x(p.x)}
                  cy={y(Math.min(185, Math.max(80, p.y)))}
                  r={4.5}
                  fill="var(--series-1)"
                  stroke="var(--surface)"
                  strokeWidth={1.5}
                  opacity={0.85}
                >
                  <title>{`${formatNumber(p.x, 0)} años · ${formatNumber(p.y, 0)} mmHg`}</title>
                </circle>
              ))}
            </>
          );
        }}
      </Chart>
      <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-[0.82rem] text-fg-2">
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-series-1" aria-hidden="true" />
          Paciente
        </span>
        <span className="flex items-center gap-1.5">
          <svg width="18" height="10" aria-hidden="true">
            <line
              x1="1"
              x2="17"
              y1="5"
              y2="5"
              stroke="var(--series-2)"
              strokeWidth="2.5"
              strokeDasharray="4 3"
            />
          </svg>
          Recta que mejor se ajusta
        </span>
      </div>
      <Stats>
        <Stat label="r de Pearson" value={formatNumber(fit.r, 2)} tone="accent" />
        <Stat
          label="Fuerza"
          value={describeStrength(fit.r).replace(/^./, (c) => c.toUpperCase())}
        />
        <Stat
          label="Dirección"
          value={Math.abs(fit.r) < 0.1 ? "—" : fit.r > 0 ? "Positiva" : "Negativa"}
        />
        <Stat label="R²" value={formatNumber(fit.rSquared, 2)} hint="Varianza compartida" />
      </Stats>
      <Readout>
        {shape === "curve" ? (
          <>
            Aunque la relación es evidente, <strong>r se acerca a 0</strong> porque Pearson solo
            mide relaciones lineales. Mira siempre el gráfico antes de interpretar el coeficiente.
          </>
        ) : (
          <>
            Correlación <strong>{describeStrength(fit.r)}</strong>
            {Math.abs(fit.r) >= 0.1 && <> y {fit.r > 0 ? "positiva" : "negativa"}</>}. Con 50
            pacientes, el r de la muestra varía alrededor del valor real: pulsa «Otra muestra» para
            comprobarlo.
          </>
        )}
      </Readout>
    </Simulator>
  );
}
