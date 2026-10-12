import {
  Activity,
  ChartColumn,
  ChartSpline,
  FlaskConical,
  Hourglass,
  type LucideProps,
  ScanSearch,
  Sigma,
  Waypoints,
} from "lucide-react";
import type { ModuleIcon as ModuleIconName } from "@/content/temario";

const icons = {
  foundations: Sigma,
  distributions: ChartSpline,
  inference: Waypoints,
  tests: FlaskConical,
  models: ChartColumn,
  survival: Hourglass,
  timeseries: Activity,
  diagnostic: ScanSearch,
} satisfies Record<ModuleIconName, unknown>;

export function ModuleIcon({ name, ...props }: { name: ModuleIconName } & LucideProps) {
  const Icon = icons[name];
  return <Icon aria-hidden="true" {...props} />;
}
