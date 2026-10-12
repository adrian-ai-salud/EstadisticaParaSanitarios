"use client";

import { MousePointerClick, RotateCcw, Table2 } from "lucide-react";
import { useId } from "react";

export function Simulator({
  title,
  description,
  children,
}: {
  title: string;
  description?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <figure className="not-prose my-10 overflow-hidden rounded-2xl border border-border bg-surface shadow-md">
      <figcaption className="border-b border-border px-5 pt-4 pb-3.5 sm:px-6">
        <p className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-accent uppercase">
          <MousePointerClick className="size-3.5" aria-hidden="true" />
          Interactivo
        </p>
        <p className="mt-1 text-lg font-semibold text-fg">{title}</p>
        {description && <p className="mt-1 text-sm leading-relaxed text-fg-3">{description}</p>}
      </figcaption>
      <div className="space-y-5 p-5 sm:p-6">{children}</div>
    </figure>
  );
}

export function Controls({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2">{children}</div>;
}

export function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  format = (v) => v.toLocaleString("es-ES"),
  hint,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  format?: (value: number) => string;
  hint?: string;
}) {
  const id = useId();
  const fill = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-sm font-medium text-fg-2">
          {label}
        </label>
        <output htmlFor={id} className="text-sm font-semibold text-fg tabular-nums">
          {format(value)}
        </output>
      </div>
      <input
        id={id}
        type="range"
        className="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        style={{ "--fill": `${fill}%` } as React.CSSProperties}
        aria-describedby={hint ? `${id}-hint` : undefined}
      />
      {hint && (
        <p id={`${id}-hint`} className="mt-1 text-xs text-fg-3">
          {hint}
        </p>
      )}
    </div>
  );
}

export function Segmented<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <div
      role="radiogroup"
      aria-label={label}
      className="inline-flex flex-wrap gap-1 rounded-xl bg-surface-2 p-1"
    >
      {options.map((option) => {
        const selected = option.value === value;
        return (
          // biome-ignore lint/a11y/useSemanticElements: control segmentado accesible con role="radio"
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(option.value)}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              selected ? "bg-surface text-fg shadow-sm" : "text-fg-3 hover:text-fg-2"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export function Stats({ children }: { children: React.ReactNode }) {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
      {children}
    </dl>
  );
}

export function Stat({
  label,
  value,
  hint,
  tone,
}: {
  label: string;
  value: React.ReactNode;
  hint?: string;
  tone?: "accent" | "danger";
}) {
  const color =
    tone === "accent" ? "text-accent-strong" : tone === "danger" ? "text-danger" : "text-fg";
  return (
    <div className="bg-surface px-3.5 py-3">
      <dt className="text-xs text-fg-3">{label}</dt>
      <dd className={`mt-0.5 text-xl font-semibold tabular-nums ${color}`}>{value}</dd>
      {hint && <dd className="text-xs text-fg-3">{hint}</dd>}
    </div>
  );
}

export function ActionButton({
  children,
  onClick,
  icon = "reset",
}: {
  children: React.ReactNode;
  onClick: () => void;
  icon?: "reset" | "none";
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex h-9 items-center gap-2 rounded-xl border border-border-strong bg-surface px-3.5 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent-strong"
    >
      {icon === "reset" && <RotateCcw className="size-4" aria-hidden="true" />}
      {children}
    </button>
  );
}

export function DataTable({
  caption,
  columns,
  rows,
}: {
  caption: string;
  columns: string[];
  rows: (string | number)[][];
}) {
  return (
    <details className="group rounded-xl border border-border text-sm">
      <summary className="flex cursor-pointer list-none items-center gap-2 px-3.5 py-2.5 font-medium text-fg-2 hover:text-fg">
        <Table2 className="size-4" aria-hidden="true" />
        <span className="group-open:hidden">Ver los datos en tabla</span>
        <span className="hidden group-open:inline">Ocultar la tabla</span>
      </summary>
      <div className="max-h-72 overflow-auto border-t border-border">
        <table className="w-full text-left tabular-nums">
          <caption className="sr-only">{caption}</caption>
          <thead className="sticky top-0 bg-surface-2">
            <tr>
              {columns.map((column) => (
                <th key={column} scope="col" className="px-3.5 py-2 font-semibold text-fg">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.join("|")} className="border-t border-border">
                {row.map((cell, i) => (
                  <td key={`${columns[i]}`} className="px-3.5 py-1.5 text-fg-2">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </details>
  );
}

export function Readout({ children }: { children: React.ReactNode }) {
  return (
    <p
      aria-live="polite"
      className="rounded-xl bg-surface-2 px-4 py-3 text-[0.95rem] leading-relaxed text-fg-2 [&_strong]:font-semibold [&_strong]:text-fg"
    >
      {children}
    </p>
  );
}
