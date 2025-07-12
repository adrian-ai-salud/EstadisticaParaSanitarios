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

export default function IntervalosDeConfianzaPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Intervalos de Confianza: ¿Dónde está el Valor Real?
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="El Caso Clínico: La Tensión Arterial Media" />
        <CardContent>
          <Typography variant="body1" paragraph>
            Imagina que quieres saber la tensión arterial sistólica media de todos los adultos en tu ciudad. No puedes medir a todos, así que tomas una muestra de 100 personas y calculas su media. Obtienes, por ejemplo, 125 mmHg.
          </Typography>
          <Typography variant="body1">
            ¿Es 125 mmHg la tensión arterial media EXACTA de toda la ciudad? Probablemente no. Tu muestra es solo una parte. Aquí es donde entra el **Intervalo de Confianza (IC)**. Nos da un rango de valores donde, con una alta probabilidad, se encuentra el verdadero valor de la población.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardHeader title="¿Qué es un Intervalo de Confianza?" />
        <CardContent>
          <Typography variant="body1" paragraph>
            Es un rango de valores (un límite inferior y un límite superior) dentro del cual esperamos que se encuentre el verdadero parámetro poblacional (la media, la proporción, la diferencia entre dos grupos, etc.) con un cierto nivel de confianza.
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Nivel de Confianza:" 
                secondary="Normalmente 95% o 99%. Significa que si repitiéramos el estudio muchas veces, el 95% (o 99%) de los intervalos que construyamos contendrían el verdadero valor poblacional."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScienceIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Precisión:" 
                secondary="Cuanto más estrecho sea el intervalo, más preciso es nuestro estimado. Un intervalo muy amplio nos da poca información útil."
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Interpretación en la Práctica Clínica" />
        <CardContent>
          <Typography variant="body1" paragraph>
            Si un estudio reporta que un nuevo fármaco reduce la tensión arterial en 10 mmHg (IC 95%: 8-12 mmHg), significa que estamos 95% seguros de que la verdadera reducción en la población está entre 8 y 12 mmHg. Esto es mucho más informativo que solo decir '10 mmHg'.
          </Typography>
          <Alert severity="info" sx={{ mt: 2 }}>
            Los Intervalos de Confianza son más informativos que solo el p-valor, ya que nos dan una idea de la magnitud del efecto y su precisión. Si un IC para una diferencia incluye el cero, significa que no hay una diferencia estadísticamente significativa.
          </Alert>
        </CardContent>
      </Card>
    </Box>
  );
}
