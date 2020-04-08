import * as React from "react";

import { MenuContainer, MenuLink, AnchorLink } from "./styles";

export const Menu = ({ className, data }) => {
  return (
    <MenuContainer className={className}>
      {data.map(({ slug, caption }, key) => {
        const linkProps = {
          to: slug,
          children: caption,
          key,
        };
        return slug.indexOf("#") == 0 ? <AnchorLink {...linkProps} /> : <MenuLink {...linkProps} />;
      })}
    </MenuContainer>
  );
};
