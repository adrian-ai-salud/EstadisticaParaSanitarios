import Link from "next/link";
import packageJson from "../../../package.json";

export function SiteFooter() {
  return (
    <footer className="no-print border-t border-border">
      <div className="mx-auto flex max-w-[90rem] flex-col gap-3 px-4 py-8 text-sm text-fg-3 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p>
          Creado por{" "}
          <a
            href="https://adrianvencesgarrido.com"
            className="font-medium text-fg-2 underline-offset-4 hover:underline"
          >
            Adrián Vences Garrido
          </a>
          , enfermero especialista en Enfermería Familiar y Comunitaria.
        </p>
        <p className="flex flex-wrap gap-x-4 gap-y-1">
          <a href="https://doi.org/10.5281/zenodo.15874374" className="hover:text-fg-2">
            DOI 10.5281/zenodo.15874374
          </a>
          <a href="https://creativecommons.org/licenses/by/4.0/deed.es" className="hover:text-fg-2">
            Contenidos CC BY 4.0
          </a>
          <a
            href="https://github.com/adrian-ai-salud/EstadisticaParaSanitarios"
            className="hover:text-fg-2"
          >
            Código fuente
          </a>
          <Link href="/acerca" className="hover:text-fg-2">
            Acerca de
          </Link>
          <span className="tabular-nums">v{packageJson.version}</span>
        </p>
      </div>
    </footer>
  );
}
