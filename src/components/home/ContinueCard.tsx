"use client";

import { ArrowRight, RotateCcw } from "lucide-react";
import Link from "next/link";
import { topicKey, topicList } from "@/content/temario";
import { resetProgress, useCompletedTopics } from "@/lib/progress";

export function ContinueCard() {
  const completed = useCompletedTopics();
  const done = topicList.filter((ref) => completed.includes(topicKey(ref))).length;
  const next = topicList.find((ref) => !completed.includes(topicKey(ref)));
  const ratio = done / topicList.length;
  const started = done > 0;

  return (
    <div className="rounded-2xl border border-border bg-surface p-5 shadow-md sm:p-6">
      <p className="text-xs font-semibold tracking-wider text-fg-3 uppercase">
        {started ? "Tu progreso" : "Por dónde empezar"}
      </p>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="font-serif text-4xl font-semibold text-fg tabular-nums">{done}</span>
        <span className="text-fg-3">de {topicList.length} temas completados</span>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-surface-3">
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-500"
          style={{ width: `${ratio * 100}%` }}
        />
      </div>
      {next ? (
        <Link
          href={next.href}
          className="group mt-5 flex items-center justify-between gap-3 rounded-xl bg-accent-soft p-4 transition-colors hover:bg-accent hover:text-accent-contrast"
        >
          <span>
            <span className="block text-xs font-medium text-accent-strong group-hover:text-accent-contrast/80">
              {started ? "Continuar con" : "Primer tema"}
            </span>
            <span className="block font-semibold text-fg group-hover:text-accent-contrast">
              {next.topic.title}
            </span>
            <span className="block text-sm text-fg-2 group-hover:text-accent-contrast/80">
              {next.module.title}
            </span>
          </span>
          <ArrowRight
            className="size-5 shrink-0 text-accent-strong transition-transform group-hover:translate-x-0.5 group-hover:text-accent-contrast"
            aria-hidden="true"
          />
        </Link>
      ) : (
        <Link
          href="/test-conocimientos"
          className="mt-5 flex items-center justify-between rounded-xl bg-accent p-4 font-semibold text-accent-contrast"
        >
          Has completado el temario. Ponte a prueba con el test
          <ArrowRight className="size-5" aria-hidden="true" />
        </Link>
      )}
      {started && (
        <button
          type="button"
          onClick={resetProgress}
          className="mt-3 inline-flex items-center gap-1.5 text-xs text-fg-3 hover:text-fg-2"
        >
          <RotateCcw className="size-3" aria-hidden="true" />
          Reiniciar el progreso
        </button>
      )}
    </div>
  );
}
