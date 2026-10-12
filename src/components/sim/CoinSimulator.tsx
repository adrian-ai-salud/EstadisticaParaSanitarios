"use client";

import { scaleLinear, scaleLog } from "d3-scale";
import { line } from "d3-shape";
import { useRef, useState } from "react";
import { createRng } from "@/lib/stats/random";
import { formatPercent } from "@/lib/text";
import { AxisBottom, AxisLeft } from "../charts/Axes";
import { Chart } from "../charts/Chart";
import { ActionButton, Readout, Simulator, Stat, Stats } from "./ui";

const MAX_FLIPS = 20000;

function flip(rng: () => number, count: number): number[] {
  return Array.from({ length: count }, () => (rng() < 0.5 ? 1 : 0));
}

export function CoinSimulator() {
  const rngRef = useRef(createRng(42));
  const [flips, setFlips] = useState<number[]>(() => flip(rngRef.current, 10));

  const add = (count: number) =>
    setFlips((current) => [
      ...current,
      ...flip(rngRef.current, Math.min(count, MAX_FLIPS - current.length)),
    ]);
  const reset = () => {
    rngRef.current = createRng(Date.now() % 100000);
    setFlips([]);
  };

  const proportions: { n: number; p: number }[] = [];
  let heads = 0;
  const stride = Math.max(1, Math.floor(flips.length / 600));
  flips.forEach((value, i) => {
    heads += value;
    if (i % stride === 0 || i === flips.length - 1)
      proportions.push({ n: i + 1, p: heads / (i + 1) });
  });
  const total = flips.length;
  const share = total > 0 ? heads / total : 0;

  return (
    <Simulator
      title="Lanza una moneda muchas veces"
      description="La proporción de caras oscila mucho con pocos lanzamientos y se estabiliza cerca del 50 % a medida que lanzas más."
    >
      <div className="flex flex-wrap gap-2">
        {[1, 10, 100, 1000].map((count) => (
          <button
            key={count}
            type="button"
            onClick={() => add(count)}
            disabled={total >= MAX_FLIPS}
            className="inline-flex h-9 items-center rounded-xl bg-accent px-3.5 text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-strong disabled:opacity-40"
          >
            +{count.toLocaleString("es-ES")} {count === 1 ? "lanzamiento" : "lanzamientos"}
          </button>
        ))}
        <ActionButton onClick={reset}>Empezar de cero</ActionButton>
      </div>

      <Chart
        label={`Proporción acumulada de caras tras ${total} lanzamientos: ${formatPercent(share)}`}
        margin={{ left: 66 }}
      >
        {({ innerWidth, innerHeight }) => {
          const x = scaleLog()
            .domain([1, Math.max(10, total)])
            .range([0, innerWidth]);
          const y = scaleLinear().domain([0, 1]).range([innerHeight, 0]);
          const path = line<{ n: number; p: number }>()
            .x((d) => x(d.n))
            .y((d) => y(d.p))(proportions);
          const ticks = [1, 10, 100, 1000, 10000].filter((t) => t <= Math.max(10, total));
          return (
            <>
              <AxisLeft
                scale={y}
                innerWidth={innerWidth}
                innerHeight={innerHeight}
                ticks={[0, 0.25, 0.5, 0.75, 1]}
                format={(v) => formatPercent(v)}
                label="Caras"
                labelOffset={54}
              />
              <AxisBottom
                scale={x}
                innerWidth={innerWidth}
                innerHeight={innerHeight}
                ticks={ticks}
                format={(v) => v.toLocaleString("es-ES")}
                label="Número de lanzamientos (escala logarítmica)"
              />
              <line
                x1={0}
                x2={innerWidth}
                y1={y(0.5)}
                y2={y(0.5)}
                stroke="var(--text-3)"
                strokeDasharray="5 4"
              />
              <text
                x={innerWidth}
                y={y(0.5) - 6}
                textAnchor="end"
                fontSize={11.5}
                fill="var(--text-2)"
              >
                Probabilidad teórica: 50 %
              </text>
              {path && (
                <path
                  d={path}
                  fill="none"
                  stroke="var(--series-1)"
                  strokeWidth={2}
                  strokeLinejoin="round"
                />
              )}
              {proportions.length > 0 && (
                <circle
                  cx={x(proportions[proportions.length - 1].n)}
                  cy={y(share)}
                  r={5}
                  fill="var(--series-1)"
                  stroke="var(--surface)"
                  strokeWidth={2}
                />
              )}
            </>
          );
        }}
      </Chart>

      <Stats>
        <Stat label="Lanzamientos" value={total.toLocaleString("es-ES")} />
        <Stat label="Caras" value={heads.toLocaleString("es-ES")} />
        <Stat
          label="Proporción de caras"
          value={total ? formatPercent(share) : "—"}
          tone="accent"
        />
        <Stat
          label="Distancia al 50 %"
          value={
            total
              ? `${(Math.abs(share - 0.5) * 100).toLocaleString("es-ES", { maximumFractionDigits: 1 })} pp`
              : "—"
          }
        />
      </Stats>
      <Readout>
        {total < 50 ? (
          <>Con pocos lanzamientos la proporción puede alejarse mucho del 50 %. Sigue lanzando.</>
        ) : (
          <>
            Tras {total.toLocaleString("es-ES")} lanzamientos, la proporción de caras es del{" "}
            <strong>{formatPercent(share)}</strong>. Esto es la{" "}
            <strong>ley de los grandes números</strong>: la frecuencia observada se acerca a la
            probabilidad teórica al aumentar las repeticiones.
          </>
        )}
      </Readout>
    </Simulator>
  );
}
