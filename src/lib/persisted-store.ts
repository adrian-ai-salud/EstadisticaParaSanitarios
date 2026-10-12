"use client";

import { useSyncExternalStore } from "react";

interface PersistedStore<T> {
  get: () => T;
  set: (value: T) => void;
  subscribe: (listener: () => void) => () => void;
  serverValue: T;
}

// Las preferencias se guardan solo en este navegador; si el almacenamiento está
// bloqueado (modo privado, políticas del centro), la aplicación sigue funcionando.
export function writeStorage(key: string, value: string): boolean {
  try {
    window.localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

export function createPersistedStore<T>(key: string, fallback: T): PersistedStore<T> {
  const listeners = new Set<() => void>();
  let cache: T | undefined;

  const read = (): T => {
    try {
      const raw = window.localStorage.getItem(key);
      return raw === null ? fallback : (JSON.parse(raw) as T);
    } catch {
      return fallback;
    }
  };

  const get = () => {
    if (cache === undefined) cache = read();
    return cache;
  };

  const set = (value: T) => {
    cache = value;
    writeStorage(key, JSON.stringify(value));
    for (const listener of listeners) listener();
  };

  const subscribe = (listener: () => void) => {
    listeners.add(listener);
    const onStorage = (event: StorageEvent) => {
      if (event.key === key) {
        cache = read();
        listener();
      }
    };
    window.addEventListener("storage", onStorage);
    return () => {
      listeners.delete(listener);
      window.removeEventListener("storage", onStorage);
    };
  };

  return { get, set, subscribe, serverValue: fallback };
}

export function usePersistedStore<T>(store: PersistedStore<T>): T {
  return useSyncExternalStore(store.subscribe, store.get, () => store.serverValue);
}
