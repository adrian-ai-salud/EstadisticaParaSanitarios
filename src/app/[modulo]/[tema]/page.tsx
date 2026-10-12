import { ChevronRight, MousePointerClick } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CompleteButton } from "@/components/layout/CompleteButton";
import { ModuleIcon } from "@/components/layout/ModuleIcon";
import { TableOfContents } from "@/components/layout/TableOfContents";
import { TopicPager } from "@/components/layout/TopicPager";
import { findTopic, topicKey, topicList } from "@/content/temario";

interface Params {
  modulo: string;
  tema: string;
}

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return topicList.map(({ module, topic }) => ({ modulo: module.slug, tema: topic.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { modulo, tema } = await params;
  const ref = findTopic(modulo, tema);
  if (!ref) return {};
  return {
    title: ref.topic.title,
    description: ref.topic.description,
    alternates: { canonical: `${ref.href}` },
  };
}

export default async function TopicPage({ params }: { params: Promise<Params> }) {
  const { modulo, tema } = await params;
  const ref = findTopic(modulo, tema);
  if (!ref) notFound();
  const { default: Content } = await import(`@/content/${modulo}/${tema}.mdx`);
  const key = topicKey(ref);
  const prev = topicList[ref.index - 1];
  const next = topicList[ref.index + 1];

  return (
    <div className="flex gap-12 px-4 py-8 sm:px-6 sm:py-10 lg:px-10 xl:px-12">
      <article id="articulo" className="mx-auto w-full max-w-3xl min-w-0">
        <nav aria-label="Ruta" className="mb-6 flex items-center gap-1.5 text-sm text-fg-3">
          <Link href="/" className="hover:text-fg-2">
            Inicio
          </Link>
          <ChevronRight className="size-3.5" aria-hidden="true" />
          <span className="flex items-center gap-1.5">
            <ModuleIcon name={ref.module.icon} className="size-3.5" />
            {ref.module.number}. {ref.module.title}
          </span>
        </nav>

        <header>
          <h1 className="font-serif text-[2.1rem] leading-[1.15] font-semibold tracking-tight text-fg sm:text-[2.6rem]">
            {ref.topic.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-fg-2">{ref.topic.description}</p>
          <div className="no-print mt-6 flex flex-wrap items-center gap-3">
            <CompleteButton topicKey={key} />
            {ref.topic.interactive && (
              <span className="inline-flex h-9 items-center gap-2 rounded-xl bg-surface-2 px-3 text-sm text-fg-2">
                <MousePointerClick className="size-4 text-accent" aria-hidden="true" />
                {ref.topic.interactive}
              </span>
            )}
          </div>
        </header>

        <div className="prose-content mt-10">
          <Content />
        </div>

        <div className="no-print mt-14 flex flex-col items-start gap-4 rounded-2xl border border-border bg-surface-2 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium text-fg">¿Has terminado este tema?</p>
            <p className="text-sm text-fg-3">Tu progreso se guarda solo en este navegador.</p>
          </div>
          <CompleteButton topicKey={key} size="lg" />
        </div>

        <TopicPager prev={prev} next={next} />
      </article>

      <aside
        aria-label="Índice de la página"
        className="no-print sticky top-24 hidden h-fit w-52 shrink-0 xl:block"
      >
        <TableOfContents />
      </aside>
    </div>
  );
}
