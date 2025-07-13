'use client';

import React from 'react';
import PageTitle from '@/components/PageTitle';
import ContentCard from '@/components/ContentCard';
import AlertBox from '@/components/AlertBox';
import { MdScience, MdInfoOutline } from 'react-icons/md';
import ParametricAssumptionsVisualizer from '@/components/ParametricAssumptionsVisualizer';

export default function PruebasParametricasPage() {
  return (
    <div>
      <PageTitle title="Pruebas Paramétricas: Cuando tus Datos Siguen la Norma" />

      <ContentCard title="El Caso Clínico: Comparando Tratamientos">
        <p>
          Tienes dos grupos de pacientes con hipertensión. A un grupo le das el tratamiento A y al otro el tratamiento B. Quieres saber si hay una diferencia significativa en la reducción de la tensión arterial entre ambos grupos. O quizás, tienes tres dietas diferentes y quieres ver cuál es la más efectiva para perder peso.
        </p>
        <p>
          Las <strong>pruebas paramétricas</strong> son herramientas estadísticas muy potentes para comparar medias o relaciones, pero requieren que tus datos cumplan ciertas condiciones (supuestos). Si tus datos se ajustan a estos supuestos, estas pruebas son las más robustas.
        </p>
      </ContentCard>

      <ContentCard title="1. Test t de Student: Comparando Dos Medias">
        <p>
          Es la prueba más común para comparar las medias de dos grupos. Por ejemplo, ¿es la tensión arterial media diferente entre hombres y mujeres? ¿Hay diferencia en la glucosa media antes y después de un tratamiento?
        </p>
        <h4 className="text-lg font-semibold text-title-dark mt-4 mb-2">Tipos de Test t:</h4>
        <ul className="space-y-4">
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h5 className="font-semibold">Para Muestras Independientes:</h5>
              <p>Cuando los grupos no están relacionados (ej. hombres vs. mujeres, tratamiento A vs. tratamiento B).</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h5 className="font-semibold">Para Muestras Pareadas:</h5>
              <p>Cuando los mismos sujetos son medidos dos veces (ej. antes y después de un tratamiento, o en un diseño cruzado).</p>
            </div>
          </li>
        </ul>
        <h4 className="text-lg font-semibold text-title-dark mt-4 mb-2">Supuestos del Test t:</h4>
        <ul className="space-y-4">
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h5 className="font-semibold">Normalidad:</h5>
              <p>La variable dependiente (la que mides) debe seguir una distribución normal en cada grupo. Se puede verificar con pruebas como Shapiro-Wilk o Kolmogorov-Smirnov, o visualmente con histogramas y gráficos Q-Q.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h5 className="font-semibold">Homocedasticidad (solo para muestras independientes):</h5>
              <p>Las varianzas de los grupos deben ser aproximadamente iguales. Se verifica con la prueba de Levene.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h5 className="font-semibold">Independencia de Observaciones:</h5>
              <p>Las observaciones dentro de cada grupo y entre grupos deben ser independientes (excepto en el test t pareado).</p>
            </div>
          </li>
        </ul>
        <AlertBox icon={MdInfoOutline} title="Punto Clave">
          <p>
            Si no se cumplen los supuestos de normalidad o homocedasticidad, existen alternativas no paramétricas (como la U de Mann-Whitney) que veremos más adelante.
          </p>
        </AlertBox>
      </ContentCard>

      <ContentCard title="2. Análisis de Varianza (ANOVA): Comparando Tres o Más Medias">
        <p>
          Cuando quieres comparar las medias de tres o más grupos (ej. tres dietas diferentes, cuatro tipos de ejercicio), el Test t ya no es adecuado. Necesitas el <strong>ANOVA</strong> (ANálisis de VArianza).
        </p>
        <p>
          ANOVA nos dice si hay alguna diferencia significativa entre las medias de los grupos, pero no nos dice <em>entre qué grupos específicos</em> está esa diferencia. Para eso, necesitamos las pruebas post-hoc.
        </p>
        <h4 className="text-lg font-semibold text-title-dark mt-4 mb-2">Tipos de ANOVA:</h4>
        <ul className="space-y-4">
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h5 className="font-semibold">ANOVA de un factor (One-Way ANOVA):</h5>
              <p>Compara las medias de tres o más grupos formados por una única variable categórica (ej. efecto de 3 dosis de un fármaco).</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h5 className="font-semibold">ANOVA de dos factores (Two-Way ANOVA):</h5>
              <p>Examina el efecto de dos variables categóricas y su interacción sobre una variable continua (ej. efecto de un fármaco y el sexo del paciente).</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h5 className="font-semibold">ANOVA para Datos Pareados (ANOVA de Medidas Repetidas):</h5>
              <p>Cuando los mismos sujetos son medidos en tres o más condiciones o momentos (ej. tensión arterial en el mes 1, mes 3 y mes 6 de tratamiento).</p>
            </div>
          </li>
        </ul>
        <h4 className="text-lg font-semibold text-title-dark mt-4 mb-2">Supuestos del ANOVA:</h4>
        <ul className="space-y-4">
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h5 className="font-semibold">Normalidad:</h5>
              <p>La variable dependiente debe seguir una distribución normal en cada grupo.</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h5 className="font-semibold">Homocedasticidad:</h5>
              <p>Las varianzas de los grupos deben ser iguales (prueba de Levene).</p>
            </div>
          </li>
          <li className="flex items-start">
            <MdScience className="h-6 w-6 text-icon-blue mr-3 flex-shrink-0" />
            <div>
              <h5 className="font-semibold">Independencia de Observaciones:</h5>
              <p>Las observaciones deben ser independientes (excepto en ANOVA de medidas repetidas).</p>
            </div>
          </li>
        </ul>
        <h4 className="text-lg font-semibold text-title-dark mt-4 mb-2">Pruebas Post-Hoc:</h4>
        <p>
          Si el ANOVA te dice que hay diferencias, las pruebas post-hoc (como Tukey HSD o Bonferroni) te dirán <em>dónde</em> están esas diferencias (ej. la dieta A es mejor que la B, pero no diferente de la C).
        </p>
        <h4 className="text-lg font-semibold text-title-dark mt-4 mb-2">Tamaño del Efecto (Eta-cuadrado η²):</h4>
        <p>
          Además del p-valor, es crucial saber la magnitud de la diferencia. Eta-cuadrado nos dice qué proporción de la variabilidad de la variable dependiente es explicada por la variable independiente. Un p-valor significativo con un efecto pequeño puede no ser clínicamente relevante.
        </p>
      </ContentCard>

      <ContentCard title="Visualizador de Supuestos Paramétricos">
        <ParametricAssumptionsVisualizer />
        <p className="text-sm text-gray-600 mt-4">
          Utiliza este visualizador para entender los supuestos de normalidad y homocedasticidad. Observa cómo se ven los datos cuando cumplen o no estos supuestos, lo cual es crucial para elegir la prueba estadística adecuada.
        </p>
      </ContentCard>

      <ContentCard title="Pruebas de Normalidad: ¿Son tus Datos una Campana?">
        <p>
          Antes de aplicar muchas pruebas paramétricas, es fundamental verificar si tus datos siguen una distribución normal. Aquí te presentamos las formas más comunes de hacerlo:
        </p>
        <h4 className="text-lg font-semibold text-title-dark mt-4 mb-2">1. Métodos Visuales:</h4>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li><strong>Histogramas:</strong> Busca una forma de campana simétrica.</li>
          <li><strong>Gráficos Q-Q (Quantile-Quantile):</strong> Los puntos deben seguir aproximadamente una línea recta diagonal.</li>
        </ul>

        <h4 className="text-lg font-semibold text-title-dark mt-4 mb-2">2. Pruebas Estadísticas:</h4>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li><strong>Prueba de Shapiro-Wilk:</strong> Recomendada para muestras pequeñas (n &lt; 50). Si el p-valor es &lt; 0.05, se rechaza la hipótesis de normalidad.</li>
          <li><strong>Prueba de Kolmogorov-Smirnov (con corrección de Lilliefors):</strong> Para muestras más grandes (n &ge; 50). Si el p-valor es &lt; 0.05, se rechaza la hipótesis de normalidad.</li>
        </ul>
        <AlertBox icon={MdInfoOutline} title="Punto Clave">
          <p>
            Un p-valor significativo en estas pruebas indica que los datos <strong>no</strong> son normales. Si tus datos no cumplen el supuesto de normalidad, considera transformarlos o utilizar pruebas no paramétricas.
          </p>
        </AlertBox>
      </ContentCard>
    </div>
  );
}
