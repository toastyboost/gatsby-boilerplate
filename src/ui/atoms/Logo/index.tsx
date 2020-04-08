import * as React from "react";

import { Link } from "../Link";
import { LogoContainer, LogoImg } from "./styles";

import LogoSVG from "~/static/logo.svg";

export const Logo = ({ className }) => (
  <LogoContainer className={className}>
    <Link to="/">
      <LogoImg src={LogoSVG} />
    </Link>
  </LogoContainer>
);
