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

export default function ConceptosClaveSupervivenciaPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Análisis de Supervivencia: El Tiempo es Clave
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="El Caso Clínico: ¿Cuánto Tiempo Vive un Paciente?" />
        <CardContent>
          <Typography variant="body1" paragraph>
            En oncología, no solo nos interesa si un tratamiento funciona, sino **cuánto tiempo** vive el paciente sin que la enfermedad progrese, o cuánto tiempo pasa hasta que ocurre un evento (ej. la muerte, la recaída, la aparición de una complicación). Aquí es donde el **Análisis de Supervivencia** se vuelve indispensable.
          </Typography>
          <Typography variant="body1">
            Esta rama de la estadística se especializa en analizar el tiempo transcurrido hasta que ocurre un evento de interés. No solo se aplica a la muerte, sino a cualquier evento que pueda ocurrir en el tiempo (ej. tiempo hasta el alta hospitalaria, tiempo hasta la aparición de una infección).
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="Conceptos Fundamentales" />
        <CardContent>
          <List>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Tiempo hasta el Evento:" 
                secondary="Es la variable principal. El tiempo transcurrido desde un punto de inicio (ej. diagnóstico, inicio del tratamiento) hasta que ocurre el evento de interés (ej. muerte, recaída, curación)."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Evento:" 
                secondary="El resultado de interés que marca el final del seguimiento para ese individuo (ej. muerte, recaída, alta)."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Censura:" 
                secondary="Es la característica más distintiva del análisis de supervivencia. Ocurre cuando no tenemos información completa sobre el tiempo hasta el evento para todos los individuos. Esto puede pasar por varias razones:"
              />
            </ListItem>
          </List>
          <Typography variant="body2" color="text.secondary" component="div" sx={{ ml: 4 }}>
            <ul>
              <li>**Censura por la derecha:** El paciente sigue vivo al final del estudio, se pierde en el seguimiento, o el evento no ha ocurrido al final del periodo de observación. Sabemos que el evento ocurrirá *después* de un cierto tiempo, pero no cuándo.</li>
              <li>**Censura por la izquierda:** Sabemos que el evento ocurrió antes de un cierto tiempo, pero no el momento exacto.</li>
              <li>**Censura por intervalo:** Sabemos que el evento ocurrió entre dos puntos de tiempo.</li>
            </ul>
          </Typography>
          <Alert severity="info" sx={{ mt: 2 }}>
                        Manejar la censura correctamente es crucial. Si simplemente ignoramos los pacientes censurados, subestimaríamos el tiempo de supervivencia.
          </Alert>
        </CardContent>
      </Card>
    </Box>
  );
}
