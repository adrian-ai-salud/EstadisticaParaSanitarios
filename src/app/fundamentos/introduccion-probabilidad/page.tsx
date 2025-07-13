'use client';

import React from 'react';
import PageTitle from '@/components/PageTitle';
import ContentCard from '@/components/ContentCard';
import { MdCheckCircleOutline } from 'react-icons/md';
import ProbabilitySimulator from '@/components/ProbabilitySimulator';

export default function IntroProbabilidadPage() {
  return (
    <div>
      <PageTitle title="Introducción a la Probabilidad: La Lógica de la Incertidumbre" />

      <ContentCard title="El Caso Clínico: Pruebas Diagnósticas">
        <p>
          Imagina que un paciente llega con ciertos síntomas y sospechas que podría tener una enfermedad específica. Le realizas una prueba diagnóstica. El resultado puede ser positivo o negativo. La <strong>probabilidad</strong> nos ayuda a cuantificar la incertidumbre de este resultado y a tomar mejores decisiones clínicas.
        </p>
        <p>
          La estadística se basa en la probabilidad. Es la herramienta que nos permite pasar de la especulación a la estimación científica. ¡Vamos a ver los conceptos básicos!
        </p>
      </ContentCard>

      <ContentCard title="Conceptos Fundamentales" variant="highlight">
        <ul className="space-y-4 mt-4">
          <li className="flex items-start">
            <MdCheckCircleOutline className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Experimento Aleatorio</h4>
              <p>Cualquier proceso cuyo resultado no se puede predecir con certeza. Ejemplo: el resultado de una prueba de glucosa en un paciente al azar.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdCheckCircleOutline className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Espacio Muestral (Ω)</h4>
              <p>El conjunto de TODOS los resultados posibles de un experimento. Ejemplo: para un test de embarazo, el espacio muestral es {`{Positivo, Negativo}`}.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdCheckCircleOutline className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Suceso</h4>
              <p>Cualquier subconjunto del espacio muestral. Puede ser elemental (un solo resultado) o compuesto (varios resultados). Ejemplo: que un paciente sea del grupo sanguíneo &apos;A&apos; es un suceso.</p>
            </div>
          </li>
        </ul>
      </ContentCard>

      <ContentCard title="El Teorema de Bayes: El Poder de Actualizar Creencias">
        <p>
          Este es uno de los teoremas más importantes en medicina. Nos permite actualizar la probabilidad de que un paciente tenga una enfermedad una vez que conocemos el resultado de una prueba.
        </p>
        <p>
          En esencia, responde a la pregunta: <strong>Si el test ha dado positivo, ¿cuál es la probabilidad real de que mi paciente esté enfermo?</strong>
        </p>
        <p className="text-sm text-gray-600 mt-2">
          No es tan simple como parece, porque los tests no son perfectos (pueden dar falsos positivos). El Teorema de Bayes combina la información previa (la prevalencia de la enfermedad) con el resultado del test para darnos una probabilidad mucho más precisa. Lo exploraremos a fondo en la sección de pruebas diagnósticas.
        </p>
      </ContentCard>

      <ContentCard title="Simulador de Probabilidad: Lanzamiento de Moneda" variant="highlight">
        <ProbabilitySimulator />
        <p className="text-sm text-gray-600 mt-4">
          Utiliza el control deslizante para aumentar el número de lanzamientos de moneda y observa cómo las probabilidades de caras y cruces se acercan al 50%. Esto demuestra la <strong>Ley de los Grandes Números</strong>, un principio fundamental que explica por qué las frecuencias observadas se aproximan a las probabilidades teóricas a medida que aumenta el número de ensayos.
        </p>
      </ContentCard>
    </div>
  );
}
