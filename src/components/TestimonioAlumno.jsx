import React from "react";

export const TestimonioAlumno = ({ foto, altFoto, nombreAlumno }) => {
  return (
    <div className="testimonios__alumnos">
      <img className="alumnos__foto" src={foto} alt={altFoto} />
      <h3 className="alumnos__nombre">{nombreAlumno}</h3>
      <p className="alumnos__testimonio">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sunt,
        accusamus id debitis vero excepturi rerum vel, necessitatibus deleniti
        harum dolore, consequuntur error nesciunt reprehenderit eaque cupiditate
        beatae labore quas!
      </p>
    </div>
  );
};
