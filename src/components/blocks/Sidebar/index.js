import React from "react";

import {
  //
  AsideBackground,
  Aside,
  AsideHeader,
  AsideBurger,
  AsideContent,
} from "./styles";

export const Sidebar = ({ className, isVisible, toggler }) => {
  return (
    <>
      <AsideBackground isVisible={isVisible} className={className} onClick={() => toggler(!isVisible)} />
      <Aside isVisible={isVisible}>
        <AsideHeader>
          <AsideBurger isVisible={isVisible} onClick={() => toggler(!isVisible)} />
        </AsideHeader>
        <AsideContent>Content</AsideContent>
      </Aside>
    </>
  );
};
