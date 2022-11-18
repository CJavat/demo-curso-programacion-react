import React from "react";
import { Boton } from "./Boton";

export const Suscripcion = ({
  claseDiv,
  titulo,
  precio,
  descripcion,
  car1,
  car2,
  car3,
}) => {
  return (
    <div className={claseDiv}>
      <h3 className="item__titulo">{titulo}</h3>
      <h4 className="item__precio">{precio}</h4>
      <h4 className="item__descripcion">{descripcion}</h4>
      <p className="item__caracteristicas">{car1}</p>
      <p className="item__caracteristicas">{car2}</p>
      <p className="item__caracteristicas">{car3}</p>
      <Boton clase="item__boton" contenido="Pruébalo Ahora" />
    </div>
  );
};
