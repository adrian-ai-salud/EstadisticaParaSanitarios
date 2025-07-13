'use client';

import React from 'react';
import PageTitle from '@/components/PageTitle';
import ContentCard from '@/components/ContentCard';
import AlertBox from '@/components/AlertBox';
import { MdInfoOutline } from 'react-icons/md';

export default function MuestreoInferenciaPage() {
  return (
    <div>
      <PageTitle title="Muestreo e Inferencia: De la Muestra a la Población" />

      <ContentCard title="El Dilema del Investigador">
        <p>
          Quieres saber la prevalencia de la hipertensión en todos los adultos de tu país (la <strong>población</strong>). Es imposible medirlos a todos. ¿Qué haces? Seleccionas un grupo más pequeño y manejable (la <strong>muestra</strong>) y los mides a ellos.
        </p>
        <p>
          La <strong>inferencia estadística</strong> es el arte y la ciencia de usar los resultados de tu muestra para hacer afirmaciones (inferencias) sobre la población total. Pero para que esto funcione, ¡la muestra debe ser representativa!
        </p>
      </ContentCard>

      <ContentCard title="Técnicas de Muestreo: ¿Cómo elegir?">
        <h4 className="text-lg font-semibold text-title-dark mb-2">Muestreo Probabilístico</h4>
        <p className="mb-4">
          Es el estándar de oro en investigación. Cada individuo de la población tiene una probabilidad conocida (y no nula) de ser seleccionado. Esto reduce el sesgo.
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li><strong>Aleatorio Simple:</strong> Como un sorteo. A cada persona se le asigna un número y se eligen al azar.</li>
          <li><strong>Estratificado:</strong> Divides la población en grupos relevantes (ej. por edad, sexo) y luego haces un muestreo aleatorio en cada grupo. Asegura la representación de todos los estratos.</li>
          <li><strong>Sistemático:</strong> Eliges un punto de partida al azar y luego seleccionas cada &apos;k-ésimo&apos; individuo de una lista.</li>
          <li><strong>Por Conglomerados:</strong> Divides la población en grupos (ej. ciudades, hospitales) y seleccionas grupos enteros al azar para estudiarlos.</li>
        </ul>

        <h4 className="text-lg font-semibold text-title-dark mb-2">Muestreo No Probabilístico</h4>
        <p className="mb-4">
          La selección no es aleatoria. Es más fácil y barato, pero tiene un alto riesgo de sesgo y los resultados no son generalizables a toda la población. Se usa en estudios exploratorios.
        </p>
        <p className="text-sm text-gray-600">
          Ejemplo: Muestreo por conveniencia (encuestar a los pacientes que acuden a tu consulta un lunes por la mañana).
        </p>
      </ContentCard>

      <ContentCard title="Cálculo Muestral: ¿Cuántos Necesito?">
        <p>
          Una de las preguntas más frecuentes al diseñar un estudio es: &quot;¿Cuántos pacientes necesito incluir?&quot;. El <strong>cálculo del tamaño muestral</strong> es crucial por varias razones:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2 mb-4">
          <li><strong>Precisión:</strong> Una muestra demasiado pequeña puede no ser representativa y dar resultados imprecisos.</li>
          <li><strong>Poder Estadístico:</strong> Una muestra adecuada asegura que el estudio tenga suficiente &quot;poder&quot; para detectar un efecto si realmente existe.</li>
          <li><strong>Ética y Recursos:</strong> Incluir más participantes de los necesarios es poco ético (exponer a más personas a un riesgo) y un desperdicio de recursos.</li>
        </ul>

        <h4 className="text-lg font-semibold text-title-dark mb-2">Factores Clave para el Cálculo Muestral:</h4>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li><strong>Nivel de Confianza:</strong> La probabilidad de que el intervalo de confianza contenga el verdadero valor poblacional (ej. 95%).</li>
          <li><strong>Margen de Error (Precisión):</strong> Cuánto estamos dispuestos a que nuestro estimado se desvíe del valor real de la población.</li>
          <li><strong>Variabilidad de la Población:</strong> Cuánto varían los datos en la población (ej. desviación estándar).</li>
          <li><strong>Poder Estadístico:</strong> La probabilidad de detectar una diferencia o efecto cuando realmente existe (ej. 80%).</li>
          <li><strong>Tamaño del Efecto Esperado:</strong> La magnitud de la diferencia o asociación que esperamos encontrar.</li>
        </ul>
        <p className="text-sm text-gray-600">
          Existen fórmulas específicas para calcular el tamaño muestral según el tipo de estudio (comparación de medias, proporciones, etc.) y el diseño. A menudo se utilizan calculadoras online o software estadístico para realizar estos cálculos.
        </p>
      </ContentCard>

      <AlertBox icon={MdInfoOutline} title="Punto Clave">
        <p>
          Un buen muestreo es la base de cualquier estudio fiable. Un tamaño de muestra adecuado y una técnica de muestreo probabilística son esenciales para poder confiar en tus conclusiones.
        </p>
      </AlertBox>
    </div>
  );
}
