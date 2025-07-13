'use client';

import React from 'react';
import PageTitle from '@/components/PageTitle';
import ContentCard from '@/components/ContentCard';
import AlertBox from '@/components/AlertBox';
import { MdScience, MdInfoOutline } from 'react-icons/md';
import CensoringVisualizer from '@/components/CensoringVisualizer';

export default function ConceptosClaveSupervivenciaPage() {
  return (
    <div>
      <PageTitle title="Análisis de Supervivencia: El Tiempo es Clave" />

      <ContentCard title="El Caso Clínico: ¿Cuánto Tiempo Vive un Paciente?">
        <p>
          En oncología, no solo nos interesa si un tratamiento funciona, sino <strong>cuánto tiempo</strong> vive el paciente sin que la enfermedad progrese, o cuánto tiempo pasa hasta que ocurre un evento (ej. la muerte, la recaída, la aparición de una complicación). Aquí es donde el <strong>Análisis de Supervivencia</strong> se vuelve indispensable.
        </p>
        <p>
          Esta rama de la estadística se especializa en analizar el tiempo transcurrido hasta que ocurre un evento de interés. No solo se aplica a la muerte, sino a cualquier evento que pueda ocurrir en el tiempo (ej. tiempo hasta el alta hospitalaria, tiempo hasta la aparición de una infección).
        </p>
      </ContentCard>

      <ContentCard title="Conceptos Fundamentales" variant="highlight">
        <ul className="space-y-4">
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Tiempo hasta el Evento:</h4>
              <p>Es la variable principal. El tiempo transcurrido desde un punto de inicio (ej. diagnóstico, inicio del tratamiento) hasta que ocurre el evento de interés (ej. muerte, recaída, curación).</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Evento:</h4>
              <p>El resultado de interés que marca el final del seguimiento para ese individuo (ej. muerte, recaída, alta).</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Censura:</h4>
              <p>Es la característica más distintiva del análisis de supervivencia. Ocurre cuando no tenemos información completa sobre el tiempo hasta el evento para todos los individuos. Esto puede pasar por varias razones:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li><strong>Censura por la derecha:</strong> El paciente sigue vivo al final del estudio, se pierde en el seguimiento, o el evento no ha ocurrido al final del periodo de observación. Sabemos que el evento ocurrirá <em>después</em> de un cierto tiempo, pero no cuándo.</li>
                <li><strong>Censura por la izquierda:</strong> Sabemos que el evento ocurrió antes de un cierto tiempo, pero no el momento exacto.</li>
                <li><strong>Censura por intervalo:</strong> Sabemos que el evento ocurrió entre dos puntos de tiempo.</li>
              </ul>
            </div>
          </li>
        </ul>
        <AlertBox icon={MdInfoOutline} title="Punto Clave">
          <p>
            Manejar la censura correctamente es crucial. Si simplemente ignoramos los pacientes censurados, subestimaríamos el tiempo de supervivencia.
          </p>
        </AlertBox>
      </ContentCard>

      <ContentCard title="Visualizador de Censura">
        <CensoringVisualizer />
        <p className="text-sm text-gray-600 mt-4">
          Este gráfico ilustra el concepto de censura. Los puntos azules representan eventos (ej. fallecimiento), mientras que las cruces rojas indican observaciones censuradas (ej. paciente que se perdió en el seguimiento). Observa cómo la censura nos impide conocer el tiempo exacto del evento para algunos individuos.
        </p>
      </ContentCard>
    </div>
  );
}
