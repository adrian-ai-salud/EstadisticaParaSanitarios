import { Info, Lightbulb, OctagonAlert, TriangleAlert } from "lucide-react";

const variants = {
  key: {
    icon: Lightbulb,
    label: "Punto clave",
    box: "border-accent/25 bg-accent-soft",
    tone: "text-accent-strong",
  },
  info: {
    icon: Info,
    label: "Para saber más",
    box: "border-info/25 bg-info-soft",
    tone: "text-info",
  },
  warning: {
    icon: TriangleAlert,
    label: "Atención",
    box: "border-warning/30 bg-warning-soft",
    tone: "text-warning",
  },
  danger: {
    icon: OctagonAlert,
    label: "Error frecuente",
    box: "border-danger/25 bg-danger-soft",
    tone: "text-danger",
  },
} as const;

export function Callout({
  type = "key",
  title,
  children,
}: {
  type?: keyof typeof variants;
  title?: string;
  children: React.ReactNode;
}) {
  const variant = variants[type];
  const Icon = variant.icon;
  return (
    <div
      role="note"
      className={`not-prose my-7 flex gap-3.5 rounded-2xl border p-4 sm:p-5 ${variant.box}`}
    >
      <Icon className={`mt-0.5 size-5 shrink-0 ${variant.tone}`} aria-hidden="true" />
      <div className="min-w-0 text-[0.98rem] leading-relaxed text-fg-2 [&_strong]:font-semibold [&_strong]:text-fg [&>p+p]:mt-2">
        <p className={`mb-1 font-semibold ${variant.tone}`}>{title ?? variant.label}</p>
        {children}
      </div>
    </div>
  );
}
