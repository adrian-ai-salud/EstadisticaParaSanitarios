
'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dataGroupA = [
  { time: 0, survival: 1.0 },
  { time: 5, survival: 0.9 },
  { time: 10, survival: 0.8 },
  { time: 15, survival: 0.7 },
  { time: 20, survival: 0.6 },
  { time: 25, survival: 0.5 },
  { time: 30, survival: 0.4 },
];

const dataGroupB = [
  { time: 0, survival: 1.0 },
  { time: 8, survival: 0.95 },
  { time: 16, survival: 0.85 },
  { time: 24, survival: 0.7 },
  { time: 32, survival: 0.55 },
  { time: 40, survival: 0.4 },
  { time: 48, survival: 0.25 },
];

const KaplanMeierCurveGenerator: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" type="number" label={{ value: 'Tiempo (meses)', position: 'insideBottom', offset: -5 }} />
        <YAxis domain={[0, 1]} label={{ value: 'Probabilidad de Supervivencia', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Line
          dataKey="survival"
          type="stepAfter"
          stroke="#2563eb"
          strokeWidth={2}
          name="Grupo A"
          data={dataGroupA}
        />
        <Line
          dataKey="survival"
          type="stepAfter"
          stroke="#dc2626"
          strokeWidth={2}
          name="Grupo B"
          data={dataGroupB}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default KaplanMeierCurveGenerator;
