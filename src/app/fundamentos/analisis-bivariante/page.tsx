'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { List, ListItem } from '@mui/material';
import ScatterPlotExample from '@/components/ScatterPlotExample';

export default function AnalisisBivariantePage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Análisis Bivariante: Relacionando Variables
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="El Caso Clínico: Tensión Arterial y Edad" />
        <CardContent>
          <Typography variant="body1" paragraph>
            En tu consulta, observas que las personas mayores tienden a tener una tensión arterial más alta. ¿Pero es una impresión tuya o existe una relación real? El análisis bivariante nos permite estudiar la relación entre **dos variables** a la vez.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="Relación entre Dos Variables Cuantitativas" />
        <CardContent>
          <Typography variant="h6">Diagrama de Dispersión (Scatter Plot)</Typography>
          <Typography variant="body1" paragraph>
            Es la mejor herramienta visual para empezar. Se coloca una variable en el eje X (ej. Edad) y la otra en el eje Y (ej. Tensión Arterial Sistólica). Cada paciente es un punto en el gráfico.
          </Typography>
          <Typography variant="body1" paragraph>
            Viendo la nube de puntos, podemos intuir si hay una relación: si los puntos tienden a subir juntos (relación positiva), si uno sube mientras el otro baja (relación negativa), o si no hay un patrón claro (no hay relación).
          </Typography>
          <ScatterPlotExample />
          <Typography variant="h6" sx={{ mt: 2 }}>Coeficiente de Correlación de Pearson (r)</Typography>
          <Typography variant="body1" paragraph>
            Este coeficiente nos da un número exacto para medir la **fuerza y dirección de una relación lineal**.
          </Typography>
          <List>
            <ListItem>Va de -1 a +1.</ListItem>
            <ListItem>Cercano a +1: Correlación lineal positiva fuerte (a más edad, más tensión).</ListItem>
            <ListItem>Cercano a -1: Correlación lineal negativa fuerte (a más horas de ejercicio, menos peso).</ListItem>
            <ListItem>Cercano a 0: No hay correlación lineal.</ListItem>
          </List>
          <Alert severity="warning" sx={{ mt: 2 }}>
            <strong>¡Cuidado!</strong> Correlación no implica causalidad. Que dos cosas estén relacionadas no significa que una cause la otra. Podría haber un tercer factor (una variable de confusión) que explique la relación.
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Relación entre Dos Variables Cualitativas" />
        <CardContent>
          <Typography variant="h6">Tablas de Contingencia</Typography>
          <Typography variant="body1" paragraph>
            Para variables como 'Fumador' (Sí/No) y 'Enfermedad Pulmonar' (Sí/No), usamos tablas de contingencia para ver las frecuencias. Contamos cuántos pacientes caen en cada combinación de categorías (ej. fumadores con enfermedad, fumadores sin enfermedad, etc.).
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>Prueba de Chi-Cuadrado (χ²)</Typography>
          <Typography variant="body1" paragraph>
            Esta prueba estadística se aplica a las tablas de contingencia para decirnos si la asociación que vemos entre las dos variables es estadísticamente significativa o si podría deberse al azar.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
