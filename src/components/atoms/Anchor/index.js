import * as React from "react";

import scrollToComponent from "react-scroll-to-component";

import { AnchorLink } from "./styles";

export const Anchor = ({ children, className, to }) => {
  const handleClick = () => {
    const ref = document.querySelector(to);
    scrollToComponent(ref, {
      align: "bottom",
      duration: 1500,
    });
  };

  return (
    <AnchorLink className={className} onClick={handleClick}>
      {children}
    </AnchorLink>
  );
};
