import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

export const RouterLink = styled(GatsbyLink)`
  display: inline-block;
  color: var(--link-active);

  &:hover {
    color: var(--link-hover);
  }
`;

export const AnchorLink = styled.div``;
