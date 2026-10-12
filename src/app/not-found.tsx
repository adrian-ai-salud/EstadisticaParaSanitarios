import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-start px-6 py-24">
      <p className="font-serif text-6xl font-semibold text-accent">404</p>
      <h1 className="mt-4 font-serif text-3xl font-semibold text-fg">Esta página no existe</h1>
      <p className="mt-3 text-fg-2">
        Puede que el tema haya cambiado de dirección. Usa el buscador o vuelve al inicio.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-11 items-center rounded-xl bg-accent px-5 font-semibold text-accent-contrast hover:bg-accent-strong"
      >
        Ir al inicio
      </Link>
    </div>
  );
}
