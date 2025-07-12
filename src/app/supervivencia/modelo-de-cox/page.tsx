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

export default function ModeloDeCoxPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Modelo de Riesgos Proporcionales de Cox: Más Allá de la Curva
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="El Caso Clínico: Factores de Riesgo en la Supervivencia" />
        <CardContent>
          <Typography variant="body1" paragraph>
            Sabes que un nuevo tratamiento mejora la supervivencia, pero ¿qué pasa si los pacientes que reciben ese tratamiento son más jóvenes o tienen menos comorbilidades? ¿Cómo puedes aislar el efecto real del tratamiento, controlando por otros factores que también influyen en la supervivencia?
          </Typography>
          <Typography variant="body1">
            El **Modelo de Riesgos Proporcionales de Cox** es la herramienta más utilizada para analizar la relación entre la supervivencia y múltiples variables (covariables) al mismo tiempo. Es como una regresión, pero diseñada específicamente para datos de supervivencia.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="¿Cómo Funciona el Modelo de Cox?" />
        <CardContent>
          <Typography variant="body1" paragraph>
            A diferencia de las curvas de Kaplan-Meier que solo comparan grupos, el modelo de Cox nos permite evaluar el efecto de múltiples variables (edad, sexo, estadio de la enfermedad, tipo de tratamiento) sobre el riesgo de que ocurra el evento, controlando por las demás.
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Riesgo (Hazard):" 
                secondary="Es la probabilidad instantánea de que ocurra el evento en un momento dado, dado que no ha ocurrido antes. El modelo de Cox modela el logaritmo de este riesgo."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Riesgos Proporcionales:" 
                secondary="El supuesto clave del modelo es que el efecto de las covariables sobre el riesgo es constante a lo largo del tiempo. Es decir, si un factor duplica el riesgo al inicio, lo duplica en cualquier momento posterior."
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Hazard Ratio (HR): La Medida Clave" />
        <CardContent>
          <Typography variant="body1" paragraph>
            El resultado principal del modelo de Cox es el **Hazard Ratio (HR)**. Es una medida de la razón de riesgos entre dos grupos o por cada unidad de aumento en una variable continua, controlando por otras variables.
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="HR = 1:" 
                secondary="No hay diferencia en el riesgo entre los grupos o por el cambio en la variable."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="HR > 1:" 
                secondary="Mayor riesgo de que ocurra el evento en el grupo expuesto o por cada unidad de aumento en la variable (ej. HR de 1.5 significa un 50% más de riesgo)."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="HR < 1:" 
                secondary="Menor riesgo de que ocurra el evento (efecto protector)."
              />
            </ListItem>
          </List>
          <Alert severity="info" sx={{ mt: 2 }}>
            El HR es una medida relativa. Siempre debe interpretarse junto con su intervalo de confianza. Si el IC del HR incluye el 1, el efecto no es estadísticamente significativo.
          </Alert>
        </CardContent>
      </Card>
    </Box>
  );
}
