
'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Grupo A', value: 30, median: 28 },
  { name: 'Grupo B', value: 45, median: 40 },
];

const MedianComparisonVisualizer: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
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
        <YAxis label={{ value: 'Valor', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#2563eb" name="Valor Promedio" />
        <Bar dataKey="median" fill="#dc2626" name="Mediana" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MedianComparisonVisualizer;
