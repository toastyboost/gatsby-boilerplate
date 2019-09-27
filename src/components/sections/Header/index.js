import React from "react";

import { Logo } from "~/components/atoms";
import { HeaderContainer, Wrapper } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <Logo />
      </Wrapper>
    </HeaderContainer>
  );
};

export { Header };
