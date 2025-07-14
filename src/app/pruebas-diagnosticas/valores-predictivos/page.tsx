
import React from 'react';
import PageTitle from '@/components/PageTitle';

export default function ValoresPredictivosPage() {
  return (
    <div>
      <PageTitle title="Valores Predictivos" />
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Valores Predictivos Positivo y Negativo</h2>
        <p className="mb-4">Los valores predictivos indican la probabilidad de tener o no la enfermedad dado el resultado de la prueba.</p>
        <h3 className="text-lg font-semibold mb-2">Valor Predictivo Positivo (VPP)</h3>
        <p className="mb-4">Probabilidad de que un individuo con un resultado positivo en la prueba realmente tenga la enfermedad.</p>
        <p className="mb-4">Fórmula: VPP = Verdaderos Positivos / (Verdaderos Positivos + Falsos Positivos)</p>
        <h3 className="text-lg font-semibold mb-2">Valor Predictivo Negativo (VPN)</h3>
        <p className="mb-4">Probabilidad de que un individuo con un resultado negativo en la prueba realmente no tenga la enfermedad.</p>
        <p className="mb-4">Fórmula: VPN = Verdaderos Negativos / (Verdaderos Negativos + Falsos Negativos)</p>
        <p className="mb-4">Los valores predictivos dependen de la prevalencia de la enfermedad en la población.</p>
      </div>
    </div>
  );
}
