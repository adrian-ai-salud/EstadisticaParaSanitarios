'use client';

import React from 'react';
import PageTitle from '@/components/PageTitle';
import ContentCard from '@/components/ContentCard';
import AlertBox from '@/components/AlertBox';
import { MdScience, MdWarningAmber } from 'react-icons/md';

export default function RegresionLinealMultiplePage() {
  return (
    <div>
      <PageTitle title="Regresión Lineal Múltiple: Prediciendo Valores Continuos" />

      <ContentCard title="El Caso Clínico: Prediciendo el Peso al Nacer">
        <p>
          Imagina que quieres predecir el peso al nacer de un bebé. Sabes que no solo depende de la duración del embarazo, sino también de la edad de la madre, si fuma o no, su nutrición, etc. La <strong>Regresión Lineal Múltiple</strong> te permite usar varias de estas variables (independientes) para predecir una variable continua (el peso al nacer, la variable dependiente).
        </p>
        <p>
          Es una extensión de la regresión lineal simple, pero mucho más potente, ya que considera la influencia combinada de múltiples factores.
        </p>
      </ContentCard>

      <ContentCard title="El Modelo: La Ecuación de Predicción" variant="highlight">
        <p>
          El corazón de la regresión lineal múltiple es una ecuación que se parece a:
        </p>
        <p className="font-mono italic mb-4 text-center">
          Y = β₀ + β₁X₁ + β₂X₂ + ... + βₚXₚ + ε
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
              <p>El intercepto, el valor de Y cuando todas las X son cero.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">β₁...βₚ:</h4>
              <p>Los coeficientes de regresión. Indican cuánto cambia Y por cada unidad de cambio en la X correspondiente, manteniendo las otras X constantes.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">X₁...Xₚ:</h4>
              <p>Las variables independientes o predictoras (ej. edad de la madre, duración del embarazo).</p>
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
          Para que los resultados de tu regresión lineal múltiple sean válidos y fiables, se deben cumplir varios supuestos:
        </p>
        <ul className="space-y-4 mt-4">
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Linealidad:</h4>
              <p>La relación entre las variables independientes y la dependiente debe ser lineal.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Independencia de los Errores:</h4>
              <p>Los residuos (errores) deben ser independientes entre sí (no deben estar correlacionados). Se puede verificar con la prueba de Durbin-Watson.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Homocedasticidad:</h4>
              <p>La varianza de los residuos debe ser constante en todos los niveles de las variables independientes.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Normalidad de los Residuos:</h4>
              <p>Los residuos deben seguir una distribución normal. Se puede verificar con histogramas de residuos o pruebas como Jarque-Bera.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Ausencia de Multicolinealidad:</h4>
              <p>Las variables independientes no deben estar altamente correlacionadas entre sí. Se verifica con el Factor de Inflación de la Varianza (VIF).</p>
            </div>
          </li>
        </ul>
      </ContentCard>

      <ContentCard title="Bondad de Ajuste: ¿Qué tan Bien Predice el Modelo?" variant="highlight">
        <h4 className="text-lg font-semibold text-title-dark mb-2">R² (R-cuadrado)</h4>
        <p>
          Indica la proporción de la variabilidad de la variable dependiente que es explicada por el modelo. Un R² de 0.70 significa que el 70% de la variación en el peso al nacer es explicada por las variables que incluiste en tu modelo.
        </p>
        <h4 className="text-lg font-semibold text-title-dark mt-4 mb-2">R² Ajustado</h4>
        <p>
          Es una versión modificada del R² que penaliza la inclusión de variables independientes que no aportan mucho al modelo. Es más útil para comparar modelos con diferente número de predictores.
        </p>
        <h4 className="text-lg font-semibold text-title-dark mt-4 mb-2">RMSE (Root Mean Squared Error)</h4>
        <p>
          Mide la magnitud promedio de los errores del modelo. Un RMSE bajo indica que el modelo predice con mayor precisión.
        </p>
        <AlertBox icon={MdWarningAmber} title="¡Advertencia!">
          <p>
            Un modelo con un R² alto no siempre es el mejor. Es crucial que los supuestos se cumplan y que el modelo sea interpretable y clínicamente relevante.
          </p>
        </AlertBox>
      </ContentCard>
    </div>
  );
}
