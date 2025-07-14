# 📊 Estadística para Sanitarios

**Bienvenido/a a la app interactiva de Estadística para Sanitarios**, una herramienta diseñada para ayudar a profesionales de la salud a comprender y aplicar conceptos estadísticos de forma práctica, sencilla y adaptada a la realidad clínica.

---

## 🩺 ¿Qué ofrece esta app?

Esta aplicación está pensada para que cualquier profesional sanitario —sin necesidad de conocimientos previos en estadística— pueda:

- Comprender los **principios fundamentales de la estadística en salud**.
- Elegir la prueba estadística adecuada según el tipo de variables y objetivo del análisis.
- Repasar las **nociones básicas** (tipos de variables, escalas de medición, sesgo, etc.).
- Aplicar y distinguir entre **pruebas paramétricas** y **no paramétricas**.
- Consultar de forma estructurada conceptos clave como:
  - 🧪 Pruebas de hipótesis
  - 📐 Correlación y regresión
  - 🧍 Revisión física y análisis de datos clínicos
  - 👁️‍🗨️ COPS: Conceptos Operativos Para Sanitarios

---

## 📚 Explora nuestros módulos:

Nuestra aplicación está estructurada en módulos temáticos, diseñados para guiarte desde los fundamentos hasta los conceptos más avanzados de la estadística aplicada a la salud. Cada módulo incluye explicaciones claras, ejemplos clínicos relevantes y esquemas visuales para facilitar el aprendizaje.

1.  **Fundamentos de Estadística y Probabilidad:**
    *   Introducción a la probabilidad y sus aplicaciones en salud.
    *   Tipos de variables (cualitativas, cuantitativas) y escalas de medición (nominal, ordinal, de intervalo, de razón).
    *   Estadística descriptiva: medidas de tendencia central (media, mediana, moda) y dispersión (desviación estándar, rango, varianza).
    *   Análisis bivariante: exploración de la relación entre dos variables.

2.  **Distribuciones de Probabilidad:**
    *   Comprende la importancia de la distribución normal (campana de Gauss) y sus propiedades.
    *   Exploración de distribuciones discretas comunes en salud (ej. binomial, Poisson).

3.  **Inferencia Estadística:**
    *   Conceptos clave de la inferencia: población, muestra, estimación.
    *   Intervalos de confianza: cómo estimar parámetros poblacionales con un cierto nivel de seguridad.
    *   Contraste de hipótesis: formulación de hipótesis nula y alternativa, p-valor e interpretación de resultados.

4.  **Pruebas Estadísticas:**
    *   **Pruebas Paramétricas:** cuándo y cómo aplicar pruebas como la t de Student (para una o dos muestras), ANOVA (análisis de varianza) para comparar medias de múltiples grupos, y correlación de Pearson.
    *   **Pruebas No Paramétricas:** alternativas para datos que no cumplen los supuestos paramétricos, incluyendo la U de Mann-Whitney, Wilcoxon, Kruskal-Wallis y correlación de Spearman.

