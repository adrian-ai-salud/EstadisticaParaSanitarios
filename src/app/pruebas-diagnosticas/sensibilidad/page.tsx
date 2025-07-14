
import React from 'react';
import PageTitle from '@/components/PageTitle';

export default function SensibilidadPage() {
  return (
    <div>
      <PageTitle title="Sensibilidad" />
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Definición de Sensibilidad</h2>
        <p className="mb-4">La sensibilidad es la capacidad de una prueba diagnóstica para detectar correctamente a los individuos que realmente tienen la enfermedad. Se calcula como la proporción de verdaderos positivos entre el total de enfermos.</p>
        <p className="mb-4">Fórmula: Sensibilidad = Verdaderos Positivos / (Verdaderos Positivos + Falsos Negativos)</p>
        <p className="mb-4">Una alta sensibilidad es crucial cuando las consecuencias de no detectar la enfermedad son graves (por ejemplo, en enfermedades con alta mortalidad o transmisibilidad).</p>
      </div>
    </div>
  );
}
