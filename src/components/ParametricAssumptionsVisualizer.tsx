
'use client';

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';

const normalData = [
  { value: 10 }, { value: 12 }, { value: 15 }, { value: 18 }, { value: 20 },
  { value: 20 }, { value: 22 }, { value: 25 }, { value: 28 }, { value: 30 },
  { value: 30 }, { value: 32 }, { value: 35 }, { value: 38 }, { value: 40 },
  { value: 40 }, { value: 42 }, { value: 45 }, { value: 48 }, { value: 50 },
];



const homoscedasticData = [
  { x: 1, y: 10 }, { x: 2, y: 12 }, { x: 3, y: 11 }, { x: 4, y: 13 }, { x: 5, y: 10 },
  { x: 6, y: 20 }, { x: 7, y: 22 }, { x: 8, y: 21 }, { x: 9, y: 23 }, { x: 10, y: 20 },
];

const heteroscedasticData = [
  { x: 1, y: 10 }, { x: 2, y: 12 }, { x: 3, y: 8 }, { x: 4, y: 15 }, { x: 5, y: 5 },
  { x: 6, y: 30 }, { x: 7, y: 10 }, { x: 8, y: 40 }, { x: 9, y: 5 }, { x: 10, y: 50 },
];

const ParametricAssumptionsVisualizer: React.FC = () => {
  const [assumption, setAssumption] = useState('normalidad');

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <label htmlFor="assumptionSelect" className="mr-2">Selecciona Supuesto:</label>
        <select
          id="assumptionSelect"
          value={assumption}
          onChange={(e) => setAssumption(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="normalidad">Normalidad</option>
          <option value="homocedasticidad">Homocedasticidad</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        {assumption === 'normalidad' ? (
          <BarChart data={normalData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="value" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#2563eb" />
          </BarChart>
        ) : (
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" dataKey="x" name="Variable Independiente" />
            <YAxis type="number" dataKey="y" name="Residuos" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="Homocedasticidad" data={homoscedasticData} fill="#2563eb" />
            <Scatter name="Heterocedasticidad" data={heteroscedasticData} fill="#dc2626" />
          </ScatterChart>
        )}
      </ResponsiveContainer>
      <p className="text-sm text-gray-600 mt-4">
        Observa cómo los datos se distribuyen en cada caso. Para la normalidad, busca una forma de campana. Para la homocedasticidad, los puntos deben estar dispersos uniformemente alrededor de la línea central.
      </p>
    </div>
  );
};

export default ParametricAssumptionsVisualizer;
