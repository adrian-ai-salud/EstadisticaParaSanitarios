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

export default function PruebasParametricasPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Pruebas Paramétricas: Cuando tus Datos Siguen la Norma
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="El Caso Clínico: Comparando Tratamientos" />
        <CardContent>
          <Typography variant="body1" paragraph>
            Tienes dos grupos de pacientes con hipertensión. A un grupo le das el tratamiento A y al otro el tratamiento B. Quieres saber si hay una diferencia significativa en la reducción de la tensión arterial entre ambos grupos. O quizás, tienes tres dietas diferentes y quieres ver cuál es la más efectiva para perder peso.
          </Typography>
          <Typography variant="body1">
            Las **pruebas paramétricas** son herramientas estadísticas muy potentes para comparar medias o relaciones, pero requieren que tus datos cumplan ciertas condiciones (supuestos). Si tus datos se ajustan a estos supuestos, estas pruebas son las más robustas.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="1. Test t de Student: Comparando Dos Medias" />
        <CardContent>
          <Typography variant="body1" paragraph>
            Es la prueba más común para comparar las medias de dos grupos. Por ejemplo, ¿es la tensión arterial media diferente entre hombres y mujeres? ¿Hay diferencia en la glucosa media antes y después de un tratamiento?
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>Tipos de Test t:</Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Para Muestras Independientes:" 
                secondary="Cuando los grupos no están relacionados (ej. hombres vs. mujeres, tratamiento A vs. tratamiento B)."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Para Muestras Pareadas:" 
                secondary="Cuando los mismos sujetos son medidos dos veces (ej. antes y después de un tratamiento, o en un diseño cruzado)."
              />
            </ListItem>
          </List>
          <Typography variant="h6" sx={{ mt: 2 }}>Supuestos del Test t:</Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Normalidad:" 
                secondary="La variable dependiente (la que mides) debe seguir una distribución normal en cada grupo. Se puede verificar con pruebas como Shapiro-Wilk o Kolmogorov-Smirnov, o visualmente con histogramas y gráficos Q-Q."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Homocedasticidad (solo para muestras independientes):" 
                secondary="Las varianzas de los grupos deben ser aproximadamente iguales. Se verifica con la prueba de Levene."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Independencia de Observaciones:" 
                secondary="Las observaciones dentro de cada grupo y entre grupos deben ser independientes (excepto en el test t pareado)."
              />
            </ListItem>
          </List>
          <Alert severity="info" sx={{ mt: 2 }}>
            Si no se cumplen los supuestos de normalidad o homocedasticidad, existen alternativas no paramétricas (como la U de Mann-Whitney) que veremos más adelante.
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="2. Análisis de Varianza (ANOVA): Comparando Tres o Más Medias" />
        <CardContent>
          <Typography variant="body1" paragraph>
            Cuando quieres comparar las medias de tres o más grupos (ej. tres dietas diferentes, cuatro tipos de ejercicio), el Test t ya no es adecuado. Necesitas el **ANOVA** (ANálisis de VArianza).
          </Typography>
          <Typography variant="body1" paragraph>
            ANOVA nos dice si hay alguna diferencia significativa entre las medias de los grupos, pero no nos dice *entre qué grupos específicos* está esa diferencia. Para eso, necesitamos las pruebas post-hoc.
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>Tipos de ANOVA:</Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="ANOVA de un factor (One-Way ANOVA):" 
                secondary="Compara las medias de tres o más grupos formados por una única variable categórica (ej. efecto de 3 dosis de un fármaco)."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="ANOVA de dos factores (Two-Way ANOVA):" 
                secondary="Examina el efecto de dos variables categóricas y su interacción sobre una variable continua (ej. efecto de un fármaco y el sexo del paciente)."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="ANOVA para Datos Pareados (ANOVA de Medidas Repetidas):" 
                secondary="Cuando los mismos sujetos son medidos en tres o más condiciones o momentos (ej. tensión arterial en el mes 1, mes 3 y mes 6 de tratamiento)."
              />
            </ListItem>
          </List>
          <Typography variant="h6" sx={{ mt: 2 }}>Supuestos del ANOVA:</Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Normalidad:" 
                secondary="La variable dependiente debe seguir una distribución normal en cada grupo."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Homocedasticidad:" 
                secondary="Las varianzas de los grupos deben ser iguales (prueba de Levene)."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Independencia de Observaciones:" 
                secondary="Las observaciones deben ser independientes (excepto en ANOVA de medidas repetidas)."
              />
            </ListItem>
          </List>
          <Typography variant="h6" sx={{ mt: 2 }}>Pruebas Post-Hoc:</Typography>
          <Typography variant="body1" paragraph>
            Si el ANOVA te dice que hay diferencias, las pruebas post-hoc (como Tukey HSD o Bonferroni) te dirán *dónde* están esas diferencias (ej. la dieta A es mejor que la B, pero no diferente de la C).
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>Tamaño del Efecto (Eta-cuadrado η²):</Typography>
          <Typography variant="body1" paragraph>
            Además del p-valor, es crucial saber la magnitud de la diferencia. Eta-cuadrado nos dice qué proporción de la variabilidad de la variable dependiente es explicada por la variable independiente. Un p-valor significativo con un efecto pequeño puede no ser clínicamente relevante.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
