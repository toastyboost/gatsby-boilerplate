import * as React from "react";
import styled from "styled-components";

import { Link } from "src/ui/atoms";

type MenuProps = {
  className?: string;
  data: { slug: string; caption: string }[];
};

export const Menu: React.FC<MenuProps> = ({ className, data }) => {
  return (
    <MenuContainer className={className}>
      {data.map(({ slug, caption }, key) => {
        return <MenuLink key={key} to={slug} children={caption} />;
      })}
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  display: flex;
`;

const MenuLink = styled(Link)`
  margin: 0 16px;
`;
