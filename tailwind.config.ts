
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#f7f9fc',
        'text-main': '#1a1a1a',
        'title-dark': '#003366',
        'highlight': '#F5F5F5',
        'icon-blue': '#2563eb',
        'button-primary': '#0e7490',
        // Nuevos colores para la barra lateral y subcategorías
        'slate-900': '#0F172A',
        'slate-700': '#334155',
        'slate-300': '#CBD5E1',
        'slate-200': '#E2E8F0',
        'slate-100': '#F1F5F9',
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(0, 0, 0, 0.05)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
