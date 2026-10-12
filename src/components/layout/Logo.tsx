export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="var(--accent)" />
      <path
        d="M5 23.5c3.2 0 4.6-1.6 6-5.2 1.5-3.9 2.6-8.8 5-8.8s3.5 4.9 5 8.8c1.4 3.6 2.8 5.2 6 5.2"
        fill="none"
        stroke="var(--accent-contrast)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M16 9.5v14"
        stroke="var(--accent-contrast)"
        strokeWidth="1.4"
        strokeDasharray="1.6 2"
        opacity="0.7"
      />
    </svg>
  );
}
