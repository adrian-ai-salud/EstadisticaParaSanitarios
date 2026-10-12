import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Acerca de",
  description:
    "Finalidad, autoría, licencia, privacidad y forma de citar Estadística para Sanitarios.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="font-serif text-[2.4rem] font-semibold tracking-tight text-fg">Acerca de</h1>
      <div className="prose-content mt-8">
        <p>
          <strong>Estadística para Sanitarios</strong> es un recurso docente abierto para aprender
          bioestadística aplicada a la práctica clínica. Está dirigido a enfermeras, médicos, otros
          profesionales sanitarios y estudiantes de ciencias de la salud que necesitan leer
          artículos con criterio, participar en investigación o refrescar conceptos.
        </p>

        <h2 id="finalidad">Finalidad y limitaciones</h2>
        <p>
          Es un material <strong>educativo</strong>. Los simuladores generan datos sintéticos para
          ilustrar conceptos y no sustituyen al software estadístico ni al asesoramiento
          metodológico. La calculadora de pruebas diagnósticas sirve para entender cómo se
          relacionan sensibilidad, especificidad y prevalencia; no está pensada para tomar
          decisiones sobre pacientes concretos.
        </p>

        <h2 id="privacidad">Privacidad</h2>
        <p>
          La aplicación funciona por completo en tu navegador. No tiene cuentas de usuario, no usa
          cookies ni herramientas de analítica y no carga recursos de terceros. Los temas que marcas
          como completados, tu mejor resultado en el test y el tema claro u oscuro se guardan en el
          almacenamiento local de tu navegador y nunca salen de tu dispositivo.
        </p>

        <h2 id="autoria">Autoría</h2>
        <p>
          Creado por <a href="https://adrianvencesgarrido.com">Adrián Vences Garrido</a>, enfermero
          especialista en Enfermería Familiar y Comunitaria (ORCID{" "}
          <a href="https://orcid.org/0009-0001-2460-9318">0009-0001-2460-9318</a>). Si encuentras un
          error o quieres proponer un tema, abre una incidencia en el{" "}
          <a href="https://github.com/adrian-ai-salud/EstadisticaParaSanitarios/issues">
            repositorio del proyecto
          </a>
          .
        </p>

        <h2 id="citar">Cómo citar</h2>
        <p>
          Vences Garrido A. Estadística para Sanitarios [Internet]. Zenodo; 2025.{" "}
          <a href="https://doi.org/10.5281/zenodo.15874374">doi:10.5281/zenodo.15874374</a>
        </p>

        <h2 id="licencia">Licencia</h2>
        <p>
          Los contenidos se publican con licencia{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/deed.es">
            Creative Commons Atribución 4.0 Internacional
          </a>
          : puedes reutilizarlos y adaptarlos, también en tus clases, citando la fuente. El código
          fuente tiene licencia MIT.
        </p>

        <p>
          <Link href="/">Volver al inicio</Link>
        </p>
      </div>
    </div>
  );
}
