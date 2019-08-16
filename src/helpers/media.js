import { css } from "styled-components";

import { BREAKPOINTS } from "./constants";

const MEDIA = Object.keys(BREAKPOINTS).reduce((acc, label) => {
  acc[`MAX_${label}`] = (...args) => css`
    @media (max-width: ${BREAKPOINTS[label] / 16}em) {
      ${css(...args)};
    }
  `;

  acc[label] = (...args) => css`
    @media (min-width: ${BREAKPOINTS[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export { MEDIA };
