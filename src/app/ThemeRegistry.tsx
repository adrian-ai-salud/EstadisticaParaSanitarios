'use client';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976D2', // Azul profundo y confiable
    },
    secondary: {
      main: '#4CAF50', // Verde fresco y vital para acentos
    },
    background: {
      default: '#F8F9FA', // Blanco roto muy sutil
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