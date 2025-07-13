'use client';

import React from 'react';
import PageTitle from '@/components/PageTitle';
import ContentCard from '@/components/ContentCard';
import AlertBox from '@/components/AlertBox';
import { MdScience, MdInfoOutline } from 'react-icons/md';

export default function ModeloDeCoxPage() {
  return (
    <div>
      <PageTitle title="Modelo de Riesgos Proporcionales de Cox: Más Allá de la Curva" />

      <ContentCard title="El Caso Clínico: Factores de Riesgo en la Supervivencia">
        <p>
          Sabes que un nuevo tratamiento mejora la supervivencia, pero ¿qué pasa si los pacientes que reciben ese tratamiento son más jóvenes o tienen menos comorbilidades? ¿Cómo puedes aislar el efecto real del tratamiento, controlando por otros factores que también influyen en la supervivencia?
        </p>
        <p>
          El <strong>Modelo de Riesgos Proporcionales de Cox</strong> es la herramienta más utilizada para analizar la relación entre la supervivencia y múltiples variables (covariables) al mismo tiempo. Es como una regresión, pero diseñada específicamente para datos de supervivencia.
        </p>
      </ContentCard>

      <ContentCard title="¿Cómo Funciona el Modelo de Cox?">
        <p>
          A diferencia de las curvas de Kaplan-Meier que solo comparan grupos, el modelo de Cox nos permite evaluar el efecto de múltiples variables (edad, sexo, estadio de la enfermedad, tipo de tratamiento) sobre el riesgo de que ocurra el evento, controlando por las demás.
        </p>
        <ul className="space-y-4 mt-4">
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Riesgo (Hazard):</h4>
              <p>Es la probabilidad instantánea de que ocurra el evento en un momento dado, dado que no ha ocurrido antes. El modelo de Cox modela el logaritmo de este riesgo.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Riesgos Proporcionales:</h4>
              <p>El supuesto clave del modelo es que el efecto de las covariables sobre el riesgo es constante a lo largo del tiempo. Es decir, si un factor duplica el riesgo al inicio, lo duplica en cualquier momento posterior.</p>
            </div>
          </li>
        </ul>
      </ContentCard>

      <ContentCard title="Hazard Ratio (HR): La Medida Clave">
        <p>
          El resultado principal del modelo de Cox es el <strong>Hazard Ratio (HR)</strong>. Es una medida de la razón de riesgos entre dos grupos o por cada unidad de aumento en una variable continua, controlando por otras variables.
        </p>
        <ul className="space-y-4 mt-4">
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">HR = 1:</h4>
              <p>No hay diferencia en el riesgo entre los grupos o por el cambio en la variable.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">HR > 1:</h4>
              <p>Mayor riesgo de que ocurra el evento en el grupo expuesto o por cada unidad de aumento en la variable (ej. HR de 1.5 significa un 50% más de riesgo).</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            
          </li>
        </ul>
        <AlertBox icon={MdInfoOutline} title="Punto Clave">
          <p>
            El HR es una medida relativa. Siempre debe interpretarse junto con su intervalo de confianza. Si el IC del HR incluye el 1, el efecto no es estadísticamente significativo.
          </p>
        </AlertBox>
      </ContentCard>
    </div>
  );
}
