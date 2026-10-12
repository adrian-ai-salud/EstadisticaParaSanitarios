interface Scale {
  (value: number): number;
  ticks?: (count?: number) => number[];
}

const defaultFormat = (value: number) =>
  value.toLocaleString("es-ES", { maximumFractionDigits: 2 });

export function AxisBottom({
  scale,
  innerWidth,
  innerHeight,
  ticks,
  tickCount = 6,
  format = defaultFormat,
  label,
  grid = false,
}: {
  scale: Scale;
  innerWidth: number;
  innerHeight: number;
  ticks?: number[];
  tickCount?: number;
  format?: (value: number) => string;
  label?: string;
  grid?: boolean;
}) {
  const values = ticks ?? scale.ticks?.(tickCount) ?? [];
  return (
    <g>
      {grid &&
        values.map((value) => (
          <line
            key={`g${value}`}
            x1={scale(value)}
            x2={scale(value)}
            y1={0}
            y2={innerHeight}
            stroke="var(--chart-grid)"
          />
        ))}
      <line x1={0} x2={innerWidth} y1={innerHeight} y2={innerHeight} stroke="var(--chart-axis)" />
      {values.map((value) => (
        <text
          key={value}
          x={scale(value)}
          y={innerHeight + 18}
          textAnchor="middle"
          fontSize={11.5}
          fill="var(--text-3)"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          {format(value)}
        </text>
      ))}
      {label && (
        <text
          x={innerWidth / 2}
          y={innerHeight + 38}
          textAnchor="middle"
          fontSize={12}
          fill="var(--text-2)"
        >
          {label}
        </text>
      )}
    </g>
  );
}

export function AxisLeft({
  scale,
  innerWidth,
  innerHeight,
  ticks,
  tickCount = 5,
  format = defaultFormat,
  label,
  labelOffset = 42,
  grid = true,
}: {
  scale: Scale;
  innerWidth: number;
  innerHeight: number;
  ticks?: number[];
  tickCount?: number;
  format?: (value: number) => string;
  label?: string;
  labelOffset?: number;
  grid?: boolean;
}) {
  const values = ticks ?? scale.ticks?.(tickCount) ?? [];
  return (
    <g>
      {values.map((value) => (
        <g key={value} transform={`translate(0,${scale(value)})`}>
          {grid && <line x1={0} x2={innerWidth} stroke="var(--chart-grid)" />}
          <text
            x={-10}
            dy="0.32em"
            textAnchor="end"
            fontSize={11.5}
            fill="var(--text-3)"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            {format(value)}
          </text>
        </g>
      ))}
      {label && (
        <text
          transform={`translate(${-labelOffset},${innerHeight / 2}) rotate(-90)`}
          textAnchor="middle"
          fontSize={12}
          fill="var(--text-2)"
        >
          {label}
        </text>
      )}
    </g>
  );
}
