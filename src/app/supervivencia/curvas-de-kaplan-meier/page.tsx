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

export default function CurvasKaplanMeierPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Curvas de Kaplan-Meier: Visualizando la Supervivencia
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="El Caso Clínico: Supervivencia de Pacientes con Cáncer" />
        <CardContent>
          <Typography variant="body1" paragraph>
            Estás siguiendo a un grupo de pacientes con un tipo específico de cáncer para ver cuánto tiempo viven después del diagnóstico. Algunos pacientes fallecen, otros siguen vivos al final del estudio, y algunos se pierden en el seguimiento. ¿Cómo representas todo esto de forma clara?
          </Typography>
          <Typography variant="body1">
            Las **Curvas de Kaplan-Meier** son la herramienta estándar para estimar y visualizar la probabilidad de supervivencia a lo largo del tiempo, teniendo en cuenta la información de los pacientes censurados.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="¿Cómo se Construye una Curva de Kaplan-Meier?" />
        <CardContent>
          <Typography variant="body1" paragraph>
            La curva de Kaplan-Meier es una función escalonada que disminuye cada vez que ocurre un evento. La probabilidad de supervivencia se calcula multiplicando las probabilidades de supervivencia en cada punto de tiempo donde ocurre un evento.
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Eje X (Tiempo):" 
                secondary="Representa el tiempo desde el inicio del seguimiento (ej. meses desde el diagnóstico)."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Eje Y (Probabilidad de Supervivencia):" 
                secondary="Va de 1.0 (100% de supervivencia al inicio) a 0.0. Cada 'escalón' hacia abajo indica que ha ocurrido un evento."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Marcas de Censura:" 
                secondary="Los pacientes censurados se indican con una marca (ej. una cruz o un círculo) en la curva, mostrando que su seguimiento terminó sin que ocurriera el evento."
              />
            </ListItem>
          </List>
          <Alert severity="info" sx={{ mt: 2 }}>
            La curva de Kaplan-Meier es una estimación no paramétrica, lo que significa que no asume una distribución específica para el tiempo de supervivencia.
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Comparando Curvas: El Test de Log-Rank" />
        <CardContent>
          <Typography variant="body1" paragraph>
            A menudo, queremos comparar las curvas de supervivencia entre dos o más grupos (ej. pacientes que recibieron un tratamiento A vs. un tratamiento B). El **Test de Log-Rank** es la prueba estadística más común para determinar si hay diferencias significativas en las curvas de supervivencia entre los grupos.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Un p-valor bajo en el test de Log-Rank sugiere que las curvas de supervivencia son significativamente diferentes, lo que implica que la probabilidad de supervivencia es distinta entre los grupos.
          </Typography>
          <Alert severity="warning" sx={{ mt: 2 }}>
            El test de Log-Rank es sensible a las diferencias en la parte final de las curvas. Si las diferencias ocurren al principio, otras pruebas pueden ser más adecuadas. Además, no nos dice la magnitud del efecto, solo si hay una diferencia.
          </Alert>
        </CardContent>
      </Card>
    </Box>
  );
}
