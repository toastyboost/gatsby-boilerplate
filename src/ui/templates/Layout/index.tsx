import * as React from "react";
import styled from "styled-components";

import { Header, Footer } from "src/ui/organisms";

export const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);

const Main = styled.main``;
