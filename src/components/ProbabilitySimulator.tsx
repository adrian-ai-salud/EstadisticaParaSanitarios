
'use client';

import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const ProbabilitySimulator: React.FC = () => {
  const [numFlips, setNumFlips] = useState(10);
  const [results, setResults] = useState<{ flips: number; headsProb: number; tailsProb: number }[]>([]);

  useEffect(() => {
    const simulateFlips = () => {
      const newResults = [];
      let heads = 0;
      let tails = 0;

      for (let i = 1; i <= numFlips; i++) {
        if (Math.random() < 0.5) {
          heads++;
        } else {
          tails++;
        }
        newResults.push({
          flips: i,
          headsProb: heads / i,
          tailsProb: tails / i,
        });
      }
      setResults(newResults);
    };

    simulateFlips();
  }, [numFlips]);

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <label htmlFor="numFlips" className="mr-2">Número de Lanzamientos:</label>
        <input
          type="number"
          id="numFlips"
          min="10"
          max="1000"
          step="10"
          value={numFlips}
          onChange={(e) => setNumFlips(parseInt(e.target.value))}
          className="border rounded px-2 py-1 w-24"
        />
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={results}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="flips" label={{ value: 'Número de Lanzamientos', position: 'insideBottom', offset: -5 }} />
          <YAxis domain={[0, 1]} label={{ value: 'Probabilidad', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="headsProb" stroke="#2563eb" name="Prob. Caras" />
          <Line type="monotone" dataKey="tailsProb" stroke="#dc2626" name="Prob. Cruces" />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-sm text-gray-600 mt-4">
        Observa cómo a medida que aumenta el número de lanzamientos, la probabilidad de obtener caras y cruces se acerca al 0.5 (50%). Esto ilustra la <strong>Ley de los Grandes Números</strong>, un concepto fundamental en probabilidad.
      </p>
    </div>
  );
};

export default ProbabilitySimulator;
