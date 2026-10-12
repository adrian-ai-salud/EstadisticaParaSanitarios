export type ModuleIcon =
  | "foundations"
  | "distributions"
  | "inference"
  | "tests"
  | "models"
  | "survival"
  | "timeseries"
  | "diagnostic";

export interface Topic {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  interactive?: string;
}

export interface Module {
  slug: string;
  number: number;
  title: string;
  description: string;
  icon: ModuleIcon;
  topics: Topic[];
}

export const modules: Module[] = [
  {
    slug: "fundamentos",
    number: 1,
    title: "Fundamentos",
    description:
      "Vocabulario básico, tipos de variables, probabilidad, diseños de estudio, sesgos y muestreo.",
    icon: "foundations",
    topics: [
      {
        slug: "definiciones-basicas",
        title: "Definiciones básicas",
        description:
          "Estadística descriptiva e inferencial, población y muestra, tendencia central, dispersión y frecuencias.",
        keywords: [
          "media",
          "mediana",
          "moda",
          "varianza",
          "desviación típica",
          "rango",
          "población",
        ],
      },
      {
        slug: "tipos-de-variables",
        title: "Tipos de variables",
        description:
          "Variables cualitativas (nominales y ordinales) y cuantitativas (discretas y continuas).",
        keywords: ["nominal", "ordinal", "discreta", "continua", "categórica", "numérica"],
        interactive: "Visualizador de tipos de variables",
      },
      {
        slug: "box-plot",
        title: "Diagrama de caja",
        description:
          "Mediana, cuartiles, rango intercuartílico, bigotes y valores atípicos en un solo gráfico.",
        keywords: ["box plot", "cuartil", "RIC", "atípicos", "outliers", "bigotes"],
        interactive: "Constructor de diagramas de caja",
      },
      {
        slug: "analisis-bivariante",
        title: "Análisis bivariante",
        description:
          "Diagrama de dispersión, correlación de Pearson, tablas de contingencia y chi-cuadrado.",
        keywords: ["correlación", "Pearson", "dispersión", "chi-cuadrado", "contingencia"],
        interactive: "Explorador de correlación",
      },
      {
        slug: "introduccion-probabilidad",
        title: "Introducción a la probabilidad",
        description:
          "Experimento aleatorio, espacio muestral, sucesos, teorema de Bayes y ley de los grandes números.",
        keywords: ["probabilidad", "Bayes", "suceso", "grandes números", "azar"],
        interactive: "Simulador de lanzamientos",
      },
      {
        slug: "tipos-estudios-epidemiologicos",
        title: "Tipos de estudios epidemiológicos",
        description:
          "Cohortes, casos y controles, transversales y ensayos clínicos aleatorizados: cuándo usar cada uno.",
        keywords: ["cohortes", "casos y controles", "transversal", "ensayo clínico", "ECA"],
      },
      {
        slug: "sesgos-investigacion",
        title: "Sesgos en investigación",
        description:
          "Sesgo de selección, de información y confusión: cómo reconocerlos y reducirlos.",
        keywords: ["sesgo", "confusión", "selección", "memoria", "observador", "cegamiento"],
      },
      {
        slug: "muestreo-inferencia",
        title: "Muestreo e inferencia",
        description:
          "Muestreo probabilístico y no probabilístico, y factores que determinan el tamaño muestral.",
        keywords: ["muestreo", "aleatorio", "estratificado", "conglomerados", "tamaño muestral"],
      },
    ],
  },
  {
    slug: "distribuciones",
    number: 2,
    title: "Distribuciones de probabilidad",
    description: "La curva normal y las distribuciones discretas más usadas en salud.",
    icon: "distributions",
    topics: [
      {
        slug: "distribucion-normal",
        title: "Distribución normal",
        description: "Propiedades de la campana de Gauss, puntuación Z y regla 68-95-99,7.",
        keywords: ["normal", "Gauss", "campana", "puntuación Z", "percentil"],
        interactive: "Explorador de la curva normal",
      },
      {
        slug: "distribuciones-discretas",
        title: "Distribuciones discretas",
        description:
          "Distribución binomial y de Poisson para contar éxitos y eventos poco frecuentes.",
        keywords: ["binomial", "Poisson", "discreta", "éxitos", "eventos raros"],
        interactive: "Simulador binomial y de Poisson",
      },
    ],
  },
  {
    slug: "inferencia",
    number: 3,
    title: "Inferencia estadística",
    description: "Cómo pasar de la muestra a la población con intervalos y contrastes.",
    icon: "inference",
    topics: [
      {
        slug: "intervalos-de-confianza",
        title: "Intervalos de confianza",
        description:
          "Qué significa el nivel de confianza y de qué depende la amplitud del intervalo.",
        keywords: ["intervalo de confianza", "IC 95%", "precisión", "error estándar"],
        interactive: "Simulador de intervalos de confianza",
      },
      {
        slug: "contraste-de-hipotesis",
        title: "Contraste de hipótesis",
        description: "Hipótesis nula y alternativa, valor p, errores de tipo I y II, y potencia.",
        keywords: ["hipótesis nula", "valor p", "significación", "error tipo I", "potencia"],
        interactive: "Simulador de potencia estadística",
      },
    ],
  },
  {
    slug: "pruebas",
    number: 4,
    title: "Pruebas estadísticas",
    description: "Pruebas paramétricas y no paramétricas, y cómo elegir la adecuada.",
    icon: "tests",
    topics: [
      {
        slug: "elegir-prueba",
        title: "¿Qué prueba uso?",
        description:
          "Asistente paso a paso para elegir la prueba según el tipo de variable y el diseño.",
        keywords: ["elegir prueba", "selector", "algoritmo", "árbol de decisión"],
        interactive: "Asistente de elección de prueba",
      },
      {
        slug: "pruebas-parametricas",
        title: "Pruebas paramétricas",
        description: "t de Student, ANOVA, supuestos de normalidad y homocedasticidad.",
        keywords: ["t de Student", "ANOVA", "normalidad", "Shapiro-Wilk", "Levene", "post-hoc"],
        interactive: "Visualizador de supuestos",
      },
      {
        slug: "pruebas-no-parametricas",
        title: "Pruebas no paramétricas",
        description: "Mann-Whitney, Wilcoxon, Kruskal-Wallis, Friedman y Spearman.",
        keywords: ["Mann-Whitney", "Wilcoxon", "Kruskal-Wallis", "Friedman", "Spearman", "rangos"],
        interactive: "Media frente a mediana",
      },
    ],
  },
  {
    slug: "modelos",
    number: 5,
    title: "Modelos predictivos",
    description: "Regresión lineal y modelos de clasificación aplicados a datos clínicos.",
    icon: "models",
    topics: [
      {
        slug: "regresion-lineal-simple",
        title: "Regresión lineal simple",
        description: "La recta de regresión, sus coeficientes, residuos y supuestos.",
        keywords: ["regresión", "pendiente", "intercepto", "residuos", "mínimos cuadrados"],
        interactive: "Explorador de regresión",
      },
      {
        slug: "regresion-lineal-multiple",
        title: "Regresión lineal múltiple",
        description:
          "Varios predictores a la vez, supuestos, multicolinealidad y bondad de ajuste.",
        keywords: ["regresión múltiple", "R²", "VIF", "multicolinealidad", "RMSE"],
      },
      {
        slug: "modelos-de-clasificacion",
        title: "Modelos de clasificación",
        description:
          "Regresión logística, análisis discriminante y random forest, con sus métricas de evaluación.",
        keywords: [
          "regresión logística",
          "LDA",
          "random forest",
          "machine learning",
          "F1",
          "overfitting",
        ],
      },
    ],
  },
  {
    slug: "supervivencia",
    number: 6,
    title: "Análisis de supervivencia",
    description: "Tiempo hasta el evento, censura, Kaplan-Meier y modelo de Cox.",
    icon: "survival",
    topics: [
      {
        slug: "conceptos-clave",
        title: "Conceptos clave",
        description: "Tiempo hasta el evento, evento de interés y tipos de censura.",
        keywords: ["censura", "tiempo hasta el evento", "seguimiento"],
        interactive: "Diagrama de seguimiento",
      },
      {
        slug: "curvas-de-kaplan-meier",
        title: "Curvas de Kaplan-Meier",
        description:
          "Cómo se construye la curva, cómo se lee y cómo se comparan grupos con log-rank.",
        keywords: ["Kaplan-Meier", "log-rank", "mediana de supervivencia", "en riesgo"],
        interactive: "Generador de curvas de Kaplan-Meier",
      },
      {
        slug: "modelo-de-cox",
        title: "Modelo de Cox",
        description: "Riesgos proporcionales y cómo interpretar un hazard ratio.",
        keywords: ["Cox", "hazard ratio", "HR", "riesgos proporcionales", "forest plot"],
        interactive: "Forest plot interactivo",
      },
    ],
  },
  {
    slug: "series-temporales",
    number: 7,
    title: "Series temporales",
    description:
      "Tendencia, estacionalidad y modelos ARIMA para datos que evolucionan en el tiempo.",
    icon: "timeseries",
    topics: [
      {
        slug: "componentes",
        title: "Componentes de una serie",
        description: "Tendencia, estacionalidad, ciclos y ruido.",
        keywords: ["tendencia", "estacionalidad", "ruido", "ciclo", "descomposición"],
        interactive: "Generador de series temporales",
      },
      {
        slug: "modelos-arima",
        title: "Modelos ARIMA",
        description: "Estacionariedad, diferenciación y significado de los parámetros p, d y q.",
        keywords: [
          "ARIMA",
          "estacionariedad",
          "Dickey-Fuller",
          "diferenciación",
          "autocorrelación",
        ],
        interactive: "Diferenciación de una serie",
      },
    ],
  },
  {
    slug: "pruebas-diagnosticas",
    number: 8,
    title: "Pruebas diagnósticas",
    description: "Sensibilidad, especificidad, valores predictivos y razones de verosimilitud.",
    icon: "diagnostic",
    topics: [
      {
        slug: "definiciones-aplicaciones",
        title: "Validez de una prueba diagnóstica",
        description:
          "Tabla 2×2, sensibilidad, especificidad, valores predictivos y efecto de la prevalencia.",
        keywords: [
          "sensibilidad",
          "especificidad",
          "VPP",
          "VPN",
          "prevalencia",
          "razón de verosimilitud",
          "2x2",
        ],
        interactive: "Calculadora de pruebas diagnósticas",
      },
    ],
  },
];

export interface TopicRef {
  module: Module;
  topic: Topic;
  href: string;
  index: number;
}

export const topicList: TopicRef[] = modules
  .flatMap((module) =>
    module.topics.map((topic) => ({
      module,
      topic,
      href: `/${module.slug}/${topic.slug}`,
      index: 0,
    })),
  )
  .map((ref, index) => ({ ...ref, index }));

export function findTopic(moduleSlug: string, topicSlug: string): TopicRef | undefined {
  return topicList.find((ref) => ref.module.slug === moduleSlug && ref.topic.slug === topicSlug);
}

export function topicKey(ref: Pick<TopicRef, "module" | "topic">): string {
  return `${ref.module.slug}/${ref.topic.slug}`;
}
