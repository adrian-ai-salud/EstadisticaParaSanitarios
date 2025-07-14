'use client';

import React from 'react';
import PageTitle from '@/components/PageTitle';
import ContentCard from '@/components/ContentCard';
import AlertBox from '@/components/AlertBox';
import { MdScience, MdWarningAmber } from 'react-icons/md';

export default function ModelosDeClasificacionPage() {
  return (
    <div>
      <PageTitle title="Modelos de Clasificación: Prediciendo Categorías en Salud" />

      <ContentCard title="El Caso Clínico: Diagnóstico Temprano de Enfermedades">
        <p>
          Imagina que tienes un conjunto de datos de pacientes con diversas características (edad, síntomas, resultados de laboratorio) y quieres predecir si un nuevo paciente tiene o no una enfermedad (ej. diabetes, cáncer). Aquí es donde los <strong>modelos de clasificación</strong> son tus aliados.
        </p>
        <p>
          Estos modelos de Machine Learning aprenden de datos históricos para asignar una categoría o clase a nuevas observaciones. En salud, son cruciales para el diagnóstico, la estratificación del riesgo y la toma de decisiones clínicas.
        </p>
      </ContentCard>

      <ContentCard title="Conceptos Clave en Clasificación" variant="highlight">
        <ul className="space-y-4">
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Machine Learning:</h4>
              <p>Los modelos &apos;aprenden&apos; patrones de los datos sin ser programados explícitamente. Se dividen los datos en conjuntos de entrenamiento (para que el modelo aprenda) y de test (para evaluar su rendimiento con datos nuevos).</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Overfitting:</h4>
              <p>Cuando un modelo aprende demasiado bien los datos de entrenamiento, incluyendo el &apos;ruido&apos;, y luego no generaliza bien a datos nuevos. Es como &apos;memorizar&apos; en lugar de &apos;entender&apos;.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Matriz de Confusión:</h4>
              <p>Una tabla que resume el rendimiento de un modelo de clasificación. Muestra los Verdaderos Positivos (TP), Falsos Positivos (FP), Verdaderos Negativos (TN) y Falsos Negativos (FN).</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Métricas de Evaluación:</h4>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li><strong>Precisión:</strong> De todos los que el modelo dijo que eran positivos, ¿cuántos lo eran realmente? (TP / (TP + FP)).</li>
                <li><strong>Recall (Sensibilidad):</strong> De todos los que eran realmente positivos, ¿cuántos detectó el modelo? (TP / (TP + FN)).</li>
                <li><strong>F1-Score:</strong> Media armónica de precisión y recall. Útil cuando las clases están desbalanceadas.</li>
                <li><strong>Índice Youden:</strong> Mide la efectividad general de un clasificador, combinando sensibilidad y especificidad.</li>
              </ul>
            </div>
          </li>
        </ul>
      </ContentCard>

      <ContentCard title="Tipos de Modelos de Clasificación">
        <h4 className="text-lg font-semibold text-title-dark mb-2">1. Regresión Logística</h4>
        <p>
            *   **Propósito:** Predecir la probabilidad de que un evento binario (dos resultados posibles) ocurra, y clasificar observaciones en una de esas dos categorías. Es un modelo de clasificación, a pesar de su nombre &apos;regresión&apos;.
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
        </p>

        <h4 className="text-lg font-semibold text-title-dark mt-4 mb-2">2. Análisis Discriminante Lineal (LDA - Linear Discriminant Analysis)</h4>
        <p>
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
        </p>

        <h4 className="text-lg font-semibold text-title-dark mt-4 mb-2">3. Random Forest</h4>
        <p>
            *   **Propósito:** Clasificación y regresión. Es un algoritmo de aprendizaje automático de tipo &apos;ensamble&apos; que combina la potencia de múltiples árboles de decisión para mejorar la precisión, la robustez y reducir el sobreajuste (overfitting).
            *   **Funcionamiento:** Construye un &quot;bosque&quot; de árboles de decisión. Cada árbol se entrena con una submuestra aleatoria de los datos de entrenamiento (muestreo con reemplazo, conocido como *bootstrap aggregating* o *bagging*). Además, en cada nodo de cada árbol, solo se considera un subconjunto aleatorio de las variables predictoras para la división. Para la clasificación, la predicción final se determina por la &quot;votación&quot; de la mayoría de los árboles; para la regresión, se promedian las predicciones de los árboles.
            *   **Supuestos Clave:** Random Forest es un algoritmo no paramétrico y tiene menos supuestos formales que la regresión logística o LDA.
                *   **Independencia de las observaciones:** Las observaciones deben ser independientes.
                *   **No requiere normalidad ni linealidad:** No asume una distribución específica de los datos ni relaciones lineales entre variables.
                *   **Maneja bien la multicolinealidad:** Es menos sensible a la multicolinealidad entre las variables predictoras.
                *   **Maneja datos faltantes y atípicos:** Es robusto frente a estos problemas, aunque el preprocesamiento siempre es recomendable.
            *   **Cuándo y Cómo Usar:**
                *   **Cuándo:** Es una opción excelente para una amplia gama de problemas de clasificación y regresión, especialmente cuando se tienen conjuntos de datos grandes, complejos, con muchas variables, o cuando las relaciones entre las variables no son lineales. Es muy popular por su alta precisión y su capacidad para manejar diferentes tipos de datos.
                *   **Cómo:** Se entrena el modelo especificando el número de árboles y el número de variables a considerar en cada división. Se evalúa su rendimiento utilizando métricas como la precisión, recall, F1-score, AUC-ROC (para clasificación) o R-cuadrado, RMSE (para regresión). Además, Random Forest puede proporcionar la &quot;importancia de las características&quot;, indicando qué variables son más influyentes en la predicción.
            *   **Importancia en Sanidad:** Su robustez y alta precisión lo hacen ideal para la medicina de precisión, la predicción de resultados complejos, la identificación de biomarcadores, y la estratificación de riesgo en poblaciones grandes. Puede descubrir patrones complejos en datos clínicos, genómicos, de imágenes o de estilo de vida que otros modelos más simples podrían pasar por alto.
            *   **Ejemplo Detallado:** Un centro de investigación oncológica está desarrollando un modelo para predecir la respuesta de pacientes con un tipo específico de cáncer a una nueva terapia (Respuesta Completa/Respuesta Parcial/No Respuesta). Se dispone de un conjunto de datos muy grande que incluye información clínica (estadio del cáncer, edad, comorbilidades), datos genómicos (expresión de miles de genes), datos de patología (características histológicas del tumor) y datos de imagen (características extraídas de tomografías). Dada la complejidad y el alto número de variables, Random Forest es una opción ideal. El modelo puede identificar qué combinaciones de genes, características tumorales y datos clínicos son los más predictivos de la respuesta al tratamiento. Esto no solo ayuda a predecir la respuesta en nuevos pacientes, sino que también puede revelar nuevos biomarcadores o vías biológicas relevantes para la enfermedad, guiando el desarrollo de terapias más dirigidas y personalizadas.
        </p>
      </ContentCard>

      <AlertBox icon={MdWarningAmber} title="¡Advertencia!">
        <p>
          La elección del modelo de clasificación depende de la naturaleza de tus datos y del problema que quieras resolver. Siempre es crucial evaluar el rendimiento del modelo con métricas adecuadas y no solo con la precisión.
        </p>
      </AlertBox>
    </div>
  );
}
