import * as React from "react";
import styled from "styled-components";

const todayYear = new Date().getFullYear();

export const Footer = () => {
  return <FooterContainer id="footer">© 2013 – {todayYear}</FooterContainer>;
};

const FooterContainer = styled.footer`
  background-color: rgba(0, 0, 0, 0.05);
  padding: 12px;
`;
