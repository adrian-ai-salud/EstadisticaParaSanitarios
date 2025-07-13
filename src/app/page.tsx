
import PageTitle from '@/components/PageTitle';
import ContentCard from '@/components/ContentCard';
import Image from 'next/image';


export default function Home() {
  return (
    <main>
      <PageTitle 
        title="Bienvenido a BioEstadística para Sanitarios"
        subtitle="Tu guía práctica para entender y aplicar la estadística en el ámbito de la salud."
      />

      <ContentCard title="¿Qué encontrarás en esta aplicación?">
        <p className="mb-4">
          Esta aplicación ha sido diseñada específicamente para profesionales y estudiantes del ámbito sanitario que desean comprender y aplicar los conceptos fundamentales de la bioestadística de una manera clara y accesible.
        </p>
        <p>
          Aquí desglosamos temas complejos en explicaciones sencillas, casos clínicos relevantes y ejemplos prácticos, para que puedas tomar decisiones basadas en evidencia y mejorar tu práctica diaria.
        </p>
      </ContentCard>

      <ContentCard title="Explora nuestros módulos:">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Fundamentos:</strong> Desde la introducción a la probabilidad hasta los tipos de variables y el análisis bivariante.</li>
          <li><strong>Distribuciones de Probabilidad:</strong> Comprende la distribución normal y las distribuciones discretas.</li>
          <li><strong>Inferencia Estadística:</strong> Aprende sobre intervalos de confianza y contraste de hipótesis.</li>
          <li><strong>Pruebas Estadísticas:</strong> Diferencia entre pruebas paramétricas y no paramétricas.</li>
          <li><strong>Modelos Avanzados:</strong> Explora modelos de clasificación y regresión lineal múltiple.</li>
          <li><strong>Análisis de Supervivencia:</strong> Conceptos clave, curvas de Kaplan-Meier y el modelo de Cox.</li>
          <li><strong>Series Temporales:</strong> Componentes y modelos ARIMA.</li>
        </ul>
      </ContentCard>

      <ContentCard>
        <h2 className="text-2xl font-semibold text-title-dark mb-4">La estadística al servicio de tu práctica clínica</h2>
        <p className="mb-4">
          Nuestro objetivo es desmitificar la estadística, convirtiéndola en una herramienta poderosa y comprensible para todos los sanitarios. ¡Empieza a explorar y fortalece tus habilidades analíticas!
        </p>
        <div className="flex justify-center mt-6">
          <Image 
            src="/images/imagen-app.png" 
            alt="Gráfico estadístico" 
            width={500} 
            height={300} 
            className="rounded-lg shadow-md"
          />
        </div>
      </ContentCard>
    </main>
  );
}
