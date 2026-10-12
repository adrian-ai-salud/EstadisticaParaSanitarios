"use client";

import { scaleLinear } from "d3-scale";
import { line } from "d3-shape";
import { useMemo, useState } from "react";
import { mean } from "@/lib/stats/descriptive";
import { createRng } from "@/lib/stats/random";
import { difference, generateMonthlySeries } from "@/lib/stats/timeseries";
import { AxisLeft } from "../charts/Axes";
import { Chart } from "../charts/Chart";
import { Readout, Segmented, Simulator } from "./ui";

type Transform = "original" | "first" | "seasonal" | "both";

const descriptions: Record<Transform, React.ReactNode> = {
  original: (
    <>
      La serie crece y repite un pico cada invierno: su media cambia con el tiempo, así que{" "}
      <strong>no es estacionaria</strong>.
    </>
  ),
  first: (
    <>
      Restar a cada mes el anterior elimina la tendencia, pero el patrón estacional sigue ahí:{" "}
      <strong>todavía no es estacionaria</strong>.
    </>
  ),
  seasonal: (
    <>
      Restar el valor del mismo mes del año anterior elimina la estacionalidad y, en buena parte, la
      tendencia: queda una serie que oscila alrededor de un nivel constante.
    </>
  ),
  both: (
    <>
      Con una diferencia estacional y otra regular la serie oscila alrededor de cero sin patrón
      visible: <strong>es estacionaria</strong>y ya se puede modelizar con un ARIMA (en este caso,
      un SARIMA con d = 1 y D = 1).
    </>
  ),
};

export function DifferencingSimulator() {
  const [transform, setTransform] = useState<Transform>("original");
  const original = useMemo(
    () =>
      generateMonthlySeries(createRng(4), {
        months: 60,
        level: 60,
        slope: 0.6,
        amplitude: 18,
        noiseSd: 3,
      }).map((p) => p.value),
    [],
  );
  const values =
    transform === "original"
      ? original
      : transform === "first"
        ? difference(original)
        : transform === "seasonal"
          ? difference(original, 12)
          : difference(difference(original, 12));
  const offset = original.length - values.length;
  const avg = mean(values);

  return (
    <Simulator
      title="Hacer estacionaria una serie"
      description="Consultas mensuales por infección respiratoria durante cinco años. Aplica distintas diferencias y observa qué componente desaparece."
    >
      <Segmented
        label="Transformación"
        value={transform}
        onChange={setTransform}
        options={[
          { value: "original", label: "Serie original" },
          { value: "first", label: "Diferencia regular" },
          { value: "seasonal", label: "Diferencia estacional" },
          { value: "both", label: "Ambas" },
        ]}
      />
      <Chart label="Serie temporal tras la transformación seleccionada" margin={{ left: 48 }}>
        {({ innerWidth, innerHeight }) => {
          const x = scaleLinear()
            .domain([0, original.length - 1])
            .range([0, innerWidth]);
          const lo = Math.min(...values);
          const hi = Math.max(...values);
          const y = scaleLinear()
            .domain([Math.min(0, lo), hi])
            .nice()
            .range([innerHeight, 0]);
          const path = line<number>()
            .x((_, i) => x(i + offset))
            .y((v) => y(v))(values);
          return (
            <>
              <AxisLeft scale={y} innerWidth={innerWidth} innerHeight={innerHeight} tickCount={5} />
              {[0, 12, 24, 36, 48].map((m) => (
                <text key={m} x={x(m) + 4} y={innerHeight + 18} fontSize={11} fill="var(--text-3)">
                  Año {m / 12 + 1}
                </text>
              ))}
              <line
                x1={0}
                x2={innerWidth}
                y1={innerHeight}
                y2={innerHeight}
                stroke="var(--chart-axis)"
              />
              {transform !== "original" && (
                <line x1={0} x2={innerWidth} y1={y(0)} y2={y(0)} stroke="var(--text-3)" />
              )}
              <line
                x1={x(offset)}
                x2={innerWidth}
                y1={y(avg)}
                y2={y(avg)}
                stroke="var(--series-2)"
                strokeDasharray="5 4"
                strokeWidth={1.5}
              />
              <path
                d={path ?? ""}
                fill="none"
                stroke="var(--series-1)"
                strokeWidth={2}
                strokeLinejoin="round"
              />
            </>
          );
        }}
      </Chart>
      <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-[0.82rem] text-fg-2">
        <span className="flex items-center gap-1.5">
          <span className="h-0.5 w-4 rounded bg-series-1" aria-hidden="true" />
          Serie
        </span>
        <span className="flex items-center gap-1.5">
          <svg width="18" height="10" aria-hidden="true">
            <line
              x1="1"
              x2="17"
              y1="5"
              y2="5"
              stroke="var(--series-2)"
              strokeWidth="2"
              strokeDasharray="4 3"
            />
          </svg>
          Media global
        </span>
      </div>
      <Readout>{descriptions[transform]}</Readout>
    </Simulator>
  );
}
