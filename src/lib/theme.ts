"use client";

import { useSyncExternalStore } from "react";
import { writeStorage } from "./persisted-store";

export type Theme = "light" | "dark";

import { THEME_STORAGE_KEY as STORAGE_KEY } from "./theme-script";

function subscribe(listener: () => void) {
  const observer = new MutationObserver(listener);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

export function useTheme(): Theme {
  return useSyncExternalStore(
    subscribe,
    () => (document.documentElement.dataset.theme === "dark" ? "dark" : "light"),
    () => "light",
  );
}

export function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  writeStorage(STORAGE_KEY, theme);
}
