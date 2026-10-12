"use client";

import { scaleLinear } from "d3-scale";
import { line } from "d3-shape";
import { useMemo, useState } from "react";
import { createRng } from "@/lib/stats/random";
import { generateMonthlySeries } from "@/lib/stats/timeseries";
import { formatNumber } from "@/lib/text";
import { Chart } from "../charts/Chart";
import { ActionButton, Controls, Readout, Simulator, Slider } from "./ui";

const MONTHS = 48;
const START_YEAR = 2022;
const monthNames = [
  "ene",
  "feb",
  "mar",
  "abr",
  "may",
  "jun",
  "jul",
  "ago",
  "sep",
  "oct",
  "nov",
  "dic",
];

export function SeriesDecomposition() {
  const [slope, setSlope] = useState(0.4);
  const [amplitude, setAmplitude] = useState(18);
  const [noiseSd, setNoiseSd] = useState(4);
  const [seed, setSeed] = useState(9);

  const series = useMemo(
    () =>
      generateMonthlySeries(createRng(seed), {
        months: MONTHS,
        level: 60,
        slope,
        amplitude,
        noiseSd,
      }),
    [seed, slope, amplitude, noiseSd],
  );

  const panels = [
    { key: "value" as const, title: "Serie observada", color: "var(--series-1)" },
    { key: "trend" as const, title: "Tendencia", color: "var(--series-2)" },
    { key: "seasonal" as const, title: "Estacionalidad", color: "var(--series-3)" },
    { key: "noise" as const, title: "Componente irregular", color: "var(--series-neutral)" },
  ];

  return (
    <Simulator
      title="Construye una serie temporal"
      description="Consultas mensuales por infección respiratoria en un centro de salud (cientos), 2022-2025. Cada componente se suma a los demás."
    >
      <Controls>
        <Slider
          label="Tendencia (cambio por mes)"
          value={slope}
          min={-1}
          max={1.5}
          step={0.1}
          onChange={setSlope}
          format={(v) => `${v > 0 ? "+" : ""}${formatNumber(v, 1)}`}
        />
        <Slider
          label="Amplitud estacional"
          value={amplitude}
          min={0}
          max={30}
          onChange={setAmplitude}
          format={(v) => `±${v}`}
        />
        <Slider
          label="Ruido aleatorio"
          value={noiseSd}
          min={0}
          max={12}
          onChange={setNoiseSd}
          format={(v) => `DE ${v}`}
        />
        <div className="flex items-end">
          <ActionButton onClick={() => setSeed((s) => s + 1)}>Otro ruido</ActionButton>
        </div>
      </Controls>

      <div className="space-y-1">
        {panels.map((panel, pi) => {
          const values = series.map((p) => p[panel.key]);
          const isMain = pi === 0;
          const lo = isMain ? 0 : Math.min(-5, ...values);
          const hi = isMain ? Math.max(...values) * 1.1 : Math.max(5, ...values);
          return (
            <div key={panel.key}>
              <p className="flex items-center gap-2 text-sm font-medium text-fg">
                <span
                  className="h-0.5 w-3.5 rounded"
                  style={{ background: panel.color }}
                  aria-hidden="true"
                />
                {panel.title}
              </p>
              <Chart
                label={`${panel.title} de la serie mensual`}
                height={isMain ? 170 : 92}
                margin={{ left: 40, right: 12, top: 8, bottom: pi === panels.length - 1 ? 26 : 8 }}
              >
                {({ innerWidth, innerHeight }) => {
                  const x = scaleLinear()
                    .domain([0, MONTHS - 1])
                    .range([0, innerWidth]);
                  const y = scaleLinear().domain([lo, hi]).nice().range([innerHeight, 0]);
                  const path = line<number>()
                    .x((_, i) => x(i))
                    .y((v) => y(v))(values);
                  return (
                    <>
                      {y.ticks(isMain ? 4 : 2).map((t) => (
                        <g key={t}>
                          <line
                            x1={0}
                            x2={innerWidth}
                            y1={y(t)}
                            y2={y(t)}
                            stroke="var(--chart-grid)"
                          />
                          <text
                            x={-8}
                            y={y(t)}
                            dy="0.32em"
                            textAnchor="end"
                            fontSize={10.5}
                            fill="var(--text-3)"
                          >
                            {t}
                          </text>
                        </g>
                      ))}
                      {[12, 24, 36].map((m) => (
                        <line
                          key={m}
                          x1={x(m)}
                          x2={x(m)}
                          y1={0}
                          y2={innerHeight}
                          stroke="var(--chart-grid)"
                        />
                      ))}
                      <path
                        d={path ?? ""}
                        fill="none"
                        stroke={panel.color}
                        strokeWidth={2}
                        strokeLinejoin="round"
                      />
                      {pi === panels.length - 1 &&
                        [0, 12, 24, 36].map((m) => (
                          <text
                            key={m}
                            x={x(m) + 4}
                            y={innerHeight + 18}
                            fontSize={11}
                            fill="var(--text-3)"
                          >
                            {monthNames[m % 12]} {START_YEAR + m / 12}
                          </text>
                        ))}
                    </>
                  );
                }}
              </Chart>
            </div>
          );
        })}
      </div>
      <Readout>
        La serie observada (arriba) es la <strong>suma</strong> de las tres de abajo. Pon la
        amplitud estacional a 0 para ver solo la tendencia con ruido, o sube el ruido hasta que el
        patrón invernal sea difícil de reconocer.
      </Readout>
    </Simulator>
  );
}
