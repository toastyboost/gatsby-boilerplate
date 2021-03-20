import * as React from "react";
import styled from "styled-components";

import { Logo } from "src/ui/atoms";
import { Menu } from "src/ui/molecules";

const headerData = [
  {
    slug: "#footer",
    caption: "Anchor",
  },
  {
    slug: "404",
    caption: "404 page",
  },
];

export const Header = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <Logo />
        <Menu data={headerData} />
      </Wrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: rgba(0, 0, 0, 0.05);
  padding: 12px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
