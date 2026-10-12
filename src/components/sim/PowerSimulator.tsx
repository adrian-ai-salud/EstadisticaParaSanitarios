"use client";

import { scaleLinear } from "d3-scale";
import { area, line } from "d3-shape";
import { useState } from "react";
import { normalPdf, normalQuantile } from "@/lib/stats/distributions";
import { twoSidedPower } from "@/lib/stats/inference";
import { formatNumber, formatPercent } from "@/lib/text";
import { AxisBottom } from "../charts/Axes";
import { Chart } from "../charts/Chart";
import { Legend } from "../charts/Legend";
import { Controls, Readout, Segmented, Simulator, Slider, Stat, Stats } from "./ui";

type Alpha = "0.01" | "0.05" | "0.1";

export function PowerSimulator() {
  const [effect, setEffect] = useState(0.5);
  const [n, setN] = useState(20);
  const [alphaKey, setAlphaKey] = useState<Alpha>("0.05");
  const alpha = Number(alphaKey);

  const critical = normalQuantile(1 - alpha / 2);
  const shift = effect * Math.sqrt(n);
  const power = twoSidedPower(effect, n, alpha);
  const needed =
    effect > 0
      ? Math.ceil(((critical + normalQuantile(0.8)) / effect) ** 2)
      : Number.POSITIVE_INFINITY;

  const xMin = -4;
  const xMax = Math.max(4.5, shift + 4);
  const xs = Array.from({ length: 401 }, (_, i) => xMin + (i * (xMax - xMin)) / 400);
  const h0 = xs.map((x) => ({ x, y: normalPdf(x) }));
  const h1 = xs.map((x) => ({ x, y: normalPdf(x, shift) }));

  return (
    <Simulator
      title="Errores α y β, y potencia"
      description="Contraste bilateral de una media. Distribución del estadístico si H₀ fuera cierta (gris) y si existe el efecto que buscas (azul). Ajusta el efecto, la muestra y α."
    >
      <Controls>
        <Slider
          label="Tamaño del efecto (d de Cohen)"
          value={effect}
          min={0}
          max={1.2}
          step={0.05}
          onChange={setEffect}
          format={(v) => formatNumber(v, 2)}
          hint="0,2 pequeño · 0,5 mediano · 0,8 grande"
        />
        <Slider label="Tamaño de la muestra (n)" value={n} min={5} max={100} onChange={setN} />
        <div>
          <p className="mb-1.5 text-sm font-medium text-fg-2">Nivel de significación (α)</p>
          <Segmented
            label="Nivel de significación"
            value={alphaKey}
            onChange={setAlphaKey}
            options={[
              { value: "0.01", label: "0,01" },
              { value: "0.05", label: "0,05" },
              { value: "0.1", label: "0,10" },
            ]}
          />
        </div>
      </Controls>
      <Legend
        items={[
          { label: "Si H₀ es cierta", color: "var(--series-neutral)", shape: "line" },
          { label: "Si existe el efecto (H₁)", color: "var(--series-1)", shape: "line" },
          { label: "α: falso positivo", color: "var(--series-critical)" },
          { label: "β: falso negativo", color: "var(--series-2)" },
          { label: "Potencia", color: "var(--series-1)" },
        ]}
      />

      <Chart
        label={`Con d = ${formatNumber(effect, 2)}, n = ${n} y α = ${formatNumber(alpha, 2)}, la potencia es del ${formatPercent(power)}.`}
        margin={{ left: 16, right: 16, top: 12 }}
      >
        {({ innerWidth, innerHeight }) => {
          const x = scaleLinear().domain([xMin, xMax]).range([0, innerWidth]);
          const y = scaleLinear().domain([0, 0.45]).range([innerHeight, 0]);
          const toArea = area<{ x: number; y: number }>()
            .x((d) => x(d.x))
            .y0(innerHeight)
            .y1((d) => y(d.y));
          const toLine = line<{ x: number; y: number }>()
            .x((d) => x(d.x))
            .y((d) => y(d.y));
          const wash = (color: string, pct: number) =>
            `color-mix(in srgb, ${color} ${pct}%, transparent)`;
          return (
            <>
              <AxisBottom
                scale={x}
                innerWidth={innerWidth}
                innerHeight={innerHeight}
                label="Estadístico de contraste (Z)"
              />
              <path
                d={toArea(h1.filter((d) => d.x >= critical)) ?? ""}
                fill={wash("var(--series-1)", 28)}
              />
              <path
                d={toArea(h1.filter((d) => d.x > -critical && d.x < critical)) ?? ""}
                fill={wash("var(--series-2)", 30)}
              />
              <path
                d={toArea(h0.filter((d) => d.x >= critical)) ?? ""}
                fill={wash("var(--series-critical)", 55)}
              />
              <path
                d={toArea(h0.filter((d) => d.x <= -critical)) ?? ""}
                fill={wash("var(--series-critical)", 55)}
              />
              <path
                d={toLine(h0) ?? ""}
                fill="none"
                stroke="var(--series-neutral)"
                strokeWidth={2}
              />
              <path d={toLine(h1) ?? ""} fill="none" stroke="var(--series-1)" strokeWidth={2.5} />
              {[-critical, critical].map((c) => (
                <g key={c}>
                  <line
                    x1={x(c)}
                    x2={x(c)}
                    y1={0}
                    y2={innerHeight}
                    stroke="var(--text-2)"
                    strokeDasharray="4 3"
                  />
                  <text x={x(c) + 4} y={10} fontSize={11} fill="var(--text-2)">
                    {formatNumber(c, 2)}
                  </text>
                </g>
              ))}
            </>
          );
        }}
      </Chart>

      <Stats>
        <Stat
          label="Potencia (1 − β)"
          value={formatPercent(power)}
          tone={power >= 0.8 ? "accent" : "danger"}
        />
        <Stat label="β (falso negativo)" value={formatPercent(1 - power)} />
        <Stat label="α (falso positivo)" value={formatPercent(alpha)} />
        <Stat label="n para potencia del 80 %" value={Number.isFinite(needed) ? needed : "—"} />
      </Stats>
      <Readout>
        {effect === 0 ? (
          <>
            Si no hay efecto real, la única forma de rechazar H₀ es por azar: ocurre con una
            probabilidad α.
          </>
        ) : power >= 0.8 ? (
          <>
            Con {n} pacientes, el estudio detectaría este efecto el{" "}
            <strong>{formatPercent(power)}</strong> de las veces. Tiene potencia suficiente.
          </>
        ) : (
          <>
            Con {n} pacientes el estudio solo detectaría el efecto el{" "}
            <strong>{formatPercent(power)}</strong> de las veces: un resultado no significativo
            sería poco concluyente. Harían falta unos <strong>{needed}</strong> pacientes para
            llegar al 80 %.
          </>
        )}
      </Readout>
    </Simulator>
  );
}
