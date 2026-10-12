import type { Metadata } from "next";
import { Quiz } from "@/components/quiz/Quiz";

export const metadata: Metadata = {
  title: "Test de conocimientos",
  description:
    "Autoevaluación con preguntas aleatorias de todo el temario, con corrección inmediata y explicaciones.",
};

export default function TestPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
      <Quiz />
    </div>
  );
}
