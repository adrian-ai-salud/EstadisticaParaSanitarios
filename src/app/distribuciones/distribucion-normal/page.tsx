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

export default function DistribucionNormalPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Distribución Normal: La Curva de Campana de la Salud
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="El Caso Clínico: La Altura de los Pacientes" />
        <CardContent>
          <Typography variant="body1" paragraph>
            Si mides la altura de miles de personas al azar, ¿qué patrón esperarías ver? La mayoría de la gente se agrupará alrededor de una altura promedio, y habrá menos personas muy bajas o muy altas. Este patrón es tan común en la naturaleza y en la salud que tiene un nombre: la **Distribución Normal**, o la famosa **Curva de Campana**.
          </Typography>
          <Typography variant="body1">
            Es fundamental porque muchas variables biológicas y clínicas (tensión arterial, glucosa en ayunas, peso, etc.) tienden a seguir esta distribución. Entenderla nos permite saber si un valor individual es 'normal' o 'inusual'.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="Características Clave" />
        <CardContent>
          <List>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Simétrica:" 
                secondary="La mitad de los datos están a un lado de la media y la otra mitad al otro. La media, mediana y moda coinciden en el centro."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Forma de Campana:" 
                secondary="Los valores más frecuentes están en el centro y la frecuencia disminuye a medida que nos alejamos de la media."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Definida por dos parámetros:" 
                secondary="La media (μ), que indica el centro de la distribución, y la desviación típica (σ), que mide la dispersión o 'anchura' de la campana."
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="La Puntuación Z: Estandarizando los Valores" />
        <CardContent>
          <Typography variant="body1" paragraph>
            Imagina que un paciente tiene una glucosa de 130 mg/dL. ¿Es esto alto? Depende de la media y la desviación típica de la población. La **puntuación Z** (o valor tipificado) nos permite comparar cualquier valor individual con la media de su grupo, expresándolo en 'cuántas desviaciones típicas' se aleja de la media.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Una puntuación Z de 0 significa que el valor es exactamente la media. Una Z de +1 significa que está una desviación típica por encima de la media, y -2 significa que está dos desviaciones típicas por debajo.
          </Typography>
          <Alert severity="info" sx={{ mt: 2 }}>
            La puntuación Z es la base para entender los percentiles y para realizar muchas pruebas estadísticas. Nos permite transformar cualquier distribución normal en una **Normal Estándar** (media 0, desviación típica 1), facilitando los cálculos de probabilidad.
          </Alert>
        </CardContent>
      </Card>
    </Box>
  );
}
