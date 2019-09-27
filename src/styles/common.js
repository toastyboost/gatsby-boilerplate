import styled, { css } from "styled-components";

import { BREAKPOINTS } from "~/helpers/constants";

export const MEDIA = Object.keys(BREAKPOINTS).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${BREAKPOINTS[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export const Wrap = styled.div`
  width: 100%;
  margin: 0 auto;

  ${MEDIA.PHONE`
    padding: 0 8px;
  `}

  ${MEDIA.TABLET`
    padding: 0 12px;
  `}

  ${MEDIA.DESKTOP`
    padding: 0 16px;
  `};
`;

export const Content = styled.div`
  display: flex;
`;

export const Header = styled.div`
  display: flex;
`;

export const Block = styled.div`
  display: flex;
`;

export const Title = styled.div`
  display: flex;
`;

export const Text = styled.div`
  display: flex;
`;

export const Button = styled.div`
  display: flex;
`;
