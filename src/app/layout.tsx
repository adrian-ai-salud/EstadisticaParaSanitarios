import type { Metadata, Viewport } from "next";
import { SidebarNav } from "@/components/layout/SidebarNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { themeInitScript } from "@/lib/theme-script";
import "./globals.css";

const siteUrl = "https://adrianvencesgarrido.com/EstadisticaParaSanitarios/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Estadística para Sanitarios",
    template: "%s · Estadística para Sanitarios",
  },
  description:
    "Bioestadística aplicada a la práctica clínica para enfermeras, médicos y estudiantes de ciencias de la salud, con simuladores interactivos y test de autoevaluación.",
  authors: [{ name: "Adrián Vences Garrido", url: "https://adrianvencesgarrido.com" }],
  keywords: [
    "bioestadística",
    "estadística sanitaria",
    "enfermería",
    "atención primaria",
    "pruebas diagnósticas",
    "análisis de supervivencia",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Estadística para Sanitarios",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f6f3" },
    { media: "(prefers-color-scheme: dark)", color: "#111312" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: script propio y estático que fija el tema antes de pintar */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-dvh">
        <a
          href="#contenido"
          className="sr-only z-50 rounded-lg bg-accent px-4 py-2 text-accent-contrast focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Saltar al contenido
        </a>
        <SiteHeader />
        <div className="mx-auto flex max-w-[90rem]">
          <aside
            aria-label="Temario"
            className="no-print sticky top-16 hidden h-[calc(100dvh-4rem)] w-72 shrink-0 overflow-y-auto border-r border-border px-4 py-6 lg:block"
          >
            <SidebarNav />
          </aside>
          <main id="contenido" className="min-w-0 flex-1">
            {children}
          </main>
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
