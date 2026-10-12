"use client";

import { GraduationCap, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LogoMark } from "./Logo";
import { SearchDialog } from "./SearchDialog";
import { SidebarNav } from "./SidebarNav";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      const typing =
        target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName);
      if (
        (event.key === "k" && (event.metaKey || event.ctrlKey)) ||
        (event.key === "/" && !typing)
      ) {
        event.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const dialog = menuRef.current;
    if (!dialog) return;
    if (menuOpen && !dialog.open) dialog.showModal();
    if (!menuOpen && dialog.open) dialog.close();
  }, [menuOpen]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: el menú se cierra al cambiar de ruta
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="no-print sticky top-0 z-30 border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[90rem] items-center gap-2 px-4 sm:px-6">
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="-ml-2 inline-flex size-10 items-center justify-center rounded-lg text-fg-2 hover:bg-surface-2 lg:hidden"
          aria-label="Abrir el temario"
        >
          <Menu className="size-5" aria-hidden="true" />
        </button>

        <Link href="/" className="flex items-center gap-2.5 rounded-lg pr-2">
          <LogoMark className="size-8" />
          <span className="leading-tight">
            <span className="block font-serif text-[1.05rem] font-semibold tracking-tight text-fg">
              Estadística para Sanitarios
            </span>
            <span className="hidden text-xs text-fg-3 sm:block">
              Bioestadística aplicada a la práctica clínica
            </span>
          </span>
        </Link>

        <div className="ml-auto flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-surface px-2.5 text-sm text-fg-3 shadow-sm transition-colors hover:border-border-strong hover:text-fg-2 md:w-64"
            aria-label="Buscar en el temario"
          >
            <Search className="size-4" aria-hidden="true" />
            <span className="hidden md:inline">Buscar…</span>
            <kbd className="ml-auto hidden rounded border border-border px-1.5 font-sans text-[11px] md:inline">
              Ctrl K
            </kbd>
          </button>
          <Link
            href="/test-conocimientos"
            className="hidden h-9 items-center gap-2 rounded-lg px-3 text-sm font-medium text-fg-2 transition-colors hover:bg-surface-2 hover:text-fg sm:inline-flex"
          >
            <GraduationCap className="size-4" aria-hidden="true" />
            Test
          </Link>
          <ThemeToggle />
        </div>
      </div>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* biome-ignore lint/a11y/useKeyWithClickEvents: el clic solo cierra al pulsar fuera; Esc lo gestiona el propio <dialog> */}
      <dialog
        ref={menuRef}
        onClose={() => setMenuOpen(false)}
        onClick={(event) => {
          if (event.target === menuRef.current) setMenuOpen(false);
        }}
        aria-label="Temario"
        className="m-0 h-dvh max-h-none w-[min(20rem,88vw)] max-w-none border-r border-border bg-bg p-0 text-fg shadow-lg backdrop:bg-black/40"
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-4">
          <span className="font-serif font-semibold">Temario</span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="inline-flex size-10 items-center justify-center rounded-lg text-fg-2 hover:bg-surface-2"
            aria-label="Cerrar el temario"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>
        <div className="h-[calc(100dvh-4rem)] overflow-y-auto p-4">
          <SidebarNav onNavigate={() => setMenuOpen(false)} />
        </div>
      </dialog>
    </header>
  );
}
