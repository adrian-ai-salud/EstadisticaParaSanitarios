'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import MuiLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import NextLink from 'next/link';

const drawerWidth = 280;

const modules = [
  {
    title: '1. Fundamentos',
    basePath: '/fundamentos',
    subtopics: [
      { title: 'Introducción a la Probabilidad', path: '/introduccion-probabilidad' },
      { title: 'Tipos de Variables', path: '/tipos-de-variables' },
      { title: 'Análisis Bivariante', path: '/analisis-bivariante' },
      { title: 'Muestreo e Inferencia', path: '/muestreo-inferencia' },
    ],
  },
  {
    title: '2. Distribuciones de Probabilidad',
    basePath: '/distribuciones',
    subtopics: [
      { title: 'Distribución Normal', path: '/distribucion-normal' },
      { title: 'Distribuciones Discretas', path: '/distribuciones-discretas' },
    ],
  },
  {
    title: '3. Inferencia Estadística',
    basePath: '/inferencia',
    subtopics: [
      { title: 'Intervalos de Confianza', path: '/intervalos-de-confianza' },
      { title: 'Contraste de Hipótesis', path: '/contraste-de-hipotesis' },
    ],
  },
  {
    title: '4. Pruebas Estadísticas',
    basePath: '/pruebas',
    subtopics: [
      { title: 'Pruebas Paramétricas', path: '/pruebas-parametricas' },
      { title: 'Pruebas No Paramétricas', path: '/pruebas-no-parametricas' },
    ],
  },
  {
    title: '5. Modelos Avanzados',
    basePath: '/modelos',
    subtopics: [
      { title: 'Modelos de Clasificación', path: '/modelos-de-clasificacion' },
      { title: 'Regresión Lineal Múltiple', path: '/regresion-lineal-multiple' },
    ],
  },
  {
    title: '6. Análisis de Supervivencia',
    basePath: '/supervivencia',
    subtopics: [
      { title: 'Conceptos Clave', path: '/conceptos-clave' },
      { title: 'Curvas de Kaplan-Meier', path: '/curvas-de-kaplan-meier' },
      { title: 'Modelo de Cox', path: '/modelo-de-cox' },
    ],
  },
  {
    title: '7. Series Temporales',
    basePath: '/series-temporales',
    subtopics: [
      { title: 'Componentes', path: '/componentes' },
      { title: 'Modelos ARIMA', path: '/modelos-arima' },
    ],
  },
];

export default function Sidebar() {
  const [open, setOpen] = React.useState<{ [key: string]: boolean }>({ '1. Fundamentos': true });

  const handleClick = (title: string) => {
    setOpen((prevOpen) => ({ ...prevOpen, [title]: !prevOpen[title] }));
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflowY: 'auto', overflowX: 'hidden', flexGrow: 1 }}>
        <List component="nav">
          {modules.map((module) => (
            <React.Fragment key={module.title}>
              <ListItemButton onClick={() => handleClick(module.title)}>
                <ListItemText primary={module.title} />
                {open[module.title] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open[module.title]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {module.subtopics.map((subtopic) => (
                    <ListItemButton 
                      key={subtopic.title} 
                      component={NextLink}
                      href={module.basePath + subtopic.path}
                      sx={{ pl: 4 }}
                    >
                      <ListItemText primary={subtopic.title} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
        </List>
      </Box>
      <Box sx={{ p: 2, mt: 'auto' }}>
        <Typography variant="body2" color="text.secondary" align="center">
          Creado por{' '}
          <MuiLink href="https://www.linkedin.com/in/adri%C3%A1n-vences-garrido-513872324/" target="_blank" rel="noopener">
            Adrián Vences Garrido
          </MuiLink>
        </Typography>
      </Box>
    </Drawer>
  );
}