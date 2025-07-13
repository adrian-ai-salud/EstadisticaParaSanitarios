
'use client';

import React from 'react';
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

const TimeSeriesDecompositionVisualizer: React.FC = () => {
  return (
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
        <Line type="monotone" dataKey="original" stroke="#8884d8" name="Serie Original" />
        <Line type="monotone" dataKey="trend" stroke="#82ca9d" name="Tendencia" />
        <Line type="monotone" dataKey="seasonality" stroke="#ffc658" name="Estacionalidad" />
        <Line type="monotone" dataKey="residual" stroke="#ff7300" name="Residuo" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TimeSeriesDecompositionVisualizer;
