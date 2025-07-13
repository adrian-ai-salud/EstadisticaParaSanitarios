
'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

interface HazardRatioData {
  name: string;
  hr: number;
  lowerCI: number;
  upperCI: number;
}

const HazardRatioVisualizer: React.FC = () => {
  const data: HazardRatioData[] = [
    { name: 'Factor A', hr: 1.5, lowerCI: 1.2, upperCI: 1.8 },
    { name: 'Factor B', hr: 0.8, lowerCI: 0.6, upperCI: 1.0 },
    { name: 'Factor C', hr: 2.1, lowerCI: 1.9, upperCI: 2.3 },
    { name: 'Factor D', hr: 1.0, lowerCI: 0.9, upperCI: 1.1 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 'auto']} label={{ value: 'Hazard Ratio (HR)', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <ReferenceLine y={1} stroke="#dc2626" strokeDasharray="3 3" label="HR = 1 (No efecto)" />
        <Bar dataKey="hr" fill="#2563eb" />
        {data.map((entry, index) => (
          <ReferenceLine
            key={`ci-${index}`}
            x={entry.name}
            y1={entry.lowerCI}
            y2={entry.upperCI}
            stroke="#6b7280"
            strokeWidth={2}
            segment={[{ x: entry.name, y: entry.lowerCI }, { x: entry.name, y: entry.upperCI }]} // Dibuja la línea vertical del CI
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HazardRatioVisualizer;
