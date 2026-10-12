import { Minus, Plus } from "lucide-react";

export function StudyDesign({
  title,
  pros,
  cons,
  children,
}: {
  title: string;
  pros: string;
  cons: string;
  children: React.ReactNode;
}) {
  return (
    <section className="not-prose my-5 rounded-2xl border border-border bg-surface p-5">
      <h3 className="text-lg font-semibold text-fg">{title}</h3>
      <div className="mt-2 text-[0.98rem] leading-relaxed text-fg-2">{children}</div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-success-soft p-3.5">
          <p className="flex items-center gap-1.5 text-sm font-semibold text-success">
            <Plus className="size-4" aria-hidden="true" /> Ventajas
          </p>
          <p className="mt-1 text-sm leading-relaxed text-fg-2">{pros}</p>
        </div>
        <div className="rounded-xl bg-danger-soft p-3.5">
          <p className="flex items-center gap-1.5 text-sm font-semibold text-danger">
            <Minus className="size-4" aria-hidden="true" /> Limitaciones
          </p>
          <p className="mt-1 text-sm leading-relaxed text-fg-2">{cons}</p>
        </div>
      </div>
    </section>
  );
}
