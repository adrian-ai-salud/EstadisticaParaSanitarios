"use client";

import { scaleBand, scaleLinear } from "d3-scale";
import { useState } from "react";
import { AxisLeft } from "../charts/Axes";
import { Chart } from "../charts/Chart";
import { columnPath } from "../charts/shapes";
import { DataTable, Readout, Segmented, Simulator } from "./ui";

type VariableType = "nominal" | "ordinal" | "discrete" | "continuous";

const examples: Record<
  VariableType,
  {
    variable: string;
    axis: string;
    data: { name: string; value: number }[];
    summary: string;
    chart: string;
  }
> = {
  nominal: {
    variable: "Grupo sanguíneo de 200 pacientes",
    axis: "Grupo sanguíneo",
    data: [
      { name: "A", value: 82 },
      { name: "O", value: 78 },
      { name: "B", value: 26 },
      { name: "AB", value: 14 },
    ],
    summary:
      "Las categorías no tienen orden: se pueden reordenar (aquí, de mayor a menor frecuencia). Se resumen con frecuencias, porcentajes y la moda.",
    chart: "Diagrama de barras separadas.",
  },
  ordinal: {
    variable: "Dolor referido por 200 pacientes",
    axis: "Intensidad del dolor",
    data: [
      { name: "Leve", value: 64 },
      { name: "Moderado", value: 92 },
      { name: "Intenso", value: 44 },
    ],
    summary:
      "Las categorías tienen un orden que hay que respetar, pero la distancia entre ellas no es medible. Se resumen con frecuencias, la mediana y los percentiles.",
    chart: "Diagrama de barras en el orden natural de la escala.",
  },
  discrete: {
    variable: "Ingresos hospitalarios en el último año (200 pacientes)",
    axis: "Número de ingresos",
    data: [
      { name: "0", value: 96 },
      { name: "1", value: 58 },
      { name: "2", value: 28 },
      { name: "3", value: 12 },
      { name: "4 o más", value: 6 },
    ],
    summary:
      "Son recuentos: solo toman valores enteros. Admiten media y desviación típica, aunque si la distribución es asimétrica, como aquí, la mediana describe mejor el centro.",
    chart: "Diagrama de barras con los valores enteros en el eje.",
  },
  continuous: {
    variable: "Glucemia basal de 200 pacientes (mg/dL)",
    axis: "Glucemia basal (mg/dL)",
    data: [
      { name: "70–85", value: 18 },
      { name: "85–100", value: 52 },
      { name: "100–115", value: 61 },
      { name: "115–130", value: 37 },
      { name: "130–145", value: 20 },
      { name: "145–160", value: 12 },
    ],
    summary:
      "Pueden tomar cualquier valor dentro de un rango. Para representarlas se agrupan en intervalos y se dibuja un histograma. Se resumen con media y desviación típica, o mediana y rango intercuartílico si son asimétricas.",
    chart: "Histograma: barras contiguas porque los intervalos son continuos.",
  },
};

const options: { value: VariableType; label: string }[] = [
  { value: "nominal", label: "Nominal" },
  { value: "ordinal", label: "Ordinal" },
  { value: "discrete", label: "Discreta" },
  { value: "continuous", label: "Continua" },
];

export function VariableTypes() {
  const [type, setType] = useState<VariableType>("nominal");
  const example = examples[type];
  const isHistogram = type === "continuous";

  return (
    <Simulator
      title="Cada tipo de variable, su gráfico"
      description="Cambia el tipo de variable y fíjate en cómo se representa y qué medidas resumen tienen sentido."
    >
      <Segmented label="Tipo de variable" options={options} value={type} onChange={setType} />
      <p className="text-sm font-medium text-fg">{example.variable}</p>
      <Chart label={`${example.chart} ${example.variable}`} margin={{ left: 48 }}>
        {({ innerWidth, innerHeight }) => {
          const x = scaleBand<string>()
            .domain(example.data.map((d) => d.name))
            .range([0, innerWidth])
            .paddingInner(isHistogram ? 0 : 0.35)
            .paddingOuter(isHistogram ? 0 : 0.2);
          const y = scaleLinear().domain([0, 100]).range([innerHeight, 0]);
          const barWidth = isHistogram ? x.bandwidth() - 2 : Math.min(x.bandwidth(), 56);
          return (
            <>
              <AxisLeft
                scale={y}
                innerWidth={innerWidth}
                innerHeight={innerHeight}
                label="Pacientes"
              />
              {example.data.map((d) => {
                const cx = (x(d.name) ?? 0) + x.bandwidth() / 2;
                const top = y(d.value);
                return (
                  <g key={d.name}>
                    <path d={columnPath(cx, barWidth, top, innerHeight)} fill="var(--series-1)">
                      <title>{`${d.name}: ${d.value} pacientes`}</title>
                    </path>
                    <text
                      x={cx}
                      y={top - 6}
                      textAnchor="middle"
                      fontSize={11.5}
                      fill="var(--text-2)"
                    >
                      {d.value}
                    </text>
                    <text
                      x={cx}
                      y={innerHeight + 18}
                      textAnchor="middle"
                      fontSize={11.5}
                      fill="var(--text-3)"
                    >
                      {d.name}
                    </text>
                  </g>
                );
              })}
              <line
                x1={0}
                x2={innerWidth}
                y1={innerHeight}
                y2={innerHeight}
                stroke="var(--chart-axis)"
              />
              <text
                x={innerWidth / 2}
                y={innerHeight + 38}
                textAnchor="middle"
                fontSize={12}
                fill="var(--text-2)"
              >
                {example.axis}
              </text>
            </>
          );
        }}
      </Chart>
      <Readout>
        <strong>{example.chart}</strong> {example.summary}
      </Readout>
      <DataTable
        caption={example.variable}
        columns={[example.axis, "Pacientes"]}
        rows={example.data.map((d) => [d.name, d.value])}
      />
    </Simulator>
  );
}
