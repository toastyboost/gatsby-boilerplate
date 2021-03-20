import * as React from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby-plugin-intl";

type LinkProps = {
  className?: string;
  activeClassName?: string;
  to?: string;
  target?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export const Link: React.FC<LinkProps> = ({
  children,
  className,
  activeClassName,
  to = "",
  target,
  onClick,
}) => {
  const internal = to && /^\/(?!\/)/.test(to);

  return internal ? (
    <RouterLink
      className={className}
      to={to}
      activeClassName={activeClassName}
      onClick={onClick}
    >
      {children}
    </RouterLink>
  ) : (
    <ExternalLink
      className={className}
      href={to}
      target={target}
      onClick={onClick}
    >
      {children}
    </ExternalLink>
  );
};

const RouterLink = styled(GatsbyLink)`
  &:hover {
    color: var(--link-hover);
  }

  &[aria-current="page"] {
    color: var(--link-active);
  }
`;

const ExternalLink = styled.a`
  &:hover {
    color: var(--link-hover);
  }
`;
