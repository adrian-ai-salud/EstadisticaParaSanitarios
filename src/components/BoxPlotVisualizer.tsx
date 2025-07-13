
'use client';

import React from 'react';
import { ResponsiveContainer } from 'recharts'; // Solo ResponsiveContainer de recharts

// Datos de ejemplo para un Box Plot
const data = [
  { name: 'Grupo A', q1: 20, median: 30, q3: 40, min: 10, max: 50, outliers: [5, 55] },
  { name: 'Grupo B', q1: 35, median: 45, q3: 55, min: 25, max: 65, outliers: [70] },
];

const BoxPlotVisualizer: React.FC = () => {
  const chartHeight = 250; // Altura fija del área del gráfico
  const chartWidth = 400; // Ancho fijo del área del gráfico
  const yAxisWidth = 50; // Espacio para el eje Y
  const xAxisHeight = 30; // Espacio para el eje X
  const padding = 20; // Relleno alrededor del gráfico

  // Escala para mapear valores de datos a posiciones Y en el SVG
  const yScale = (value: number) => {
    const minValue = 0; // Asumimos un rango mínimo para la escala
    const maxValue = 80; // Asumimos un rango máximo para la escala
    return chartHeight - ((value - minValue) / (maxValue - minValue)) * chartHeight;
  };

  return (
    <ResponsiveContainer width="100%" height={chartHeight + xAxisHeight + padding * 2}>
      <svg width="100%" height="100%">
        {/* Eje Y */}
        <line x1={yAxisWidth} y1={padding} x2={yAxisWidth} y2={chartHeight + padding} stroke="#ccc" />
        {/* Etiquetas del eje Y */}
        {[0, 20, 40, 60, 80].map(tick => (
          <text key={tick} x={yAxisWidth - 5} y={yScale(tick) + padding} textAnchor="end" alignmentBaseline="middle" fontSize="12" fill="#666">
            {tick}
          </text>
        ))}
        <text x={yAxisWidth - 30} y={chartHeight / 2 + padding} textAnchor="middle" transform={`rotate(-90 ${yAxisWidth - 30} ${chartHeight / 2 + padding})`} fontSize="14" fill="#333">
          Valor
        </text>

        {/* Eje X */}
        <line x1={yAxisWidth} y1={chartHeight + padding} x2={chartWidth + yAxisWidth} y2={chartHeight + padding} stroke="#ccc" />
        {/* Etiquetas del eje X */}
        {data.map((entry, index) => (
          <text key={entry.name} x={yAxisWidth + (index * (chartWidth / data.length)) + (chartWidth / data.length / 2)} y={chartHeight + padding + 15} textAnchor="middle" fontSize="12" fill="#666">
            {entry.name}
          </text>
        ))}

        {/* Dibujar Box Plots */}
        {data.map((entry, index) => {
          const xOffset = yAxisWidth + (index * (chartWidth / data.length)) + (chartWidth / data.length / 2);
          const boxWidth = 50;

          return (
            <g key={entry.name}>
              {/* Caja */}
              <rect
                x={xOffset - boxWidth / 2}
                y={yScale(entry.q3) + padding}
                width={boxWidth}
                height={yScale(entry.q1) - yScale(entry.q3)}
                fill="#2563eb"
                stroke="#2563eb"
                strokeWidth="1"
              />
              {/* Mediana */}
              <line
                x1={xOffset - boxWidth / 2}
                y1={yScale(entry.median) + padding}
                x2={xOffset + boxWidth / 2}
                y2={yScale(entry.median) + padding}
                stroke="#dc2626"
                strokeWidth="2"
              />
              {/* Bigotes */}
              <line
                x1={xOffset}
                y1={yScale(entry.max) + padding}
                x2={xOffset}
                y2={yScale(entry.q3) + padding}
                stroke="#2563eb"
                strokeWidth="1"
              />
              <line
                x1={xOffset}
                y1={yScale(entry.min) + padding}
                x2={xOffset}
                y2={yScale(entry.q1) + padding}
                stroke="#2563eb"
                strokeWidth="1"
              />
              {/* Outliers */}
              {entry.outliers && entry.outliers.map((outlier, i) => (
                <circle
                  key={`outlier-${entry.name}-${i}`}
                  cx={xOffset}
                  cy={yScale(outlier) + padding}
                  r="3"
                  fill="#dc2626"
                />
              ))}
            </g>
          );
        })}
      </svg>
    </ResponsiveContainer>
  );
};

export default BoxPlotVisualizer;
