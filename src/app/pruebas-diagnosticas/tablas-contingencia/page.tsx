
import React from 'react';
import PageTitle from '@/components/PageTitle';

export default function TablasContingenciaPage() {
  return (
    <div>
      <PageTitle title="Tablas de Contingencia" />
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Tablas de Contingencia (Tablas 2x2)</h2>
        <p className="mb-4">Las tablas de contingencia son herramientas fundamentales para evaluar la precisión de las pruebas diagnósticas. Organizan los resultados de la prueba y el estado real de la enfermedad en una matriz 2x2.</p>
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
        <p className="mb-4">A partir de esta tabla, se pueden calcular la sensibilidad, especificidad, VPP, VPN y otras medidas de rendimiento de la prueba.</p>
      </div>
    </div>
  );
}
