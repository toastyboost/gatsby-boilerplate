import styled from "styled-components";

import { Logo, Burger } from "~/components/atoms";

import { Menu } from "~/components/blocks";
import { Copyrights } from "../Copyrights";

import { MEDIA } from "~/helpers";

export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1001;
  opacity: ${p => (p.isVisible ? "1" : "0")};
  visibility: ${p => (p.isVisible ? "inherit" : "hidden")};
  transition: all 0.15s ease-in-out;
  cursor: pointer;

  ${MEDIA.PHONE`
    display: block;
  `}

  ${MEDIA.DESKTOP`
    display: none;
  `};
`;

export const Aside = styled.aside`
  opacity: ${p => (p.isVisible ? "1" : "0")};
  visibility: ${p => (p.isVisible ? "inherit" : "hidden")};
  transform: translateX(${p => (p.isVisible ? "0" : "-300px")});
  position: fixed;
  left: 0;
  top: 0;
  max-width: 286px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  transition: all 0.25s ease-in-out;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.2);
  z-index: 1004;
  background-color: #fff;

  ${MEDIA.PHONE`
    display: block;
  `}

  ${MEDIA.DESKTOP`
    display: none;
  `};
`;

export const AsideHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 36px);
  padding: 16px 0 15px 0;
  margin: 0 18px;
  border-bottom: 1px solid var(--border-color);
`;

export const AsideLogo = styled(Logo)``;

export const AsideBurger = styled(Burger)``;

export const AsideContent = styled.div`
  padding: 24px 18px;
  display: flex;
  flex-wrap: wrap;

  span {
    display: block;
    margin: 12px 0;
    font-size: 1.6rem;
  }
`;

export const AsideMenu = styled(Menu)`
  a {
    margin-left: 0;
    width: 100%;
  }
`;

export const AsideFooter = styled.div`
  margin-top: auto;
  width: 100%;
  padding: 0 18px 18px 18px;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const AsideCopy = styled(Copyrights)``;
