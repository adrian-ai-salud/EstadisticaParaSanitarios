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

export default function RegresionLinealMultiplePage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Regresión Lineal Múltiple: Prediciendo Valores Continuos
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="El Caso Clínico: Prediciendo el Peso al Nacer" />
        <CardContent>
          <Typography variant="body1" paragraph>
            Imagina que quieres predecir el peso al nacer de un bebé. Sabes que no solo depende de la duración del embarazo, sino también de la edad de la madre, si fuma o no, su nutrición, etc. La **Regresión Lineal Múltiple** te permite usar varias de estas variables (independientes) para predecir una variable continua (el peso al nacer, la variable dependiente).
          </Typography>
          <Typography variant="body1">
            Es una extensión de la regresión lineal simple, pero mucho más potente, ya que considera la influencia combinada de múltiples factores.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="El Modelo: La Ecuación de Predicción" />
        <CardContent>
          <Typography variant="body1" paragraph>
            El corazón de la regresión lineal múltiple es una ecuación que se parece a:
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', mb: 2 }}>
            Y = β₀ + β₁X₁ + β₂X₂ + ... + βₚXₚ + ε
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Y:" 
                secondary="La variable dependiente que queremos predecir (ej. peso al nacer)."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="β₀:" 
                secondary="El intercepto, el valor de Y cuando todas las X son cero."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="β₁...βₚ:" 
                secondary="Los coeficientes de regresión. Indican cuánto cambia Y por cada unidad de cambio en la X correspondiente, manteniendo las otras X constantes."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="X₁...Xₚ:" 
                secondary="Las variables independientes o predictoras (ej. edad de la madre, duración del embarazo)."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="ε:" 
                secondary="El término de error, la parte de Y que el modelo no puede explicar."
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="Supuestos Clave: Para que el Modelo Sea Fiable" />
        <CardContent>
          <Typography variant="body1" paragraph>
            Para que los resultados de tu regresión lineal múltiple sean válidos y fiables, se deben cumplir varios supuestos:
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Linealidad:" 
                secondary="La relación entre las variables independientes y la dependiente debe ser lineal."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Independencia de los Errores:" 
                secondary="Los residuos (errores) deben ser independientes entre sí (no deben estar correlacionados). Se puede verificar con la prueba de Durbin-Watson."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Homocedasticidad:" 
                secondary="La varianza de los residuos debe ser constante en todos los niveles de las variables independientes."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Normalidad de los Residuos:" 
                secondary="Los residuos deben seguir una distribución normal. Se puede verificar con histogramas de residuos o pruebas como Jarque-Bera."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Ausencia de Multicolinealidad:" 
                secondary="Las variables independientes no deben estar altamente correlacionadas entre sí. Se verifica con el Factor de Inflación de la Varianza (VIF)."
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Bondad de Ajuste: ¿Qué tan Bien Predice el Modelo?" />
        <CardContent>
          <Typography variant="h6">R² (R-cuadrado)</Typography>
          <Typography variant="body1" paragraph>
            Indica la proporción de la variabilidad de la variable dependiente que es explicada por el modelo. Un R² de 0.70 significa que el 70% de la variación en el peso al nacer es explicada por las variables que incluiste en tu modelo.
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>R² Ajustado</Typography>
          <Typography variant="body1" paragraph>
            Es una versión modificada del R² que penaliza la inclusión de variables independientes que no aportan mucho al modelo. Es más útil para comparar modelos con diferente número de predictores.
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>RMSE (Root Mean Squared Error)</Typography>
          <Typography variant="body1" paragraph>
            Mide la magnitud promedio de los errores del modelo. Un RMSE bajo indica que el modelo predice con mayor precisión.
          </Typography>
          <Alert severity="warning" sx={{ mt: 2 }}>
            Un modelo con un R² alto no siempre es el mejor. Es crucial que los supuestos se cumplan y que el modelo sea interpretable y clínicamente relevante.
          </Alert>
        </CardContent>
      </Card>
    </Box>
  );
}
