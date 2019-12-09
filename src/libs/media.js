import { css } from "styled-components";

import { BREAKPOINTS } from "~/libs/constants";

const defaults = {
  DESKTOP: () => css``,
  TABLET: () => css``,
  SMARTPHONE: () => css``,
  PHONE: () => css``,
};

export const MEDIA = Object.keys(BREAKPOINTS).reduce((acc, label) => {
  acc[label] = props => css`
    @media (min-width: ${BREAKPOINTS[label] / 16}em) {
      ${css(props)};
    }
  `;
  return acc;
}, defaults);
