'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ScienceIcon from '@mui/icons-material/Science';


export default function DistribucionesDiscretasPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Distribuciones Discretas: Contando Eventos en Salud
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="El Caso Clínico: Éxito de un Tratamiento" />
        <CardContent>
          <Typography variant="body1" paragraph>
            Imagina que estás probando un nuevo tratamiento y quieres saber cuántos pacientes responderán positivamente. O quizás, cuántos casos de una enfermedad rara aparecerán en un hospital en un mes. Aquí es donde entran las **distribuciones discretas**.
          </Typography>
          <Typography variant="body1">
            A diferencia de las variables continuas (que pueden tomar cualquier valor), las variables discretas solo pueden tomar valores enteros (0, 1, 2, 3...). Estas distribuciones nos ayudan a modelar la probabilidad de que ocurra un número específico de eventos.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="1. Distribución Binomial: Éxito o Fracaso" />
        <CardContent>
          <Typography variant="body1" paragraph>
            Piensa en un ensayo clínico donde cada paciente, de forma independiente, o bien se cura (éxito) o no se cura (fracaso). La distribución binomial nos dice la probabilidad de obtener un número determinado de éxitos en un número fijo de intentos.
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            <ul>
              <li><strong>Condiciones:</strong></li>
              <li>Hay un número fijo de ensayos (n).</li>
              <li>Cada ensayo tiene solo dos resultados posibles (éxito/fracaso).</li>
              <li>La probabilidad de éxito (p) es la misma en cada ensayo.</li>
              <li>Los ensayos son independientes entre sí.</li>
            </ul>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            <strong>Ejemplo:</strong> Probabilidad de que 7 de 10 pacientes respondan a un nuevo fármaco, si la probabilidad de respuesta individual es del 60%.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="2. Distribución de Poisson: Contando Eventos Raros" />
        <CardContent>
          <Typography variant="body1" paragraph>
            Esta distribución es ideal para modelar el número de veces que ocurre un evento raro en un intervalo de tiempo o espacio determinado. Por ejemplo, el número de errores de medicación en una unidad de enfermería en una semana, o el número de casos de una enfermedad muy poco frecuente en una región en un año.
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            <ul>
              <li><strong>Condiciones:</strong></li>
              <li>Los eventos ocurren de forma independiente.</li>
              <li>La tasa promedio de ocurrencia (λ, lambda) es constante en el intervalo.</li>
              <li>Dos eventos no pueden ocurrir exactamente al mismo tiempo.</li>
            </ul>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            <strong>Ejemplo:</strong> Probabilidad de que haya 3 ingresos por una patología específica en un día, si la media es de 1.5 ingresos/día.
          </Typography>
          <Alert severity="info" sx={{ mt: 2 }}>
            La distribución hipergeométrica es similar a la binomial pero se usa cuando el muestreo es **sin reemplazo** (la probabilidad de éxito cambia con cada extracción). Es menos común en aplicaciones clínicas directas, pero es importante conocer su existencia.
          </Alert>
        </CardContent>
      </Card>
    </Box>
  );
}
