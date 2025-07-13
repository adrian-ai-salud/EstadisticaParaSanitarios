'use client';

import React from 'react';
import PageTitle from '@/components/PageTitle';
import ContentCard from '@/components/ContentCard';

export default function TiposDeVariablesPage() {
  return (
    <div>
      <PageTitle title="Tipos de Variables: La Base para Entender tus Datos" />

      <ContentCard title="El Caso Clínico: El Estudio de la Diabetes">
        <p>
          Imagina que estás en una consulta de atención primaria y quieres entender mejor los factores asociados a la diabetes tipo 2 en tus pacientes. Decides recoger algunos datos para analizarlos. Esta información que recoges son tus <strong>variables</strong>.
        </p>
        <p>
          Entender qué tipo de variable tienes es el primer paso para saber qué análisis puedes hacer. No puedes calcular la &apos;media&apos; del grupo sanguíneo, ¿verdad? ¡Vamos a clasificarlas!
        </p>
      </ContentCard>

      <ContentCard title="1. Variables Cualitativas (o Categóricas)">
        <h4 className="text-lg font-semibold text-title-dark mb-2">Describen una cualidad o característica.</h4>
        <h5 className="text-md font-semibold text-gray-700 mb-1">a) Nominales</h5>
        <p className="mb-2">
          Son etiquetas sin un orden inherente. Solo puedes contar cuántos pacientes hay en cada categoría.
        </p>
        <p className="text-sm text-gray-600 mb-4">
          <strong>Ejemplos en tu estudio:</strong> Grupo Sanguíneo (A, B, AB, O), Sexo (Hombre, Mujer), Fumador (Sí/No).
        </p>

        <h5 className="text-md font-semibold text-gray-700 mb-1">b) Ordinales</h5>
        <p className="mb-2">
          Estas sí tienen un orden o jerarquía, pero la distancia entre las categorías no es uniforme o medible.
        </p>
        <p className="text-sm text-gray-600">
          <strong>Ejemplos en tu estudio:</strong> Nivel de Dolor (Leve, Moderado, Severo), Estadio de una enfermedad (I, II, III, IV), Nivel socioeconómico (Bajo, Medio, Alto).
        </p>
      </ContentCard>

      <ContentCard title="2. Variables Cuantitativas (o Numéricas)">
        <h4 className="text-lg font-semibold text-title-dark mb-2">Miden una cantidad.</h4>
        <h5 className="text-md font-semibold text-gray-700 mb-1">a) Discretas</h5>
        <p className="mb-2">
          Son números enteros que provienen de un conteo. No puedes tener &apos;2.5 hijos&apos;.
        </p>
        <p className="text-sm text-gray-600 mb-4">
          <strong>Ejemplos en tu estudio:</strong> Número de ingresos hospitalarios previos, Número de hijos, Días de estancia hospitalaria.
        </p>

        <h5 className="text-md font-semibold text-gray-700 mb-1">b) Continuas</h5>
        <p className="mb-2">
          Pueden tomar cualquier valor dentro de un rango. Provienen de una medición.
        </p>
        <p className="text-sm text-gray-600">
          <strong>Ejemplos en tu estudio:</strong> Nivel de Glucosa en sangre (mg/dL), Tensión Arterial (mmHg), Edad, Peso (kg), Altura (cm).
        </p>
      </ContentCard>
    </div>
  );
}
