import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { TopicRef } from "@/content/temario";

function PagerLink({ target, direction }: { target: TopicRef; direction: "prev" | "next" }) {
  const isNext = direction === "next";
  return (
    <Link
      href={target.href}
      className={`group flex flex-1 flex-col gap-1 rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-accent ${
        isNext ? "items-end text-right" : ""
      }`}
    >
      <span className="flex items-center gap-1.5 text-xs font-medium text-fg-3">
        {!isNext && (
          <ArrowLeft
            className="size-3.5 transition-transform group-hover:-translate-x-0.5"
            aria-hidden="true"
          />
        )}
        {isNext ? "Siguiente" : "Anterior"}
        {isNext && (
          <ArrowRight
            className="size-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        )}
      </span>
      <span className="font-medium text-fg group-hover:text-accent-strong">
        {target.topic.title}
      </span>
      <span className="text-xs text-fg-3">{target.module.title}</span>
    </Link>
  );
}

export function TopicPager({ prev, next }: { prev?: TopicRef; next?: TopicRef }) {
  return (
    <nav
      aria-label="Navegación entre temas"
      className="no-print mt-8 flex flex-col gap-3 sm:flex-row"
    >
      {prev ? (
        <PagerLink target={prev} direction="prev" />
      ) : (
        <div className="hidden flex-1 sm:block" />
      )}
      {next ? (
        <PagerLink target={next} direction="next" />
      ) : (
        <Link
          href="/test-conocimientos"
          className="flex flex-1 flex-col items-end gap-1 rounded-2xl border border-accent bg-accent-soft p-4 text-right"
        >
          <span className="text-xs font-medium text-accent-strong">Para terminar</span>
          <span className="font-medium text-fg">Haz el test de conocimientos</span>
        </Link>
      )}
    </nav>
  );
}
