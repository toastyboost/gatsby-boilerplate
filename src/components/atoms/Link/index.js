import React from "react";

import { RouterLink, AnchorLink } from "./styles";

export const Link = ({ children, className, to }) =>
  to.indexOf("#") !== -1 ? (
    <RouterLink className={className} to={to} activeClassName="active">
      {children}
    </RouterLink>
  ) : (
    <AnchorLink className={className} to={to}>
      {children}
    </AnchorLink>
  );
