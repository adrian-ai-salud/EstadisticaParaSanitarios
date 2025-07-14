
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
    respuestaCorrecta: 2,
    
  }
];
