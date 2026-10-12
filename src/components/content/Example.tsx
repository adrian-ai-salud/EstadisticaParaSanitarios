export function Example({
  children,
  title = "Ejemplo",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="not-prose my-5 rounded-xl border border-dashed border-border-strong px-4 py-3 text-[0.97rem] leading-relaxed text-fg-2 [&_strong]:font-semibold [&_strong]:text-fg">
      <span className="mr-1.5 font-semibold text-fg">{title}.</span>
      {children}
    </div>
  );
}
