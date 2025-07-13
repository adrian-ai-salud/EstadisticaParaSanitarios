
'use client';

import React from 'react';
import PageTitle from '@/components/PageTitle';
import ContentCard from '@/components/ContentCard';
import AlertBox from '@/components/AlertBox';
import { MdScience, MdInfoOutline, MdWarningAmber, MdErrorOutline } from 'react-icons/md';

export default function ContrasteDeHipotesisPage() {
  return (
    <div>
      <PageTitle title="Contraste de Hipótesis: ¿Hay Evidencia Suficiente?" />

      <ContentCard title="El Caso Clínico: ¿Funciona el Nuevo Fármaco?">
        <p>
          Un laboratorio desarrolla un nuevo fármaco para reducir el colesterol. Afirman que es más eficaz que el actual. Como médico, ¿cómo puedes saber si esta afirmación es cierta o si la diferencia que observas en un estudio es solo por casualidad? Aquí es donde entra el <strong>Contraste de Hipótesis</strong>.
        </p>
        <p>
          Es un procedimiento formal para decidir si la evidencia de nuestros datos es lo suficientemente fuerte como para rechazar una afirmación inicial (la hipótesis nula) sobre una población.
        </p>
      </ContentCard>

      <ContentCard title="Hipótesis Nula (H₀) y Alternativa (H₁)">
        <p>
          Todo contraste de hipótesis comienza con dos afirmaciones opuestas:
        </p>
        <ul className="space-y-4 mt-4">
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Hipótesis Nula (H₀):</h4>
              <p>Es la afirmación de &apos;no efecto&apos;, &apos;no diferencia&apos; o &apos;no relación&apos;. Es lo que asumimos que es cierto hasta que la evidencia demuestre lo contrario. Ejemplo: &apos;El nuevo fármaco no reduce el colesterol más que el actual&apos;.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Hipótesis Alternativa (H₁):</h4>
              <p>Es lo que queremos demostrar. Es la afirmación de &apos;sí efecto&apos;, &apos;sí diferencia&apos; o &apos;sí relación&apos;. Ejemplo: &apos;El nuevo fármaco sí reduce el colesterol más que el actual&apos;.</p>
            </div>
          </li>
        </ul>
        <AlertBox icon={MdInfoOutline} title="Punto Clave">
          <p>
            Siempre intentamos <strong>rechazar la H₀</strong>. Si no tenemos suficiente evidencia para rechazarla, no significa que sea cierta, solo que no pudimos demostrar lo contrario.
          </p>
        </AlertBox>
      </ContentCard>

      <ContentCard title="El Valor P (p-value): La Probabilidad de la Casualidad">
        <p>
          El p-valor es la probabilidad de obtener los resultados que hemos observado (o resultados más extremos) si la hipótesis nula fuera realmente cierta. Es decir, ¿cuán probable es que lo que vemos sea solo fruto del azar?
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Si p-valor &lt; 0.05 (o el nivel de significancia α que fijemos): Consideramos que los resultados son <strong>estadísticamente significativos</strong>. Rechazamos la H₀.</li>
          <li>Si p-valor ≥ 0.05: No hay evidencia suficiente para rechazar la H₀.</li>
        </ul>
        <AlertBox icon={MdWarningAmber} title="¡Advertencia!">
          <p>
            Un p-valor bajo no significa que el efecto sea grande o clínicamente relevante, solo que es poco probable que sea por azar. ¡Siempre interpreta el p-valor junto con el tamaño del efecto y el intervalo de confianza!
          </p>
        </AlertBox>
      </ContentCard>

      <ContentCard title="Tipos de Errores: El Riesgo de Equivocarse">
        <p>
          Al tomar una decisión basada en el p-valor, siempre existe la posibilidad de cometer un error:
        </p>
        <ul className="space-y-4 mt-4">
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Error Tipo I (α o Falso Positivo):</h4>
              <p>Rechazar la H₀ cuando en realidad es verdadera. Decir que hay un efecto cuando no lo hay. Ejemplo: Diagnosticar una enfermedad cuando el paciente está sano. El nivel de significancia (α) es la probabilidad de cometer este error.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Error Tipo II (β o Falso Negativo):</h4>
              <p>No rechazar la H₀ cuando en realidad es falsa. Decir que no hay efecto cuando sí lo hay. Ejemplo: No diagnosticar una enfermedad cuando el paciente sí la tiene. La potencia estadística (1-β) es la probabilidad de NO cometer este error (de detectar un efecto cuando existe).</p>
            </div>
          </li>
        </ul>
        <AlertBox icon={MdErrorOutline} title="¡Error Crítico!">
          <p>
            En medicina, el balance entre estos errores es crítico. A menudo, preferimos minimizar los Falsos Negativos (Error Tipo II) en enfermedades graves, aunque eso implique un ligero aumento de Falsos Positivos (Error Tipo I).
          </p>
        </AlertBox>
      </ContentCard>
    </div>
  );
}

