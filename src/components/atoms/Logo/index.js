import React from "react";

import { Link } from "../Link";
import { Container, LogoImg } from "./styles";

import LogoSVG from "~/static/logo.svg";

const Logo = ({ className }) => (
  <Container className={className}>
    <Link to="/">
      <LogoImg src={LogoSVG} />
    </Link>
  </Container>
);

export { Logo };
