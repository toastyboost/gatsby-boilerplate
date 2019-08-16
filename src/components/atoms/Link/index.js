import React from "react";

import { RouterLink } from "./styles";

const Link = ({ children, className, to }) => (
  <RouterLink className={className} to={to} activeClassName="active">
    {children}
  </RouterLink>
);

export { Link };
