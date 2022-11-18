import React from "react";
import { Suscripcion } from "./Suscripcion";

export const Suscripciones = () => {
  return (
    <div class="inicio__suscripciones">
      <h1 class="suscripciones__titulo">SUSCRIBETE AHORA</h1>
      <p class="suscripciones__descripcion">¡Oferta por tiempo limitado!</p>
      <div class="suscripciones__container">
        {/* ITEM SUSCRIPCIONES */}
        <Suscripcion
          claseDiv="suscripciones__item"
          titulo="Básico"
          precio="Gratis"
          descripcion="Hasta 5 personas por plan."
          car1="Caracteristica 1"
          car2="Caracteristica 2"
          car3="Caracteristica 3"
        />
        <Suscripcion
          claseDiv="suscripciones__item suscripciones__item--especial"
          titulo="Intermedio"
          precio="$9.99"
          descripcion="Hasta 35 personas por plan."
          car1="Caracteristica 1"
          car2="Caracteristica 2"
          car3="Caracteristica 3"
        />
        <Suscripcion
          claseDiv="suscripciones__item"
          titulo="Profesional"
          precio="$19.99"
          descripcion="Hasta 50 personas por plan."
          car1="Caracteristica 1"
          car2="Caracteristica 2"
          car3="Caracteristica 3"
        />
      </div>
    </div>
  );
};
