import React from "react";
import { Link as RouterLink } from "gatsby";

const Link = ({ children, className, to }) => (
  <RouterLink className={className} to={to} activeClassName="active">
    {children}
  </RouterLink>
);

export { Link };
