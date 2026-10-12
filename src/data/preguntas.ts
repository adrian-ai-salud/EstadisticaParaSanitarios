export interface Question {
  id: number;
  module: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export const questions: Question[] = [
  {
    id: 1,
    module: "modelos",
    question: "¿Qué predice principalmente la regresión logística?",
    options: [
      "Una variable numérica continua, como la tensión arterial",
      "La probabilidad de un resultado con dos categorías, como enfermo o sano",
      "El número de grupos o conglomerados de un conjunto de datos",
      "La relación lineal entre dos variables numéricas",
    ],
    answer: 1,
    explanation:
      "La regresión logística modela la probabilidad de un resultado dicotómico. Para resultados continuos se usa la regresión lineal.",
  },
  {
    id: 2,
    module: "fundamentos",
    question: "En un ensayo clínico, ¿qué es el grupo control?",
    options: [
      "El grupo que recibe el tratamiento nuevo",
      "El equipo de investigadores que supervisa el estudio",
      "El grupo que recibe placebo o el tratamiento habitual",
      "El grupo de pacientes con la enfermedad más avanzada",
    ],
    answer: 2,
    explanation:
      "El grupo control sirve de comparación: recibe placebo o el tratamiento habitual para estimar el efecto atribuible a la intervención.",
  },
  {
    id: 3,
    module: "inferencia",
    question: "¿Qué representa el valor p en un contraste de hipótesis?",
    options: [
      "La probabilidad de que la hipótesis nula sea cierta",
      "La probabilidad de observar unos datos como los obtenidos, o más extremos, si la hipótesis nula fuera cierta",
      "La probabilidad de que la hipótesis alternativa sea cierta",
      "El tamaño del efecto del tratamiento",
    ],
    answer: 1,
    explanation:
      "El valor p se calcula suponiendo que H₀ es cierta. No es la probabilidad de que H₀ sea cierta ni mide la magnitud del efecto.",
  },
  {
    id: 4,
    module: "modelos",
    question: "El análisis discriminante lineal (LDA) es más útil cuando…",
    options: [
      "Se quiere predecir un valor numérico, como el colesterol",
      "Se busca la combinación de variables que mejor separa dos o más grupos ya definidos",
      "Las relaciones entre variables son claramente no lineales",
      "No se sabe a qué grupo pertenece cada individuo y se quieren descubrir los grupos",
    ],
    answer: 1,
    explanation:
      "LDA es un método supervisado: parte de grupos conocidos y busca las combinaciones lineales que mejor los separan. Descubrir grupos desconocidos es tarea del análisis de conglomerados.",
  },
  {
    id: 5,
    module: "modelos",
    question: "Una de las principales ventajas de random forest es que…",
    options: [
      "Es muy fácil de interpretar mediante una fórmula sencilla",
      "Es poco propenso al sobreajuste y suele tener una alta capacidad predictiva",
      "Necesita muy pocos datos para entrenarse",
      "Solo funciona con variables categóricas",
    ],
    answer: 1,
    explanation:
      "Al promediar muchos árboles entrenados con submuestras distintas, random forest reduce el sobreajuste de un árbol individual. A cambio, es menos interpretable.",
  },
  {
    id: 6,
    module: "fundamentos",
    question: "Si la media de unos datos es muy diferente de la mediana, ¿qué indica?",
    options: [
      "Que la distribución es perfectamente simétrica",
      "Que no hay variabilidad en los datos",
      "Que la distribución es asimétrica o tiene valores atípicos",
      "Que la media se ha calculado mal",
    ],
    answer: 2,
    explanation:
      "La media se desplaza hacia la cola larga o hacia los valores extremos; la mediana apenas se mueve. Una gran diferencia entre ambas indica asimetría.",
  },
  {
    id: 7,
    module: "modelos",
    question: "¿Qué mide el R² en un modelo de regresión lineal?",
    options: [
      "La significación estadística del modelo",
      "La proporción de la variabilidad de la variable dependiente que explica el modelo",
      "El error medio de las predicciones",
      "La correlación entre dos variables independientes",
    ],
    answer: 1,
    explanation:
      "Un R² de 0,70 indica que el modelo explica el 70 % de la variabilidad del resultado.",
  },
  {
    id: 8,
    module: "fundamentos",
    question: "En epidemiología, ¿qué es la incidencia de una enfermedad?",
    options: [
      "El número total de casos existentes en un momento dado",
      "La proporción de la población que tiene la enfermedad en un momento dado",
      "Los casos nuevos que aparecen en una población durante un periodo determinado",
      "La gravedad de la enfermedad en la población",
    ],
    answer: 2,
    explanation:
      "La incidencia cuenta casos nuevos en un periodo y mide el riesgo de enfermar. Se estima con estudios de cohortes.",
  },
  {
    id: 9,
    module: "fundamentos",
    question: "¿Qué es la prevalencia de una enfermedad?",
    options: [
      "El número de casos nuevos durante un año",
      "La proporción de personas que tienen la enfermedad (casos nuevos y antiguos) en un momento dado",
      "La tasa de mortalidad de la enfermedad",
      "El riesgo de desarrollar la enfermedad en el futuro",
    ],
    answer: 1,
    explanation:
      "La prevalencia mide la carga de enfermedad en un momento dado e incluye casos nuevos y antiguos. Se estima con estudios transversales.",
  },
  {
    id: 10,
    module: "inferencia",
    question: "Un intervalo de confianza del 95 % para una media significa que…",
    options: [
      "Hay un 95 % de probabilidad de que la media real esté en ese intervalo concreto",
      "El 95 % de los datos de la muestra está dentro del intervalo",
      "Si se repitiera el estudio muchas veces, el 95 % de los intervalos calculados contendría la media real",
      "Hay un 5 % de probabilidad de que el estudio tenga errores",
    ],
    answer: 2,
    explanation:
      "El 95 % se refiere al procedimiento: a largo plazo, 95 de cada 100 intervalos construidos así contienen el valor real.",
  },
  {
    id: 11,
    module: "pruebas-diagnosticas",
    question: "En una prueba diagnóstica, la sensibilidad es…",
    options: [
      "La capacidad de identificar correctamente a quienes no tienen la enfermedad",
      "La capacidad de identificar correctamente a quienes tienen la enfermedad",
      "La exactitud global de la prueba",
      "La probabilidad de que un resultado positivo sea un verdadero positivo",
    ],
    answer: 1,
    explanation:
      "Sensibilidad = VP / (VP + FN): proporción de enfermos que dan positivo. La última opción describe el valor predictivo positivo.",
  },
  {
    id: 12,
    module: "pruebas-diagnosticas",
    question: "¿Qué es la especificidad de una prueba diagnóstica?",
    options: [
      "La capacidad de identificar correctamente a las personas sanas",
      "La capacidad de identificar correctamente a las personas enfermas",
      "La prevalencia de la enfermedad en la población estudiada",
      "La probabilidad de que un resultado negativo sea un falso negativo",
    ],
    answer: 0,
    explanation: "Especificidad = VN / (VN + FP): proporción de sanos que dan negativo.",
  },
  {
    id: 13,
    module: "modelos",
    question: "El sobreajuste (overfitting) ocurre cuando un modelo…",
    options: [
      "Es demasiado simple para captar la estructura de los datos",
      "Funciona muy bien con los datos de entrenamiento, pero mal con datos nuevos",
      "No consigue converger durante el entrenamiento",
      "Tiene un R² negativo",
    ],
    answer: 1,
    explanation:
      "El modelo ha aprendido el ruido de los datos de entrenamiento. Por eso se evalúa siempre con datos que no ha visto.",
  },
  {
    id: 14,
    module: "fundamentos",
    question: "¿Cuál de estas es una variable cualitativa nominal?",
    options: [
      "Estadio de un tumor (I, II, III, IV)",
      "Temperatura corporal en grados Celsius",
      "Grupo sanguíneo (A, B, AB, O)",
      "Dolor en una escala del 1 al 10",
    ],
    answer: 2,
    explanation:
      "Los grupos sanguíneos no tienen orden. El estadio y la escala de dolor son ordinales; la temperatura es cuantitativa continua.",
  },
  {
    id: 15,
    module: "fundamentos",
    question: "¿Cuál es un ejemplo de variable cualitativa ordinal?",
    options: [
      "Sexo",
      "Hipertensión (sí/no)",
      "Nivel socioeconómico (bajo, medio, alto)",
      "País de nacimiento",
    ],
    answer: 2,
    explanation:
      "Las categorías del nivel socioeconómico tienen un orden natural; las demás opciones son nominales.",
  },
  {
    id: 16,
    module: "inferencia",
    question: "Al comparar dos tratamientos, la hipótesis nula (H₀) suele afirmar que…",
    options: [
      "El tratamiento nuevo es superior al antiguo",
      "Hay una diferencia significativa entre los tratamientos",
      "No hay diferencia de eficacia entre los dos tratamientos",
      "El tratamiento antiguo es mejor que el nuevo",
    ],
    answer: 2,
    explanation:
      "H₀ es la hipótesis de no efecto o no diferencia; el contraste busca evidencia para rechazarla.",
  },
  {
    id: 17,
    module: "supervivencia",
    question: "En un estudio de supervivencia, ¿qué es un dato censurado?",
    options: [
      "Un dato eliminado por ser incorrecto",
      "Un paciente que termina su seguimiento (fin del estudio, pérdida o retirada) sin haber presentado el evento",
      "El evento final del estudio, como el fallecimiento",
      "Un dato fuera del rango normal",
    ],
    answer: 1,
    explanation:
      "Del paciente censurado solo sabemos que no tuvo el evento hasta su último contacto. Kaplan-Meier y Cox aprovechan esa información.",
  },
  {
    id: 18,
    module: "modelos",
    question: "El factor de inflación de la varianza (VIF) se usa para detectar…",
    options: [
      "La falta de linealidad",
      "Valores atípicos",
      "Multicolinealidad entre las variables predictoras",
      "Falta de normalidad de los residuos",
    ],
    answer: 2,
    explanation:
      "Un VIF por encima de 5-10 indica que un predictor está muy correlacionado con los demás.",
  },
  {
    id: 19,
    module: "modelos",
    question: "¿Cuál de estos NO es un supuesto de la regresión lineal múltiple?",
    options: [
      "Relación lineal entre predictores y resultado",
      "Normalidad de los residuos",
      "Ausencia de multicolinealidad grave",
      "Que todos los predictores sean categóricos",
    ],
    answer: 3,
    explanation:
      "Los predictores pueden ser cuantitativos o categóricos (codificados como variables ficticias).",
  },
  {
    id: 20,
    module: "fundamentos",
    question: "El sesgo de selección se produce cuando…",
    options: [
      "Los participantes no recuerdan bien sus exposiciones pasadas",
      "Otra variable modifica el efecto de una exposición sobre el resultado",
      "La forma de elegir o perder participantes hace que la muestra no represente a la población o que los grupos no sean comparables",
      "Los instrumentos de medida no están bien calibrados",
    ],
    answer: 2,
    explanation:
      "La primera opción es un sesgo de memoria y la última un sesgo de información; la segunda describe la modificación del efecto.",
  },
  {
    id: 21,
    module: "fundamentos",
    question: "¿Qué es un factor de confusión?",
    options: [
      "Una variable que solo influye en el resultado, no en la exposición",
      "Una variable asociada tanto a la exposición como al resultado, que no es un paso intermedio entre ambos",
      "Una variable que es consecuencia directa de la exposición",
      "Una variable que solo influye en la exposición, no en el resultado",
    ],
    answer: 1,
    explanation:
      "Ejemplo clásico: el tabaco confunde la asociación entre café e infarto porque se relaciona con ambos.",
  },
  {
    id: 22,
    module: "fundamentos",
    question:
      "¿Cuál es la diferencia principal entre un estudio de cohortes y uno de casos y controles?",
    options: [
      "Las cohortes son siempre prospectivas y los casos y controles siempre retrospectivos",
      "Las cohortes parten de la exposición y siguen hasta el resultado; los casos y controles parten del resultado y buscan la exposición",
      "Las cohortes se usan para enfermedades raras y los casos y controles para enfermedades frecuentes",
      "Las cohortes no tienen grupo de comparación",
    ],
    answer: 1,
    explanation:
      "Existen cohortes retrospectivas (históricas). Los estudios de casos y controles son los adecuados para enfermedades raras.",
  },
  {
    id: 23,
    module: "fundamentos",
    question: "¿Qué es la aleatorización en un ensayo clínico?",
    options: [
      "Seleccionar a los participantes de forma no probabilística",
      "Asignar al azar a los participantes al grupo de intervención o al de control",
      "Medir los resultados en momentos aleatorios",
      "Elegir la hipótesis nula al azar",
    ],
    answer: 1,
    explanation:
      "La asignación aleatoria reparte por igual entre los grupos los factores de confusión, conocidos y desconocidos.",
  },
  {
    id: 24,
    module: "fundamentos",
    question: "¿Qué gráfico es el más adecuado para ver la relación entre dos variables numéricas?",
    options: ["Diagrama de barras", "Histograma", "Diagrama de dispersión", "Gráfico de sectores"],
    answer: 2,
    explanation: "Cada punto del diagrama de dispersión es un individuo con sus dos valores.",
  },
  {
    id: 25,
    module: "fundamentos",
    question: "¿Qué es la mediana?",
    options: [
      "El valor que más se repite",
      "La suma de todos los valores dividida entre su número",
      "El valor central de los datos ordenados",
      "La diferencia entre el máximo y el mínimo",
    ],
    answer: 2,
    explanation: "Las otras opciones describen la moda, la media y el rango.",
  },
  {
    id: 26,
    module: "pruebas",
    question: "¿Cuándo se usa la t de Student para muestras independientes?",
    options: [
      "Para comparar las medias de dos mediciones de los mismos pacientes",
      "Para comparar dos proporciones",
      "Para comparar las medias de dos grupos de pacientes distintos",
      "Para comparar más de dos medias",
    ],
    answer: 2,
    explanation:
      "Para mediciones de los mismos pacientes se usa la t pareada; para proporciones, chi-cuadrado; para más de dos medias, ANOVA.",
  },
  {
    id: 27,
    module: "pruebas-diagnosticas",
    question: "¿Qué es un falso positivo en una prueba diagnóstica?",
    options: [
      "Un resultado negativo en una persona enferma",
      "Un resultado positivo en una persona sana",
      "Un resultado positivo en una persona enferma",
      "Un resultado negativo en una persona sana",
    ],
    answer: 1,
    explanation:
      "Las opciones restantes son, en orden, falso negativo, verdadero positivo y verdadero negativo.",
  },
  {
    id: 28,
    module: "fundamentos",
    question: "¿Qué es el rango intercuartílico (RIC)?",
    options: [
      "La diferencia entre el valor máximo y el mínimo",
      "La diferencia entre el tercer cuartil (Q3) y el primero (Q1)",
      "La suma de los cuartiles",
      "El rango que contiene el 95 % de los datos",
    ],
    answer: 1,
    explanation:
      "El RIC contiene el 50 % central de los datos y es la longitud de la caja en un diagrama de caja.",
  },
  {
    id: 29,
    module: "inferencia",
    question: "¿Qué error se comete al rechazar una hipótesis nula que en realidad es cierta?",
    options: [
      "Error de tipo II (β)",
      "Error de tipo I (α)",
      "Error de muestreo",
      "Error de medición",
    ],
    answer: 1,
    explanation: "Es un falso positivo: concluir que hay efecto cuando no lo hay.",
  },
  {
    id: 30,
    module: "inferencia",
    question: "¿Qué es la potencia estadística de un estudio?",
    options: [
      "La probabilidad de cometer un error de tipo I",
      "La probabilidad de cometer un error de tipo II",
      "La probabilidad de detectar un efecto cuando realmente existe",
      "El tamaño del efecto que se espera encontrar",
    ],
    answer: 2,
    explanation:
      "Potencia = 1 − β. Se suele exigir al menos un 80 % al calcular el tamaño de la muestra.",
  },
  {
    id: 31,
    module: "fundamentos",
    question: "¿Qué es un metaanálisis?",
    options: [
      "El análisis de los datos de un único ensayo clínico grande",
      "Un método estadístico que combina los resultados de varios estudios independientes para obtener una estimación global",
      "Una revisión de la literatura sin análisis estadístico",
      "Un tipo de estudio observacional prospectivo",
    ],
    answer: 1,
    explanation:
      "El metaanálisis suele formar parte de una revisión sistemática y pondera cada estudio según su precisión.",
  },
  {
    id: 32,
    module: "fundamentos",
    question: "¿Cuál de estas NO es una medida de tendencia central?",
    options: ["Media", "Mediana", "Moda", "Desviación típica"],
    answer: 3,
    explanation: "La desviación típica mide la dispersión de los datos, no su centro.",
  },
  {
    id: 33,
    module: "fundamentos",
    question: "¿Qué mide el coeficiente de correlación de Pearson?",
    options: [
      "Una relación causal entre dos variables",
      "La fuerza y la dirección de la asociación lineal entre dos variables",
      "La diferencia entre sus medias",
      "La probabilidad de que ocurran juntas",
    ],
    answer: 1,
    explanation: "Correlación no implica causalidad, y Pearson solo capta relaciones lineales.",
  },
  {
    id: 34,
    module: "fundamentos",
    question: "¿Qué es un diagrama de caja (box plot)?",
    options: [
      "Un gráfico con la frecuencia de cada categoría",
      "Un gráfico que resume una variable numérica con la mediana, los cuartiles y los valores atípicos",
      "Un gráfico de la relación entre dos variables categóricas",
      "Un gráfico de la evolución de una variable en el tiempo",
    ],
    answer: 1,
    explanation:
      "La caja va de Q1 a Q3, la línea interior es la mediana y los puntos aislados son atípicos.",
  },
  {
    id: 35,
    module: "pruebas",
    question: "¿Para qué se usa la prueba de chi-cuadrado (χ²)?",
    options: [
      "Para comparar las medias de dos grupos",
      "Para valorar la asociación entre dos variables cualitativas",
      "Para predecir un resultado numérico",
      "Para analizar la supervivencia",
    ],
    answer: 1,
    explanation:
      "Se aplica a tablas de contingencia. Si alguna frecuencia esperada es menor de 5, se usa la prueba exacta de Fisher.",
  },
  {
    id: 36,
    module: "distribuciones",
    question: "¿Qué es la distribución normal o de Gauss?",
    options: [
      "Una distribución con dos modas",
      "Una distribución asimétrica",
      "Una distribución en forma de campana, simétrica alrededor de la media",
      "Una distribución en la que todos los valores tienen la misma frecuencia",
    ],
    answer: 2,
    explanation:
      "En la normal coinciden media, mediana y moda, y el 95 % de los valores está a menos de 1,96 desviaciones típicas de la media.",
  },
  {
    id: 37,
    module: "fundamentos",
    question: "¿Qué es el sesgo de publicación?",
    options: [
      "La tendencia a que se publiquen más los estudios con resultados positivos o estadísticamente significativos",
      "Publicar un estudio en una revista de bajo impacto",
      "Que los resultados de un estudio no sean replicables",
      "Publicar un estudio sin revisión por pares",
    ],
    answer: 0,
    explanation:
      "Si los estudios negativos no se publican, las revisiones y los metaanálisis sobrestiman el efecto. El registro previo de los ensayos ayuda a evitarlo.",
  },
  {
    id: 38,
    module: "supervivencia",
    question: "¿Qué estima la regresión de Cox?",
    options: [
      "La probabilidad de un resultado binario sin tener en cuenta el tiempo",
      "El efecto de varias variables sobre el riesgo instantáneo (hazard) de que ocurra un evento a lo largo del tiempo",
      "La diferencia de medias entre dos grupos",
      "La relación lineal entre dos variables numéricas",
    ],
    answer: 1,
    explanation: "Su resultado es el hazard ratio de cada variable, ajustado por las demás.",
  },
  {
    id: 39,
    module: "fundamentos",
    question: "¿Qué es un ensayo clínico aleatorizado y controlado (ECA)?",
    options: [
      "Un estudio observacional en el que el investigador no interviene",
      "El diseño más sólido para evaluar la eficacia de una intervención, con asignación aleatoria y grupo control",
      "Un estudio en el que los participantes eligen su tratamiento",
      "Un estudio que solo se realiza en animales de laboratorio",
    ],
    answer: 1,
    explanation:
      "La aleatorización y el grupo control permiten atribuir las diferencias a la intervención.",
  },
  {
    id: 40,
    module: "modelos",
    question: "¿Qué es la variable dependiente en un modelo de regresión?",
    options: [
      "La variable que se usa para predecir otra",
      "La variable que se quiere predecir o explicar",
      "Una variable sin relación con las demás",
      "Una variable que se mantiene constante",
    ],
    answer: 1,
    explanation:
      "Es el resultado (Y). Las variables que lo predicen son las independientes o predictoras (X).",
  },
  {
    id: 41,
    module: "modelos",
    question: "¿Qué es una variable independiente en un modelo de regresión?",
    options: [
      "La variable que se quiere predecir",
      "Una variable que se usa para predecir o explicar el resultado",
      "Una variable sin relación con las demás",
      "Una variable que se mantiene constante",
    ],
    answer: 1,
    explanation: "También se llama predictora o explicativa (X).",
  },
  {
    id: 42,
    module: "fundamentos",
    question: "¿Qué es un histograma?",
    options: [
      "Un diagrama de barras para variables categóricas",
      "Un gráfico que muestra la distribución de una variable numérica agrupada en intervalos",
      "Un gráfico que compara dos variables numéricas",
      "Un gráfico de la proporción de cada categoría sobre el total",
    ],
    answer: 1,
    explanation:
      "En el histograma las barras son contiguas porque los intervalos de la variable son continuos.",
  },
  {
    id: 43,
    module: "fundamentos",
    question: "¿Qué es la varianza?",
    options: [
      "La raíz cuadrada de la desviación típica",
      "Una medida de la dispersión de los datos alrededor de la media, en unidades al cuadrado",
      "Una medida de tendencia central",
      "La diferencia entre el máximo y el mínimo",
    ],
    answer: 1,
    explanation:
      "Es el promedio de las desviaciones al cuadrado. Su raíz cuadrada es la desviación típica.",
  },
  {
    id: 44,
    module: "fundamentos",
    question: "¿Qué es la desviación típica o estándar?",
    options: [
      "La media de los datos",
      "La raíz cuadrada de la varianza; mide la dispersión típica de los datos respecto a la media",
      "El valor más frecuente",
      "La diferencia entre el tercer y el primer cuartil",
    ],
    answer: 1,
    explanation:
      "Se expresa en las mismas unidades que los datos, por eso es más fácil de interpretar que la varianza.",
  },
  {
    id: 45,
    module: "distribuciones",
    question: "Un niño está en el percentil 90 de peso para su edad. ¿Qué significa?",
    options: [
      "Que pesa un 90 % más que la media",
      "Que el 90 % de los niños de su edad y sexo pesa menos que él",
      "Que su peso es normal en el 90 % de los casos",
      "Que tiene un 90 % de probabilidad de sobrepeso",
    ],
    answer: 1,
    explanation:
      "Un percentil es el valor por debajo del cual queda un determinado porcentaje de las observaciones.",
  },
  {
    id: 46,
    module: "pruebas-diagnosticas",
    question:
      "Con la misma sensibilidad y especificidad, ¿qué ocurre con el valor predictivo positivo si la prevalencia disminuye?",
    options: ["Aumenta", "Disminuye", "No cambia", "Se iguala a la sensibilidad"],
    answer: 1,
    explanation:
      "Con una enfermedad poco frecuente, los falsos positivos de la gran mayoría sana superan a los verdaderos positivos y el VPP cae.",
  },
  {
    id: 47,
    module: "pruebas-diagnosticas",
    question: "Una prueba tiene una razón de verosimilitud negativa de 0,05. ¿Qué indica?",
    options: [
      "Que un resultado negativo apenas cambia la probabilidad de enfermedad",
      "Que un resultado negativo reduce mucho la probabilidad de enfermedad",
      "Que la prueba tiene un 5 % de sensibilidad",
      "Que un resultado positivo confirma la enfermedad",
    ],
    answer: 1,
    explanation:
      "RV− = (1 − S) / E. Valores por debajo de 0,1 indican que un negativo es muy útil para descartar la enfermedad.",
  },
  {
    id: 48,
    module: "pruebas-diagnosticas",
    question: "¿Qué es el valor predictivo positivo (VPP)?",
    options: [
      "La probabilidad de tener la enfermedad si la prueba es negativa",
      "La probabilidad de tener la enfermedad si la prueba es positiva",
      "La probabilidad de no tener la enfermedad si la prueba es negativa",
      "La probabilidad de no tener la enfermedad si la prueba es positiva",
    ],
    answer: 1,
    explanation: "VPP = VP / (VP + FP). Depende de la prevalencia.",
  },
  {
    id: 49,
    module: "pruebas-diagnosticas",
    question: "¿Qué es el valor predictivo negativo (VPN)?",
    options: [
      "La probabilidad de no tener la enfermedad si la prueba es negativa",
      "La probabilidad de no tener la enfermedad si la prueba es positiva",
      "La probabilidad de tener la enfermedad si la prueba es negativa",
      "La probabilidad de tener la enfermedad si la prueba es positiva",
    ],
    answer: 0,
    explanation: "VPN = VN / (VN + FN). Es alto cuando la enfermedad es poco frecuente.",
  },
  {
    id: 50,
    module: "pruebas-diagnosticas",
    question: "¿Qué indica la razón de verosimilitud positiva (RV+)?",
    options: [
      "Cuántas veces es más probable un resultado positivo en una persona enferma que en una sana",
      "Cuántas veces es más probable un resultado negativo en una persona enferma que en una sana",
      "La probabilidad de un verdadero positivo",
      "La probabilidad de un falso positivo",
    ],
    answer: 0,
    explanation:
      "RV+ = S / (1 − E). Por encima de 10, un positivo aumenta mucho la probabilidad de enfermedad.",
  },
  {
    id: 51,
    module: "supervivencia",
    question:
      "En un ensayo, el tratamiento nuevo obtiene un hazard ratio de 0,70 (IC 95 %: 0,55 a 0,89). ¿Cómo se interpreta?",
    options: [
      "El tratamiento aumenta el riesgo del evento un 30 %",
      "El tratamiento reduce el riesgo instantáneo del evento un 30 % y el resultado es estadísticamente significativo",
      "No hay diferencia porque el intervalo incluye el 0",
      "El 70 % de los pacientes tratados sobrevive",
    ],
    answer: 1,
    explanation:
      "Un HR de 0,70 es una reducción relativa del 30 %. El IC no incluye el 1, así que es significativo.",
  },
  {
    id: 52,
    module: "pruebas",
    question:
      "Quieres comparar la puntuación de una escala ordinal de dolor entre tres analgésicos en pacientes distintos. ¿Qué prueba usarías?",
    options: ["ANOVA de un factor", "Kruskal-Wallis", "t de Student", "Correlación de Pearson"],
    answer: 1,
    explanation:
      "Tres grupos independientes y una variable ordinal: Kruskal-Wallis, la alternativa no paramétrica al ANOVA.",
  },
  {
    id: 53,
    module: "series-temporales",
    question:
      "¿Qué componente de una serie temporal explica el pico de consultas por gripe cada invierno?",
    options: [
      "La tendencia",
      "La estacionalidad",
      "El componente irregular",
      "La autocorrelación parcial",
    ],
    answer: 1,
    explanation:
      "La estacionalidad es un patrón que se repite con un periodo fijo y conocido, en este caso anual.",
  },
  {
    id: 54,
    module: "series-temporales",
    question: "En un modelo ARIMA(p, d, q), ¿qué indica el parámetro d?",
    options: [
      "El número de valores pasados que se usan para predecir",
      "Las veces que se ha diferenciado la serie para hacerla estacionaria",
      "El número de errores pasados incluidos en el modelo",
      "La duración del periodo estacional",
    ],
    answer: 1,
    explanation:
      "p es el orden autorregresivo, d el número de diferenciaciones y q el orden de media móvil.",
  },
];
