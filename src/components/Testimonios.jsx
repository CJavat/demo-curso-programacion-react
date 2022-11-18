import React from "react";
import { TestimonioAlumno } from "./TestimonioAlumno";

import testimonio1 from "../imgs/testimonios/testimonio-1.jpg";
import testimonio2 from "../imgs/testimonios/testimonio-2.jpg";
import testimonio3 from "../imgs/testimonios/testimonio-3.jpg";
import testimonio4 from "../imgs/testimonios/testimonio-4.jpg";
import testimonio5 from "../imgs/testimonios/testimonio-5.jpg";

export const Testimonios = () => {
  return (
    <div class="inicio__testimonios">
      <h1 class="testimonios__titulo">TESTIMONIOS DE NUESTROS ALUMNOS</h1>
      <div class="testimonios__container">
        {/* TESTIMONIO DEL ALUMNO */}
        <TestimonioAlumno
          foto={testimonio1}
          altFoto="testimonio1"
          nombreAlumno="Oliver Plascencia"
        />
        <TestimonioAlumno
          foto={testimonio2}
          altFoto="testimonio2"
          nombreAlumno="Issac Plascencia"
        />
        <TestimonioAlumno
          foto={testimonio3}
          altFoto="testimonio3"
          nombreAlumno="Eliot Alderson"
        />
        <TestimonioAlumno
          foto={testimonio4}
          altFoto="testimonio4"
          nombreAlumno="Issa Gallegos"
        />
        <TestimonioAlumno
          foto={testimonio5}
          altFoto="testimonio5"
          nombreAlumno="Maria Vasquez"
        />
      </div>
    </div>
  );
};
