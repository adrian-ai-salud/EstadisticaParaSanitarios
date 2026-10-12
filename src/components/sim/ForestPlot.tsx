"use client";

import { scaleLog } from "d3-scale";
import { useState } from "react";
import { formatNumber } from "@/lib/text";
import { Chart } from "../charts/Chart";
import { Readout, Simulator } from "./ui";

interface Factor {
  name: string;
  hr: number;
  lower: number;
  upper: number;
}

const factors: Factor[] = [
  { name: "Tratamiento nuevo (frente al habitual)", hr: 0.62, lower: 0.45, upper: 0.85 },
  { name: "Edad (por cada 10 años)", hr: 1.45, lower: 1.2, upper: 1.75 },
  { name: "Sexo masculino", hr: 1.1, lower: 0.85, upper: 1.42 },
  { name: "Diabetes", hr: 1.6, lower: 1.15, upper: 2.23 },
  { name: "Tabaquismo activo", hr: 1.85, lower: 1.3, upper: 2.63 },
  { name: "Actividad física regular", hr: 0.78, lower: 0.58, upper: 1.04 },
];

function interpret(f: Factor): React.ReactNode {
  const significant = f.lower > 1 || f.upper < 1;
  const change = Math.abs(f.hr - 1) * 100;
  const direction = f.hr > 1 ? "mayor" : "menor";
  return (
    <>
      <strong>{f.name}:</strong> HR {formatNumber(f.hr, 2)} (IC 95 %: {formatNumber(f.lower, 2)} a{" "}
      {formatNumber(f.upper, 2)}). El riesgo instantáneo del evento es un {formatNumber(change, 0)}{" "}
      % {direction}, ajustado por el resto de variables.{" "}
      {significant ? (
        <>
          El intervalo no incluye el 1: el efecto es <strong>estadísticamente significativo</strong>
          .
        </>
      ) : (
        <>
          El intervalo incluye el 1: el efecto <strong>no es estadísticamente significativo</strong>
          ; los datos son compatibles con que no haya efecto.
        </>
      )}
    </>
  );
}

export function ForestPlot() {
  const [selected, setSelected] = useState(0);

  return (
    <Simulator
      title="Forest plot de un modelo de Cox"
      description="Resultados ilustrativos de un modelo de Cox sobre la mortalidad. Selecciona una variable para leer su interpretación."
    >
      <Chart
        label="Forest plot con los hazard ratios y sus intervalos de confianza"
        interactive
        height={factors.length * 46 + 64}
        margin={{ left: 16, right: 24, top: 24 }}
      >
        {({ innerWidth, innerHeight }) => {
          const labelWidth = Math.min(250, innerWidth * 0.45);
          const plotWidth = innerWidth - labelWidth;
          const x = scaleLog()
            .domain([0.3, 3.5])
            .range([labelWidth, labelWidth + plotWidth]);
          const row = innerHeight / factors.length;
          return (
            <>
              <line
                x1={labelWidth}
                x2={labelWidth + plotWidth}
                y1={innerHeight}
                y2={innerHeight}
                stroke="var(--chart-axis)"
              />
              {[0.5, 1, 2, 3].map((t) => (
                <g key={t}>
                  <line x1={x(t)} x2={x(t)} y1={0} y2={innerHeight} stroke="var(--chart-grid)" />
                  <text
                    x={x(t)}
                    y={innerHeight + 18}
                    textAnchor="middle"
                    fontSize={11.5}
                    fill="var(--text-3)"
                  >
                    {formatNumber(t, 1)}
                  </text>
                </g>
              ))}
              <text
                x={labelWidth + plotWidth / 2}
                y={innerHeight + 38}
                textAnchor="middle"
                fontSize={12}
                fill="var(--text-2)"
              >
                Hazard ratio (escala logarítmica)
              </text>
              <line
                x1={x(1)}
                x2={x(1)}
                y1={-8}
                y2={innerHeight}
                stroke="var(--text-2)"
                strokeWidth={1.5}
              />
              <text x={x(1) - 6} y={-10} textAnchor="end" fontSize={11} fill="var(--text-3)">
                ← Menos riesgo
              </text>
              <text x={x(1) + 6} y={-10} fontSize={11} fill="var(--text-3)">
                Más riesgo →
              </text>
              {factors.map((f, i) => {
                const cy = i * row + row / 2;
                const significant = f.lower > 1 || f.upper < 1;
                const color = significant ? "var(--series-1)" : "var(--series-neutral)";
                const isSelected = i === selected;
                return (
                  // biome-ignore lint/a11y/useSemanticElements: fila de un gráfico SVG seleccionable con teclado
                  <g
                    key={f.name}
                    role="button"
                    tabIndex={0}
                    aria-pressed={isSelected}
                    aria-label={`${f.name}, HR ${formatNumber(f.hr, 2)}`}
                    onClick={() => setSelected(i)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setSelected(i);
                      }
                    }}
                    onMouseEnter={() => setSelected(i)}
                    onFocus={() => setSelected(i)}
                    className="cursor-pointer outline-none"
                  >
                    <rect
                      x={-8}
                      y={cy - row / 2 + 3}
                      width={innerWidth + 16}
                      height={row - 6}
                      rx={8}
                      fill={isSelected ? "var(--accent-soft)" : "transparent"}
                    />
                    <text
                      x={0}
                      y={cy}
                      dy="0.32em"
                      fontSize={12.5}
                      fontWeight={isSelected ? 600 : 400}
                      fill="var(--text)"
                    >
                      {f.name.length > 32 && labelWidth < 220 ? `${f.name.slice(0, 30)}…` : f.name}
                    </text>
                    <line
                      x1={x(f.lower)}
                      x2={x(f.upper)}
                      y1={cy}
                      y2={cy}
                      stroke={color}
                      strokeWidth={2.5}
                      strokeLinecap="round"
                    />
                    <rect
                      x={x(f.hr) - 6}
                      y={cy - 6}
                      width={12}
                      height={12}
                      rx={2}
                      fill={color}
                      stroke="var(--surface)"
                      strokeWidth={2}
                    />
                  </g>
                );
              })}
            </>
          );
        }}
      </Chart>
      <p className="text-xs text-fg-3">
        En azul, efectos estadísticamente significativos; en gris, intervalos que incluyen el 1.
        Datos ilustrativos, no proceden de un estudio real.
      </p>
      <Readout>{interpret(factors[selected])}</Readout>
    </Simulator>
  );
}
