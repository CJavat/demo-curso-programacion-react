import React from "react";
import { Instalaciones } from "./Instalaciones";
import { LenguajesProgramacion } from "./LenguajesProgramacion";
import { Presentacion } from "./Presentacion";
import { Profesores } from "./Profesores";
import { Suscripciones } from "./Suscripciones";
import { Testimonios } from "./Testimonios";

export const Main = () => {
  return (
    <main class="inicio">
      {/* APARTADO: PRESENTACIÓN */}
      <Presentacion />

      {/* APARTADO: PROFESORES */}
      <Profesores />

      {/* APARTADO: LENGUAJES DE PROGRAMACIÓN */}
      <LenguajesProgramacion />

      {/* APARTADO: INSTALACIONES */}
      <Instalaciones />

      {/* APARTADO: TESTIMONIOS DE ALUMNOS */}
      <Testimonios />

      {/* APARTADO: PRECIO DE SUSCRIPCIONES */}
      <Suscripciones />
    </main>
  );
};
