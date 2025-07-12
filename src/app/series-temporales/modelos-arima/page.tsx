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

export default function ModelosArimaPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Modelos ARIMA: Prediciendo el Futuro con Series Temporales
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="El Caso Clínico: Predicción de la Demanda Hospitalaria" />
        <CardContent>
          <Typography variant="body1" paragraph>
            Como gestor hospitalario, necesitas predecir cuántas camas se necesitarán la próxima semana, o cuántos profesionales de enfermería harán falta en urgencias el próximo mes. Los **modelos ARIMA** son una de las herramientas más potentes y clásicas para hacer predicciones fiables con series temporales.
          </Typography>
          <Typography variant="body1">
            ARIMA significa AutoRegressive Integrated Moving Average. Es una combinación de modelos que nos permite capturar la tendencia, la estacionalidad y la dependencia de los valores pasados en una serie temporal.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="Estacionariedad: La Clave para Modelar" />
        <CardContent>
          <Typography variant="body1" paragraph>
            Para que muchos modelos de series temporales funcionen bien, la serie debe ser **estacionaria**. Esto significa que sus propiedades estadísticas (media, varianza, autocorrelación) no cambian con el tiempo.
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="¿Por qué es importante?" 
                secondary="Si una serie no es estacionaria, las predicciones basadas en el pasado pueden no ser válidas para el futuro. Es como intentar predecir el clima de mañana basándote en el clima de hace 100 años si el clima global está cambiando."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Test de Dickey-Fuller:" 
                secondary="Una prueba estadística para determinar si una serie temporal es estacionaria o si tiene una 'raíz unitaria' (no estacionaria)."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Diferenciación:" 
                secondary="Si una serie no es estacionaria, a menudo podemos hacerla estacionaria calculando las diferencias entre observaciones consecutivas. Esto elimina la tendencia y la estacionalidad."
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Componentes de un Modelo ARIMA (p, d, q)" />
        <CardContent>
          <Typography variant="body1" paragraph>
            Los parámetros (p, d, q) de un modelo ARIMA se refieren a:
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="p (AutoRegresivo):" 
                secondary="El número de observaciones pasadas que se utilizan para predecir el valor actual. Cuántos &apos;retrasos&apos; de la propia serie se incluyen."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="d (Integrado):" 
                secondary="El número de veces que se ha diferenciado la serie para hacerla estacionaria. Si d=0, la serie ya era estacionaria."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="q (Media Móvil):" 
                secondary="El número de errores de predicción pasados que se utilizan para predecir el valor actual."
              />
            </ListItem>
          </List>
          <Alert severity="warning" sx={{ mt: 2 }}>
            Identificar los parámetros (p, d, q) correctos para un modelo ARIMA es un proceso que a menudo implica el análisis de gráficos de autocorrelación y autocorrelación parcial, y la comparación de diferentes modelos.
          </Alert>
        </CardContent>
      </Card>
    </Box>
  );
}
