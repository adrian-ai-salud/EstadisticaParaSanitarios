// Columna con el extremo de datos redondeado (4 px) y la base recta.
export function columnPath(
  cx: number,
  width: number,
  top: number,
  baseline: number,
  radius = 4,
): string {
  const r = Math.min(radius, width / 2, Math.max(0, baseline - top));
  const left = cx - width / 2;
  const right = cx + width / 2;
  return `M${left},${baseline}V${top + r}Q${left},${top} ${left + r},${top}H${right - r}Q${right},${top} ${right},${top + r}V${baseline}Z`;
}
