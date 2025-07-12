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

export default function ModelosDeClasificacionPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Modelos de Clasificación: Prediciendo Categorías en Salud
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="El Caso Clínico: Diagnóstico Temprano de Enfermedades" />
        <CardContent>
          <Typography variant="body1" paragraph>
            Imagina que tienes un conjunto de datos de pacientes con diversas características (edad, síntomas, resultados de laboratorio) y quieres predecir si un nuevo paciente tiene o no una enfermedad (ej. diabetes, cáncer). Aquí es donde los **modelos de clasificación** son tus aliados.
          </Typography>
          <Typography variant="body1">
            Estos modelos de Machine Learning aprenden de datos históricos para asignar una categoría o clase a nuevas observaciones. En salud, son cruciales para el diagnóstico, la estratificación del riesgo y la toma de decisiones clínicas.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="Conceptos Clave en Clasificación" />
        <CardContent>
          <List>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Machine Learning:" 
                secondary="Los modelos 'aprenden' patrones de los datos sin ser programados explícitamente. Se dividen los datos en conjuntos de entrenamiento (para que el modelo aprenda) y de test (para evaluar su rendimiento con datos nuevos)."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Overfitting:" 
                secondary="Cuando un modelo aprende demasiado bien los datos de entrenamiento, incluyendo el 'ruido', y luego no generaliza bien a datos nuevos. Es como 'memorizar' en lugar de 'entender'."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Matriz de Confusión:" 
                secondary="Una tabla que resume el rendimiento de un modelo de clasificación. Muestra los Verdaderos Positivos (TP), Falsos Positivos (FP), Verdaderos Negativos (TN) y Falsos Negativos (FN)."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Métricas de Evaluación:" 
                secondary="
                  <ul>
                    <li>**Precisión:** De todos los que el modelo dijo que eran positivos, ¿cuántos lo eran realmente? (TP / (TP + FP)).</li>
                    <li>**Recall (Sensibilidad):** De todos los que eran realmente positivos, ¿cuántos detectó el modelo? (TP / (TP + FN)).</li>
                    <li>**F1-Score:** Media armónica de precisión y recall. Útil cuando las clases están desbalanceadas.</li>
                    <li>**Índice Youden:** Mide la efectividad general de un clasificador, combinando sensibilidad y especificidad.</li>
                  </ul>
                "
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="Tipos de Modelos de Clasificación" />
        <CardContent>
          <Typography variant="h6">1. Regresión Logística</Typography>
          <Typography variant="body1" paragraph>
            A pesar de su nombre, es un modelo de clasificación. Predice la **probabilidad** de que un evento binario (Sí/No, Enfermo/Sano) ocurra. Es muy utilizado para identificar factores de riesgo y predecir la probabilidad de una enfermedad.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            <strong>Ejemplo:</strong> Predecir la probabilidad de desarrollar diabetes tipo 2 basándose en la edad, IMC, antecedentes familiares y nivel de glucosa.
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="h6">2. Análisis Discriminante Lineal (LDA)</Typography>
          <Typography variant="body1" paragraph>
            Busca una combinación lineal de características que mejor separe dos o más clases de datos. Es útil para reducir la dimensionalidad y clasificar.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            <strong>Ejemplo:</strong> Clasificar a pacientes en diferentes subtipos de una enfermedad basándose en biomarcadores.
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="h6">3. Random Forest</Typography>
          <Typography variant="body1" paragraph>
                                                Es un algoritmo de &apos;ensamble&apos; que combina múltiples árboles de decisión para mejorar la precisión y reducir el overfitting. Es muy robusto y funciona bien con muchos tipos de datos.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            <strong>Ejemplo:</strong> Predecir el riesgo de reingreso hospitalario basándose en un gran número de variables clínicas y demográficas.
          </Typography>
        </CardContent>
      </Card>

      <Alert severity="warning" sx={{ mt: 2 }}>
        La elección del modelo de clasificación depende de la naturaleza de tus datos y del problema que quieras resolver. Siempre es crucial evaluar el rendimiento del modelo con métricas adecuadas y no solo con la precisión.
      </Alert>
    </Box>
  );
}
