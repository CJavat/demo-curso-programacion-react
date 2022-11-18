import React from "react";
import { Copyright } from "./Copyright";
import { RedesSociales } from "./RedesSociales";

export const Footer = () => {
  return (
    <footer class="pie">
      {/* REDES SOCIALES */}
      <RedesSociales />

      {/* COPYRIGHT */}
      <Copyright />
    </footer>
  );
};
