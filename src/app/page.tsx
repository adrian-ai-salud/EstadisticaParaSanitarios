import {
  ArrowRight,
  Calculator,
  FlaskConical,
  GraduationCap,
  Hourglass,
  Lock,
  Quote,
} from "lucide-react";
import Link from "next/link";
import { ContinueCard } from "@/components/home/ContinueCard";
import { ModuleProgress } from "@/components/home/ModuleProgress";
import { ModuleIcon } from "@/components/layout/ModuleIcon";
import { modules, topicList } from "@/content/temario";
import { questions } from "@/data/preguntas";

const simulatorCount = topicList.filter((ref) => ref.topic.interactive).length;

const tools = [
  {
    href: "/pruebas/elegir-prueba",
    icon: FlaskConical,
    title: "¿Qué prueba uso?",
    text: "Responde a tres o cuatro preguntas sobre tus variables y tu diseño, y obtén la prueba estadística adecuada.",
  },
  {
    href: "/pruebas-diagnosticas/definiciones-aplicaciones",
    icon: Calculator,
    title: "Calculadora de pruebas diagnósticas",
    text: "Sensibilidad, especificidad, valores predictivos y razones de verosimilitud, con el efecto de la prevalencia.",
  },
  {
    href: "/supervivencia/curvas-de-kaplan-meier",
    icon: Hourglass,
    title: "Curvas de Kaplan-Meier",
    text: "Simula un ensayo, observa las curvas, la tabla de pacientes en riesgo y la prueba de log-rank.",
  },
];

export default function Home() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-10 xl:px-12">
      <section className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <p className="text-sm font-semibold tracking-wide text-accent">
            Para enfermeras, médicos y estudiantes de ciencias de la salud
          </p>
          <h1 className="mt-4 font-serif text-[2.5rem] leading-[1.08] font-semibold tracking-tight text-balance text-fg sm:text-[3.4rem]">
            Bioestadística para la práctica clínica, explicada con casos y simuladores
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-fg-2">
            Desde los tipos de variables hasta el análisis de supervivencia. Cada tema parte de una
            situación real de consulta y se acompaña de un simulador para entender el concepto
            manipulándolo.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/fundamentos/definiciones-basicas"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-accent px-5 font-semibold text-accent-contrast shadow-sm transition-colors hover:bg-accent-strong"
            >
              Empezar por los fundamentos
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/test-conocimientos"
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-border-strong bg-surface px-5 font-semibold text-fg transition-colors hover:border-accent"
            >
              <GraduationCap className="size-4" aria-hidden="true" />
              Hacer el test
            </Link>
          </div>
          <dl className="mt-10 grid max-w-xl grid-cols-4 gap-4 border-t border-border pt-6">
            {[
              [modules.length, "bloques"],
              [topicList.length, "temas"],
              [simulatorCount, "simuladores"],
              [questions.length, "preguntas"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-serif text-3xl font-semibold text-fg tabular-nums">{value}</dd>
                <dd className="text-sm text-fg-3">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <ContinueCard />
      </section>

      <section className="mx-auto mt-20 max-w-6xl" aria-labelledby="temario">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 id="temario" className="font-serif text-3xl font-semibold tracking-tight text-fg">
              El temario
            </h2>
            <p className="mt-2 text-fg-2">
              Ocho bloques pensados para recorrerse en orden, aunque cada tema se entiende por
              separado.
            </p>
          </div>
        </div>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {modules.map((module) => (
            <li
              key={module.slug}
              className="flex flex-col rounded-2xl border border-border bg-surface p-5 transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-xl bg-accent-soft text-accent-strong">
                  <ModuleIcon name={module.icon} className="size-5" />
                </span>
                <span className="font-serif text-2xl font-semibold text-fg-3 tabular-nums">
                  {String(module.number).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-fg">{module.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-fg-3">{module.description}</p>
              <ul className="mt-4 flex-1 space-y-1 border-t border-border pt-3">
                {module.topics.map((topic) => (
                  <li key={topic.slug}>
                    <Link
                      href={`/${module.slug}/${topic.slug}`}
                      className="flex items-center justify-between gap-2 rounded-md py-0.5 text-sm text-fg-2 hover:text-accent-strong"
                    >
                      {topic.title}
                      <ArrowRight className="size-3.5 shrink-0 opacity-40" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <ModuleProgress module={module} />
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto mt-20 max-w-6xl" aria-labelledby="herramientas">
        <h2 id="herramientas" className="font-serif text-3xl font-semibold tracking-tight text-fg">
          Herramientas para la consulta y el aula
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent"
            >
              <tool.icon className="size-6 text-accent" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-fg group-hover:text-accent-strong">
                {tool.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-3">{tool.text}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-strong">
                Abrir
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 grid max-w-6xl gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface-2 p-6">
          <Quote className="size-5 text-accent" aria-hidden="true" />
          <h2 className="mt-3 text-lg font-semibold text-fg">Cómo citar</h2>
          <p className="mt-2 text-sm leading-relaxed text-fg-2">
            Vences Garrido A. Estadística para Sanitarios [Internet]. Zenodo; 2025.{" "}
            <a
              href="https://doi.org/10.5281/zenodo.15874374"
              className="font-medium text-accent-strong underline-offset-4 hover:underline"
            >
              doi:10.5281/zenodo.15874374
            </a>
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-surface-2 p-6">
          <Lock className="size-5 text-accent" aria-hidden="true" />
          <h2 className="mt-3 text-lg font-semibold text-fg">Sin registro ni seguimiento</h2>
          <p className="mt-2 text-sm leading-relaxed text-fg-2">
            Todo funciona en tu navegador. No hay cuentas, cookies ni analítica; tu progreso se
            guarda solo en este dispositivo.{" "}
            <Link
              href="/acerca"
              className="font-medium text-accent-strong underline-offset-4 hover:underline"
            >
              Más información
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
