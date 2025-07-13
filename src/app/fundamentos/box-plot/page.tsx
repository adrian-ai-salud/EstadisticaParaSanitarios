
'use client';

import React from 'react';
import PageTitle from '@/components/PageTitle';
import ContentCard from '@/components/ContentCard';
import AlertBox from '@/components/AlertBox';
import { MdInfoOutline, MdScience } from 'react-icons/md';

export default function BoxPlotPage() {
  return (
    <div>
      <PageTitle title="Box Plot (Diagrama de Caja y Bigotes): Visualizando la Distribución" />

      <ContentCard title="El Caso Clínico: Distribución de Edades en un Estudio">
        <p>
          Estás analizando la distribución de edades de los pacientes en un estudio. Quieres ver rápidamente no solo la edad promedio, sino también cómo se dispersan los datos, dónde se concentra la mayoría, y si hay edades inusualmente bajas o altas. El <strong>Box Plot</strong> es una herramienta visual excelente para esto.
        </p>
        <p>
          Es un gráfico que resume la distribución de una variable cuantitativa utilizando cinco números clave, lo que lo hace muy útil para comparar distribuciones entre diferentes grupos.
        </p>
      </ContentCard>

      <ContentCard title="Componentes Clave de un Box Plot">
        <ul className="space-y-4 mt-4">
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Mediana (Línea Central):</h4>
              <p>Representa el 50% de los datos. Divide la caja en dos partes y es una medida de tendencia central.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Caja (Box):</h4>
              <p>Representa el 50% central de los datos, desde el primer cuartil (Q1) hasta el tercer cuartil (Q3). La longitud de la caja es el Rango Intercuartílico (RIC).</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Bigotes (Whiskers):</h4>
              <p>Se extienden desde la caja hasta los valores mínimo y máximo que no son considerados atípicos. Generalmente, se extienden hasta 1.5 veces el RIC desde Q1 y Q3.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Valores Atípicos (Outliers):</h4>
              <p>Puntos individuales que caen fuera de los bigotes. Indican valores extremos que pueden requerir una investigación adicional.</p>
            </div>
          </li>
        </ul>
      </ContentCard>

      <ContentCard title="¿Por qué es Útil el Box Plot?">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Resumen Rápido:</strong> Ofrece una visión concisa de la tendencia central, dispersión y asimetría de los datos.</li>
          <li><strong>Detección de Outliers:</strong> Facilita la identificación visual de valores extremos.</li>
          <li><strong>Comparación de Grupos:</strong> Es excelente para comparar la distribución de una variable entre dos o más grupos (ej. edades de pacientes con y sin una enfermedad).</li>
        </ul>
      </ContentCard>

      <AlertBox icon={MdInfoOutline} title="Punto Clave">
        <p>
          El Box Plot es una herramienta poderosa para el análisis exploratorio de datos, especialmente cuando se necesita comparar la distribución de una variable entre diferentes categorías.
        </p>
      </AlertBox>
    </div>
  );
}
