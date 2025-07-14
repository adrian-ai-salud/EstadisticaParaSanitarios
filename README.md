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
            *   **Propósito:** Predecir la probabilidad de que un evento binario (dos resultados posibles) ocurra, y clasificar observaciones en una de esas dos categorías. Es un modelo de clasificación, a pesar de su nombre "regresión".
            *   **Funcionamiento:** Utiliza una función logística (o sigmoide) para transformar la combinación lineal de las variables predictoras en una probabilidad entre 0 y 1. Esta probabilidad se compara con un umbral (comúnmente 0.5) para asignar la observación a una clase. Los coeficientes del modelo se interpretan en términos de *Odds Ratios*, lo que facilita entender la magnitud y dirección de la asociación entre las variables predictoras y la probabilidad del evento.
            *   **Supuestos Clave:**
                *   **Variable dependiente binaria:** La variable de resultado debe ser dicotómica (ej., sí/no, 0/1, enfermo/sano).
                *   **Independencia de las observaciones:** Las observaciones deben ser independientes entre sí.
                *   **Ausencia de multicolinealidad severa:** Las variables predictoras no deben estar altamente correlacionadas entre sí.
                *   **Linealidad de la relación entre las variables predictoras y el logit de la probabilidad:** La relación entre las variables predictoras continuas y el logaritmo de las odds (logit) debe ser lineal. Esto se puede verificar con gráficos de dispersión o pruebas estadísticas.
                *   **Tamaño de muestra adecuado:** Se requiere un número suficiente de eventos por variable predictora (generalmente 10-20 eventos por variable).
            *   **Cuándo y Cómo Usar:**
                *   **Cuándo:** Cuando el objetivo es predecir la probabilidad de un evento binario o clasificar observaciones en dos grupos. Es excelente para identificar factores de riesgo y cuantificar su impacto.
                *   **Cómo:** Se ajusta el modelo a los datos de entrenamiento, se evalúa su rendimiento (ej., sensibilidad, especificidad, AUC-ROC) y se interpretan los coeficientes (Odds Ratios) para entender la influencia de cada predictor.
            *   **Importancia en Sanidad:** Es fundamental para la epidemiología, la investigación clínica y la toma de decisiones. Permite construir modelos predictivos de riesgo de enfermedades, evaluar la eficacia de tratamientos (éxito/fracaso), predecir la mortalidad, o identificar pacientes con mayor probabilidad de responder a una terapia específica. Su interpretabilidad a través de los Odds Ratios es una gran ventaja para la comunicación de resultados a clínicos y pacientes.
            *   **Ejemplo Detallado:** Un estudio busca identificar los factores de riesgo para el desarrollo de enfermedad cardiovascular (ECV) en una población. Se recopilan datos de pacientes, incluyendo edad, sexo, índice de masa corporal (IMC), niveles de colesterol (LDL, HDL), presión arterial (sistólica, diastólica), historial de tabaquismo, diabetes y antecedentes familiares de ECV. La variable de resultado es binaria: desarrollo de ECV en los próximos 10 años (Sí/No). La regresión logística se utiliza para modelar la probabilidad de desarrollar ECV en función de estas variables. Los resultados pueden mostrar que, por ejemplo, por cada aumento de 1 unidad en el IMC, el riesgo de ECV aumenta en un X% (ajustado por otras variables), o que los fumadores tienen un riesgo Y veces mayor que los no fumadores. Esto permite a los médicos identificar a los pacientes con mayor riesgo y recomendar intervenciones preventivas personalizadas.

        2.  **Análisis Discriminante Lineal (LDA - Linear Discriminant Analysis):**
            *   **Propósito:** Clasificar observaciones en dos o más grupos (clases) basándose en un conjunto de variables predictoras. También puede ser utilizado para la reducción de la dimensionalidad, encontrando las combinaciones lineales de variables que mejor separan las clases.
            *   **Funcionamiento:** LDA busca crear una o más funciones discriminantes lineales que maximicen la separación entre las medias de las clases y minimicen la varianza dentro de cada clase. Estas funciones son combinaciones lineales de las variables predictoras. Una vez que se encuentran estas funciones, se utilizan para clasificar nuevas observaciones asignándolas a la clase cuya media está más cerca en el espacio discriminante.
            *   **Supuestos Clave:**
                *   **Normalidad multivariante:** Las variables predictoras deben seguir una distribución normal multivariante dentro de cada clase.
                *   **Homocedasticidad (igualdad de varianzas/covarianzas):** Las matrices de covarianza de las variables predictoras deben ser iguales en todas las clases. Si este supuesto no se cumple, se puede considerar el Análisis Discriminante Cuadrático (QDA).
                *   **Independencia de las observaciones:** Las observaciones deben ser independientes.
                *   **Ausencia de multicolinealidad severa:** Las variables predictoras no deben estar altamente correlacionadas.
            *   **Cuándo y Cómo Usar:**
                *   **Cuándo:** Ideal para problemas de clasificación con dos o más clases cuando los datos cumplen los supuestos de normalidad y homocedasticidad. Es particularmente efectivo cuando las clases están bien separadas.
                *   **Cómo:** Se entrena el modelo con los datos, se calculan las funciones discriminantes y se utilizan para predecir la clase de nuevas observaciones. Se evalúa el rendimiento del modelo (ej., precisión, matriz de confusión).
            *   **Importancia en Sanidad:** Muy útil en diagnóstico diferencial, subtipificación de enfermedades, y en la identificación de grupos de pacientes con características clínicas o biológicas distintas. Permite desarrollar herramientas de apoyo a la decisión clínica para clasificar pacientes en categorías relevantes para el tratamiento o pronóstico.
            *   **Ejemplo Detallado:** Un equipo de neurólogos está investigando tres tipos de demencia (Alzheimer, Demencia Vascular, Demencia con Cuerpos de Lewy) y ha recopilado datos de resonancias magnéticas (volúmenes de diferentes regiones cerebrales), resultados de pruebas neuropsicológicas y biomarcadores en líquido cefalorraquídeo para un grupo de pacientes con diagnóstico confirmado. El objetivo es desarrollar un modelo que pueda clasificar a nuevos pacientes en uno de estos tres tipos de demencia basándose en estas mediciones. LDA puede construir funciones discriminantes que combinen estas variables de manera óptima para diferenciar entre los tres tipos de demencia. Esto podría llevar a un diagnóstico más rápido y preciso, permitiendo iniciar tratamientos específicos o intervenciones de apoyo de manera más temprana.

        3.  **Random Forest:**
            *   **Propósito:** Clasificación y regresión. Es un algoritmo de aprendizaje automático de tipo 'ensamble' que combina la potencia de múltiples árboles de decisión para mejorar la precisión, la robustez y reducir el sobreajuste (overfitting).
            *   **Funcionamiento:** Construye un "bosque" de árboles de decisión. Cada árbol se entrena con una submuestra aleatoria de los datos de entrenamiento (muestreo con reemplazo, conocido como *bootstrap aggregating* o *bagging*). Además, en cada nodo de cada árbol, solo se considera un subconjunto aleatorio de las variables predictoras para la división. Para la clasificación, la predicción final se determina por la "votación" de la mayoría de los árboles; para la regresión, se promedian las predicciones de los árboles.
            *   **Supuestos Clave:** Random Forest es un algoritmo no paramétrico y tiene menos supuestos formales que la regresión logística o LDA.
                *   **Independencia de las observaciones:** Las observaciones deben ser independientes.
                *   **No requiere normalidad ni linealidad:** No asume una distribución específica de los datos ni relaciones lineales entre variables.
                *   **Maneja bien la multicolinealidad:** Es menos sensible a la multicolinealidad entre las variables predictoras.
                *   **Maneja datos faltantes y atípicos:** Es robusto frente a estos problemas, aunque el preprocesamiento siempre es recomendable.
            *   **Cuándo y Cómo Usar:**
                *   **Cuándo:** Es una opción excelente para una amplia gama de problemas de clasificación y regresión, especialmente cuando se tienen conjuntos de datos grandes, complejos, con muchas variables, o cuando las relaciones entre las variables no son lineales. Es muy popular por su alta precisión y su capacidad para manejar diferentes tipos de datos.
                *   **Cómo:** Se entrena el modelo especificando el número de árboles y el número de variables a considerar en cada división. Se evalúa su rendimiento utilizando métricas como la precisión, recall, F1-score, AUC-ROC (para clasificación) o R-cuadrado, RMSE (para regresión). Además, Random Forest puede proporcionar la "importancia de las características", indicando qué variables son más influyentes en la predicción.
            *   **Importancia en Sanidad:** Su robustez y alta precisión lo hacen ideal para la medicina de precisión, la predicción de resultados complejos, la identificación de biomarcadores, y la estratificación de riesgo en poblaciones grandes. Puede descubrir patrones complejos en datos clínicos, genómicos, de imágenes o de estilo de vida que otros modelos más simples podrían pasar por alto.
            *   **Ejemplo Detallado:** Un centro de investigación oncológica está desarrollando un modelo para predecir la respuesta de pacientes con un tipo específico de cáncer a una nueva terapia (Respuesta Completa/Respuesta Parcial/No Respuesta). Se dispone de un conjunto de datos muy grande que incluye información clínica (estadio del cáncer, edad, comorbilidades), datos genómicos (expresión de miles de genes), datos de patología (características histológicas del tumor) y datos de imagen (características extraídas de tomografías). Dada la complejidad y el alto número de variables, Random Forest es una opción ideal. El modelo puede identificar qué combinaciones de genes, características tumorales y datos clínicos son los más predictivos de la respuesta al tratamiento. Esto no solo ayuda a predecir la respuesta en nuevos pacientes, sino que también puede revelar nuevos biomarcadores o vías biológicas relevantes para la enfermedad, guiando el desarrollo de terapias más dirigidas y personalizadas.
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
