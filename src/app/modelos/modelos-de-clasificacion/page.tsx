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
        <p className="mb-4">Los modelos de clasificación son herramientas esenciales en el análisis de datos sanitarios, permitiendo predecir categorías o grupos discretos (por ejemplo, enfermo/sano, tipo de enfermedad, respuesta a tratamiento). A continuación, exploramos algunos de los más relevantes:</p>
      </ContentCard>

      <ContentCard title="1. Regresión Logística" variant="highlight">
        <p className="mb-2">
          <strong>Propósito:</strong> Predice la probabilidad de un evento binario (Sí/No) y clasifica observaciones.
        </p>
        <p className="mb-2">
          <strong>Funcionamiento:</strong> Utiliza una función sigmoide para transformar predictores en probabilidades (0-1). Coeficientes interpretados como <em>Odds Ratios</em>.
        </p>
        <p className="mb-2">
          <strong>Supuestos Clave:</strong> Variable dependiente binaria, independencia, no multicolinealidad severa, linealidad del logit, tamaño de muestra adecuado.
        </p>
        <p className="mb-2">
          <strong>Uso:</strong> Identificar factores de riesgo, predecir probabilidad de enfermedad, evaluar tratamientos.
        </p>
        <p className="mb-2">
          <strong>Importancia en Sanidad:</strong> Fundamental en epidemiología y clínica por su interpretabilidad y cuantificación de riesgo.
        </p>
        <p>
          <strong>Ejemplo:</strong> Predecir el riesgo de enfermedad cardiovascular (ECV) basándose en edad, IMC, colesterol, etc., para identificar pacientes de alto riesgo y recomendar intervenciones preventivas.
        </p>
      </ContentCard>

      <ContentCard title="2. Análisis Discriminante Lineal (LDA)" >
        <p className="mb-2">
          <strong>Propósito:</strong> Clasificar observaciones en dos o más grupos, o reducir la dimensionalidad.
        </p>
        <p className="mb-2">
          <strong>Funcionamiento:</strong> Crea funciones lineales que maximizan la separación entre clases, asumiendo normalidad y varianzas iguales.
        </p>
        <p className="mb-2">
          <strong>Supuestos Clave:</strong> Normalidad multivariante, homocedasticidad, independencia, no multicolinealidad severa.
        </p>
        <p className="mb-2">
          <strong>Uso:</strong> Diagnóstico diferencial, subtipificación de enfermedades.
        </p>
        <p className="mb-2">
          <strong>Importancia en Sanidad:</strong> Valioso para clasificar pacientes en categorías relevantes para el tratamiento o pronóstico.
        </p>
        <p>
          <strong>Ejemplo:</strong> Clasificar tipos de demencia (Alzheimer, Vascular, Cuerpos de Lewy) basándose en biomarcadores para diagnóstico preciso.
        </p>
      </ContentCard>

      <ContentCard title="3. Random Forest" variant="highlight">
        <p className="mb-2">
          <strong>Propósito:</strong> Clasificación y regresión robusta, reduciendo el sobreajuste (overfitting).
        </p>
        <p className="mb-2">
          <strong>Funcionamiento:</strong> Ensambla múltiples árboles de decisión, entrenados con submuestras aleatorias de datos y características. La predicción final se obtiene por votación (clasificación) o promedio (regresión).
        </p>
        <p className="mb-2">
          <strong>Supuestos Clave:</strong> No paramétrico, independencia, no requiere normalidad/linealidad, maneja bien la multicolinealidad, y es robusto frente a datos faltantes o atípicos.
        </p>
        <p className="mb-2">
          <strong>Uso:</strong> Problemas complejos con muchos datos y variables, o cuando las relaciones no son lineales.
        </p>
        <p className="mb-2">
          <strong>Importancia en Sanidad:</strong> Ideal para medicina de precisión, predicción de resultados complejos, e identificación de biomarcadores.
        </p>
        <p>
          <strong>Ejemplo:</strong> Predecir el riesgo de reingreso hospitalario de pacientes con insuficiencia cardíaca, o la respuesta a una terapia oncológica, utilizando un gran volumen de datos clínicos, genómicos y de imagen.
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
