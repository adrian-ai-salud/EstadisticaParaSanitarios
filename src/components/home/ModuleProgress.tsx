"use client";

import type { Module } from "@/content/temario";
import { useCompletedTopics } from "@/lib/progress";

export function ModuleProgress({ module }: { module: Module }) {
  const completed = useCompletedTopics();
  const done = module.topics.filter((t) => completed.includes(`${module.slug}/${t.slug}`)).length;
  return (
    <div className="flex items-center gap-2.5">
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-3">
        <div
          className="h-full rounded-full bg-accent"
          style={{ width: `${(done / module.topics.length) * 100}%` }}
        />
      </div>
      <span className="text-xs text-fg-3 tabular-nums">
        {done}/{module.topics.length}
      </span>
    </div>
  );
}
