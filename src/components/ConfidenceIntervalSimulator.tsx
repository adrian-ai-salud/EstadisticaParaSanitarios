
'use client';

import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

interface ConfidenceIntervalSimulatorProps {
  populationMean?: number;
  populationStdDev?: number;
  sampleSize?: number;
  numSamples?: number;
}

interface SampleData {
  id: number;
  sampleMean: number;
  lowerBound: number;
  upperBound: number;
  containsPopulationMean: boolean;
}

const ConfidenceIntervalSimulator: React.FC<ConfidenceIntervalSimulatorProps> = ({
  populationMean: initialPopulationMean = 100,
  populationStdDev: initialPopulationStdDev = 15,
  sampleSize: initialSampleSize = 30,
  numSamples: initialNumSamples = 50,
}) => {
  const [populationMean, setPopulationMean] = useState(initialPopulationMean);
  const [populationStdDev, setPopulationStdDev] = useState(initialPopulationStdDev);
  const [sampleSize, setSampleSize] = useState(initialSampleSize);
  const [numSamples, setNumSamples] = useState(initialNumSamples);
  const [data, setData] = useState<SampleData[]>([]);

  useEffect(() => {
    const generateData = () => {
      const newData = [];
      for (let i = 0; i < numSamples; i++) {
        // Simular una muestra y calcular su media
        let sampleSum = 0;
        for (let j = 0; j < sampleSize; j++) {
          // Generar un número aleatorio de una distribución normal (aproximado con Box-Muller)
          const u1 = Math.random();
          const u2 = Math.random();
          const z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
          sampleSum += populationMean + z0 * populationStdDev;
        }
        const sampleMean = sampleSum / sampleSize;

        // Calcular el Intervalo de Confianza del 95% (Z = 1.96 para 95%)
        const standardError = populationStdDev / Math.sqrt(sampleSize);
        const marginOfError = 1.96 * standardError;
        const lowerBound = sampleMean - marginOfError;
        const upperBound = sampleMean + marginOfError;

        newData.push({
          id: i + 1,
          sampleMean: parseFloat(sampleMean.toFixed(2)),
          lowerBound: parseFloat(lowerBound.toFixed(2)),
          upperBound: parseFloat(upperBound.toFixed(2)),
          containsPopulationMean: lowerBound <= populationMean && upperBound >= populationMean,
        });
      }
      setData(newData);
    };

    generateData();
  }, [populationMean, populationStdDev, sampleSize, numSamples]);

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-2 gap-4 mb-4 w-full max-w-md">
        <label className="flex flex-col">
          Media Poblacional:
          <input
            type="number"
            value={populationMean}
            onChange={(e) => setPopulationMean(parseFloat(e.target.value))}
            className="border rounded px-2 py-1 mt-1"
          />
        </label>
        <label className="flex flex-col">
          Desv. Típica Poblacional:
          <input
            type="number"
            value={populationStdDev}
            onChange={(e) => setPopulationStdDev(parseFloat(e.target.value))}
            className="border rounded px-2 py-1 mt-1"
          />
        </label>
        <label className="flex flex-col">
          Tamaño de Muestra:
          <input
            type="number"
            min="5"
            max="100"
            value={sampleSize}
            onChange={(e) => setSampleSize(parseInt(e.target.value))}
            className="border rounded px-2 py-1 mt-1"
          />
        </label>
        <label className="flex flex-col">
          Número de Muestras:
          <input
            type="number"
            min="10"
            max="200"
            value={numSamples}
            onChange={(e) => setNumSamples(parseInt(e.target.value))}
            className="border rounded px-2 py-1 mt-1"
          />
        </label>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          layout="vertical"
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={['dataMin', 'dataMax']} label={{ value: 'Valor', position: 'insideBottom', offset: -5 }} />
          <YAxis type="category" dataKey="id" label={{ value: 'Muestra', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <ReferenceLine x={populationMean} stroke="red" strokeDasharray="3 3" label="Media Poblacional" />
          {data.map((entry) => (
            <ReferenceLine
              key={entry.id}
              x1={entry.lowerBound}
              x2={entry.upperBound}
              y={entry.id}
              stroke={entry.containsPopulationMean ? "#2563eb" : "#dc2626"} // Azul si contiene la media, rojo si no
              strokeWidth={2}
              isFront={true} // Para asegurar que la línea esté por encima de la cuadrícula
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
      <p className="text-sm text-gray-600 mt-4">
        Observa cuántos de los intervalos de confianza (líneas horizontales) contienen la media poblacional (línea roja vertical). Idealmente, el {((1 - 0.05) * 100).toFixed(0)}% de los intervalos deberían contenerla.
      </p>
    </div>
  );
};

export default ConfidenceIntervalSimulator;
