'use client';

import React from 'react';
import PageTitle from '@/components/PageTitle';
import ContentCard from '@/components/ContentCard';
import AlertBox from '@/components/AlertBox';
import { MdInfoOutline } from 'react-icons/md';

export default function DistribucionesDiscretasPage() {
  return (
    <div>
      <PageTitle title="Distribuciones Discretas: Contando Eventos en Salud" />

      <ContentCard title="El Caso Clínico: Éxito de un Tratamiento">
        <p>
          Imagina que estás probando un nuevo tratamiento y quieres saber cuántos pacientes responderán positivamente. O quizás, cuántos casos de una enfermedad rara aparecerán en un hospital en un mes. Aquí es donde entran las <strong>distribuciones discretas</strong>.
        </p>
        <p>
          A diferencia de las variables continuas (que pueden tomar cualquier valor), las variables discretas solo pueden tomar valores enteros (0, 1, 2, 3...). Estas distribuciones nos ayudan a modelar la probabilidad de que ocurra un número específico de eventos.
        </p>
      </ContentCard>

      <ContentCard title="1. Distribución Binomial: Éxito o Fracaso">
        <p>
          Piensa en un ensayo clínico donde cada paciente, de forma independiente, o bien se cura (éxito) o no se cura (fracaso). La distribución binomial nos dice la probabilidad de obtener un número determinado de éxitos en un número fijo de intentos.
        </p>
        <div className="text-sm text-gray-600 mt-2">
          <p><strong>Condiciones:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>Hay un número fijo de ensayos (n).</li>
            <li>Cada ensayo tiene solo dos resultados posibles (éxito/fracaso).</li>
            <li>La probabilidad de éxito (p) es la misma en cada ensayo.</li>
            <li>Los ensayos son independientes entre sí.</li>
          </ul>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          <strong>Ejemplo:</strong> Probabilidad de que 7 de 10 pacientes respondan a un nuevo fármaco, si la probabilidad de respuesta individual es del 60%.
        </p>
      </ContentCard>

      <ContentCard title="2. Distribución de Poisson: Contando Eventos Raros">
        <p>
          Esta distribución es ideal para modelar el número de veces que ocurre un evento raro en un intervalo de tiempo o espacio determinado. Por ejemplo, el número de errores de medicación en una unidad de enfermería en una semana, o el número de casos de una enfermedad muy poco frecuente en una región en un año.
        </p>
        <div className="text-sm text-gray-600 mt-2">
          <p><strong>Condiciones:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>Los eventos ocurren de forma independiente.</li>
            <li>La tasa promedio de ocurrencia (λ, lambda) es constante en el intervalo.</li>
            <li>Dos eventos no pueden ocurrir exactamente al mismo tiempo.</li>
          </ul>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          <strong>Ejemplo:</strong> Probabilidad de que haya 3 ingresos por una patología específica en un día, si la media es de 1.5 ingresos/día.
        </p>
        <AlertBox icon={MdInfoOutline} title="Información Adicional">
          <p>
            La distribución hipergeométrica es similar a la binomial pero se usa cuando el muestreo es <strong>sin reemplazo</strong> (la probabilidad de éxito cambia con cada extracción). Es menos común en aplicaciones clínicas directas, pero es importante conocer su existencia.
          </p>
        </AlertBox>
      </ContentCard>
    </div>
  );
}
