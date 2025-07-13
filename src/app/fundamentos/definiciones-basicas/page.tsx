
'use client';

import React from 'react';
import PageTitle from '@/components/PageTitle';
import ContentCard from '@/components/ContentCard';
import { MdScience } from 'react-icons/md';

export default function DefinicionesBasicasPage() {
  return (
    <div>
      <PageTitle title="Definiciones Básicas: El ABC de la Bioestadística" />

      <ContentCard title="1. Estadística Descriptiva vs. Inferencial">
        <ul className="space-y-4">
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Estadística Descriptiva:</h4>
              <p>Se encarga de organizar, resumir y presentar los datos de una muestra o población. Es como tomar una &apos;fotografía&apos; de tus datos. Ejemplos: calcular la media de edad de tus pacientes, hacer un gráfico de barras de los grupos sanguíneos.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Estadística Inferencial:</h4>
              <p>Va más allá de la descripción. Utiliza los datos de una muestra para hacer inferencias, predicciones o generalizaciones sobre una población más grande. Es como usar la &apos;fotografía&apos; para entender el &apos;paisaje completo&apos;. Ejemplos: estimar la prevalencia de una enfermedad en una ciudad a partir de una muestra, probar si un nuevo fármaco es eficaz.</p>
            </div>
          </li>
        </ul>
      </ContentCard>

      <ContentCard title="2. Población y Muestra">
        <ul className="space-y-4">
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Población:</h4>
              <p>El conjunto completo de individuos, objetos o eventos que tienen una característica común y sobre los cuales queremos hacer inferencias. Ejemplos: todos los pacientes diabéticos de un hospital, todas las mujeres embarazadas de una región.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Muestra:</h4>
              <p>Un subconjunto representativo de la población que se selecciona para el estudio. Es lo que realmente medimos. Ejemplos: 100 pacientes diabéticos seleccionados al azar del hospital, 50 mujeres embarazadas de la región.</p>
            </div>
          </li>
        </ul>
      </ContentCard>

      <ContentCard title="3. Medidas de Tendencia Central">
        <p>Nos indican el &apos;centro&apos; o el valor más representativo de un conjunto de datos.</p>
        <ul className="space-y-4 mt-4">
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Media (Promedio):</h4>
              <p>La suma de todos los valores dividida por el número total de valores. Es la más común, pero sensible a valores extremos (outliers).</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Mediana:</h4>
              <p>El valor central en un conjunto de datos ordenado. Si hay un número par de datos, es el promedio de los dos centrales. Es robusta frente a valores extremos.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Moda:</h4>
              <p>El valor que aparece con mayor frecuencia en un conjunto de datos. Puede haber una moda, varias modas o ninguna.</p>
            </div>
          </li>
        </ul>
      </ContentCard>

      <ContentCard title="4. Medidas de Dispersión">
        <p>Nos indican cuánto se &apos;dispersan&apos; o varían los datos alrededor del centro.</p>
        <ul className="space-y-4 mt-4">
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Rango:</h4>
              <p>La diferencia entre el valor máximo y el valor mínimo. Muy sensible a valores extremos.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Rango Intercuartílico (RIC):</h4>
              <p>La diferencia entre el tercer cuartil (Q3) y el primer cuartil (Q1). Contiene el 50% central de los datos y es robusto a valores extremos.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Varianza:</h4>
              <p>Mide la dispersión promedio de los datos con respecto a la media, en unidades al cuadrado.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Desviación Típica (Desviación Estándar):</h4>
              <p>La raíz cuadrada de la varianza. Es la medida de dispersión más utilizada, en las mismas unidades que los datos originales.</p>
            </div>
          </li>
        </ul>
      </ContentCard>

      <ContentCard title="5. Frecuencias">
        <ul className="space-y-4">
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Frecuencia Absoluta:</h4>
              <p>El número de veces que un valor o categoría aparece en un conjunto de datos.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Frecuencia Relativa:</h4>
              <p>La proporción o porcentaje de veces que un valor o categoría aparece. Se calcula dividiendo la frecuencia absoluta por el número total de observaciones.</p>
            </div>
          </li>
        </ul>
      </ContentCard>
    </div>
  );
}
