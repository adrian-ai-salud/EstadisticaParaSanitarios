
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
        'highlight': '#e6f0ff',
        'icon-blue': '#2563eb',
        'button-primary': '#0e7490',
        'sidebar-bg': '#1e293b',
        'sidebar-text': '#f1f5f9',
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
