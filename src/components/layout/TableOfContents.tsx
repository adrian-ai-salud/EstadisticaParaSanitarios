"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
}

export function TableOfContents() {
  const pathname = usePathname();
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: se recalcula al cambiar de tema
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("#articulo h2[id]"));
    setHeadings(elements.map((el) => ({ id: el.id, text: el.textContent ?? "" })));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -70% 0px" },
    );
    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [pathname]);

  if (headings.length < 2) return null;

  return (
    <nav aria-label="En esta página" className="text-sm">
      <p className="mb-3 text-xs font-semibold tracking-wide text-fg-3 uppercase">En esta página</p>
      <ul className="space-y-1 border-l border-border">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`-ml-px block border-l py-1 pl-3.5 leading-snug transition-colors ${
                activeId === heading.id
                  ? "border-accent font-medium text-accent-strong"
                  : "border-transparent text-fg-3 hover:text-fg-2"
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
