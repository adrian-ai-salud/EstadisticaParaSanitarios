import { Stethoscope } from "lucide-react";

export function ClinicalCase({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="not-prose relative my-8 overflow-hidden rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-6">
      <div className="absolute inset-y-0 left-0 w-1 bg-accent" aria-hidden="true" />
      <p className="flex items-center gap-2 text-xs font-semibold tracking-wider text-accent uppercase">
        <Stethoscope className="size-4" aria-hidden="true" />
        Caso clínico
      </p>
      <h2 className="mt-2 font-serif text-xl font-semibold text-fg">{title}</h2>
      <div className="mt-3 space-y-3 text-[1.02rem] leading-relaxed text-fg-2 [&_strong]:font-semibold [&_strong]:text-fg">
        {children}
      </div>
    </section>
  );
}
