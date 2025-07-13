
'use client';




'use client';

import React from 'react';

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

  const chartWidth = 600; // Ancho del área del gráfico en píxeles
  const chartHeight = data.length * 40; // Altura dinámica basada en el número de factores
  const hrScale = (hr: number) => (hr - 0) / (4 - 0) * chartWidth; // Escala HR a píxeles (asumiendo HR de 0 a 4)

  return (
    <div className="w-full overflow-x-auto">
      <div className="relative" style={{ width: chartWidth + 100, height: chartHeight + 50 }}>
        {/* Eje X (HR) */}
        <div className="absolute bottom-0 left-[100px] right-0 h-px bg-gray-300">
          <div className="absolute -bottom-5 text-xs text-gray-600" style={{ left: hrScale(0) }}>0</div>
          <div className="absolute -bottom-5 text-xs text-gray-600" style={{ left: hrScale(1) }}>1</div>
          <div className="absolute -bottom-5 text-xs text-gray-600" style={{ left: hrScale(2) }}>2</div>
          <div className="absolute -bottom-5 text-xs text-gray-600" style={{ left: hrScale(3) }}>3</div>
          <div className="absolute -bottom-5 text-xs text-gray-600" style={{ left: hrScale(4) }}>4</div>
          <div className="absolute -bottom-10 text-sm text-gray-700" style={{ left: chartWidth / 2 - 50 }}>Hazard Ratio (HR)</div>
        </div>

        {/* Línea de referencia HR = 1 */}
        <div className="absolute top-0 bottom-0 bg-red-400 opacity-50 w-px" style={{ left: 100 + hrScale(1) }}></div>
        <div className="absolute -top-5 text-xs text-red-600" style={{ left: 100 + hrScale(1) - 20 }}>HR=1</div>

        {/* Factores y sus intervalos */}
        {data.map((entry, index) => {
          const yPos = (index * 40) + 20; // Posición vertical para cada factor
          const hrColor = entry.lowerCI <= 1 && entry.upperCI >= 1 ? "#6b7280" : "#2563eb"; // Gris si cruza 1, azul si no

          return (
            <div key={entry.name} className="absolute left-0 right-0" style={{ top: yPos }}>
              {/* Nombre del factor */}
              <div className="absolute left-0 w-[90px] text-right pr-2 text-sm text-gray-800" style={{ top: -8 }}>
                {entry.name}
              </div>
              {/* Línea del intervalo de confianza */}
              <div
                className="absolute h-px bg-current"
                style={{
                  left: 100 + hrScale(entry.lowerCI),
                  width: hrScale(entry.upperCI) - hrScale(entry.lowerCI),
                  backgroundColor: hrColor,
                  top: 0,
                }}
              ></div>
              {/* Punto del Hazard Ratio */}
              <div
                className="absolute w-2 h-2 rounded-full bg-current"
                style={{
                  left: 100 + hrScale(entry.hr) - 4,
                  top: -4,
                  backgroundColor: hrColor,
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HazardRatioVisualizer;


