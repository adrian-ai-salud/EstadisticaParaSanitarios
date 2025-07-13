
'use client';

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface BinomialDistributionSimulatorProps {
  n?: number; // Número de ensayos
  p?: number; // Probabilidad de éxito
}

const BinomialDistributionSimulator: React.FC<BinomialDistributionSimulatorProps> = ({ n = 10, p = 0.5 }) => {
  const [numTrials, setNumTrials] = useState(n);
  const [probSuccess, setProbSuccess] = useState(p);

  // Función para calcular el coeficiente binomial C(n, k)
  const binomialCoeff = (n: number, k: number): number => {
    if (k < 0 || k > n) return 0;
    if (k === 0 || k === n) return 1;
    if (k > n / 2) k = n - k;
    let res = 1;
    for (let i = 1; i <= k; ++i) {
      res = res * (n - i + 1) / i;
    }
    return res;
  };

  // Generar datos para el gráfico de la distribución binomial
  const data = [];
  for (let k = 0; k <= numTrials; k++) {
    const probability = binomialCoeff(numTrials, k) * Math.pow(probSuccess, k) * Math.pow(1 - probSuccess, numTrials - k);
    data.push({ k: k, probability: parseFloat(probability.toFixed(4)) });
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <label htmlFor="numTrials" className="mr-2">Número de Ensayos (n):</label>
        <input
          type="number"
          id="numTrials"
          min="1"
          max="20"
          value={numTrials}
          onChange={(e) => setNumTrials(parseInt(e.target.value))}
          className="border rounded px-2 py-1 w-20"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="probSuccess" className="mr-2">Probabilidad de Éxito (p):</label>
        <input
          type="range"
          id="probSuccess"
          min="0"
          max="1"
          step="0.01"
          value={probSuccess}
          onChange={(e) => setProbSuccess(parseFloat(e.target.value))}
          className="w-40"
        />
        <span className="ml-2">{probSuccess.toFixed(2)}</span>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="k" label={{ value: 'Número de Éxitos (k)', position: 'insideBottom', offset: -5 }} />
          <YAxis label={{ value: 'Probabilidad', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Bar dataKey="probability" fill="#2563eb" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BinomialDistributionSimulator;
