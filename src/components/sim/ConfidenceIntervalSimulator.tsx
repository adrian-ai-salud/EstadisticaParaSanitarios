"use client";

import { scaleLinear } from "d3-scale";
import { useMemo, useState } from "react";
import { normalQuantile } from "@/lib/stats/distributions";
import { simulateIntervals } from "@/lib/stats/inference";
import { createRng } from "@/lib/stats/random";
import { formatNumber, formatPercent } from "@/lib/text";
import { AxisBottom } from "../charts/Axes";
import { Chart } from "../charts/Chart";
import { Legend } from "../charts/Legend";
import { ActionButton, Controls, Readout, Segmented, Simulator, Slider, Stat, Stats } from "./ui";

const TRUE_MEAN = 125;
const SD = 15;
const COUNT = 50;

type Level = "0.9" | "0.95" | "0.99";

export function ConfidenceIntervalSimulator() {
  const [sampleSize, setSampleSize] = useState(30);
  const [level, setLevel] = useState<Level>("0.95");
  const [seed, setSeed] = useState(3);
  const confidence = Number(level);

  const intervals = useMemo(
    () =>
      simulateIntervals(createRng(seed * 7919 + sampleSize), {
        trueMean: TRUE_MEAN,
        sd: SD,
        sampleSize,
        count: COUNT,
        confidence,
      }),
    [seed, sampleSize, confidence],
  );
  const hits = intervals.filter((i) => i.containsTrueMean).length;
  const width = 2 * normalQuantile(1 - (1 - confidence) / 2) * (SD / Math.sqrt(sampleSize));

  return (
    <Simulator
      title="50 estudios, 50 intervalos"
      description={`Cada línea es un estudio distinto que mide la tensión sistólica media de una muestra de la misma población, cuya media real es ${TRUE_MEAN} mmHg (σ = ${SD}).`}
    >
      <Controls>
        <Slider
          label="Pacientes por estudio (n)"
          value={sampleSize}
          min={5}
          max={200}
          step={5}
          onChange={setSampleSize}
        />
        <div>
          <p className="mb-1.5 text-sm font-medium text-fg-2">Nivel de confianza</p>
          <Segmented
            label="Nivel de confianza"
            value={level}
            onChange={setLevel}
            options={[
              { value: "0.9", label: "90 %" },
              { value: "0.95", label: "95 %" },
              { value: "0.99", label: "99 %" },
            ]}
          />
        </div>
      </Controls>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Legend
          items={[
            { label: "Contiene la media real", color: "var(--series-1)", shape: "line" },
            { label: "No la contiene", color: "var(--series-critical)", shape: "line" },
            { label: "Media real", color: "var(--text-2)", shape: "dashed" },
          ]}
        />
        <ActionButton onClick={() => setSeed((s) => s + 1)}>Repetir los 50 estudios</ActionButton>
      </div>

      <Chart
        label={`${hits} de ${COUNT} intervalos de confianza al ${formatPercent(confidence)} contienen la media real.`}
        height={COUNT * 7 + 60}
        margin={{ left: 16, right: 16, top: 8 }}
      >
        {({ innerWidth, innerHeight }) => {
          const x = scaleLinear().domain([105, 145]).range([0, innerWidth]);
          const row = innerHeight / COUNT;
          const clamp = (v: number) => x(Math.min(145, Math.max(105, v)));
          return (
            <>
              <AxisBottom
                scale={x}
                innerWidth={innerWidth}
                innerHeight={innerHeight}
                grid
                label="Tensión sistólica media (mmHg)"
              />
              <line
                x1={x(TRUE_MEAN)}
                x2={x(TRUE_MEAN)}
                y1={0}
                y2={innerHeight}
                stroke="var(--text-2)"
                strokeDasharray="5 4"
                strokeWidth={1.5}
              />
              {intervals.map((interval, i) => {
                const cy = i * row + row / 2;
                const color = interval.containsTrueMean
                  ? "var(--series-1)"
                  : "var(--series-critical)";
                return (
                  <g key={interval.id}>
                    <line
                      x1={clamp(interval.lower)}
                      x2={clamp(interval.upper)}
                      y1={cy}
                      y2={cy}
                      stroke={color}
                      strokeWidth={interval.containsTrueMean ? 2 : 3}
                      strokeLinecap="round"
                    />
                    <circle cx={clamp(interval.estimate)} cy={cy} r={2.5} fill={color} />
                    <title>{`Estudio ${interval.id}: ${formatNumber(interval.estimate, 1)} (${formatNumber(interval.lower, 1)} a ${formatNumber(interval.upper, 1)})`}</title>
                  </g>
                );
              })}
            </>
          );
        }}
      </Chart>

      <Stats>
        <Stat label="Contienen la media real" value={`${hits} de ${COUNT}`} tone="accent" />
        <Stat
          label="Porcentaje observado"
          value={formatPercent(hits / COUNT)}
          hint={`Esperado: ${formatPercent(confidence)}`}
        />
        <Stat
          label="No la contienen"
          value={COUNT - hits}
          tone={COUNT - hits > 0 ? "danger" : undefined}
        />
        <Stat label="Amplitud de cada IC" value={`${formatNumber(width, 1)} mmHg`} />
      </Stats>
      <Readout>
        El nivel de confianza se refiere al <strong>procedimiento</strong>: a la larga, el{" "}
        {formatPercent(confidence)} de los intervalos así construidos contiene la media real. Fíjate
        en que <strong>aumentar n estrecha los intervalos</strong> y que exigir más confianza los
        ensancha.
      </Readout>
    </Simulator>
  );
}
