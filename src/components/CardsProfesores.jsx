import React from "react";
import { Boton } from "./Boton";

export const CardsProfesores = (props) => {
  return (
    <div className="profesores__cards">
      <img className="cards__foto" src={props.foto} alt={props.alt} />
      <h3 className="cards__nombre">{props.nombre}</h3>
      <p className="cards__especialidad">{props.especialidad}</p>
      <Boton clase="cards__mas-informacion" contenido="Más Información" />
    </div>
  );
};
