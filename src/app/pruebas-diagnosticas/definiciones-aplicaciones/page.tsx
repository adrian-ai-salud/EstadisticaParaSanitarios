
import React from 'react';
import PageTitle from '@/components/PageTitle';

export default function DefinicionesAplicacionesPage() {
  return (
    <div>
      <PageTitle title="Pruebas Diagnósticas: Definiciones y Aplicaciones" />
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Introducción</h2>
        <p className="mb-4">Las pruebas diagnósticas son herramientas fundamentales en la medicina para identificar la presencia o ausencia de una enfermedad. Su correcta interpretación es crucial para la toma de decisiones clínicas. Para evaluar la utilidad de una prueba, se utilizan diversas medidas estadísticas.</p>

        <h2 className="text-xl font-bold mb-4 mt-6">Tablas de Contingencia (Tablas 2x2)</h2>
        <p className="mb-4">Las tablas de contingencia son la base para calcular las medidas de rendimiento de una prueba diagnóstica. Organizan los resultados de la prueba y el estado real de la enfermedad de la siguiente manera:</p>
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

        <h2 className="text-xl font-bold mb-4 mt-6">Sensibilidad</h2>
        <p className="mb-4">La sensibilidad es la capacidad de una prueba para detectar correctamente a los individuos que realmente tienen la enfermedad.</p>
        <p className="mb-4">Fórmula: <strong>Sensibilidad = VP / (VP + FN)</strong></p>
        <p className="mb-4">Una alta sensibilidad es crucial cuando las consecuencias de no detectar la enfermedad son graves (ej., enfermedades con alta mortalidad o transmisibilidad).</p>

        <h2 className="text-xl font-bold mb-4 mt-6">Especificidad</h2>
        <p className="mb-4">La especificidad es la capacidad de una prueba para identificar correctamente a los individuos que no tienen la enfermedad.</p>
        <p className="mb-4">Fórmula: <strong>Especificidad = VN / (VN + FP)</strong></p>
        <p className="mb-4">Una alta especificidad es importante para evitar diagnósticos erróneos y tratamientos innecesarios, especialmente cuando la enfermedad es rara o el tratamiento tiene efectos secundarios significativos.</p>

        <h2 className="text-xl font-bold mb-4 mt-6">Valores Predictivos</h2>
        <p className="mb-4">Los valores predictivos indican la probabilidad de tener o no la enfermedad dado el resultado de la prueba. Dependen de la prevalencia de la enfermedad en la población.</p>
        <h3 className="text-lg font-semibold mb-2">Valor Predictivo Positivo (VPP)</h3>
        <p className="mb-4">Probabilidad de que un individuo con un resultado positivo en la prueba realmente tenga la enfermedad.</p>
        <p className="mb-4">Fórmula: <strong>VPP = VP / (VP + FP)</strong></p>
        <h3 className="text-lg font-semibold mb-2">Valor Predictivo Negativo (VPN)</h3>
        <p className="mb-4">Probabilidad de que un individuo con un resultado negativo en la prueba realmente no tenga la enfermedad.</p>
        <p className="mb-4">Fórmula: <strong>VPN = VN / (VN + FN)</strong></p>

        <h2 className="text-xl font-bold mb-4 mt-6">Caso Práctico: Detección de una Enfermedad Rara</h2>
        <p className="mb-4">Imaginemos una nueva prueba diagnóstica para una enfermedad rara que afecta al 1% de la población (prevalencia = 0.01). Se realiza un estudio con 10,000 personas:</p>
        <ul className="list-disc list-inside mb-4">
          <li>100 personas tienen la enfermedad (1% de 10,000).</li>
          <li>9,900 personas no tienen la enfermedad.</li>
        </ul>
        <p className="mb-4">Los resultados de la prueba son los siguientes:</p>
        <ul className="list-disc list-inside mb-4">
          <li>De las 100 personas enfermas, 90 dan positivo (VP = 90) y 10 dan negativo (FN = 10).</li>
          <li>De las 9,900 personas sanas, 9,801 dan negativo (VN = 9801) y 99 dan positivo (FP = 99).</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Cálculos:</h3>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Sensibilidad:</strong> 90 / (90 + 10) = 90 / 100 = 0.90 (90%)</li>
          <li><strong>Especificidad:</strong> 9801 / (9801 + 99) = 9801 / 9900 = 0.99 (99%)</li>
          <li><strong>VPP:</strong> 90 / (90 + 99) = 90 / 189 ≈ 0.476 (47.6%)</li>
          <li><strong>VPN:</strong> 9801 / (10 + 9801) = 9801 / 9811 ≈ 0.999 (99.9%)</li>
        </ul>

        <p className="mb-4"><strong>Interpretación:</strong> Aunque la prueba tiene una alta sensibilidad y especificidad, su VPP es relativamente bajo debido a la baja prevalencia de la enfermedad. Esto significa que casi la mitad de los resultados positivos son falsos positivos, lo que resalta la importancia de considerar la prevalencia al interpretar los valores predictivos.</p>
      </div>
    </div>
  );
}
