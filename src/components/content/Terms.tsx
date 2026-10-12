export function Terms({
  children,
  columns = 2,
}: {
  children: React.ReactNode;
  columns?: 1 | 2 | 3;
}) {
  const grid = { 1: "", 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3" }[columns];
  return <dl className={`not-prose my-6 grid gap-3 ${grid}`}>{children}</dl>;
}

export function Term({ name, children }: { name: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <dt className="font-semibold text-fg">{name}</dt>
      <dd className="mt-1.5 text-[0.95rem] leading-relaxed text-fg-2 [&_strong]:font-semibold [&_strong]:text-fg [&>p+p]:mt-2">
        {children}
      </dd>
    </div>
  );
}
