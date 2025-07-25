'use client';

import React from 'react';
import PageTitle from '@/components/PageTitle';
import ContentCard from '@/components/ContentCard';
import AlertBox from '@/components/AlertBox';
import { MdScience, MdInfoOutline } from 'react-icons/md';
import NormalDistributionCurveVisualizer from '@/components/NormalDistributionCurveVisualizer';

export default function DistribucionNormalPage() {
  return (
    <div>
      <PageTitle title="Distribución Normal: La Curva de Campana de la Salud" />

      <ContentCard title="El Caso Clínico: La Altura de los Pacientes">
        <p>
          Si mides la altura de miles de personas al azar, ¿qué patrón esperarías ver? La mayoría de la gente se agrupará alrededor de una altura promedio, y habrá menos personas muy bajas o muy altas. Este patrón es tan común en la naturaleza y en la salud que tiene un nombre: la <strong>Distribución Normal</strong>, o la famosa <strong>Curva de Campana</strong>.
        </p>
        <p>
          Es fundamental porque muchas variables biológicas y clínicas (tensión arterial, glucosa en ayunas, peso, etc.) tienden a seguir esta distribución. Entenderla nos permite saber si un valor individual es &apos;normal&apos; o &apos;inusual&apos;.
        </p>
      </ContentCard>

      <ContentCard title="Características Clave" variant="highlight">
        <ul className="space-y-4">
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Simétrica:</h4>
              <p>La mitad de los datos están a un lado de la media y la otra mitad al otro. La media, mediana y moda coinciden en el centro.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Forma de Campana:</h4>
              <p>Los valores más frecuentes están en el centro y la frecuencia disminuye a medida que nos alejamos de la media.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Definida por dos parámetros:</h4>
              <p>La media (μ), que indica el centro de la distribución, y la desviación típica (σ), que mide la dispersión o &apos;anchura&apos; de la campana.</p>
            </div>
          </li>
        </ul>
      </ContentCard>

      <ContentCard title="La Puntuación Z: Estandarizando los Valores">
        <p>
          Imagina que un paciente tiene una glucosa de 130 mg/dL. ¿Es esto alto? Depende de la media y la desviación típica de la población. La <strong>puntuación Z</strong> (o valor tipificado) nos permite comparar cualquier valor individual con la media de su grupo, expresándolo en &apos;cuántas desviaciones típicas&apos; se aleja de la media.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Una puntuación Z de 0 significa que el valor es exactamente la media. Una Z de +1 significa que está una desviación típica por encima de la media, y -2 significa que está dos desviaciones típicas por debajo.
        </p>
        <AlertBox icon={MdInfoOutline} title="Punto Clave" type="info">
          <p>
            La puntuación Z es la base para entender los percentiles y para realizar muchas pruebas estadísticas. Nos permite transformar cualquier distribución normal en una <strong>Normal Estándar</strong> (media 0, desviación típica 1), facilitando los cálculos de probabilidad.
          </p>
        </AlertBox>
      </ContentCard>

      <ContentCard title="Visualizador de Curva Normal" variant="highlight">
        <NormalDistributionCurveVisualizer />
      </ContentCard>

      <ContentCard title="Interpretando el Visualizador de Curva Normal">
        <p>
          Este gráfico interactivo te permite visualizar cómo la <strong>media (μ)</strong> y la <strong>desviación típica (σ)</strong> afectan la forma de la curva de distribución normal:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>La <strong>media (μ)</strong> desplaza la curva horizontalmente. Un cambio en la media mueve toda la campana a la izquierda o a la derecha.</li>
          <li>La <strong>desviación típica (σ)</strong> controla la &apos;anchura&apos; o dispersión de la curva. Una desviación típica pequeña resulta en una campana alta y estrecha (datos muy agrupados alrededor de la media), mientras que una grande produce una campana baja y ancha (datos más dispersos).</li>
        </ul>
        <p className="mt-4">
          Observa cómo la mayoría de los datos se concentran alrededor de la media, y la frecuencia disminuye a medida que te alejas de ella. Esta es la esencia de la distribución normal, fundamental para entender muchos fenómenos biológicos y para la inferencia estadística.
        </p>
      </ContentCard>
    </div>
  );
}
