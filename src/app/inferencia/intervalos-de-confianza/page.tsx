'use client';

import React from 'react';
import PageTitle from '@/components/PageTitle';
import ContentCard from '@/components/ContentCard';
import AlertBox from '@/components/AlertBox';
import { MdScience, MdInfoOutline } from 'react-icons/md';

export default function IntervalosDeConfianzaPage() {
  return (
    <div>
      <PageTitle title="Intervalos de Confianza: ¿Dónde está el Valor Real?" />

      <ContentCard title="El Caso Clínico: La Tensión Arterial Media">
        <p>
          Imagina que quieres saber la tensión arterial sistólica media de todos los adultos en tu ciudad. No puedes medir a todos, así que tomas una muestra de 100 personas y calculas su media. Obtienes, por ejemplo, 125 mmHg.
        </p>
        <p>
          ¿Es 125 mmHg la tensión arterial media EXACTA de toda la ciudad? Probablemente no. Tu muestra es solo una parte. Aquí es donde entra el <strong>Intervalo de Confianza (IC)</strong>. Nos da un rango de valores donde, con una alta probabilidad, se encuentra el verdadero valor de la población.
        </p>
      </ContentCard>

      <ContentCard title="¿Qué es un Intervalo de Confianza?" variant="highlight">
        <ul className="space-y-4">
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Nivel de Confianza:</h4>
              <p>Normalmente 95% o 99%. Significa que si repitiéramos el estudio muchas veces, el 95% (o 99%) de los intervalos que construyamos contendrían el verdadero valor poblacional.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Precisión:</h4>
              <p>Cuanto más estrecho sea el intervalo, más preciso es nuestro estimado. Un intervalo muy amplio nos da poca información útil.</p>
            </div>
          </li>
        </ul>
      </ContentCard>

      <ContentCard title="Interpretación en la Práctica Clínica">
        <p>
          Si un estudio reporta que un nuevo fármaco reduce la tensión arterial en 10 mmHg (IC 95%: 8-12 mmHg), significa que estamos 95% seguros de que la verdadera reducción en la población está entre 8 y 12 mmHg. Esto es mucho más informativo que solo decir &apos;10 mmHg&apos;.
        </p>
        <AlertBox icon={MdInfoOutline} title="Punto Clave" type="info">
          <p>
            Los Intervalos de Confianza son más informativos que solo el p-valor, ya que nos dan una idea de la magnitud del efecto y su precisión. Si un IC para una diferencia incluye el cero, significa que no hay una diferencia estadísticamente significativa.
          </p>
        </AlertBox>
      </ContentCard>

      <ContentCard title="Intervalos de Confianza Anchos: ¿Qué Significan?" variant="highlight">
        <p>
          Un intervalo de confianza muy amplio (ej. IC 95%: -5 a +25 mmHg para la reducción de tensión arterial) nos indica que nuestro estimado es poco preciso. Esto puede deberse a:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2 mb-4">
          <li><strong>Tamaño de Muestra Pequeño:</strong> Cuanto menor sea la muestra, mayor será la incertidumbre y, por tanto, más amplio el intervalo.</li>
          <li><strong>Gran Variabilidad en los Datos:</strong> Si los datos son muy dispersos, el intervalo será más ancho.</li>
        </ul>
        <p>
          Un intervalo ancho significa que no podemos estar muy seguros del verdadero valor poblacional. En la práctica clínica, un IC demasiado amplio puede hacer que los resultados de un estudio sean poco útiles para tomar decisiones, incluso si el p-valor es significativo.
        </p>
        <AlertBox icon={MdInfoOutline} title="Punto Clave" type="info">
          <p>
            Siempre buscamos intervalos de confianza estrechos, ya que nos proporcionan estimaciones más precisas y fiables del efecto real en la población.
          </p>
        </AlertBox>
      </ContentCard>
    </div>
  );
}
