"use client";

import { scaleLinear } from "d3-scale";
import { useState } from "react";
import { mean, median } from "@/lib/stats/descriptive";
import { formatNumber } from "@/lib/text";
import { AxisBottom } from "../charts/Axes";
import { Chart } from "../charts/Chart";
import { Readout, Simulator, Slider, Stat, Stats } from "./ui";

const BASE_STAYS = [2, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 7, 8, 9];

export function MeanMedianVisualizer() {
  const [last, setLast] = useState(10);
  const stays = [...BASE_STAYS, last];
  const m = mean(stays);
  const md = median(stays);

  return (
    <Simulator
      title="La media se deja arrastrar, la mediana no"
      description="Días de estancia de 15 pacientes ingresados. Alarga la estancia del último paciente, que tuvo complicaciones."
    >
      <Slider
        label="Estancia del paciente con complicaciones"
        value={last}
        min={5}
        max={90}
        onChange={setLast}
        format={(v) => `${v} días`}
      />
      <Chart
        label={`Media ${formatNumber(m, 1)} días y mediana ${formatNumber(md, 1)} días`}
        height={180}
        margin={{ left: 16, right: 16, top: 30 }}
      >
        {({ innerWidth, innerHeight }) => {
          const x = scaleLinear().domain([0, 92]).range([0, innerWidth]);
          const counts = new Map<number, number>();
          const markers = [
            { value: md, label: "Mediana", color: "var(--series-1)" },
            { value: m, label: "Media", color: "var(--series-2)" },
          ];
          const close = Math.abs(x(m) - x(md)) < 60;
          return (
            <>
              <AxisBottom
                scale={x}
                innerWidth={innerWidth}
                innerHeight={innerHeight}
                label="Días de estancia"
                grid
              />
              {stays.map((v, i) => {
                const level = counts.get(v) ?? 0;
                counts.set(v, level + 1);
                return (
                  <circle
                    // biome-ignore lint/suspicious/noArrayIndexKey: pacientes sin identificador
                    key={i}
                    cx={x(v)}
                    cy={innerHeight - 10 - level * 13}
                    r={5.5}
                    fill={
                      i === stays.length - 1 ? "var(--series-critical)" : "var(--series-neutral)"
                    }
                    stroke="var(--surface)"
                    strokeWidth={2}
                  />
                );
              })}
              {markers.map((marker, i) => (
                <g key={marker.label}>
                  <line
                    x1={x(marker.value)}
                    x2={x(marker.value)}
                    y1={-4}
                    y2={innerHeight}
                    stroke={marker.color}
                    strokeWidth={2.5}
                  />
                  <text
                    x={x(marker.value) + (close ? (i === 0 ? -6 : 6) : 0)}
                    y={-12}
                    textAnchor={close ? (i === 0 ? "end" : "start") : "middle"}
                    fontSize={12}
                    fontWeight={600}
                    fill="var(--text)"
                  >
                    {marker.label} {formatNumber(marker.value, 1)}
                  </text>
                </g>
              ))}
            </>
          );
        }}
      </Chart>
      <Stats>
        <Stat label="Mediana" value={formatNumber(md, 1)} hint="días" tone="accent" />
        <Stat label="Media" value={formatNumber(m, 1)} hint="días" />
        <Stat label="Diferencia" value={formatNumber(m - md, 1)} hint="días" />
        <Stat label="Estancia máxima" value={last} hint="días" />
      </Stats>
      <Readout>
        Un solo paciente con una estancia de {last} días {m - md > 1 ? "desplaza" : "apenas mueve"}{" "}
        la media hasta <strong>{formatNumber(m, 1)} días</strong>, mientras la mediana sigue en{" "}
        <strong>{formatNumber(md, 1)}</strong>. Por eso las pruebas no paramétricas, basadas en el
        orden de los datos, resisten mejor los valores extremos.
      </Readout>
    </Simulator>
  );
}
