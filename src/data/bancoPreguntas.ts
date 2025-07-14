
export interface Pregunta {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  
}

export const bancoPreguntas: Pregunta[] = [
  {
    id: 1,
    pregunta: "¿Qué tipo de variable predice principalmente la Regresión Logística?",
    opciones: [
      "Una variable numérica continua (ej. la tensión arterial)",
      "La probabilidad de un evento con dos posibles resultados (ej. enfermo/sano)",
      "El número de grupos o clusters en un conjunto de datos",
      "La relación lineal entre dos variables numéricas"
    ],
    respuestaCorrecta: 1,
    
  },
  {
    id: 2,
    pregunta: "En un ensayo clínico, ¿qué es el 'grupo control'?",
    opciones: [
      "El grupo que recibe el nuevo tratamiento que se está probando",
      "El grupo de investigadores que supervisa el estudio",
      "El grupo que recibe un placebo o el tratamiento estándar actual",
      "El grupo de pacientes con la enfermedad más avanzada"
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 3,
    pregunta: "¿Qué representa el 'valor p' en una prueba de hipótesis?",
    opciones: [
      "La probabilidad de que la hipótesis nula sea cierta",
      "La probabilidad de observar los datos obtenidos (o más extremos) si la hipótesis nula fuera cierta",
      "La probabilidad de que la hipótesis alternativa sea cierta",
      "El tamaño del efecto del tratamiento"
    ],
    respuestaCorrecta: 1,
    
  },
  {
    id: 4,
    pregunta: "El Análisis Discriminante Lineal (LDA) es más útil cuando...",
    opciones: [
      "Se quiere predecir un valor numérico como el colesterol",
      "Se quiere encontrar la combinación de variables que mejor separa dos o más grupos definidos",
      "Las relaciones entre variables son altamente no lineales",
      "Se desconoce a qué grupo pertenece cada individuo y se quieren descubrir los grupos"
    ],
    respuestaCorrecta: 1,
    
  },
  {
    id: 5,
    pregunta: "Una de las principales ventajas de un modelo Random Forest es que...",
    opciones: [
      "Es muy fácil de interpretar y explicar a través de una fórmula simple",
      "Es muy robusto contra el sobreajuste (overfitting) y suele tener alta precisión",
      "Requiere muy pocos datos para ser entrenado eficazmente",
      "Solo funciona con variables de tipo categórico"
    ],
    respuestaCorrecta: 1,
    
  },
  {
    id: 6,
    pregunta: "Si la media de un conjunto de datos es muy diferente de la mediana, ¿qué indica esto?",
    opciones: [
      "Que la distribución de los datos es perfectamente simétrica",
      "Que no hay variabilidad en los datos",
      "Que la distribución de los datos es asimétrica y probablemente contiene valores atípicos (outliers)",
      "Que la media ha sido calculada incorrectamente"
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 7,
    pregunta: "¿Qué mide el R-cuadrado (R²) en un modelo de regresión lineal?",
    opciones: [
      "La significancia estadística del modelo",
      "La proporción de la variabilidad de la variable dependiente que es explicada por el modelo",
      "El error promedio de las predicciones del modelo",
      "La correlación entre dos variables independientes"
    ],
    respuestaCorrecta: 1,
    
  },
  {
    id: 8,
    pregunta: "En epidemiología, ¿qué es la 'incidencia' de una enfermedad?",
    opciones: [
      "El número total de casos existentes en un momento dado",
      "La proporción de la población que tiene la enfermedad en un momento dado",
      "El número de casos nuevos de una enfermedad en un período de tiempo determinado",
      "La gravedad de la enfermedad en la población"
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 9,
    pregunta: "¿Y qué es la 'prevalencia'?",
    opciones: [
      "El número de casos nuevos durante un año",
      "El número total de casos (nuevos y antiguos) en una población en un punto específico en el tiempo",
      "La tasa de mortalidad de la enfermedad",
      "El riesgo de desarrollar la enfermedad en el futuro"
    ],
    respuestaCorrecta: 1,
    
  },
  {
    id: 10,
    pregunta: "Un intervalo de confianza del 95% para una media significa que...",
    opciones: [
      "Hay un 95% de probabilidad de que la verdadera media de la población esté dentro de ese intervalo",
      "El 95% de los datos de la muestra caen dentro de ese intervalo",
      "Si repitiéramos el estudio muchas veces, el 95% de los intervalos de confianza calculados contendrían la verdadera media de la población",
      "Hay un 5% de probabilidad de que el estudio contenga errores"
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 11,
    pregunta: "En una prueba diagnóstica, la 'sensibilidad' se refiere a:",
    opciones: [
      "La capacidad de la prueba para detectar correctamente a los individuos que NO tienen la enfermedad",
      "La capacidad de la prueba para detectar correctamente a los individuos que SÍ tienen la enfermedad",
      "La precisión general de la prueba en cualquier individuo",
      "La probabilidad de que un resultado positivo sea realmente un verdadero positivo"
    ],
    respuestaCorrecta: 1,
    
  },
  {
    id: 12,
    pregunta: "Siguiendo con las pruebas diagnósticas, ¿qué es la 'especificidad'?",
    opciones: [
      "La capacidad de la prueba para identificar correctamente a los individuos sanos (verdaderos negativos)",
      "La capacidad de la prueba para identificar correctamente a los individuos enfermos (verdaderos positivos)",
      "La prevalencia de la enfermedad en la población de prueba",
      "La probabilidad de que un resultado negativo sea realmente un falso negativo"
    ],
    respuestaCorrecta: 0,
    
  },
  {
    id: 13,
    pregunta: "El sobreajuste (overfitting) ocurre cuando un modelo...",
    opciones: [
      "Es demasiado simple para capturar la estructura de los datos",
      "Funciona muy bien con los datos de entrenamiento pero mal con datos nuevos no vistos",
      "No logra converger durante el entrenamiento",
      "Tiene un R-cuadrado negativo"
    ],
    respuestaCorrecta: 1,
    
  },
  {
    id: 14,
    pregunta: "¿Cuál de las siguientes es una variable categórica nominal?",
    opciones: [
      "Estadio de un tumor (I, II, III, IV)",
      "Temperatura corporal en grados Celsius",
      "Grupo sanguíneo (A, B, AB, O)",
      "Nivel de dolor en una escala del 1 al 10"
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 15,
    pregunta: "¿Y cuál es un ejemplo de variable categórica ordinal?",
    opciones: [
      "Sexo (Hombre, Mujer)",
      "Tener o no tener HTA (Sí, No)",
      "Nivel socioeconómico (Bajo, Medio, Alto)",
      "País de nacimiento"
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 16,
    pregunta: "La hipótesis nula (H₀) en una comparación de dos tratamientos generalmente postula que...",
    opciones: [
      "El nuevo tratamiento es superior al antiguo",
      "Existe una diferencia significativa entre los dos tratamientos",
      "No hay diferencia en la efectividad entre los dos tratamientos",
      "El tratamiento antiguo es mejor que el nuevo"
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 17,
    pregunta: "En un estudio de supervivencia, ¿qué es un 'dato censurado'?",
    opciones: [
      "Un dato que fue eliminado del estudio por ser incorrecto",
      "Un paciente que se retiró del estudio o del que se perdió el seguimiento antes de que ocurriera el evento de interés",
      "El evento final del estudio (ej. fallecimiento)",
      "Un dato que se encuentra fuera del rango normal"
    ],
    respuestaCorrecta: 1,
    
  },
  {
    id: 18,
    pregunta: "El Factor de Inflación de la Varianza (VIF) se usa para detectar:",
    opciones: [
      "La falta de linealidad en los datos",
      "La presencia de valores atípicos (outliers)",
      "La multicolinealidad entre las variables predictoras en un modelo de regresión",
      "La falta de normalidad en los residuos"
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 19,
    pregunta: "¿Cuál de estos NO es un supuesto clave de la Regresión Lineal Múltiple?",
    opciones: [
      "Linealidad en la relación de las variables",
      "Normalidad de los residuos",
      "Ausencia de multicolinealidad",
      "Que todas las variables predictoras deben ser categóricas"
    ],
    respuestaCorrecta: 3,
    
  },
  {
    id: 20,
    pregunta: "El 'sesgo de selección' en un estudio ocurre cuando...",
    opciones: [
      "Los participantes no recuerdan correctamente eventos pasados",
      "El efecto de una exposición sobre un resultado es modificado por otra variable",
      "La muestra de estudio no es representativa de la población objetivo",
      "Los instrumentos de medida no están bien calibrados"
    ],
    respuestaCorrecta: 2
  },
  {
    id: 21,
    pregunta: "¿Qué es un 'factor de confusión' en un estudio epidemiológico?",
    opciones: [
      "Una variable que solo afecta al resultado, pero no a la exposición.",
      "Una variable que está asociada tanto con la exposición como con el resultado, y no es un intermediario causal.",
      "Una variable que es un resultado directo de la exposición.",
      "Una variable que solo afecta a la exposición, pero no al resultado."
    ],
    respuestaCorrecta: 1
  },
  {
    id: 22,
    pregunta: "¿Cuál es la principal diferencia entre un estudio de cohortes y un estudio de casos y controles?",
    opciones: [
      "El estudio de cohortes es siempre prospectivo, mientras que el de casos y controles es siempre retrospectivo.",
      "El estudio de cohortes parte de la exposición para observar el resultado, mientras que el de casos y controles parte del resultado para buscar la exposición.",
      "El estudio de cohortes solo se usa para enfermedades raras, y el de casos y controles para enfermedades comunes.",
      "El estudio de cohortes no tiene grupo control, mientras que el de casos y controles sí."
    ],
    respuestaCorrecta: 1
  },
  {
    id: 23,
    pregunta: "¿Qué es la 'aleatorización' en un ensayo clínico?",
    opciones: [
      "La selección de participantes de forma no probabilística.",
      "La asignación de los participantes a los grupos de tratamiento o control al azar.",
      "La medición de los resultados de forma aleatoria.",
      "La elección de la hipótesis nula de forma aleatoria."
    ],
    respuestaCorrecta: 1
  },
  {
    id: 24,
    pregunta: "¿Qué tipo de gráfico es el más adecuado para visualizar la relación entre dos variables numéricas?",
    opciones: [
      "Gráfico de barras",
      "Histograma",
      "Diagrama de dispersión (scatter plot)",
      "Gráfico de sectores (pie chart)"
    ],
    respuestaCorrecta: 2
  },
  {
    id: 25,
    pregunta: "¿Qué es la 'mediana' en estadística?",
    opciones: [
      "El valor que más se repite en un conjunto de datos.",
      "La suma de todos los valores dividida por el número de valores.",
      "El valor central en un conjunto de datos ordenado.",
      "La diferencia entre el valor máximo y el mínimo."
    ],
    respuestaCorrecta: 2
  },
  {
    id: 26,
    pregunta: "¿Cuándo se utiliza una prueba t de Student para muestras independientes?",
    opciones: [
      "Para comparar las medias de dos grupos relacionados.",
      "Para comparar las proporciones de dos grupos.",
      "Para comparar las medias de dos grupos no relacionados.",
      "Para comparar más de dos medias de grupo."
    ],
    respuestaCorrecta: 2
  },
  {
    id: 27,
    pregunta: "¿Qué es un 'falso positivo' en una prueba diagnóstica?",
    opciones: [
      "Un resultado negativo en una persona enferma.",
      "Un resultado positivo en una persona sana.",
      "Un resultado positivo en una persona enferma.",
      "Un resultado negativo en una persona sana."
    ],
    respuestaCorrecta: 1
  },
  {
    id: 28,
    pregunta: "¿Qué es el 'intervalo intercuartílico' (IQR)?",
    opciones: [
      "La diferencia entre el valor máximo y el mínimo.",
      "La diferencia entre el tercer cuartil (Q3) y el primer cuartil (Q1).",
      "La suma de los valores de los cuartiles.",
      "El rango de valores que contiene el 95% de los datos."
    ],
    respuestaCorrecta: 1
  },
  {
    id: 29,
    pregunta: "¿Qué tipo de error se comete al rechazar una hipótesis nula que en realidad es verdadera?",
    opciones: [
      "Error tipo II (beta)",
      "Error tipo I (alfa)",
      "Error de muestreo",
      "Error de medición"
    ],
    respuestaCorrecta: 1
  },
  {
    id: 30,
    pregunta: "¿Qué es la 'potencia estadística' de un estudio?",
    opciones: [
      "La probabilidad de cometer un error tipo I.",
      "La probabilidad de cometer un error tipo II.",
      "La probabilidad de detectar un efecto cuando realmente existe.",
      "El tamaño del efecto que se espera encontrar."
    ],
    respuestaCorrecta: 2
  },
  {
    id: 31,
    pregunta: "¿Qué es un 'meta-análisis'?",
    opciones: [
      "Un estudio que analiza los datos de un solo ensayo clínico grande.",
      "Un método estadístico que combina los resultados de múltiples estudios independientes para obtener una estimación global.",
      "Un estudio que revisa la literatura sin realizar análisis estadísticos.",
      "Un tipo de estudio observacional prospectivo."
    ],
    respuestaCorrecta: 1
  },
  {
    id: 32,
    pregunta: "¿Cuál de las siguientes NO es una medida de tendencia central?",
    opciones: [
      "Media",
      "Mediana",
      "Moda",
      "Desviación estándar"
    ],
    respuestaCorrecta: 3
  },
  {
    id: 33,
    pregunta: "¿Qué es la 'correlación' entre dos variables?",
    opciones: [
      "Una relación causal entre ellas.",
      "Una medida de la fuerza y dirección de la asociación lineal entre ellas.",
      "La diferencia entre sus medias.",
      "La probabilidad de que ocurran juntas."
    ],
    respuestaCorrecta: 1
  },
  {
    id: 34,
    pregunta: "¿Qué es un 'diagrama de caja y bigotes' (box plot)?",
    opciones: [
      "Un gráfico que muestra la frecuencia de cada categoría.",
      "Un gráfico que resume la distribución de una variable numérica, mostrando mediana, cuartiles y valores atípicos.",
      "Un gráfico que muestra la relación entre dos variables categóricas.",
      "Un gráfico que representa la evolución de una variable a lo largo del tiempo."
    ],
    respuestaCorrecta: 1
  },
  {
    id: 35,
    pregunta: "¿Cuándo se utiliza la prueba de Chi-cuadrado (χ²)?",
    opciones: [
      "Para comparar medias de dos grupos.",
      "Para evaluar la asociación entre dos variables categóricas.",
      "Para predecir un resultado numérico.",
      "Para analizar la supervivencia de pacientes."
    ],
    respuestaCorrecta: 1
  },
  {
    id: 36,
    pregunta: "¿Qué es la 'distribución normal' (o Gaussiana)?",
    opciones: [
      "Una distribución de datos con dos modas.",
      "Una distribución de datos asimétrica.",
      "Una distribución de datos en forma de campana, simétrica alrededor de la media.",
      "Una distribución de datos donde todos los valores tienen la misma frecuencia."
    ],
    respuestaCorrecta: 2
  },
  {
    id: 37,
    pregunta: "¿Qué es un 'sesgo de publicación'?",
    opciones: [
      "Cuando los investigadores publican solo los resultados que apoyan su hipótesis.",
      "Cuando un estudio se publica en una revista de bajo impacto.",
      "Cuando los resultados de un estudio no son replicables.",
      "Cuando un estudio no es revisado por pares antes de su publicación."
    ],
    respuestaCorrecta: 0
  },
  {
    id: 38,
    pregunta: "¿Qué es la 'regresión de Cox' en el análisis de supervivencia?",
    opciones: [
      "Un modelo que predice la probabilidad de un evento binario.",
      "Un modelo que estima el tiempo hasta un evento, ajustando por múltiples covariables.",
      "Un modelo que compara las medias de dos grupos.",
      "Un modelo que analiza la relación entre dos variables numéricas."
    ],
    respuestaCorrecta: 1
  },
  {
    id: 39,
    pregunta: "¿Qué es un 'ensayo clínico aleatorizado y controlado' (ECA)?",
    opciones: [
      "Un estudio observacional donde los investigadores no intervienen.",
      "El diseño de estudio más robusto para evaluar la eficacia de una intervención, con asignación aleatoria y grupo control.",
      "Un estudio donde los participantes eligen su propio tratamiento.",
      "Un estudio que solo se realiza en animales de laboratorio."
    ],
    respuestaCorrecta: 1
  },
  {
    id: 40,
    pregunta: "¿Qué es la 'variable dependiente' en un modelo de regresión?",
    opciones: [
      "La variable que se utiliza para predecir otra variable.",
      "La variable que se predice o explica por otras variables.",
      "Una variable que no tiene relación con otras variables.",
      "Una variable que se mantiene constante en el estudio."
    ],
    respuestaCorrecta: 1
  },
  {
    id: 41,
    pregunta: "¿Qué es la 'variable independiente' en un modelo de regresión?",
    opciones: [
      "La variable que se predice o explica.",
      "La variable que se utiliza para predecir o explicar otra variable.",
      "Una variable que no tiene relación con otras variables.",
      "Una variable que se mantiene constante en el estudio."
    ],
    respuestaCorrecta: 1
  },
  {
    id: 42,
    pregunta: "¿Qué es un 'histograma'?",
    opciones: [
      "Un gráfico de barras para variables categóricas.",
      "Un gráfico que muestra la distribución de una variable numérica continua.",
      "Un gráfico que compara dos variables numéricas.",
      "Un gráfico que muestra la proporción de cada categoría en un total."
    ],
    respuestaCorrecta: 1
  },
  {
    id: 43,
    pregunta: "¿Qué es la 'varianza'?",
    opciones: [
      "La raíz cuadrada de la desviación estándar.",
      "Una medida de la dispersión de los datos alrededor de la media.",
      "La medida de tendencia central de los datos.",
      "La diferencia entre el valor máximo y el mínimo."
    ],
    respuestaCorrecta: 1
  },
  {
    id: 44,
    pregunta: "¿Qué es la 'desviación estándar'?",
    opciones: [
      "La media de los datos.",
      "La raíz cuadrada de la varianza, indicando la dispersión promedio de los datos respecto a la media.",
      "El valor más frecuente en un conjunto de datos.",
      "La diferencia entre el tercer y primer cuartil."
    ],
    respuestaCorrecta: 1
  },
  {
    id: 45,
    pregunta: "¿Qué es un 'percentil'?",
    opciones: [
      "Un valor que divide los datos en 100 partes iguales.",
      "Un valor por debajo del cual cae un cierto porcentaje de observaciones.",
      "La media de los datos.",
      "El valor más alto en un conjunto de datos."
    ],
    respuestaCorrecta: 1
  },
  {
    id: 46,
    pregunta: "¿Qué es la 'sensibilidad' en una prueba diagnóstica?",
    opciones: [
      "La capacidad de la prueba para identificar correctamente a los individuos sanos.",
      "La capacidad de la prueba para identificar correctamente a los individuos enfermos.",
      "La probabilidad de que un resultado positivo sea un verdadero positivo.",
      "La probabilidad de que un resultado negativo sea un verdadero negativo."
    ],
    respuestaCorrecta: 1
  },
  {
    id: 47,
    pregunta: "¿Qué es la 'especificidad' en una prueba diagnóstica?",
    opciones: [
      "La capacidad de la prueba para identificar correctamente a los individuos enfermos.",
      "La capacidad de la prueba para identificar correctamente a los individuos sanos.",
      "La probabilidad de que un resultado positivo sea un verdadero positivo.",
      "La probabilidad de que un resultado negativo sea un verdadero negativo."
    ],
    respuestaCorrecta: 1
  },
  {
    id: 48,
    pregunta: "¿Qué es el 'valor predictivo positivo' (VPP)?",
    opciones: [
      "La probabilidad de tener la enfermedad dado un resultado negativo.",
      "La probabilidad de tener la enfermedad dado un resultado positivo.",
      "La probabilidad de no tener la enfermedad dado un resultado negativo.",
      "La probabilidad de no tener la enfermedad dado un resultado positivo."
    ],
    respuestaCorrecta: 1
  },
  {
    id: 49,
    pregunta: "¿Qué es el 'valor predictivo negativo' (VPN)?",
    opciones: [
      "La probabilidad de no tener la enfermedad dado un resultado negativo.",
      "La probabilidad de no tener la enfermedad dado un resultado positivo.",
      "La probabilidad de tener la enfermedad dado un resultado negativo.",
      "La probabilidad de tener la enfermedad dado un resultado positivo."
    ],
    respuestaCorrecta: 0
  },
  {
    id: 50,
    pregunta: "¿Qué es la 'razón de verosimilitud positiva' (LR+)?",
    opciones: [
      "Indica cuánto más probable es un resultado positivo en enfermos que en sanos.",
      "Indica cuánto más probable es un resultado negativo en enfermos que en sanos.",
      "La probabilidad de un verdadero positivo.",
      "La probabilidad de un falso positivo."
    ],
    respuestaCorrecta: 0
  }
];
