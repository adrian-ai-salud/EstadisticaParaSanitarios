"use client";

import { bin } from "d3-array";
import { scaleBand, scaleLinear } from "d3-scale";
import { useMemo, useState } from "react";
import { mean, standardDeviation } from "@/lib/stats/descriptive";
import { normalQuantile } from "@/lib/stats/distributions";
import { createRng, exponential, normal } from "@/lib/stats/random";
import { formatNumber } from "@/lib/text";
import { AxisBottom, AxisLeft } from "../charts/Axes";
import { Chart } from "../charts/Chart";
import { columnPath } from "../charts/shapes";
import { ActionButton, Readout, Segmented, Simulator } from "./ui";

type Tab = "normality" | "variance";
type Shape = "normal" | "skewed" | "outliers";
type Spread = "equal" | "unequal";

function sample(seed: number, shape: Shape): number[] {
  const rng = createRng(seed);
  return Array.from({ length: 80 }, (_, i) => {
    if (shape === "skewed") return 4 + exponential(rng, 1 / 3);
    if (shape === "outliers" && i < 4) return 145 + rng() * 25;
    return normal(rng, 100, 12);
  });
}

function Histogram({ values }: { values: number[] }) {
  return (
    <Chart label="Histograma de la muestra" height={220} margin={{ left: 40, right: 8 }}>
      {({ innerWidth, innerHeight }) => {
        const extent: [number, number] = [Math.min(...values), Math.max(...values)];
        const bins = bin().domain(extent).thresholds(12)(values);
        const x = scaleLinear()
          .domain([bins[0].x0 ?? extent[0], bins[bins.length - 1].x1 ?? extent[1]])
          .range([0, innerWidth]);
        const y = scaleLinear()
          .domain([0, Math.max(...bins.map((b) => b.length)) * 1.1])
          .range([innerHeight, 0]);
        return (
          <>
            <AxisLeft scale={y} innerWidth={innerWidth} innerHeight={innerHeight} tickCount={4} />
            <AxisBottom
              scale={x}
              innerWidth={innerWidth}
              innerHeight={innerHeight}
              tickCount={5}
              format={(v) => formatNumber(v, 0)}
              label="Valor"
            />
            {bins.map((b) => {
              const x0 = x(b.x0 ?? 0);
              const x1 = x(b.x1 ?? 0);
              return (
                <path
                  key={b.x0}
                  d={columnPath((x0 + x1) / 2, Math.max(1, x1 - x0 - 2), y(b.length), innerHeight)}
                  fill="var(--series-1)"
                >
                  <title>{`${formatNumber(b.x0 ?? 0, 1)}–${formatNumber(b.x1 ?? 0, 1)}: ${b.length}`}</title>
                </path>
              );
            })}
          </>
        );
      }}
    </Chart>
  );
}

function QQPlot({ values }: { values: number[] }) {
  const sorted = [...values].sort((a, b) => a - b);
  const m = mean(values);
  const sd = standardDeviation(values);
  const points = sorted.map((v, i) => ({
    theoretical: normalQuantile((i + 0.5) / sorted.length),
    observed: (v - m) / sd,
  }));
  return (
    <Chart label="Gráfico Q-Q normal de la muestra" height={220} margin={{ left: 40, right: 8 }}>
      {({ innerWidth, innerHeight }) => {
        const x = scaleLinear().domain([-3, 3]).range([0, innerWidth]);
        const y = scaleLinear().domain([-3.5, 5]).range([innerHeight, 0]);
        return (
          <>
            <AxisLeft
              scale={y}
              innerWidth={innerWidth}
              innerHeight={innerHeight}
              ticks={[-3, 0, 3]}
            />
            <AxisBottom
              scale={x}
              innerWidth={innerWidth}
              innerHeight={innerHeight}
              ticks={[-3, -2, -1, 0, 1, 2, 3]}
              label="Cuantiles teóricos"
            />
            <line
              x1={x(-3)}
              x2={x(3)}
              y1={y(-3)}
              y2={y(3)}
              stroke="var(--series-2)"
              strokeWidth={2}
            />
            {points.map((p) => (
              <circle
                key={p.theoretical}
                cx={x(p.theoretical)}
                cy={y(Math.min(5, p.observed))}
                r={3.5}
                fill="var(--series-1)"
                opacity={0.8}
              />
            ))}
          </>
        );
      }}
    </Chart>
  );
}

