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

export default function PruebasNoParametricasPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Pruebas No Paramétricas: Cuando tus Datos Rompen la Norma
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="El Caso Clínico: Datos Atípicos o Escalas Ordinales" />
        <CardContent>
          <Typography variant="body1" paragraph>
            Imagina que estás estudiando el efecto de un nuevo analgésico en el dolor, medido en una escala de 1 a 10. O quizás, tienes datos de un estudio piloto con muy pocos pacientes, y la distribución de tus variables no es normal. En estos casos, las pruebas paramétricas que acabamos de ver (Test t, ANOVA) no son adecuadas porque sus supuestos no se cumplen.
          </Typography>
          <Typography variant="body1">
            Las **pruebas no paramétricas** son la alternativa. Son más 'flexibles' porque no requieren que los datos sigan una distribución específica (como la normal) y son robustas frente a valores atípicos. A menudo, trabajan con rangos o medianas en lugar de medias.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="¿Cuándo Usar Pruebas No Paramétricas?" />
        <CardContent>
          <List>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Datos no normales:" 
                secondary="Cuando la variable dependiente no sigue una distribución normal y el tamaño de la muestra es pequeño (con muestras grandes, las pruebas paramétricas son más robustas incluso con desviaciones de la normalidad)."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Variables ordinales:" 
                secondary="Cuando la variable dependiente es de tipo ordinal (ej. nivel de satisfacción, grado de mejoría)."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Valores atípicos extremos:" 
                secondary="Cuando hay valores extremos que distorsionan la media y la desviación típica."
              />
            </ListItem>
          </List>
          <Alert severity="info" sx={{ mt: 2 }}>
            Aunque son más flexibles, las pruebas no paramétricas suelen tener menos &apos;potencia&apos; que sus equivalentes paramétricas. Esto significa que necesitan una diferencia mayor para detectarla como estadísticamente significativa.
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Pruebas No Paramétricas Comunes" />
        <CardContent>
          <Typography variant="h6">1. Prueba U de Mann-Whitney</Typography>
          <Typography variant="body1" paragraph>
            Es la alternativa no paramétrica al **Test t de Student para muestras independientes**. Se usa para comparar dos grupos independientes cuando la variable dependiente es ordinal o cuantitativa no normal. Compara las medianas o las distribuciones de los rangos.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            <strong>Ejemplo:</strong> Comparar el nivel de dolor (escala 1-10) entre pacientes que recibieron un placebo y los que recibieron un nuevo analgésico.
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="h6">2. Prueba de Wilcoxon (para muestras pareadas)</Typography>
          <Typography variant="body1" paragraph>
            Es la alternativa no paramétrica al **Test t de Student para muestras pareadas**. Se usa cuando tienes dos mediciones del mismo sujeto (antes/después) y los datos no cumplen los supuestos de normalidad. Compara las medianas de las diferencias.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            <strong>Ejemplo:</strong> Evaluar la mejoría en la movilidad (escala ordinal) de pacientes antes y después de una fisioterapia.
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="h6">3. Coeficiente de Correlación de Spearman</Typography>
          <Typography variant="body1" paragraph>
            Es la alternativa no paramétrica al **Coeficiente de Correlación de Pearson**. Se usa para medir la fuerza y dirección de la relación entre dos variables ordinales o cuantitativas no normales. Se basa en los rangos de los datos, no en los valores brutos.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            <strong>Ejemplo:</strong> Relacionar el nivel de estrés percibido (escala ordinal) con el número de horas de sueño (cuantitativa no normal).
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
