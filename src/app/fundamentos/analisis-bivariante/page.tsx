'use client';

import React from 'react';
import PageTitle from '@/components/PageTitle';
import ContentCard from '@/components/ContentCard';
import AlertBox from '@/components/AlertBox';
import { MdWarningAmber } from 'react-icons/md';
import ScatterPlotExample from '@/components/ScatterPlotExample';

export default function AnalisisBivariantePage() {
  return (
    <div>
      <PageTitle title="Análisis Bivariante: Relacionando Variables" />

      <ContentCard title="El Caso Clínico: Tensión Arterial y Edad">
        <p>
          En tu consulta, observas que las personas mayores tienden a tener una tensión arterial más alta. ¿Pero es una impresión tuya o existe una relación real? El análisis bivariante nos permite estudiar la relación entre <strong>dos variables</strong> a la vez.
        </p>
      </ContentCard>

      <ContentCard title="Relación entre Dos Variables Cuantitativas" variant="highlight">
        <h4 className="text-lg font-semibold text-title-dark mb-2">Diagrama de Dispersión (Scatter Plot)</h4>
        <p className="mb-4">
          Es la mejor herramienta visual para empezar. Se coloca una variable en el eje X (ej. Edad) y la otra en el eje Y (ej. Tensión Arterial Sistólica). Cada paciente es un punto en el gráfico.
        </p>
        <p className="mb-4">
          Viendo la nube de puntos, podemos intuir si hay una relación: si los puntos tienden a subir juntos (relación positiva), si uno sube mientras el otro baja (relación negativa), o si no hay un patrón claro (no hay relación).
        </p>
        <ScatterPlotExample />
        <h4 className="text-lg font-semibold text-title-dark mt-6 mb-2">Coeficiente de Correlación de Pearson (r)</h4>
        <p className="mb-4">
          Este coeficiente nos da un número exacto para medir la <strong>fuerza y dirección de una relación lineal</strong>.
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Va de -1 a +1.</li>
          <li>Cercano a +1: Correlación lineal positiva fuerte (a más edad, más tensión).</li>
          <li>Cercano a -1: Correlación lineal negativa fuerte (a más horas de ejercicio, menos peso).</li>
          <li>Cercano a 0: No hay correlación lineal.</li>
        </ul>
        <AlertBox icon={MdWarningAmber} title="¡Cuidado!">
          <p>
            Correlación no implica causalidad. Que dos cosas estén relacionadas no significa que una cause la otra. Podría haber un tercer factor (una variable de confusión) que explique la relación.
          </p>
        </AlertBox>
      </ContentCard>

      <ContentCard title="Relación entre Dos Variables Cualitativas">
        <h4 className="text-lg font-semibold text-title-dark mb-2">Tablas de Contingencia</h4>
        <p className="mb-4">
          Para variables como &apos;Fumador&apos; (Sí/No) y &apos;Enfermedad Pulmonar&apos; (Sí/No), usamos tablas de contingencia para ver las frecuencias. Contamos cuántos pacientes caen en cada combinación de categorías (ej. fumadores con enfermedad, fumadores sin enfermedad, etc.).
        </p>
        <h4 className="text-lg font-semibold text-title-dark mt-6 mb-2">Prueba de Chi-Cuadrado (χ²)</h4>
        <p className="mb-4">
          Esta prueba estadística se aplica a las tablas de contingencia para decirnos si la asociación que vemos entre las dos variables es estadísticamente significativa o si podría deberse al azar.
        </p>
      </ContentCard>
    </div>
  );
}
