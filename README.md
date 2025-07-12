# BioStats Salud Pro

¡Bienvenido a BioStats Salud Pro! Esta aplicación está diseñada para capacitar a profesionales y estudiantes de ciencias de la salud en la comprensión, aplicación e interpretación de herramientas bioestadísticas esenciales.

## Estructura del Proyecto

Este proyecto está construido con [Next.js](https://nextjs.org/), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Material-UI (MUI)](https://mui.com/) para los componentes de UI, y [Recharts](https://recharts.org/) para la visualización de datos.

## Cómo Ejecutar la Aplicación Localmente

Para ejecutar la aplicación en tu máquina local, sigue estos pasos:

1.  **Navega al directorio del proyecto:**
    ```bash
    cd estadistica-para-sanitarios
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

    La aplicación estará disponible en `http://localhost:3000`.

## Despliegue en Netlify

Esta aplicación está configurada para un despliegue sencillo en Netlify. Sigue estos pasos:

1.  **Asegúrate de que tu código está en GitHub:**
    Si aún no lo has hecho, sube este proyecto a un repositorio de GitHub (como el que me proporcionaste: `https://github.com/adrian-ai-salud/EstadisticaParaSanitarios.git`).

2.  **Conecta Netlify a tu repositorio:**
    *   Ve a [Netlify](https://app.netlify.com/) y haz clic en "Add new site" -> "Import an existing project".
    *   Conecta tu cuenta de GitHub y selecciona el repositorio `EstadisticaParaSanitarios`.

3.  **Configura las opciones de despliegue:**
    Netlify debería detectar automáticamente que es un proyecto Next.js. Asegúrate de que las siguientes configuraciones sean correctas:
    *   **Build command:** `npm run build`
    *   **Publish directory:** `.next` (o `out` si usas `next export`)

4.  **Despliega:**
    Haz clic en "Deploy site". Netlify construirá y desplegará tu aplicación. Cada vez que hagas un `git push` a la rama principal, Netlify automáticamente actualizará tu sitio.

---

Creado por Adrián Vences Garrido
[LinkedIn](https://www.linkedin.com/in/adri%C3%A1n-vences-garrido-513872324/)