function GroupSpread({ spread, seed }: { spread: Spread; seed: number }) {
  const groups = useMemo(() => {
    const rng = createRng(seed + 99);
    const sds = spread === "equal" ? [8, 8, 8] : [3, 9, 18];
    return ["Dieta A", "Dieta B", "Dieta C"].map((name, g) => ({
      name,
      values: Array.from({ length: 25 }, () => normal(rng, [6, 8, 7][g], sds[g] / 3)),
    }));
  }, [spread, seed]);
  return (
    <Chart
      label={
        spread === "equal"
          ? "Tres grupos con dispersión similar"
          : "Tres grupos con dispersión muy distinta"
      }
      height={260}
      margin={{ left: 52 }}
    >
      {({ innerWidth, innerHeight }) => {
        const x = scaleBand<string>()
          .domain(groups.map((g) => g.name))
          .range([0, innerWidth])
          .padding(0.3);
        const y = scaleLinear().domain([-12, 26]).range([innerHeight, 0]);
        return (
          <>
            <AxisLeft
              scale={y}
              innerWidth={innerWidth}
              innerHeight={innerHeight}
              label="Peso perdido (kg)"
            />
            {groups.map((g) => {
              const cx = (x(g.name) ?? 0) + x.bandwidth() / 2;
              const m = mean(g.values);
              const sd = standardDeviation(g.values);
              return (
                <g key={g.name}>
                  <rect
                    x={cx - 34}
                    y={y(m + sd)}
                    width={68}
                    height={y(m - sd) - y(m + sd)}
                    rx={6}
                    fill="color-mix(in srgb, var(--series-1) 14%, transparent)"
                  />
                  {g.values.map((v, i) => (
                    <circle
                      // biome-ignore lint/suspicious/noArrayIndexKey: puntos sin identidad propia
                      key={i}
                      cx={cx + ((i % 5) - 2) * 9}
                      cy={y(Math.max(-12, Math.min(26, v)))}
                      r={3.5}
                      fill="var(--series-1)"
                      opacity={0.8}
                    />
                  ))}
                  <line
                    x1={cx - 34}
                    x2={cx + 34}
                    y1={y(m)}
                    y2={y(m)}
                    stroke="var(--series-2)"
                    strokeWidth={2.5}
                  />
                  <text
                    x={cx}
                    y={innerHeight + 18}
                    textAnchor="middle"
                    fontSize={11.5}
                    fill="var(--text-2)"
                  >
                    {g.name}
                  </text>
                  <text
                    x={cx}
                    y={innerHeight + 34}
                    textAnchor="middle"
                    fontSize={11}
                    fill="var(--text-3)"
                  >
                    DE {formatNumber(sd, 1)}
                  </text>
                </g>
              );
            })}
          </>
        );
      }}
    </Chart>
  );
}

export function AssumptionsVisualizer() {
  const [tab, setTab] = useState<Tab>("normality");
  const [shape, setShape] = useState<Shape>("normal");
  const [spread, setSpread] = useState<Spread>("equal");
  const [seed, setSeed] = useState(8);
  const values = useMemo(() => sample(seed, shape), [seed, shape]);

  return (
    <Simulator
      title="¿Se cumplen los supuestos?"
      description="Compara cómo se ven unos datos que cumplen los supuestos de las pruebas paramétricas y otros que no."
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Segmented
          label="Supuesto"
          value={tab}
          onChange={setTab}
          options={[
            { value: "normality", label: "Normalidad" },
            { value: "variance", label: "Homocedasticidad" },
          ]}
        />
        <ActionButton onClick={() => setSeed((s) => s + 1)}>Otra muestra</ActionButton>
      </div>

      {tab === "normality" ? (
        <>
          <Segmented
            label="Tipo de datos"
            value={shape}
            onChange={setShape}
            options={[
              { value: "normal", label: "Normales" },
              { value: "skewed", label: "Asimétricos" },
              { value: "outliers", label: "Con atípicos" },
            ]}
          />
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="mb-1 text-sm font-medium text-fg">Histograma</p>
              <Histogram values={values} />
            </div>
            <div>
              <p className="mb-1 text-sm font-medium text-fg">Gráfico Q-Q normal</p>
              <QQPlot values={values} />
            </div>
          </div>
          <Readout>
            {shape === "normal" && (
              <>
                La campana es simétrica y los puntos del Q-Q siguen la diagonal:{" "}
                <strong>el supuesto de normalidad es razonable</strong>.
              </>
            )}
            {shape === "skewed" && (
              <>
                La cola larga a la derecha (como en los días de estancia hospitalaria) hace que los
                puntos del Q-Q se curven por encima de la diagonal:{" "}
                <strong>no hay normalidad</strong>. Valora una transformación logarítmica o una
                prueba no paramétrica.
              </>
            )}
            {shape === "outliers" && (
              <>
                La mayoría de los datos es normal, pero unos pocos valores extremos se separan de la
                diagonal en el extremo superior. <strong>Revisa esos valores</strong> antes de
                decidir: pueden ser errores de registro.
              </>
            )}
          </Readout>
        </>
      ) : (
        <>
          <Segmented
            label="Dispersión de los grupos"
            value={spread}
            onChange={setSpread}
            options={[
              { value: "equal", label: "Varianzas similares" },
              { value: "unequal", label: "Varianzas distintas" },
            ]}
          />
          <GroupSpread spread={spread} seed={seed} />
          <Readout>
            La línea naranja marca la media de cada grupo y la franja sombreada, ±1 desviación
            típica.{" "}
            {spread === "equal" ? (
              <>
                Las tres franjas tienen una anchura parecida:{" "}
                <strong>se cumple la homocedasticidad</strong>.
              </>
            ) : (
              <>
                Las franjas son muy distintas: <strong>no hay homocedasticidad</strong>. Usa la
                corrección de Welch o una prueba no paramétrica.
              </>
            )}
          </Readout>
        </>
      )}
    </Simulator>
  );
}
