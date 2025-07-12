'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';

export default function TiposDeVariablesPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Tipos de Variables: La Base para Entender tus Datos
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="El Caso Clínico: El Estudio de la Diabetes" />
        <CardContent>
          <Typography variant="body1" paragraph>
            Imagina que estás en una consulta de atención primaria y quieres entender mejor los factores asociados a la diabetes tipo 2 en tus pacientes. Decides recoger algunos datos para analizarlos. Esta información que recoges son tus **variables**.
          </Typography>
          <Typography variant="body1">
            Entender qué tipo de variable tienes es el primer paso para saber qué análisis puedes hacer. No puedes calcular la 'media' del grupo sanguíneo, ¿verdad? ¡Vamos a clasificarlas!
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="1. Variables Cualitativas (o Categóricas)" subheader="Describen una cualidad o característica." />
        <CardContent>
          <Typography variant="h6">a) Nominales</Typography>
          <Typography variant="body1" paragraph>
            Son etiquetas sin un orden inherente. Solo puedes contar cuántos pacientes hay en cada categoría.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Ejemplos en tu estudio:</strong> Grupo Sanguíneo (A, B, AB, O), Sexo (Hombre, Mujer), Fumador (Sí/No).
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="h6">b) Ordinales</Typography>
          <Typography variant="body1" paragraph>
            Estas sí tienen un orden o jerarquía, pero la distancia entre las categorías no es uniforme o medible.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Ejemplos en tu estudio:</strong> Nivel de Dolor (Leve, Moderado, Severo), Estadio de una enfermedad (I, II, III, IV), Nivel socioeconómico (Bajo, Medio, Alto).
          </Typography>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="2. Variables Cuantitativas (o Numéricas)" subheader="Miden una cantidad." />
        <CardContent>
          <Typography variant="h6">a) Discretas</Typography>
          <Typography variant="body1" paragraph>
            Son números enteros que provienen de un conteo. No puedes tener '2.5 hijos'.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Ejemplos en tu estudio:</strong> Número de ingresos hospitalarios previos, Número de hijos, Días de estancia hospitalaria.
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="h6">b) Continuas</Typography>
          <Typography variant="body1" paragraph>
            Pueden tomar cualquier valor dentro de un rango. Provienen de una medición.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Ejemplos en tu estudio:</strong> Nivel de Glucosa en sangre (mg/dL), Tensión Arterial (mmHg), Edad, Peso (kg), Altura (cm).
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
