export function normalizeForSearch(value: string): string {
  return value.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

const percentFormat = new Intl.NumberFormat("es-ES", {
  style: "percent",
  maximumFractionDigits: 1,
});

export function formatPercent(value: number): string {
  return percentFormat.format(value);
}

export function formatNumber(value: number, digits = 2): string {
  return value.toLocaleString("es-ES", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

export function formatPValue(p: number): string {
  return p < 0.001 ? "< 0,001" : formatNumber(p, 3);
}
