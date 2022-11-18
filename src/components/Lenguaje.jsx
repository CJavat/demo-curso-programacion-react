import React from "react";

export const Lenguaje = ({ ruta, altText }) => {
  return (
    <div class="lenguajes__items">
      <img src={ruta} alt={altText} />
    </div>
  );
};
