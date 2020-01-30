import * as React from "react";

import { Header, Footer } from "~/ui/organisms";
import { GlobalStyles } from "~/styles";

import { Main } from "./styles";

export const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  </>
);
