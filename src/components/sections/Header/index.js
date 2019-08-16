import React from "react";

import { Logo } from "~/components/atoms";
import { Container, Wrapper } from "./styles";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo />
      </Wrapper>
    </Container>
  );
};

export { Header };
