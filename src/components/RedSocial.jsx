import React from "react";

export const RedSocial = ({ rutaIcono, altIcono }) => {
  return (
    <a href="/#" class="social__link">
      <img src={rutaIcono} alt={altIcono} />
    </a>
  );
};
