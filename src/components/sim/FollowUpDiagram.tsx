"use client";

import { scaleLinear } from "d3-scale";
import { useState } from "react";
import { AxisBottom } from "../charts/Axes";
import { Chart } from "../charts/Chart";
import { Legend } from "../charts/Legend";
import { Readout, Segmented, Simulator } from "./ui";

type View = "calendar" | "followup";
type Outcome = "event" | "end" | "lost";

const STUDY_END = 36;

const patients: { id: string; entry: number; duration: number; outcome: Outcome }[] = [
  { id: "P1", entry: 0, duration: 14, outcome: "event" },
  { id: "P2", entry: 2, duration: 34, outcome: "end" },
  { id: "P3", entry: 3, duration: 9, outcome: "lost" },
  { id: "P4", entry: 6, duration: 22, outcome: "event" },
  { id: "P5", entry: 8, duration: 28, outcome: "end" },
  { id: "P6", entry: 11, duration: 7, outcome: "event" },
  { id: "P7", entry: 13, duration: 15, outcome: "lost" },
  { id: "P8", entry: 16, duration: 20, outcome: "end" },
  { id: "P9", entry: 19, duration: 11, outcome: "event" },
  { id: "P10", entry: 24, duration: 12, outcome: "end" },
];

const outcomeText: Record<Outcome, string> = {
  event: "presenta el evento",
  end: "censurado: sigue sin el evento al final del estudio",
  lost: "censurado: pérdida de seguimiento",
};

export function FollowUpDiagram() {
  const [view, setView] = useState<View>("calendar");
  const isCalendar = view === "calendar";

  return (
    <Simulator
      title="Diagrama de seguimiento"
      description="Diez pacientes incluidos en distintos momentos de un estudio que dura 36 meses. Cambia de vista para ver cómo se analizan."
    >
      <Segmented
        label="Escala de tiempo"
        value={view}
        onChange={setView}
        options={[
          { value: "calendar", label: "Tiempo de calendario" },
          { value: "followup", label: "Tiempo desde la inclusión" },
        ]}
      />
      <Legend
        items={[
          { label: "Seguimiento", color: "var(--series-1)", shape: "line" },
          { label: "Evento", color: "var(--series-critical)", shape: "dot" },
          { label: "Censura", color: "var(--text-2)", shape: "cross" },
        ]}
      />
      <Chart
        label="Diagrama de seguimiento de diez pacientes con eventos y censuras"
        height={330}
        margin={{ left: 44, top: 20 }}
      >
        {({ innerWidth, innerHeight }) => {
          const x = scaleLinear()
            .domain([0, STUDY_END + 2])
            .range([0, innerWidth]);
          const row = innerHeight / patients.length;
          return (
            <>
              <AxisBottom
                scale={x}
                innerWidth={innerWidth}
                innerHeight={innerHeight}
                ticks={[0, 6, 12, 18, 24, 30, 36]}
                grid
                label={isCalendar ? "Mes del estudio" : "Meses desde la inclusión del paciente"}
              />
              {isCalendar && (
                <>
                  <line
                    x1={x(STUDY_END)}
                    x2={x(STUDY_END)}
                    y1={-8}
                    y2={innerHeight}
                    stroke="var(--text-2)"
                    strokeWidth={1.5}
                    strokeDasharray="5 4"
                  />
                  <text
                    x={x(STUDY_END)}
                    y={-10}
                    textAnchor="end"
                    fontSize={11.5}
                    fill="var(--text-2)"
                  >
                    Fin del estudio
                  </text>
                </>
              )}
              {patients.map((p, i) => {
                const start = isCalendar ? p.entry : 0;
                const end = start + p.duration;
                const cy = i * row + row / 2;
                return (
                  <g key={p.id} style={{ transition: "transform 400ms" }}>
                    <title>{`${p.id}: ${p.duration} meses de seguimiento, ${outcomeText[p.outcome]}`}</title>
                    <text
                      x={-10}
                      y={cy}
                      dy="0.32em"
                      textAnchor="end"
                      fontSize={11.5}
                      fill="var(--text-3)"
                    >
                      {p.id}
                    </text>
                    <line
                      x1={x(start)}
                      x2={x(end)}
                      y1={cy}
                      y2={cy}
                      stroke="var(--series-1)"
                      strokeWidth={4}
                      strokeLinecap="round"
                    />
                    {p.outcome === "event" ? (
                      <circle
                        cx={x(end)}
                        cy={cy}
                        r={6}
                        fill="var(--series-critical)"
                        stroke="var(--surface)"
                        strokeWidth={2}
                      />
                    ) : (
                      <path
                        d={`M${x(end) - 5},${cy - 5}l10,10M${x(end) + 5},${cy - 5}l-10,10`}
                        stroke="var(--text-2)"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                      />
                    )}
                    {p.outcome === "lost" && (
                      <text x={x(end) + 10} y={cy} dy="0.32em" fontSize={11} fill="var(--text-3)">
                        perdido
                      </text>
                    )}
                  </g>
                );
              })}
            </>
          );
        }}
      </Chart>
      <Readout>
        {isCalendar ? (
          <>
            Los pacientes entran en momentos distintos. Los que llegan tarde (P8, P10) tienen menos
            tiempo de observación, y el final del estudio <strong>censura</strong> a quienes siguen
            sin el evento.
          </>
        ) : (
          <>
            Para el análisis, todos los seguimientos se alinean en el momento de inclusión. Hay 4
            eventos y 6 censuras: los censurados aportan información mientras estuvieron en
            seguimiento, aunque no sepamos qué pasó después.
          </>
        )}
      </Readout>
    </Simulator>
  );
}
