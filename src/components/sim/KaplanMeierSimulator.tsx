"use client";

import { scaleLinear } from "d3-scale";
import { useMemo, useState } from "react";
import { createRng, exponential } from "@/lib/stats/random";
import {
  atRiskAt,
  kaplanMeier,
  logRank,
  medianSurvival,
  type SurvivalRecord,
} from "@/lib/stats/survival";
import { formatNumber, formatPercent, formatPValue } from "@/lib/text";
import { AxisBottom, AxisLeft } from "../charts/Axes";
import { Chart } from "../charts/Chart";
import { Legend } from "../charts/Legend";
import { ActionButton, Controls, Readout, Simulator, Slider, Stat, Stats } from "./ui";

const FOLLOW_UP = 36;
const PER_GROUP = 60;
const CONTROL_MEDIAN = 16;
const AT_RISK_TIMES = [0, 6, 12, 18, 24, 30, 36];

function simulateGroup(rng: () => number, hazardRatio: number, lossRate: number): SurvivalRecord[] {
  const eventRate = (Math.LN2 / CONTROL_MEDIAN) * hazardRatio;
  const censorRate = lossRate > 0 ? -Math.log(1 - lossRate) / FOLLOW_UP : 0;
  return Array.from({ length: PER_GROUP }, () => {
    const eventTime = exponential(rng, eventRate);
    const lossTime = censorRate > 0 ? exponential(rng, censorRate) : Number.POSITIVE_INFINITY;
    const time = Math.min(eventTime, lossTime, FOLLOW_UP);
    return {
      time: Math.max(0.1, Math.round(time * 10) / 10),
      event: eventTime <= Math.min(lossTime, FOLLOW_UP),
    };
  });
}

