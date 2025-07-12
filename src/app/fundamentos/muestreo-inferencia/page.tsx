'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

export default function MuestreoInferenciaPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Muestreo e Inferencia: De la Muestra a la Población
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="El Dilema del Investigador" />
        <CardContent>
          <Typography variant="body1" paragraph>
            Quieres saber la prevalencia de la hipertensión en todos los adultos de tu país (la **población**). Es imposible medirlos a todos. ¿Qué haces? Seleccionas un grupo más pequeño y manejable (la **muestra**) y los mides a ellos.
          </Typography>
          <Typography variant="body1">
            La **inferencia estadística** es el arte y la ciencia de usar los resultados de tu muestra para hacer afirmaciones (inferencias) sobre la población total. Pero para que esto funcione, ¡la muestra debe ser representativa!
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="Técnicas de Muestreo: ¿Cómo elegir?" />
        <CardContent>
          <Typography variant="h6">Muestreo Probabilístico</Typography>
          <Typography variant="body1" paragraph>
            Es el estándar de oro en investigación. Cada individuo de la población tiene una probabilidad conocida (y no nula) de ser seleccionado. Esto reduce el sesgo.
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            <ul>
              <li><strong>Aleatorio Simple:</strong> Como un sorteo. A cada persona se le asigna un número y se eligen al azar.</li>
              <li><strong>Estratificado:</strong> Divides la población en grupos relevantes (ej. por edad, sexo) y luego haces un muestreo aleatorio en cada grupo. Asegura la representación de todos los estratos.</li>
              <li><strong>Sistemático:</strong> Eliges un punto de partida al azar y luego seleccionas cada &apos;k-ésimo&apos; individuo de una lista.</li>
              <li><strong>Por Conglomerados:</strong> Divides la población en grupos (ej. ciudades, hospitales) y seleccionas grupos enteros al azar para estudiarlos.</li>
            </ul>
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="h6">Muestreo No Probabilístico</Typography>
          <Typography variant="body1" paragraph>
            La selección no es aleatoria. Es más fácil y barato, pero tiene un alto riesgo de sesgo y los resultados no son generalizables a toda la población. Se usa en estudios exploratorios.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Ejemplo: Muestreo por conveniencia (encuestar a los pacientes que acuden a tu consulta un lunes por la mañana).
          </Typography>
        </CardContent>
      </Card>

      <Alert severity="info">
        Un buen muestreo es la base de cualquier estudio fiable. Un tamaño de muestra adecuado y una técnica de muestreo probabilística son esenciales para poder confiar en tus conclusiones.
      </Alert>
    </Box>
  );
}
