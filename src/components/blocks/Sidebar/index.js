import React from "react";

import { HEADER_LINKS } from "~/helpers/constants";

import {
  //
  Background,
  Aside,
  AsideHeader,
  AsideLogo,
  AsideBurger,
  AsideContent,
  AsideMenu,
  AsideFooter,
  AsideCopy,
} from "./styles";

export const Sidebar = ({ className, isVisible, toggler }) => {
  return (
    <>
      <Background isVisible={isVisible} className={className} onClick={() => toggler(!isVisible)} />
      <Aside isVisible={isVisible}>
        <AsideHeader>
          <AsideBurger isVisible={isVisible} onClick={() => toggler(!isVisible)} />
          <AsideLogo />
        </AsideHeader>
        <AsideContent>
          <AsideMenu data={HEADER_LINKS} onClick={() => toggler(!isVisible)} />
        </AsideContent>
        <AsideFooter>
          <AsideCopy />
        </AsideFooter>
      </Aside>
    </>
  );
};
