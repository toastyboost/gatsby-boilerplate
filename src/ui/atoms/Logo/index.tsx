import * as React from "react";
import styled from "styled-components";

import { Link } from "../Link";

type LogoPrrops = {
  className?: string;
};

export const Logo: React.FC<LogoPrrops> = ({ className }) => (
  <LogoContainer className={className}>
    <Link to="/">Logo</Link>
  </LogoContainer>
);

const LogoContainer = styled.div`
  width: 32px;
  height: 32px;

  &:hover {
    opacity: 0.8;
  }
`;
