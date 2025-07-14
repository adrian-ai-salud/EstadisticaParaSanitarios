import React from 'react';
import PageTitle from '@/components/PageTitle';
import ContentCard from '@/components/ContentCard';

export default function DefinicionesAplicacionesPage() {
  return (
    <div>
      <PageTitle title="Pruebas Diagnósticas: Definiciones y Aplicaciones" />

      <ContentCard title="El Caso Clínico: La Prueba Rápida de Gripe">
        <p>
          Imagina que trabajas en un centro de salud durante la temporada de gripe. Llega un paciente con síntomas compatibles y decides realizarle una nueva prueba rápida de detección de gripe. ¿Cómo de fiable es esta prueba? ¿Qué significa un resultado positivo o negativo para este paciente?
        </p>
        <p>
          Para responder a estas preguntas, necesitamos entender cómo se evalúa una prueba diagnóstica. ¡Vamos a desglosarlo!
        </p>
      </ContentCard>

      <ContentCard title="1. Definiciones Clave" variant="highlight">
        <h3 className="text-lg font-semibold mb-2">Tablas de Contingencia (Tablas 2x2)</h3>
        <p className="mb-4">Son la base para calcular las medidas de rendimiento de una prueba diagnóstica. Organizan los resultados de la prueba y el estado real de la enfermedad:</p>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b"></th>
                <th className="py-2 px-4 border-b">Enfermedad Presente</th>
                <th className="py-2 px-4 border-b">Enfermedad Ausente</th>
                <th className="py-2 px-4 border-b">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Prueba Positiva</td>
                <td className="py-2 px-4 border-b">Verdaderos Positivos (VP)</td>
                <td className="py-2 px-4 border-b">Falsos Positivos (FP)</td>
                <td className="py-2 px-4 border-b">VP + FP</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Prueba Negativa</td>
                <td className="py-2 px-4 border-b">Falsos Negativos (FN)</td>
                <td className="py-2 px-4 border-b">Verdaderos Negativos (VN)</td>
                <td className="py-2 px-4 border-b">FN + VN</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Total</td>
                <td className="py-2 px-4 border-b">VP + FN</td>
                <td className="py-2 px-4 border-b">FP + VN</td>
                <td className="py-2 px-4 border-b">Total General</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4">Donde:</p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Verdaderos Positivos (VP):</strong> Individuos con la enfermedad y prueba positiva.</li>
          <li><strong>Falsos Positivos (FP):</strong> Individuos sin la enfermedad y prueba positiva.</li>
          <li><strong>Falsos Negativos (FN):</strong> Individuos con la enfermedad y prueba negativa.</li>
          <li><strong>Verdaderos Negativos (VN):</strong> Individuos sin la enfermedad y prueba negativa.</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2 mt-6">Sensibilidad</h3>
        <p className="mb-4">Capacidad de una prueba para detectar correctamente a los individuos que realmente tienen la enfermedad.</p>
        <p className="mb-4">Fórmula: <strong>Sensibilidad = VP / (VP + FN)</strong></p>

        <h3 className="text-lg font-semibold mb-2 mt-6">Especificidad</h3>
        <p className="mb-4">Capacidad de una prueba para identificar correctamente a los individuos que no tienen la enfermedad.</p>
        <p className="mb-4">Fórmula: <strong>Especificidad = VN / (VN + FP)</strong></p>

        <h3 className="text-lg font-semibold mb-2 mt-6">Valores Predictivos</h3>
        <p className="mb-4">Indican la probabilidad de tener o no la enfermedad dado el resultado de la prueba. Dependen de la prevalencia de la enfermedad en la población.</p>
        <h4 className="text-md font-semibold mb-1">Valor Predictivo Positivo (VPP)</h4>
        <p className="mb-4">Probabilidad de que un individuo con un resultado positivo en la prueba realmente tenga la enfermedad.</p>
        <p className="mb-4">Fórmula: <strong>VPP = VP / (VP + FP)</strong></p>
        <h4 className="text-md font-semibold mb-1">Valor Predictivo Negativo (VPN)</h4>
        <p className="mb-4">Probabilidad de que un individuo con un resultado negativo en la prueba realmente no tenga la enfermedad.</p>
        <p className="mb-4">Fórmula: <strong>VPN = VN / (VN + FN)</strong></p>
      </ContentCard>

      <ContentCard title="2. Aplicaciones y Caso Práctico Resuelto" variant="highlight">
        <p className="mb-4">Retomando nuestro caso de la prueba rápida de gripe. Supongamos que la prevalencia de gripe en la población es del 10% (0.10). Realizamos un estudio con 1,000 personas:</p>
        <ul className="list-disc list-inside mb-4">
          <li>100 personas tienen gripe (10% de 1,000).</li>
          <li>900 personas no tienen gripe.</li>
        </ul>
        <p className="mb-4">Los resultados de la prueba son los siguientes:</p>
        <ul className="list-disc list-inside mb-4">
          <li>De las 100 personas con gripe, 85 dan positivo (VP = 85) y 15 dan negativo (FN = 15).</li>
          <li>De las 900 personas sin gripe, 855 dan negativo (VN = 855) y 45 dan positivo (FP = 45).</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Cálculos:</h3>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Sensibilidad:</strong> 85 / (85 + 15) = 85 / 100 = 0.85 (85%)</li>
          <li><strong>Especificidad:</strong> 855 / (855 + 45) = 855 / 900 = 0.95 (95%)</li>
          <li><strong>VPP:</strong> 85 / (85 + 45) = 85 / 130 ≈ 0.654 (65.4%)</li>
          <li><strong>VPN:</strong> 855 / (15 + 855) = 855 / 870 ≈ 0.983 (98.3%)</li>
        </ul>

        <p className="mb-4"><strong>Interpretación:</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>Una sensibilidad del 85% significa que la prueba detecta al 85% de las personas que realmente tienen gripe.</li>
          <li>Una especificidad del 95% significa que la prueba identifica correctamente al 95% de las personas que no tienen gripe.</li>
          <li>Un VPP del 65.4% indica que, si la prueba da positivo, hay un 65.4% de probabilidad de que el paciente realmente tenga gripe.</li>
          <li>Un VPN del 98.3% indica que, si la prueba da negativo, hay un 98.3% de probabilidad de que el paciente realmente no tenga gripe.</li>
        </ul>
        <p className="mb-4">Este caso práctico demuestra cómo la prevalencia de la enfermedad afecta los valores predictivos, siendo el VPP más bajo en enfermedades de baja prevalencia, incluso con alta sensibilidad y especificidad.</p>
      </ContentCard>
    </div>
  );
}