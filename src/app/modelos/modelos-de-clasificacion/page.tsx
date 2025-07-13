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

      <ContentCard title="Conceptos Clave en Clasificación">
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
          A pesar de su nombre, es un modelo de clasificación. Predice la <strong>probabilidad</strong> de que un evento binario (Sí/No, Enfermo/Sano) ocurra. Es muy utilizado para identificar factores de riesgo y predecir la probabilidad de una enfermedad.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          <strong>Ejemplo:</strong> Predecir la probabilidad de desarrollar diabetes tipo 2 basándose en la edad, IMC, antecedentes familiares y nivel de glucosa.
        </p>

        <h4 className="text-lg font-semibold text-title-dark mt-4 mb-2">2. Análisis Discriminante Lineal (LDA)</h4>
        <p>
          Busca una combinación lineal de características que mejor separe dos o más clases de datos. Es útil para reducir la dimensionalidad y clasificar.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          <strong>Ejemplo:</strong> Clasificar a pacientes en diferentes subtipos de una enfermedad basándose en biomarcadores.
        </p>

        <h4 className="text-lg font-semibold text-title-dark mt-4 mb-2">3. Random Forest</h4>
        <p>
          Es un algoritmo de &apos;ensamble&apos; que combina múltiples árboles de decisión para mejorar la precisión y reducir el overfitting. Es muy robusto y funciona bien con muchos tipos de datos.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          <strong>Ejemplo:</strong> Predecir el riesgo de reingreso hospitalario basándose en un gran número de variables clínicas y demográficas.
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
