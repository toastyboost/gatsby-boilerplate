import * as React from "react";

import { StyledBurgerContainer, StyledBurgerBox, StyledBurgerInner } from "./styles";

export const Burger = ({ className, ...props }) => {
  const { isVisible, onClick } = props;

  return (
    <StyledBurgerContainer className={className} onClick={onClick}>
      <StyledBurgerBox>
        <StyledBurgerInner isActive={isVisible} />
      </StyledBurgerBox>
    </StyledBurgerContainer>
  );
};
