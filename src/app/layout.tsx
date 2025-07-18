
'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <html lang="es">
      <body className={`${inter.className} bg-background text-text-main`}>
        <div className="flex h-screen">
          {/* Botón de hamburguesa para móviles */}
          <button
            className="md:hidden fixed top-4 left-4 z-50 p-2 bg-slate-800 text-white rounded-md shadow-lg"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            {showSidebar ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>

          {/* Sidebar */}
          <Sidebar showSidebar={showSidebar} onClose={() => setShowSidebar(false)} />

          {/* Contenido principal */}
          <main className={`flex-grow p-8 overflow-y-auto ${showSidebar ? 'hidden md:block' : 'block'}`}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
