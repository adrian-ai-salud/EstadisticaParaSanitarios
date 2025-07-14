
import React from 'react';
import PageTitle from '@/components/PageTitle';

export default function EspecificidadPage() {
  return (
    <div>
      <PageTitle title="Especificidad" />
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Definición de Especificidad</h2>
        <p className="mb-4">La especificidad es la capacidad de una prueba diagnóstica para identificar correctamente a los individuos que no tienen la enfermedad. Se calcula como la proporción de verdaderos negativos entre el total de individuos sanos.</p>
        <p className="mb-4">Fórmula: Especificidad = Verdaderos Negativos / (Verdaderos Negativos + Falsos Positivos)</p>
        <p className="mb-4">Una alta especificidad es importante para evitar diagnósticos erróneos y tratamientos innecesarios, especialmente cuando la enfermedad es rara o el tratamiento tiene efectos secundarios significativos.</p>
      </div>
    </div>
  );
}
