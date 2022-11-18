import React from "react";
import { CardsProfesores } from "./CardsProfesores";

export const Profesores = () => {
  return (
    <div class="inicio__profesores">
      <h1 class="profesores__titulo">TENEMOS A LOS MEJORES PROFESORES</h1>
      <div class="profesores__contenedor">
        {/* CARDS */}
        <CardsProfesores
          foto={require("../imgs/profesores/profesor1.jpg")}
          alt="Daniel Plascencia"
          nombre="Daniel Plascencia"
          especialidad="Programador Front-End"
        />
        <CardsProfesores
          foto={require("../imgs/profesores/profesor2.jpg")}
          alt="Carlos Mercado"
          nombre="Carlos Mercado"
          especialidad="Programador Back-End"
        />
        <CardsProfesores
          foto={require("../imgs/profesores/profesor3.jpg")}
          alt="Javato Ibarra"
          nombre="Javato Ibarra"
          especialidad="Programador FullStack"
        />
        <CardsProfesores
          foto={require("../imgs/profesores/profesor4.jpg")}
          alt="Javat Alderson"
          nombre="Javat Alderson"
          especialidad="UI / UX Designer"
        />
      </div>
    </div>
  );
};
