import * as React from "react";

import { AnchorLink } from "./styles";

export const Anchor = ({ children, className, to }) => {
  const handleClick = () => {
    const ref = document.querySelector(to);
    ref.scrollIntoView({ block: "center", behavior: "smooth" });
  };

  return (
    <AnchorLink className={className} onClick={handleClick}>
      {children}
    </AnchorLink>
  );
};
