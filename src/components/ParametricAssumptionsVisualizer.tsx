
'use client';

import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';

// Función para generar datos de distribución normal (aproximación Box-Muller)
const generateNormalData = (mean: number, stdDev: number, count: number) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    const u1 = Math.random();
    const u2 = Math.random();
    const z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
    data.push(mean + z0 * stdDev);
  }
  return data;
};

// Función para agrupar datos en bins para el histograma
const createHistogramData = (data: number[], numBins: number) => {
  if (data.length === 0) return [];

  const min = Math.min(...data);
  const max = Math.max(...data);
  const binWidth = (max - min) / numBins;

  const bins: { [key: string]: number } = {};
  for (let i = 0; i < numBins; i++) {
    bins[`${(min + i * binWidth).toFixed(1)}-${(min + (i + 1) * binWidth).toFixed(1)}`] = 0;
  }

  data.forEach(value => {
    let binIndex = Math.floor((value - min) / binWidth);
    if (binIndex === numBins) binIndex--; // Asegurar que el valor máximo caiga en un bin
    const binKey = `${(min + binIndex * binWidth).toFixed(1)}-${(min + (binIndex + 1) * binWidth).toFixed(1)}`;
    if (bins[binKey] !== undefined) {
      bins[binKey]++;
    }
  });

  return Object.keys(bins).map(key => ({ name: key, count: bins[key] }));
};

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

  const normalSampleData = useMemo(() => generateNormalData(50, 10, 500), []);
  const histogramData = useMemo(() => createHistogramData(normalSampleData, 10), [normalSampleData]);

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
          <BarChart data={histogramData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" label={{ value: 'Rangos de Valores', position: 'insideBottom', offset: -5 }} />
            <YAxis label={{ value: 'Frecuencia', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Bar dataKey="count" fill="#2563eb" />
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
        <strong>Normalidad:</strong> Observa el histograma. Si los datos siguen una distribución normal, las barras formarán una curva simétrica en forma de campana, con la mayoría de los datos concentrados en el centro y disminuyendo hacia los extremos.
        <br />
        <strong>Homocedasticidad:</strong> Observa el gráfico de dispersión de residuos. Si los datos son homocedásticos, los puntos se distribuirán de manera uniforme alrededor de la línea central (cero), sin mostrar patrones en forma de embudo o con mayor dispersión en un extremo.
      </p>
    </div>
  );
};

export default ParametricAssumptionsVisualizer;
