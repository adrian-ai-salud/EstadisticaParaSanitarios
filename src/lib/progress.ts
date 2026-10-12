"use client";

import { createPersistedStore, usePersistedStore } from "./persisted-store";

const completedStore = createPersistedStore<string[]>("eps:temas-completados", []);

export function useCompletedTopics(): string[] {
  return usePersistedStore(completedStore);
}

export function setTopicCompleted(key: string, completed: boolean) {
  const current = completedStore.get().filter((k) => k !== key);
  completedStore.set(completed ? [...current, key] : current);
}

export function resetProgress() {
  completedStore.set([]);
}

export interface QuizRecord {
  best: number;
  total: number;
  attempts: number;
}

const quizStore = createPersistedStore<QuizRecord | null>("eps:test", null);

export function useQuizRecord(): QuizRecord | null {
  return usePersistedStore(quizStore);
}

export function saveQuizResult(score: number, total: number) {
  const previous = quizStore.get();
  const bestRatio = previous ? previous.best / previous.total : -1;
  const isBetter = score / total > bestRatio;
  quizStore.set({
    best: isBetter ? score : (previous?.best ?? score),
    total: isBetter ? total : (previous?.total ?? total),
    attempts: (previous?.attempts ?? 0) + 1,
  });
}
