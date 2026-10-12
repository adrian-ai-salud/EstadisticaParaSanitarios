# Changelog

Todos los cambios relevantes de este proyecto se documentan aquí.
El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y el proyecto usa [versionado semántico](https://semver.org/lang/es/).

## [1.0.1] - 2026-10-12

### Corregido

- Cada página se exporta como carpeta con su `index.html`, para que las direcciones sin `.html` funcionen en cualquier servidor estático, incluido el de adrianvencesgarrido.com.
- Se incluye un `.htaccess` que muestra la página 404 propia en servidores Apache.
- Las citas usan el DOI de Zenodo que agrupa todas las versiones (10.5281/zenodo.15874324).

## [1.0.0] - 2026-10-12

Primera versión estable. Rediseño completo de la interfaz y de los simuladores.

### Añadido

- Buscador de temas (Ctrl K o /), modo oscuro y navegación entre temas anterior y siguiente.
- Seguimiento del progreso por tema, guardado solo en el navegador.
- Índice lateral «En esta página» y enlaces anclados a cada sección.
- Asistente «¿Qué prueba uso?» para elegir la prueba estadística.
- Calculadora de pruebas diagnósticas con matriz de 1000 personas y valores predictivos según la prevalencia.
- Simuladores nuevos: potencia estadística, explorador de correlación, explorador de regresión, diagrama de seguimiento, diferenciación de series y forest plot.
- Test con 54 preguntas, explicación tras cada respuesta, filtro por bloques, opciones barajadas y repaso de las falladas.
- Fórmulas matemáticas con KaTeX.
- Página «Acerca de» con finalidad, privacidad, autoría y licencia.
- Pruebas automáticas de las funciones estadísticas e integración continua.

### Cambiado

- Contenidos migrados a MDX para poder editarlos sin tocar código.
- Todos los simuladores calculan los resultados a partir de datos simulados reproducibles: curva normal con puntuación Z, binomial y Poisson, intervalos de confianza, Kaplan-Meier con log-rank, descomposición de series temporales.
- Revisión de redacción y de precisión estadística en todos los temas.
- Actualización a Next.js 16, React 19 y Tailwind CSS 4; Biome sustituye a ESLint.

### Corregido

- El simulador de intervalos de confianza no dibujaba los intervalos.
- El tema «Análisis bivariante» no aparecía en el menú.
- La serie temporal de ejemplo no era la suma de sus componentes.

### Eliminado

- Material UI, Emotion, Recharts y react-icons.

## Versiones anteriores

Las versiones 0.0.1 a 0.0.4 (julio de 2025) corresponden al prototipo inicial.

[1.0.1]: https://github.com/adrian-ai-salud/EstadisticaParaSanitarios/releases/tag/v1.0.1
[1.0.0]: https://github.com/adrian-ai-salud/EstadisticaParaSanitarios/releases/tag/v1.0.0
