import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { Callout } from "@/components/content/Callout";
import { ClinicalCase } from "@/components/content/ClinicalCase";
import { Example } from "@/components/content/Example";
import { StudyDesign } from "@/components/content/StudyDesign";
import { Term, Terms } from "@/components/content/Terms";
import { AssumptionsVisualizer } from "@/components/sim/AssumptionsVisualizer";
import { BoxPlotBuilder } from "@/components/sim/BoxPlotBuilder";
import { CoinSimulator } from "@/components/sim/CoinSimulator";
import { ConfidenceIntervalSimulator } from "@/components/sim/ConfidenceIntervalSimulator";
import { CorrelationExplorer } from "@/components/sim/CorrelationExplorer";
import { DiagnosticCalculator } from "@/components/sim/DiagnosticCalculator";
import { DifferencingSimulator } from "@/components/sim/DifferencingSimulator";
import { DiscreteExplorer } from "@/components/sim/DiscreteExplorer";
import { FollowUpDiagram } from "@/components/sim/FollowUpDiagram";
import { ForestPlot } from "@/components/sim/ForestPlot";
import { KaplanMeierSimulator } from "@/components/sim/KaplanMeierSimulator";
import { MeanMedianVisualizer } from "@/components/sim/MeanMedianVisualizer";
import { NormalExplorer } from "@/components/sim/NormalExplorer";
import { PowerSimulator } from "@/components/sim/PowerSimulator";
import { RegressionExplorer } from "@/components/sim/RegressionExplorer";
import { SeriesDecomposition } from "@/components/sim/SeriesDecomposition";
import { TestSelector } from "@/components/sim/TestSelector";
import { VariableTypes } from "@/components/sim/VariableTypes";

const components: MDXComponents = {
  Callout,
  ClinicalCase,
  Example,
  StudyDesign,
  Term,
  Terms,
  AssumptionsVisualizer,
  BoxPlotBuilder,
  CoinSimulator,
  ConfidenceIntervalSimulator,
  CorrelationExplorer,
  DiagnosticCalculator,
  DifferencingSimulator,
  DiscreteExplorer,
  FollowUpDiagram,
  ForestPlot,
  KaplanMeierSimulator,
  MeanMedianVisualizer,
  NormalExplorer,
  PowerSimulator,
  RegressionExplorer,
  SeriesDecomposition,
  TestSelector,
  VariableTypes,
  a: ({ href = "", ...props }) =>
    href.startsWith("/") ? (
      <Link href={href} {...props} />
    ) : (
      <a href={href} rel="noopener" {...props} />
    ),
  table: (props) => (
    <div className="not-prose my-6 overflow-x-auto rounded-xl border border-border">
      <table className="prose-table" {...props} />
    </div>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
