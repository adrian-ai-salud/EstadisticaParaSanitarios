"use client";

import { Check, GraduationCap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { modules, topicList } from "@/content/temario";
import { useCompletedTopics } from "@/lib/progress";
import { ModuleIcon } from "./ModuleIcon";

export function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const completed = useCompletedTopics();
  const done = topicList.filter((ref) =>
    completed.includes(`${ref.module.slug}/${ref.topic.slug}`),
  );
  const ratio = done.length / topicList.length;

  return (
    <nav aria-label="Temario" className="flex flex-col gap-6 text-[0.9rem]">
      <div className="rounded-xl border border-border bg-surface p-3.5">
        <div className="flex items-baseline justify-between text-xs">
          <span className="font-medium text-fg-2">Tu progreso</span>
          <span className="tabular-nums text-fg-3">
            {done.length} de {topicList.length} temas
          </span>
        </div>
        <div
          className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-3"
          role="progressbar"
          aria-label="Temas completados"
          aria-valuemin={0}
          aria-valuemax={topicList.length}
          aria-valuenow={done.length}
        >
          <div
            className="h-full rounded-full bg-accent transition-[width] duration-500"
            style={{ width: `${ratio * 100}%` }}
          />
        </div>
      </div>

      {modules.map((module) => (
        <div key={module.slug}>
          <p className="mb-1.5 flex items-center gap-2 px-2 text-xs font-semibold tracking-wide text-fg-3 uppercase">
            <ModuleIcon name={module.icon} className="size-3.5" />
            {module.title}
          </p>
          <ul className="flex flex-col gap-px">
            {module.topics.map((topic) => {
              const href = `/${module.slug}/${topic.slug}`;
              const isActive = pathname === href;
              const isDone = completed.includes(`${module.slug}/${topic.slug}`);
              return (
                <li key={topic.slug}>
                  <Link
                    href={href}
                    onClick={onNavigate}
                    aria-current={isActive ? "page" : undefined}
                    className={`group flex items-center gap-2.5 rounded-lg px-2 py-1.5 transition-colors ${
                      isActive
                        ? "bg-accent-soft font-medium text-accent-strong"
                        : "text-fg-2 hover:bg-surface-2 hover:text-fg"
                    }`}
                  >
                    <span
                      className={`flex size-4 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        isDone
                          ? "border-accent bg-accent text-accent-contrast"
                          : isActive
                            ? "border-accent"
                            : "border-border-strong"
                      }`}
                    >
                      {isDone && (
                        <Check className="size-2.5" strokeWidth={3.5} aria-hidden="true" />
                      )}
                    </span>
                    <span className="leading-snug">{topic.title}</span>
                    {isDone && <span className="sr-only">(completado)</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      <Link
        href="/test-conocimientos"
        onClick={onNavigate}
        aria-current={pathname === "/test-conocimientos" ? "page" : undefined}
        className={`flex items-center gap-2.5 rounded-xl border px-3 py-2.5 font-medium transition-colors ${
          pathname === "/test-conocimientos"
            ? "border-accent bg-accent-soft text-accent-strong"
            : "border-border bg-surface text-fg hover:border-border-strong"
        }`}
      >
        <GraduationCap className="size-4 text-accent" aria-hidden="true" />
        Test de conocimientos
      </Link>
    </nav>
  );
}
