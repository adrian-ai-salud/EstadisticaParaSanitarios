'use client';

import React from 'react';
import PageTitle from '@/components/PageTitle';
import ContentCard from '@/components/ContentCard';
import AlertBox from '@/components/AlertBox';
import { MdScience, MdWarningAmber } from 'react-icons/md';
import TimeSeriesDecompositionVisualizer from '@/components/TimeSeriesDecompositionVisualizer';

export default function ModelosArimaPage() {
  return (
    <div>
      <PageTitle title="Modelos ARIMA: Prediciendo el Futuro con Series Temporales" />

      <ContentCard title="El Caso Clínico: Predicción de la Demanda Hospitalaria">
        <p>
          Como gestor hospitalario, necesitas predecir cuántas camas se necesitarán la próxima semana, o cuántos profesionales de enfermería harán falta en urgencias el próximo mes. Los <strong>modelos ARIMA</strong> son una de las herramientas más potentes y clásicas para hacer predicciones fiables con series temporales.
        </p>
        <p>
          ARIMA significa AutoRegressive Integrated Moving Average. Es una combinación de modelos que nos permite capturar la tendencia, la estacionalidad y la dependencia de los valores pasados en una serie temporal.
        </p>
      </ContentCard>

      <ContentCard title="Estacionariedad: La Clave para Modelar">
        <p>
          Para que muchos modelos de series temporales funcionen bien, la serie debe ser <strong>estacionaria</strong>. Esto significa que sus propiedades estadísticas (media, varianza, autocorrelación) no cambian con el tiempo.
        </p>
        <ul className="space-y-4 mt-4">
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">¿Por qué es importante?</h4>
              <p>Si una serie no es estacionaria, las predicciones basadas en el pasado pueden no ser válidas para el futuro. Es como intentar predecir el clima de mañana basándote en el clima de hace 100 años si el clima global está cambiando.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Test de Dickey-Fuller:</h4>
              <p>Una prueba estadística para determinar si una serie temporal es estacionaria o si tiene una &apos;raíz unitaria&apos; (no estacionaria).</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Diferenciación:</h4>
              <p>Si una serie no es estacionaria, a menudo podemos hacerla estacionaria calculando las diferencias entre observaciones consecutivas. Esto elimina la tendencia y la estacionalidad.</p>
            </div>
          </li>
        </ul>
      </ContentCard>

      <ContentCard title="Componentes de un Modelo ARIMA (p, d, q)">
        <p>
          Los parámetros (p, d, q) de un modelo ARIMA se refieren a:
        </p>
        <ul className="space-y-4 mt-4">
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">p (AutoRegresivo):</h4>
              <p>El número de observaciones pasadas que se utilizan para predecir el valor actual. Cuántos &apos;retrasos&apos; de la propia serie se incluyen.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">d (Integrado):</h4>
              <p>El número de veces que se ha diferenciado la serie para hacerla estacionaria. Si d=0, la serie ya era estacionaria.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">q (Media Móvil):</h4>
              <p>El número de errores de predicción pasados que se utilizan para predecir el valor actual.</p>
            </div>
          </li>
        </ul>
        <AlertBox icon={MdWarningAmber} title="¡Advertencia!">
          <p>
            Identificar los parámetros (p, d, q) correctos para un modelo ARIMA es un proceso que a menudo implica el análisis de gráficos de autocorrelación y autocorrelación parcial, y la comparación de diferentes modelos.
          </p>
        </AlertBox>
      </ContentCard>

      <ContentCard title="Visualizador de Descomposición de Series Temporales">
        <TimeSeriesDecompositionVisualizer />
        <p className="text-sm text-gray-600 mt-4">
          Este gráfico ilustra cómo una serie temporal (línea morada) puede descomponerse en sus componentes principales: la tendencia (línea verde), la estacionalidad (línea amarilla) y el residuo (línea naranja). Observa cómo la combinación de estos componentes reconstruye la serie original.
        </p>
      </ContentCard>
    </div>
  );
}
