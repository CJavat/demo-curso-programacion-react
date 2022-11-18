import React from "react";
import { FotoInstalacion } from "./FotoInstalacion";

import Instalacion1 from "../imgs/gallery/img1.jpg";
import Instalacion2 from "../imgs/gallery/img2.jpg";
import Instalacion3 from "../imgs/gallery/img3.jpg";
import Instalacion4 from "../imgs/gallery/img4.jpg";
import Instalacion5 from "../imgs/gallery/img5.jpg";
import Instalacion6 from "../imgs/gallery/img6.jpg";
import Instalacion7 from "../imgs/gallery/img7.jpg";
import Instalacion8 from "../imgs/gallery/img8.jpg";
import Instalacion9 from "../imgs/gallery/img9.jpg";

export const Instalaciones = () => {
  return (
    <div class="inicio__instalaciones">
      <h1 class="instalaciones__titulo">NUESTRAS INSTALACIONES</h1>
      <div class="instalaciones__container">
        <FotoInstalacion
          fotoDeInstalacion={Instalacion1}
          altInstalacion="Instalacion1"
        />
        <FotoInstalacion
          fotoDeInstalacion={Instalacion2}
          altInstalacion="Instalacion2"
        />
        <FotoInstalacion
          fotoDeInstalacion={Instalacion3}
          altInstalacion="Instalacion3"
        />
        <FotoInstalacion
          fotoDeInstalacion={Instalacion4}
          altInstalacion="Instalacion4"
        />
        <FotoInstalacion
          fotoDeInstalacion={Instalacion5}
          altInstalacion="Instalacion5"
        />
        <FotoInstalacion
          fotoDeInstalacion={Instalacion6}
          altInstalacion="Instalacion6"
        />
        <FotoInstalacion
          fotoDeInstalacion={Instalacion7}
          altInstalacion="Instalacion7"
        />
        <FotoInstalacion
          fotoDeInstalacion={Instalacion8}
          altInstalacion="Instalacion8"
        />
        <FotoInstalacion
          fotoDeInstalacion={Instalacion9}
          altInstalacion="Instalacion9"
        />
      </div>
    </div>
  );
};
