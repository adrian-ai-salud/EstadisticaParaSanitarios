'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function IntroProbabilidadPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Introducción a la Probabilidad: La Lógica de la Incertidumbre
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="El Caso Clínico: Pruebas Diagnósticas" />
        <CardContent>
          <Typography variant="body1" paragraph>
            Imagina que un paciente llega con ciertos síntomas y sospechas que podría tener una enfermedad específica. Le realizas una prueba diagnóstica. El resultado puede ser positivo o negativo. La **probabilidad** nos ayuda a cuantificar la incertidumbre de este resultado y a tomar mejores decisiones clínicas.
          </Typography>
          <Typography variant="body1">
            La estadística se basa en la probabilidad. Es la herramienta que nos permite pasar de la especulación a la estimación científica. ¡Vamos a ver los conceptos básicos!
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="Conceptos Fundamentales" />
        <CardContent>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Experimento Aleatorio"
                secondary="Cualquier proceso cuyo resultado no se puede predecir con certeza. Ejemplo: el resultado de una prueba de glucosa en un paciente al azar."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Espacio Muestral (Ω)"
                secondary="El conjunto de TODOS los resultados posibles de un experimento. Ejemplo: para un test de embarazo, el espacio muestral es {Positivo, Negativo}."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Suceso"
                secondary="Cualquier subconjunto del espacio muestral. Puede ser elemental (un solo resultado) o compuesto (varios resultados). Ejemplo: que un paciente sea del grupo sanguíneo 'A' es un suceso."
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="El Teorema de Bayes: El Poder de Actualizar Creencias" />
        <CardContent>
          <Typography variant="body1" paragraph>
            Este es uno de los teoremas más importantes en medicina. Nos permite actualizar la probabilidad de que un paciente tenga una enfermedad una vez que conocemos el resultado de una prueba.
          </Typography>
          <Typography variant="body1" paragraph>
            En esencia, responde a la pregunta: **Si el test ha dado positivo, ¿cuál es la probabilidad real de que mi paciente esté enfermo?**
          </Typography>
          <Typography variant="body2" color="text.secondary">
            No es tan simple como parece, porque los tests no son perfectos (pueden dar falsos positivos). El Teorema de Bayes combina la información previa (la prevalencia de la enfermedad) con el resultado del test para darnos una probabilidad mucho más precisa. Lo exploraremos a fondo en la sección de pruebas diagnósticas.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
