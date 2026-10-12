"use client";

import { useEffect, useRef, useState } from "react";

export interface Margin {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface ChartSize {
  width: number;
  height: number;
  innerWidth: number;
  innerHeight: number;
  margin: Margin;
}

const defaultMargin: Margin = { top: 16, right: 16, bottom: 44, left: 52 };

export function Chart({
  height,
  label,
  margin: marginOverride,
  children,
  aspect,
  interactive = false,
}: {
  height?: number;
  aspect?: number;
  label: string;
  interactive?: boolean;
  margin?: Partial<Margin>;
  children: (size: ChartSize) => React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(640);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setWidth(Math.max(260, Math.round(entry.contentRect.width)));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const margin = { ...defaultMargin, ...marginOverride };
  const resolvedHeight =
    height ?? Math.round(Math.min(380, Math.max(220, width / (aspect ?? 1.8))));
  const size: ChartSize = {
    width,
    height: resolvedHeight,
    innerWidth: width - margin.left - margin.right,
    innerHeight: resolvedHeight - margin.top - margin.bottom,
    margin,
  };

  return (
    <div ref={ref} className="w-full">
      <svg
        width={width}
        height={resolvedHeight}
        role={interactive ? "group" : "img"}
        aria-label={label}
        className="block overflow-visible font-sans text-fg-3 select-none"
      >
        <g transform={`translate(${margin.left},${margin.top})`}>{children(size)}</g>
      </svg>
    </div>
  );
}
