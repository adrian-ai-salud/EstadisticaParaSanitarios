"use client";

import { ArrowRight, Check, GraduationCap, RotateCcw, Trophy, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { modules } from "@/content/temario";
import { type Question, questions } from "@/data/preguntas";
import { saveQuizResult, useQuizRecord } from "@/lib/progress";
import { formatPercent } from "@/lib/text";

interface Answer {
  question: Question;
  selected: number;
}

type Phase = "setup" | "playing" | "finished";

const letters = ["A", "B", "C", "D"];

function shuffle<T>(items: readonly T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function shuffleOptions(question: Question): Question {
  const order = shuffle(question.options.map((_, i) => i));
  return {
    ...question,
    options: order.map((i) => question.options[i]),
    answer: order.indexOf(question.answer),
  };
}

function moduleTitle(slug: string): string {
  return modules.find((m) => m.slug === slug)?.title ?? slug;
}

function Setup({ onStart }: { onStart: (count: number, module: string) => void }) {
  const record = useQuizRecord();
  const [count, setCount] = useState(10);
  const [module, setModule] = useState("todos");
  const available =
    module === "todos" ? questions.length : questions.filter((q) => q.module === module).length;
  const moduleOptions = modules.filter((m) => questions.some((q) => q.module === m.slug));

  return (
    <div>
      <p className="flex items-center gap-2 text-sm font-semibold tracking-wider text-accent uppercase">
        <GraduationCap className="size-4" aria-hidden="true" />
        Autoevaluación
      </p>
      <h1 className="mt-2 font-serif text-[2.3rem] leading-tight font-semibold tracking-tight text-fg">
        Test de conocimientos
      </h1>
      <p className="mt-3 text-lg leading-relaxed text-fg-2">
        Preguntas aleatorias de un banco de {questions.length}. Recibirás la corrección y una breve
        explicación después de cada respuesta.
      </p>

      {record && (
        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-border bg-surface p-4">
          <Trophy className="size-5 text-accent" aria-hidden="true" />
          <p className="text-sm text-fg-2">
            Tu mejor resultado:{" "}
            <strong className="text-fg">
              {record.best} de {record.total}
            </strong>{" "}
            · {record.attempts} {record.attempts === 1 ? "intento" : "intentos"}
          </p>
        </div>
      )}

      <div className="mt-8 space-y-6 rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-6">
        <fieldset>
          <legend className="mb-2.5 font-medium text-fg">Número de preguntas</legend>
          <div className="flex flex-wrap gap-2">
            {[5, 10, 20].map((n) => (
              <label
                key={n}
                className={`cursor-pointer rounded-xl border px-4 py-2 text-sm font-medium transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-[var(--focus)] ${
                  count === n
                    ? "border-accent bg-accent-soft text-accent-strong"
                    : "border-border text-fg-2 hover:border-border-strong"
                }`}
              >
                <input
                  type="radio"
                  name="count"
                  value={n}
                  checked={count === n}
                  onChange={() => setCount(n)}
                  className="sr-only"
                />
                {n}
              </label>
            ))}
          </div>
        </fieldset>
        <div>
          <label htmlFor="module" className="mb-2.5 block font-medium text-fg">
            Temas
          </label>
          <select
            id="module"
            value={module}
            onChange={(event) => setModule(event.target.value)}
            className="h-11 w-full rounded-xl border border-border-strong bg-bg px-3 text-fg sm:w-auto"
          >
            <option value="todos">Todo el temario</option>
            {moduleOptions.map((m) => (
              <option key={m.slug} value={m.slug}>
                {m.number}. {m.title}
              </option>
            ))}
          </select>
          {available < count && (
            <p className="mt-2 text-sm text-fg-3">
              Este bloque tiene {available} preguntas; el test incluirá todas.
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={() => onStart(count, module)}
          className="inline-flex h-12 items-center gap-2 rounded-xl bg-accent px-6 font-semibold text-accent-contrast transition-colors hover:bg-accent-strong"
        >
          Empezar el test
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

function Playing({
  items,
  onFinish,
}: {
  items: Question[];
  onFinish: (answers: Answer[]) => void;
}) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const question = items[index];
  const isLast = index === items.length - 1;
  const correctSoFar = answers.filter((a) => a.selected === a.question.answer).length;

  const advance = useCallback(() => {
    if (selected === null) return;
    if (!checked) {
      setChecked(true);
      setAnswers((prev) => [...prev, { question, selected }]);
      return;
    }
    if (isLast) {
      onFinish(answers);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setChecked(false);
  }, [selected, checked, isLast, question, answers, onFinish]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.target as HTMLElement).tagName === "SELECT") return;
      const n = Number(event.key);
      if (!checked && n >= 1 && n <= question.options.length) setSelected(n - 1);
      if (
        event.key === "Enter" &&
        selected !== null &&
        (event.target as HTMLElement).tagName !== "BUTTON"
      ) {
        event.preventDefault();
        advance();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [advance, checked, question, selected]);

  return (
    <div>
      <div className="flex items-center justify-between text-sm text-fg-3">
        <span>
          Pregunta <strong className="text-fg">{index + 1}</strong> de {items.length}
        </span>
        <span>{moduleTitle(question.module)}</span>
      </div>
      <div
        className="mt-3 h-1.5 overflow-hidden rounded-full bg-surface-3"
        role="progressbar"
        aria-label="Progreso del test"
        aria-valuemin={0}
        aria-valuemax={items.length}
        aria-valuenow={index + (checked ? 1 : 0)}
      >
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-300"
          style={{ width: `${((index + (checked ? 1 : 0)) / items.length) * 100}%` }}
        />
      </div>

      <h1 className="mt-8 font-serif text-2xl leading-snug font-semibold text-fg sm:text-[1.75rem]">
        {question.question}
      </h1>

      <div role="radiogroup" aria-label="Opciones de respuesta" className="mt-6 space-y-2.5">
        {question.options.map((option, i) => {
          const isSelected = selected === i;
          const isCorrect = i === question.answer;
          let style = "border-border bg-surface hover:border-border-strong";
          if (checked && isCorrect) style = "border-success bg-success-soft";
          else if (checked && isSelected) style = "border-danger bg-danger-soft";
          else if (isSelected) style = "border-accent bg-accent-soft";
          return (
            // biome-ignore lint/a11y/useSemanticElements: opción de respuesta con role="radio" y teclado propio
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={checked}
              onClick={() => setSelected(i)}
              className={`flex w-full items-start gap-3.5 rounded-xl border-2 p-4 text-left transition-colors disabled:cursor-default ${style}`}
            >
              <span
                className={`flex size-7 shrink-0 items-center justify-center rounded-lg text-sm font-semibold ${
                  checked && isCorrect
                    ? "bg-success text-white dark:text-black"
                    : checked && isSelected
                      ? "bg-danger text-white dark:text-black"
                      : isSelected
                        ? "bg-accent text-accent-contrast"
                        : "bg-surface-2 text-fg-2"
                }`}
              >
                {checked && isCorrect ? (
                  <Check className="size-4" aria-hidden="true" />
                ) : checked && isSelected ? (
                  <X className="size-4" aria-hidden="true" />
                ) : (
                  letters[i]
                )}
              </span>
              <span className="pt-0.5 leading-relaxed text-fg">{option}</span>
            </button>
          );
        })}
      </div>

      <div aria-live="polite">
        {checked && (
          <div
            className={`mt-5 rounded-xl p-4 leading-relaxed ${selected === question.answer ? "bg-success-soft" : "bg-danger-soft"}`}
          >
            <p
              className={`font-semibold ${selected === question.answer ? "text-success" : "text-danger"}`}
            >
              {selected === question.answer
                ? "Correcto"
                : `Incorrecto. La respuesta correcta es la ${letters[question.answer]}.`}
            </p>
            <p className="mt-1 text-[0.97rem] text-fg-2">{question.explanation}</p>
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-sm text-fg-3">
          {answers.length > 0 && (
            <>
              Aciertos: <strong className="text-fg">{correctSoFar}</strong> de {answers.length}
            </>
          )}
        </p>
        <button
          type="button"
          onClick={advance}
          disabled={selected === null}
          className="inline-flex h-11 items-center gap-2 rounded-xl bg-accent px-5 font-semibold text-accent-contrast transition-colors hover:bg-accent-strong disabled:cursor-not-allowed disabled:opacity-40"
        >
          {!checked ? "Comprobar" : isLast ? "Ver resultados" : "Siguiente"}
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
      </div>
      <p className="mt-4 hidden text-xs text-fg-3 sm:block">
        Atajos: teclas 1-{question.options.length} para elegir y Intro para continuar.
      </p>
    </div>
  );
}

function Results({
  answers,
  onRetry,
  onRetryMistakes,
  onSetup,
}: {
  answers: Answer[];
  onRetry: () => void;
  onRetryMistakes: () => void;
  onSetup: () => void;
}) {
  const score = answers.filter((a) => a.selected === a.question.answer).length;
  const ratio = score / answers.length;
  const mistakes = answers.length - score;
  const message =
    ratio >= 0.8
      ? "Excelente resultado."
      : ratio >= 0.5
        ? "Buen trabajo; repasa los temas en los que has fallado."
        : "Te conviene repasar el temario antes de volver a intentarlo.";
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const byModule = [...new Set(answers.map((a) => a.question.module))].map((slug) => {
    const items = answers.filter((a) => a.question.module === slug);
    return {
      slug,
      total: items.length,
      correct: items.filter((a) => a.selected === a.question.answer).length,
    };
  });

  return (
    <div>
      <h1 className="font-serif text-[2.3rem] font-semibold tracking-tight text-fg">Resultados</h1>
      <div className="mt-6 flex flex-col items-center gap-6 rounded-2xl border border-border bg-surface p-6 shadow-sm sm:flex-row">
        <svg
          width="128"
          height="128"
          viewBox="0 0 128 128"
          role="img"
          aria-label={`${score} de ${answers.length} aciertos`}
        >
          <circle
            cx="64"
            cy="64"
            r={radius}
            fill="none"
            stroke="var(--surface-3)"
            strokeWidth="10"
          />
          <circle
            cx="64"
            cy="64"
            r={radius}
            fill="none"
            stroke={ratio >= 0.5 ? "var(--accent)" : "var(--danger)"}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - ratio)}
            transform="rotate(-90 64 64)"
          />
          <text x="64" y="62" textAnchor="middle" fontSize="28" fontWeight="700" fill="var(--text)">
            {score}/{answers.length}
          </text>
          <text x="64" y="84" textAnchor="middle" fontSize="13" fill="var(--text-3)">
            {formatPercent(ratio)}
          </text>
        </svg>
        <div className="flex-1 text-center sm:text-left">
          <p className="text-xl font-semibold text-fg">{message}</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
            <button
              type="button"
              onClick={onRetry}
              className="inline-flex h-10 items-center gap-2 rounded-xl bg-accent px-4 text-sm font-semibold text-accent-contrast hover:bg-accent-strong"
            >
              <RotateCcw className="size-4" aria-hidden="true" />
              Nuevo test
            </button>
            {mistakes > 0 && (
              <button
                type="button"
                onClick={onRetryMistakes}
                className="inline-flex h-10 items-center rounded-xl border border-border-strong px-4 text-sm font-medium text-fg hover:border-accent"
              >
                Repetir las {mistakes} falladas
              </button>
            )}
            <button
              type="button"
              onClick={onSetup}
              className="inline-flex h-10 items-center rounded-xl px-3 text-sm font-medium text-fg-2 hover:text-fg"
            >
              Cambiar opciones
            </button>
          </div>
        </div>
      </div>

      {byModule.length > 1 && (
        <section className="mt-8">
          <h2 className="font-serif text-xl font-semibold text-fg">Por bloques</h2>
          <ul className="mt-3 space-y-2">
            {byModule.map((m) => (
              <li key={m.slug} className="flex items-center gap-3 text-sm">
                <span className="w-48 shrink-0 truncate text-fg-2">{moduleTitle(m.slug)}</span>
                <span className="h-2 flex-1 overflow-hidden rounded-full bg-surface-3">
                  <span
                    className="block h-full rounded-full bg-accent"
                    style={{ width: `${(m.correct / m.total) * 100}%` }}
                  />
                </span>
                <span className="w-12 text-right text-fg-3 tabular-nums">
                  {m.correct}/{m.total}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-10">
        <h2 className="font-serif text-xl font-semibold text-fg">Revisión de las respuestas</h2>
        <ol className="mt-4 space-y-3">
          {answers.map((a, i) => {
            const ok = a.selected === a.question.answer;
            const topic = modules.find((m) => m.slug === a.question.module)?.topics[0];
            return (
              <li key={a.question.id} className="rounded-xl border border-border bg-surface p-4">
                <p className="flex items-start gap-2.5 font-medium text-fg">
                  <span
                    className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${ok ? "bg-success" : "bg-danger"}`}
                  >
                    {ok ? (
                      <Check
                        className="size-3 text-white dark:text-black"
                        strokeWidth={3}
                        aria-hidden="true"
                      />
                    ) : (
                      <X
                        className="size-3 text-white dark:text-black"
                        strokeWidth={3}
                        aria-hidden="true"
                      />
                    )}
                  </span>
                  <span>
                    <span className="sr-only">{ok ? "Acierto. " : "Fallo. "}</span>
                    {i + 1}. {a.question.question}
                  </span>
                </p>
                <div className="mt-2 space-y-1 pl-7.5 text-sm leading-relaxed">
                  {!ok && (
                    <p className="text-danger">Tu respuesta: {a.question.options[a.selected]}</p>
                  )}
                  <p className="text-success">Correcta: {a.question.options[a.question.answer]}</p>
                  <p className="text-fg-2">{a.question.explanation}</p>
                  {!ok && topic && (
                    <Link
                      href={`/${a.question.module}/${topic.slug}`}
                      className="inline-flex items-center gap-1 font-medium text-accent-strong underline-offset-4 hover:underline"
                    >
                      Repasar {moduleTitle(a.question.module).toLowerCase()}
                      <ArrowRight className="size-3.5" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}

export function Quiz() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [items, setItems] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [settings, setSettings] = useState({ count: 10, module: "todos" });
  const [round, setRound] = useState(0);

  const start = (count: number, module: string, pool?: Question[]) => {
    const source =
      pool ?? (module === "todos" ? questions : questions.filter((q) => q.module === module));
    setSettings({ count, module });
    setItems(shuffle(source).slice(0, count).map(shuffleOptions));
    setAnswers([]);
    setRound((r) => r + 1);
    setPhase("playing");
    window.scrollTo({ top: 0 });
  };

  if (phase === "setup") return <Setup onStart={start} />;
  if (phase === "playing")
    return (
      <Playing
        key={round}
        items={items}
        onFinish={(result) => {
          setAnswers(result);
          saveQuizResult(
            result.filter((a) => a.selected === a.question.answer).length,
            result.length,
          );
          setPhase("finished");
          window.scrollTo({ top: 0 });
        }}
      />
    );
  return (
    <Results
      answers={answers}
      onRetry={() => start(settings.count, settings.module)}
      onRetryMistakes={() => {
        const failed = answers
          .filter((a) => a.selected !== a.question.answer)
          .map((a) => a.question);
        start(failed.length, settings.module, failed);
      }}
      onSetup={() => setPhase("setup")}
    />
  );
}
