'use client';

import * as React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardHeader } from '@mui/material';

// Datos de ejemplo: relación entre edad y tensión arterial sistólica
const data = [
  { edad: 43, tension: 120 },
  { edad: 51, tension: 128 },
  { edad: 55, tension: 135 },
  { edad: 61, tension: 142 },
  { edad: 67, tension: 150 },
  { edad: 72, tension: 156 },
  { edad: 78, tension: 160 },
  { edad: 45, tension: 122 },
  { edad: 58, tension: 138 },
  { edad: 63, tension: 145 },
  { edad: 25, tension: 110 },
  { edad: 30, tension: 115 },
  { edad: 35, tension: 118 },
];

export default function ScatterPlotExample() {
  return (
    <Card>
      <CardHeader title="Ejemplo Interactivo: Edad vs. Tensión Arterial" />
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <ScatterChart
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis type="number" dataKey="edad" name="Edad" unit=" años" />
            <YAxis type="number" dataKey="tension" name="Tensión Sistólica" unit=" mmHg" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend />
            <Scatter name="Pacientes" data={data} fill="#00796b" />
          </ScatterChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
