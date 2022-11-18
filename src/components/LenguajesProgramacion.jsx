import React from "react";
import { Lenguaje } from "./Lenguaje";

import HTML5 from "../imgs/svg/html-5.svg";
import CSS3 from "../imgs/svg/css-3.svg";
import JavaScript from "../imgs/svg/javascript.svg";
import ReactJS from "../imgs/svg/react.svg";
import NodeJS from "../imgs/svg/nodejs-icon.svg";
import GitHub from "../imgs/svg/github-icon.svg";

export const LenguajesProgramacion = () => {
  return (
    <div className="inicio__lenguajes">
      <h1 className="lenguajes__titulo">LENGUAJES DE PROGRAMACIÓN</h1>
      <div className="lenguajes__container">
        <Lenguaje ruta={HTML5} altText="HTML5" />
        <Lenguaje ruta={CSS3} altText="CCS3" />
        <Lenguaje ruta={JavaScript} altText="JavaScript" />
        <Lenguaje ruta={ReactJS} altText="ReactJS" />
        <Lenguaje ruta={NodeJS} altText="NodeJS" />
        <Lenguaje ruta={GitHub} altText="GitHub" />
      </div>
    </div>
  );
};
