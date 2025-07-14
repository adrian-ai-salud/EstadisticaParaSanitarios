
'use client';

import * as React from 'react';
import NextLink from 'next/link';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { usePathname } from 'next/navigation';

const modules = [
  {
    title: '0. Portada',
    basePath: '/',
    subtopics: [],
  },
  {
    title: '1. Fundamentos de Bioestadística',
    basePath: '/fundamentos',
    subtopics: [
      { title: 'Definiciones Básicas', path: '/definiciones-basicas' },
      { title: 'Tipos de Variables', path: '/tipos-de-variables' },
      { title: 'Box Plot', path: '/box-plot' },
      { title: 'Introducción a la Probabilidad', path: '/introduccion-probabilidad' },
      { title: 'Tipos de Estudios Epidemiológicos', path: '/tipos-estudios-epidemiologicos' },
      { title: 'Sesgos en Investigación', path: '/sesgos-investigacion' },
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
    title: '5. Modelos Predictivos',
    basePath: '/modelos',
    subtopics: [
      { title: 'Modelos de Clasificación', path: '/modelos-de-clasificacion' },
      { title: 'Regresión Lineal Simple', path: '/regresion-lineal-simple' },
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
  {
    title: '8. Pruebas Diagnósticas',
    basePath: '/pruebas-diagnosticas',
    subtopics: [
      { title: 'Definiciones y Aplicaciones', path: '/definiciones-aplicaciones' },
    ],
  },
  {
    title: '9. Test de Conocimientos',
    basePath: '/test-conocimientos',
    subtopics: [],
  },
];

export default function Sidebar() {
  const [open, setOpen] = React.useState<{ [key: string]: boolean }>({ '1. Fundamentos': true });
  const pathname = usePathname();

  const handleClick = (title: string) => {
    setOpen((prevOpen) => ({ ...prevOpen, [title]: !prevOpen[title] }));
  };

  return (
    <aside className="w-[280px] flex-shrink-0 bg-gradient-to-b from-slate-900 to-slate-700 text-slate-100 h-screen flex flex-col">
      <div className="p-4 border-b border-slate-700">
        <h1 className="text-xl font-bold text-white">Bioestadística Para Sanitarios</h1>
      </div>
      <nav className="flex-grow overflow-y-auto p-2">
        <ul>
          {modules.map((module, index) => (
            <li key={module.title} className="mb-1">
              {module.basePath === '/' || module.subtopics.length === 0 ? (
                <NextLink href={module.basePath} passHref>
                  <div className={`block p-2 rounded-md transition-colors duration-200 ${pathname === module.basePath ? 'bg-slate-700 text-slate-100' : 'hover:bg-slate-700 text-slate-300'}`}>
                    <span className="font-semibold" style={{ color: `var(--module-color-${index + 1})` }}>{module.title}</span>
                  </div>
                </NextLink>
              ) : (
                <button 
                  onClick={() => handleClick(module.title)} 
                  className="w-full flex justify-between items-center p-2 rounded-md hover:bg-slate-700 transition-colors duration-200 text-left"
                >
                  <span className="font-semibold" style={{ color: `var(--module-color-${index + 1})` }}>{module.title}</span>
                  {open[module.title] ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}
                </button>
              )}
              {module.subtopics.length > 0 && open[module.title] && (
                <ul className="pl-4 mt-1">
                  {module.subtopics.map((subtopic) => {
                    const isActive = pathname === (module.basePath + subtopic.path);
                    return (
                      <li key={subtopic.title}>
                        <NextLink href={module.basePath + subtopic.path} passHref>
                          <div className={`block p-2 rounded-md transition-colors duration-200 ${isActive ? 'bg-slate-700 text-slate-100' : 'hover:bg-slate-700 text-slate-300'}`}>
                            {subtopic.title}
                          </div>
                        </NextLink>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 mt-auto border-t border-slate-700">
        <p className="text-xs text-center text-slate-400">
          Creado por{' '}
          <a href="https://www.linkedin.com/in/adri%C3%A1n-vences-garrido-513872324/" target="_blank" rel="noopener" className="underline hover:text-white">
            Adrián Vences Garrido
          </a>
        </p>
      </div>
    </aside>
  );
}
