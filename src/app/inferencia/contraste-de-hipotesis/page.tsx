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

export default function ContrasteDeHipotesisPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Contraste de Hipótesis: ¿Hay Evidencia Suficiente?
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="El Caso Clínico: ¿Funciona el Nuevo Fármaco?" />
        <CardContent>
          <Typography variant="body1" paragraph>
            Un laboratorio desarrolla un nuevo fármaco para reducir el colesterol. Afirman que es más eficaz que el actual. Como médico, ¿cómo puedes saber si esta afirmación es cierta o si la diferencia que observas en un estudio es solo por casualidad? Aquí es donde entra el **Contraste de Hipótesis**.
          </Typography>
          <Typography variant="body1">
            Es un procedimiento formal para decidir si la evidencia de nuestros datos es lo suficientemente fuerte como para rechazar una afirmación inicial (la hipótesis nula) sobre una población.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3}>
        <CardHeader title="Hipótesis Nula (H₀) y Alternativa (H₁)" />
        <CardContent>
          <Typography variant="body1" paragraph>
            Todo contraste de hipótesis comienza con dos afirmaciones opuestas:
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Hipótesis Nula (H₀):" 
                secondary="Es la afirmación de 'no efecto', 'no diferencia' o 'no relación'. Es lo que asumimos que es cierto hasta que la evidencia demuestre lo contrario. Ejemplo: 'El nuevo fármaco no reduce el colesterol más que el actual'."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Hipótesis Alternativa (H₁):" 
                secondary="Es lo que queremos demostrar. Es la afirmación de 'sí efecto', 'sí diferencia' o 'sí relación'. Ejemplo: 'El nuevo fármaco sí reduce el colesterol más que el actual'."
              />
            </ListItem>
          </List>
          <Alert severity="info" sx={{ mt: 2 }}>
            Siempre intentamos **rechazar la H₀**. Si no tenemos suficiente evidencia para rechazarla, no significa que sea cierta, solo que no pudimos demostrar lo contrario.
          </Alert>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="El Valor P (p-value): La Probabilidad de la Casualidad" />
        <CardContent>
          <Typography variant="body1" paragraph>
            El p-valor es la probabilidad de obtener los resultados que hemos observado (o resultados más extremos) si la hipótesis nula fuera realmente cierta. Es decir, ¿cuán probable es que lo que vemos sea solo fruto del azar?
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            <ul>
              <li>Si p-valor &lt; 0.05 (o el nivel de significancia α que fijemos): Consideramos que los resultados son **estadísticamente significativos**. Rechazamos la H₀.</li>
              <li>Si p-valor ≥ 0.05: No hay evidencia suficiente para rechazar la H₀.</li>
            </ul>
          </Typography>
          <Alert severity="warning" sx={{ mt: 2 }}>
            Un p-valor bajo no significa que el efecto sea grande o clínicamente relevante, solo que es poco probable que sea por azar. ¡Siempre interpreta el p-valor junto con el tamaño del efecto y el intervalo de confianza!
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Tipos de Errores: El Riesgo de Equivocarse" />
        <CardContent>
          <Typography variant="body1" paragraph>
            Al tomar una decisión basada en el p-valor, siempre existe la posibilidad de cometer un error:
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Error Tipo I (α o Falso Positivo):" 
                secondary="Rechazar la H₀ cuando en realidad es verdadera. Decir que hay un efecto cuando no lo hay. Ejemplo: Diagnosticar una enfermedad cuando el paciente está sano. El nivel de significancia (α) es la probabilidad de cometer este error."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Error Tipo II (β o Falso Negativo):" 
                secondary="No rechazar la H₀ cuando en realidad es falsa. Decir que no hay efecto cuando sí lo hay. Ejemplo: No diagnosticar una enfermedad cuando el paciente sí la tiene. La potencia estadística (1-β) es la probabilidad de NO cometer este error (de detectar un efecto cuando existe)."
              />
            </ListItem>
          </List>
          <Alert severity="error" sx={{ mt: 2 }}>
            En medicina, el balance entre estos errores es crítico. A menudo, preferimos minimizar los Falsos Negativos (Error Tipo II) en enfermedades graves, aunque eso implique un ligero aumento de Falsos Positivos (Error Tipo I).
          </Alert>
        </CardContent>
      </Card>
    </Box>
  );
}
