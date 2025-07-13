'use client';

import React from 'react';
import PageTitle from '@/components/PageTitle';
import ContentCard from '@/components/ContentCard';
import AlertBox from '@/components/AlertBox';
import { MdScience, MdInfoOutline } from 'react-icons/md';
import MedianComparisonVisualizer from '@/components/MedianComparisonVisualizer';

export default function PruebasNoParametricasPage() {
  return (
    <div>
      <PageTitle title="Pruebas No Paramétricas: Cuando tus Datos Rompen la Norma" />

      <ContentCard title="El Caso Clínico: Datos Atípicos o Escalas Ordinales">
        <p>
          Imagina que estás estudiando el efecto de un nuevo analgésico en el dolor, medido en una escala de 1 a 10. O quizás, tienes datos de un estudio piloto con muy pocos pacientes, y la distribución de tus variables no es normal. En estos casos, las pruebas paramétricas que acabamos de ver (Test t, ANOVA) no son adecuadas porque sus supuestos no se cumplen.
        </p>
        <p>
          Las <strong>pruebas no paramétricas</strong> son la alternativa. Son más &apos;flexibles&apos; porque no requieren que los datos sigan una distribución específica (como la normal) y son robustas frente a valores atípicos. A menudo, trabajan con rangos o medianas en lugar de medias.
        </p>
      </ContentCard>

      <ContentCard title="¿Cuándo Usar Pruebas No Paramétricas?" variant="highlight">
        <ul className="space-y-4 mt-4">
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Datos no normales:</h4>
              <p>Cuando la variable dependiente no sigue una distribución normal y el tamaño de la muestra es pequeño (con muestras grandes, las pruebas paramétricas son más robustas incluso con desviaciones de la normalidad).</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Variables ordinales:</h4>
              <p>Cuando la variable dependiente es de tipo ordinal (ej. nivel de satisfacción, grado de mejoría).</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Valores atípicos extremos:</h4>
              <p>Cuando hay valores extremos que distorsionan la media y la desviación típica.</p>
            </div>
          </li>
        </ul>
        <AlertBox icon={MdInfoOutline} title="Punto Clave">
          <p>
            Aunque son más flexibles, las pruebas no paramétricas suelen tener menos &apos;potencia&apos; que sus equivalentes paramétricas. Esto significa que necesitan una diferencia mayor para detectarla como estadísticamente significativa.
          </p>
        </AlertBox>
      </ContentCard>

      <ContentCard title="Pruebas No Paramétricas Comunes">
        <h4 className="text-lg font-semibold text-title-dark mb-2">1. Prueba U de Mann-Whitney</h4>
        <p>
          Es la alternativa no paramétrica al <strong>Test t de Student para muestras independientes</strong>. Se usa para comparar dos grupos independientes cuando la variable dependiente es ordinal o cuantitativa no normal. Compara las medianas o las distribuciones de los rangos.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          <strong>Ejemplo:</strong> Comparar el nivel de dolor (escala 1-10) entre pacientes que recibieron un placebo y los que recibieron un nuevo analgésico.
        </p>

        <h4 className="text-lg font-semibold text-title-dark mt-4 mb-2">2. Prueba de Wilcoxon (para muestras pareadas)</h4>
        <p>
          Es la alternativa no paramétrica al <strong>Test t de Student para muestras pareadas</strong>. Se usa cuando tienes dos mediciones del mismo sujeto (antes/después) y los datos no cumplen los supuestos de normalidad. Compara las medianas de las diferencias.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          <strong>Ejemplo:</strong> Evaluar la mejoría en la movilidad (escala ordinal) de pacientes antes y después de una fisioterapia.
        </p>

        <h4 className="text-lg font-semibold text-title-dark mt-4 mb-2">3. Coeficiente de Correlación de Spearman</h4>
        <p>
          Es la alternativa no paramétrica al <strong>Coeficiente de Correlación de Pearson</strong>. Se usa para medir la fuerza y dirección de la relación entre dos variables ordinales o cuantitativas no normales. Se basa en los rangos de los datos, no en los valores brutos.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          <strong>Ejemplo:</strong> Relacionar el nivel de estrés percibido (escala ordinal) con el número de horas de sueño (cuantitativa no normal).
        </p>
      </ContentCard>

      <h4 className="text-lg font-semibold text-title-dark mt-4 mb-2">4. Pruebas No Paramétricas para Comparar Más de Dos Grupos</h4>

      <h5 className="text-md font-semibold text-gray-700 mb-1">a) Prueba de Kruskal-Wallis</h5>
      <p className="mb-2">
        Es la alternativa no paramétrica al <strong>ANOVA de un factor</strong>. Se usa para comparar las medianas de tres o más grupos independientes cuando la variable dependiente es ordinal o cuantitativa no normal.
      </p>
      <p className="text-sm text-gray-600 mt-2 mb-4">
        <strong>Ejemplo:</strong> Comparar el nivel de dolor (escala 1-10) entre pacientes que recibieron tres analgésicos diferentes.
      </p>

      <h5 className="text-md font-semibold text-gray-700 mb-1">b) Prueba de Friedman</h5>
      <p className="mb-2">
        Es la alternativa no paramétrica al <strong>ANOVA de medidas repetidas</strong>. Se usa cuando tienes tres o más mediciones del mismo sujeto en diferentes condiciones o momentos, y los datos no cumplen los supuestos de normalidad.
      </p>
      <p className="text-sm text-gray-600 mt-2">
        <strong>Ejemplo:</strong> Evaluar la mejoría en la movilidad (escala ordinal) de pacientes en tres momentos diferentes después de una fisioterapia.
      </p>

      <ContentCard title="Visualizador de Comparación de Medianas" variant="highlight">
        <MedianComparisonVisualizer />
        <p className="text-sm text-gray-600 mt-4">
          Este gráfico compara la <strong>media</strong> y la <strong>mediana</strong> de dos grupos. Observa cómo en el &apos;Grupo Con Atípico&apos;, la media se ve arrastrada por un valor extremo, mientras que la mediana permanece más estable. Esto demuestra la robustez de la mediana frente a valores atípicos, haciéndola una medida de tendencia central más adecuada en distribuciones asimétricas o con datos extremos.
        </p>
      </ContentCard>
    </div>
  );
}
