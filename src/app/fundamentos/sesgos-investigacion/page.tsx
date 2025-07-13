
'use client';

import React from 'react';
import PageTitle from '@/components/PageTitle';
import ContentCard from '@/components/ContentCard';
import AlertBox from '@/components/AlertBox';
import { MdWarningAmber } from 'react-icons/md';

export default function SesgosInvestigacionPage() {
  return (
    <div>
      <PageTitle title="Sesgos en Investigación: Las Trampas Ocultas de la Evidencia" />

      <ContentCard title="El Caso Clínico: ¿Es Realmente Efectivo el Tratamiento?">
        <p>
          Estás leyendo un estudio que afirma que un nuevo tratamiento es muy eficaz. Pero, ¿cómo puedes estar seguro de que los resultados no están &apos;inflados&apos; o distorsionados por algún factor no intencionado? Aquí es donde entran los <strong>sesgos</strong>.
        </p>
        <p>
          Un sesgo es un error sistemático en el diseño, la conducción o el análisis de un estudio que lleva a una estimación incorrecta de la asociación entre una exposición y un resultado. Es una desviación de la verdad que puede hacer que los resultados parezcan más o menos importantes de lo que realmente son.
        </p>
      </ContentCard>

      <ContentCard title="Tipos Comunes de Sesgos" variant="highlight">
        <h4 className="text-lg font-semibold text-title-dark mb-2">1. Sesgo de Selección</h4>
        <p className="mb-4">
          Ocurre cuando la forma en que se seleccionan los participantes para el estudio (o cómo se pierden durante el seguimiento) lleva a que los grupos no sean comparables.
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li><strong>Ejemplo:</strong> Un estudio sobre la eficacia de un fármaco para la hipertensión que solo recluta pacientes de un hospital terciario, que pueden ser más graves o tener más comorbilidades que la población general.</li>
          <li><strong>Cómo minimizarlo:</strong> Aleatorización (en ensayos clínicos), muestreo probabilístico, criterios de inclusión/exclusión claros y estrictos.</li>
        </ul>

        <h4 className="text-lg font-semibold text-title-dark mt-4 mb-2">2. Sesgo de Información (o de Clasificación)</h4>
        <p className="mb-4">
          Ocurre cuando hay errores en la medición o clasificación de la exposición o del resultado. La información recogida no es precisa o es diferente entre los grupos.
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li><strong>Sesgo de Memoria (Recall Bias):</strong> Los participantes con una enfermedad recuerdan mejor o peor sus exposiciones pasadas que los controles.</li>
          <li><strong>Sesgo del Observador (Observer Bias):</strong> El conocimiento del estado de exposición o enfermedad del participante influye en cómo el investigador mide o interpreta los resultados.</li>
          <li><strong>Ejemplo:</strong> En un estudio de casos y controles sobre el tabaquismo y el cáncer de pulmón, los pacientes con cáncer pueden recordar con más detalle su historial de tabaquismo que los controles sanos.</li>
          <li><strong>Cómo minimizarlo:</strong> Cegamiento (simple, doble, triple), uso de instrumentos de medida estandarizados y validados, fuentes de información objetivas.</li>
        </ul>

        <h4 className="text-lg font-semibold text-title-dark mt-4 mb-2">3. Sesgo de Confusión</h4>
        <p className="mb-4">
          Ocurre cuando la asociación observada entre una exposición y un resultado es distorsionada por una tercera variable (la variable confusora) que está asociada tanto con la exposición como con el resultado, pero no es un paso intermedio en la cadena causal.
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li><strong>Ejemplo:</strong> Se observa que el consumo de café está asociado con un mayor riesgo de infarto. Sin embargo, los bebedores de café también suelen fumar. El tabaquismo es la variable confusora.</li>
          <li><strong>Cómo minimizarlo:</strong> Aleatorización, estratificación, ajuste estadístico (regresión), emparejamiento.</li>
        </ul>
      </ContentCard>

      <AlertBox icon={MdWarningAmber} title="¡Advertencia!">
        <p>
          Los sesgos son una amenaza constante para la validez de los estudios. Es fundamental identificarlos, minimizarlos en el diseño y la ejecución, y considerarlos al interpretar los resultados. Un estudio con sesgos importantes puede llevar a conclusiones erróneas.
        </p>
      </AlertBox>
    </div>
  );
}
