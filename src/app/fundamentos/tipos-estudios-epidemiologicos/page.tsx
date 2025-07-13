
'use client';

import React from 'react';
import PageTitle from '@/components/PageTitle';
import ContentCard from '@/components/ContentCard';
import AlertBox from '@/components/AlertBox';
import { MdScience, MdInfoOutline } from 'react-icons/md';

export default function TiposEstudiosEpidemiologicosPage() {
  return (
    <div>
      <PageTitle title="Tipos de Estudios Epidemiológicos: La Arquitectura de la Investigación" />

      <ContentCard title="El Caso Clínico: ¿Fumar Causa Cáncer de Pulmón?">
        <p>
          Como profesional sanitario, constantemente te encuentras con afirmaciones sobre la relación entre factores de riesgo y enfermedades. ¿Cómo se llega a esas conclusiones? La respuesta está en el diseño de los estudios. Entender los diferentes tipos de estudios epidemiológicos es crucial para interpretar la evidencia científica y aplicarla correctamente en tu práctica.
        </p>
        <p>
          Cada tipo de estudio tiene sus fortalezas y debilidades, y es adecuado para responder a diferentes tipos de preguntas de investigación.
        </p>
      </ContentCard>

      <ContentCard title="1. Estudios Observacionales" variant="highlight">
        <p>
          En estos estudios, el investigador <strong>observa</strong> lo que ocurre sin intervenir. Son útiles para generar hipótesis y explorar asociaciones.
        </p>
        <h4 className="text-lg font-semibold text-title-dark mt-4 mb-2">a) Estudios de Cohortes</h4>
        <ul className="space-y-4 mt-4">
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h5 className="font-semibold">¿Qué son?:</h5>
              <p>Se selecciona un grupo de personas (cohorte) libres de la enfermedad y se les sigue a lo largo del tiempo para ver quiénes desarrollan la enfermedad y quiénes no, en función de su exposición a un factor de riesgo.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h5 className="font-semibold">Ventajas:</h5>
              <p>Permiten establecer la secuencia temporal (exposición antes que enfermedad) y calcular la incidencia (casos nuevos).</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h5 className="font-semibold">Desventajas:</h5>
              <p>Costosos, largos, y no adecuados para enfermedades raras.</p>
            </div>
          </li>
        </ul>

        <h4 className="text-lg font-semibold text-title-dark mt-4 mb-2">b) Estudios de Casos y Controles</h4>
        <ul className="space-y-4 mt-4">
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h5 className="font-semibold">¿Qué son?:</h5>
              <p>Se seleccionan personas con la enfermedad (casos) y un grupo similar sin la enfermedad (controles). Luego se investiga retrospectivamente su exposición a factores de riesgo en el pasado.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h5 className="font-semibold">Ventajas:</h5>
              <p>Rápidos, económicos, y útiles para enfermedades raras.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h5 className="font-semibold">Desventajas:</h5>
              <p>Susceptibles a sesgos (ej. de memoria) y no permiten calcular la incidencia.</p>
            </div>
          </li>
        </ul>

        <h4 className="text-lg font-semibold text-title-dark mt-4 mb-2">c) Estudios Transversales (o de Prevalencia)</h4>
        <ul className="space-y-4 mt-4">
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h5 className="font-semibold">¿Qué son?:</h5>
              <p>Miden la exposición y la enfermedad en un mismo momento en el tiempo. Es como una &apos;fotografía&apos; de la población en un instante dado.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h5 className="font-semibold">Ventajas:</h5>
              <p>Rápidos, económicos, y útiles para estimar la prevalencia de una enfermedad.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h5 className="font-semibold">Desventajas:</h5>
              <p>No permiten establecer causalidad (no hay secuencia temporal).</p>
            </div>
          </li>
        </ul>
      </ContentCard>

      <ContentCard title="2. Estudios Experimentales (Ensayos Clínicos)">
        <p>
          En estos estudios, el investigador <strong>interviene</strong>, asignando la exposición (ej. un tratamiento) a los participantes. Son el estándar de oro para establecer causalidad.
        </p>
        <h4 className="text-lg font-semibold text-title-dark mt-4 mb-2">a) Ensayos Clínicos Aleatorizados (ECA)</h4>
        <ul className="space-y-4 mt-4">
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h5 className="font-semibold">¿Qué son?:</h5>
              <p>Los participantes son asignados al azar a un grupo de intervención (recibe el tratamiento) o a un grupo control (recibe placebo o tratamiento estándar). Se les sigue prospectivamente para ver los resultados.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h5 className="font-semibold">Ventajas:</h5>
              <p>Minimizan el sesgo y son la mejor evidencia para establecer causalidad.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h5 className="font-semibold">Desventajas:</h5>
              <p>Costosos, largos, y a veces no éticos o factibles para ciertas exposiciones.</p>
            </div>
          </li>
        </ul>
      </ContentCard>

      <AlertBox icon={MdInfoOutline} title="Punto Clave">
        <p>
          Elegir el diseño de estudio adecuado es el primer paso crítico en cualquier investigación. Un buen diseño minimiza los sesgos y permite obtener conclusiones válidas y generalizables.
        </p>
      </AlertBox>
    </div>
  );
}
