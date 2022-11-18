import React from "react";
import waveIcon from "../imgs/svg/wave.svg";
import { Boton } from "./Boton";

export const Presentacion = () => {
  return (
    <div class="inicio__presentacion">
      <h2 class="presentacion__titulo contenido">BIENVENIDO A CJAVAT</h2>
      <p class="presentacion__descripcion contenido">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusantium
        possimus dolore, aliquam distinctio pariatur sapiente provident eos
        culpa neque quo quibusdam magnam ex molestiae ipsam recusandae error
        fuga! Modi!
      </p>
      {/* Boton */}
      <Boton clase="presentacion__boton contenido" contenido="REGISTRARSE" />
      {/* SVG ICON */}
      <img className="presentacion__waves" src={waveIcon} alt="Wave Icon" />
    </div>
  );
};
