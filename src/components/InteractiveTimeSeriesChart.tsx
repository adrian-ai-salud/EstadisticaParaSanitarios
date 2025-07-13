
'use client';

import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Ene', original: 100, trend: 90, seasonality: 10, residual: 0 },
  { name: 'Feb', original: 110, trend: 95, seasonality: 12, residual: 3 },
  { name: 'Mar', original: 105, trend: 100, seasonality: 5, residual: 0 },
  { name: 'Abr', original: 120, trend: 105, seasonality: 15, residual: 0 },
  { name: 'May', original: 130, trend: 110, seasonality: 20, residual: 0 },
  { name: 'Jun', original: 125, trend: 115, seasonality: 10, residual: 0 },
  { name: 'Jul', original: 115, trend: 120, seasonality: -5, residual: 0 },
  { name: 'Ago', original: 100, trend: 125, seasonality: -20, residual: -5 },
  { name: 'Sep', original: 90, trend: 130, seasonality: -30, residual: -10 },
  { name: 'Oct', original: 105, trend: 135, seasonality: -20, residual: -10 },
  { name: 'Nov', original: 115, trend: 140, seasonality: -15, residual: -10 },
  { name: 'Dic', original: 130, trend: 145, seasonality: -10, residual: -5 },
];

const InteractiveTimeSeriesChart: React.FC = () => {
  const [activeLine, setActiveLine] = useState('original');

  const handleLineChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveLine(e.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <label htmlFor="lineSelect" className="mr-2">Mostrar Componente:</label>
        <select
          id="lineSelect"
          value={activeLine}
          onChange={handleLineChange}
          className="border rounded px-2 py-1"
        >
          <option value="original">Serie Original</option>
          <option value="trend">Tendencia</option>
          <option value="seasonality">Estacionalidad</option>
          <option value="residual">Residuo</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey={activeLine}
            stroke="#2563eb"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-sm text-gray-600 mt-4">
        Selecciona un componente para visualizar su comportamiento individual en la serie temporal.
      </p>
    </div>
  );
};

export default InteractiveTimeSeriesChart;
