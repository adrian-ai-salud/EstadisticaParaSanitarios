
'use client';

import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const data = [
  { id: 1, time: 10, event: true, label: 'Evento' },
  { id: 2, time: 15, event: false, label: 'Censurado' },
  { id: 3, time: 20, event: true, label: 'Evento' },
  { id: 4, time: 25, event: false, label: 'Censurado' },
  { id: 5, time: 30, event: true, label: 'Evento' },
  { id: 6, time: 35, event: false, label: 'Censurado' },
  { id: 7, time: 40, event: true, label: 'Evento' },
  { id: 8, time: 45, event: false, label: 'Censurado' },
];

const CensoringVisualizer: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" dataKey="time" name="Tiempo" unit=" meses" />
        <YAxis type="number" dataKey="id" name="Individuo" hide />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <ReferenceLine x={0} stroke="#6b7280" strokeWidth={2} /> {/* Línea de tiempo 0 */}

        <Scatter name="Eventos" data={data.filter(d => d.event)} fill="#2563eb" shape="circle" />
        <Scatter name="Censurados" data={data.filter(d => !d.event)} fill="#dc2626" shape="cross" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default CensoringVisualizer;
