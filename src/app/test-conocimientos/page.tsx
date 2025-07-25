
'use client';

import React, { useState } from 'react';
import { bancoPreguntas, Pregunta } from '@/data/bancoPreguntas';
import PageTitle from '@/components/PageTitle';
import { FaSyncAlt } from 'react-icons/fa';

const NUMERO_DE_PREGUNTAS = 10;

interface RespuestaUsuario {
  pregunta: Pregunta;
  respuestaSeleccionada: number | null;
  esCorrecta: boolean;
}

// Función para mezclar un array (algoritmo de Fisher-Yates)
const shuffleArray = (array: Pregunta[]) => {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

export default function TestConocimientosPage() {
  const [preguntasTest, setPreguntasTest] = useState<Pregunta[]>([]);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState<number | null>(null);
  const [puntuacion, setPuntuacion] = useState(0);
  const [testIniciado, setTestIniciado] = useState(false);
  const [testFinalizado, setTestFinalizado] = useState(false);
  const [historialRespuestas, setHistorialRespuestas] = useState<RespuestaUsuario[]>([]);

  const iniciarTest = () => {
    if (bancoPreguntas.length === 0) {
      console.error("Error: El banco de preguntas está vacío.");
      // Podrías mostrar un mensaje al usuario aquí si lo deseas
      return;
    }
    const preguntasMezcladas = shuffleArray([...bancoPreguntas]);
    setPreguntasTest(preguntasMezcladas.slice(0, NUMERO_DE_PREGUNTAS));
    setPreguntaActual(0);
    setRespuestaSeleccionada(null);
    setPuntuacion(0);
    setTestFinalizado(false);
    setTestIniciado(true);
    setHistorialRespuestas([]); // Reiniciar historial al iniciar un nuevo test
  };

  const handleSeleccionarRespuesta = (opcionIndex: number) => {
    setRespuestaSeleccionada(opcionIndex);
  };

  const handleSiguientePregunta = () => {
    if (respuestaSeleccionada === null) return;

    const preguntaActualObj = preguntasTest[preguntaActual];
    const esCorrecta = respuestaSeleccionada === preguntaActualObj.respuestaCorrecta;

    if (esCorrecta) {
      setPuntuacion(puntuacion + 1);
    }

    // Almacenar la respuesta en el historial
    setHistorialRespuestas((prev) => [
      ...prev,
      {
        pregunta: preguntaActualObj,
        respuestaSeleccionada: respuestaSeleccionada,
        esCorrecta: esCorrecta,
      },
    ]);

    if (preguntaActual < NUMERO_DE_PREGUNTAS - 1) {
      setPreguntaActual(preguntaActual + 1);
      setRespuestaSeleccionada(null);
    } else {
      setTestFinalizado(true);
    }
  };

  if (!testIniciado) {
    return (
      <div className="text-center">
        <PageTitle title="Test de Conocimientos" />
        {bancoPreguntas.length === 0 ? (
          <p className="mb-8 text-lg text-red-500">Error: No se pudieron cargar las preguntas del test. Por favor, inténtalo de nuevo más tarde.</p>
        ) : (
          <p className="mb-8 text-lg">Pon a prueba lo que has aprendido con este test de 10 preguntas aleatorias.</p>
        )}
        <button
          onClick={iniciarTest}
          className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-lg text-xl transition-transform transform hover:scale-105"
          disabled={bancoPreguntas.length === 0}
        >
          Empezar Test
        </button>
      </div>
    );
  }

  if (testFinalizado) {
    return (
      <div className="text-center">
        <PageTitle title="Resultados del Test" />
        <div className={`p-8 rounded-lg shadow-xl inline-block ${puntuacion >= 7 ? 'bg-green-100' : puntuacion >= 4 ? 'bg-yellow-100' : 'bg-red-100'}`}>
          <h2 className="text-2xl font-bold mb-4">Tu puntuación final es:</h2>
          <p className="text-6xl font-bold mb-6">{puntuacion} / {NUMERO_DE_PREGUNTAS}</p>
          <p className="text-xl">{puntuacion >= 7 ? '¡Excelente trabajo!' : puntuacion >= 4 ? '¡No está mal, sigue repasando!' : 'Necesitas repasar un poco más.'}</p>
        </div>

        <div className="mt-8 text-left w-full max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Revisión de Respuestas</h3>
          {historialRespuestas.map((item, index) => (
            <div key={index} className="mb-6 p-4 border rounded-lg shadow-sm">
              <p className="font-semibold text-lg mb-2">Pregunta {index + 1}: {item.pregunta.pregunta}</p>
              <p className={`mb-1 ${item.esCorrecta ? 'text-green-600' : 'text-red-600'}`}>
                Tu respuesta: {item.respuestaSeleccionada !== null ? item.pregunta.opciones[item.respuestaSeleccionada] : 'No respondida'}
                {!item.esCorrecta && (
                  <span className="ml-2 text-red-600 font-bold">(Incorrecta)</span>
                )}
              </p>
              <p className="text-green-600">
                Respuesta correcta: {item.pregunta.opciones[item.pregunta.respuestaCorrecta]}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={iniciarTest}
          className="mt-8 bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-6 rounded-lg text-lg transition-transform transform hover:scale-105 flex items-center mx-auto"
        >
          <FaSyncAlt className="mr-2" />
          Intentar de Nuevo
        </button>
      </div>
    );
  }

  const pregunta = preguntasTest[preguntaActual];

  return (
    <div>
      <PageTitle title="Test de Conocimientos" />
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <p className="text-gray-600 font-semibold">Pregunta {preguntaActual + 1} de {NUMERO_DE_PREGUNTAS}</p>
          <h2 className="text-2xl font-bold mt-2">{pregunta.pregunta}</h2>
        </div>
        <div className="space-y-3">
          {pregunta.opciones.map((opcion, index) => (
            <button
              key={index}
              onClick={() => handleSeleccionarRespuesta(index)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${respuestaSeleccionada === index ? 'bg-blue-200 border-blue-500 font-bold text-black' : 'bg-white hover:bg-gray-100 border-gray-400 text-black'}`}>
              {opcion}
            </button>
          ))}
        </div>
        <div className="text-right mt-6">
          <button
            onClick={handleSiguientePregunta}
            disabled={respuestaSeleccionada === null}
            className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}
