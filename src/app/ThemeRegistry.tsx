'use client';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00796b', // Un tono teal/verde azulado
    },
    secondary: {
      main: '#f9a825', // Un tono ámbar/naranja para acentos
    },
    background: {
      default: '#f5f5f5', // Un gris muy claro para el fondo
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