5.  **Modelos Avanzados y Regresión:**
    *   **Tipos de Modelos de Clasificación:**
        Los modelos de clasificación son herramientas esenciales en el análisis de datos sanitarios, permitiendo predecir categorías o grupos discretos (por ejemplo, enfermo/sano, tipo de enfermedad, respuesta a tratamiento). A continuación, exploramos algunos de los más relevantes:

        1.  **Regresión Logística:**
            A pesar de su nombre, la Regresión Logística es un modelo fundamental y ampliamente utilizado para problemas de clasificación, especialmente cuando la variable de resultado es binaria (dos categorías, como "sí/no", "presente/ausente", "éxito/fracaso"). No predice directamente el valor de la variable dependiente, sino la *probabilidad* de que un evento ocurra. Utiliza una función logística (o sigmoide) para transformar cualquier valor real en una probabilidad entre 0 y 1. Los coeficientes del modelo se interpretan en términos de *Odds Ratios*, lo que facilita entender la magnitud y dirección de la asociación entre las variables predictoras y la probabilidad del evento.

            *   **Importancia en Sanidad:** Su simplicidad, interpretabilidad y la capacidad de cuantificar el riesgo la hacen invaluable. Es ideal para identificar factores de riesgo asociados a enfermedades, predecir la probabilidad de desarrollar una condición, evaluar la efectividad de intervenciones (ej. probabilidad de éxito de un tratamiento), o clasificar pacientes en grupos de riesgo. Permite a los clínicos tomar decisiones informadas sobre el manejo del paciente y la asignación de recursos.
            *   **Ejemplo Ampliado:** Un equipo de investigación quiere predecir la probabilidad de que un paciente desarrolle una complicación postoperatoria grave (Sí/No) basándose en variables como la edad, el índice de masa corporal (IMC), la duración de la cirugía, la presencia de comorbilidades (diabetes, hipertensión) y los niveles de ciertos biomarcadores preoperatorios. La regresión logística puede estimar la probabilidad individual de cada paciente de sufrir la complicación y, a través de los Odds Ratios, identificar qué factores aumentan o disminuyen significativamente ese riesgo. Esto permite implementar medidas preventivas personalizadas para pacientes de alto riesgo.

        2.  **Análisis Discriminante Lineal (LDA):**
            El Análisis Discriminante Lineal es un método de clasificación que busca encontrar una combinación lineal de características que maximice la separación entre dos o más clases de datos. A diferencia de la regresión logística, LDA asume que los datos de cada clase siguen una distribución normal y que las varianzas (o matrices de covarianza) de las clases son iguales. El objetivo es proyectar los datos en un espacio de menor dimensión donde las clases estén lo más separadas posible, facilitando así la clasificación. Es particularmente útil cuando las clases están bien separadas y los datos cumplen con los supuestos de normalidad.

            *   **Importancia en Sanidad:** LDA es valioso para la clasificación diagnóstica, la identificación de subtipos de enfermedades y la reducción de la dimensionalidad en conjuntos de datos complejos. Permite a los profesionales de la salud diferenciar entre grupos de pacientes basándose en un conjunto de mediciones, lo que puede ser crucial para un diagnóstico temprano o para la selección de tratamientos específicos.
            *   **Ejemplo Ampliado:** Un laboratorio clínico desea clasificar muestras de pacientes en tres categorías: "sano", "enfermedad A" y "enfermedad B", basándose en los niveles de cinco biomarcadores diferentes en sangre. LDA puede construir funciones discriminantes que, a partir de los valores de esos biomarcadores, asignen cada nueva muestra a la categoría más probable. Esto podría ayudar a automatizar y mejorar la precisión del diagnóstico diferencial, reduciendo la necesidad de pruebas invasivas o costosas.

        3.  **Random Forest:**
            Random Forest es un algoritmo de aprendizaje automático de tipo 'ensamble' que se basa en la construcción de múltiples árboles de decisión. En lugar de un único árbol, Random Forest crea un "bosque" de árboles, cada uno entrenado con una submuestra aleatoria de los datos (bootstrap aggregating o bagging) y considerando solo un subconjunto aleatorio de características en cada división del árbol. La predicción final se obtiene mediante la "votación" de los árboles individuales (para clasificación) o promediando sus predicciones (para regresión). Esta combinación de aleatoriedad y agregación reduce el sobreajuste (overfitting) y mejora significativamente la robustez y la precisión del modelo.

            *   **Importancia en Sanidad:** Su capacidad para manejar grandes volúmenes de datos, variables de diferentes tipos (numéricas, categóricas), y su robustez frente a datos faltantes o atípicos lo hacen extremadamente útil en entornos clínicos complejos. Es excelente para la predicción de riesgos, la identificación de patrones complejos en datos de pacientes y la determinación de la importancia de las características, incluso en presencia de interacciones no lineales.
            *   **Ejemplo Ampliado:** Un hospital busca predecir el riesgo de reingreso no planificado de pacientes con insuficiencia cardíaca en los 30 días posteriores al alta. Se dispone de un vasto conjunto de datos que incluye información demográfica, historial médico (comorbilidades, hospitalizaciones previas), medicación actual, resultados de pruebas de laboratorio, y datos de seguimiento post-alta. Random Forest puede procesar todas estas variables, identificar las más influyentes (ej. número de hospitalizaciones previas, niveles de sodio, adherencia a la medicación) y construir un modelo predictivo altamente preciso. Esto permitiría al hospital identificar a los pacientes de alto riesgo al momento del alta y diseñar intervenciones personalizadas (ej. seguimiento intensivo, educación al paciente) para reducir las tasas de reingreso.
    *   Regresión lineal simple y múltiple: cómo predecir una variable dependiente a partir de una o varias variables independientes.
    *   Regresión logística: para predecir resultados binarios.

6.  **Análisis de Supervivencia:**
    *   Conceptos clave: tiempo al evento, censura, función de supervivencia.
    *   Curvas de Kaplan-Meier: estimación y representación gráfica de la supervivencia.
    *   Modelo de riesgos proporcionales de Cox: análisis multivariante de factores que influyen en la supervivencia.

7.  **Series Temporales:**
    *   Componentes de una serie temporal: tendencia, estacionalidad, ciclo, irregularidad.
    *   Modelos ARIMA (AutoRegressive Integrated Moving Average): introducción a la modelización y pronóstico de datos temporales en salud.

8.  **Errores Comunes y Buenas Prácticas:**
    *   Identificación y prevención de sesgos en la investigación.
    *   Errores tipo I y tipo II.
    *   Consideraciones éticas en el análisis estadístico.

9.  **Revisión Física y Datos Clínicos:**
    *   Aplicación práctica de la estadística en la interpretación de hallazgos de la revisión física.
    *   Manejo y análisis de datos clínicos reales.

10. **Módulo COPS (Conceptos Operativos Para Sanitarios):**
    *   Aplicación de los conceptos estadísticos en contextos clínicos y de salud pública reales.
    *   Casos prácticos y toma de decisiones basada en evidencia.

---

---

## 🚀 ¿Para qué sirve?

- Para **refrescar conocimientos** antes de aplicar estadísticas en investigación o clínica.
- Para **formarte desde cero**, paso a paso.
- Para **tomar decisiones más informadas** al interpretar estudios o hacer análisis básicos.
- Para usar en **docencia o tutorías** en ciencias de la salud.

---

## 🛠️ Tecnologías utilizadas

- `Framework`: [especificar, ej. React, Vue, etc.]
- `Despliegue`: Netlify / Vercel
- `Lenguaje`: JavaScript / TypeScript
- Diseño modular y responsive

---

## 📲 Próximas funciones

- Simuladores interactivos
- Cuestionarios de repaso por módulo
- Selector automatizado de pruebas estadísticas

---

## 🧑‍⚕️ Creado por

**Adrián Vences Garrido**  
Especialista en Enfermería Familiar y Comunitaria  
Divulgador de estadística y tecnología aplicadas a la salud  
🔗 [Zenodo - Publicaciones](https://zenodo.org/search?q=metadata.creators.person_or_org.name%3A%22Vences%20Garrido%2C%20Adri%C3%A1n%22)

---

> Si te resulta útil, no dudes en compartir o proponer mejoras.
