
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BioEstadística para Sanitarios',
  description: 'Una aplicación para aprender bioestadística aplicada a la salud.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-background text-text-main`}>
        <div className="flex">
          <Sidebar />
          <main className="flex-grow p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
