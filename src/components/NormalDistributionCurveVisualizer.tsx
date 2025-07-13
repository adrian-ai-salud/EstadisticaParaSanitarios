
'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface NormalDistributionCurveVisualizerProps {
  mean?: number;
  stdDev?: number;
}

const NormalDistributionCurveVisualizer: React.FC<NormalDistributionCurveVisualizerProps> = ({ mean = 0, stdDev = 1 }) => {
  const data = [];
  for (let i = -4; i <= 4; i += 0.1) {
    const x = mean + i * stdDev;
    const y = (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2));
    data.push({ x: parseFloat(x.toFixed(2)), y: parseFloat(y.toFixed(4)) });
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" label={{ value: 'Valor (x)', position: 'insideBottom', offset: -5 }} />
        <YAxis label={{ value: 'Probabilidad', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Line type="monotone" dataKey="y" stroke="#2563eb" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default NormalDistributionCurveVisualizer;
