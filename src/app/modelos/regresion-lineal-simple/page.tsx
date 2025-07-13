
'use client';

import React from 'react';
import PageTitle from '@/components/PageTitle';
import ContentCard from '@/components/ContentCard';
import AlertBox from '@/components/AlertBox';
import { MdScience, MdInfoOutline } from 'react-icons/md';

export default function RegresionLinealSimplePage() {
  return (
    <div>
      <PageTitle title="Regresión Lineal Simple: Prediciendo con una Variable" />

      <ContentCard title="El Caso Clínico: Prediciendo el Peso al Nacer por Edad Gestacional">
        <p>
          Imagina que quieres predecir el peso al nacer de un bebé basándote únicamente en la edad gestacional. La <strong>Regresión Lineal Simple</strong> es una técnica estadística que te permite modelar la relación entre dos variables continuas: una variable dependiente (el resultado que quieres predecir, ej. peso al nacer) y una única variable independiente (el predictor, ej. edad gestacional).
        </p>
        <p>
          El objetivo es encontrar la línea recta que mejor se ajusta a los datos, lo que nos permite predecir el valor de la variable dependiente a partir de la independiente.
        </p>
      </ContentCard>

      <ContentCard title="El Modelo: La Ecuación de la Recta" variant="highlight">
        <p>
          El corazón de la regresión lineal simple es una ecuación que se parece a:
        </p>
        <p className="font-mono italic mb-4 text-center">
          Y = β₀ + β₁X + ε
        </p>
        <ul className="space-y-4">
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Y:</h4>
              <p>La variable dependiente que queremos predecir (ej. peso al nacer).</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">β₀:</h4>
              <p>El intercepto, el valor de Y cuando X es cero (donde la línea cruza el eje Y).</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">β₁:</h4>
              <p>El coeficiente de regresión (la pendiente de la línea). Indica cuánto cambia Y por cada unidad de cambio en X.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">X:</h4>
              <p>La variable independiente o predictora (ej. edad gestacional).</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">ε:</h4>
              <p>El término de error, la parte de Y que el modelo no puede explicar.</p>
            </div>
          </li>
        </ul>
      </ContentCard>

      <ContentCard title="Supuestos Clave: Para que el Modelo Sea Fiable">
        <p>
          Al igual que la regresión lineal múltiple, la regresión lineal simple también tiene supuestos que deben cumplirse para que los resultados sean válidos y fiables. Son los mismos que para la regresión múltiple, pero aplicados a una sola variable independiente:
        </p>
        <ul className="space-y-4 mt-4">
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Linealidad:</h4>
              <p>La relación entre la variable independiente y la dependiente debe ser lineal.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Independencia de los Errores:</h4>
              <p>Los residuos (errores) deben ser independientes entre sí.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Homocedasticidad:</h4>
              <p>La varianza de los residuos debe ser constante en todos los niveles de la variable independiente.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Normalidad de los Residuos:</h4>
              <p>Los residuos deben seguir una distribución normal.</p>
            </div>
          </li>
        </ul>
        <AlertBox icon={MdInfoOutline} title="Punto Clave" type="info">
          <p>
            La regresión lineal simple es la base para entender modelos más complejos. Asegúrate de comprender sus supuestos antes de avanzar a la regresión lineal múltiple.
          </p>
        </AlertBox>
      </ContentCard>
    </div>
  );
}
