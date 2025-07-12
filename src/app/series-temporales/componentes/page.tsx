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

export default function ComponentesSeriesTemporalesPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Series Temporales: Analizando Datos a lo Largo del Tiempo
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="El Caso Clínico: Brotes de Gripe y Admisiones Hospitalarias" />
        <CardContent>
          <Typography variant="body1" paragraph>
            Imagina que estás en el servicio de epidemiología y quieres predecir el número de casos de gripe para la próxima temporada, o el número de admisiones hospitalarias en urgencias cada día. Estos son ejemplos de **series temporales**: datos que se recogen y se analizan en puntos sucesivos en el tiempo.
          </Typography>
          <Typography variant="body1">
            El análisis de series temporales es crucial en salud pública para detectar brotes, planificar recursos, y entender patrones de enfermedades a lo largo del tiempo.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="Componentes de una Serie Temporal" />
        <CardContent>
          <Typography variant="body1" paragraph>
            Una serie temporal se puede descomponer en varios componentes que nos ayudan a entender su comportamiento:
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Tendencia:" 
                secondary="El movimiento general a largo plazo de la serie. ¿Está aumentando, disminuyendo o manteniéndose estable? Ejemplo: el aumento gradual de la esperanza de vida."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Estacionalidad:" 
                secondary="Patrones que se repiten en intervalos de tiempo fijos y conocidos (ej. diario, semanal, mensual, anual). Ejemplo: los picos de gripe en invierno, o el aumento de alergias en primavera."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Ciclos:" 
                secondary="Fluctuaciones que no tienen una periodicidad fija y que suelen durar más de un año. A menudo están relacionados con ciclos económicos o sociales. Ejemplo: ciclos de epidemias que no son estacionales."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Ruido (o Componente Irregular):" 
                secondary="La variación aleatoria que queda después de eliminar la tendencia, estacionalidad y ciclos. Es lo que no podemos explicar."
              />
            </ListItem>
          </List>
          <Alert severity="info" sx={{ mt: 2 }}>
            Visualizar estos componentes (ej. con boxplots mensuales para la estacionalidad o medias móviles para la tendencia) es el primer paso para entender y modelar una serie temporal.
          </Alert>
        </CardContent>
      </Card>
    </Box>
  );
}
