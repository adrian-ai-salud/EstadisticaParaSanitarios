"use client";

import { Check } from "lucide-react";
import { setTopicCompleted, useCompletedTopics } from "@/lib/progress";

export function CompleteButton({
  topicKey,
  size = "sm",
}: {
  topicKey: string;
  size?: "sm" | "lg";
}) {
  const completed = useCompletedTopics();
  const isDone = completed.includes(topicKey);
  const sizing = size === "lg" ? "h-11 px-5 text-[0.95rem]" : "h-9 px-3.5 text-sm";
  return (
    <button
      type="button"
      aria-pressed={isDone}
      onClick={() => setTopicCompleted(topicKey, !isDone)}
      className={`inline-flex items-center gap-2 rounded-xl border font-medium transition-colors ${sizing} ${
        isDone
          ? "border-accent bg-accent text-accent-contrast hover:bg-accent-strong"
          : "border-border-strong bg-surface text-fg hover:border-accent hover:text-accent-strong"
      }`}
    >
      <Check className="size-4" strokeWidth={2.5} aria-hidden="true" />
      {isDone ? "Tema completado" : "Marcar como completado"}
    </button>
  );
}
