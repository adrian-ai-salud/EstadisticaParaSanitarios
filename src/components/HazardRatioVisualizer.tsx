
'use client';



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
    { name: 'Factor E', hr: 0.5, lowerCI: 0.3, upperCI: 0.7 },
    { name: 'Factor F', hr: 3.0, lowerCI: 2.5, upperCI: 3.5 },
  ];

  // Función para mapear valores de HR a posiciones X en el SVG
  const hrToX = (hr: number, width: number) => {
    // Asumiendo un rango de HR de 0 a 4 para el gráfico
    const minHr = 0;
    const maxHr = 4;
    return ((hr - minHr) / (maxHr - minHr)) * width;
  };

  // Función para mapear nombres de factores a posiciones Y en el SVG
  const nameToY = (index: number, height: number, totalItems: number) => {
    const itemHeight = height / totalItems;
    return itemHeight * (index + 0.5); // Centrar en la mitad del espacio
  };

  return (
    <ResponsiveContainer width="100%" height={data.length * 50 + 50}>
      <svg>
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        {/* Eje X y Y (simulados o con componentes de recharts si es posible) */}
        {/* Línea de referencia HR = 1 */}
        <line x1={hrToX(1, 600)} y1="0" x2={hrToX(1, 600)} y2="100%" stroke="#dc2626" strokeDasharray="3 3" />

        {data.map((entry, index) => {
          const yPos = nameToY(index, data.length * 50, data.length);
          const hrColor = entry.lowerCI <= 1 && entry.upperCI >= 1 ? "#6b7280" : "#2563eb";

          return (
            <g key={entry.name} transform={`translate(0, ${yPos})`}>
              {/* Nombre del factor */}
              <text x="10" y="0" alignmentBaseline="middle" fill="#1a1a1a">
                {entry.name}
              </text>
              {/* Línea del intervalo de confianza */}
              <line
                x1={hrToX(entry.lowerCI, 600)}
                y1="0"
                x2={hrToX(entry.upperCI, 600)}
                y2="0"
                stroke={hrColor}
                strokeWidth="2"
              />
              {/* Punto del Hazard Ratio */}
              <circle
                cx={hrToX(entry.hr, 600)}
                cy="0"
                r="4"
                fill={hrColor}
              />
            </g>
          );
        })}
      </svg>
    </ResponsiveContainer>
  );
};

export default HazardRatioVisualizer;

