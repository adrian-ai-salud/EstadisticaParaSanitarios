
'use client';

import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Customized } from 'recharts';

interface HazardRatioData {
  name: string;
  hr: number;
  lowerCI: number;
  upperCI: number;
}

// Componente personalizado para dibujar las líneas de los intervalos de confianza
interface CustomIntervalLineProps {
  y: number;
  lowerCI: number;
  upperCI: number;
  hr: number;
  color: string;
}

const CustomIntervalLine = (props: CustomIntervalLineProps) => {
  const { y, lowerCI, upperCI, hr, color } = props;

  return (
    <g>
      {/* Línea horizontal del intervalo de confianza */}
      <line x1={lowerCI} y1={y} x2={upperCI} y2={y} stroke={color} strokeWidth={2} />
      {/* Marcas en los extremos del intervalo */}
      <line x1={lowerCI} y1={y - 5} x2={lowerCI} y2={y + 5} stroke={color} strokeWidth={2} />
      <line x1={upperCI} y1={y - 5} x2={upperCI} y2={y + 5} stroke={color} strokeWidth={2} />
      {/* Punto del Hazard Ratio */}
      <circle cx={hr} cy={y} r={4} fill={color} />
    </g>
  );
};

const HazardRatioVisualizer: React.FC = () => {
  const data: HazardRatioData[] = [
    { name: 'Factor A', hr: 1.5, lowerCI: 1.2, upperCI: 1.8 },
    { name: 'Factor B', hr: 0.8, lowerCI: 0.6, upperCI: 1.0 },
    { name: 'Factor C', hr: 2.1, lowerCI: 1.9, upperCI: 2.3 },
    { name: 'Factor D', hr: 1.0, lowerCI: 0.9, upperCI: 1.1 },
    { name: 'Factor E', hr: 0.5, lowerCI: 0.3, upperCI: 0.7 },
    { name: 'Factor F', hr: 3.0, lowerCI: 2.5, upperCI: 3.5 },
  ];

  return (
    <ResponsiveContainer width="100%" height={data.length * 50 + 50}>
      <ScatterChart
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          type="number"
          dataKey="hr"
          domain={[0, 'auto']}
          label={{ value: 'Hazard Ratio (HR)', position: 'insideBottom', offset: -5 }}
          allowDecimals={true}
        />
        <YAxis
          type="category"
          dataKey="name"
          label={{ value: 'Factor', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <ReferenceLine x={1} stroke="#dc2626" strokeDasharray="3 3" label="HR = 1 (No efecto)" />
        <Scatter data={data} fill="#2563eb" />
        {data.map((entry) => (
          <Customized
            key={entry.name}
            component={CustomIntervalLine}
            y={entry.y}
            lowerCI={entry.lowerCI}
            upperCI={entry.upperCI}
            hr={entry.hr}
            color={entry.lowerCI <= 1 && entry.upperCI >= 1 ? "#6b7280" : "#2563eb"} // Gris si cruza 1, azul si no
          />
        ))}
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default HazardRatioVisualizer;
