
'use client';

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface DataTypeExample {
  name: string;
  value: number;
}

const DataTypesVisualizer: React.FC = () => {
  const [dataType, setDataType] = useState('nominal');

  const dataExamples: { [key: string]: DataTypeExample[] } = {
    nominal: [
      { name: 'Grupo A', value: 30 },
      { name: 'Grupo B', value: 45 },
      { name: 'Grupo C', value: 25 },
    ],
    ordinal: [
      { name: 'Leve', value: 20 },
      { name: 'Moderado', value: 50 },
      { name: 'Severo', value: 30 },
    ],
    discrete: [
      { name: '0', value: 15 },
      { name: '1', value: 30 },
      { name: '2', value: 40 },
      { name: '3', value: 10 },
      { name: '4+', value: 5 },
    ],
    continuous: [
      { name: '0-20', value: 10 },
      { name: '21-40', value: 30 },
      { name: '41-60', value: 45 },
      { name: '61-80', value: 15 },
    ],
  };

  const currentData = dataExamples[dataType];

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <label htmlFor="dataTypeSelect" className="mr-2">Selecciona Tipo de Dato:</label>
        <select
          id="dataTypeSelect"
          value={dataType}
          onChange={(e) => setDataType(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="nominal">Nominal (Ej: Grupo Sanguíneo)</option>
          <option value="ordinal">Ordinal (Ej: Nivel de Dolor)</option>
          <option value="discrete">Discreta (Ej: N° de Hijos)</option>
          <option value="continuous">Continua (Ej: Rangos de Edad)</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={currentData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#2563eb" />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-sm text-gray-600 mt-4">
        Este gráfico ilustra cómo se visualizan diferentes tipos de datos. Observa cómo las barras representan categorías o rangos, y su altura indica la frecuencia o cantidad.
      </p>
    </div>
  );
};

export default DataTypesVisualizer;