export function KaplanMeierSimulator() {
  const [hazardRatio, setHazardRatio] = useState(0.6);
  const [lossRate, setLossRate] = useState(0.15);
  const [seed, setSeed] = useState(21);

  const { control, treatment } = useMemo(() => {
    const rng = createRng(seed);
    return {
      control: simulateGroup(rng, 1, lossRate),
      treatment: simulateGroup(rng, hazardRatio, lossRate),
    };
  }, [seed, hazardRatio, lossRate]);

  const groups = [
    {
      name: "Tratamiento habitual",
      color: "var(--series-2)",
      records: control,
      steps: kaplanMeier(control),
    },
    {
      name: "Tratamiento nuevo",
      color: "var(--series-1)",
      records: treatment,
      steps: kaplanMeier(treatment),
    },
  ];
  const test = logRank(treatment, control);
  const medians = groups.map((g) => medianSurvival(g.steps));
  const censored = [...control, ...treatment].filter((r) => !r.event).length;

  return (
    <Simulator
      title="Generador de curvas de Kaplan-Meier"
      description={`Ensayo simulado con ${PER_GROUP} pacientes por grupo y ${FOLLOW_UP} meses de seguimiento. Ajusta el efecto del tratamiento nuevo y las pérdidas.`}
    >
      <Controls>
        <Slider
          label="Hazard ratio real del tratamiento nuevo"
          value={hazardRatio}
          min={0.3}
          max={1.5}
          step={0.05}
          onChange={setHazardRatio}
          format={(v) => formatNumber(v, 2)}
          hint="Menor que 1: el tratamiento nuevo reduce el riesgo"
        />
        <Slider
          label="Pérdidas de seguimiento"
          value={lossRate}
          min={0}
          max={0.5}
          step={0.05}
          onChange={setLossRate}
          format={(v) => formatPercent(v)}
        />
      </Controls>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Legend
          items={[
            ...groups.map((g) => ({ label: g.name, color: g.color, shape: "line" as const })),
            { label: "Paciente censurado", color: "var(--text-2)", shape: "tick" as const },
          ]}
        />
        <ActionButton onClick={() => setSeed((s) => s + 1)}>Repetir el ensayo</ActionButton>
      </div>

      <Chart
        label={`Curvas de Kaplan-Meier. Mediana de supervivencia: ${medians.map((m, i) => `${groups[i].name} ${m ?? "no alcanzada"}`).join(", ")}. Log-rank p ${formatPValue(test.pValue)}.`}
        margin={{ left: 66 }}
        aspect={1.7}
      >
        {({ innerWidth, innerHeight }) => {
          const x = scaleLinear().domain([0, FOLLOW_UP]).range([0, innerWidth]);
          const y = scaleLinear().domain([0, 1]).range([innerHeight, 0]);
          return (
            <>
              <AxisLeft
                scale={y}
                innerWidth={innerWidth}
                innerHeight={innerHeight}
                ticks={[0, 0.25, 0.5, 0.75, 1]}
                format={(v) => formatPercent(v)}
                label="Supervivencia"
                labelOffset={54}
              />
              <AxisBottom
                scale={x}
                innerWidth={innerWidth}
                innerHeight={innerHeight}
                ticks={AT_RISK_TIMES}
                label="Meses desde la aleatorización"
              />
              <line
                x1={0}
                x2={innerWidth}
                y1={y(0.5)}
                y2={y(0.5)}
                stroke="var(--text-3)"
                strokeDasharray="3 4"
              />
              {groups.map((group, gi) => {
                let d = `M${x(0)},${y(1)}`;
                for (const step of group.steps.slice(1)) {
                  d += `H${x(step.time)}V${y(step.survival)}`;
                }
                d += `H${x(FOLLOW_UP)}`;
                const median = medians[gi];
                return (
                  <g key={group.name}>
                    {median !== null && (
                      <line
                        x1={x(median)}
                        x2={x(median)}
                        y1={y(0.5)}
                        y2={innerHeight}
                        stroke={group.color}
                        strokeDasharray="3 3"
                        strokeWidth={1.5}
                      />
                    )}
                    <path
                      d={d}
                      fill="none"
                      stroke={group.color}
                      strokeWidth={2.5}
                      strokeLinejoin="round"
                    />
                    {group.steps
                      .filter((s) => s.censored > 0 && s.time < FOLLOW_UP)
                      .map((s) => (
                        <line
                          key={s.time}
                          x1={x(s.time)}
                          x2={x(s.time)}
                          y1={y(s.survival) - 5}
                          y2={y(s.survival) + 5}
                          stroke={group.color}
                          strokeWidth={1.5}
                        />
                      ))}
                  </g>
                );
              })}
            </>
          );
        }}
      </Chart>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[30rem] text-sm tabular-nums">
          <caption className="mb-1.5 text-left text-xs font-semibold tracking-wide text-fg-3 uppercase">
            Pacientes en riesgo
          </caption>
          <thead>
            <tr className="text-fg-3">
              <th scope="col" className="py-1 pr-3 text-left font-medium">
                Mes
              </th>
              {AT_RISK_TIMES.map((t) => (
                <th key={t} scope="col" className="px-2 py-1 text-right font-medium">
                  {t}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {groups.map((group) => (
              <tr key={group.name} className="border-t border-border">
                <th scope="row" className="py-1.5 pr-3 text-left font-medium text-fg-2">
                  <span
                    className="mr-2 inline-block h-0.5 w-3 align-middle"
                    style={{ background: group.color }}
                    aria-hidden="true"
                  />
                  {group.name}
                </th>
                {AT_RISK_TIMES.map((t) => (
                  <td key={t} className="px-2 py-1.5 text-right text-fg-2">
                    {atRiskAt(group.records, t)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Stats>
        <Stat
          label="Mediana, tratamiento nuevo"
          value={medians[1] === null ? "No alcanzada" : `${formatNumber(medians[1], 1)} m`}
        />
        <Stat
          label="Mediana, tratamiento habitual"
          value={medians[0] === null ? "No alcanzada" : `${formatNumber(medians[0], 1)} m`}
        />
        <Stat
          label="Log-rank"
          value={`p ${formatPValue(test.pValue)}`}
          tone={test.pValue < 0.05 ? "accent" : undefined}
          hint={`χ² = ${formatNumber(test.statistic, 2)}`}
        />
        <Stat label="Censurados" value={censored} hint={`de ${PER_GROUP * 2} pacientes`} />
      </Stats>
      <Readout>
        {test.pValue < 0.05 ? (
          <>
            Las curvas se separan y la prueba de log-rank es <strong>significativa</strong> (p{" "}
            {formatPValue(test.pValue)}): la supervivencia difiere entre los grupos.
          </>
        ) : (
          <>
            La prueba de log-rank <strong>no es significativa</strong> (p{" "}
            {formatPValue(test.pValue)}).
            {hazardRatio < 0.9 && (
              <>
                {" "}
                El efecto existe en la simulación, pero con este tamaño de muestra no siempre se
                detecta: es un error de tipo II.
              </>
            )}
          </>
        )}{" "}
        Repite el ensayo varias veces con el mismo hazard ratio para ver cuánto varían las curvas
        por azar.
      </Readout>
    </Simulator>
  );
}
