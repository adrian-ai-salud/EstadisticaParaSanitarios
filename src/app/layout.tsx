import * as React from 'react';
import Box from '@mui/material/Box';
import ThemeRegistry from './ThemeRegistry';
import Sidebar from '@/components/Sidebar';
import Toolbar from '@mui/material/Toolbar';

export const metadata = {
  title: 'BioEstadística para Sanitarios',
  description: 'Una aplicación para aprender bioestadística aplicada a la salud.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ThemeRegistry>
          <Box sx={{ display: 'flex' }}>
            <Sidebar />
            <Box
              component="main"
              sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
              <Toolbar />
              {children}
            </Box>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}