import React from "react";
import { Nav } from "./Nav";
import pm2Icon from "../imgs/svg/pm2-icon.svg";

export const Header = () => {
  return (
    <header className="cabecera">
      {/* LOGO */}
      <figure className="cabecera__figura">
        <img className="figura__logo" src={pm2Icon} alt="Logo" />
      </figure>

      {/* BARRA DE NAVEGACIÓN */}
      <Nav />
    </header>
  );
};
