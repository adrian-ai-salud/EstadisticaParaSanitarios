"use client";

import { ArrowRight, CornerDownLeft, GraduationCap, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { topicList } from "@/content/temario";
import { normalizeForSearch } from "@/lib/text";
import { ModuleIcon } from "./ModuleIcon";

interface SearchEntry {
  href: string;
  title: string;
  context: string;
  haystack: string;
  icon: React.ReactNode;
}

const entries: SearchEntry[] = [
  ...topicList.map(({ module, topic, href }) => ({
    href,
    title: topic.title,
    context: `${module.number}. ${module.title}`,
    haystack: normalizeForSearch(
      [
        topic.title,
        topic.description,
        module.title,
        topic.interactive ?? "",
        ...topic.keywords,
      ].join(" "),
    ),
    icon: <ModuleIcon name={module.icon} className="size-4" />,
  })),
  {
    href: "/test-conocimientos",
    title: "Test de conocimientos",
    context: "Autoevaluación",
    haystack: normalizeForSearch("test examen preguntas autoevaluación cuestionario repaso"),
    icon: <GraduationCap className="size-4" aria-hidden="true" />,
  },
];

export function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const listId = useId();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const results = useMemo(() => {
    const terms = normalizeForSearch(query).split(/\s+/).filter(Boolean);
    if (terms.length === 0) return entries;
    return entries.filter((entry) => terms.every((term) => entry.haystack.includes(term)));
  }, [query]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      setQuery("");
      setActive(0);
      dialog.showModal();
      inputRef.current?.focus();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  const go = (href: string) => {
    onClose();
    router.push(href);
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (event.key === "Enter" && results[active]) {
      event.preventDefault();
      go(results[active].href);
    }
  };

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: el clic solo cierra al pulsar fuera; Esc lo gestiona el propio <dialog>
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
      aria-label="Buscar en el temario"
      className="m-auto mt-[12vh] w-[min(40rem,calc(100vw-2rem))] max-w-none overflow-hidden rounded-2xl border border-border bg-surface p-0 text-fg shadow-lg backdrop:bg-black/40 backdrop:backdrop-blur-[2px]"
    >
      <div className="flex items-center gap-3 border-b border-border px-4">
        <Search className="size-[18px] shrink-0 text-fg-3" aria-hidden="true" />
        <input
          ref={inputRef}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setActive(0);
          }}
          onKeyDown={onKeyDown}
          placeholder="Busca un tema, una prueba o un concepto…"
          className="h-14 w-full bg-transparent text-base outline-none placeholder:text-fg-3"
          role="combobox"
          aria-expanded="true"
          aria-controls={listId}
          aria-activedescendant={results[active] ? `${listId}-${active}` : undefined}
          aria-autocomplete="list"
        />
        <kbd className="hidden rounded-md border border-border px-1.5 py-0.5 text-[11px] text-fg-3 sm:block">
          Esc
        </kbd>
      </div>
      <div
        id={listId}
        role="listbox"
        tabIndex={-1}
        className="max-h-[min(26rem,60vh)] overflow-y-auto p-2"
      >
        {results.length === 0 && (
          <p className="px-3 py-10 text-center text-sm text-fg-3">
            No hay temas que coincidan con «{query}».
          </p>
        )}
        {results.map((entry, index) => (
          // biome-ignore lint/a11y/useKeyWithClickEvents: el teclado se gestiona desde el cuadro de búsqueda (patrón combobox)
          <div
            key={entry.href}
            id={`${listId}-${index}`}
            role="option"
            tabIndex={-1}
            aria-selected={index === active}
            onMouseMove={() => setActive(index)}
            onClick={() => go(entry.href)}
            className={`flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 ${
              index === active ? "bg-accent-soft" : ""
            }`}
          >
            <span
              className={`flex size-8 shrink-0 items-center justify-center rounded-lg border ${
                index === active
                  ? "border-transparent bg-surface text-accent"
                  : "border-border text-fg-3"
              }`}
            >
              {entry.icon}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate font-medium">{entry.title}</span>
              <span className="block truncate text-xs text-fg-3">{entry.context}</span>
            </span>
            {index === active ? (
              <CornerDownLeft className="size-4 text-accent" aria-hidden="true" />
            ) : (
              <ArrowRight className="size-4 text-transparent" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </dialog>
  );
}
