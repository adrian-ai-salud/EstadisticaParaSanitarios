
'use client';

import React from 'react';
import PageTitle from '@/components/PageTitle';
import ContentCard from '@/components/ContentCard';
import AlertBox from '@/components/AlertBox';
import { MdScience, MdInfoOutline, MdWarningAmber } from 'react-icons/md';

export default function CurvasKaplanMeierPage() {
  return (
    <div>
      <PageTitle title="Curvas de Kaplan-Meier: Visualizando la Supervivencia" />

      <ContentCard title="El Caso Clínico: Supervivencia de Pacientes con Cáncer">
        <p>
          Estás siguiendo a un grupo de pacientes con un tipo específico de cáncer para ver cuánto tiempo viven después del diagnóstico. Algunos pacientes fallecen, otros siguen vivos al final del estudio, y algunos se pierden en el seguimiento. ¿Cómo representas todo esto de forma clara?
        </p>
        <p>
          Las <strong>Curvas de Kaplan-Meier</strong> son la herramienta estándar para estimar y visualizar la probabilidad de supervivencia a lo largo del tiempo, teniendo en cuenta la información de los pacientes censurados.
        </p>
      </ContentCard>

      <ContentCard title="¿Cómo se Construye una Curva de Kaplan-Meier?">
        <p>
          La curva de Kaplan-Meier es una función escalonada que disminuye cada vez que ocurre un evento. La probabilidad de supervivencia se calcula multiplicando las probabilidades de supervivencia en cada punto de tiempo donde ocurre un evento.
        </p>
        <ul className="space-y-4 mt-4">
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Eje X (Tiempo):</h4>
              <p>Representa el tiempo desde el inicio del seguimiento (ej. meses desde el diagnóstico).</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Eje Y (Probabilidad de Supervivencia):</h4>
              <p>Va de 1.0 (100% de supervivencia al inicio) a 0.0. Cada &apos;escalón&apos; hacia abajo indica que ha ocurrido un evento.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Marcas de Censura:</h4>
              <p>Los pacientes censurados se indican con una marca (ej. una cruz o un círculo) en la curva, mostrando que su seguimiento terminó sin que ocurriera el evento.</p>
            </div>
          </li>
        </ul>
        <AlertBox icon={MdInfoOutline} title="Punto Clave">
          <p>
            La curva de Kaplan-Meier es una estimación no paramétrica, lo que significa que no asume una distribución específica para el tiempo de supervivencia.
          </p>
        </AlertBox>
      </ContentCard>

      <ContentCard title="Comparando Curvas: El Test de Log-Rank">
        <p>
          A menudo, queremos comparar las curvas de supervivencia entre dos o más grupos (ej. pacientes que recibieron un tratamiento A vs. un tratamiento B). El <strong>Test de Log-Rank</strong> es la prueba estadística más común para determinar si hay diferencias significativas en las curvas de supervivencia entre los grupos.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Un p-valor bajo en el test de Log-Rank sugiere que las curvas de supervivencia son significativamente diferentes, lo que implica que la probabilidad de supervivencia es distinta entre los grupos.
        </p>
        <AlertBox icon={MdWarningAmber} title="¡Advertencia!">
          <p>
            El test de Log-Rank es sensible a las diferencias en la parte final de las curvas. Si las diferencias ocurren al principio, otras pruebas pueden ser más adecuadas. Además, no nos dice la magnitud del efecto, solo si hay una diferencia.
          </p>
        </AlertBox>
      </ContentCard>
    </div>
  );
}

