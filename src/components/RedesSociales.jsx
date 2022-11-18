import React from "react";
import { RedSocial } from "./RedSocial";

import twitter from "../imgs/svg/twitter.svg";
import instagram from "../imgs/svg/instagram-icon.svg";
import youtube from "../imgs/svg/youtube-icon.svg";

export const RedesSociales = () => {
  return (
    <div class="pie__social">
      <RedSocial rutaIcono={twitter} altIcono="Twitter" />
      <RedSocial rutaIcono={instagram} altIcono="Instagram" />
      <RedSocial rutaIcono={youtube} altIcono="YouTube" />
    </div>
  );
};
