export interface LegendItem {
  label: string;
  color: string;
  shape?: "line" | "dot" | "square" | "dashed" | "cross" | "tick";
}

function Swatch({ color, shape = "square" }: { color: string; shape?: LegendItem["shape"] }) {
  if (shape === "line" || shape === "dashed") {
    return (
      <svg width="18" height="10" aria-hidden="true">
        <line
          x1="1"
          x2="17"
          y1="5"
          y2="5"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={shape === "dashed" ? "3 3" : undefined}
        />
      </svg>
    );
  }
  if (shape === "tick") {
    return (
      <svg width="10" height="12" aria-hidden="true">
        <line x1="5" x2="5" y1="1" y2="11" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (shape === "cross") {
    return (
      <svg width="12" height="12" aria-hidden="true">
        <path d="M2 2l8 8M10 2l-8 8" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <span
      aria-hidden="true"
      className={shape === "dot" ? "size-2.5 rounded-full" : "size-2.5 rounded-[3px]"}
      style={{ background: color }}
    />
  );
}

export function Legend({ items }: { items: LegendItem[] }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-[0.82rem] text-fg-2">
      {items.map((item) => (
        <li key={item.label} className="flex items-center gap-1.5">
          <Swatch color={item.color} shape={item.shape} />
          {item.label}
        </li>
      ))}
    </ul>
  );
}
