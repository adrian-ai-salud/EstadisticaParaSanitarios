"use client";

import { scaleLinear, scaleLog } from "d3-scale";
import { line } from "d3-shape";
import { useState } from "react";
import { metricsFromTable, predictiveValues, tableFromRates } from "@/lib/stats/diagnostic";
import { formatNumber, formatPercent } from "@/lib/text";
import { AxisBottom, AxisLeft } from "../charts/Axes";
import { Chart } from "../charts/Chart";
import { Legend } from "../charts/Legend";
import { Controls, Readout, Simulator, Slider, Stat, Stats } from "./ui";

const POPULATION = 1000;
const COLUMNS = 50;

const cellColors = {
  tp: "var(--series-1)",
  fn: "color-mix(in srgb, var(--series-1) 30%, var(--surface))",
  fp: "var(--series-2)",
  tn: "var(--surface-3)",
};

export function DiagnosticCalculator() {
  const [sensitivity, setSensitivity] = useState(0.85);
  const [specificity, setSpecificity] = useState(0.95);
  const [prevalence, setPrevalence] = useState(0.1);

  const table = tableFromRates(sensitivity, specificity, prevalence, POPULATION);
  const rounded = {
    truePositive: Math.round(table.truePositive),
    falseNegative: Math.round(table.falseNegative),
    falsePositive: Math.round(table.falsePositive),
    trueNegative: 0,
  };
  rounded.trueNegative =
    POPULATION - rounded.truePositive - rounded.falseNegative - rounded.falsePositive;
  const exact = predictiveValues(sensitivity, specificity, prevalence);
  const metrics = metricsFromTable(table);

  const cells: (keyof typeof cellColors)[] = [
    ...Array<"tp">(rounded.truePositive).fill("tp"),
    ...Array<"fn">(rounded.falseNegative).fill("fn"),
    ...Array<"fp">(rounded.falsePositive).fill("fp"),
    ...Array<"tn">(rounded.trueNegative).fill("tn"),
  ];
  const positives = rounded.truePositive + rounded.falsePositive;

  const curve = Array.from({ length: 121 }, (_, i) => {
    const p = 10 ** (-3 + (i * Math.log10(0.9 / 0.001)) / 120);
    return { p, ...predictiveValues(sensitivity, specificity, p) };
  });

  return (
    <Simulator
      title="Calculadora de pruebas diagnósticas"
      description="Ajusta la sensibilidad, la especificidad y la prevalencia. La figura muestra qué les pasaría a 1000 personas a las que se hace la prueba."
    >
      <Controls>
        <Slider
          label="Sensibilidad"
          value={sensitivity}
          min={0.5}
          max={0.999}
          step={0.005}
          onChange={setSensitivity}
          format={(v) => formatPercent(v)}
        />
        <Slider
          label="Especificidad"
          value={specificity}
          min={0.5}
          max={0.999}
          step={0.005}
          onChange={setSpecificity}
          format={(v) => formatPercent(v)}
        />
        <Slider
          label="Prevalencia en la población estudiada"
          value={Math.log10(prevalence)}
          min={-3}
          max={-0.3}
          step={0.01}
          onChange={(v) => setPrevalence(Number((10 ** v).toPrecision(2)))}
          format={() => formatPercent(prevalence)}
          hint="Escala logarítmica: de 1 por 1000 a 50 %"
        />
      </Controls>

      <div>
        <p className="mb-2 text-sm font-medium text-fg">
          1000 personas a las que se hace la prueba
        </p>
        <svg
          viewBox={`0 0 ${COLUMNS * 10} ${(POPULATION / COLUMNS) * 10}`}
          className="block h-auto w-full"
          role="img"
          aria-label={`De 1000 personas, ${rounded.truePositive} verdaderos positivos, ${rounded.falsePositive} falsos positivos, ${rounded.falseNegative} falsos negativos y ${rounded.trueNegative} verdaderos negativos.`}
        >
          {cells.map((kind, i) => (
            <rect
              // biome-ignore lint/suspicious/noArrayIndexKey: cada celda representa una persona sin identificador
              key={i}
              x={(i % COLUMNS) * 10 + 1}
              y={Math.floor(i / COLUMNS) * 10 + 1}
              width={8}
              height={8}
              rx={2}
              fill={cellColors[kind]}
            />
          ))}
        </svg>
        <div className="mt-3">
          <Legend
            items={[
              { label: `Verdaderos positivos: ${rounded.truePositive}`, color: cellColors.tp },
              { label: `Falsos negativos: ${rounded.falseNegative}`, color: cellColors.fn },
              { label: `Falsos positivos: ${rounded.falsePositive}`, color: cellColors.fp },
              { label: `Verdaderos negativos: ${rounded.trueNegative}`, color: cellColors.tn },
            ]}
          />
        </div>
      </div>

      <Stats>
        <Stat
          label="Valor predictivo positivo"
          value={formatPercent(exact.ppv)}
          tone="accent"
          hint="Enfermo si da positivo"
        />
        <Stat
          label="Valor predictivo negativo"
          value={formatPercent(exact.npv)}
          hint="Sano si da negativo"
        />
        <Stat
          label="RV+"
          value={formatNumber(metrics.positiveLikelihoodRatio, 1)}
          hint="S / (1 − E)"
        />
        <Stat
          label="RV−"
          value={formatNumber(metrics.negativeLikelihoodRatio, 2)}
          hint="(1 − S) / E"
        />
      </Stats>

      <Readout>
        De cada 1000 personas, <strong>{positives}</strong> darían positivo, pero solo{" "}
        <strong>{rounded.truePositive}</strong> estarían realmente enfermas. Ante un positivo, la
        probabilidad de enfermedad pasa del {formatPercent(prevalence)} (prevalencia) al{" "}
        <strong>{formatPercent(exact.ppv)}</strong>.
      </Readout>

      <div>
        <p className="mb-1 text-sm font-medium text-fg">Valores predictivos según la prevalencia</p>
        <Legend
          items={[
            { label: "VPP", color: "var(--series-1)", shape: "line" },
            { label: "VPN", color: "var(--series-2)", shape: "line" },
          ]}
        />
        <Chart
          label="Curvas de valor predictivo positivo y negativo en función de la prevalencia"
          height={240}
          margin={{ left: 52, top: 12 }}
        >
          {({ innerWidth, innerHeight }) => {
            const x = scaleLog().domain([0.001, 0.9]).range([0, innerWidth]);
            const y = scaleLinear().domain([0, 1]).range([innerHeight, 0]);
            const toLine = (key: "ppv" | "npv") =>
              line<(typeof curve)[number]>()
                .x((d) => x(d.p))
                .y((d) => y(d[key]))(curve) ?? "";
            return (
              <>
                <AxisLeft
                  scale={y}
                  innerWidth={innerWidth}
                  innerHeight={innerHeight}
                  ticks={[0, 0.25, 0.5, 0.75, 1]}
                  format={(v) => formatPercent(v)}
                />
                <AxisBottom
                  scale={x}
                  innerWidth={innerWidth}
                  innerHeight={innerHeight}
                  ticks={[0.001, 0.01, 0.1, 0.5]}
                  format={(v) => formatPercent(v)}
                  label="Prevalencia (escala logarítmica)"
                />
                <path d={toLine("ppv")} fill="none" stroke="var(--series-1)" strokeWidth={2.5} />
                <path d={toLine("npv")} fill="none" stroke="var(--series-2)" strokeWidth={2.5} />
                <line
                  x1={x(prevalence)}
                  x2={x(prevalence)}
                  y1={0}
                  y2={innerHeight}
                  stroke="var(--text-3)"
                  strokeDasharray="3 3"
                />
                <circle
                  cx={x(prevalence)}
                  cy={y(exact.ppv)}
                  r={5}
                  fill="var(--series-1)"
                  stroke="var(--surface)"
                  strokeWidth={2}
                />
                <circle
                  cx={x(prevalence)}
                  cy={y(exact.npv)}
                  r={5}
                  fill="var(--series-2)"
                  stroke="var(--surface)"
                  strokeWidth={2}
                />
              </>
            );
          }}
        </Chart>
      </div>
    </Simulator>
  );
}
