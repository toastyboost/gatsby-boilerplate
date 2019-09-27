import React from "react";

import { MenuContainer, MenuLink } from "./styles";

export const Menu = ({ className, data }) => {
  return (
    <MenuContainer className={className}>
      {data.map(({ slug, caption }, key) => (
        <MenuLink key={key} to={`/${slug}`}>
          {caption}
        </MenuLink>
      ))}
    </MenuContainer>
  );
};
