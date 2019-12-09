import * as React from "react";

import { RouterLink, ExternalLink } from "./styles";

export const Link = ({ children, className, activeClassName, to, target, onClick }) => {
  const internal = /^\/(?!\/)/.test(to);

  return internal ? (
    <RouterLink className={className} to={to} activeClassName={activeClassName} onClick={onClick}>
      {children}
    </RouterLink>
  ) : (
    <ExternalLink className={className} href={to} target={target} onClick={onClick}>
      {children}
    </ExternalLink>
  );
};
