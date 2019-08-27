import React from "react";

import { Main } from "./styles";

import { Header, Footer } from "~/components/sections";

const Layout = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);

export { Layout };
