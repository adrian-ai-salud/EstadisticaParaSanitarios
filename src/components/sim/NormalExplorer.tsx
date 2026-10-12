"use client";

import { scaleLinear } from "d3-scale";
import { area, line } from "d3-shape";
import { useState } from "react";
import { normalCdf, normalPdf } from "@/lib/stats/distributions";
import { formatNumber, formatPercent } from "@/lib/text";
import { AxisBottom } from "../charts/Axes";
import { Chart } from "../charts/Chart";
import { Controls, Readout, Segmented, Simulator, Slider, Stat, Stats } from "./ui";

type Mode = "rule" | "z";

const X_MIN = 40;
const X_MAX = 200;

export function NormalExplorer() {
  const [mu, setMu] = useState(120);
  const [sigma, setSigma] = useState(15);
  const [value, setValue] = useState(150);
  const [mode, setMode] = useState<Mode>("z");

  const xs = Array.from({ length: 321 }, (_, i) => X_MIN + (i * (X_MAX - X_MIN)) / 320);
  const curve = xs.map((x) => ({ x, y: normalPdf(x, mu, sigma) }));
  const z = (value - mu) / sigma;
  const below = normalCdf(value, mu, sigma);

  return (
    <Simulator
      title="Explorador de la curva normal"
      description="Tensión arterial sistólica en una población. Mueve la media y la desviación típica, y sitúa el valor de un paciente."
    >
      <Segmented
        label="Qué mostrar"
        value={mode}
        onChange={setMode}
        options={[
          { value: "z", label: "Puntuación Z y percentil" },
          { value: "rule", label: "Regla 68-95-99,7" },
        ]}
      />
      <Controls>
        <Slider
          label="Media (μ)"
          value={mu}
          min={90}
          max={150}
          onChange={setMu}
          format={(v) => `${v} mmHg`}
        />
        <Slider
          label="Desviación típica (σ)"
          value={sigma}
          min={5}
          max={30}
          onChange={setSigma}
          format={(v) => `${v} mmHg`}
        />
        {mode === "z" && (
          <Slider
            label="Valor del paciente (x)"
            value={value}
            min={60}
            max={190}
            onChange={setValue}
            format={(v) => `${v} mmHg`}
          />
        )}
      </Controls>

      <Chart
        label={
          mode === "z"
            ? `Curva normal con media ${mu} y desviación típica ${sigma}; el valor ${value} tiene una puntuación Z de ${formatNumber(z, 2)} y deja por debajo el ${formatPercent(below)} de la población.`
            : `Curva normal con media ${mu} y desviación típica ${sigma}, con las franjas de 1, 2 y 3 desviaciones típicas.`
        }
        margin={{ left: 16, right: 16, top: 28 }}
      >
        {({ innerWidth, innerHeight }) => {
          const x = scaleLinear().domain([X_MIN, X_MAX]).range([0, innerWidth]);
          const y = scaleLinear()
            .domain([0, Math.max(0.032, normalPdf(mu, mu, sigma) * 1.2)])
            .range([innerHeight, 0]);
          const toArea = area<{ x: number; y: number }>()
            .x((d) => x(d.x))
            .y0(innerHeight)
            .y1((d) => y(d.y));
          const toLine = line<{ x: number; y: number }>()
            .x((d) => x(d.x))
            .y((d) => y(d.y));
          const bands = [
            { k: 3, opacity: 0.12, label: "99,7 %" },
            { k: 2, opacity: 0.2, label: "95 %" },
            { k: 1, opacity: 0.32, label: "68 %" },
          ];
          const peak = y(normalPdf(mu, mu, sigma));
          return (
            <>
              <AxisBottom
                scale={x}
                innerWidth={innerWidth}
                innerHeight={innerHeight}
                label="Tensión sistólica (mmHg)"
                ticks={[40, 60, 80, 100, 120, 140, 160, 180, 200]}
              />
              {mode === "rule" &&
                bands.map((band) => (
                  <path
                    key={band.k}
                    d={toArea(curve.filter((d) => Math.abs(d.x - mu) <= band.k * sigma)) ?? ""}
                    fill="var(--series-1)"
                    opacity={band.opacity}
                  />
                ))}
              {mode === "z" && (
                <path
                  d={toArea(curve.filter((d) => d.x <= value)) ?? ""}
                  fill="var(--series-1)"
                  opacity={0.22}
                />
              )}
              <path
                d={toLine(curve) ?? ""}
                fill="none"
                stroke="var(--series-1)"
                strokeWidth={2.5}
              />
              <line
                x1={x(mu)}
                x2={x(mu)}
                y1={peak}
                y2={innerHeight}
                stroke="var(--text-3)"
                strokeDasharray="3 3"
              />
              <text x={x(mu)} y={peak - 8} textAnchor="middle" fontSize={11.5} fill="var(--text-2)">
                μ = {mu}
              </text>
              {mode === "rule" &&
                bands.map((band) => {
                  const yLevel = innerHeight - 14 - (3 - band.k) * 18;
                  return (
                    <g key={`l${band.k}`}>
                      <line
                        x1={x(mu - band.k * sigma)}
                        x2={x(mu + band.k * sigma)}
                        y1={yLevel}
                        y2={yLevel}
                        stroke="var(--text-2)"
                      />
                      <text
                        x={x(mu + band.k * sigma) + 4}
                        y={yLevel}
                        dy="0.32em"
                        fontSize={11}
                        fill="var(--text-2)"
                      >
                        ±{band.k}σ · {band.label}
                      </text>
                    </g>
                  );
                })}
              {mode === "z" && (
                <>
                  <line
                    x1={x(value)}
                    x2={x(value)}
                    y1={0}
                    y2={innerHeight}
                    stroke="var(--series-2)"
                    strokeWidth={2}
                  />
                  <text
                    x={x(value) + (value > 170 ? -6 : 6)}
                    y={-8}
                    textAnchor={value > 170 ? "end" : "start"}
                    fontSize={11.5}
                    fontWeight={600}
                    fill="var(--text)"
                  >
                    x = {value} · Z = {formatNumber(z, 2)}
                  </text>
                </>
              )}
            </>
          );
        }}
      </Chart>

      {mode === "z" ? (
        <>
          <Stats>
            <Stat label="Puntuación Z" value={formatNumber(z, 2)} tone="accent" />
            <Stat label="Percentil" value={`P${Math.round(below * 100)}`} />
            <Stat label="Por debajo de x" value={formatPercent(below)} />
            <Stat label="Por encima de x" value={formatPercent(1 - below)} />
          </Stats>
          <Readout>
            Un paciente con {value} mmHg está a{" "}
            <strong>{formatNumber(Math.abs(z), 2)} desviaciones típicas</strong>{" "}
            {z >= 0 ? "por encima" : "por debajo"} de la media. El {formatPercent(below)} de la
            población tiene una tensión menor.
            {Math.abs(z) > 1.96 && (
              <>
                {" "}
                Es un valor <strong>inusual</strong>: queda fuera del 95 % central.
              </>
            )}
          </Readout>
        </>
      ) : (
        <Readout>
          Entre {mu - sigma} y {mu + sigma} mmHg está el 68 % de la población; entre{" "}
          {mu - 2 * sigma} y {mu + 2 * sigma}, el 95 %; y entre {mu - 3 * sigma} y {mu + 3 * sigma},
          el 99,7 %.
        </Readout>
      )}
    </Simulator>
  );
}
