'use client';

import React from 'react';
import PageTitle from '@/components/PageTitle';
import ContentCard from '@/components/ContentCard';
import AlertBox from '@/components/AlertBox';
import { MdScience, MdInfoOutline } from 'react-icons/md';
import InteractiveTimeSeriesChart from '@/components/InteractiveTimeSeriesChart';

export default function ComponentesSeriesTemporalesPage() {
  return (
    <div>
      <PageTitle title="Series Temporales: Analizando Datos a lo Largo del Tiempo" />

      <ContentCard title="El Caso Clínico: Brotes de Gripe y Admisiones Hospitalarias">
        <p>
          Imagina que estás en el servicio de epidemiología y quieres predecir el número de casos de gripe para la próxima temporada, o el número de admisiones hospitalarias en urgencias cada día. Estos son ejemplos de <strong>series temporales</strong>: datos que se recogen y se analizan en puntos sucesivos en el tiempo.
        </p>
        <p>
          El análisis de series temporales es crucial en salud pública para detectar brotes, planificar recursos, y entender patrones de enfermedades a lo largo del tiempo.
        </p>
      </ContentCard>

      <ContentCard title="Componentes de una Serie Temporal">
        <p>
          Una serie temporal se puede descomponer en varios componentes que nos ayudan a entender su comportamiento:
        </p>
        <ul className="space-y-4 mt-4">
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Tendencia:</h4>
              <p>El movimiento general a largo plazo de la serie. ¿Está aumentando, disminuyendo o manteniéndose estable? Ejemplo: el aumento gradual de la esperanza de vida.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Estacionalidad:</h4>
              <p>Patrones que se repiten en intervalos de tiempo fijos y conocidos (ej. diario, semanal, mensual, anual). Ejemplo: los picos de gripe en invierno, o el aumento de alergias en primavera.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Ciclos:</h4>
              <p>Fluctuaciones que no tienen una periodicidad fija y que suelen durar más de un año. A menudo están relacionados con ciclos económicos o sociales. Ejemplo: ciclos de epidemias que no son estacionales.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Ruido (o Componente Irregular):</h4>
              <p>La variación aleatoria que queda después de eliminar la tendencia, estacionalidad y ciclos. Es lo que no podemos explicar.</p>
            </div>
          </li>
        </ul>
        <AlertBox icon={MdInfoOutline} title="Punto Clave">
          <p>
            Visualizar estos componentes (ej. con boxplots mensuales para la estacionalidad o medias móviles para la tendencia) es el primer paso para entender y modelar una serie temporal.
          </p>
        </AlertBox>
      </ContentCard>

      <ContentCard title="Gráfico Interactivo de Componentes de Series Temporales">
        <InteractiveTimeSeriesChart />
        <p className="text-sm text-gray-600 mt-4">
          Utiliza el selector para aislar y visualizar cada componente de la serie temporal. Esto te ayudará a comprender cómo la tendencia, la estacionalidad y el residuo contribuyen a la forma general de la serie.
        </p>
      </ContentCard>
    </div>
  );
}
